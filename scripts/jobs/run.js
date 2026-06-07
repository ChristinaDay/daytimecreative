#!/usr/bin/env node
// Job discovery pipeline — Weeks 1 + 2.
// Pulls from 3 keyless sources, dedupes, scores fresh listings with Claude Haiku,
// writes a markdown digest grouped by fit tier.
//
//   node scripts/jobs/run.js                # normal run (fetch + score + digest)
//   node scripts/jobs/run.js --reset        # wipe dedup state, re-emit all
//   node scripts/jobs/run.js --no-score     # skip LLM scoring (offline mode)
//   node scripts/jobs/run.js --limit 10     # cap scored jobs (cost control)

const fs = require('fs');
const { fetchRemoteOK } = require('./sources/remoteok');
const { fetchHackerNews } = require('./sources/hackernews');
const { fetchWeWorkRemotely } = require('./sources/weworkremotely');
const { dedupe, persistScores, SEEN_FILE } = require('./dedup');
const { renderDigest, writeDigest } = require('./digest');
const { scoreJobs, estimateCost } = require('./score');
const { recordRun } = require('./spend');

const SOURCES = [
  { name: 'remoteok', fn: fetchRemoteOK },
  { name: 'hackernews', fn: fetchHackerNews },
  { name: 'weworkremotely', fn: fetchWeWorkRemotely },
];

function parseArgs(argv) {
  const args = { reset: false, score: true, limit: Infinity };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--reset') args.reset = true;
    else if (a === '--no-score') args.score = false;
    else if (a === '--limit') args.limit = parseInt(argv[++i], 10);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.reset) {
    try { fs.unlinkSync(SEEN_FILE); console.log('Cleared dedup state.'); } catch {}
  }

  // 1. Fetch from each source
  const all = [];
  const errors = [];
  for (const s of SOURCES) {
    const t0 = Date.now();
    try {
      const items = await s.fn();
      console.log(`[${s.name}] ${items.length} listings (${Date.now() - t0}ms)`);
      all.push(...items);
    } catch (e) {
      const msg = `${s.name}: ${e.message}`;
      console.error('[error]', msg);
      errors.push(msg);
    }
  }

  // 2. Dedupe
  const { fresh, totalSeen } = dedupe(all);
  console.log(`Fetched ${all.length} total, ${fresh.length} new since last run. Tracked total: ${totalSeen}.`);

  // 3. Score (or skip)
  let scoredJobs = fresh;
  const meta = { sourcesAttempted: SOURCES.length, totalSeen, errors };

  if (args.score && fresh.length > 0) {
    console.log(`Scoring ${Math.min(fresh.length, args.limit)} listings with Claude…`);
    try {
      const { scored, totals } = await scoreJobs(fresh, { limit: args.limit, verbose: true });
      scoredJobs = scored;
      persistScores(scored);
      const cost = estimateCost(totals);
      const totalCacheable = totals.cache_read_input_tokens + totals.cache_creation_input_tokens;
      const hitRate = totalCacheable > 0
        ? (totals.cache_read_input_tokens / totalCacheable * 100).toFixed(0) + '%'
        : 'n/a';
      meta.scoringRequests = totals.requests;
      meta.scoringCost = cost;
      meta.cacheHitRate = hitRate;

      // Append to the persistent spend ledger and surface the running total.
      const spend = recordRun({ costUsd: cost, totals, cacheHitRate: hitRate, jobsScored: totals.requests });
      meta.totalSpend = spend.totalCostUsd;
      meta.totalRuns = spend.runCount;

      console.log(`Scoring done. Cost: ~$${cost.toFixed(4)} · cache hit rate: ${hitRate}`);
      console.log(`Lifetime spend: ~$${spend.totalCostUsd.toFixed(4)} across ${spend.runCount} run(s).`);
    } catch (e) {
      console.error('[score:error]', e.message);
      errors.push(`scoring: ${e.message}`);
    }
  } else if (!args.score) {
    console.log('Skipping LLM scoring (--no-score).');
  }

  // 4. Render digest
  const md = renderDigest(scoredJobs, meta);
  const file = writeDigest(md);
  console.log(`Digest written: ${file}`);
}

main().catch((e) => { console.error(e); process.exit(1); });

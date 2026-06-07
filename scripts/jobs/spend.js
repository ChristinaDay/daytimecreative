// Persistent spend ledger for the job pipeline's LLM usage.
// Every scored run appends an entry and we keep running cumulative totals,
// so the cost of the pipeline is auditable over time (not just per-run).

const fs = require('fs');
const path = require('path');

const SPEND_FILE = path.join(__dirname, '..', '..', 'data', 'spend.json');

const EMPTY_TOTALS = {
  requests: 0,
  input_tokens: 0,
  output_tokens: 0,
  cache_creation_input_tokens: 0,
  cache_read_input_tokens: 0,
};

function loadLedger() {
  try {
    const raw = JSON.parse(fs.readFileSync(SPEND_FILE, 'utf8'));
    return {
      totalCostUsd: raw.totalCostUsd || 0,
      totals: { ...EMPTY_TOTALS, ...(raw.totals || {}) },
      runs: Array.isArray(raw.runs) ? raw.runs : [],
    };
  } catch {
    return { totalCostUsd: 0, totals: { ...EMPTY_TOTALS }, runs: [] };
  }
}

function saveLedger(ledger) {
  fs.mkdirSync(path.dirname(SPEND_FILE), { recursive: true });
  fs.writeFileSync(SPEND_FILE, JSON.stringify(ledger, null, 2));
}

// Append one scored run to the ledger and return the updated cumulative view.
// `run` shape: { costUsd, totals, cacheHitRate, jobsScored }
function recordRun(run) {
  const ledger = loadLedger();
  const totals = run.totals || {};
  const entry = {
    timestamp: new Date().toISOString(),
    costUsd: round(run.costUsd || 0),
    jobsScored: run.jobsScored ?? totals.requests ?? 0,
    cacheHitRate: run.cacheHitRate ?? null,
    tokens: {
      input: totals.input_tokens || 0,
      output: totals.output_tokens || 0,
      cacheWrite: totals.cache_creation_input_tokens || 0,
      cacheRead: totals.cache_read_input_tokens || 0,
    },
  };

  ledger.runs.push(entry);
  ledger.totalCostUsd = round(ledger.totalCostUsd + entry.costUsd);
  ledger.totals.requests += totals.requests || 0;
  ledger.totals.input_tokens += totals.input_tokens || 0;
  ledger.totals.output_tokens += totals.output_tokens || 0;
  ledger.totals.cache_creation_input_tokens += totals.cache_creation_input_tokens || 0;
  ledger.totals.cache_read_input_tokens += totals.cache_read_input_tokens || 0;
  saveLedger(ledger);

  return summarize(ledger, entry);
}

function summarize(ledger = loadLedger(), lastEntry = null) {
  return {
    runCount: ledger.runs.length,
    totalCostUsd: ledger.totalCostUsd,
    totals: ledger.totals,
    firstRun: ledger.runs[0]?.timestamp || null,
    lastEntry: lastEntry || ledger.runs[ledger.runs.length - 1] || null,
  };
}

function round(n) {
  return Math.round(n * 1e6) / 1e6;
}

function printReport() {
  const ledger = loadLedger();
  if (ledger.runs.length === 0) {
    console.log('No scored runs recorded yet.');
    return;
  }
  const s = summarize(ledger);
  const t = s.totals;
  console.log('Job pipeline — LLM spend ledger');
  console.log('────────────────────────────────');
  console.log(`Runs:           ${s.runCount}`);
  console.log(`Lifetime cost:  ~$${s.totalCostUsd.toFixed(4)}`);
  console.log(`Jobs scored:    ${t.requests}`);
  console.log(`Tokens in/out:  ${t.input_tokens.toLocaleString()} / ${t.output_tokens.toLocaleString()}`);
  console.log(`Cache wr/rd:    ${t.cache_creation_input_tokens.toLocaleString()} / ${t.cache_read_input_tokens.toLocaleString()}`);
  console.log('');
  console.log('Recent runs:');
  for (const r of ledger.runs.slice(-10)) {
    const date = (r.timestamp || '').slice(0, 16).replace('T', ' ');
    const flag = r.backfilled ? ' (backfilled)' : '';
    console.log(`  ${date}  ~$${r.costUsd.toFixed(4)}  ${r.jobsScored} jobs  cache ${r.cacheHitRate ?? 'n/a'}${flag}`);
  }
}

if (require.main === module) printReport();

module.exports = { recordRun, summarize, loadLedger, printReport, SPEND_FILE };

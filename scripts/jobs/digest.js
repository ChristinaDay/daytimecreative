// Render fresh listings to a human-readable markdown digest.
// Week 2: scored listings are grouped by tier and sorted by score within tier.

const fs = require('fs');
const path = require('path');

function stripHtml(html) {
  return String(html || '')
    .replace(/<p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#x27;/g, "'").replace(/&#x2F;/g, '/').replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function snippet(job, max = 240) {
  const text = stripHtml(job.descriptionHtml);
  if (!text) return '';
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
}

function tierFor(score) {
  if (score == null) return 'unscored';
  if (score >= 80) return 'strong';   // top of the queue
  if (score >= 60) return 'plausible';
  if (score >= 40) return 'stretch';
  return 'misfit';
}

const TIER_ORDER = ['strong', 'plausible', 'stretch', 'misfit', 'unscored'];
const TIER_LABEL = {
  strong: 'Strong fits (80+)',
  plausible: 'Plausible (60–79)',
  stretch: 'Stretches (40–59)',
  misfit: 'Misfits (<40)',
  unscored: 'Unscored',
};

function renderJob(job) {
  const lines = [];
  const tagStr = job.tags && job.tags.length ? ` _[${job.tags.slice(0, 6).join(', ')}]_` : '';
  const scoreBadge = job.score != null ? `**${job.score}** · ` : '';
  lines.push(`### ${scoreBadge}[${job.title}](${job.url}) — ${job.company}`);
  lines.push(`*${job.location || 'Unknown location'}* · ${job.source} · ${job.postedAt ? job.postedAt.slice(0, 10) : 'no date'}${tagStr}`);
  if (job.rationale) {
    lines.push('');
    lines.push(`> **Fit:** ${job.rationale}`);
  }
  const s = snippet(job);
  if (s) {
    lines.push('');
    lines.push('> ' + s.replace(/\n+/g, ' '));
  }
  lines.push('');
  return lines.join('\n');
}

function renderDigest(jobs, meta) {
  const date = new Date().toISOString().slice(0, 10);
  const lines = [];
  lines.push(`# Job digest — ${date}`);
  lines.push('');

  // Group by tier
  const tiers = Object.fromEntries(TIER_ORDER.map((t) => [t, []]));
  for (const j of jobs) tiers[tierFor(j.score)].push(j);
  for (const t of TIER_ORDER) {
    tiers[t].sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
  }

  const counts = TIER_ORDER.map((t) => `${tiers[t].length} ${t}`).join(' · ');
  lines.push(`**${jobs.length}** new listings across **${meta.sourcesAttempted}** sources — ${counts}. Total tracked: ${meta.totalSeen}.`);
  if (meta.scoringCost != null) {
    lines.push('');
    let costLine = `_Scoring: ${meta.scoringRequests} jobs · ~$${meta.scoringCost.toFixed(4)} · cache hit rate: ${meta.cacheHitRate}`;
    if (meta.totalSpend != null) {
      costLine += ` · lifetime: ~$${meta.totalSpend.toFixed(4)} over ${meta.totalRuns} run${meta.totalRuns === 1 ? '' : 's'}`;
    }
    costLine += '_';
    lines.push(costLine);
  }
  lines.push('');
  if (meta.errors && meta.errors.length) {
    lines.push('> Source errors:');
    for (const e of meta.errors) lines.push(`> - ${e}`);
    lines.push('');
  }
  if (jobs.length === 0) {
    lines.push('_No new listings since last run._');
    return lines.join('\n');
  }

  for (const t of TIER_ORDER) {
    const items = tiers[t];
    if (items.length === 0) continue;
    lines.push(`## ${TIER_LABEL[t]} (${items.length})`);
    lines.push('');
    for (const j of items) lines.push(renderJob(j));
  }
  return lines.join('\n');
}

function writeDigest(markdown) {
  const dir = path.join(__dirname, '..', '..', 'data', 'digests');
  fs.mkdirSync(dir, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  const file = path.join(dir, `${date}.md`);
  fs.writeFileSync(file, markdown);
  const latest = path.join(dir, 'latest.md');
  fs.writeFileSync(latest, markdown);
  return file;
}

module.exports = { renderDigest, writeDigest, tierFor };

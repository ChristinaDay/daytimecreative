// Persistent dedup via a JSON file. SQLite arrives in Week 3 with the dashboard.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SEEN_FILE = path.join(__dirname, '..', '..', 'data', 'seen-jobs.json');

function fingerprint(job) {
  // Stable across reruns; source+sourceId is most reliable when present,
  // otherwise fall back to a normalized company+title hash.
  if (job.source && job.sourceId) return `${job.source}:${job.sourceId}`;
  const norm = `${(job.company || '').toLowerCase().trim()}|${(job.title || '').toLowerCase().trim()}`;
  return 'fp:' + crypto.createHash('sha1').update(norm).digest('hex').slice(0, 16);
}

function loadSeen() {
  try {
    const raw = fs.readFileSync(SEEN_FILE, 'utf8');
    return new Map(Object.entries(JSON.parse(raw)));
  } catch {
    return new Map();
  }
}

function saveSeen(map) {
  fs.mkdirSync(path.dirname(SEEN_FILE), { recursive: true });
  const obj = Object.fromEntries(map);
  fs.writeFileSync(SEEN_FILE, JSON.stringify(obj, null, 2));
}

function dedupe(jobs) {
  const seen = loadSeen();
  const fresh = [];
  const now = new Date().toISOString();
  for (const job of jobs) {
    const fp = fingerprint(job);
    if (seen.has(fp)) continue;
    seen.set(fp, { firstSeen: now, company: job.company, title: job.title, source: job.source });
    fresh.push({ ...job, _fp: fp });
  }
  saveSeen(seen);
  return { fresh, totalSeen: seen.size };
}

// Write score/rationale back onto previously-seen records so a future SQLite
// migration has full history, and re-runs don't pay to re-score.
function persistScores(scored) {
  const seen = loadSeen();
  for (const job of scored) {
    if (!job._fp || !seen.has(job._fp)) continue;
    const entry = seen.get(job._fp);
    if (job.score != null) entry.score = job.score;
    if (job.rationale) entry.rationale = job.rationale;
    seen.set(job._fp, entry);
  }
  saveSeen(seen);
}

module.exports = { dedupe, persistScores, fingerprint, SEEN_FILE };

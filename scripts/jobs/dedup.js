// Fingerprinting for dedup. Storage moved to SQLite in Week 3 (see db.js);
// this module now just owns the stable fingerprint so db.js can stay
// import-cycle free.

const path = require('path');
const crypto = require('crypto');

// Kept for one-time migration reference in db.js.
const SEEN_FILE = path.join(__dirname, '..', '..', 'data', 'seen-jobs.json');

function fingerprint(job) {
  // source+sourceId is most reliable when present; otherwise fall back to a
  // normalized company+title hash.
  if (job.source && job.sourceId) return `${job.source}:${job.sourceId}`;
  const norm = `${(job.company || '').toLowerCase().trim()}|${(job.title || '').toLowerCase().trim()}`;
  return 'fp:' + crypto.createHash('sha1').update(norm).digest('hex').slice(0, 16);
}

module.exports = { fingerprint, SEEN_FILE };

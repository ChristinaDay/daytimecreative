// SQLite storage for the job pipeline (Week 3). Uses Node's built-in
// node:sqlite (Node 22.5+), so there's no native dependency to compile.
//
// One table, `jobs`, keyed by fingerprint. It carries dedup state, the latest
// listing fields, the LLM score/rationale, and an application status the
// dashboard can update (new | saved | applied | dismissed).

// node:sqlite is still flagged experimental and prints a warning on load.
// Silence just that one warning so pipeline output stays clean.
const _emitWarning = process.emitWarning;
process.emitWarning = (warning, ...args) => {
  const msg = typeof warning === 'string' ? warning : warning && warning.message;
  if (msg && /SQLite is an experimental feature/i.test(msg)) return;
  return _emitWarning.call(process, warning, ...args);
};

const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');
const { fingerprint } = require('./dedup');

const DB_FILE = path.join(__dirname, '..', '..', 'data', 'jobs.db');
const LEGACY_JSON = path.join(__dirname, '..', '..', 'data', 'seen-jobs.json');

const VALID_STATUS = new Set(['new', 'saved', 'applied', 'dismissed']);

let _db = null;

function getDb() {
  if (_db) return _db;
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
  const db = new DatabaseSync(DB_FILE);
  db.exec(`
    CREATE TABLE IF NOT EXISTS jobs (
      fp TEXT PRIMARY KEY,
      source TEXT,
      source_id TEXT,
      company TEXT,
      title TEXT,
      location TEXT,
      url TEXT,
      posted_at TEXT,
      tags TEXT,
      description_html TEXT,
      first_seen TEXT,
      last_seen TEXT,
      score INTEGER,
      rationale TEXT,
      scored_at TEXT,
      status TEXT NOT NULL DEFAULT 'new',
      status_updated_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_jobs_score ON jobs(score);
    CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
  `);
  _db = db;
  migrateFromJson();
  return _db;
}

// One-time import of the legacy JSON dedup store. Only runs when the table is
// empty, so it's a no-op on every subsequent run.
function migrateFromJson() {
  const count = _db.prepare('SELECT COUNT(*) AS c FROM jobs').get().c;
  if (count > 0 || !fs.existsSync(LEGACY_JSON)) return;
  let entries;
  try {
    entries = Object.entries(JSON.parse(fs.readFileSync(LEGACY_JSON, 'utf8')));
  } catch {
    return;
  }
  if (entries.length === 0) return;
  const insert = _db.prepare(`
    INSERT OR IGNORE INTO jobs
      (fp, source, company, title, first_seen, last_seen, score, rationale, scored_at, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
  `);
  _db.exec('BEGIN');
  for (const [fp, e] of entries) {
    insert.run(
      fp,
      e.source || null,
      e.company || null,
      e.title || null,
      e.firstSeen || null,
      e.firstSeen || null,
      e.score ?? null,
      e.rationale || null,
      e.score != null ? e.firstSeen || null : null,
    );
  }
  _db.exec('COMMIT');
  console.log(`[db] migrated ${entries.length} listings from seen-jobs.json into SQLite.`);
}

// Insert newly-seen jobs, refresh listing fields on already-seen ones (without
// touching their score/status). Returns the fresh ones for scoring.
function dedupe(jobs) {
  const db = getDb();
  const now = new Date().toISOString();
  const exists = db.prepare('SELECT fp FROM jobs WHERE fp = ?');
  const insert = db.prepare(`
    INSERT INTO jobs
      (fp, source, source_id, company, title, location, url, posted_at, tags, description_html, first_seen, last_seen, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
  `);
  const update = db.prepare(`
    UPDATE jobs SET source = ?, source_id = ?, company = ?, title = ?, location = ?,
      url = ?, posted_at = ?, tags = ?, description_html = ?, last_seen = ?
    WHERE fp = ?
  `);

  const fresh = [];
  db.exec('BEGIN');
  for (const job of jobs) {
    const fp = fingerprint(job);
    const tags = JSON.stringify(job.tags || []);
    if (exists.get(fp)) {
      update.run(job.source, job.sourceId || null, job.company, job.title, job.location || null,
        job.url || null, job.postedAt || null, tags, job.descriptionHtml || null, now, fp);
    } else {
      insert.run(fp, job.source, job.sourceId || null, job.company, job.title, job.location || null,
        job.url || null, job.postedAt || null, tags, job.descriptionHtml || null, now, now);
      fresh.push({ ...job, _fp: fp });
    }
  }
  db.exec('COMMIT');

  const totalSeen = db.prepare('SELECT COUNT(*) AS c FROM jobs').get().c;
  return { fresh, totalSeen };
}

function persistScores(scored) {
  const db = getDb();
  const now = new Date().toISOString();
  const upd = db.prepare('UPDATE jobs SET score = ?, rationale = ?, scored_at = ? WHERE fp = ?');
  db.exec('BEGIN');
  for (const job of scored) {
    if (!job._fp || job.score == null) continue;
    upd.run(job.score, job.rationale || null, now, job._fp);
  }
  db.exec('COMMIT');
}

function rowToJob(r) {
  let tags = [];
  try { tags = JSON.parse(r.tags || '[]'); } catch {}
  return {
    fp: r.fp,
    source: r.source,
    sourceId: r.source_id,
    company: r.company,
    title: r.title,
    location: r.location,
    url: r.url,
    postedAt: r.posted_at,
    tags,
    descriptionHtml: r.description_html,
    firstSeen: r.first_seen,
    lastSeen: r.last_seen,
    score: r.score,
    rationale: r.rationale,
    scoredAt: r.scored_at,
    status: r.status,
    statusUpdatedAt: r.status_updated_at,
  };
}

function getJobs() {
  const db = getDb();
  const rows = db.prepare('SELECT * FROM jobs ORDER BY (score IS NULL), score DESC').all();
  return rows.map(rowToJob);
}

function setStatus(fp, status) {
  if (!VALID_STATUS.has(status)) throw new Error(`Invalid status: ${status}`);
  const db = getDb();
  const res = db.prepare('UPDATE jobs SET status = ?, status_updated_at = ? WHERE fp = ?')
    .run(status, new Date().toISOString(), fp);
  return res.changes > 0;
}

function resetSeen() {
  const db = getDb();
  db.exec('DELETE FROM jobs');
}

module.exports = { getDb, dedupe, persistScores, getJobs, setStatus, resetSeen, rowToJob, DB_FILE, VALID_STATUS };

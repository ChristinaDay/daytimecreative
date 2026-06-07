#!/usr/bin/env node
// Local-only dashboard for browsing scored jobs out of SQLite.
// Runs a tiny localhost server (no framework, no public deploy) that serves an
// interactive page and persists application status back to the database.
//
//   node scripts/jobs/dashboard.js            # serve on http://localhost:4317
//   node scripts/jobs/dashboard.js --port 8080
//   node scripts/jobs/dashboard.js --export   # write a static data/dashboard.html and exit

const fs = require('fs');
const path = require('path');
const http = require('http');
const { getJobs, setStatus, VALID_STATUS } = require('./db');
const { tierFor } = require('./digest');
const { summarize } = require('./spend');

function parseArgs(argv) {
  const args = { port: 4317, export: false };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--port') args.port = parseInt(argv[++i], 10);
    else if (argv[i] === '--export') args.export = true;
  }
  return args;
}

function buildPayload() {
  const jobs = getJobs().map((j) => ({ ...j, tier: tierFor(j.score) }));
  let spend = null;
  try { spend = summarize(); } catch {}
  return { jobs, spend, generatedAt: new Date().toISOString() };
}

function escapeJson(obj) {
  // Safe to embed in a <script> tag.
  return JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

function renderHtml(payload) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Job pipeline — dashboard</title>
<style>
  :root {
    --bg: #0d1117; --panel: #161b22; --panel-2: #1c2330; --border: #2a313c;
    --text: #e6edf3; --muted: #8b949e; --accent: #58a6ff;
    --strong: #2ea043; --plausible: #3fb950; --stretch: #d29922; --misfit: #6e7681; --unscored: #484f58;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text);
    font: 14px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  header { position: sticky; top: 0; z-index: 10; background: rgba(13,17,23,.92);
    backdrop-filter: blur(8px); border-bottom: 1px solid var(--border); padding: 14px 20px; }
  h1 { font-size: 16px; margin: 0 0 8px; font-weight: 600; }
  .summary { color: var(--muted); font-size: 12.5px; }
  .summary b { color: var(--text); }
  .controls { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; align-items: center; }
  input[type=search], select { background: var(--panel-2); color: var(--text);
    border: 1px solid var(--border); border-radius: 6px; padding: 6px 10px; font-size: 13px; }
  input[type=search] { min-width: 240px; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 999px;
    border: 1px solid var(--border); background: var(--panel-2); color: var(--muted); cursor: pointer;
    font-size: 12px; user-select: none; }
  .chip.on { color: var(--text); border-color: var(--accent); }
  .chip .dot { width: 8px; height: 8px; border-radius: 50%; }
  main { padding: 18px 20px 80px; max-width: 1000px; margin: 0 auto; display: grid; gap: 12px; }
  .card { background: var(--panel); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; }
  .card.dismissed { opacity: .5; }
  .row1 { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .score { font-weight: 700; font-size: 15px; min-width: 34px; }
  .title a { color: var(--text); text-decoration: none; font-weight: 600; }
  .title a:hover { color: var(--accent); text-decoration: underline; }
  .company { color: var(--muted); }
  .meta { color: var(--muted); font-size: 12px; margin-top: 3px; }
  .tags { margin-top: 6px; display: flex; flex-wrap: wrap; gap: 5px; }
  .tag { font-size: 11px; color: var(--muted); background: var(--panel-2); border: 1px solid var(--border);
    padding: 1px 7px; border-radius: 5px; }
  .rationale { margin-top: 9px; color: #c9d1d9; font-size: 13px; border-left: 2px solid var(--border); padding-left: 10px; }
  .actions { margin-top: 11px; display: flex; gap: 6px; }
  .actions button { background: var(--panel-2); color: var(--muted); border: 1px solid var(--border);
    border-radius: 6px; padding: 4px 11px; font-size: 12px; cursor: pointer; }
  .actions button:hover { color: var(--text); }
  .actions button.active { color: #fff; border-color: transparent; }
  .actions button.active[data-status=saved] { background: #1f6feb; }
  .actions button.active[data-status=applied] { background: var(--strong); }
  .actions button.active[data-status=dismissed] { background: #6e7681; }
  .actions button.active[data-status=new] { background: var(--unscored); }
  .badge { font-size: 11px; padding: 1px 7px; border-radius: 5px; color: #fff; }
  .empty { color: var(--muted); text-align: center; padding: 40px; }
  .static-note { color: var(--stretch); font-size: 12px; margin-top: 6px; }
</style>
</head>
<body>
<header>
  <h1>Job pipeline — dashboard</h1>
  <div class="summary" id="summary"></div>
  <div class="controls">
    <input type="search" id="search" placeholder="Search title, company, rationale…" />
    <select id="sort">
      <option value="score">Sort: score ↓</option>
      <option value="date">Sort: newest</option>
      <option value="company">Sort: company A–Z</option>
    </select>
    <span id="tiers"></span>
    <label class="chip" id="hideDismissed"><input type="checkbox" checked style="margin:0" /> Hide dismissed</label>
  </div>
</header>
<main id="list"></main>
<script>
const DATA = ${escapeJson(payload)};
const STATIC = ${payload.static ? 'true' : 'false'};
const TIERS = [
  { id: 'strong', label: 'Strong', color: 'var(--strong)' },
  { id: 'plausible', label: 'Plausible', color: 'var(--plausible)' },
  { id: 'stretch', label: 'Stretch', color: 'var(--stretch)' },
  { id: 'misfit', label: 'Misfit', color: 'var(--misfit)' },
  { id: 'unscored', label: 'Unscored', color: 'var(--unscored)' },
];
const STATUSES = ['new', 'saved', 'applied', 'dismissed'];
const tierState = Object.fromEntries(TIERS.map(t => [t.id, t.id !== 'misfit' && t.id !== 'unscored']));
let jobs = DATA.jobs.slice();

function fmtDate(s) { return s ? s.slice(0, 10) : '—'; }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function renderSummary() {
  const counts = {};
  for (const t of TIERS) counts[t.id] = 0;
  for (const j of jobs) counts[j.tier]++;
  const byStatus = {};
  for (const s of STATUSES) byStatus[s] = jobs.filter(j => j.status === s).length;
  const parts = TIERS.map(t => \`\${counts[t.id]} \${t.label.toLowerCase()}\`).join(' · ');
  let spend = '';
  if (DATA.spend) spend = \` — lifetime spend <b>~$\${DATA.spend.totalCostUsd.toFixed(4)}</b> over \${DATA.spend.runCount} run(s)\`;
  document.getElementById('summary').innerHTML =
    \`<b>\${jobs.length}</b> listings — \${parts}. Saved <b>\${byStatus.saved}</b> · applied <b>\${byStatus.applied}</b>\${spend}\` +
    (STATIC ? '<div class="static-note">Static export — status changes are session-only. Run <code>npm run jobs:dashboard</code> to persist.</div>' : '');
}

function renderTierChips() {
  const wrap = document.getElementById('tiers');
  wrap.innerHTML = '';
  for (const t of TIERS) {
    const el = document.createElement('span');
    el.className = 'chip' + (tierState[t.id] ? ' on' : '');
    el.innerHTML = \`<span class="dot" style="background:\${t.color}"></span>\${t.label}\`;
    el.onclick = () => { tierState[t.id] = !tierState[t.id]; renderTierChips(); render(); };
    wrap.appendChild(el);
  }
}

async function updateStatus(job, status) {
  const next = job.status === status ? 'new' : status;
  job.status = next;
  render();
  if (STATIC) return;
  try {
    await fetch('/api/jobs/status', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fp: job.fp, status: next }),
    });
  } catch (e) { console.error('status update failed', e); }
}

function render() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const sort = document.getElementById('sort').value;
  const hideDismissed = document.querySelector('#hideDismissed input').checked;

  let view = jobs.filter(j => tierState[j.tier]);
  if (hideDismissed) view = view.filter(j => j.status !== 'dismissed');
  if (q) view = view.filter(j =>
    (j.title || '').toLowerCase().includes(q) ||
    (j.company || '').toLowerCase().includes(q) ||
    (j.rationale || '').toLowerCase().includes(q));

  view.sort((a, b) => {
    if (sort === 'score') return (b.score ?? -1) - (a.score ?? -1);
    if (sort === 'date') return String(b.postedAt || '').localeCompare(String(a.postedAt || ''));
    return String(a.company || '').localeCompare(String(b.company || ''));
  });

  renderSummary();
  const list = document.getElementById('list');
  if (view.length === 0) { list.innerHTML = '<div class="empty">No listings match these filters.</div>'; return; }
  list.innerHTML = '';
  for (const j of view) {
    const tier = TIERS.find(t => t.id === j.tier);
    const card = document.createElement('div');
    card.className = 'card' + (j.status === 'dismissed' ? ' dismissed' : '');
    const tags = (j.tags || []).slice(0, 8).map(t => \`<span class="tag">\${esc(t)}</span>\`).join('');
    const scoreTxt = j.score == null ? '—' : j.score;
    card.innerHTML = \`
      <div class="row1">
        <span class="score" style="color:\${tier.color}">\${scoreTxt}</span>
        <span class="badge" style="background:\${tier.color}">\${tier.label}</span>
        <span class="title"><a href="\${esc(j.url)}" target="_blank" rel="noopener">\${esc(j.title)}</a></span>
        <span class="company">— \${esc(j.company)}</span>
      </div>
      <div class="meta">\${esc(j.location || 'Unknown location')} · \${esc(j.source)} · \${fmtDate(j.postedAt)}</div>
      \${tags ? \`<div class="tags">\${tags}</div>\` : ''}
      \${j.rationale ? \`<div class="rationale">\${esc(j.rationale)}</div>\` : ''}
      <div class="actions"></div>\`;
    const actions = card.querySelector('.actions');
    for (const s of STATUSES) {
      const b = document.createElement('button');
      b.dataset.status = s;
      b.textContent = s[0].toUpperCase() + s.slice(1);
      if (j.status === s) b.classList.add('active');
      b.onclick = () => updateStatus(j, s);
      actions.appendChild(b);
    }
    list.appendChild(card);
  }
}

document.getElementById('search').addEventListener('input', render);
document.getElementById('sort').addEventListener('change', render);
document.querySelector('#hideDismissed input').addEventListener('change', render);
renderTierChips();
render();
</script>
</body>
</html>`;
}

function exportStatic() {
  const payload = buildPayload();
  payload.static = true;
  const file = path.join(__dirname, '..', '..', 'data', 'dashboard.html');
  fs.writeFileSync(file, renderHtml(payload));
  console.log(`Static dashboard written: ${file}`);
}

function serve(port) {
  const server = http.createServer((req, res) => {
    if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderHtml(buildPayload()));
      return;
    }
    if (req.method === 'GET' && req.url === '/api/jobs') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(buildPayload()));
      return;
    }
    if (req.method === 'POST' && req.url === '/api/jobs/status') {
      let body = '';
      req.on('data', (c) => { body += c; if (body.length > 1e5) req.destroy(); });
      req.on('end', () => {
        try {
          const { fp, status } = JSON.parse(body || '{}');
          if (!fp || !VALID_STATUS.has(status)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: false, error: 'invalid fp or status' }));
            return;
          }
          const ok = setStatus(fp, status);
          res.writeHead(ok ? 200 : 404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: e.message }));
        }
      });
      return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  });
  server.listen(port, '127.0.0.1', () => {
    console.log(`Jobs dashboard: http://localhost:${port}  (Ctrl+C to stop)`);
  });
}

function main() {
  const args = parseArgs(process.argv);
  if (args.export) exportStatic();
  else serve(args.port);
}

main();

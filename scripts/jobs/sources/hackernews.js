// HN "Ask HN: Who is hiring?" via Algolia API.
// Strategy: find the most recent hiring thread by date, fetch ALL its comments,
// keep only TOP-LEVEL ones (job posts — replies are noise), filter by keywords.

const KEYWORDS = [
  'product designer', 'senior designer', 'design engineer',
  'ux designer', 'ui designer', 'design lead', 'head of design',
  'frontend', 'front-end', 'front end', 'react', 'next.js',
];

const REMOTE_HINT = /\b(remote|us[- ]?remote|anywhere|distributed)\b/i;
const BAY_AREA_HINT = /\b(san francisco|sf bay|oakland|bay area|berkeley|palo alto)\b/i;

async function findLatestHiringThread() {
  // search_by_date sorts by created_at DESC, so the first hit matching the
  // exact title pattern is the most recent monthly "Who is hiring" thread.
  const url = 'https://hn.algolia.com/api/v1/search_by_date?query=%22Ask+HN%3A+Who+is+hiring%22&tags=story&hitsPerPage=20';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HN search ${res.status}`);
  const data = await res.json();
  const hit = (data.hits || []).find((h) => /^Ask HN: Who is hiring\??/i.test(h.title || ''));
  if (!hit) throw new Error('No "Who is hiring" thread found');
  return { id: hit.objectID, title: hit.title, createdAt: hit.created_at };
}

async function fetchAllComments(threadId) {
  // Paginate; Algolia caps hitsPerPage at 1000.
  const out = [];
  let page = 0;
  while (page < 5) {
    const url = `https://hn.algolia.com/api/v1/search_by_date?tags=comment,story_${threadId}&hitsPerPage=1000&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HN comments page ${page} ${res.status}`);
    const data = await res.json();
    const hits = data.hits || [];
    out.push(...hits);
    if (hits.length < 1000) break;
    page++;
  }
  return out;
}

function stripHtml(html) {
  return String(html || '')
    .replace(/<p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#x27;/g, "'").replace(/&#x2F;/g, '/').replace(/&quot;/g, '"')
    .trim();
}

function parsePost(text) {
  // Canonical HN hiring format (loose): "Company | Role(s) | Location | Remote/Onsite | URL"
  // But many posts ignore it. Be defensive — only trust the split when there
  // are 3+ pipe-separated parts AND the first part looks like a name (not a greeting).
  const firstLine = (text.split('\n').find((l) => l.trim().length > 0) || '').trim();
  const parts = firstLine.split(/\s*\|\s*/).map((s) => s.trim()).filter(Boolean);
  const looksLikeName = (s) => s && s.length < 80 && !/^(hi|hello|hey|we|our|the|i'm|i am)\b/i.test(s);

  if (parts.length >= 3 && looksLikeName(parts[0])) {
    return {
      company: parts[0],
      title: parts[1] || 'See post',
      location: parts.slice(2).join(' · '),
      parsed: true,
    };
  }
  // Fallback: extract a company-ish token from the first line and use the line as title.
  const companyGuess = (firstLine.match(/^([A-Z][\w.& -]{1,40})/) || [])[1] || 'See post';
  return {
    company: companyGuess.trim() || 'See post',
    title: firstLine.length > 140 ? firstLine.slice(0, 137) + '…' : firstLine,
    location: 'See post',
    parsed: false,
  };
}

async function fetchHackerNews() {
  const thread = await findLatestHiringThread();
  const allComments = await fetchAllComments(thread.id);

  // Top-level posts only — replies are discussion, not jobs.
  const topLevel = allComments.filter((c) => String(c.parent_id) === String(thread.id));

  const jobs = [];
  for (const c of topLevel) {
    const text = stripHtml(c.comment_text);
    if (!text) continue;
    const lower = text.toLowerCase();
    if (!KEYWORDS.some((k) => lower.includes(k))) continue;

    const { company, title, location } = parsePost(text);
    jobs.push({
      source: 'hackernews',
      sourceId: c.objectID,
      company,
      title,
      location,
      url: `https://news.ycombinator.com/item?id=${c.objectID}`,
      postedAt: c.created_at,
      tags: [
        REMOTE_HINT.test(text) ? 'remote' : null,
        BAY_AREA_HINT.test(text) ? 'bay-area' : null,
      ].filter(Boolean),
      descriptionHtml: c.comment_text || '',
      _threadTitle: thread.title,
    });
  }
  return jobs;
}

module.exports = { fetchHackerNews };

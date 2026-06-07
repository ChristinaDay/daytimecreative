// We Work Remotely RSS — design + frontend categories.
// No API key needed; small RSS files we parse with regex.

const FEEDS = [
  { url: 'https://weworkremotely.com/categories/remote-design-jobs.rss', category: 'design' },
  { url: 'https://weworkremotely.com/categories/remote-front-end-programming-jobs.rss', category: 'frontend' },
];

function decodeEntities(s) {
  return String(s || '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#x27;/g, "'").replace(/&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function pick(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (!m) return '';
  let v = m[1].trim();
  v = v.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '');
  return decodeEntities(v).trim();
}

function parseItems(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml))) items.push(m[1]);
  return items;
}

async function fetchFeed(feed) {
  const res = await fetch(feed.url, {
    headers: { 'User-Agent': 'christinaday-jobs-pipeline/0.1' },
  });
  if (!res.ok) throw new Error(`WWR ${feed.category} ${res.status}`);
  const xml = await res.text();
  return parseItems(xml).map((raw) => {
    const title = pick(raw, 'title'); // often "Company: Role"
    const link = pick(raw, 'link');
    const pubDate = pick(raw, 'pubDate');
    const region = pick(raw, 'region');
    const company = pick(raw, 'company') || (title.split(':')[0] || '').trim();
    const role = title.includes(':') ? title.split(':').slice(1).join(':').trim() : title;
    return {
      source: 'weworkremotely',
      sourceId: link,
      company,
      title: role || title,
      location: region || 'Remote',
      url: link,
      postedAt: pubDate ? new Date(pubDate).toISOString() : null,
      tags: [feed.category, 'remote'],
      descriptionHtml: pick(raw, 'description'),
    };
  });
}

async function fetchWeWorkRemotely() {
  const out = [];
  for (const feed of FEEDS) {
    try {
      const items = await fetchFeed(feed);
      out.push(...items);
    } catch (e) {
      console.error(`[wwr:${feed.category}]`, e.message);
    }
  }
  return out.filter((j) => j.company && j.title);
}

module.exports = { fetchWeWorkRemotely };

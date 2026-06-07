// RemoteOK public JSON API. First element is a "legal" notice; jobs follow.
// Docs: https://remoteok.com/api

const TAGS_OF_INTEREST = [
  'design', 'product designer', 'ux', 'ui', 'design systems',
  'frontend', 'front end', 'front-end', 'react', 'next.js',
  'design engineer',
];

async function fetchRemoteOK() {
  const res = await fetch('https://remoteok.com/api', {
    headers: { 'User-Agent': 'christinaday-jobs-pipeline/0.1 (christinamday@gmail.com)' },
  });
  if (!res.ok) throw new Error(`RemoteOK ${res.status}`);
  const data = await res.json();
  const items = Array.isArray(data) ? data.slice(1) : [];

  return items
    .map((j) => ({
      source: 'remoteok',
      sourceId: String(j.id ?? j.slug ?? j.url),
      company: (j.company || '').trim(),
      title: (j.position || j.title || '').trim(),
      location: j.location || 'Remote',
      url: j.url || j.apply_url || '',
      postedAt: j.date || j.epoch ? new Date(j.date || j.epoch * 1000).toISOString() : null,
      tags: Array.isArray(j.tags) ? j.tags : [],
      descriptionHtml: j.description || '',
    }))
    .filter((j) => j.company && j.title)
    .filter((j) => {
      // Match on title only — RemoteOK's tags are noisy and frequently include
      // "design"/"frontend" on unrelated listings (recruiting, ops, etc.).
      const title = j.title.toLowerCase();
      return TAGS_OF_INTEREST.some((t) => title.includes(t));
    });
}

module.exports = { fetchRemoteOK };

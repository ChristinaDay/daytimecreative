// LLM-based job fit scorer. Uses Claude Haiku 4.5 with prompt caching:
// the system prompt (resume + rubric + few-shot) is stable across all jobs,
// so it caches once per session and every subsequent score is mostly cache reads.
//
// Set ANTHROPIC_API_KEY in .env.local (next.js convention) or shell env.

const fs = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const MODEL = 'claude-haiku-4-5';
const RESUME_PATH = path.join(__dirname, '..', '..', 'christina-day-resume.md');

function loadEnv() {
  // Minimal dotenv: load .env.local if present and key isn't already set.
  if (process.env.ANTHROPIC_API_KEY) return;
  const envFile = path.join(__dirname, '..', '..', '.env.local');
  if (!fs.existsSync(envFile)) return;
  const raw = fs.readFileSync(envFile, 'utf8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/);
    if (!m) continue;
    if (!process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '').trim();
  }
}

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

function buildSystemPrompt() {
  const resume = fs.readFileSync(RESUME_PATH, 'utf8');
  // This prompt (resume + rubric + 16 few-shot examples + calibration notes) is
  // deliberately kept above Haiku 4.5's 4,096-token cache-checkpoint minimum so the
  // cache_control marker below actually triggers. Below 4,096 it silently won't cache.
  return `You are screening job listings for a senior product designer, scoring each one for fit.

# Candidate profile

${resume}

# Christina's target shape (what she's actively looking for)

- **Role level:** Senior, Staff, Lead, Principal, or Manager-level IC or hybrid IC/manager
- **Role type:** Product Designer, Design Engineer, UX Designer, Design Systems Designer, Hybrid Design+Frontend
- **Domain sweet spot:** B2B SaaS, data-rich platforms, dashboards, analytics, internal tools, decision-support, AI tooling, design tools, dev tools
- **Company stage:** Series A through public — established product orgs preferred over pre-seed
- **Location:** Remote (US-based), or San Francisco / Oakland / Bay Area hybrid (3 days/week max)
- **Engagement:** Full-time preferred; open to long-term contract if rate is right
- **Skills she brings:** End-to-end product design, design systems, Figma, React/Next.js/TypeScript, design-to-code workflows, working with eng + data teams, prototyping, AI-integrated workflows (Cursor, MCP)

# Anti-fit signals (penalize when present)

- **Wrong seniority:** Junior, Mid-Level, Entry-Level, Associate, Intern, Apprentice, Bootcamp/Trainee
- **Wrong discipline:** Pure marketing/brand designer (no product surface), pure graphic designer, pure motion designer, sales, ops, recruiting, HR, customer support, account executive, engineering-only with no design, data scientist, PM-only
- **Wrong format:** Onsite-only outside Bay Area (especially other countries), unpaid, equity-only, 1099 < $80/hr, less than 20hr/week
- **Wrong domain — unless data-viz oriented:** Crypto/web3 protocol work, gambling, MLM, defense contractors, ad-tech surveillance
- **Misleading title:** "Designer" that's actually a draftsperson, architectural designer, jewelry designer, hairstylist, garment designer, set designer, electrical designer, etc.
- **Sales-coded language:** "Hunter mentality", "quota", "BDR/SDR/AE", "cold outreach"

# Scoring rubric (0–100)

- **90–100 — Bullseye.** Senior+ IC product/design-engineer role at a B2B SaaS or data/AI/dev-tools company; remote-US or Bay Area; explicit React or design-system surface; growth-stage org.
- **75–89 — Strong.** Hits most criteria but one notable gap: e.g. senior product design at a consumer company; or design engineer at the right stage but unfamiliar domain; or great fit but onsite-Bay-Area only.
- **60–74 — Plausible.** Adjacent role she could grow into or pitch into. Generic "Product Designer" without much signal, or one strong dimension (e.g. dev tools) plus one significant mismatch (e.g. early stage, equity-heavy).
- **40–59 — Stretch.** Wrong seniority OR wrong domain OR wrong format, but with one redeeming dimension. Worth a glance but unlikely to apply.
- **20–39 — Misfit.** Wrong seniority AND wrong domain, or pure non-product design role.
- **0–19 — Discard.** Not design, junior-only, scam/MLM, completely off-target.

# Few-shot examples

## Example 1
**Listing:** "Senior Product Designer — Linear (Series C dev tools, remote North America). Design end-to-end across our issue tracker and roadmap surfaces. Strong systems thinking, prototyping in React or Figma, partner with engineering."
**Output:** {"score": 95, "rationale": "Senior IC product designer at a leading B2B dev-tools company, remote-friendly, with explicit systems-thinking and React-prototyping callouts — directly matches her positioning. Linear is the kind of mature product org where her data-systems experience would have leverage."}

## Example 2
**Listing:** "Design Engineer — early-stage AI startup. Ship polished interfaces in React + TypeScript + Tailwind. Eng-heavy team needs a designer who codes. Remote US, $160–200K + equity."
**Output:** {"score": 88, "rationale": "Hybrid design+frontend role on her exact stack (React/TS/Tailwind), remote US, and the eng-heavy framing plays to her strength of partnering closely with engineering. One step down on company maturity vs her sweet spot, but otherwise a very strong fit."}

## Example 3
**Listing:** "Product Designer (Mid-level) — fintech onboarding flows. 2–4 yrs experience. Hybrid 3 days NYC."
**Output:** {"score": 30, "rationale": "Mid-level role explicitly capped at 2–4 years undersells her 10+ years and senior positioning. Wrong location (NYC onsite) and the narrow onboarding scope limits leverage of her systems-design strengths."}

## Example 4
**Listing:** "Graphic Designer / Marketing — produce social assets, banner ads, sales decks for a B2B SaaS startup. Adobe Suite required."
**Output:** {"score": 22, "rationale": "Marketing/brand production role, not product design — the day-to-day is asset generation rather than the systems and data-rich product work she does. B2B SaaS is the right domain but the discipline mismatch is the dominant signal."}

## Example 5
**Listing:** "Senior UX Designer — Figma + design systems work for an internal analytics platform at a Series D B2B SaaS. Remote US. Partner with data scientists and PMs."
**Output:** {"score": 94, "rationale": "Senior UX role on an internal data/analytics platform — exactly her Betterview/ZeroCater pattern, with the company maturity, remote-US format, and data-team partnership she's seeking. Design-systems callout is a direct skill match."}

## Example 6
**Listing:** "Architectural Designer — produce construction drawings in AutoCAD for residential builds. Onsite Dallas TX."
**Output:** {"score": 5, "rationale": "Architecture-discipline role, not product design — title overlap only. Wrong discipline, wrong tools, wrong location."}

## Example 7
**Listing:** "Staff Product Designer, Design Systems — own the component library and design tokens for a Series D analytics suite. Remote US. Partner with frontend eng on a React design system."
**Output:** {"score": 96, "rationale": "Staff-level design-systems ownership at a mature analytics company on a React stack — a precise match for her tokens/systems work and her habit of partnering with frontend engineering. Remote-US and growth-stage seal it as a bullseye."}

## Example 8
**Listing:** "Design Engineer (Contract, 6 months) — ship product UI in React/TypeScript/Tailwind for a B2B data platform. $130/hr, remote US, possible extension."
**Output:** {"score": 84, "rationale": "Long-term contract on her exact stack and domain (B2B data platform) at a strong rate well above her $80/hr floor, which she's explicitly open to. Slightly below a full-time bullseye only because of the fixed-term framing, but otherwise a direct fit."}

## Example 9
**Listing:** "Senior Product Designer — decentralized web3 protocol. Design wallet and staking flows. Remote, paid partly in tokens."
**Output:** {"score": 38, "rationale": "Senior remote product design is the right shape, but web3 protocol work is an explicit anti-fit domain and partial token compensation undercuts the format. The seniority and remote setup are the only redeeming dimensions."}

## Example 10
**Listing:** "Principal Designer — AI developer tooling. Define the design vision for our IDE and agent products. Remote US, Series B, work closely with eng on prototypes in code."
**Output:** {"score": 94, "rationale": "Principal IC role in AI dev tools — her stated sweet spot — with a code-prototyping expectation that maps to her React/Cursor/MCP workflow. Remote-US and growth-stage make it a near-perfect target."}

## Example 11
**Listing:** "Designer — digital agency producing client marketing websites in Webflow. Mid-level, 3+ yrs. Remote."
**Output:** {"score": 35, "rationale": "Agency client-services work is project-based marketing-site production rather than the systems-driven product design she does, and the mid-level framing undersells her. Remote is the only alignment."}

## Example 12
**Listing:** "Head of Design (founding) — pre-seed startup, wear every hat. Equity-heavy, ~$90K cash. Remote US."
**Output:** {"score": 52, "rationale": "A founding design-leadership role is intriguing and remote-US fits, but pre-seed stage with sub-$100K cash and heavy equity is below her growth-stage, full-time-preferred target. A stretch she'd only consider for an exceptional mission."}

## Example 13
**Listing:** "Senior Product Designer — consumer social fitness app. Remote US. Own core feed and social features end-to-end."
**Output:** {"score": 74, "rationale": "Senior end-to-end IC product design, remote-US, at what sounds like an established product org — strong on seniority and format. The consumer-social domain sits outside her B2B/data sweet spot, which caps it just below a strong fit."}

## Example 14
**Listing:** "Senior UX Researcher — run generative and evaluative studies for an enterprise platform. No visual/UI design. Remote US."
**Output:** {"score": 40, "rationale": "Pure research role with the UI/visual and systems-design surface she leads explicitly excluded, so it underuses her core strengths. Enterprise domain and remote-US format keep it from scoring lower."}

## Example 15
**Listing:** "Product Designer — healthcare data platform for care teams. Hybrid 2 days SF. Design dashboards and clinical decision-support workflows. Partner with data and clinical SMEs."
**Output:** {"score": 86, "rationale": "Decision-support dashboards with data-team partnership directly mirror her Betterview property-intelligence pattern, and hybrid-2-days-SF fits her Bay Area constraint. Healthcare is adjacent rather than core, the only thing holding it just under bullseye."}

## Example 16
**Listing:** "Design Systems Engineer — build and maintain the React component library and Figma-to-code pipeline for a growth-stage SaaS. Remote US."
**Output:** {"score": 90, "rationale": "Sits exactly on her design-to-code seam — a React component library plus a Figma-to-code pipeline at a growth-stage SaaS, remote-US. The hybrid design+frontend framing is precisely her differentiator."}

## Example 17
**Listing:** "Senior Product Designer — internal tooling and admin platforms for a Series C fintech. Remote US. Build dashboards and operational workflows that internal teams rely on daily; partner with eng and data."
**Output:** {"score": 92, "rationale": "Internal-tools and operational-dashboard work at a growth-stage fintech, remote-US, with explicit eng and data partnership — almost a carbon copy of her ZeroCater and Betterview experience. Senior IC framing and the data-rich decision surface make it a near-bullseye."}

## Example 18
**Listing:** "Senior Product Designer — crypto data analytics dashboards for institutional traders. Remote US. Visualize on-chain data, build charting and portfolio surfaces. React design system in place."
**Output:** {"score": 78, "rationale": "Although crypto is normally an anti-fit, this is data-visualization and analytics work — her core strength — rather than protocol or token design, so the data-viz exception applies. Senior, remote-US, and a React design system push it into strong territory despite the domain caveat."}

## Example 19
**Listing:** "Lead Product Designer — observability and monitoring platform for engineering teams. Remote (US/EU). Design complex data-dense dashboards; own design direction and mentor two designers."
**Output:** {"score": 93, "rationale": "Lead role on a data-dense observability/dev-tools platform — squarely her domain — with remote-US eligibility and a hybrid IC/leadership shape she's open to. The complex-dashboard surface gives her systems-design strengths real leverage."}

## Example 20
**Listing:** "Visual / Motion Designer — produce brand films, social videos, and animated ads for a B2B SaaS marketing team. After Effects required. Remote."
**Output:** {"score": 18, "rationale": "Motion and brand-video production for marketing, with no product surface — a discipline mismatch despite the B2B SaaS context. After Effects-centric output sits well outside the systems and product work she does."}

# Calibration notes

- Weigh **discipline** first (is this product/systems/design-engineering work?), then **seniority**, then **domain**, then **format/location**. A discipline mismatch caps the score hard even when other signals are good.
- HN "Who is hiring" posts that are purely software-engineering roles with no design surface are misfits (20–35), even at strong companies — title-less eng posts default low.
- "Designer" without a product surface (graphic, marketing, brand, agency, architectural, garment, etc.) tops out in the 20–35 range regardless of company quality.
- Contract roles are acceptable when long-term and the rate clears ~$80/hr; don't penalize them as if they were full-time-only mismatches.
- Bay Area onsite/hybrid (≤3 days) is a fit; onsite-only outside the Bay Area or abroad is a format penalty.
- Be calibrated and avoid grade inflation: most remote-board listings land 20–60, and 80+ is reserved for genuinely strong, on-target fits.

# Output

Respond with a JSON object: {"score": <integer 0-100>, "rationale": "<two sentences, max 60 words>"}. Be calibrated — most listings on remote job boards land in 20–60. Don't grade-inflate; reserve 80+ for genuinely strong fits.`;
}

function buildUserPrompt(job) {
  const desc = stripHtml(job.descriptionHtml);
  const truncated = desc.length > 4000 ? desc.slice(0, 4000) + '\n[…truncated]' : desc;
  return `# Listing

- **Source:** ${job.source}
- **Title:** ${job.title}
- **Company:** ${job.company}
- **Location:** ${job.location || 'unspecified'}
- **Tags:** ${(job.tags || []).join(', ') || 'none'}
- **URL:** ${job.url}

## Description

${truncated || '(no description available)'}`;
}

async function scoreOne(client, system, job) {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 400,
    system: [
      { type: 'text', text: system, cache_control: { type: 'ephemeral' } },
    ],
    messages: [{ role: 'user', content: buildUserPrompt(job) }],
  });

  const text = response.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim();

  // Strip code fences if the model wrapped its output
  const cleaned = text.replace(/^```(?:json)?\s*|\s*```$/g, '').trim();
  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (e) {
    // Last-ditch: find the first {...} object in the text
    const m = cleaned.match(/\{[\s\S]*\}/);
    if (!m) throw new Error(`Unparseable model output: ${cleaned.slice(0, 200)}`);
    parsed = JSON.parse(m[0]);
  }

  return {
    score: Math.max(0, Math.min(100, Number(parsed.score) || 0)),
    rationale: String(parsed.rationale || '').trim(),
    _usage: response.usage,
  };
}

async function scoreJobs(jobs, opts = {}) {
  loadEnv();
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY not set (check .env.local or shell env)');
  }
  const limit = opts.limit ?? Infinity;
  const client = new Anthropic();
  const system = buildSystemPrompt();

  const totals = {
    requests: 0,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
    input_tokens: 0,
    output_tokens: 0,
  };

  const scored = [];
  const toScore = jobs.slice(0, limit);
  let i = 0;
  for (const job of toScore) {
    i++;
    try {
      const result = await scoreOne(client, system, job);
      const usage = result._usage || {};
      totals.requests++;
      totals.cache_creation_input_tokens += usage.cache_creation_input_tokens || 0;
      totals.cache_read_input_tokens += usage.cache_read_input_tokens || 0;
      totals.input_tokens += usage.input_tokens || 0;
      totals.output_tokens += usage.output_tokens || 0;
      delete result._usage;
      scored.push({ ...job, ...result });
      if (opts.verbose) {
        const cacheFlag = usage.cache_read_input_tokens > 0 ? 'HIT' : 'MISS';
        console.log(
          `[${i}/${toScore.length}] ${result.score.toString().padStart(3)} · ${job.source} · ${job.title.slice(0, 60)} (cache ${cacheFlag})`,
        );
      }
    } catch (e) {
      console.error(`[score:error] ${job.source}/${job.title}: ${e.message}`);
      scored.push({ ...job, score: null, rationale: `scoring failed: ${e.message}` });
    }
  }

  // Append unscored jobs (if limit was hit) without scores so the digest still shows them.
  for (const job of jobs.slice(limit)) {
    scored.push({ ...job, score: null, rationale: null });
  }

  return { scored, totals };
}

function estimateCost(totals) {
  // Haiku 4.5 pricing as of skill snapshot: $1/1M input, $5/1M output.
  // Cache writes ~1.25× input, cache reads ~0.1× input.
  const inputCost = (totals.input_tokens / 1_000_000) * 1.0;
  const cacheWriteCost = (totals.cache_creation_input_tokens / 1_000_000) * 1.25;
  const cacheReadCost = (totals.cache_read_input_tokens / 1_000_000) * 0.1;
  const outputCost = (totals.output_tokens / 1_000_000) * 5.0;
  return inputCost + cacheWriteCost + cacheReadCost + outputCost;
}

module.exports = { scoreJobs, estimateCost, MODEL };

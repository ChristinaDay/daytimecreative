'use client';

import { motion } from 'framer-motion';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';

// Reusable image placeholder styled to match the data graphics dark aesthetic
function ChartPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-64 bg-[#0D0D0E] border border-[#33353A] rounded-xl flex flex-col items-center justify-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#CC3D3D]" />
        <div className="w-2 h-2 rounded-full bg-[#F28500]" />
        <div className="w-2 h-2 rounded-full bg-[#22BF4A]" />
      </div>
      <p className="text-[#999AA6] text-sm font-mono text-center px-6">[ {label} ]</p>
    </div>
  );
}

// Figma file embed
function FigmaEmbed({ url, height = '600px', caption, label }: { url: string; height?: string; caption?: string; label?: string }) {
  const embedSrc = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  return (
    <div className="w-full my-6">
      <div className="bg-gray-800 dark:bg-gray-900 rounded-t-lg px-4 py-3 flex items-center space-x-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 bg-gray-700 dark:bg-gray-600 rounded px-3 py-1 text-xs text-gray-300 font-mono truncate">
          figma.com — {label ?? 'Visual System'}
        </div>
      </div>
      <iframe
        src={embedSrc}
        style={{ height }}
        className="w-full border-x border-b border-gray-700 rounded-b-lg"
        title={`Figma — ${label ?? 'Visual System'}`}
        allowFullScreen
        loading="lazy"
      />
      {caption && (
        <p className="text-center mt-3 text-sm text-text-light/60 dark:text-text-dark/60">{caption}</p>
      )}
    </div>
  );
}

// Live embedded demo in a browser chrome frame
function DemoEmbed({ src, height = '700px', caption }: { src: string; height?: string; caption?: string }) {
  return (
    <div className="w-full my-6">
      {/* Browser chrome */}
      <div className="bg-gray-800 dark:bg-gray-900 rounded-t-lg px-4 py-3 flex items-center space-x-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 bg-gray-700 dark:bg-gray-600 rounded px-3 py-1 text-xs text-gray-300 font-mono truncate">
          {src}
        </div>
      </div>
      {/* iframe */}
      <iframe
        src={src}
        style={{ height }}
        className="w-full border-x border-b border-gray-700 rounded-b-lg bg-[#0D0D0E]"
        title="Operational Data Graphics — Live Demo"
        loading="lazy"
      />
      {caption && (
        <p className="text-center mt-3 text-sm text-text-light/60 dark:text-text-dark/60">{caption}</p>
      )}
    </div>
  );
}

// Styled highlight/callout box
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 md:p-6 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border border-teal-200 dark:border-teal-700 rounded-xl my-6 md:my-8">
      {children}
    </div>
  );
}

// Stat card used in outcomes
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl text-center">
      <div className="text-3xl font-bold font-mono text-accent-light dark:text-accent-dark mb-1">{number}</div>
      <div className="text-sm text-text-light/60 dark:text-text-dark/60">{label}</div>
    </div>
  );
}

export default function DataGraphicsCaseStudyPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          Operational Data Graphics: A Visualization System for Infrastructure Teams
        </h1>
        <ProjectSubtitle>
          Designing and implementing a complete data visualization design system—from Figma tokens to interactive Vega charts with real-time simulations.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Designer, Design Engineer"
          employer="Personal Project"
          platforms="Figma, Vega, JavaScript, HTML/CSS, TalkToFigma MCP, Cursor"
          areas="Data Visualization, Design Systems, Design Engineering, Interaction Design"
          year="2026"
        />
      </motion.div>

      {/* ── Hero ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-16 w-full"
      >
        <DemoEmbed
          src="/data-graphics/demo.html"
          height="800px"
          caption="Live interactive demo — click Simulate buttons to see real-time updates"
        />
        <div className="mt-2 text-center">
          <a
            href="https://github.com/ChristinaDay/datagraphics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-light dark:text-accent-dark underline underline-offset-2"
          >
            View source on GitHub →
          </a>
        </div>
      </motion.div>

      {/* ── Overview ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-text-light dark:text-text-dark">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            I designed and implemented a complete data visualization system for operational monitoring—targeting data engineers, analytics engineers, and infrastructure teams who need high-signal, low-noise graphics for real-time metrics, system health, and performance data.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The project covers the full stack of design systems work: defining visual foundations and interaction patterns in Figma, building design tokens in W3C format, and delivering production-ready interactive charts with full Vega implementations and a real-time simulation demo.
          </p>
        </div>

        <Callout>
          <p className="text-lg font-semibold text-teal-900 dark:text-teal-200 mb-2">4 weeks. Start to finish.</p>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            From design thesis to Figma variables to interactive Vega implementations with light/dark mode theming—all documented and shipped as a portfolio-ready demo.
          </p>
        </Callout>
      </motion.section>

      {/* ── The Problem ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-text-light dark:text-text-dark">The Problem</h2>
        <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Generic BI Tools Don't Fit Operational Workflows</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-4">
              Most dashboards are built with business intelligence aesthetics—decorative elements, saturated colors, excessive whitespace. These work great for executive presentations. They don't work for engineers monitoring production systems at 2am.
            </p>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              There's no standardized visual grammar for operational graphics. Teams cobble together charts from generic libraries, resulting in inconsistent, high-noise monitoring interfaces where the signal gets buried.
            </p>
          </div>
          <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">What engineers actually need</p>
            <ul className="space-y-3 text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              <li className="flex gap-3"><span className="text-accent-light dark:text-accent-dark mt-1">→</span>High information density—scan patterns quickly</li>
              <li className="flex gap-3"><span className="text-accent-light dark:text-accent-dark mt-1">→</span>Minimal visual noise—focus on anomalies</li>
              <li className="flex gap-3"><span className="text-accent-light dark:text-accent-dark mt-1">→</span>Semantic color—status and meaning, not decoration</li>
              <li className="flex gap-3"><span className="text-accent-light dark:text-accent-dark mt-1">→</span>Dark mode by default—terminal-first workflows</li>
              <li className="flex gap-3"><span className="text-accent-light dark:text-accent-dark mt-1">→</span>Precise, functional design over visual flair</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── Approach ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-text-light dark:text-text-dark">Approach</h2>
        <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Position as a Design System, Not Just a Chart Library</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            Instead of building "another chart library," I positioned this as a <strong className="text-text-light dark:text-text-dark">visual grammar</strong> plus <strong className="text-text-light dark:text-text-dark">implementation proof</strong>. Grounded in Leland Wilkinson's Grammar of Graphics theory, the system defines primitives that compose—not templates that constrain.
          </p>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            I chose full Vega (not Vega-Lite) deliberately. Vega-Lite is great for quick charts. Full Vega gives you precise control over every visual element—exactly what design systems work requires. It also demonstrates technical depth in a way that Vega-Lite simply can't.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Systems thinking', desc: 'Define primitives that compose, not templates that constrain' },
            { label: 'Design + code', desc: 'Figma designs and working Vega implementations, not one or the other' },
            { label: 'Theory-grounded', desc: 'Grammar of Graphics (Wilkinson) as the foundation' },
            { label: 'Audience-specific', desc: 'Designed for operational users, not generic BI consumers' },
          ].map((item) => (
            <div key={item.label} className="p-4 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
              <p className="font-semibold text-text-light dark:text-text-dark mb-2">{item.label}</p>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Design Process ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-12 text-text-light dark:text-text-dark">Design Process</h2>

        {/* Week 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#22BF4A]/15 text-[#22BF4A] text-xs font-semibold uppercase tracking-wider rounded-full">Week 1</span>
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">Foundations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-4">
                Before touching a single chart, I established the visual language. Color system with categorical, status, sequential, and diverging palettes. Typography pairing—Inter for UI labels, JetBrains Mono for metric values. A 4px base spacing unit with a documented scale.
              </p>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                All of this was captured in a <code className="px-1.5 py-0.5 bg-text-light/10 dark:bg-text-dark/10 rounded text-sm font-mono">tokens.json</code> file following W3C format for import via Tokens Studio in Figma. The goal was that any decision I made in Figma would flow through to the implementation automatically.
              </p>
            </div>
            <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">Visual foundations established</p>
              <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Color palettes: categorical, status, sequential, diverging</li>
                <li>• Typography: Inter (UI) + JetBrains Mono (metrics)</li>
                <li>• Spacing: 4px base unit, documented scale</li>
                <li>• Axis standards: grid opacity, tick spacing, label hierarchy</li>
                <li>• Design tokens in W3C format (<code className="text-sm font-mono">tokens.json</code>)</li>
              </ul>
            </div>
          </div>

          <Callout>
            <p className="text-[1.125rem] font-semibold text-teal-900 dark:text-teal-200 mb-2">Key decision: dark mode first.</p>
            <p className="text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              Operational teams work in terminals and dark UIs. Designing for light mode first and adapting to dark would have produced something that just felt ported. I designed dark-native and treated light mode as the variant.
            </p>
          </Callout>

          <FigmaEmbed
            url="https://www.figma.com/design/zlwrUcdxzKj6Hi0usSbqHv/Visual-System?node-id=0-1"
            height="600px"
            label="Visual System — Foundations"
            caption="Figma file — color variables, spacing system, typography styles"
          />
        </div>

        {/* Week 2 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#3B82F5]/15 text-[#3B82F5] text-xs font-semibold uppercase tracking-wider rounded-full">Week 2</span>
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">Chart Primitives</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              Designed 6 core chart types in Figma using TalkToFigma MCP for programmatic chart creation—which dramatically accelerated iteration. For each chart type, I documented when to use it, when not to use it, data structure requirements, interaction patterns, and accessibility considerations.
            </p>
            <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">6 chart primitives</p>
              <ol className="space-y-1.5 text-[1rem] text-text-light/80 dark:text-text-dark/80 list-decimal list-inside">
                <li>High-Density Time-Series Line</li>
                <li>Multi-Series Comparison Line</li>
                <li>Stacked Area Trend</li>
                <li>Histogram / Distribution</li>
                <li>Throughput Bar Comparison</li>
                <li>Status Timeline (Health Bands)</li>
              </ol>
            </div>
          </div>

          <Callout>
            <p className="text-[1.125rem] font-semibold text-teal-900 dark:text-teal-200 mb-2">Caught a coordinate system bug early.</p>
            <p className="text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              Initial programmatic chart creation placed elements outside frame bounds due to how Figma's API handles absolute vs. relative coordinates. I diagnosed the issue, documented the fix, and rebuilt all charts with proper positioning. The kind of bug that's invisible until you try to implement something real.
            </p>
          </Callout>

          <FigmaEmbed
            url="https://www.figma.com/design/zlwrUcdxzKj6Hi0usSbqHv/Visual-System?node-id=15-113"
            height="600px"
            label="Visual System — Chart Primitives"
            caption="Figma file — 6 chart primitives with usage annotations"
          />
        </div>

        {/* Week 3 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#F28500]/15 text-[#F28500] text-xs font-semibold uppercase tracking-wider rounded-full">Week 3</span>
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">Implementation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              Implemented 4 of 6 charts in full Vega. Each spec runs ~500 lines of JSON, using declarative data transformations, custom scales and axes, and precise mark encoding. Dark mode styling and hover interactions are defined in the spec itself—not applied via CSS after the fact.
            </p>
            <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">Charts implemented</p>
              <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Chart 1: Time-Series Line (13 data points, smooth interpolation)</li>
                <li>• Chart 2: Multi-Series Comparison (faceted marks, 3 series)</li>
                <li>• Chart 4: Histogram (5 bins, bell curve distribution)</li>
                <li>• Chart 6: Status Timeline (health bands, conditional rendering)</li>
              </ul>
            </div>
          </div>

          <Callout>
            <p className="text-[1.125rem] font-semibold text-teal-900 dark:text-teal-200 mb-2">The spacing audit.</p>
            <p className="text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              During implementation I caught that initial chart specs used <code className="px-1 py-0.5 bg-text-light/10 dark:bg-text-dark/10 rounded text-sm font-mono">padding: 5</code> instead of the documented <code className="px-1 py-0.5 bg-text-light/10 dark:bg-text-dark/10 rounded text-sm font-mono">&#123;top: 10, left: 60, right: 20, bottom: 40&#125;</code>. I systematically audited all 5 files and applied proper <code className="px-1 py-0.5 bg-text-light/10 dark:bg-text-dark/10 rounded text-sm font-mono">labelPadding: 8px</code> and <code className="px-1 py-0.5 bg-text-light/10 dark:bg-text-dark/10 rounded text-sm font-mono">symbolOffset: 8px</code> throughout. Design systems only work when implementation matches documentation exactly.
            </p>
          </Callout>

          <DemoEmbed
            src="/data-graphics/demo.html#chart1"
            height="600px"
            caption="Interactive demo — scroll through all 4 charts, try the Simulate buttons"
          />
        </div>
      </motion.section>

      {/* ── Interactive Enhancements ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-text-light dark:text-text-dark">Interactive Enhancements</h2>

        {/* Simulations */}
        <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Real-Time Simulations</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            Most visualization portfolios are static. I added Simulate buttons to each chart so you can watch them respond to real operational scenarios—live metric streaming, traffic spikes, performance degradation, cascading service incidents. It's the difference between showing a screenshot of a dashboard and showing someone how a dashboard actually behaves.
          </p>
          <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">4 simulation scenarios</p>
            <ul className="space-y-3 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li><strong className="text-text-light dark:text-text-dark">Chart 1:</strong> Live metric stream — new data points every 1.5s, sliding window, CPU threshold alert at &gt;90%</li>
              <li><strong className="text-text-light dark:text-text-dark">Chart 2:</strong> Traffic spike — all environments increase, Production fastest, shows scale differences under load</li>
              <li><strong className="text-text-light dark:text-text-dark">Chart 4:</strong> Performance degradation — distribution shifts right toward higher latency</li>
              <li><strong className="text-text-light dark:text-text-dark">Chart 6:</strong> Cascading incident — Database fails → Auth degrades → full recovery over 10 seconds</li>
            </ul>
          </div>
        </div>

        <DemoEmbed
          src="/data-graphics/demo.html#chart6"
          height="550px"
          caption="Chart 6: Status Timeline — click 'Simulate Incident' to watch the cascading failure"
        />

        {/* Theming */}
        <h3 className="text-xl font-semibold mt-12 mb-4 text-text-light dark:text-text-dark">Light/Dark Mode Theming</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            All 50+ CSS custom properties update on toggle. Vega chart specs are re-rendered with updated color values. The system auto-detects OS preference on first load, saves the user's explicit choice to localStorage, and listens for OS theme changes in real time—only overriding the saved preference if none exists.
          </p>
          <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">Theme UX flow</p>
            <ol className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80 list-decimal list-inside">
              <li>First visit → matches OS theme automatically</li>
              <li>User toggles → saves preference, stays fixed</li>
              <li>OS changes → only updates if no saved preference</li>
            </ol>
          </div>
        </div>

        <DemoEmbed
          src="/data-graphics/demo.html#chart2"
          height="520px"
          caption="Use the ☀️ / 🌙 toggle in the demo's nav bar to switch themes — all charts re-render instantly"
        />
      </motion.section>

      {/* ── Outcomes ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-text-light dark:text-text-dark">Outcomes & Deliverables</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard number="17" label="documentation files" />
          <StatCard number="6" label="chart primitives designed" />
          <StatCard number="4" label="Vega implementations" />
          <StatCard number="~2k" label="lines of Vega JSON" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">Documentation</p>
            <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li>• Design thesis and project plan</li>
              <li>• Grammar of graphics breakdown</li>
              <li>• Color system and spacing standards</li>
              <li>• Axis specifications</li>
              <li>• Interaction patterns</li>
              <li>• Chart usage guidelines</li>
              <li>• Theming system docs</li>
              <li>• Figma setup guide</li>
            </ul>
          </div>
          <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">Design Assets</p>
            <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li>• Figma file with 6 chart primitives</li>
              <li>• Design tokens (W3C format)</li>
              <li>• Light/dark mode variables</li>
              <li>• Typography and color styles</li>
              <li>• Spacing documentation board</li>
            </ul>
          </div>
          <div className="p-5 bg-text-light/5 dark:bg-text-dark/5 border border-text-light/10 dark:border-text-dark/10 rounded-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50 mb-4">Implementation</p>
            <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li>• 4 Vega chart specs (~500 lines each)</li>
              <li>• Interactive demo with simulations</li>
              <li>• Unified demo page with theming</li>
              <li>• Sticky nav, smooth scroll, active states</li>
              <li>• Real-time OS theme detection</li>
            </ul>
          </div>
        </div>

        <Callout>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300 mb-3">What makes this different</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
            <div className="flex gap-2"><span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Interactive, not static mockups</div>
            <div className="flex gap-2"><span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Complete system, not isolated components</div>
            <div className="flex gap-2"><span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Theory-grounded (Grammar of Graphics)</div>
            <div className="flex gap-2"><span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Audience-specific (operational, not generic BI)</div>
          </div>
        </Callout>
      </motion.section>

      {/* ── Key Learnings ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-10 text-text-light dark:text-text-dark">Key Learnings</h2>

        <div className="space-y-8">
          {[
            {
              number: '01',
              title: 'Design systems require implementation integrity',
              body: 'Documentation is worthless if the code doesn\'t match it. When I caught the spacing inconsistency mid-project, I didn\'t patch individual files—I audited the system and fixed the root cause across all of them. Every 8px matters.',
            },
            {
              number: '02',
              title: 'Audience specificity drives design decisions',
              body: 'Grid lines over bars (not behind) in histograms. 40% opacity so grids don\'t overpower data. Dark mode as the primary experience. These aren\'t generic "best practices"—they\'re decisions made for a specific user in a specific context. Generic guidance fails operational users.',
            },
            {
              number: '03',
              title: 'Theory + practice = credibility',
              body: 'Grounding the project in Grammar of Graphics proved I understand visualization theory, not just tools. Vega implementation proved I can execute at a systems level. Senior roles require both. Design without implementation is incomplete; implementation without theory is shallow.',
            },
            {
              number: '04',
              title: 'Interactive beats static every time',
              body: 'Before simulations: technically correct charts that are easy to scroll past. After simulations: click "Simulate Incident" → watch cascading failure unfold → memorable. It\'s the difference between showing work and demonstrating understanding.',
            },
          ].map((item) => (
            <div key={item.number} className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-8 pb-8 border-b border-text-light/10 dark:border-text-dark/10 last:border-0">
              <div className="text-4xl font-mono font-bold text-text-light/20 dark:text-text-dark/20 leading-none pt-1">{item.number}</div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">{item.title}</h3>
                <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Reflection ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mb-28"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-text-light dark:text-text-dark">Reflection</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">What went well</h3>
            <ul className="space-y-3 text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              <li><strong className="text-text-light dark:text-text-dark">Rapid iteration in Figma</strong> — TalkToFigma MCP enabled programmatic chart creation that would have taken days by hand to do in a week.</li>
              <li><strong className="text-text-light dark:text-text-dark">Documentation-first</strong> — Writing the design thesis before touching Figma clarified audience, constraints, and principles, which guided every decision after that.</li>
              <li><strong className="text-text-light dark:text-text-dark">Systematic problem-solving</strong> — When the spacing inconsistency appeared, I didn't patch—I audited and fixed the root cause.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">What I'd do differently</h3>
            <ul className="space-y-3 text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              <li><strong className="text-text-light dark:text-text-dark">Earlier alignment checks</strong> — Should have referenced spacing documentation while writing initial Vega specs, not discovered the mismatch afterward.</li>
              <li><strong className="text-text-light dark:text-text-dark">User testing</strong> — Would test the simulations with actual engineers to validate that the operational scenarios are realistic.</li>
              <li><strong className="text-text-light dark:text-text-dark">Complete the library</strong> — Charts 3 and 5 (Stacked Area and Throughput Bar) are designed but not yet implemented in Vega.</li>
            </ul>
          </div>
        </div>

        <Callout>
          <p className="text-lg font-semibold text-teal-900 dark:text-teal-200 mb-3">Why this project matters for companies like Fivetran, Datadog, or any infrastructure-focused team</p>
          <p className="text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
            This project proves I can define visual systems, implement them with precision, and understand operational workflows deeply enough to design for them—not just translate a Figma file into code, but make principled decisions about what a visualization should do, why, and for whom.
          </p>
        </Callout>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12"
      >
        <div className="p-8 md:p-12 bg-[#0D0D0E] border border-[#33353A] rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-normal text-white mb-4">Try It Yourself</h2>
          <p className="text-[#999AA6] text-lg mb-8 max-w-xl mx-auto">
            Toggle between light and dark mode. Click the Simulate buttons. Watch the Status Timeline incident unfold in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/ChristinaDay/datagraphics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F5] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-colors"
            >
              Explore on GitHub →
            </a>
          </div>
        </div>
      </motion.section>

    </article>
  );
}

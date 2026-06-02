'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import dynamic from 'next/dynamic';
import {
  chart1Spec,
  chart2Spec,
  chart3Spec,
  chart4Spec,
  chart5Spec,
  chart6Spec,
  chart7Spec,
} from '@/data/chartSpecs';

// Load VegaChart client-side only (uses vega-embed, which needs the browser)
const VegaChart = dynamic(() => import('@/components/ui/VegaChart'), { ssr: false });

// Figma file embed with faked browser chrome
function FigmaEmbed({
  url,
  height = '600px',
  caption,
  label,
}: {
  url: string;
  height?: string;
  caption?: string;
  label?: string;
}) {
  const embedSrc = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  return (
    <div className="my-6 w-full">
      <div className="flex items-center space-x-3 rounded-t-lg bg-gray-800 px-4 py-3 dark:bg-gray-900">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 truncate rounded bg-gray-700 px-3 py-1 font-mono text-xs text-gray-300 dark:bg-gray-600">
          figma.com: {label ?? 'Visual System'}
        </div>
      </div>
      <iframe
        src={embedSrc}
        style={{ height }}
        className="w-full rounded-b-lg border-x border-b border-gray-700"
        title={`Figma: ${label ?? 'Visual System'}`}
        allowFullScreen
        loading="lazy"
      />
      {caption && (
        <p className="mt-3 text-center text-sm text-text-light/60 dark:text-text-dark/60">
          {caption}
        </p>
      )}
    </div>
  );
}

// iframe embed kept only for the simulate demo (needs JS event loop)
function SimulateEmbed({
  chartNum,
  height = '480px',
  caption,
}: {
  chartNum: number;
  height?: string;
  caption?: string;
}) {
  return (
    <div className="w-full">
      <iframe
        src={`/data-graphics/chart${chartNum}.html`}
        style={{ height }}
        className="w-full rounded-xl border border-[#33353A] bg-[#0D0D0E]"
        title={`Chart 0${chartNum}: Interactive Simulation`}
        loading="lazy"
      />
      {caption && (
        <p className="mt-3 text-center text-sm text-text-light/60 dark:text-text-dark/60">
          {caption}
        </p>
      )}
    </div>
  );
}

// Styled highlight / callout box
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50 p-5 dark:border-teal-700 dark:from-teal-900/20 dark:to-blue-900/20 md:my-8 md:p-6">
      {children}
    </div>
  );
}

// Stat card used in outcomes
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 text-center dark:border-text-dark/10 dark:bg-text-dark/5">
      <div className="mb-1 font-mono text-3xl font-bold text-accent-light dark:text-accent-dark">
        {number}
      </div>
      <div className="text-sm text-text-light/60 dark:text-text-dark/60">{label}</div>
    </div>
  );
}

// Labelled chart card used in the hero grid
function ChartCard({ spec, label }: { spec: Record<string, unknown>; label: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#33353A] bg-[#0D0D0E] p-4">
      <VegaChart spec={spec} animate />
      <p className="mt-2 text-center font-mono text-xs text-[#999AA6]">{label}</p>
    </div>
  );
}

// Chart with its own theme toggle (independent of global theme)
function ThemedChartDemo({ spec, label }: { spec: Record<string, unknown>; label: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const isDark = theme === 'dark';

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-[#f9fafb] p-4 dark:border-[#33353A] dark:bg-[#0D0D0E]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-mono text-xs text-gray-500 dark:text-[#999AA6]">{label}</p>
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="rounded-md bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      <VegaChart spec={spec} forcedTheme={theme} />
    </div>
  );
}

export default function DataGraphicsCaseStudyPage() {
  return (
    <article className="mx-auto max-w-[100rem] px-4 pb-12 text-[#0f172a] dark:text-white md:px-12 md:pb-24 lg:px-20 lg:pb-40">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="mb-8 text-left font-serif text-5xl font-normal leading-hero text-text-light dark:text-text-dark md:text-5xl lg:text-6xl">
          Operational Data Graphics: A Visualization System for Infrastructure Teams
        </h1>
        <ProjectSubtitle>
          A visualization design system for operational monitoring, from visual foundations and
          design tokens to production-ready Vega implementations with real-time simulations.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Designer, Design Engineer"
          employer="Personal Project"
          platforms="Figma, Vega, JavaScript, HTML/CSS, TalkToFigma MCP, Cursor"
          areas="Data Visualization, Design Systems, Design Engineering, Interaction Design"
          year="2026"
        />
      </motion.div>

      {/* ── Hero chart grid, all 6 primitives ── */}
      <div className="mb-16 w-full">
        <motion.div
          className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {[
            { spec: chart1Spec, label: '01: High-Density Time-Series Line' },
            { spec: chart2Spec, label: '02: Multi-Series Comparison' },
            { spec: chart3Spec, label: '03: Stacked Area Trend' },
            { spec: chart4Spec, label: '04: Histogram / Distribution' },
            { spec: chart5Spec, label: '05: Throughput Bar Comparison' },
            { spec: chart6Spec, label: '06: Status Timeline (Health Bands)' },
          ].map(({ spec, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              <ChartCard spec={spec} label={label} />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <a
            href="https://github.com/ChristinaDay/datagraphics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-light underline underline-offset-2 dark:text-accent-dark"
          >
            View source on GitHub →
          </a>
        </div>
      </div>

      {/* ── Overview ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="mb-8 font-serif text-3xl font-normal text-text-light dark:text-text-dark md:text-4xl">
          Overview
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Operational monitoring teams don't have a shared visual language. Every team assembles
            dashboards from generic libraries, inconsistent signals, inconsistent color semantics,
            no common foundation. The question this project addresses isn't how to make
            better-looking charts, but how to establish the grammar that makes any chart legible at
            2am.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            I built a complete visualization design system: defined primitives, composition rules,
            and design tokens that flow from Figma to Vega to production code. Not better-looking
            components, a shared grammar teams can build from consistently.
          </p>
        </div>
      </motion.section>

      {/* ── The Problem ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="mb-8 font-serif text-3xl font-normal text-text-light dark:text-text-dark md:text-4xl">
          The Problem
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              Most dashboards are built with business intelligence aesthetics, decorative elements,
              saturated colors, excessive whitespace. Fine for executive presentations. Wrong for
              engineers monitoring production systems at 2am.
            </p>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              There's no standardized visual grammar for operational graphics. Teams cobble charts
              together from generic libraries, producing inconsistent, high-noise interfaces where
              the signal gets buried.
            </p>
          </div>
          <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
              What engineers actually need
            </p>
            <ul className="space-y-3 text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              <li className="flex gap-3">
                <span className="mt-1 text-accent-light dark:text-accent-dark">→</span>High
                information density, scan patterns quickly
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-accent-light dark:text-accent-dark">→</span>Minimal
                visual noise, focus on anomalies
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-accent-light dark:text-accent-dark">→</span>Semantic
                color, status and meaning, not decoration
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-accent-light dark:text-accent-dark">→</span>Dark mode by
                default, terminal-first workflows
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-accent-light dark:text-accent-dark">→</span>Precise,
                functional design over visual flair
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── Approach ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="mb-8 font-serif text-3xl font-normal text-text-light dark:text-text-dark md:text-4xl">
          Approach
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            Rather than another chart library, this is a{' '}
            <strong className="text-text-light dark:text-text-dark">visual grammar</strong> plus{' '}
            <strong className="text-text-light dark:text-text-dark">implementation proof</strong>.
            Grounded in Wilkinson's Grammar of Graphics, the system defines primitives that compose,
            not templates that constrain.
          </p>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            I chose full Vega over Vega-Lite. Vega-Lite is faster for prototyping; full Vega gives
            precise control over every visual element, which is what systems-level work requires.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: 'Systems thinking',
              desc: 'Define primitives that compose, not templates that constrain',
            },
            {
              label: 'Design + code',
              desc: 'Figma designs and working Vega implementations, not one or the other',
            },
            { label: 'Theory-grounded', desc: 'Grammar of Graphics (Wilkinson) as the foundation' },
            {
              label: 'Audience-specific',
              desc: 'Designed for operational users, not generic BI consumers',
            },
          ].map(item => (
            <div
              key={item.label}
              className="rounded-xl border border-text-light/10 bg-text-light/5 p-4 dark:border-text-dark/10 dark:bg-text-dark/5"
            >
              <p className="mb-2 font-semibold text-text-light dark:text-text-dark">{item.label}</p>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Design Process ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="mb-12 font-serif text-3xl font-normal text-text-light dark:text-text-dark md:text-4xl">
          Design Process
        </h2>

        {/* Week 1 */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">
              Foundations
            </h3>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                Before any chart work, I established the visual language: color palettes
                (categorical, status, sequential, diverging), a typography pairing (Inter for
                labels, JetBrains Mono for metrics), and a 4px base spacing unit.
              </p>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                Everything captured in{' '}
                <code className="rounded bg-text-light/10 px-1.5 py-0.5 font-mono text-sm dark:bg-text-dark/10">
                  tokens.json
                </code>{' '}
                (W3C format) for import via Tokens Studio, so design decisions propagate to
                implementation automatically.
              </p>
            </div>
            <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
                Visual foundations established
              </p>
              <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Color palettes: categorical, status, sequential, diverging</li>
                <li>• Typography: Inter (UI) + JetBrains Mono (metrics)</li>
                <li>• Spacing: 4px base unit, documented scale</li>
                <li>• Axis standards: grid opacity, tick spacing, label hierarchy</li>
                <li>
                  • Design tokens in W3C format (
                  <code className="font-mono text-sm">tokens.json</code>)
                </li>
              </ul>
            </div>
          </div>

          <Callout>
            <p className="mb-2 text-[1.125rem] font-semibold text-teal-900 dark:text-teal-200">
              Key decision: dark mode first.
            </p>
            <p className="text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              Operational teams work in terminals and dark UIs. Designing light-first and adapting
              to dark would feel ported. I designed dark-native and treated light as the variant.
            </p>
          </Callout>

          <FigmaEmbed
            url="https://www.figma.com/design/zlwrUcdxzKj6Hi0usSbqHv/Visual-System?node-id=0-1"
            height="600px"
            label="Visual System: Foundations"
            caption="Figma file, color variables, spacing system, typography styles"
          />
        </div>

        {/* Week 2 */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">
              Chart Primitives
            </h3>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              I designed 6 chart types in Figma using TalkToFigma MCP for programmatic creation.
              Each includes usage guidelines, data structure requirements, interaction patterns, and
              accessibility considerations.
            </p>
            <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
                6 chart primitives
              </p>
              <ol className="list-inside list-decimal space-y-1.5 text-[1rem] text-text-light/80 dark:text-text-dark/80">
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
            <p className="mb-2 text-[1.125rem] font-semibold text-teal-900 dark:text-teal-200">
              Identified and resolved a coordinate system issue during programmatic generation.
            </p>
            <p className="text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              Initial programmatic creation placed elements outside frame bounds, Figma's API
              handles absolute vs. relative coordinates differently than expected. I diagnosed the
              root cause, documented the fix, and rebuilt all charts with correct positioning.
            </p>
          </Callout>

          <FigmaEmbed
            url="https://www.figma.com/design/zlwrUcdxzKj6Hi0usSbqHv/Visual-System?node-id=15-113"
            height="500px"
            label="Visual System: Chart Primitives"
            caption="Figma designs, 6 chart primitives with usage annotations"
          />
        </div>

        {/* Week 3 */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">
              Implementation
            </h3>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              I delivered four of 6 charts in full Vega. Each spec uses declarative data
              transformations, custom scales and axes, and precise mark encoding, dark mode and
              hover interactions defined in the spec, not applied via CSS after the fact.
            </p>
            <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
                Charts implemented
              </p>
              <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Chart 1: Time-Series Line (13 data points, smooth interpolation)</li>
                <li>• Chart 2: Multi-Series Comparison (faceted marks, 3 series)</li>
                <li>• Chart 4: Histogram (5 bins, bell curve distribution)</li>
                <li>• Chart 6: Status Timeline (health bands, conditional rendering)</li>
              </ul>
            </div>
          </div>

          <Callout>
            <p className="mb-2 text-[1.125rem] font-semibold text-teal-900 dark:text-teal-200">
              Systematic quality assurance: the spacing audit.
            </p>
            <p className="text-[1.0625rem] text-text-light/80 dark:text-text-dark/80">
              Initial chart specs used{' '}
              <code className="rounded bg-text-light/10 px-1 py-0.5 font-mono text-sm dark:bg-text-dark/10">
                padding: 5
              </code>{' '}
              instead of the documented{' '}
              <code className="rounded bg-text-light/10 px-1 py-0.5 font-mono text-sm dark:bg-text-dark/10">
                &#123;top: 10, left: 60, right: 20, bottom: 40&#125;
              </code>
              . I ran a systematic audit and standardized{' '}
              <code className="rounded bg-text-light/10 px-1 py-0.5 font-mono text-sm dark:bg-text-dark/10">
                labelPadding: 8px
              </code>{' '}
              and{' '}
              <code className="rounded bg-text-light/10 px-1 py-0.5 font-mono text-sm dark:bg-text-dark/10">
                symbolOffset: 8px
              </code>{' '}
              across all files. Documentation and code must align.
            </p>
          </Callout>
        </div>
      </motion.section>

      {/* ── Interactive Enhancements ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="mb-8 font-serif text-3xl font-normal text-text-light dark:text-text-dark md:text-4xl">
          Interactive Enhancements
        </h2>

        {/* Simulations */}
        <h3 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
          Real-Time Simulations
        </h3>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            Most portfolios show static mockups. These simulations demonstrate how charts behave
            under real operational conditions: live metric streaming, traffic spikes, performance
            degradation, cascading failures. Static displays tell; simulations prove it.
          </p>
          <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
              4 simulation scenarios
            </p>
            <ul className="space-y-3 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li>
                <strong className="text-text-light dark:text-text-dark">Chart 1:</strong> Live
                metric stream, new data points every 1.5s, sliding window, CPU threshold alert at
                &gt;90%
              </li>
              <li>
                <strong className="text-text-light dark:text-text-dark">Chart 2:</strong> Traffic
                spike, all environments increase, Production fastest, shows scale differences under
                load
              </li>
              <li>
                <strong className="text-text-light dark:text-text-dark">Chart 4:</strong>{' '}
                Performance degradation, distribution shifts right toward higher latency
              </li>
              <li>
                <strong className="text-text-light dark:text-text-dark">Chart 6:</strong> Cascading
                incident, Database fails → Auth degrades → full recovery over 10 seconds
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SimulateEmbed
            chartNum={1}
            height="420px"
            caption="Chart 01: Live metric stream with CPU alert threshold"
          />
          <SimulateEmbed
            chartNum={2}
            height="420px"
            caption="Chart 02: Traffic spike across environments"
          />
        </div>

        <SimulateEmbed
          chartNum={6}
          height="500px"
          caption="Chart 06: Click 'Simulate Incident' to watch the cascading failure unfold in real time"
        />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SimulateEmbed
            chartNum={4}
            height="420px"
            caption="Chart 04: Performance degradation as latency distribution shifts"
          />
          <SimulateEmbed
            chartNum={7}
            height="420px"
            caption="Chart 07: Error rate spike as 4xx/5xx responses increase"
          />
        </div>

        {/* Theming */}
        <h3 className="mb-4 mt-12 text-xl font-semibold text-text-light dark:text-text-dark">
          Light/Dark Mode Theming
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            All 50+ CSS custom properties update on toggle; Vega specs re-render with updated
            colors. The system auto-detects OS preference on first load, saves explicit choices to
            localStorage, and listens for OS changes, only applying them when no saved preference
            exists.
          </p>
          <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
              Theme UX flow
            </p>
            <ol className="list-inside list-decimal space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li>First visit → matches OS theme automatically</li>
              <li>User toggles → saves preference, stays fixed</li>
              <li>OS changes → only updates if no saved preference</li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ThemedChartDemo spec={chart1Spec} label="Chart 01: Time-series line" />
          <ThemedChartDemo spec={chart2Spec} label="Chart 02: Multi-series comparison" />
        </div>
      </motion.section>

      {/* ── Outcomes ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="mb-8 font-serif text-3xl font-normal text-text-light dark:text-text-dark md:text-4xl">
          Outcomes & Deliverables
        </h2>

        <p className="mb-10 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
          The goal was a system complete enough to actually use, not a proof of concept, but a
          working foundation a team could extend.
        </p>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard number="17" label="documentation files" />
          <StatCard number="6" label="chart primitives designed" />
          <StatCard number="4" label="Vega implementations" />
          <StatCard number="~2k" label="lines of Vega JSON" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
              Documentation
            </p>
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
          <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
              Design Assets
            </p>
            <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li>• Figma file with 6 chart primitives</li>
              <li>• Design tokens (W3C format)</li>
              <li>• Light/dark mode variables</li>
              <li>• Typography and color styles</li>
              <li>• Spacing documentation board</li>
            </ul>
          </div>
          <div className="rounded-xl border border-text-light/10 bg-text-light/5 p-5 dark:border-text-dark/10 dark:bg-text-dark/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-light/50 dark:text-text-dark/50">
              Implementation
            </p>
            <ul className="space-y-2 text-[1rem] text-text-light/80 dark:text-text-dark/80">
              <li>• 4 Vega chart specs (~500 lines each)</li>
              <li>• Interactive demo with simulations</li>
              <li>• Unified demo page with theming</li>
              <li>• Sticky nav, smooth scroll, active states</li>
              <li>• Real-time OS theme detection</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── Key Learnings ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="mb-10 font-serif text-3xl font-normal text-text-light dark:text-text-dark md:text-4xl">
          Key Learnings
        </h2>

        <div className="space-y-8">
          {[
            {
              number: '01',
              title: 'Design systems require implementation integrity',
              body: "A design system is only as strong as the contract between its documentation and its code. When those diverge, even by a few pixels of padding, the system's credibility unravels. Precision in implementation isn't pedantry; it's the proof of concept.",
            },
            {
              number: '02',
              title: 'Audience specificity drives design decisions',
              body: "Grid lines over bars (not behind) in histograms. 40% opacity so grids don't overpower data. Dark mode as the primary experience. These aren't generic \"best practices\", they're decisions made for a specific user in a specific context. Generic guidance fails operational users.",
            },
            {
              number: '03',
              title: 'Writing specs is a design act',
              body: "Once I was authoring Vega, I was thinking in the same terms as the design: marks, transforms, scales. The vocabulary maps directly. The boundary between design tool and implementation tool blurred in a way I didn't expect, and that changes how you think about handoff. When design and code share a conceptual language, most of the translation cost disappears.",
            },
            {
              number: '04',
              title: 'Interactive demonstrations create deeper engagement',
              body: 'Static charts, even correct ones, get scrolled past. Simulations of real operational scenarios, cascading failures, traffic spikes, create experiences that showcase both design thinking and technical depth. The difference is displaying work versus demonstrating capability.',
            },
          ].map(item => (
            <div
              key={item.number}
              className="grid grid-cols-1 gap-4 border-b border-text-light/10 pb-8 last:border-0 dark:border-text-dark/10 md:grid-cols-[5rem_1fr] md:gap-8"
            >
              <div className="pt-1 font-mono text-4xl font-bold leading-none text-text-light/20 dark:text-text-dark/20">
                {item.number}
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-text-light dark:text-text-dark">
                  {item.title}
                </h3>
                <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="rounded-2xl border border-[#33353A] bg-[#0D0D0E] p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-2xl font-normal text-white md:text-3xl">
            Explore the Source
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-[#999AA6]">
            The full system, Vega specs, design tokens, simulation logic, is on GitHub.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/ChristinaDay/datagraphics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F5] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2563eb]"
            >
              Explore on GitHub →
            </a>
          </div>
        </div>
      </motion.section>
    </article>
  );
}

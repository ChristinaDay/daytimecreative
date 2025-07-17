import React, { useState } from 'react';
import { Blockquote } from '../typography/DropQuote';
import { ScrollableImageContainer } from '../ScrollableImageContainer';

const colors = [
  { name: 'Background Light', class: 'bg-background-light', hex: '#ffffff' },
  { name: 'Background Dark', class: 'bg-background-dark', hex: '#0f172a' },
  { name: 'Text Light', class: 'bg-text-light', hex: '#1e293b' },
  { name: 'Text Dark', class: 'bg-text-dark', hex: '#f8fafc' },
  { name: 'Accent Light', class: 'bg-accent-light', hex: '#3b82f6' },
  { name: 'Accent Dark', class: 'bg-accent-dark', hex: '#60a5fa' },
  { name: 'Surface Light', class: 'bg-surface-light', hex: '#f1f5f9' },
  { name: 'Surface Dark', class: 'bg-surface-dark', hex: '#1e293b' },
  { name: 'Opal Pink Light', class: '', hex: '#ffd1dc' },
  { name: 'Opal Blue Light', class: '', hex: '#d4f1f9' },
  { name: 'Opal Purple Light', class: '', hex: '#e6e6fa' },
  { name: 'Opal Green Light', class: '', hex: '#e0f7fa' },
  { name: 'Opal Pink Dark', class: '', hex: '#4a1e3a' },
  { name: 'Opal Blue Dark', class: '', hex: '#1a365d' },
  { name: 'Opal Purple Dark', class: '', hex: '#2d1b3b' },
  { name: 'Opal Green Dark', class: '', hex: '#1a3a3a' },
];

const codeSample = `<Button onClick={() => alert('Clicked!')}>
  Click me
</Button>`;

export default function StyleGuideMiniPreview() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={
        `relative w-full max-w-4xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl p-0 overflow-hidden animate-fadein ` +
        (dark ? 'bg-gradient-to-br from-background-dark via-zinc-900 to-background-dark text-text-dark' : 'bg-gradient-to-br from-white via-blue-50 to-purple-50 text-text-light')
      }
      style={{ minHeight: 700 }}
    >
      {/* Light/Dark Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-xs font-semibold bg-white/80 dark:bg-background-dark/80 shadow hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      {/* Header */}
      <div className="w-full pt-12 pb-4 px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-2">Style Guide Preview</h2>
        <p className="text-lg text-text-light/70 dark:text-text-dark/70 font-normal mb-0">A living system for design, code, and workflow.</p>
      </div>
      {/* Font Families Section */}
      <section className="mb-10 px-8">
        <h3 className="text-xl font-semibold mb-6 text-center tracking-wide uppercase text-accent-light dark:text-accent-dark">Font Families</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-2xl font-serif">Heading Sample (Serif)</span>
            <div className="text-xs mt-2 text-text-light/60 dark:text-text-dark/60">Prata (font-serif)</div>
          </div>
          <div>
            <span className="text-2xl font-sans">Body Sample (Sans)</span>
            <div className="text-xs mt-2 text-text-light/60 dark:text-text-dark/60">Inter (font-sans)</div>
          </div>
          <div>
            <span className="text-2xl font-mono">Mono Sample (Mono)</span>
            <div className="text-xs mt-2 text-text-light/60 dark:text-text-dark/60">Geist Mono (font-mono)</div>
          </div>
        </div>
      </section>
      {/* Typography */}
      <div className="px-8 pt-4 pb-8">
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-6 text-center tracking-wide uppercase text-accent-light dark:text-accent-dark">Typography</h3>
          {/* Real-World Heading Samples */}
          <div className="mb-8 space-y-8">
            {/* Hero Heading (Serif) */}
            <div>
              <div className="font-bold text-sm uppercase mb-1 text-accent-light dark:text-accent-dark">Hero Heading (Serif)</div>
              <div className="text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-2">
                A Contemporary Approach to Web Building
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-4">
                className="text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8"
              </div>
            </div>
            {/* Hero Heading (Sans) - if used */}
            <div>
              <div className="font-bold text-sm uppercase mb-1 text-accent-light dark:text-accent-dark">Hero Heading (Sans)</div>
              <div className="text-5xl md:text-5xl lg:text-6xl font-sans font-normal text-text-light dark:text-text-dark leading-hero mb-2">
                A Contemporary Approach to Web Building
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-4">
                className="text-5xl md:text-5xl lg:text-6xl font-sans font-normal text-text-light dark:text-text-dark leading-hero mb-8"
              </div>
            </div>
            {/* Section Heading (Serif) */}
            <div>
              <div className="font-bold text-sm uppercase mb-1 text-accent-light dark:text-accent-dark">Section Heading (Serif)</div>
              <div className="text-2xl font-bold mb-2 text-text-light dark:text-text-dark font-serif">
                Design & Tech Stack Choices
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-4">
                className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark font-serif"
              </div>
            </div>
            {/* Section Heading (Sans) */}
            <div>
              <div className="font-bold text-sm uppercase mb-1 text-accent-light dark:text-accent-dark">Section Heading (Sans)</div>
              <div className="text-2xl font-bold mb-2 text-text-light dark:text-text-dark font-sans">
                Design & Tech Stack Choices
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-4">
                className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark font-sans"
              </div>
            </div>
            {/* Subsection Heading (Sans) */}
            <div>
              <div className="font-bold text-sm uppercase mb-1 text-accent-light dark:text-accent-dark">Subsection Heading (Sans)</div>
              <div className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark font-sans">
                Why this stack?
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-4">
                className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark font-sans"
              </div>
            </div>
            {/* Subsection Heading (Serif) - if used */}
            <div>
              <div className="font-bold text-sm uppercase mb-1 text-accent-light dark:text-accent-dark">Subsection Heading (Serif)</div>
              <div className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark font-serif">
                Why this stack?
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-4">
                className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark font-serif"
              </div>
            </div>
          </div>
          {/* h1–h6 Block: Actual Font Family for Each Level */}
          <div className="mb-8 space-y-2">
            <div>
              <h1 className="font-serif font-normal text-5xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark leading-hero">Heading 1 (h1)</h1>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-2">Prata (font-serif), className="font-serif font-normal text-5xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark leading-hero"</div>
            </div>
            <div>
              <h2 className="font-sans text-2xl font-bold text-text-light dark:text-text-dark">Heading 2 (h2)</h2>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-2">Inter (font-sans), className="font-sans text-2xl font-bold text-text-light dark:text-text-dark"</div>
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-text-light dark:text-text-dark">Heading 3 (h3)</h3>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-2">Inter (font-sans), className="font-sans text-xl font-bold text-text-light dark:text-text-dark"</div>
            </div>
            <div>
              <h4 className="font-sans text-lg font-semibold text-text-light dark:text-text-dark">Heading 4 (h4)</h4>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-2">Inter (font-sans), className="font-sans text-lg font-semibold text-text-light dark:text-text-dark"</div>
            </div>
            <div>
              <h5 className="font-sans text-base font-semibold text-text-light dark:text-text-dark">Heading 5 (h5)</h5>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-2">Inter (font-sans), className="font-sans text-base font-semibold text-text-light dark:text-text-dark"</div>
            </div>
            <div>
              <h6 className="font-sans text-sm font-semibold text-text-light dark:text-text-dark">Heading 6 (h6)</h6>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60 mb-2">Inter (font-sans), className="font-sans text-sm font-semibold text-text-light dark:text-text-dark"</div>
            </div>
          </div>
        </section>
        {/* Color Palette */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-6 text-center tracking-wide uppercase text-accent-light dark:text-accent-dark">Color Palette</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-center">
            {colors.map((color) => (
              <div key={color.name} className="flex flex-col items-center group">
                <div
                  className={
                    'w-14 h-14 rounded-xl border border-gray-200 dark:border-gray-700 mb-1 transition-shadow group-hover:shadow-xl group-hover:scale-105 duration-200 ' +
                    (color.class || '')
                  }
                  style={color.class ? {} : { background: color.hex }}
                />
                <span className="text-xs text-center font-mono font-medium">{color.name}</span>
                <span className="text-[10px] text-gray-500 font-mono">{color.hex}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Buttons */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-6 text-center tracking-wide uppercase text-accent-light dark:text-accent-dark">Buttons</h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <button className="px-6 py-2 rounded-lg bg-accent-light dark:bg-accent-dark text-white font-semibold shadow-md hover:bg-accent-dark dark:hover:bg-accent-light transition-colors text-base">
              Primary
            </button>
            <button className="px-6 py-2 rounded-lg bg-surface-light dark:bg-surface-dark text-accent-light dark:text-accent-dark font-semibold border border-accent-light dark:border-accent-dark shadow-md hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors text-base">
              Secondary
            </button>
            <button className="px-6 py-2 rounded-lg bg-transparent text-accent-light dark:text-accent-dark font-semibold border border-accent-light dark:border-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors text-base">
              Outline
            </button>
            <button className="px-6 py-2 rounded-lg bg-accent-light dark:bg-accent-dark text-white font-semibold opacity-50 cursor-not-allowed text-base" disabled>
              Disabled
            </button>
          </div>
        </section>
        {/* Card Pattern & Layout Pattern */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {/* Card Pattern */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4 text-center tracking-wide uppercase text-accent-light dark:text-accent-dark">Card Pattern</h3>
              <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl max-w-xs w-full shadow-md">
                <h4 className="text-lg font-semibold mb-2 text-accent-light dark:text-accent-dark">Info Card</h4>
                <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                  This is a sample card pattern. Use for features, highlights, or structured info.
                </p>
              </div>
            </div>
            {/* Layout Pattern: Scrollable Image */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4 text-center tracking-wide uppercase text-accent-light dark:text-accent-dark">Layout Pattern</h3>
              <div className="max-w-xs w-full">
                <ScrollableImageContainer
                  src="/images/Ten-Spot-The-ultimate-workforce-engagement-platform-.png"
                  alt="Mini Scrollable Demo"
                  caption="Mini scrollable image demo"
                  frameType="browser"
                  height="small"
                  backgroundColor="white"
                  url="example.com/demo"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Code Snippet */}
        <section className="mb-2">
          <h3 className="text-xl font-semibold mb-4 text-center tracking-wide uppercase text-accent-light dark:text-accent-dark">Code Snippet</h3>
          <pre className="code-sublime w-fit max-w-full px-4 text-sm overflow-x-auto rounded-xl border shadow mx-auto" style={{background: dark ? '#23241f' : '#f8f8f2', color: dark ? '#f8f8f2' : '#23241f'}}>
            {codeSample}
          </pre>
        </section>
      </div>
    </div>
  );
} 
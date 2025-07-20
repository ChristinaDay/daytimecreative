import React from 'react';
import { Blockquote } from '../typography/DropQuote';
import { ScrollableImageContainer } from '../ScrollableImageContainer';

const colors = [
  { name: 'Background Light', className: 'bg-background-light', hex: '#ffffff' },
  { name: 'Background Dark', className: 'bg-background-dark', hex: '#0f172a' },
  { name: 'Text Light', className: 'bg-text-light', hex: '#1e293b' },
  { name: 'Text Dark', className: 'bg-text-dark', hex: '#f8fafc' },
  { name: 'Accent Light', className: 'bg-accent-light', hex: '#3b82f6' },
  { name: 'Accent Dark', className: 'bg-accent-dark', hex: '#60a5fa' },
  { name: 'Surface Light', className: 'bg-surface-light', hex: '#f1f5f9' },
  { name: 'Surface Dark', className: 'bg-surface-dark', hex: '#1e293b' },
  { name: 'Opal Pink Light', className: '', hex: '#ffd1dc' },
  { name: 'Opal Blue Light', className: '', hex: '#d4f1f9' },
  { name: 'Opal Purple Light', className: '', hex: '#e6e6fa' },
  { name: 'Opal Green Light', className: '', hex: '#e0f7fa' },
  { name: 'Opal Pink Dark', className: '', hex: '#4a1e3a' },
  { name: 'Opal Blue Dark', className: '', hex: '#1a365d' },
  { name: 'Opal Purple Dark', className: '', hex: '#2d1b3b' },
  { name: 'Opal Green Dark', className: '', hex: '#1a3a3a' },
];

const codeSample = `<Button onClick={() => alert('Clicked!')}>
  Click me
</Button>`;

export default function StyleGuideMiniPreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Light Mode Version */}
      <div
        className="relative w-full rounded-3xl border border-gray-200 shadow-2xl p-0 overflow-hidden animate-fadein bg-gradient-to-br from-white via-blue-50 to-purple-50 text-text-light"
        style={{ minHeight: 700 }}
      >
        {/* Header */}
        <div className="w-full pt-8 pb-3 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-1">Style Guide Preview</h2>
          <p className="text-sm text-text-light/70 font-normal mb-0">Light Mode</p>
        </div>
        <div className="px-6 pt-2 pb-6">
          {/* Typography and Font Families Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Left: Font Families + h1–h6 Block */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-light">Font Families</h3>
              <div className="grid grid-cols-1 gap-3 text-center mb-4">
                <div>
                  <span className="text-xl font-serif">Heading Sample (Serif)</span>
                  <div className="text-xs mt-1 text-text-light/60">Prata (font-serif)</div>
                </div>
                <div>
                  <span className="text-xl font-sans">Body Sample (Sans)</span>
                  <div className="text-xs mt-1 text-text-light/60">Inter (font-sans)</div>
                </div>
                <div>
                  <span className="text-xl font-mono">Mono Sample (Mono)</span>
                  <div className="text-xs mt-1 text-text-light/60">Geist Mono (font-mono)</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-light">h1–h6 Block</h3>
              <div className="space-y-1">
                <div>
                  <h1 className="font-serif font-normal text-3xl md:text-4xl text-text-light leading-hero">Heading 1 (h1)</h1>
                  <div className="text-xs text-text-light/60 mb-1">Prata (font-serif), className="font-serif font-normal text-5xl md:text-5xl lg:text-6xl text-text-light leading-hero"</div>
                </div>
                <div>
                  <h2 className="font-sans text-xl font-bold text-text-light">Heading 2 (h2)</h2>
                  <div className="text-xs text-text-light/60 mb-1">Inter (font-sans), className="font-sans text-2xl font-bold text-text-light"</div>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-text-light">Heading 3 (h3)</h3>
                  <div className="text-xs text-text-light/60 mb-1">Inter (font-sans), className="font-sans text-xl font-bold text-text-light"</div>
                </div>
                <div>
                  <h4 className="font-sans text-base font-semibold text-text-light">Heading 4 (h4)</h4>
                  <div className="text-xs text-text-light/60 mb-1">Inter (font-sans), className="font-sans text-lg font-semibold text-text-light"</div>
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-text-light">Heading 5 (h5)</h5>
                  <div className="text-xs text-text-light/60 mb-1">Inter (font-sans), className="font-sans text-base font-semibold text-text-light"</div>
                </div>
                <div>
                  <h6 className="font-sans text-xs font-semibold text-text-light">Heading 6 (h6)</h6>
                  <div className="text-xs text-text-light/60 mb-1">Inter (font-sans), className="font-sans text-sm font-semibold text-text-light"</div>
                </div>
              </div>
            </div>
            {/* Right: Real-World Heading Samples */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-light">Typography Examples</h3>
              <div className="space-y-3">
                {/* Hero Heading (Serif) */}
                <div>
                  <div className="font-bold text-xs uppercase mb-1 text-accent-light">Hero Heading (Serif)</div>
                  <div className="text-3xl md:text-4xl font-serif font-normal text-text-light leading-hero mb-1">
                    A Contemporary Approach
                  </div>
                  <div className="text-xs text-text-light/60 mb-2">
                    className="text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light leading-hero mb-8"
                  </div>
                </div>
                {/* Section Heading (Sans) */}
                <div>
                  <div className="font-bold text-xs uppercase mb-1 text-accent-light">Section Heading (Sans)</div>
                  <div className="text-xl font-bold mb-1 text-text-light font-sans">
                    Design & Tech Stack
                  </div>
                  <div className="text-xs text-text-light/60 mb-2">
                    className="text-2xl font-bold mb-6 text-text-light font-sans"
                  </div>
                </div>
                {/* Subsection Heading (Sans) */}
                <div>
                  <div className="font-bold text-xs uppercase mb-1 text-accent-light">Subsection Heading (Sans)</div>
                  <div className="text-lg font-semibold mb-1 text-text-light font-sans">
                    Why this stack?
                  </div>
                  <div className="text-xs text-text-light/60 mb-2">
                    className="text-xl font-semibold mb-4 text-text-light font-sans"
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Color Palette and UI Patterns Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Color Palette */}
            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-light">Color Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 justify-center">
                {colors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center group">
                    <div
                      className={
                        'w-12 h-12 rounded-lg border border-gray-200 mb-1 transition-shadow group-hover:shadow-lg group-hover:scale-105 duration-200 ' +
                        (color.className || '')
                      }
                      style={color.className ? {} : { background: color.hex }}
                    />
                    <span className="text-xs text-center font-mono font-medium">{color.name}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{color.hex}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* UI Patterns and Code */}
            <div className="flex flex-col gap-4">
              {/* Buttons */}
              <section className="mb-3">
                <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-light">Buttons</h3>
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  <button className="px-4 py-2 rounded-lg bg-accent-light text-white font-semibold shadow-md hover:bg-accent-dark transition-colors text-sm">
                    Primary
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-surface-light text-accent-light font-semibold border border-accent-light shadow-md hover:bg-accent-light/10 transition-colors text-sm">
                    Secondary
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-transparent text-accent-light font-semibold border border-accent-light hover:bg-accent-light/10 transition-colors text-sm">
                    Outline
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-accent-light text-white font-semibold opacity-50 cursor-not-allowed text-sm" disabled>
                    Disabled
                  </button>
                </div>
              </section>
              {/* Card Pattern & Layout Pattern */}
              <section className="mb-3 flex flex-col gap-3">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold mb-2 text-center tracking-wide uppercase text-accent-light">Card Pattern</h3>
                  <div className="p-3 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl border border-white/20 rounded-xl max-w-xs w-full shadow-md">
                    <h4 className="text-base font-semibold mb-1 text-accent-light">Info Card</h4>
                    <p className="text-text-light/80 text-xs">
                      This is a sample card pattern. Use for features, highlights, or structured info.
                    </p>
                  </div>
                </div>
              </section>
              {/* Code Snippet */}
              <section className="mb-2">
                <h3 className="text-lg font-semibold mb-2 text-center tracking-wide uppercase text-accent-light">Code Snippet</h3>
                <pre className="code-sublime w-fit max-w-full px-3 text-xs overflow-x-auto rounded-lg border shadow mx-auto" style={{background: '#f8f8f2', color: '#23241f'}}>
                  {codeSample}
                </pre>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Version */}
      <div
        className="relative w-full rounded-3xl border border-gray-800 shadow-2xl p-0 overflow-hidden animate-fadein bg-gradient-to-br from-background-dark via-zinc-900 to-background-dark text-text-dark"
        style={{ minHeight: 700 }}
      >
        {/* Header */}
        <div className="w-full pt-8 pb-3 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-1">Style Guide Preview</h2>
          <p className="text-sm text-text-dark/70 font-normal mb-0">Dark Mode</p>
        </div>
        <div className="px-6 pt-2 pb-6">
          {/* Typography and Font Families Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Left: Font Families + h1–h6 Block */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-dark">Font Families</h3>
              <div className="grid grid-cols-1 gap-3 text-center mb-4">
                <div>
                  <span className="text-xl font-serif">Heading Sample (Serif)</span>
                  <div className="text-xs mt-1 text-text-dark/60">Prata (font-serif)</div>
                </div>
                <div>
                  <span className="text-xl font-sans">Body Sample (Sans)</span>
                  <div className="text-xs mt-1 text-text-dark/60">Inter (font-sans)</div>
                </div>
                <div>
                  <span className="text-xl font-mono">Mono Sample (Mono)</span>
                  <div className="text-xs mt-1 text-text-dark/60">Geist Mono (font-mono)</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-dark">h1–h6 Block</h3>
              <div className="space-y-1">
                <div>
                  <h1 className="font-serif font-normal text-3xl md:text-4xl text-text-dark leading-hero">Heading 1 (h1)</h1>
                  <div className="text-xs text-text-dark/60 mb-1">Prata (font-serif), className="font-serif font-normal text-5xl md:text-5xl lg:text-6xl text-text-dark leading-hero"</div>
                </div>
                <div>
                  <h2 className="font-sans text-xl font-bold text-text-dark">Heading 2 (h2)</h2>
                  <div className="text-xs text-text-dark/60 mb-1">Inter (font-sans), className="font-sans text-2xl font-bold text-text-dark"</div>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-text-dark">Heading 3 (h3)</h3>
                  <div className="text-xs text-text-dark/60 mb-1">Inter (font-sans), className="font-sans text-xl font-bold text-text-dark"</div>
                </div>
                <div>
                  <h4 className="font-sans text-base font-semibold text-text-dark">Heading 4 (h4)</h4>
                  <div className="text-xs text-text-dark/60 mb-1">Inter (font-sans), className="font-sans text-lg font-semibold text-text-dark"</div>
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-text-dark">Heading 5 (h5)</h5>
                  <div className="text-xs text-text-dark/60 mb-1">Inter (font-sans), className="font-sans text-base font-semibold text-text-dark"</div>
                </div>
                <div>
                  <h6 className="font-sans text-xs font-semibold text-text-dark">Heading 6 (h6)</h6>
                  <div className="text-xs text-text-dark/60 mb-1">Inter (font-sans), className="font-sans text-sm font-semibold text-text-dark"</div>
                </div>
              </div>
            </div>
            {/* Right: Real-World Heading Samples */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-dark">Typography Examples</h3>
              <div className="space-y-3">
                {/* Hero Heading (Serif) */}
                <div>
                  <div className="font-bold text-xs uppercase mb-1 text-accent-dark">Hero Heading (Serif)</div>
                  <div className="text-3xl md:text-4xl font-serif font-normal text-text-dark leading-hero mb-1">
                    A Contemporary Approach
                  </div>
                  <div className="text-xs text-text-dark/60 mb-2">
                    className="text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-dark leading-hero mb-8"
                  </div>
                </div>
                {/* Section Heading (Sans) */}
                <div>
                  <div className="font-bold text-xs uppercase mb-1 text-accent-dark">Section Heading (Sans)</div>
                  <div className="text-xl font-bold mb-1 text-text-dark font-sans">
                    Design & Tech Stack
                  </div>
                  <div className="text-xs text-text-dark/60 mb-2">
                    className="text-2xl font-bold mb-6 text-text-dark font-sans"
                  </div>
                </div>
                {/* Subsection Heading (Sans) */}
                <div>
                  <div className="font-bold text-xs uppercase mb-1 text-accent-dark">Subsection Heading (Sans)</div>
                  <div className="text-lg font-semibold mb-1 text-text-dark font-sans">
                    Why this stack?
                  </div>
                  <div className="text-xs text-text-dark/60 mb-2">
                    className="text-xl font-semibold mb-4 text-text-dark font-sans"
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Color Palette and UI Patterns Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Color Palette */}
            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-dark">Color Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 justify-center">
                {colors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center group">
                    <div
                      className={
                        'w-12 h-12 rounded-lg border border-gray-700 mb-1 transition-shadow group-hover:shadow-lg group-hover:scale-105 duration-200 ' +
                        (color.className || '')
                      }
                      style={color.className ? {} : { background: color.hex }}
                    />
                    <span className="text-xs text-center font-mono font-medium">{color.name}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{color.hex}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* UI Patterns and Code */}
            <div className="flex flex-col gap-4">
              {/* Buttons */}
              <section className="mb-3">
                <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-dark">Buttons</h3>
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  <button className="px-4 py-2 rounded-lg bg-accent-dark text-white font-semibold shadow-md hover:bg-accent-light transition-colors text-sm">
                    Primary
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-surface-dark text-accent-dark font-semibold border border-accent-dark shadow-md hover:bg-accent-dark/10 transition-colors text-sm">
                    Secondary
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-transparent text-accent-dark font-semibold border border-accent-dark hover:bg-accent-dark/10 transition-colors text-sm">
                    Outline
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-accent-dark text-white font-semibold opacity-50 cursor-not-allowed text-sm" disabled>
                    Disabled
                  </button>
                </div>
              </section>
              {/* Card Pattern & Layout Pattern */}
              <section className="mb-3 flex flex-col gap-3">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold mb-2 text-center tracking-wide uppercase text-accent-dark">Card Pattern</h3>
                  <div className="p-3 bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-xl max-w-xs w-full shadow-md">
                    <h4 className="text-base font-semibold mb-1 text-accent-dark">Info Card</h4>
                    <p className="text-text-dark/80 text-xs">
                      This is a sample card pattern. Use for features, highlights, or structured info.
                    </p>
                  </div>
                </div>
              </section>
              {/* Code Snippet */}
              <section className="mb-2">
                <h3 className="text-lg font-semibold mb-2 text-center tracking-wide uppercase text-accent-dark">Code Snippet</h3>
                <pre className="code-sublime w-fit max-w-full px-3 text-xs overflow-x-auto rounded-lg border shadow mx-auto" style={{background: '#23241f', color: '#f8f8f2'}}>
                  {codeSample}
                </pre>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
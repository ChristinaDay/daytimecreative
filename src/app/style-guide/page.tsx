'use client';

import React, { useEffect } from 'react';
import { Blockquote } from '@/components/typography/DropQuote';

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

// Sublime Text-inspired code block CSS
const sublimeCodeCSS = `
.code-sublime {
  background: #23241f !important;
  color: #f8f8f2 !important;
  font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  overflow-x: auto;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
}
.code-sublime .token.keyword { color: #66d9ef !important; }
.code-sublime .token.string { color: #e6db74 !important; }
.code-sublime .token.comment { color: #75715e !important; }
.code-sublime .token.function { color: #a6e22e !important; }
.code-sublime .token.variable { color: #f92672 !important; }
.code-sublime .token.operator { color: #f8f8f2 !important; }
.code-sublime .token.punctuation { color: #f8f8f2 !important; }
@media (prefers-color-scheme: dark) {
  .code-sublime {
    background: #fff !important;
    color: #111 !important;
  }
}
`;

export default function StyleGuidePage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('sublime-code-css')) {
      const style = document.createElement('style');
      style.id = 'sublime-code-css';
      style.innerHTML = sublimeCodeCSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <main className="min-h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark px-8 py-16">
      <h1 className="text-5xl font-serif font-bold mb-12">Style Guide</h1>
      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Typography</h2>
        <div className="space-y-4">
          <h1 className="text-5xl font-serif font-normal">Heading 1 / .text-5xl .font-serif .font-normal</h1>
          <h2 className="text-4xl font-serif font-normal">Heading 2 / .text-4xl .font-serif .font-normal</h2>
          <h3 className="text-3xl font-serif font-normal">Heading 3 / .text-3xl .font-serif .font-normal</h3>
          <h4 className="text-2xl font-serif font-normal">Heading 4 / .text-2xl .font-serif .font-normal</h4>
          <h5 className="text-xl font-serif font-normal">Heading 5 / .text-xl .font-serif .font-normal</h5>
          <h6 className="text-lg font-serif font-normal">Heading 6 / .text-lg .font-serif .font-normal</h6>
          <p className="text-base font-sans">Body text / .text-base .font-sans</p>
          <a href="#" className="text-accent-light dark:text-accent-dark underline font-bold dark:drop-shadow-[0_0_8px_#aee7ff]">Link / .text-accent-light .dark:text-accent-dark .underline .font-bold .dark:drop-shadow-[0_0_8px_#aee7ff]</a>
          <Blockquote className="mb-8">Blockquote: "Design is intelligence made visible."</Blockquote>
          <pre className="code-sublime mt-8 w-fit max-w-full px-4">Code: &lt;Button&gt;Click me&lt;/Button&gt;</pre>
        </div>
      </section>
      {/* Colors Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <div
                className={
                  'w-20 h-20 rounded-lg border border-gray-200 dark:border-gray-700 mb-2 ' +
                  (color.class || '')
                }
                style={color.class ? {} : { background: color.hex }}
              />
              <span className="text-xs text-center font-mono">{color.name}</span>
              <span className="text-xs text-gray-500 font-mono">{color.hex}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Buttons Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-6 items-center">
          {/* Primary Button */}
          <button className="px-6 py-2 rounded bg-accent-light dark:bg-accent-dark text-white font-semibold shadow hover:bg-accent-dark dark:hover:bg-accent-light transition-colors">
            Primary Button
          </button>
          {/* Secondary Button */}
          <button className="px-6 py-2 rounded bg-surface-light dark:bg-surface-dark text-accent-light dark:text-accent-dark font-semibold border border-accent-light dark:border-accent-dark shadow hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors">
            Secondary Button
          </button>
          {/* Outline/Ghost Button */}
          <button className="px-6 py-2 rounded bg-transparent text-accent-light dark:text-accent-dark font-semibold border border-accent-light dark:border-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors">
            Outline Button
          </button>
          {/* Disabled Button */}
          <button className="px-6 py-2 rounded bg-accent-light dark:bg-accent-dark text-white font-semibold opacity-50 cursor-not-allowed" disabled>
            Disabled Button
          </button>
        </div>
      </section>
    </main>
  );
} 
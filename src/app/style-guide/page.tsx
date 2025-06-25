'use client';

import React, { useEffect } from 'react';
import { Blockquote } from '@/components/typography/DropQuote';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';
import Image from 'next/image';

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
      <section className="mb-16">
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

      {/* Layout Patterns Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Layout Patterns</h2>
        
        {/* Scrollable Vertical Content Pattern */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Scrollable Vertical Content</h3>
          <p className="text-text-light/80 dark:text-text-dark/80 mb-6">
            Use this pattern for tall vertical content like marketing materials, infographics, or long-form designs. 
            The scrollable browser window provides context and allows users to explore content at their own pace.
          </p>
          
          {/* Example Implementation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="w-full">
              <ScrollableImageContainer
                src="/images/Ten-Spot-The-ultimate-workforce-engagement-platform-.png"
                alt="Example Vertical Content"
                caption="Example: Marketing positioning material"
                frameType="browser"
                height="large"
                backgroundColor="white"
                url="example.com/content"
              />
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-3">Usage Guidelines</h4>
              <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80 mb-4">
                <li>• <strong>Best for:</strong> Tall vertical content, marketing materials, infographics</li>
                <li>• <strong>Grid Layout:</strong> Use 1-3 columns depending on content and screen size</li>
                <li>• <strong>Browser Frame:</strong> Adds professional context and realistic presentation</li>
                <li>• <strong>Scrollable:</strong> Allows exploration without overwhelming the layout</li>
                <li>• <strong>Captions:</strong> Provide context for each piece of content</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-3">Code Example</h4>
              <pre className="code-sublime text-sm overflow-x-auto">
{`<ScrollableImageContainer
  src="/images/vertical-content.png"
  alt="Description"
  caption="Context for the content"
  frameType="browser"
  height="large"
  backgroundColor="white"
  url="relevant-url.com"
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Card Layout Pattern */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Information Cards</h3>
          <p className="text-text-light/80 dark:text-text-dark/80 mb-6">
            Use this pattern for presenting structured information, features, or benefits in an organized, scannable format.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Card Title</h4>
              <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                Card content with clear hierarchy and readable typography. Perfect for features, benefits, or structured information.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Another Card</h4>
              <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                Consistent styling across all cards creates a cohesive, professional appearance that works in both light and dark modes.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Third Card</h4>
              <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                The backdrop blur and gradient effects add depth while maintaining readability and accessibility standards.
              </p>
            </div>
          </div>

          <pre className="code-sublime text-sm overflow-x-auto">
{`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 
                  dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl 
                  border border-white/20 dark:border-white/10 rounded-xl">
    <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">
      Card Title
    </h4>
    <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
      Card content...
    </p>
  </div>
</div>`}
          </pre>
        </div>

        {/* Hero Image Pattern */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Hero Image Layout</h3>
          <p className="text-text-light/80 dark:text-text-dark/80 mb-6">
            Use this pattern for showcasing main project visuals with proper aspect ratios and responsive behavior.
          </p>
          
          <div className="mb-6 w-full relative aspect-[3/2] rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <Image
              src="/images/tenspot-desk-purple-macbook-mockup.png"
              alt="Example Hero Image"
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 100vw"
            />
          </div>

          <pre className="code-sublime text-sm overflow-x-auto">
{`<div className="w-full relative aspect-[3/2] rounded-lg overflow-hidden 
                bg-gradient-to-br from-purple-50 to-blue-50 
                dark:from-purple-900/20 dark:to-blue-900/20">
  <Image
    src="/images/hero-image.png"
    alt="Description"
    fill
    className="object-contain p-8"
    sizes="(max-width: 1024px) 100vw, 100vw"
  />
</div>`}
          </pre>
        </div>

        {/* Viewport Pattern for Design Artifacts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Interactive Viewport (Design Artifacts)</h3>
          <p className="text-text-light/80 dark:text-text-dark/80 mb-6">
            Use this pattern for high-resolution design process artifacts like Sketch mockups, wireframes, or design system overviews. 
            The drag-to-pan functionality works like embedded Google Maps, allowing users to explore expansive design work at full resolution.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="w-full">
              <ScrollableImageContainer
                src="/images/Ten-Spot-The-ultimate-workforce-engagement-platform-.png"
                alt="Example Design Artifacts"
                caption="Example: High-res design mockups with drag-to-pan"
                frameType="viewport"
                height="viewport"
                backgroundColor="white"
              />
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-3">Usage Guidelines</h4>
              <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80 mb-4">
                <li>• <strong>Best for:</strong> High-res design spreads, Sketch/Figma mockups, wireframe collections</li>
                <li>• <strong>Image Requirements:</strong> High resolution (min 2x container size) for optimal exploration</li>
                <li>• <strong>Full-width container:</strong> Takes entire content area width for maximum impact</li>
                <li>• <strong>Interactive:</strong> Click and drag to pan, just like Google Maps embeds</li>
                <li>• <strong>Responsive height:</strong> 60vh provides generous viewing area while showing content below</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-3">Code Example</h4>
              <pre className="code-sublime text-sm overflow-x-auto">
{`<ScrollableImageContainer
  src="/images/design-mockups.png"
  alt="Design Artifacts"
  caption="Interactive design exploration"
  frameType="viewport"
  height="viewport"
  backgroundColor="white"
/>`}
              </pre>
              
              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Image Resolution Requirements</h5>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Only use this pattern with high-resolution images. Low-res images will appear pixelated when users zoom/pan. 
                  For lower resolution images, use the Hero Image Layout instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
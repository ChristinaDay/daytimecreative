'use client';

import { motion } from 'framer-motion';
import { Blockquote } from '@/components/typography/DropQuote';

export default function StyleGuidePage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          Portfolio Design System
        </h1>
        <p className="text-xl text-text-light/80 dark:text-text-dark/80">
          Complete design standards and conventions for maintaining consistency across the portfolio.
        </p>
      </motion.div>

      {/* Typography Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Typography</h2>
        
        <div className="space-y-6">
          {/* Page Headers */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero">
              Case Study Title / .text-5xl .md:text-5xl .lg:text-6xl .font-serif .font-normal .leading-hero
            </h1>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-light dark:text-text-dark">
              Homepage Section Title / .font-serif .text-4xl .md:text-5xl .lg:text-6xl .font-semibold
            </h2>
          </div>

          {/* Section Headers */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">
              Section Title / .text-2xl .font-bold
            </h2>
            
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Subsection Title / .text-xl .font-semibold
            </h3>
          </div>

          {/* Body Text */}
          <div className="space-y-3">
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
              Large body text for case study content / .text-[1.375rem] .text-text-light/80 .dark:text-text-dark/80
            </p>
            
            <p className="text-lg text-text-light/80 dark:text-text-dark/80">
              Standard body text for homepage descriptions / .text-lg .text-text-light/80 .dark:text-text-dark/80
            </p>
            
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              Medium body text for lists / .text-[1.125rem] .text-text-light/80 .dark:text-text-dark/80
            </p>
          </div>

          {/* Meta Text */}
          <div className="space-y-2">
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight">
              Image caption text / .text-sm .text-text-light/60 .dark:text-text-dark/60 .text-center .leading-tight
            </p>
            
            <span className="text-base text-text-light dark:text-text-dark block">
              Case study meta label / .text-base .text-text-light .dark:text-text-dark
            </span>
          </div>

          {/* Blockquote */}
          <div className="mt-8">
            <Blockquote>
              Custom blockquote component / &lt;Blockquote&gt;Text content&lt;/Blockquote&gt;
            </Blockquote>
          </div>
        </div>
      </motion.section>

      {/* Color System */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Colors</h2>
        
        {/* Primary Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Primary Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-background-light rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Background Light</span>
              <span className="text-xs text-gray-500 font-mono">#ffffff</span>
              <span className="text-xs text-gray-400 font-mono">bg-background-light</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Background Dark</span>
              <span className="text-xs text-gray-500 font-mono">#0f172a</span>
              <span className="text-xs text-gray-400 font-mono">bg-background-dark</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-text-light rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Text Light</span>
              <span className="text-xs text-gray-500 font-mono">#1a365d</span>
              <span className="text-xs text-gray-400 font-mono">text-text-light</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-text-dark rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Text Dark</span>
              <span className="text-xs text-gray-500 font-mono">#f8fafc</span>
              <span className="text-xs text-gray-400 font-mono">text-text-dark</span>
            </div>
          </div>
        </div>

        {/* Accent Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Accent Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-accent-light rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Accent Light</span>
              <span className="text-xs text-gray-500 font-mono">#3b82f6</span>
              <span className="text-xs text-gray-400 font-mono">accent-light</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-accent-dark rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Accent Dark</span>
              <span className="text-xs text-gray-500 font-mono">#aee7ff</span>
              <span className="text-xs text-gray-400 font-mono">accent-dark</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-surface-light rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Surface Light</span>
              <span className="text-xs text-gray-500 font-mono">#f1f5f9</span>
              <span className="text-xs text-gray-400 font-mono">surface-light</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs text-center font-mono">Surface Dark</span>
              <span className="text-xs text-gray-500 font-mono">#1e293b</span>
              <span className="text-xs text-gray-400 font-mono">surface-dark</span>
            </div>
          </div>
        </div>

        {/* Opal Colors - Light Theme */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Opal Colors (Light Theme)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-opal-light-base rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs font-mono">Base</span>
              <span className="text-xs text-gray-400 font-mono">opal-light-base</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#ffd1dc'}}></div>
              <span className="text-xs font-mono">Pink</span>
              <span className="text-xs text-gray-400 font-mono">opal-light-pink</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#d4f1f9'}}></div>
              <span className="text-xs font-mono">Blue</span>
              <span className="text-xs text-gray-400 font-mono">opal-light-blue</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#e6e6fa'}}></div>
              <span className="text-xs font-mono">Purple</span>
              <span className="text-xs text-gray-400 font-mono">opal-light-purple</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#e0f7fa'}}></div>
              <span className="text-xs font-mono">Green</span>
              <span className="text-xs text-gray-400 font-mono">opal-light-green</span>
            </div>
          </div>
        </div>

        {/* Opal Colors - Dark Theme */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Opal Colors (Dark Theme)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-opal-dark-base rounded-lg border border-gray-200 dark:border-gray-700 mb-2"></div>
              <span className="text-xs font-mono">Base</span>
              <span className="text-xs text-gray-400 font-mono">opal-dark-base</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#4a1e3a'}}></div>
              <span className="text-xs font-mono">Pink</span>
              <span className="text-xs text-gray-400 font-mono">opal-dark-pink</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#1a365d'}}></div>
              <span className="text-xs font-mono">Blue</span>
              <span className="text-xs text-gray-400 font-mono">opal-dark-blue</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#2d1b3b'}}></div>
              <span className="text-xs font-mono">Purple</span>
              <span className="text-xs text-gray-400 font-mono">opal-dark-purple</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2" style={{backgroundColor: '#1a3a3a'}}></div>
              <span className="text-xs font-mono">Green</span>
              <span className="text-xs text-gray-400 font-mono">opal-dark-green</span>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Common Usage Patterns</h3>
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Text Colors</h4>
              <div className="space-y-2 text-sm">
                <div>Primary text: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">text-text-light dark:text-text-dark</code></div>
                <div>Secondary text: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">text-text-light/80 dark:text-text-dark/80</code></div>
                <div>Muted text: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">text-text-light/60 dark:text-text-dark/60</code></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Background Colors</h4>
              <div className="space-y-2 text-sm">
                <div>Main background: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">bg-background-light dark:bg-background-dark</code></div>
                <div>Card surfaces: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">bg-surface-light dark:bg-surface-dark</code></div>
                <div>Accent elements: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">bg-accent-light dark:bg-accent-dark</code></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Spacing System */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Spacing System</h2>
        
        <div className="space-y-8">
          {/* Visual Spacing Guide */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Visual Reference</h3>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-16 bg-blue-500 rounded"></div>
                <div>
                  <strong>Page Header (mb-16):</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">64px</code>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-8 bg-orange-500 rounded"></div>
                <div>
                  <strong>Image Groups (mb-8):</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">32px</code>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-6 bg-purple-500 rounded"></div>
                <div>
                  <strong>Text Paragraphs (mb-6):</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">24px</code>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <div>
                  <strong>Subsections (mb-4):</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">16px</code>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-2 bg-gray-500 rounded"></div>
                <div>
                  <strong>Image Captions (mt-2):</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">8px</code>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Standard Patterns</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Image-Caption Pair:</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto"><code>{`<motion.div className="w-full mb-8 flex flex-col">
  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
    <img className="w-full h-full object-contain" />
  </div>
  <p className="text-sm text-center leading-tight mt-2">Caption</p>
</motion.div>`}</code></pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Homepage Section:</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto"><code>{`<section className="w-full py-24 px-2">
  <div className="flex flex-col md:flex-row gap-12">
    <div className="w-full md:w-2/5"><!-- Text --></div>
    <div className="w-full md:w-3/5"><!-- Image --></div>
  </div>
</section>`}</code></pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Homepage Case Study Preview Image:</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto"><code>{`<div className="w-full md:w-3/5 flex items-center justify-center">
  <div className="bg-white rounded-xl shadow-2xl w-full aspect-[16/9] 
       flex items-center justify-center p-8">
    <img 
      src="/images/project-image.png" 
      alt="Project Name" 
      className="w-full h-full object-contain" 
    />
  </div>
</div>`}</code></pre>
                <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-2">
                  Standard: White background container with 16:9 aspect ratio, 8px padding, rounded corners and shadow.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Scrollable Image Container (Long Vertical Images):</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto"><code>{`<ScrollableImageContainer
  src="/images/long-vertical-interface.png"
  alt="Interface Documentation"
  caption="Detailed interface showing full workflow"
  frameType="laptop"
  height="large"
  backgroundColor="transparent"
/>`}</code></pre>
                <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-2">
                  For wireframes, long interfaces, and documentation. Options: frameType="laptop|browser|none", height="small|medium|large", backgroundColor="white|transparent".
                </p>
              </div>
            </div>
          </div>

          {/* Image Container Padding Standards */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Image Container Padding Standards</h3>
            <div className="bg-opal-light-blue dark:bg-opal-dark-blue p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4 text-text-light dark:text-text-dark">White Background Container Padding</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold text-sm mb-2">Large Padding (p-8)</h5>
                  <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded block mb-2">32px padding</code>
                  <p className="text-sm">Homepage previews, hero images, marketing materials</p>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-2">Medium Padding (p-4)</h5>
                  <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded block mb-2">16px padding</code>
                  <p className="text-sm">Case study images, interface screenshots, detailed views</p>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-2">Small Padding (p-2)</h5>
                  <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded block mb-2">8px padding</code>
                  <p className="text-sm">Small UI elements, thumbnails, compact layouts</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Homepage Case Study Preview (Large Padding):</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto"><code>{`<div className="bg-white rounded-xl shadow-2xl w-full aspect-[16/9] 
     flex items-center justify-center p-8">
  <img className="w-full h-full object-contain" />
</div>`}</code></pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Case Study Detail Image (Medium Padding):</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto"><code>{`<div className="bg-white rounded-xl shadow-2xl w-full aspect-[16/9] 
     flex items-center justify-center p-4">
  <img className="w-full h-full object-contain" />
</div>`}</code></pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interface Screenshot (Small Padding):</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto"><code>{`<div className="bg-white rounded-lg shadow-lg w-full aspect-[16/9] 
     flex items-center justify-center p-2">
  <img className="w-full h-full object-contain" />
</div>`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick Reference */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Quick Reference</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">✅ Do</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Use object-cover for filled containers</li>
              <li>• Apply consistent spacing (mb-16, mb-8, mb-6)</li>
              <li>• Use flexbox for image-caption pairs</li>
              <li>• Use appropriate padding: p-8 (homepage), p-4 (case studies), p-2 (interfaces)</li>
              <li>• Maintain 16:9 or 4:3 aspect ratios</li>
              <li>• Use proper typography hierarchy</li>
              <li>• Stagger animation delays by 0.2s</li>
              <li>• Use ScrollableImageContainer for long vertical images</li>
              <li>• Add browser frames for interface documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">❌ Don't</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Add white backgrounds to images</li>
              <li>• Leave negative space in containers</li>
              <li>• Use inconsistent spacing values</li>
              <li>• Mix paragraph and span elements randomly</li>
              <li>• Crop important image content</li>
              <li>• Use arbitrary font sizes</li>
              <li>• Skip animation staggering</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </article>
  );
} 
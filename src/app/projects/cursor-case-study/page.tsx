'use client';

import { motion } from 'framer-motion';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import Image from 'next/image';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';
import StyleGuideMiniPreview from '@/components/ui/StyleGuideMiniPreview';
import CyclingText from '@/components/ui/CyclingText';
import { StarfieldSVG } from '@/components/StarfieldSVG';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import LocalThemeDemo from '@/components/ui/LocalThemeDemo';
import ProcessTimeline from '@/components/ui/ProcessTimeline';
import ImageComparisonSlider from '@/components/ui/ImageComparisonSlider';

export default function CursorCaseStudyPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          A Contemporary Approach to Web Building: How I Used Cursor to Rebuild My Portfolio
        </h1>
        <ProjectSubtitle>
          A meta case study on designing, developing, and launching my own portfolio as a demonstration of modern web skills, design systems, and technical fluency.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Designer, Developer, Writer"
          employer="christinamday.com"
          platforms="Next.js, React, Tailwind, Framer Motion, Vercel"
          areas="Design Systems, Front-End Development, UX/UI, Content Strategy"
          year="2025"
        />
      </motion.div>

      {/* Hero Image - Interactive Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-16 w-full"
      >
        <ImageComparisonSlider
          beforeImage="/images/cursor-editing-screenshot.png"
          afterImage="/images/Christina-Day-Design-Portfolio.png"
          beforeAlt="Cursor editor showing portfolio development in progress"
          afterAlt="Portfolio homepage hero result"
          beforeLabel="Development"
          afterLabel="Result"
          className="w-full"
        />
        
        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-lg text-text-light/70 dark:text-text-dark/70 font-medium">
            Drag the slider to compare development environment and final result
          </p>
        </div>
      </motion.div>

      {/* Why Rebuild? (Motivation & Goals) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Why Rebuild? (Motivation & Goals)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            After years of relying on Squarespace for my portfolio, I realized it was time for a change. The old site was easy to maintain, but it didn't reflect my current skills or the way I actually work. I wanted a portfolio that wasn't just a gallery of past projects, but a living demonstration of my technical fluency, design process, and ability to build with today's best tools.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            But the real driver was personal. After a break from tech—working in art fabrication, taking on design gigs, and navigating some big life changes—I needed to prove to myself that my skills weren't just intact, but sharper than ever. This project is both a bridge across my career gap and a statement: I can actually deliver results with the latest stack.
          </p>
        </div>
        
        {/* Integrated Motivation & Limitations */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-xl my-8">
          <p className="text-lg font-serif italic text-blue-900 dark:text-blue-200 mb-4">
            "I wanted a portfolio that's a living demonstration, not just a gallery."
          </p>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-3">
            The problem? Squarespace is perfect for quick, no-code sites, but it's not built for the kind of experimentation and customization I wanted. The templates are beautiful, but you can always spot a Squarespace site. Custom code is possible, but it's more workaround than workflow. And building a living style guide or reusable components? That's not what Squarespace is made for.
          </p>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            That's not a criticism—Squarespace is excellent at what it does. But I needed something that would let me tinker, experiment, and build the kind of interactive, dynamic portfolio that actually demonstrates my current capabilities.
          </p>
        </div>

        {/* Old Portfolio Example 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
          <div>
            <ScrollableImageContainer
              src="/images/daytime-creative-old.png"
              alt="Old Squarespace Portfolio Screenshot"
              caption="A screenshot of my previous Squarespace portfolio."
              frameType="browser"
              height="large"
              backgroundColor="white"
              url="christinamday.com (Squarespace)"
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Issues with Squarespace limitations</h4>
            <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>Clean, but the same homepage as a thousand others.</li>
              <li>Custom ideas? Usually met with "not supported."</li>
              <li>Great for non-developers; too tidy for code-driven work.</li>
            </ul>
          </div>
        </div>

        {/* Old Portfolio Example 2 (alternate sides) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
          <div className="order-2 md:order-1">
            <h4 className="font-semibold mb-2">Case studies, but stuck in a template</h4>
            <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>Every project story started to sound the same. That's the tradeoff for consistency.</li>
              <li>Breaking the grid or adding custom layouts? Not really an option.</li>
              <li>Consistent, but the personality was a little muted.</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <ScrollableImageContainer
              src="/images/Case-Studies-daytime-creative.png"
              alt="Old Squarespace Portfolio Case Studies Screenshot"
              caption="A screenshot of the case studies section from my previous Squarespace portfolio."
              frameType="browser"
              height="large"
              backgroundColor="white"
              url="christinamday.com/case-studies (Squarespace)"
            />
          </div>
        </div>

        {/* Old Portfolio Example 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
          <div>
            <ScrollableImageContainer
              src="/images/Betterview-Spotlights-Reporting-—-daytime-creative.png"
              alt="Old Squarespace Portfolio Spotlights Reporting Screenshot"
              caption="A screenshot of a case study from my previous Squarespace portfolio."
              frameType="browser"
              height="large"
              backgroundColor="white"
              url="christinamday.com/case-studies/spotlights-reporting (Squarespace)"
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Project pages: stuck in the box</h4>
            <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>Project pages were always a remix of the same blocks.</li>
              <li>Technical depth or custom visuals? Only if "custom" means "sort of like everyone else."</li>
              <li>Scrollability or interactivity? Not really. For many, that's a feature, not a bug.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design & Tech Stack Choices */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-12 mt-32"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Design & Tech Stack Choices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Choosing the right stack wasn't just about using the latest tools. I needed a foundation that would let me move fast, experiment, and actually document my process as I went. This portfolio isn't a static gallery—it's a living demonstration of how I work, how I solve problems, and how I approach design systems in the real world.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Every decision here was made to support rapid iteration, honest documentation, and the kind of workflow I'd use on a real product team. The stack below is what enables that: tools that are proven, flexible, and built for real-world results—not just to look good on a portfolio site.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Intro Blurb */}
          <div className="flex flex-col justify-center h-full max-w-md">
            <h4 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark tracking-tight">Tech Stack</h4>
            <p className="text-base text-text-light/80 dark:text-text-dark/80">
              This isn't just a list of trendy tools. Every choice here supports the way I actually work: rapid prototyping, real design system thinking, and documenting every pattern as I go. The stack below is what lets this portfolio be a living demonstration, not just a static gallery.
            </p>
          </div>
          {/* Right: Tech Stack Grid */}
          <div className="flex justify-center">
            <div className="w-full bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-background-dark dark:via-zinc-900 dark:to-background-dark rounded-3xl p-4 md:p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Next.js */}
                <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <Image src="/images/nextjs-logo.png" alt="Next.js logo" width={40} height={40} className="mb-2" />
                  <h4 className="font-semibold text-base mb-1">Next.js</h4>
                  <p className="text-xs text-text-light/70 dark:text-text-dark/70">
                    File-based routing, hybrid rendering, and Vercel integration—lets me ship fast and focus on building.
                  </p>
                </div>
                {/* React */}
                <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <Image src="/images/react-logo.png" alt="React logo" width={40} height={40} className="mb-2" />
                  <h4 className="font-semibold text-base mb-1">React</h4>
                  <p className="text-xs text-text-light/70 dark:text-text-dark/70">
                    Component-driven UI, huge ecosystem, and the best way to build interactive sites in 2025.
                  </p>
                </div>
                {/* Tailwind CSS */}
                <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <Image src="/images/tailwind-logo.png" alt="Tailwind CSS logo" width={40} height={40} className="mb-2" />
                  <h4 className="font-semibold text-base mb-1">Tailwind CSS</h4>
                  <p className="text-xs text-text-light/70 dark:text-text-dark/70">
                    Utility-first, design in markup, iterate fast, and keep everything consistent.
                  </p>
                </div>
                {/* Framer Motion */}
                <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <Image src="/images/motion-logo.png" alt="Framer Motion logo" width={40} height={40} className="mb-2" />
                  <h4 className="font-semibold text-base mb-1">Framer Motion</h4>
                  <p className="text-xs text-text-light/70 dark:text-text-dark/70">
                    Modern, smooth animation for React—declarative, powerful, and easy to use.
                  </p>
                </div>
                {/* Vercel */}
                <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <Image src="/images/vercel-triangle-black.svg" alt="Vercel logo" width={40} height={40} className="mb-2" />
                  <h4 className="font-semibold text-base mb-1">Vercel</h4>
                  <p className="text-xs text-text-light/70 dark:text-text-dark/70">
                    Fast, reliable deployments, instant previews, and zero-config—lets me focus on building, not DevOps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mini Style Guide Preview */}
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark mt-32">The Living Style Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Most style guides are static documents or Figma files that quickly fall out of sync with the real product. I wanted something different—a living style guide, built directly into the site, that documents every pattern, component, and decision as it actually exists in production.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            This approach lets me move fast, experiment safely, and keep the design system honest. The style guide isn't just a reference—it's a toolkit I use every day, evolving alongside the project and making it easy to onboard, iterate, and maintain consistency as the site grows.
          </p>
        </div>
        
        {/* Typography Section */}
        <div className="mt-8 mb-8">
          <h4 className="font-semibold text-xl mb-4 text-text-light dark:text-text-dark">Typography & Design Patterns</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Light Mode Typography */}
            <div className="relative w-full rounded-3xl border border-gray-200 shadow-2xl p-0 overflow-hidden animate-fadein bg-gradient-to-br from-white via-blue-50 to-purple-50 text-text-light">
              <div className="w-full pt-8 pb-3 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-1">Typography Preview</h2>
                <p className="text-sm text-text-light/70 font-normal mb-0">Light Mode</p>
              </div>
              <div className="px-6 pt-2 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Font Families */}
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
                  </div>
                  {/* Typography Examples */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-light">Typography Examples</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="font-bold text-xs uppercase mb-1 text-accent-light">Hero Heading (Serif)</div>
                        <div className="text-3xl md:text-4xl font-serif font-normal text-text-light leading-hero mb-1">
                          A Contemporary Approach
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs uppercase mb-1 text-accent-light">Section Heading (Sans)</div>
                        <div className="text-xl font-bold mb-1 text-text-light font-sans">
                          Design & Tech Stack
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs uppercase mb-1 text-accent-light">Body Text</div>
                        <div className="text-base text-text-light/80 font-sans">
                          This is how body text looks in the design system.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dark Mode Typography */}
            <div className="relative w-full rounded-3xl border border-gray-800 shadow-2xl p-0 overflow-hidden animate-fadein bg-gradient-to-br from-background-dark via-zinc-900 to-background-dark text-text-dark">
              <div className="w-full pt-8 pb-3 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-1">Typography Preview</h2>
                <p className="text-sm text-text-dark/70 font-normal mb-0">Dark Mode</p>
              </div>
              <div className="px-6 pt-2 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Font Families */}
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
                  </div>
                  {/* Typography Examples */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-dark">Typography Examples</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="font-bold text-xs uppercase mb-1 text-accent-dark">Hero Heading (Serif)</div>
                        <div className="text-3xl md:text-4xl font-serif font-normal text-text-dark leading-hero mb-1">
                          A Contemporary Approach
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs uppercase mb-1 text-accent-dark">Section Heading (Sans)</div>
                        <div className="text-xl font-bold mb-1 text-text-dark font-sans">
                          Design & Tech Stack
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs uppercase mb-1 text-accent-dark">Body Text</div>
                        <div className="text-base text-text-dark/80 font-sans">
                          This is how body text looks in the design system.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Color Palette Section */}
        <div className="mt-8 mb-8">
          <h4 className="font-semibold text-xl mb-4 text-text-light dark:text-text-dark">Color Palette & UI Components</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Light Mode Colors */}
            <div className="relative w-full rounded-3xl border border-gray-200 shadow-2xl p-0 overflow-hidden animate-fadein bg-gradient-to-br from-white via-blue-50 to-purple-50 text-text-light">
              <div className="w-full pt-8 pb-3 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-1">Color Palette</h2>
                <p className="text-sm text-text-light/70 font-normal mb-0">Light Mode</p>
              </div>
              <div className="px-6 pt-2 pb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 justify-center mb-6">
                  {[
                    { name: 'Background', className: 'bg-background-light', hex: '#ffffff' },
                    { name: 'Text', className: 'bg-text-light', hex: '#1e293b' },
                    { name: 'Accent', className: 'bg-accent-light', hex: '#3b82f6' },
                    { name: 'Surface', className: 'bg-surface-light', hex: '#f1f5f9' },
                    { name: 'Opal Pink', className: '', hex: '#ffd1dc' },
                    { name: 'Opal Blue', className: '', hex: '#d4f1f9' },
                    { name: 'Opal Purple', className: '', hex: '#e6e6fa' },
                    { name: 'Opal Green', className: '', hex: '#e0f7fa' },
                  ].map((color) => (
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
                {/* UI Components */}
                <div className="space-y-4">
                  <div>
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
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-light">Card Pattern</h3>
                    <div className="p-3 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl border border-white/20 rounded-xl max-w-xs mx-auto shadow-md">
                      <h4 className="text-base font-semibold mb-1 text-accent-light">Info Card</h4>
                      <p className="text-text-light/80 text-xs">
                        This is a sample card pattern. Use for features, highlights, or structured info.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dark Mode Colors */}
            <div className="relative w-full rounded-3xl border border-gray-800 shadow-2xl p-0 overflow-hidden animate-fadein bg-gradient-to-br from-background-dark via-zinc-900 to-background-dark text-text-dark">
              <div className="w-full pt-8 pb-3 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-1">Color Palette</h2>
                <p className="text-sm text-text-dark/70 font-normal mb-0">Dark Mode</p>
              </div>
              <div className="px-6 pt-2 pb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 justify-center mb-6">
                  {[
                    { name: 'Background', className: 'bg-background-dark', hex: '#0f172a' },
                    { name: 'Text', className: 'bg-text-dark', hex: '#f8fafc' },
                    { name: 'Accent', className: 'bg-accent-dark', hex: '#60a5fa' },
                    { name: 'Surface', className: 'bg-surface-dark', hex: '#1e293b' },
                    { name: 'Opal Pink', className: '', hex: '#4a1e3a' },
                    { name: 'Opal Blue', className: '', hex: '#1a365d' },
                    { name: 'Opal Purple', className: '', hex: '#2d1b3b' },
                    { name: 'Opal Green', className: '', hex: '#1a3a3a' },
                  ].map((color) => (
                    <div key={color.name} className="flex flex-col items-center group">
                      <div
                        className={
                          'w-12 h-12 rounded-lg border border-gray-700 mb-1 transition-shadow group-hover:shadow-lg group-hover:scale-105 duration-200 ' +
                          (color.className || '')
                        }
                        style={color.className ? {} : { background: color.hex }}
                      />
                      <span className="text-xs text-center font-mono font-medium">{color.name}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{color.hex}</span>
                    </div>
                  ))}
                </div>
                {/* UI Components */}
                <div className="space-y-4">
                  <div>
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
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-center tracking-wide uppercase text-accent-dark">Card Pattern</h3>
                    <div className="p-3 bg-gradient-to-br from-gray-900/90 to-background-dark/90 backdrop-blur-xl border border-gray-700/20 rounded-xl max-w-xs mx-auto shadow-md">
                      <h4 className="text-base font-semibold mb-1 text-accent-dark">Info Card</h4>
                      <p className="text-text-dark/80 text-xs">
                        This is a sample card pattern. Use for features, highlights, or structured info.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Rules Section */}
        <div className="mt-12 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-xl">
          <h4 className="font-semibold text-xl mb-4 text-green-900 dark:text-green-200">Beyond the Style Guide: Project Rules & Documentation</h4>
          <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mb-4">
            The style guide wasn't just a visual reference—it was part of a larger documentation system. I paired it with markdown files that contained project rules, naming conventions, and workflow guidelines. This dual approach meant I had both visual patterns and written guidelines that evolved together.
          </p>
          
          {/* Markdown Workflow Image */}
          <div className="mb-6">
            <ScrollableImageContainer
              src="/images/progress-workflow-markdown.png"
              alt="Markdown project rules and workflow documentation"
              caption="A screenshot showing the markdown files used for project rules, naming conventions, and workflow guidelines."
              frameType="browser"
              height="medium"
              backgroundColor="white"
              url="Project Rules & Documentation"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-200">Style Guide (Visual)</h5>
              <ul className="list-disc pl-5 text-[1.125rem] text-green-900/80 dark:text-green-200/80 space-y-1">
                <li>Live component examples with real code</li>
                <li>Typography hierarchy and spacing</li>
                <li>Color palette with hex values</li>
                <li>Button states and interactions</li>
                <li>Card patterns and layouts</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-200">Project Rules (Markdown)</h5>
              <ul className="list-disc pl-5 text-[1.125rem] text-green-900/80 dark:text-green-200/80 space-y-1">
                <li>Naming conventions for files and components</li>
                <li>Layout patterns and when to use them</li>
                <li>Image workflow and optimization rules</li>
                <li>Git commit message standards</li>
                <li>Onboarding notes for future contributors</li>
              </ul>
            </div>
          </div>
          <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mt-4">
            This system kept everything consistent and made it easy to onboard new contributors (including myself after breaks). Whenever I solved a new problem or found a better approach, I'd update both the visual style guide and the written rules—keeping everything in sync and honest about what actually works in production.
          </p>
        </div>


      </motion.section>

      {/* Workflow & Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">How the Style Guide Actually Works</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The style guide and project rules I built weren't just documentation—they were the foundation of my actual workflow. I developed two distinct modes that let me move fast while maintaining quality: "get shit done mode" for rapid deployment using proven patterns, and "experimentation mode" for solving novel challenges and evolving the system.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This dual approach meant I could ship quickly when I knew exactly what I needed to build, but also had the flexibility to innovate when I hit content that didn't fit existing patterns. Every new solution that worked got documented and added to the style guide, so the system evolved with the project.
        </p>
        
        {/* Workflow Modes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Get Shit Done Mode */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚡️</span>
              <h4 className="font-semibold text-lg">Get Sh*t Done Mode</h4>
            </div>
            <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mb-3">
              When I knew exactly what I needed to build, I'd use pre-approved components from the style guide. This was my default mode—fast, consistent, and reliable.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-green-900/80 dark:text-green-200/80 space-y-1">
              <li>Reuse proven layout patterns</li>
              <li>Apply established color and typography rules</li>
              <li>Deploy content quickly with confidence</li>
              <li>Maintain consistency across the site</li>
            </ul>
          </div>
          
          {/* Experimentation Mode */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🧪</span>
              <h4 className="font-semibold text-lg">Experimentation Mode</h4>
            </div>
            <p className="text-[1.125rem] text-purple-900/80 dark:text-purple-200/80 mb-3">
              When I hit content that didn't fit existing patterns, I'd switch to experimentation mode. This was where the style guide evolved and grew.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-purple-900/80 dark:text-purple-200/80 space-y-1">
              <li>Try new patterns and approaches</li>
              <li>Document successful solutions</li>
              <li>Update both style guide and project rules</li>
              <li>Evolve the system based on real needs</li>
            </ul>
          </div>
        </div>
        
        {/* Real Example */}
        <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-3 text-yellow-900 dark:text-yellow-200">A Real Example: The Timeline Component</h4>
          <p className="text-[1.125rem] text-yellow-900/80 dark:text-yellow-200/80 mb-3">
            When I needed to show my learning journey in the case study, I started in "get shit done mode" with existing card patterns. But the content didn't fit well—it needed a timeline layout. So I switched to "experimentation mode," built a custom timeline component, and then documented it in the style guide for future use.
          </p>
          <p className="text-[1.125rem] text-yellow-900/80 dark:text-yellow-200/80">
            This is how the system actually works: it's not just about following rules, but about knowing when to break them and how to evolve the rules based on real needs.
          </p>
        </div>
      </motion.section>

      {/* Image Workflow */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Image Workflow: Supporting Both Modes</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The image workflow I built had to support both workflow modes seamlessly. In "get shit done mode," I needed a system that was fast and predictable—drop an image in the right folder, use the standard component, and it just works. In "experimentation mode," I needed the flexibility to try new approaches while maintaining the same performance and organization standards.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This meant creating a workflow that was both systematic and flexible. Every image follows the same basic patterns, but the system can handle everything from quick screenshots to complex multi-image layouts. The result is a system that scales with the project and keeps the codebase clean.
        </p>
        
        {/* Workflow Modes Applied to Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Get Shit Done Mode for Images */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚡️</span>
              <h4 className="font-semibold text-lg">Images in "Get Sh*t Done" Mode</h4>
            </div>
            <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mb-3">
              For standard images, I follow the established patterns: organized storage, consistent implementation, and automatic optimization.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-green-900/80 dark:text-green-200/80 space-y-1">
              <li>Drop image in <code className="bg-green-100 dark:bg-green-800 px-1 rounded">/public/images/</code></li>
              <li>Use Next.js Image component with standard props</li>
              <li>Apply consistent styling (borders, shadows, radius)</li>
              <li>Let the system handle optimization automatically</li>
            </ul>
          </div>
          
          {/* Experimentation Mode for Images */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🧪</span>
              <h4 className="font-semibold text-lg">Images in "Experimentation" Mode</h4>
            </div>
            <p className="text-[1.125rem] text-purple-900/80 dark:text-purple-200/80 mb-3">
              For complex image layouts or new patterns, I experiment while maintaining the same organizational standards.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-purple-900/80 dark:text-purple-200/80 space-y-1">
              <li>Try new layout patterns (grids, carousels, overlays)</li>
              <li>Experiment with advanced interactions</li>
              <li>Document successful patterns for future use</li>
              <li>Maintain performance and accessibility standards</li>
            </ul>
          </div>
        </div>
        
        {/* Image Workflow Visual */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-8">
          <div className="flex-1 flex flex-col justify-center">
            <h4 className="font-semibold text-xl mb-2">The System in Action</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-2">
              The workflow wasn't just theoretical—it was built into the codebase itself. Every image follows the same patterns: organized storage, consistent implementation, and performance optimization built right into the components.
            </p>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              This systematic approach meant I could focus on building features rather than managing assets, while still maintaining professional quality and performance standards.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/images/imageworkflow-code.png" alt="Image Workflow Code Example" width={700} height={350} className="rounded-lg border shadow-lg w-full max-w-full" />
          </div>
        </div>
        
        {/* Smart CDN Integration */}
        <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-3 text-green-900 dark:text-green-200">Smart Image Routing</h4>
          <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mb-3">
            The system automatically routes images based on size: small images stay on Vercel for speed, while larger images get uploaded to my hosting.com CDN to keep deployment sizes manageable. The <code className="bg-green-100 dark:bg-green-800 px-1 rounded">getImageUrl()</code> function handles all the routing logic seamlessly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Small Images (&lt; 1MB):</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>Stored in <code className="bg-green-100 dark:bg-green-800 px-1 rounded">/public/images/</code></li>
                <li>Served directly from Vercel</li>
                <li>Fast local development</li>
                <li>Cursor manages uploads via Vercel</li>
              </ul>
            </div>
            <div>
              <strong>Large Images (&gt; 1MB):</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>Uploaded to hosting.com CDN</li>
                <li>Added to <code className="bg-green-100 dark:bg-green-800 px-1 rounded">LARGE_IMAGES</code> array</li>
                <li>Removed from local storage</li>
                <li>Cursor manages uploads via FTP</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cursor Integration Callout */}
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-3 text-blue-900 dark:text-blue-200">Cursor's Role in the Workflow</h4>
          <p className="text-[1.125rem] text-blue-900/80 dark:text-blue-200/80 mb-3">
            Cursor isn't just my code editor—it's an active participant in this image workflow. It automatically manages uploads based on image size, using Vercel's deployment pipeline for smaller assets and FTP for larger files that need to be sent to external servers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Vercel Integration:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>Small images deployed with code</li>
                <li>Automatic optimization</li>
                <li>Instant previews</li>
                <li>Zero configuration</li>
              </ul>
            </div>
            <div>
              <strong>FTP Automation:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>Large images sent to external CDN</li>
                <li>Automated upload scripts</li>
                <li>Keeps deployment sizes small</li>
                <li>Maintains performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Callout Box */}
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl my-8">
          <p className="text-lg font-serif italic text-blue-900 dark:text-blue-200">
            "A good image workflow isn't just about storing files—it's about creating a system that supports how you actually work."
          </p>
        </div>

        <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
          This workflow ensured that images were properly organized, optimized, and maintainable throughout the project lifecycle. It supported both development speed and production quality, making it easy to iterate quickly while maintaining professional standards. The result was a system that scaled with the project and kept the codebase clean and performant.
        </p>
      </motion.section>

      {/* Innovations & Solutions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Innovations That Emerged from Experimentation</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The best innovations in this project came from "experimentation mode"—when I hit content challenges that didn't fit existing patterns. Instead of forcing square pegs into round holes, I built custom solutions that solved real problems and then documented them for future use.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          These aren't just technical tricks—they're proof that I can design and build systems that actually work for real users. Every innovation started as a problem that needed solving, evolved through experimentation, and ended up as a documented pattern in the style guide.
        </p>
        
        {/* Innovation Process */}
        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-3 text-purple-900 dark:text-purple-200">How Innovations Emerged</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-purple-900 dark:text-purple-200">1. Problem Identification</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1 text-purple-900/80 dark:text-purple-200/80">
                <li>Content didn't fit existing patterns</li>
                <li>User experience needed improvement</li>
                <li>Performance or accessibility gaps</li>
              </ul>
            </div>
            <div>
              <strong className="text-purple-900 dark:text-purple-200">2. Experimentation</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1 text-purple-900/80 dark:text-purple-200/80">
                <li>Try new approaches and patterns</li>
                <li>Test in real context</li>
                <li>Iterate based on results</li>
              </ul>
            </div>
            <div>
              <strong className="text-purple-900 dark:text-purple-200">3. Documentation</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1 text-purple-900/80 dark:text-purple-200/80">
                <li>Add to style guide</li>
                <li>Update project rules</li>
                <li>Make reusable for future</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Hero Title Demo */}
        <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/20 dark:to-gray-800/20 border rounded-xl my-8">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Live Demo: Homepage Hero Title</p>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-4">
                Designer & Developer for{' '}
                <CyclingText 
                  words={['B2B', 'SaaS', 'Startup', 'Enterprise', 'Product']}
                  interval={3000}
                  className="text-4xl md:text-5xl lg:text-6xl"
                />
                {' '}Companies
              </h1>
              <p className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80">
                Building digital products that actually work.
              </p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-2">CyclingText: A Real Problem, Real Solution</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              <strong>Problem:</strong> I needed a hero title that could adapt to different audiences without creating multiple pages.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              <strong>Solution:</strong> Built a custom CyclingText component that cycles through different company types with smooth animations and accessibility features.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Result:</strong> One hero title that works for multiple audiences, with the pattern documented for future use.
            </p>
          </div>
        </div>

        {/* Animated SVG Graphics Grid */}
        <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/20 dark:to-gray-800/20 border rounded-xl my-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Live Demo: Animated SVG Graphics</p>
            <h4 className="font-semibold mb-2">Interactive Starfield Animations</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              <strong>Problem:</strong> The homepage hero needed visual interest that matched the space theme without being distracting.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              <strong>Solution:</strong> Custom SVG animations with the Scorpio constellation, shooting stars, and satellite movements that enhance rather than compete with the content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Constellation */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="text-center mb-4">
                <h5 className="font-semibold mb-2">Constellation</h5>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">Pulsating connecting lines and glowing stars</p>
              </div>
              <div className="relative h-32 bg-black rounded overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 200 128" className="absolute inset-0">
                  <defs>
                    <filter id="scorpio-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Pulsating connecting lines (main curve) */}
                  <line x1="30" y1="80" x2="50" y2="100" stroke="#fffbe6" strokeWidth="2" opacity="0.7" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.7;0.15;0.7" dur="3.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="50" y1="100" x2="70" y2="110" stroke="#fffbe6" strokeWidth="2" opacity="0.7" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.7;0.15;0.7" dur="3.3s" repeatCount="indefinite" />
                  </line>
                  <line x1="70" y1="110" x2="90" y2="115" stroke="#fffbe6" strokeWidth="2" opacity="0.7" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.7;0.15;0.7" dur="3.4s" repeatCount="indefinite" />
                  </line>
                  <line x1="90" y1="115" x2="110" y2="118" stroke="#fffbe6" strokeWidth="2" opacity="0.7" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.7;0.15;0.7" dur="3.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="110" y1="118" x2="130" y2="120" stroke="#fffbe6" strokeWidth="2" opacity="0.7" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.7;0.15;0.7" dur="3.6s" repeatCount="indefinite" />
                  </line>
                  
                  {/* Pulsating connecting lines (upper arc) */}
                  <line x1="30" y1="80" x2="50" y2="60" stroke="#5cc6ff" strokeWidth="1.5" opacity="0.5" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="50" y1="60" x2="70" y2="40" stroke="#5cc6ff" strokeWidth="1.5" opacity="0.5" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.9s" repeatCount="indefinite" />
                  </line>
                  <line x1="70" y1="40" x2="90" y2="20" stroke="#5cc6ff" strokeWidth="1.5" opacity="0.5" filter="url(#scorpio-glow)">
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.0s" repeatCount="indefinite" />
                  </line>
                  
                  {/* Glowing stars */}
                  <circle cx="30" cy="80" r="2.5" fill="#fffbe6" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="50" cy="100" r="2" fill="#5cc6ff" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="70" cy="110" r="1.8" fill="#fff" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="90" cy="115" r="1.6" fill="#ffd1dc" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="110" cy="118" r="1.4" fill="#fff" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="130" cy="120" r="1.2" fill="#fffbe6" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="50" cy="60" r="1.8" fill="#fff" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="70" cy="40" r="1.4" fill="#5cc6ff" opacity="0.95" filter="url(#scorpio-glow)" />
                  <circle cx="90" cy="20" r="1.1" fill="#fff" opacity="0.95" filter="url(#scorpio-glow)" />
                </svg>
              </div>
            </div>

            {/* Shooting Star */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="text-center mb-4">
                <h5 className="font-semibold mb-2">Shooting Star</h5>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">Animated comet with gradient tail</p>
              </div>
              <div className="relative h-32 bg-black rounded overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 200 128" className="absolute inset-0">
                  <defs>
                    <linearGradient id="shooting-demo" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <filter id="comet-demo-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <path id="comet-demo-shape" d="M0,0 L-20,0 L0,1 L20,0 Z" />
                  </defs>
                  <use
                    href="#comet-demo-shape"
                    x="200"
                    y="64"
                    fill="url(#shooting-demo)"
                    filter="url(#comet-demo-glow)"
                    transform="rotate(-45)"
                  >
                    <animate
                      attributeName="x"
                      from="200"
                      to="-50"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      from="64"
                      to="32"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </use>
                </svg>
              </div>
            </div>

            {/* Satellite */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="text-center mb-4">
                <h5 className="font-semibold mb-2">Satellite</h5>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">Orbiting satellite with pulsing signal</p>
              </div>
              <div className="relative h-32 bg-black rounded overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 200 128" className="absolute inset-0">
                  <defs>
                    <filter id="satellite-demo-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Satellite body */}
                  <rect x="85" y="54" width="30" height="20" rx="2" fill="#e0e0e0" filter="url(#satellite-demo-glow)" />
                  
                  {/* Solar panels */}
                  <rect x="75" y="59" width="10" height="10" fill="#5cc6ff" filter="url(#satellite-demo-glow)" />
                  <rect x="115" y="59" width="10" height="10" fill="#5cc6ff" filter="url(#satellite-demo-glow)" />
                  
                  {/* Pulsing signal rings */}
                  <circle cx="100" cy="64" r="5" stroke="#5cc6ff" strokeWidth="1" fill="none" opacity="0.8">
                    <animate attributeName="r" values="5;15;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="64" r="8" stroke="#5cc6ff" strokeWidth="1" fill="none" opacity="0.6">
                    <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Orbit path */}
                  <ellipse cx="100" cy="64" rx="60" ry="30" stroke="#333" strokeWidth="1" fill="none" opacity="0.3" />
                  
                  {/* Orbital movement */}
                  <g transform="rotate(0 100 64)">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 100 64;360 100 64"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                    <rect x="85" y="54" width="30" height="20" rx="2" fill="#e0e0e0" filter="url(#satellite-demo-glow)" />
                    <rect x="75" y="59" width="10" height="10" fill="#5cc6ff" filter="url(#satellite-demo-glow)" />
                    <rect x="115" y="59" width="10" height="10" fill="#5cc6ff" filter="url(#satellite-demo-glow)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Light/Dark Mode Demo */}
        <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/20 dark:to-gray-800/20 border rounded-xl my-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Live Demo: Theme Switching</p>
            <h4 className="font-semibold mb-2">Light Mode / Dark Mode</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Interactive theme switching with automatic system preference detection and manual toggle controls.
            </p>
          </div>
          
          <LocalThemeDemo />
        </div>

      </motion.section>

      {/* Challenges & Lessons Learned */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Challenges & How the Workflow Helped</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Coming back to modern frameworks after a break was humbling—there's always something new to learn, and the pace of change in web development doesn't slow down for anyone. But having the workflow modes I established made all the difference. When I hit roadblocks, I could switch to "experimentation mode" to figure things out, then document the solutions for future "get shit done mode" use.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The biggest challenge was fighting the urge to make everything perfect before shipping. The workflow helped me focus on getting real, working solutions out the door first, then improving them. Documenting as I went was harder than expected, but it paid off—every solution I figured out became part of the system for next time.
        </p>
        
        {/* Challenge Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Challenge 1 */}
          <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🔥</span>
              <h4 className="font-semibold text-lg">Challenge: Modern Framework Learning Curve</h4>
            </div>
            <p className="text-[1.125rem] text-red-900/80 dark:text-red-200/80 mb-3">
              <strong>Problem:</strong> Coming back to modern React/Next.js after a break meant learning new patterns, hooks, and best practices.
            </p>
            <p className="text-[1.125rem] text-red-900/80 dark:text-red-200/80 mb-3">
              <strong>Workflow Solution:</strong> Used "experimentation mode" to try different approaches, then documented successful patterns in the style guide for future "get shit done mode" use.
            </p>
            <p className="text-[1.125rem] text-red-900/80 dark:text-red-200/80">
              <strong>Result:</strong> Built a library of proven patterns that made subsequent development much faster.
            </p>
          </div>
          
          {/* Challenge 2 */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚡</span>
              <h4 className="font-semibold text-lg">Challenge: Perfectionism vs. Shipping</h4>
            </div>
            <p className="text-[1.125rem] text-blue-900/80 dark:text-blue-200/80 mb-3">
              <strong>Problem:</strong> Wanted to make everything perfect before shipping, which slowed down progress and killed momentum.
            </p>
            <p className="text-[1.125rem] text-blue-900/80 dark:text-blue-200/80 mb-3">
              <strong>Workflow Solution:</strong> Used "get shit done mode" to ship working solutions quickly, then "experimentation mode" to iterate and improve based on real feedback.
            </p>
            <p className="text-[1.125rem] text-blue-900/80 dark:text-blue-200/80">
              <strong>Result:</strong> Shipped faster, learned more from real usage, and built better solutions through iteration.
            </p>
          </div>
          
          {/* Challenge 3 */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">📚</span>
              <h4 className="font-semibold text-lg">Challenge: Documentation Discipline</h4>
            </div>
            <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mb-3">
              <strong>Problem:</strong> Documenting as I went was harder than expected—easy to skip when focused on building.
            </p>
            <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mb-3">
              <strong>Workflow Solution:</strong> Made documentation part of the workflow—every "experimentation mode" solution had to be documented before it could be used in "get shit done mode."
            </p>
            <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80">
              <strong>Result:</strong> Built a comprehensive style guide and project rules that made onboarding (even for myself) much easier.
            </p>
          </div>
          
          {/* Challenge 4 */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎯</span>
              <h4 className="font-semibold text-lg">Challenge: Content That Didn't Fit Patterns</h4>
            </div>
            <p className="text-[1.125rem] text-purple-900/80 dark:text-purple-200/80 mb-3">
              <strong>Problem:</strong> Some content (like the timeline, complex image layouts) didn't fit existing patterns and needed custom solutions.
            </p>
            <p className="text-[1.125rem] text-purple-900/80 dark:text-purple-200/80 mb-3">
              <strong>Workflow Solution:</strong> Used "experimentation mode" to build custom components, then documented them as new patterns for future use.
            </p>
            <p className="text-[1.125rem] text-purple-900/80 dark:text-purple-200/80">
              <strong>Result:</strong> Created innovative solutions that became part of the design system and improved the overall site quality.
            </p>
          </div>
        </div>
        
        {/* Key Lesson */}
        <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-3 text-yellow-900 dark:text-yellow-200">The Key Lesson: Confidence Comes from Doing</h4>
          <p className="text-[1.125rem] text-yellow-900/80 dark:text-yellow-200/80 mb-3">
            The biggest lesson from this project? Confidence comes from doing the work, not just planning it. The workflow I built helped me move from "I should know this" to "I can figure this out" to "I know how to solve this."
          </p>
          <p className="text-[1.125rem] text-yellow-900/80 dark:text-yellow-200/80">
            Every challenge became an opportunity to improve the system. Every solution became part of the toolkit. The result is a portfolio that's not just a showcase of finished work, but a living record of my ability to adapt, learn, and deliver at a high level.
          </p>
        </div>
        
        {/* Process Timeline */}
        <div className="w-full my-8 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Process & Discovery Timeline</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            This timeline shows how the project evolved through discovery and experimentation. Each step involved exploring new approaches, testing ideas, and refining the system based on what was learned.
          </p>
          <ProcessTimeline />
        </div>
      </motion.section>

      {/* Reflections & What's Next */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">What This Project Actually Demonstrates</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This project isn't about proving I can code—it's about showing how I think about problems, how I approach design systems, and how I build things that actually work. The workflow I developed, the innovations I created, and the challenges I solved all demonstrate real-world problem-solving skills that translate to any project.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The most valuable insight? Seeing how much the ecosystem has evolved, and how much better the developer experience has gotten. These tools make it possible to ship faster, iterate more confidently, and focus on the actual problems instead of fighting the framework. That's the kind of environment where real innovation happens.
        </p>
        
        {/* What This Demonstrates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Design Systems */}
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎨</span>
              <h4 className="font-semibold text-lg">Design System Thinking</h4>
            </div>
            <p className="text-[1.125rem] text-indigo-900/80 dark:text-indigo-200/80 mb-3">
              Built a living style guide that evolves with the project, not just static documentation. Shows I understand how to create systems that scale and adapt.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-indigo-900/80 dark:text-indigo-200/80 space-y-1">
              <li>Visual patterns that work in production</li>
              <li>Written rules that guide development</li>
              <li>Documentation that stays in sync</li>
            </ul>
          </div>
          
          {/* Workflow Optimization */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚡</span>
              <h4 className="font-semibold text-lg">Workflow Optimization</h4>
            </div>
            <p className="text-[1.125rem] text-green-900/80 dark:text-green-200/80 mb-3">
              Developed a dual-mode approach that balances speed with quality. Shows I can create systems that support both rapid deployment and thoughtful innovation.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-green-900/80 dark:text-green-200/80 space-y-1">
              <li>"Get shit done" mode for proven patterns</li>
              <li>"Experimentation" mode for novel challenges</li>
              <li>Documentation that bridges both approaches</li>
            </ul>
          </div>
          
          {/* Problem Solving */}
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🔧</span>
              <h4 className="font-semibold text-lg">Real-World Problem Solving</h4>
            </div>
            <p className="text-[1.125rem] text-orange-900/80 dark:text-orange-200/80 mb-3">
              Every challenge became an opportunity to improve the system. Shows I can adapt, learn quickly, and turn obstacles into advantages.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-orange-900/80 dark:text-orange-200/80 space-y-1">
              <li>Modern framework learning curve</li>
              <li>Perfectionism vs. shipping trade-offs</li>
              <li>Content that didn't fit existing patterns</li>
            </ul>
          </div>
          
          {/* Technical Innovation */}
          <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border border-pink-200 dark:border-pink-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🚀</span>
              <h4 className="font-semibold text-lg">Technical Innovation</h4>
            </div>
            <p className="text-[1.125rem] text-pink-900/80 dark:text-pink-200/80 mb-3">
              Created custom solutions that solve real problems. Shows I can build things that don't exist yet and make them work in production.
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-pink-900/80 dark:text-pink-200/80 space-y-1">
              <li>CyclingText component for dynamic content</li>
              <li>Custom SVG animations for visual interest</li>
              <li>Smart image routing system</li>
            </ul>
          </div>
        </div>
        
        {/* What's Next */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-4 text-blue-900 dark:text-blue-200">What's Next: Applying This Approach</h4>
          <p className="text-[1.125rem] text-blue-900/80 dark:text-blue-200/80 mb-4">
            This project demonstrates the kind of thinking and approach I bring to every project. I'm excited to apply this same systematic, adaptive approach to bigger challenges and more complex problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🤝</span>
              <h5 className="font-semibold mb-1">Collaborate & Contribute</h5>
              <p className="text-sm text-blue-900/80 dark:text-blue-200/80">
                Excited to work with talented teams and ship meaningful products using this systematic approach.
              </p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-2 block">🚀</span>
              <h5 className="font-semibold mb-1">Build Ambitious Products</h5>
              <p className="text-sm text-blue-900/80 dark:text-blue-200/80">
                Ready to tackle bigger challenges and ship real value with the same workflow optimization mindset.
              </p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-2 block">🧑‍🏫</span>
              <h5 className="font-semibold mb-1">Mentor & Support</h5>
              <p className="text-sm text-blue-900/80 dark:text-blue-200/80">
                Looking forward to helping others develop their own systematic approaches to problem-solving.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </article>
  );
} 
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
import LearningTimeline from '@/components/ui/LearningTimeline';

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

      {/* Hero Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-16 w-full relative aspect-[16/9] rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-100 to-purple-100 dark:from-slate-900 dark:to-purple-900"
      >
        <Image
          src="/images/portfolio2025-hero-placeholder.jpg"
          alt="Portfolio 2025 Hero Preview"
          fill
          className="object-cover p-8"
        />
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-400 dark:text-slate-600">Hero Image Placeholder</span>
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
            After years of relying on Squarespace for my portfolio, I realized it was time for a change. The old site was easy to maintain, but it didn’t reflect my current skills or the way I actually work. I wanted a portfolio that wasn’t just a gallery of past projects, but a living demonstration of my technical fluency, design process, and ability to build with today’s best tools. There was also a practical side: Squarespace’s monthly fees were adding up, and I needed a solution that gave me more control and flexibility.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            But the real driver was personal. After a break from tech—working in art fabrication, taking on design gigs, and navigating some big life changes—I needed to prove to myself (and future employers) that my skills weren’t just intact, but sharper than ever. This project is both a bridge across my career gap and a statement: I’m not just back, I’m ready for senior-level work, and I can actually deliver results with the latest stack.
          </p>
        </div>
        {/* Callout Box */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-xl my-8">
          <p className="text-lg font-serif italic text-blue-900 dark:text-blue-200">
            “I wanted a portfolio that’s a living demonstration, not just a gallery.”
          </p>
        </div>
        {/* Squarespace Limitations Callout */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-xl my-8">
          <h4 className="font-semibold mb-2">Why Squarespace Wasn’t Ideal for Me</h4>
          <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
            <li>Squarespace is perfect for quick, no-code sites. If you want to tinker, it’s a beautiful toolbox—with the drawers politely locked.</li>
            <li>The templates are top-notch, but you can always spot a Squarespace site. Familiarity is part of the deal.</li>
            <li>Custom code is possible, but it’s more workaround than workflow.</li>
            <li>Building a living style guide or reusable components? Not what Squarespace is made for—and that’s okay.</li>
          </ul>
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
              <li>Custom ideas? Usually met with “not supported.”</li>
              <li>Great for non-developers; too tidy for code-driven work.</li>
            </ul>
          </div>
        </div>

        {/* Old Portfolio Example 2 (alternate sides) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
          <div className="order-2 md:order-1">
            <h4 className="font-semibold mb-2">Case studies, but stuck in a template</h4>
            <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>Every project story started to sound the same. That’s the tradeoff for consistency.</li>
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
              <li>Technical depth or custom visuals? Only if “custom” means “sort of like everyone else.”</li>
              <li>Scrollability or interactivity? Not really. For many, that’s a feature, not a bug.</li>
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
            Choosing the right stack wasn’t just about using the latest tools. I needed a foundation that would let me move fast, experiment, and actually document my process as I went. This portfolio isn’t a static gallery—it’s a living demonstration of how I work, how I solve problems, and how I approach design systems in the real world.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Every decision here was made to support rapid iteration, honest documentation, and the kind of workflow I’d use on a real product team. The stack below is what enables that: tools that are proven, flexible, and built for real-world results—not just to look good on a portfolio site.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Intro Blurb */}
          <div className="flex flex-col justify-center h-full max-w-md">
            <h4 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark tracking-tight">Tech Stack</h4>
            <p className="text-base text-text-light/80 dark:text-text-dark/80">
              This isn’t just a list of trendy tools. Every choice here supports the way I actually work: rapid prototyping, real design system thinking, and documenting every pattern as I go. The stack below is what lets this portfolio be a living demonstration, not just a static gallery.
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
            This approach lets me move fast, experiment safely, and keep the design system honest. The style guide isn’t just a reference—it’s a toolkit I use every day, evolving alongside the project and making it easy to onboard, iterate, and maintain consistency as the site grows.
          </p>
        </div>
        <div className="mt-8 mb-8">
          <StyleGuideMiniPreview />
        </div>
        {/* Living Style Guide Section */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-stretch">
          {/* Narrative */}
          <div className="flex-1 flex flex-col justify-center">
            <h4 className="font-semibold text-xl mb-2">The Living Style Guide: My Real-World Design System</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-2">
              I didn't want a style guide that just sits in Figma or Notion. I built a living style guide directly into the site, so every component and pattern is documented, tested, and actually used in production. This lets me:
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-1 mb-2">
              <li>Move fast in "get shit done" mode, reusing proven patterns.</li>
              <li>Experiment safely, documenting new solutions as I go.</li>
              <li>Keep the design system honest—if it's in the guide, it works on the site.</li>
            </ul>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              It's a workflow tool, a documentation hub, and a proof of my approach to design systems: practical, iterative, and always evolving.
            </p>
          </div>
          {/* Screenshot/visual */}
          <div className="flex-1 flex items-center justify-center">
            <Image src="/images/styleguide-code.png" alt="Style Guide Screenshot" width={700} height={350} className="rounded-lg border shadow-lg w-full max-w-full" />
          </div>
        </div>
        {/* Style Guide + Project Rules Blurb */}
        <div className="mt-6">
          <h5 className="font-semibold mb-2">How I Actually Used the Style Guide (and Project Rules)</h5>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-2">
            The style guide wasn’t just a reference—it was a living toolkit I used every day. But to really keep things consistent and make onboarding (even for myself, after a break) painless, I paired it with a set of project rules written in markdown. These rules covered everything from naming conventions to layout dos and don’ts, and lived right alongside the code. Whenever I solved a new problem or found a better way to do something, I’d update both the style guide and the rules. It’s a system that actually works: fast to use, easy to update, and honest about what’s really in production.
          </p>
          <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-1">
            <li>Style guide = visual/design patterns, real code, live preview</li>
            <li>Markdown rules = process, naming, edge cases, onboarding notes</li>
            <li>Both evolve together as the project grows</li>
          </ul>
        </div>
      </motion.section>

      {/* Workflow & Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Workflow & Process</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          My workflow for this project was all about balancing speed with quality. Most of the time, I worked in “get shit done mode”—using pre-approved layout components from the style guide to deploy new content quickly and keep everything consistent. When I hit a novel content challenge, I’d switch to experimentation mode, try new patterns, and document anything that worked well for future use.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This approach let me move fast without sacrificing polish. Every new solution that made it into the site was tested in a real context, not just in isolation. The result is a portfolio that’s not just a showcase of finished work, but a living record of my process, decision-making, and ability to adapt as I go.
        </p>
        {/* Mode Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">⚡️</span>
            <h4 className="font-semibold mb-1">Get Sh*t Done Mode</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Rapid deployment using pre-approved components.</p>
          </div>
          <div className="text-3xl text-gray-400 dark:text-gray-600">↔️</div>
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">🧪</span>
            <h4 className="font-semibold mb-1">Experimentation Mode</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Try new patterns, document what works, evolve the style guide.</p>
          </div>
        </div>
      </motion.section>

      {/* Image Workflow */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Image Workflow & Asset Management</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          A key part of building this portfolio was establishing a solid image workflow that would scale with the project. I needed a system that was fast to use during development, optimized for production, and maintainable as the site grew. The result was a workflow that balances speed with quality.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This wasn't just about storing images—it was about creating a system that supported rapid iteration, maintained performance, and kept the codebase clean. Every decision was made to support the way I actually work: moving fast, experimenting safely, and shipping quality results.
        </p>
        
        {/* Image Workflow Visual */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-8">
          <div className="flex-1 flex flex-col justify-center">
            <h4 className="font-semibold text-xl mb-2">Image Workflow in Practice</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-2">
              The workflow wasn't just theoretical—it was built into the codebase itself. Every image followed the same patterns: organized storage, consistent implementation, and performance optimization built right into the components.
            </p>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              This systematic approach meant I could focus on building features rather than managing assets, while still maintaining professional quality and performance standards.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/images/imageworkflow-code.png" alt="Image Workflow Code Example" width={700} height={350} className="rounded-lg border shadow-lg w-full max-w-full" />
          </div>
        </div>
        
        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl">
            <h4 className="font-semibold mb-3 text-accent-light dark:text-accent-dark">Storage & Organization</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Centralized in <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/public/images/</code></li>
              <li>• Logical subdirectories by project type</li>
              <li>• Descriptive naming: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">styleguide-code.png</code></li>
              <li>• Version controlled alongside code</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl">
            <h4 className="font-semibold mb-3 text-accent-light dark:text-accent-dark">Implementation Standards</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Next.js Image component for optimization</li>
              <li>• Responsive sizing with proper aspect ratios</li>
              <li>• Consistent styling: borders, shadows, radius</li>
              <li>• Alt text for accessibility</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl">
            <h4 className="font-semibold mb-3 text-accent-light dark:text-accent-dark">Smart CDN Integration</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Small images (&lt; 1MB): served from Vercel</li>
              <li>• Large images (&gt; 1MB): uploaded to hosting.com CDN</li>
              <li>• Automated routing via <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">cdnUtils.ts</code></li>
              <li>• Seamless fallback system</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl">
            <h4 className="font-semibold mb-3 text-accent-light dark:text-accent-dark">Performance & Optimization</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Automatic compression and format conversion</li>
              <li>• Lazy loading built into Next.js Image</li>
              <li>• Responsive images for all screen sizes</li>
              <li>• Optimized for Core Web Vitals</li>
            </ul>
          </div>
        </div>

        {/* CDN Workflow Callout */}
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
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Innovations & Solutions</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This project gave me the space to build and refine a few things I’m genuinely proud of. I created custom components—like the CyclingText animation and scrollable content layouts—that solve real content challenges and add a layer of polish you don’t get from off-the-shelf solutions. The living style guide isn’t just documentation; it’s a toolkit I used and improved as the site evolved.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          I focused on advanced interactions, responsive design, and accessibility from the start. Every new pattern or component was documented and made reusable, so the site could grow without losing its sense of cohesion. These solutions aren’t just technical tricks—they’re proof that I can design and build systems that actually work for real users, in real-world scenarios.
        </p>
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
            <h4 className="font-semibold mb-2">CyclingText in Action</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              This custom component cycles through different company types, creating a dynamic hero title that adapts to different audiences. Built with accessibility, performance, and smooth animations in mind.
            </p>
          </div>
        </div>

        {/* Animated SVG Graphics Grid */}
        <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/20 dark:to-gray-800/20 border rounded-xl my-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Live Demo: Animated SVG Graphics</p>
            <h4 className="font-semibold mb-2">Interactive Starfield Animations</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Custom SVG animations that bring the homepage hero to life with the Scorpio constellation, shooting stars, and satellite movements.
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
                    fill="url(#shooting-demo)"
                    filter="url(#comet-demo-glow)"
                    transform="scale(1.5)"
                    opacity="0.8"
                  >
                    <animateMotion
                      dur="8s"
                      repeatCount="indefinite"
                      path="M 20 20 L 180 108"
                      rotate="auto"
                      keyPoints="0;1;1"
                      keyTimes="0;0.15;1"
                      calcMode="linear"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0.8;0;0"
                      keyTimes="0;0.07;0.07;0.1;1"
                      dur="8s"
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
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">Orbiting dot with fade animation</p>
              </div>
              <div className="relative h-32 bg-black rounded overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 200 128" className="absolute inset-0">
                  <defs>
                    <filter id="satellite-demo-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <circle r="1" fill="#fff" filter="url(#satellite-demo-glow)">
                    <animateMotion
                      dur="6s"
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      path="M 30 30 Q 100 10 170 30 Q 100 50 30 70 Q 100 90 170 70"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;0;1;0"
                      keyTimes="0;0.2;0.5;0.7;1"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
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
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Challenges & Lessons Learned</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Coming back to modern frameworks after a break was humbling—there’s always something new to learn, and the pace of change in web development doesn’t slow down for anyone. I had to fight the urge to make everything perfect before shipping, and instead focus on getting real, working solutions out the door (and then improving them).
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Documenting as I went was harder than expected, but it paid off in the long run. I ran into plenty of real-world edge cases that forced me to adapt, rethink, and sometimes scrap ideas that looked good on paper but didn’t work in practice. The biggest lesson? Confidence comes from doing the work, not just planning it. This project helped me rebuild my technical sharpness and reminded me that I can still learn fast, solve problems, and deliver at a high level.
        </p>
        {/* Callout Box */}
        <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl my-8">
          <p className="text-lg font-serif italic text-yellow-900 dark:text-yellow-200">
            “Confidence comes from doing the work, not just planning it.”
          </p>
        </div>
        {/* Learning Timeline */}
        <div className="w-full my-8 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Learning Journey Timeline</h4>
          <LearningTimeline />
        </div>
      </motion.section>

      {/* Reflections & What's Next */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Reflections & What's Next</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This project demonstrates what's possible when you combine proven approaches with modern tooling. It's not about proving I can code—it's about showing how I think about problems, how I approach design systems, and how I build things that actually work. The stack choices here reflect real-world constraints and opportunities, not just what looks good on a resume.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The most interesting part? Seeing how much the ecosystem has evolved, and how much better the developer experience has gotten. These tools make it possible to ship faster, iterate more confidently, and focus on the actual problems instead of fighting the framework. That's the kind of environment where real innovation happens.
        </p>
        {/* What's Next Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">🤝</span>
            <h4 className="font-semibold mb-1">Collaborate & Contribute</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Excited to work with talented teams and ship meaningful products.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">🚀</span>
            <h4 className="font-semibold mb-1">Build Ambitious Products</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Excited to tackle bigger challenges and ship real value.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">🧑‍🏫</span>
            <h4 className="font-semibold mb-1">Mentor & Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Looking forward to helping others grow and succeed.</p>
          </div>
        </div>

      </motion.section>
    </article>
  );
} 
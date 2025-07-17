'use client';

import { motion } from 'framer-motion';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import Image from 'next/image';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';
import StyleGuideMiniPreview from '@/components/ui/StyleGuideMiniPreview';

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
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Why Rebuild? (Motivation & Goals)</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          After years of relying on Squarespace for my portfolio, I realized it was time for a change. The old site was easy to maintain, but it didn’t reflect my current skills or the way I actually work. I wanted a portfolio that wasn’t just a gallery of past projects, but a living demonstration of my technical fluency, design process, and ability to build with today’s best tools. 
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          There was also a practical side: Squarespace’s monthly fees were adding up, and I needed a solution that gave me more control and flexibility. But the real driver was personal. After a break from tech—working in art fabrication, taking on design gigs, and navigating some big life changes—I needed to prove to myself (and future employers) that my skills weren’t just intact, but sharper than ever. This project is both a bridge across my career gap and a statement: I’m not just back, I’m ready for senior-level work, and I can actually deliver results with the latest stack.
        </p>
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
        className="mb-12"
      >
        <h3 className="text-4xl font-bold mb-6 text-center text-text-light dark:text-text-dark tracking-tight">Tech Stack</h3>
        <p className="text-lg text-center text-text-light/70 dark:text-text-dark/70 mb-8 max-w-2xl mx-auto">
          A modern, production-grade stack chosen for speed, flexibility, and real-world results.
        </p>
        <div className="w-full bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-background-dark dark:via-zinc-900 dark:to-background-dark rounded-3xl p-4 md:p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Next.js */}
            <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-md p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <Image src="/images/nextjs-logo.png" alt="Next.js logo" width={56} height={56} className="mb-3" />
              <h4 className="font-semibold text-xl mb-2">Next.js</h4>
              <p className="text-base text-text-light/80 dark:text-text-dark/80">
                The backbone of the site. Next.js let me mix static and server-rendered pages, keep routing simple, and ship fast. It’s the framework that makes React feel like a real website, not just a collection of components.
              </p>
            </div>
            {/* React */}
            <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-md p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <Image src="/images/react-logo.png" alt="React logo" width={56} height={56} className="mb-3" />
              <h4 className="font-semibold text-xl mb-2">React</h4>
              <p className="text-base text-text-light/80 dark:text-text-dark/80">
                The engine for every interactive bit. React’s component model let me build reusable layouts, custom UI, and keep everything maintainable—even as the site grew.
              </p>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-md p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <Image src="/images/tailwind-logo.png" alt="Tailwind CSS logo" width={56} height={56} className="mb-3" />
              <h4 className="font-semibold text-xl mb-2">Tailwind CSS</h4>
              <p className="text-base text-text-light/80 dark:text-text-dark/80">
                Utility classes for days. Tailwind let me style quickly, stay consistent, and avoid the usual CSS headaches. The design system lives right in the markup.
              </p>
            </div>
            {/* Framer Motion */}
            <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-md p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <Image src="/images/motion-logo.png" alt="Framer Motion logo" width={56} height={56} className="mb-3" />
              <h4 className="font-semibold text-xl mb-2">Framer Motion</h4>
              <p className="text-base text-text-light/80 dark:text-text-dark/80">
                For the little touches that make a site feel alive. Framer Motion powers the smooth transitions and subtle animations—nothing over the top, just enough to make it feel modern.
              </p>
            </div>
            {/* Vercel */}
            <div className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-md p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <Image src="/images/vercel-triangle-black.svg" alt="Vercel logo" width={56} height={56} className="mb-3" />
              <h4 className="font-semibold text-xl mb-2">Vercel</h4>
              <p className="text-base text-text-light/80 dark:text-text-dark/80">
                Deploys in seconds, previews for every branch, and zero config. Vercel makes it easy to treat the site as a living project, not a static portfolio.
              </p>
            </div>
          </div>
        </div>
        {/* Mini Style Guide Preview */}
        <div className="mt-8 mb-8">
          <StyleGuideMiniPreview />
        </div>
        {/* Living Style Guide Section */}
        <div className="mt-12 p-0 md:p-0 flex flex-col md:flex-row gap-0 md:gap-8 items-stretch">
          {/* Screenshot/visual */}
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-700 rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-8">
            <Image src="/images/style-guide-placeholder.jpg" alt="Style Guide Screenshot" width={320} height={160} className="rounded-lg border shadow-lg" />
          </div>
          {/* Narrative */}
          <div className="flex-1 flex flex-col justify-center bg-white dark:bg-background-dark border border-purple-200 dark:border-purple-700 rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-8">
            <h4 className="font-semibold text-xl mb-2">The Living Style Guide: My Real-World Design System</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-2">
              I didn’t want a style guide that just sits in Figma or Notion. I built a living style guide directly into the site, so every component and pattern is documented, tested, and actually used in production. This lets me:
            </p>
            <ul className="list-disc pl-5 text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-1 mb-2">
              <li>Move fast in “get shit done” mode, reusing proven patterns.</li>
              <li>Experiment safely, documenting new solutions as I go.</li>
              <li>Keep the design system honest—if it’s in the guide, it works on the site.</li>
            </ul>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              It’s a workflow tool, a documentation hub, and a proof of my approach to design systems: practical, iterative, and always evolving.
            </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">⚡️</span>
            <h4 className="font-semibold mb-1">Get Shit Done Mode</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Rapid deployment using pre-approved components.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">🧪</span>
            <h4 className="font-semibold mb-1">Experimentation Mode</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Try new patterns, document what works, evolve the style guide.</p>
          </div>
        </div>
        {/* Workflow Diagram Placeholder */}
        <div className="w-full my-8">
          <Image src="/images/workflow-diagram-placeholder.jpg" alt="Workflow Diagram" width={800} height={300} className="rounded-lg border mx-auto" />
          <p className="text-sm text-center text-gray-500 mt-2">How I move between workflow modes</p>
        </div>
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
        {/* Featured Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/20 dark:to-gray-800/20 border rounded-xl">
            <Image src="/images/cyclingtext-demo.gif" alt="CyclingText Demo" width={320} height={120} className="mb-2 rounded" />
            <h4 className="font-semibold mb-1">CyclingText Component</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Animated, accessible, and reusable for dynamic headlines.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/20 dark:to-gray-800/20 border rounded-xl">
            <Image src="/images/scrollable-layout-demo.jpg" alt="Scrollable Layout Demo" width={320} height={120} className="mb-2 rounded" />
            <h4 className="font-semibold mb-1">Scrollable Layouts</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Solves for dense, vertical content and keeps the experience smooth on all devices.</p>
          </div>
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
        {/* Timeline/Checklist Placeholder */}
        <div className="w-full my-8">
          <Image src="/images/learning-timeline-placeholder.jpg" alt="Learning Timeline" width={800} height={200} className="rounded-lg border mx-auto" />
          <p className="text-sm text-center text-gray-500 mt-2">Timeline of key learning moments and hurdles</p>
        </div>
      </motion.section>

      {/* Reflections & What’s Next */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Reflections & What’s Next</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          This project isn’t just a portfolio—it’s a living proof of what I can do right now. It shows that I’m not just keeping up, but actively pushing myself to learn, adapt, and build with the best tools available. I’m ready for senior-level work, whether that means joining a new team, building more ambitious products, or mentoring others who are on their own learning curve.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The biggest takeaway? Continuous learning is the real skill. I’m excited for what’s next—new challenges, new collaborations, and new opportunities to put this mindset (and this toolkit) to work.
        </p>
        {/* What's Next Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="p-6 bg-white dark:bg-gray-900 border rounded-xl flex flex-col items-center">
            <span className="text-3xl mb-2">🤝</span>
            <h4 className="font-semibold mb-1">Join a New Team</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Ready to collaborate and contribute at a senior level.</p>
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
        {/* Progress Bar/Arrow Placeholder */}
        <div className="w-full my-8 flex flex-col items-center">
          <Image src="/images/continuous-learning-arrow.png" alt="Continuous Learning Arrow" width={400} height={60} className="mb-2" />
          <span className="text-sm text-gray-500">Continuous learning is the real skill.</span>
        </div>
      </motion.section>
    </article>
  );
} 
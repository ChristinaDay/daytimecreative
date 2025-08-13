"use client";
import { StarfieldSVG } from '@/components/StarfieldSVG';
import { AuroraBackground } from '@/components/AuroraBackground';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { allProjects } from '@/data/projects';

// Extract the latest year from strings like "2024-2025" or "2016-2018" or "2021"
function getLatestYear(yearString: string): number {
  const matches = yearString.match(/\d{4}/g);
  if (!matches || matches.length === 0) return 0;
  return Math.max(...matches.map((y) => Number(y)));
}

export default function ProjectsPage() {
  return (
    <>
      {/* Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none min-h-[180vh]">
        <div className="relative z-[40]"><StarfieldSVG /></div>
        <AuroraBackground zIndexClass="z-[25]" />
      </div>
      <article className="relative z-[60] max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pt-24 pb-32 md:pb-40">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 will-change-contents"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-6">
            All Projects
          </h1>
          <p className="text-lg text-text-light/90 dark:text-text-dark/90 max-w-3xl mx-auto mb-8 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased]">
            A comprehensive look at my design and development work, showcasing technical implementation, system architecture, and problem-solving approaches.
          </p>
        </motion.div>

        {/* All Projects */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...allProjects]
              .sort((a, b) => getLatestYear(b.year) - getLatestYear(a.year))
              .map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                variant="glass"
                className="relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(110deg,rgba(255,255,255,0)_20%,rgba(35,189,184,0.18)_35%,rgba(255,255,255,0)_50%)] before:opacity-0 before:translate-x-[-60%] hover:before:opacity-100 hover:before:translate-x-[120%] before:transition before:duration-700 before:ease-out before:pointer-events-none before:blur-[10px] motion-reduce:before:opacity-0 motion-reduce:hover:before:opacity-0"
              />
            ))}
          </div>
        </section>
      </article>

      {/* Combined CTA Section - Full Width */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-[60] w-full bg-gradient-to-br from-surface-light/5 to-accent-light/5 dark:from-surface-dark/5 dark:to-accent-dark/5 py-16 px-4 md:px-12 lg:px-20 mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            What's Next?
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto">
            Ready to collaborate on your next project, or curious about my creative process? 
            Let's connect and explore how thoughtful design can drive your goals forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Collaboration CTA */}
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center border border-white/30 dark:border-white/10 shadow-lg">
            <div className="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
              Let's Work Together
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-6 text-sm">
              I'm excited to take on new challenges and collaborate with teams who value user-centered design.
            </p>
            <Link 
              href="mailto:christinamday@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 text-sm"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Creative Process CTA */}
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center border border-white/30 dark:border-white/10 shadow-lg">
            <div className="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
              Explore My Process
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-6 text-sm">
              Discover how hands-on fabrication work informs my digital design approach and creative thinking.
            </p>
            <Link 
              href="/art-fabrication" 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-light/30 dark:border-accent-dark/30 text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300 text-sm"
            >
              View Fabrication Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Additional Navigation */}
        <div className="text-center mt-8 pt-6 border-t border-text-light/10 dark:border-text-dark/10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
} 
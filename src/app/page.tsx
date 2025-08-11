'use client';

import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Blockquote } from '@/components/typography/DropQuote';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { StarfieldSVG } from '@/components/StarfieldSVG';
import { FlexibleHeroText, FlexibleBioText, FlexibleQuickStats } from '@/components/FlexibleAbout';
import { useEffect, useRef } from 'react';
import { allProjects } from '@/data/projects';
import Footer from '@/components/Footer';

export default function Home() {
  // Parallax refs
  const starfieldRef = useRef<HTMLDivElement>(null);
  const pinkGradientRef = useRef<HTMLDivElement>(null);
  const blueGradientRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    let latestScrollY = window.scrollY;
    let ticking = false;

    const updateParallax = () => {
      if (starfieldRef.current) {
        starfieldRef.current.style.transform = `translateY(${latestScrollY * 0.15}px)`;
      }
      if (pinkGradientRef.current) {
        pinkGradientRef.current.style.transform = `translateY(${latestScrollY * 0.25}px)`;
      }
      if (blueGradientRef.current) {
        blueGradientRef.current.style.transform = `translateY(${latestScrollY * 0.35}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial set
    updateParallax();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Swirl and Opal Gradient Background */}
      <div className="absolute z-0 inset-0 pointer-events-none">
        {/* Starfield overlay for dark mode */}
        <div ref={starfieldRef} style={{ willChange: 'transform' }}>
          <StarfieldSVG />
        </div>
        {/* Foreground gradients above SVG starfield (dark mode only) */}
        <div
          ref={pinkGradientRef}
          className="absolute top-[25%] left-[65%] w-[14vw] h-[14vw] rounded-full hidden dark:block z-20"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 182, 193, 0.18) 0%, rgba(255, 182, 193, 0.08) 30%, transparent 80%)',
            opacity: 0.07,
            filter: 'blur(18px)',
            willChange: 'transform',
            mixBlendMode: 'screen',
          }}
        />
        <div
          ref={blueGradientRef}
          className="absolute bottom-[12%] right-[14%] w-[16vw] h-[16vw] rounded-full hidden dark:block z-20"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(92, 198, 255, 0.09) 0%, rgba(92, 198, 255, 0.04) 30%, transparent 80%)',
            opacity: 0.05,
            filter: 'blur(20px)',
            willChange: 'transform',
            mixBlendMode: 'screen',
          }}
        />
        {/* Foreground dark blue cloud gradient above SVG starfield (dark mode only) */}
        <div
          className="absolute top-[40%] left-[-10vw] w-[50vw] h-[18vw] rounded-full hidden dark:block z-20"
          style={{
            background: 'radial-gradient(ellipse 80% 30% at 50% 60%, rgba(26, 54, 93, 0.09) 0%, rgba(26, 54, 93, 0.03) 30%, transparent 80%)',
            opacity: 0.02,
            filter: 'blur(40px)',
            willChange: 'transform',
            mixBlendMode: 'screen',
          }}
        />
        {/* Light mode gradients (existing) */}
        <div
          className="absolute left-[-5vw] top-[-5vw] w-[20vw] h-[20vw] rotate-[18deg] dark:hidden"
          style={{
            background: 'conic-gradient(from 200deg at 60% 40%, rgba(255, 209, 220, 0.3) 10%, rgba(212, 241, 249, 0.3) 30%, rgba(230, 230, 250, 0.3) 55%, rgba(255, 182, 193, 0.3) 80%, rgba(255, 209, 220, 0.3) 100%)',
            filter: 'blur(10px)',
            opacity: 1,
            mixBlendMode: 'soft-light',
          }}
        />
        {/* Dark mode nebula gradients (enhanced version) */}
        <div
          className="absolute left-[-5vw] top-[-5vw] w-[14vw] h-[14vw] rotate-[12deg] hidden dark:block"
          style={{
            background: 'conic-gradient(from 180deg at 60% 40%, rgba(74, 30, 58, 0.32) 10%, rgba(26, 54, 93, 0.22) 30%, rgba(45, 27, 59, 0.22) 55%, rgba(255, 182, 193, 0.22) 80%, rgba(74, 30, 58, 0.32) 100%)',
            filter: 'blur(7px)',
            opacity: 1,
            mixBlendMode: 'screen',
          }}
        />
        {/* Dark nebula clouds */}
        <div
          className="absolute top-[30%] left-[20%] w-[60vw] h-[40vw] rounded-full hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 40%, transparent 100%)',
            opacity: 0.4,
            filter: 'blur(80px)',
            mixBlendMode: 'multiply',
          }}
        />
        {/* Horsehead Nebula colorful glows (behind dark clouds) */}
        <div
          className="absolute top-[18%] left-[38%] w-[60vw] h-[40vw] hidden dark:block z-10"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 60% 40%, rgba(92,198,255,0.45) 0%, rgba(92,198,255,0.18) 40%, transparent 100%)',
            opacity: 0.18,
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute top-[28%] left-[28%] w-[40vw] h-[30vw] hidden dark:block z-10"
          style={{
            background: 'radial-gradient(ellipse 50% 30% at 40% 60%, rgba(255, 200, 150, 0.38) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 100%)',
            opacity: 0.18,
            filter: 'blur(50px)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute bottom-[28%] right-[18%] w-[50vw] h-[35vw] hidden dark:block z-10"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 60% 60%, rgba(92,198,255,0.38) 0%, rgba(92,198,255,0.12) 40%, transparent 100%)',
            opacity: 0.16,
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute bottom-[32%] right-[28%] w-[35vw] h-[25vw] hidden dark:block z-10"
          style={{
            background: 'radial-gradient(ellipse 45% 25% at 60% 40%, rgba(255, 200, 150, 0.32) 0%, rgba(255, 200, 150, 0.10) 40%, transparent 100%)',
            opacity: 0.16,
            filter: 'blur(40px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Horsehead Nebula inspired clouds (remain above color glows) */}
        <div
          className="absolute top-[15%] left-[40%] w-[70vw] h-[50vw] hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 40% 30%, rgba(45, 27, 59, 0.7) 0%, rgba(45, 27, 59, 0.4) 30%, transparent 70%)',
            opacity: 0.18,
            filter: 'blur(40px)',
            mixBlendMode: 'multiply',
            transform: 'rotate(-15deg)',
          }}
        />
        <div
          className="absolute top-[25%] left-[30%] w-[50vw] h-[40vw] hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 60% 40%, rgba(45, 27, 59, 0.7) 0%, rgba(45, 27, 59, 0.4) 30%, transparent 70%)',
            opacity: 0.18,
            filter: 'blur(40px)',
            mixBlendMode: 'multiply',
            transform: 'rotate(10deg)',
          }}
        />
        <div
          className="absolute bottom-[30%] right-[20%] w-[60vw] h-[45vw] hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 35% 60%, rgba(45, 27, 59, 0.7) 0%, rgba(45, 27, 59, 0.4) 30%, transparent 70%)',
            opacity: 0.18,
            filter: 'blur(40px)',
            mixBlendMode: 'multiply',
            transform: 'rotate(-5deg)',
          }}
        />
        {/* Subtle red glow accents */}
        <div
          className="absolute top-[20%] left-[45%] w-[40vw] h-[30vw] hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 50% 30% at 50% 50%, rgba(255, 69, 0, 0.3) 0%, rgba(255, 69, 0, 0.1) 40%, transparent 100%)',
            opacity: 0.18,
            filter: 'blur(20px)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute bottom-[25%] right-[30%] w-[35vw] h-[25vw] hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 45% 25% at 40% 60%, rgba(255, 69, 0, 0.25) 0%, rgba(255, 69, 0, 0.08) 50%, transparent 100%)',
            opacity: 0.16,
            filter: 'blur(15px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Additional dark cloud for depth */}
        <div
          className="absolute top-[40%] left-[20%] w-[45vw] h-[35vw] hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 55% 35% at 45% 55%, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.5) 40%, transparent 100%)',
            opacity: 0.2,
            filter: 'blur(25px)',
            mixBlendMode: 'multiply',
            transform: 'rotate(5deg)',
          }}
        />
        {/* Royal blue light leaks for dark mode (enhanced) */}
        <div
          className="absolute top-[-15%] right-[-20%] w-[80vw] h-[80vw] rounded-full hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(26, 54, 93, 0.3) 0%, rgba(26, 54, 93, 0.15) 40%, transparent 100%)',
            opacity: 0.2,
            filter: 'blur(100px)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-15%] w-[90vw] h-[90vw] rounded-full hidden dark:block"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 30% 70%, rgba(26, 54, 93, 0.3) 0%, rgba(26, 54, 93, 0.15) 40%, transparent 100%)',
            opacity: 0.18,
            filter: 'blur(120px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Main content and footer layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Area - isolated container */}
        <div className="w-full min-h-[60vh] flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-transparent">
          <div className="flex flex-col items-start justify-center flex-1 pt-52 pb-8 md:pt-64 md:pb-12">
            <FlexibleHeroText>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row gap-4 mt-6 relative z-30"
              >
                <button 
                  onClick={() => {
                    // More robust scroll implementation
                    setTimeout(() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        // Try modern smooth scroll first
                        if ('scrollBehavior' in document.documentElement.style) {
                          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                          // Fallback for older browsers
                          const targetPosition = projectsSection.offsetTop - 100; // Offset for header
                          window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                          });
                        }
                      } else {
                        console.warn('Projects section not found');
                      }
                    }, 100);
                  }}
                  className="px-6 py-3 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 text-center shadow-lg hover:shadow-xl relative z-40 cursor-pointer"
                >
                  View Projects
                </button>
                <Link 
                  href="/resume"
                  className="px-6 py-3 border-2 border-accent-light/30 dark:border-accent-dark/30 text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:border-accent-light dark:hover:border-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300 text-center shadow-lg hover:shadow-xl relative z-40 cursor-pointer"
                >
                  View Resume
                </Link>
                <button 
                  onClick={() => {
                    // More robust scroll implementation  
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        // Try modern smooth scroll first
                        if ('scrollBehavior' in document.documentElement.style) {
                          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                          // Fallback for older browsers
                          const targetPosition = aboutSection.offsetTop - 100; // Offset for header
                          window.scrollTo({
                            top: targetPosition,
                          });
                        }
                      } else {
                        console.warn('About section not found');
                      }
                    }, 100);
                  }}
                  className="px-6 py-3 border-2 border-text-light/20 dark:border-text-dark/20 text-text-light dark:text-text-dark rounded-lg font-semibold hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 text-center hover:bg-accent-light/5 dark:hover:bg-accent-dark/5 relative z-40 cursor-pointer"
                >
                  About Me
                </button>
              </motion.div>
            </FlexibleHeroText>
          </div>
        </div>

        {/* Rest of homepage content - does not move with hero */}
        <main className="flex-1 flex flex-col">
          {/* Projects-First Section */}
          <section id="projects" className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mt-64 sm:mt-48 md:mt-32 mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-4">
                  Selected Work
                </h2>
                <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
                  Design and development projects showcasing technical implementation and systematic thinking
                </p>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {allProjects.slice(0, 6).map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={project.link} className="block group">
                      <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-2xl p-6 h-full hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                        <div className="aspect-video mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-semibold text-lg text-text-light dark:text-text-dark mb-2 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* View All Projects Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Link 
                  href="/projects" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-light to-accent-light/80 dark:from-accent-dark dark:to-accent-dark/80 text-white dark:text-gray-900 rounded-lg font-semibold hover:from-accent-light/90 hover:to-accent-light/70 dark:hover:from-accent-dark/90 dark:hover:to-accent-dark/70 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Projects
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Compact About Section */}
          <section id="about" className="w-full py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-3xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  {/* Portrait */}
                  <div className="flex justify-center md:justify-start">
                    <div className="relative">
                      <img 
                        src="/images/christina-day-sm.png" 
                        alt="Christina Day - Designer & Developer" 
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20 dark:border-white/10 shadow-xl"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-light/20 to-accent-light/5 dark:from-accent-dark/20 dark:to-accent-dark/5"></div>
                    </div>
                  </div>
                  {/* Bio */}
                  <div className="md:col-span-2 space-y-4">
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-light dark:text-text-dark">
                      About Me
                    </h2>
                    <FlexibleBioText />
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium">React Development</span>
                      <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium">Design Systems</span>
                      <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium">UI/UX Design</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full pt-16 pb-8 text-center"
          >
            <div className="px-4 md:px-12 lg:px-20">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-light dark:text-text-dark mb-6">
                Let's create something amazing together
              </h2>
              <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto mb-8">
                Whether you need a complete product redesign, user research insights, or creative direction for your next big idea, I'd love to hear about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="mailto:christinamday@gmail.com" 
                  className="px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300"
                >
                  Get In Touch
                </Link>
                <a 
                  href="images/Resume-ChristinaDay2025.pdf"
                  className="px-8 py-4 border-2 border-text-light/20 dark:border-text-dark/20 text-text-light dark:text-text-dark rounded-lg font-semibold hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
}

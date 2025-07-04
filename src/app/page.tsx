'use client';

import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Blockquote } from '@/components/typography/DropQuote';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { StarfieldSVG } from '@/components/StarfieldSVG';
import { FlexibleHeroText, FlexibleBioText, FlexibleQuickStats } from '@/components/FlexibleAbout';
import { useEffect, useRef } from 'react';

const caseStudies = [
  {
    title: 'HackerDAO',
    description:
      'A decentralized autonomous organization platform for developers and hackers to collaborate on Web3 projects.',
    link: '/projects/hackerdao',
  },
  {
    title: 'Property Intelligence Platform',
    description:
      'A sophisticated system leveraging AI and predictive analytics to transform property data into actionable insights for insurance underwriting.',
    link: '/projects/propertyintelligence',
  },
  {
    title: 'Customizable UI',
    description:
      'Designing a modular, customizable dashboard system for Betterview\'s PartnerHub integration, empowering users to personalize their data visualization experience.',
    link: '/projects/customizableui',
  },
  // Add more case studies as needed
];

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
      
      {/* Hero area */}
      <header className="relative z-10 w-full min-h-screen flex flex-col justify-center items-start">
        {/* Large headline */}
        <div className="flex flex-col items-start justify-center flex-1 pt-24 pb-16 md:pt-32 md:pb-24">
          <FlexibleHeroText />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link 
              href="#featured-work" 
              className="px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link 
              href="#about" 
              className="px-8 py-4 border-2 border-text-light/20 dark:border-text-dark/20 text-text-light dark:text-text-dark rounded-lg font-semibold hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 text-center hover:bg-accent-light/5 dark:hover:bg-accent-dark/5"
            >
              About Me
            </Link>
          </motion.div>
          

        </div>
        
        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center text-text-light/40 dark:text-text-dark/40">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-3 bg-current rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* Bio Section */}
      <section className="w-full py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-3xl p-12 md:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Portrait + Bio + Tools */}
              <div className="space-y-8">
                {/* Portrait & Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex justify-center sm:justify-start flex-shrink-0">
                    <div className="relative">
                      <img 
                        src="/images/portrait.png" 
                        alt="Christina Day - Designer & Developer" 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 dark:border-white/10 shadow-xl"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-light/20 to-accent-light/5 dark:from-accent-dark/20 dark:to-accent-dark/5"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-light dark:text-text-dark leading-tight">
                      A bit about me
                    </h2>
                  </div>
                </div>
                
                {/* Bio Text */}
                <FlexibleBioText />
                

              </div>
              
              {/* Right Column: Quick Stats */}
              <div className="space-y-6">
                <FlexibleQuickStats />
                
                <div className="pt-4 border-t border-white/15 dark:border-white/10">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-text-light dark:text-text-dark">React Development</div>
                    <div className="text-sm font-medium text-text-light dark:text-text-dark">Design Systems</div>
                    <div className="text-sm font-medium text-text-light dark:text-text-dark">UI/UX Design</div>
                  </div>
                </div>
                
                {/* Tools & Skills */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Technical Stack</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-text-light/90 dark:text-text-dark/90 mb-1">Frontend</div>
                      <div className="text-xs text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                        React, Next.js, TypeScript, Tailwind CSS, Framer Motion
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-light/90 dark:text-text-dark/90 mb-1">Design</div>
                      <div className="text-xs text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                        Figma, Adobe Creative Suite, Design Systems, Prototyping
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-light/90 dark:text-text-dark/90 mb-1">Workflow</div>
                      <div className="text-xs text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                        Git, Vercel, Linear, Component Libraries, API Integration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <ProjectsSection />

            {/* Skills-Based Project Showcase */}
      <section id="work" className="w-full py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-40">
          
          {/* Skill 1: Brand Design & Illustration */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Content Column */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-sm uppercase tracking-wider text-accent-light/70 dark:text-accent-dark/70 font-medium">01 — Brand & Illustration</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark leading-tight">
                      I create brand identities that feel authentic and memorable
              </h2>
                  </div>
                  <p className="text-xl text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                    I created HackerDAO's complete visual identity—from logo to custom illustrations—building a brand that helps Web3 developers feel like they belong to something bigger.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Brand Strategy</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Logo Design</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Custom Illustration</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Visual Systems</span>
                </div>

                <Link href="/projects/hackerdao" className="inline-flex items-center gap-3 text-lg font-medium text-accent-light dark:text-accent-dark hover:text-accent-light/80 dark:hover:text-accent-dark/80 transition-all duration-300 group">
                  View HackerDAO Case Study 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Image Column */}
              <div className="lg:col-span-7">
                <Link href="/projects/hackerdao" className="block">
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img 
                        src="/images/hackerdao-illustration-hero.png" 
                        alt="HackerDAO brand illustration showing collaborative Web3 development" 
                        className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light/20 to-accent-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </Link>
              </div>
            </div>
            </motion.div>
            
                    {/* Skill 2: Design Systems & Development */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Image Column */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <Link href="/projects/zerocater" className="block">
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img 
                        src="/images/zerocater-ZeroCater_design-system.png" 
                        alt="ZeroCater design system showing component library and code implementation" 
                        className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light/20 to-accent-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </Link>
              </div>
              
              {/* Content Column */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-sm uppercase tracking-wider text-accent-light/70 dark:text-accent-dark/70 font-medium">02 — Design Systems & Code</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark leading-tight">
                      I build design systems that scale—and I code them myself
                    </h2>
                  </div>
                  <p className="text-xl text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                    I didn't just design ZeroCater's component library—I built it myself with React, reducing development time by 60%. This hybrid approach creates design systems that actually work in production.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">React Development</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Design Systems</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Component Libraries</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">GitHub Collaboration</span>
                </div>

                <Link href="/projects/snacks-and-kitchens" className="inline-flex items-center gap-3 text-lg font-medium text-accent-light dark:text-accent-dark hover:text-accent-light/80 dark:hover:text-accent-dark/80 transition-all duration-300 group">
                  View ZeroCater Case Study 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            </motion.div>
            
                    {/* Skill 3: Complex Data & AI Product Design */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Content Column */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-sm uppercase tracking-wider text-accent-light/70 dark:text-accent-dark/70 font-medium">03 — Data & AI Interfaces</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark leading-tight">
                      I make complex data feel intuitive and actionable
                    </h2>
                  </div>
                  <p className="text-xl text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                    I transformed overwhelming property data and AI insights into intuitive dashboards that reduced claim processing time by 40%. Good design makes complex workflows actually work for real people.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Data Visualization</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">AI/ML Interfaces</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">User Research</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium border border-accent-light/20 dark:border-accent-dark/20">Enterprise UX</span>
                </div>

                <Link href="/projects/propertyintelligence" className="inline-flex items-center gap-3 text-lg font-medium text-accent-light dark:text-accent-dark hover:text-accent-light/80 dark:hover:text-accent-dark/80 transition-all duration-300 group">
                  View Property Intelligence Case Study 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Image Column */}
              <div className="lg:col-span-7">
                <Link href="/projects/propertyintelligence" className="block">
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img 
                        src="/images/betterview-propertyintelligence2.png" 
                        alt="Property Intelligence Platform dashboard showing AI-powered property insights" 
                        className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light/20 to-accent-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </Link>
              </div>
            </div>
            </motion.div>
            
          {/* Call to Action */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-16"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-light dark:text-text-dark mb-4">
              Ready to see more?
            </h3>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8 max-w-2xl mx-auto">
              These are just three examples of how I combine design thinking with technical execution. Each project tells a different story about solving real problems for real people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-gray-900 transition-all duration-300"
              >
                Let's Work Together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            </motion.div>
        </div>
      </section>
      
      {/* Interactive Proven Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full py-24 px-2 relative z-10 bg-gradient-to-b from-surface-light/20 to-transparent dark:from-surface-dark/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark mb-6">
              Proven Results
            </h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto">
              Here's how my design approach has driven measurable business impact across different industries and company stages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Metric 1: User Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
                             <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                 <div className="text-2xl md:text-3xl font-semibold text-accent-light dark:text-accent-dark mb-3 group-hover:scale-105 transition-transform">
                   +40%
                 </div>
                 <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-2">
                   User Engagement
                 </h3>
                 <p className="text-text-light/60 dark:text-text-dark/60 text-sm leading-relaxed">
                   Average increase in user engagement through strategic UX improvements and data-driven design decisions
                 </p>
                 <div className="mt-3 text-xs text-accent-light/70 dark:text-accent-dark/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                   PartnerHub • Property Intelligence • ZeroCater
                 </div>
               </div>
            </motion.div>

            {/* Metric 2: Development Speed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
                             <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                 <div className="text-2xl md:text-3xl font-semibold text-accent-light dark:text-accent-dark mb-3 group-hover:scale-105 transition-transform">
                   60%
                 </div>
                 <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-2">
                   Faster Development
                 </h3>
                 <p className="text-text-light/60 dark:text-text-dark/60 text-sm leading-relaxed">
                   Reduction in development time through comprehensive design systems and component libraries
                 </p>
                 <div className="mt-3 text-xs text-accent-light/70 dark:text-accent-dark/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                   Betterview Design System • Component Libraries
                 </div>
               </div>
            </motion.div>

            {/* Metric 3: Cost Reduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
            >
                             <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                 <div className="text-2xl md:text-3xl font-semibold text-accent-light dark:text-accent-dark mb-3 group-hover:scale-105 transition-transform">
                   -30%
                 </div>
                 <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-2">
                   Development Costs
                 </h3>
                 <p className="text-text-light/60 dark:text-text-dark/60 text-sm leading-relaxed">
                   Reduction in development costs through efficient design processes and reusable components
                 </p>
                 <div className="mt-3 text-xs text-accent-light/70 dark:text-accent-dark/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                   Design Systems • Process Optimization
                 </div>
               </div>
            </motion.div>

            {/* Metric 4: Time to Market */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer"
            >
                             <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                 <div className="text-2xl md:text-3xl font-semibold text-accent-light dark:text-accent-dark mb-3 group-hover:scale-105 transition-transform">
                   3x
          </div>
                 <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-2">
                   Faster Launches
                 </h3>
                 <p className="text-text-light/60 dark:text-text-dark/60 text-sm leading-relaxed">
                   Accelerated time-to-market through rapid prototyping and validated design decisions
                 </p>
                 <div className="mt-3 text-xs text-accent-light/70 dark:text-accent-dark/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                   HackerDAO • Customizable UI • Spotlights
          </div>
        </div>
            </motion.div>

            {/* Metric 5: User Satisfaction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group cursor-pointer"
            >
                             <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                 <div className="text-2xl md:text-3xl font-semibold text-accent-light dark:text-accent-dark mb-3 group-hover:scale-105 transition-transform">
                   4.8/5
          </div>
                 <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-2">
                   User Satisfaction
                 </h3>
                 <p className="text-text-light/60 dark:text-text-dark/60 text-sm leading-relaxed">
                   Average user satisfaction score through user-centered design and usability testing
                 </p>
                 <div className="mt-3 text-xs text-accent-light/70 dark:text-accent-dark/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                   User Research • Usability Testing • Iteration
            </div>
          </div>
            </motion.div>

            {/* Metric 6: Scale Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group cursor-pointer"
            >
                             <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                 <div className="text-2xl md:text-3xl font-semibold text-accent-light dark:text-accent-dark mb-3 group-hover:scale-105 transition-transform">
                   1000+
        </div>
                 <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-2">
                   Companies Served
                 </h3>
                 <p className="text-text-light/60 dark:text-text-dark/60 text-sm leading-relaxed">
                   Products I've designed now serve over 1000 companies, from startups to Fortune 500s
                 </p>
                 <div className="mt-3 text-xs text-accent-light/70 dark:text-accent-dark/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                   ZeroCater • Betterview • Enterprise Scale
          </div>
            </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-16"
          >
            <p className="text-text-light/70 dark:text-text-dark/70 mb-6">
              Ready to see similar results for your product?
            </p>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>



      {/* Creative Process/Fab Lab Teaser */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full py-24 relative z-10 bg-surface-light/30 dark:bg-surface-dark/20"
      >
        <div className="text-center mb-16 px-4 md:px-12 lg:px-20">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark mb-4">
            Beyond Digital
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto mb-8">
            My hands-on approach to problem-solving extends beyond screens. I also work as an art fabricator, creating custom installations and bringing digital concepts into physical reality.
          </p>
          <Link 
            href="/art-fabrication" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300"
          >
            Explore Fabrication Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full pt-24 pb-32 relative z-10 text-center"
      >
        <div className="px-4 md:px-12 lg:px-20">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark mb-6">
            Let's create something amazing together
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto mb-8">
            Whether you need a complete product redesign, user research insights, or creative direction for your next big idea, I'd love to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="mailto:christina@christinamday.com" 
              className="px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link 
              href="/images/Resume-ChristinaDay2025.pdf" 
              target="_blank"
              className="px-8 py-4 border-2 border-text-light/20 dark:border-text-dark/20 text-text-light dark:text-text-dark rounded-lg font-semibold hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}

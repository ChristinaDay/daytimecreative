'use client';

import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Blockquote } from '@/components/typography/DropQuote';
import { StarfieldSVG } from '@/components/StarfieldSVG';
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
      <header className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        {/* Large headline */}
        <div className="flex flex-col items-start justify-center flex-1 pt-48 pb-56">
          <h1 className="text-left text-6xl md:text-6xl lg:text-7xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-20">
            I'm Christina, a designer based in Oakland. Keep reading to learn more about me and my work.
          </h1>
        </div>
        {/* Down arrow */}
        <div className="absolute bottom-1/4">
          <div className="relative w-[36px] h-[144px]">
            <svg width="36" height="144" viewBox="0 0 36 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
              {/* Glow lines (behind, thicker, blurred, low opacity, animated) */}
              <g className="animate-pulse-subtle">
                <line x1="18" y1="8" x2="18" y2="112" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.18" filter="url(#main-glow)" />
                <polyline points="10,104 18,115 26,104" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.18" filter="url(#main-glow)" />
              </g>
              {/* Main arrow lines (always visible, crisp, no filter) */}
              <line x1="18" y1="8" x2="18" y2="112" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <polyline points="10,104 18,115 26,104" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <filter id="main-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </header>
      {/* Drop-quote blurb below hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-start justify-center flex-1 py-16 mt-0 relative z-10"
      >
        <div className="w-full md:w-1/2">
          <Blockquote>
            I specialize in product design, UX, and creative direction for web, apps, and brands.
          </Blockquote>
        </div>
      </motion.section>
      {/* Featured Case Study Section */}
      <section className="w-full py-24 px-2 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Left: Text */}
          <div className="w-full md:w-2/5 flex flex-col items-start justify-center mb-12 md:mb-0">
            <span className="text-base text-text-light dark:text-text-dark mb-2">Case study</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-light dark:text-text-dark mb-6">HackerDAO Brand & Product Design</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-4">Creating a vibrant brand identity and platform for Web3 developers to collaborate and build together.</p>
            <Link href="/projects/hackerdao" className="text-lg underline underline-offset-4 text-accent-light dark:text-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition font-bold dark:drop-shadow-[0_0_8px_#aee7ff]">Read more</Link>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <img 
              src="/images/hackerdao-illustration-big.png" 
              alt="HackerDAO Project" 
              className="rounded-xl shadow-2xl w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>
      {/* Property Intelligence Preview Section */}
      <section className="w-full py-24 px-2 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Left: Text */}
          <div className="w-full md:w-2/5 flex flex-col items-start justify-center mb-12 md:mb-0">
            <span className="text-base text-text-light dark:text-text-dark mb-2">Case study</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-light dark:text-text-dark mb-6">Property Intelligence Platform</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-4">Building an AI-powered platform that transforms property data into actionable insights for insurance professionals.</p>
            <Link href="/projects/propertyintelligence" className="text-lg underline underline-offset-4 text-accent-light dark:text-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition font-bold dark:drop-shadow-[0_0_8px_#aee7ff]">Read more</Link>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl w-full aspect-[4/3] flex items-center justify-center p-8">
              <img 
                src="/images/betterview-propertyintelligence2.png" 
                alt="Property Intelligence Platform" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* Customizable UI Preview Section */}
      <section className="w-full py-24 px-2 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Left: Text */}
          <div className="w-full md:w-2/5 flex flex-col items-start justify-center mb-12 md:mb-0">
            <span className="text-base text-text-light dark:text-text-dark mb-2">Case study</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-light dark:text-text-dark mb-6">Customizable UI</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-4">Designing a modular, customizable dashboard system for Betterview's PartnerHub integration, empowering users to personalize their data visualization experience.</p>
            <Link href="/projects/customizableui" className="text-lg underline underline-offset-4 text-accent-light dark:text-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition font-bold dark:drop-shadow-[0_0_8px_#aee7ff]">Read more</Link>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl w-full aspect-[4/3] flex items-center justify-center p-8">
              <img 
                src="/images/betterview-propertyintelligence1.png"
                alt="Customizable UI Dashboard Configuration"
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* Spotlights Reporting Preview Section */}
      <section className="w-full py-24 px-2 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Left: Text */}
          <div className="w-full md:w-2/5 flex flex-col items-start justify-center mb-12 md:mb-0">
            <span className="text-base text-text-light dark:text-text-dark mb-2">Case study</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-light dark:text-text-dark mb-6">Spotlights Reporting at Betterview</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-4">Transforming dynamic map data into accessible, exportable reports for insurance professionals.</p>
            <Link href="/projects/spotlightsreporting" className="text-lg underline underline-offset-4 text-accent-light dark:text-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition font-bold dark:drop-shadow-[0_0_8px_#aee7ff]">Read more</Link>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl w-full aspect-[4/3] flex items-center justify-center p-8">
              <img 
                src="/images/betterview-spotlights1.png" 
                alt="Spotlights Reporting at Betterview" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* ZeroCater Snacks & Kitchens Preview Section */}
      <section className="w-full py-24 px-2 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Left: Text */}
          <div className="w-full md:w-2/5 flex flex-col items-start justify-center mb-12 md:mb-0">
            <span className="text-base text-text-light dark:text-text-dark mb-2">Case study</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-light dark:text-text-dark mb-6">ZeroCater – Snacks & Kitchens</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-4">Designing a subscription-based office snack and kitchen service for modern workplaces.</p>
            <Link href="/projects/snacks-and-kitchens" className="text-lg underline underline-offset-4 text-accent-light dark:text-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition font-bold dark:drop-shadow-[0_0_8px_#aee7ff]">Read more</Link>
          </div>
          {/* Right: Image (Placeholder) */}
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <img 
              src="/images/zerocater_snacks.jpg" 
              alt="ZeroCater Snacks & Kitchens" 
              className="rounded-xl shadow-2xl w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>
    </>
  );
}

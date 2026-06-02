'use client';

import React, { useEffect } from 'react';
import { StarfieldSVG } from '@/components/StarfieldSVG';
import { AuroraBackground } from '@/components/AuroraBackground';

// Timeline styling CSS - constellation-inspired with connecting lines between nodes
const timelineAnimationsCSS = `
/* Timeline line glow and pulse animations - matching Scorpio constellation */
@keyframes timelineLinePulse {
 0%, 100% { opacity: 0.6; }
 50% { opacity: 0.2; }
}

@keyframes timelineLinePulseDark {
 0%, 100% { opacity: 0.5; }
 50% { opacity: 0.15; }
}

@keyframes timelineLineBlue {
 0%, 100% { opacity: 0.5; }
 50% { opacity: 0.1; }
}

/* Timeline dot color transitions */
@keyframes timelineDotColorTransition {
 0%, 100% { fill: #5cc6ff; }
 50% { fill: #fff; }
}

/* Timeline line color transitions - smooth solid colors */
@keyframes timelineLineColorTransition {
 0%, 100% { 
 background-color: #5cc6ff; 
 filter: drop-shadow(0 0 3px #5cc6ff);
 }
 50% { 
 background-color: #fffbe6; 
 filter: drop-shadow(0 0 3px #fffbe6);
 }
}

/* Light mode subtle sheen animation - smooth solid colors */
@keyframes timelineRainbowSheen {
 0%, 100% { 
 background-color: #5cc6ff; 
 filter: drop-shadow(0 0 3px #5cc6ff);
 }
 25% { 
 background-color: #7c3aed; 
 filter: drop-shadow(0 0 3px #7c3aed);
 }
 50% { 
 background-color: #8b5cf6; 
 filter: drop-shadow(0 0 3px #8b5cf6);
 }
 75% { 
 background-color: #6366f1; 
 filter: drop-shadow(0 0 3px #6366f1);
 }
}

/* Theme-aware timeline animations */
:root {
 --timeline-animation: timelineRainbowSheen;
}
.dark {
 --timeline-animation: timelineLineColorTransition;
}
`;

export default function ResumePage() {
  useEffect(() => {
    // Inject timeline animations CSS
    if (typeof window !== 'undefined' && !document.getElementById('timeline-animations-css')) {
      const style = document.createElement('style');
      style.id = 'timeline-animations-css';
      style.innerHTML = timelineAnimationsCSS;
      document.head.appendChild(style);
    }
  }, []);

  // Pause aurora animations during scroll to reduce jank
  useEffect(() => {
    const onScrollStart = () => document.documentElement.classList.add('is-scrolling');
    const onScrollEnd = () => {
      clearTimeout((onScrollEnd as any)._t);
      (onScrollEnd as any)._t = setTimeout(
        () => document.documentElement.classList.remove('is-scrolling'),
        120
      );
    };
    window.addEventListener('scroll', onScrollStart, { passive: true });
    window.addEventListener('scroll', onScrollEnd, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScrollStart);
      window.removeEventListener('scroll', onScrollEnd);
    };
  }, []);

  // Timeline node properties (expanded for complete timeline)
  const timelineNodeStyles = [
    { r: 5.5, fill: '#fffbe6' }, // 0: Rotary Pictures
    { r: 3.7, fill: '#5cc6ff' }, // 1: Local Language
    { r: 3.3, fill: '#fff' }, // 2: HackerDAO
    { r: 3, fill: '#ffd1dc' }, // 3: Betterview
    { r: 2.7, fill: '#fff' }, // 4: Ten Spot
    { r: 3.5, fill: '#5cc6ff' }, // 5: Thrive Global
    { r: 3.2, fill: '#fff' }, // 6: ZeroCater Product
    { r: 2.8, fill: '#5cc6ff' }, // 7: ZeroCater Designer
    { r: 2.9, fill: '#fff' }, // 8: MakerSquare
    { r: 2.6, fill: '#fffbe6' }, // 9: AnyPerk
  ];

  return (
    <>
      {/* Backgrounds */}
      <div className="pointer-events-none fixed inset-0 z-10 min-h-[180vh]">
        <div className="relative z-[40]">
          <StarfieldSVG />
        </div>
        <AuroraBackground zIndexClass="z-[25]" />
      </div>
      {/* SVG Filter Definitions - Exact match to Scorpio constellation */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="line-glow-cream" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="line-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Starfield rendered once above via Backgrounds */}

      <article className="relative z-40 mx-auto max-w-[100rem] px-4 pb-24 pt-24 md:px-6 md:pb-40 md:pt-28 lg:px-8 lg:pt-32">
        {/* Header */}
        <header className="mb-12 text-center md:mb-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-6 font-serif text-4xl font-normal leading-tight text-gray-900 dark:text-white md:mb-8 md:text-6xl lg:text-7xl">
              Christina Day
            </h1>
            <div className="mb-8 md:mb-10">
              <h2 className="mx-auto mb-4 max-w-4xl px-4 font-serif text-xl font-normal leading-relaxed text-accent-light dark:text-accent-dark md:mb-6 md:text-2xl lg:text-3xl">
                Senior Product Designer
              </h2>
              <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
                UX/UI + Branding + Frontend Dev | AI Tools • Systems Design • Web + Mobile • Figma •
                React
              </p>
            </div>

            {/* Location */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-4 py-2 backdrop-blur-sm dark:border-gray-600/30 dark:bg-gray-800/60">
                <svg
                  className="h-4 w-4 text-accent-light dark:text-accent-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 md:text-base">
                  Oakland, California
                </span>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
              <a
                href="mailto:christinamday@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/80 px-4 py-2.5 text-sm font-medium text-accent-light shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800/80 dark:text-accent-dark dark:hover:bg-gray-800/90 md:text-base"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/christinaday"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/80 px-4 py-2.5 text-sm font-medium text-accent-light shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800/80 dark:text-accent-dark dark:hover:bg-gray-800/90 md:text-base"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://christinamday.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/80 px-4 py-2.5 text-sm font-medium text-accent-light shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800/80 dark:text-accent-dark dark:hover:bg-gray-800/90 md:text-base"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                Portfolio
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/80 px-4 py-2.5 text-sm font-medium text-accent-light shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800/80 dark:text-accent-dark dark:hover:bg-gray-800/90 md:text-base"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Projects
              </a>
              <a
                href="https://upfetch.me/resume-christina-day.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-light to-accent-light/80 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-accent-light/90 hover:to-accent-light/70 hover:shadow-xl dark:from-accent-dark dark:to-accent-dark/80 dark:text-gray-900 dark:hover:from-accent-dark/90 dark:hover:to-accent-dark/70 md:text-base"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8 md:mb-16">
          <h3 className="mb-6 text-center font-serif text-2xl font-normal md:mb-8 md:text-3xl">
            Summary
          </h3>
          <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-text-light/90 dark:text-text-dark/90 md:space-y-6 md:text-lg">
            <p>
              I'm a Senior Product Designer with 10+ years of experience designing data-rich
              platforms, internal tools, and customer-facing products across B2B SaaS and emerging
              technology. I specialize in turning complex, ambiguous problem spaces into clear,
              intuitive experiences, working from first principles and balancing user needs,
              technical constraints, and business goals.
            </p>
            <p>
              I've led end-to-end product design for systems that support high-stakes
              decision-making, partnering closely with product, engineering, and data teams from
              discovery through launch.
            </p>
            <p>
              My work often sits at the intersection of data, systems, and human judgment, where
              clarity and trust are essential, and I'm most excited by products where thoughtful
              design has real leverage on decisions, outcomes, and scale.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8 md:mb-16">
          <h3 className="mb-8 text-center font-serif text-2xl font-normal md:mb-12 md:text-3xl">
            Experience
          </h3>

          <div className="mx-auto max-w-4xl">
            {/* Timeline Container */}
            <div className="relative">
              {/* Mobile Timeline - Single Line with Dots */}
              <div
                className="z-5 absolute bottom-0 top-6 w-0.5 bg-[#5cc6ff] opacity-70 md:hidden"
                style={{ left: 'calc(1rem - 1px)', height: 'calc(100% - 1.5rem)' }}
              ></div>

              <div className="space-y-8 md:space-y-12">
                {/* Rotary Pictures, most recent */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[0].r * 4}
                    height={timelineNodeStyles[0].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[0].r * 2}
                      cy={timelineNodeStyles[0].r * 2}
                      r={timelineNodeStyles[0].r}
                      fill="#fffbe6"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - first to second dot */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden h-64 w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 12s ease-in-out 0.4s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[0].r * 4}
                    height={timelineNodeStyles[0].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[0].r * 2}
                      cy={timelineNodeStyles[0].r * 2}
                      r={timelineNodeStyles[0].r}
                      fill="#5cc6ff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 6.3s ease-in-out 0.2s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Product Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2022 - 2026
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      Rotary Pictures • Boston, MA (Remote)
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Led end-to-end product and systems design for an innovative sound studio
                      supporting film production. Defined design direction across digital tools,
                      brand systems, and partner-facing touch points. Collaborated with leadership
                      and engineering to create scalable, flexible workflows that supported growth,
                      partnerships, and evolving business needs.
                    </p>
                  </div>
                </div>

                {/* Williams-Sonoma */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[1].r * 4}
                    height={timelineNodeStyles[1].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[1].r * 2}
                      cy={timelineNodeStyles[1].r * 2}
                      r={timelineNodeStyles[1].r}
                      fill="#5cc6ff"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - second to third dot */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '251px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 14s ease-in-out 2.1s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[1].r * 4}
                    height={timelineNodeStyles[1].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[1].r * 2}
                      cy={timelineNodeStyles[1].r * 2}
                      r={timelineNodeStyles[1].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 5.8s ease-in-out 1.3s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Production Design
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2025 - 2026
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      Williams-Sonoma, Inc. • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Contributed to high-volume e-commerce photography production as part of a
                      cross-functional team.
                    </p>
                  </div>
                </div>

                {/* Local Language */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[2].r * 4}
                    height={timelineNodeStyles[2].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[2].r * 2}
                      cy={timelineNodeStyles[2].r * 2}
                      r={timelineNodeStyles[2].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - HackerDAO to Betterview */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '265px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 15s ease-in-out 1.8s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[2].r * 4}
                    height={timelineNodeStyles[2].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[2].r * 2}
                      cy={timelineNodeStyles[2].r * 2}
                      r={timelineNodeStyles[2].r}
                      fill="#5cc6ff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 6.7s ease-in-out 2.6s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Design Fabrication
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2024 - 2025
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      Local Language • Oakland, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Executed custom architectural and production work for hospitality and public
                      art clients, translating conceptual designs into production-ready systems
                      under real-world constraints.
                    </p>
                  </div>
                </div>

                {/* Betterview */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[3].r * 4}
                    height={timelineNodeStyles[3].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[3].r * 2}
                      cy={timelineNodeStyles[3].r * 2}
                      r={timelineNodeStyles[3].r}
                      fill="#ffd1dc"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - Betterview to Ten Spot */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '264px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 16s ease-in-out 3.3s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[3].r * 4}
                    height={timelineNodeStyles[3].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[3].r * 2}
                      cy={timelineNodeStyles[3].r * 2}
                      r={timelineNodeStyles[3].r}
                      fill="#ffd1dc"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 6.7s ease-in-out 2.6s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Visual Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2013 - 2015
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      HackerDAO • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Created the visual identity and early product direction for a web3 learning
                      collective. Designed a modular brand system, homepage hero experience, and
                      supporting assets to establish tone, storytelling, and community identity at
                      launch.
                    </p>
                  </div>
                </div>

                {/* Ten Spot */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[4].r * 4}
                    height={timelineNodeStyles[4].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[4].r * 2}
                      cy={timelineNodeStyles[4].r * 2}
                      r={timelineNodeStyles[4].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - Ten Spot to Thrive Global */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '226px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 13.5s ease-in-out 3.2s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[3].r * 4}
                    height={timelineNodeStyles[3].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[3].r * 2}
                      cy={timelineNodeStyles[3].r * 2}
                      r={timelineNodeStyles[3].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 5.4s ease-in-out 0.9s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        UX Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2021
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      Betterview • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Designed UX and UI for a data-heavy property intelligence platform used by
                      insurers to assess risk and make high-impact decisions. Led feature design for
                      modular property views, layered risk overlays, and parcel-level
                      visualizations. Partnered closely with product managers, engineers, and data
                      scientists to translate complex datasets into clear, configurable workflows.
                    </p>
                  </div>
                </div>

                {/* Thrive Global */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[5].r * 4}
                    height={timelineNodeStyles[5].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[5].r * 2}
                      cy={timelineNodeStyles[5].r * 2}
                      r={timelineNodeStyles[5].r}
                      fill="#5cc6ff"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - Thrive Global to ZeroCater Product Designer */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '235px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 11s ease-in-out 1.6s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[4].r * 4}
                    height={timelineNodeStyles[4].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[4].r * 2}
                      cy={timelineNodeStyles[4].r * 2}
                      r={timelineNodeStyles[4].r}
                      fill="#5cc6ff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 6.9s ease-in-out 3.1s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Web Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2020 - 2021
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      Ten Spot • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Designed and helped build a refreshed marketing website and supporting digital
                      experiences to showcase new product offerings, including the launch of a
                      streaming engagement platform.
                    </p>
                  </div>
                </div>

                {/* ZeroCater Product Designer */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[6].r * 4}
                    height={timelineNodeStyles[6].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[6].r * 2}
                      cy={timelineNodeStyles[6].r * 2}
                      r={timelineNodeStyles[6].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - ZeroCater Product Designer to ZeroCater Designer */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '251px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 11s ease-in-out 1.6s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[3].r * 4}
                    height={timelineNodeStyles[3].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[3].r * 2}
                      cy={timelineNodeStyles[3].r * 2}
                      r={timelineNodeStyles[3].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 5.4s ease-in-out 0.9s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Product Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2019
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      Thrive Global • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Founded by Ariana Huffington. I contributed product design to ThriveBot, an
                      AI-powered wellness assistant focused on interaction patterns, clarity, and
                      trust in human-AI experiences.
                    </p>
                  </div>
                </div>

                {/* ZeroCater Designer */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[7].r * 4}
                    height={timelineNodeStyles[7].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[7].r * 2}
                      cy={timelineNodeStyles[7].r * 2}
                      r={timelineNodeStyles[7].r}
                      fill="#5cc6ff"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - ZeroCater Designer to MakerSquare */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '263px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 13s ease-in-out 0.8s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[4].r * 4}
                    height={timelineNodeStyles[4].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[4].r * 2}
                      cy={timelineNodeStyles[4].r * 2}
                      r={timelineNodeStyles[4].r}
                      fill="#5cc6ff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 6.9s ease-in-out 3.1s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Product Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2016 - 2018
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      ZeroCater • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Designed and launched ZeroCater's Kitchens & Snacks product, creating client
                      dashboards and internal tools in close collaboration with engineering. Also
                      contributed to the company's foundational visual system and design standards
                      across product and brand surfaces during a period of rapid growth.
                    </p>
                  </div>
                </div>

                {/* MakerSquare */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[8].r * 4}
                    height={timelineNodeStyles[8].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[8].r * 2}
                      cy={timelineNodeStyles[8].r * 2}
                      r={timelineNodeStyles[8].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  {/* Connecting line - ZeroCater Designer to MakerSquare */}
                  <div
                    className="z-5 absolute left-4 top-6 hidden w-0.5 -translate-x-1/2 bg-[#5cc6ff] opacity-70 dark:animate-none md:left-[2.063rem] md:top-1/2 md:block"
                    style={{
                      height: '265px',
                      animation:
                        'var(--timeline-animation, timelineRainbowSheen) 13s ease-in-out 0.8s infinite',
                    }}
                  ></div>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[5].r * 4}
                    height={timelineNodeStyles[5].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[5].r * 2}
                      cy={timelineNodeStyles[5].r * 2}
                      r={timelineNodeStyles[5].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 5.6s ease-in-out 1.7s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2014 - 2015
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      Fond.co • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Designed illustrations, marketing assets, and the company website for AnyPerk
                      (now Fond), supporting brand storytelling and product marketing for a
                      fast-growing employee perks platform.
                    </p>
                  </div>
                </div>

                {/* AnyPerk */}
                <div className="group relative flex items-start md:items-center">
                  {/* Mobile Timeline Dot */}
                  <svg
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden"
                    width={timelineNodeStyles[9].r * 4}
                    height={timelineNodeStyles[9].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[9].r * 2}
                      cy={timelineNodeStyles[9].r * 2}
                      r={timelineNodeStyles[9].r}
                      fill="#fffbe6"
                      opacity={0.95}
                      filter="url(#glow)"
                    />
                  </svg>

                  <svg
                    className="absolute left-4 top-6 z-10 hidden flex-shrink-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 md:left-[2.063rem] md:top-1/2 md:block md:-translate-y-1/2"
                    width={timelineNodeStyles[5].r * 4}
                    height={timelineNodeStyles[5].r * 4}
                  >
                    <circle
                      cx={timelineNodeStyles[5].r * 2}
                      cy={timelineNodeStyles[5].r * 2}
                      r={timelineNodeStyles[5].r}
                      fill="#fff"
                      opacity={0.95}
                      filter="url(#glow)"
                      style={{
                        animation: 'timelineDotColorTransition 5.6s ease-in-out 1.7s infinite',
                      }}
                    />
                  </svg>
                  {/* Content Card */}
                  <div className="ml-12 w-full rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:ml-16 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                        Designer
                      </h4>
                      <span className="mt-2 rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark sm:mt-0 md:text-sm">
                        2012 - 2013
                      </span>
                    </div>
                    <h5 className="mb-3 text-base font-medium text-accent-light dark:text-accent-dark md:mb-4 md:text-lg">
                      MakerSquare • San Francisco, CA
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 md:text-base">
                      Led branding and visual design for MakerSquare (now Hack Reactor), including
                      logo design, interior installations, marketing collateral, and a foundational
                      style guide in collaboration with the executive team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 md:mb-16">
          <h3 className="mb-6 text-center font-serif text-2xl font-normal md:mb-8 md:text-3xl">
            Core Skills
          </h3>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/30 bg-white p-4 transition-all duration-300 dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
              <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white md:mb-3 md:text-base">
                Design & UX
              </h4>
              <ul className="space-y-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 md:space-y-2 md:text-sm">
                <li>• End-to-end product design</li>
                <li>• UX/UI design & research</li>
                <li>• Design systems & tokens</li>
                <li>• Figma & prototyping</li>
                <li>• Brand & visual identity</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white p-4 transition-all duration-300 dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
              <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white md:mb-3 md:text-base">
                Frontend Development
              </h4>
              <ul className="space-y-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 md:space-y-2 md:text-sm">
                <li>• React & Next.js</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• Component libraries</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white p-4 transition-all duration-300 dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
              <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white md:mb-3 md:text-base">
                AI & Emerging Tech
              </h4>
              <ul className="space-y-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 md:space-y-2 md:text-sm">
                <li>• AI-integrated workflows</li>
                <li>• Cursor IDE with MCP</li>
                <li>• Rapid prototyping</li>
                <li>• Advanced development tools</li>
                <li>• Emerging tech adoption</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 md:mb-16">
          <h3 className="mb-8 text-center font-serif text-2xl font-normal md:mb-12 md:text-3xl">
            Education
          </h3>

          <div className="mx-auto max-w-6xl">
            {/* Education Cards - Side by Side */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {/* Studio Art and Music */}
              <div className="rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                <span className="mb-2 inline-block rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark md:mb-3 md:text-sm">
                  2005-2006
                </span>
                <h4 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white md:mb-2 md:text-xl">
                  Studio Art, Music
                </h4>
                <h5 className="text-base font-medium text-accent-light dark:text-accent-dark md:text-lg">
                  University of Oklahoma
                </h5>
              </div>

              {/* BFA Drawing and Painting */}
              <div className="rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                <span className="mb-2 inline-block rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark md:mb-3 md:text-sm">
                  Graduated 2010
                </span>
                <h4 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white md:mb-2 md:text-xl">
                  BFA, Drawing and Painting
                </h4>
                <h5 className="text-base font-medium text-accent-light dark:text-accent-dark md:text-lg">
                  University of North Texas
                </h5>
              </div>

              {/* BFA New Media Art */}
              <div className="rounded-xl border border-white/30 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:hover:bg-white/90 md:dark:bg-gray-800/80 md:dark:hover:bg-gray-800/90">
                <span className="mb-2 inline-block rounded-full bg-accent-light/20 px-3 py-1 text-xs font-medium text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark md:mb-3 md:text-sm">
                  Graduated 2010
                </span>
                <h4 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white md:mb-2 md:text-xl">
                  BFA, New Media Art
                </h4>
                <h5 className="text-base font-medium text-accent-light dark:text-accent-dark md:text-lg">
                  University of North Texas
                </h5>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-xl bg-gradient-to-br from-surface-light/5 to-accent-light/5 px-4 py-8 dark:from-surface-dark/5 dark:to-accent-dark/5 md:px-6 md:py-16">
          <div className="mb-8 text-center md:mb-12">
            <h3 className="mb-3 font-serif text-2xl font-normal text-gray-900 dark:text-white md:mb-4 md:text-3xl lg:text-4xl">
              Let's Work Together
            </h3>
            <p className="mx-auto max-w-3xl text-base text-gray-700 dark:text-gray-200 md:text-lg">
              Currently seeking roles where thoughtful design, storytelling, and technology meet.
              I'm passionate about creating elegant, scalable solutions that bridge the gap between
              user needs and business goals.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {/* Email CTA */}
            <div className="rounded-xl border border-white/30 bg-white p-4 text-center shadow-lg dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:dark:bg-gray-800/80">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light/20 dark:bg-accent-dark/20">
                <svg
                  className="h-4 w-4 text-accent-light dark:text-accent-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white md:mb-3 md:text-xl">
                Start a Conversation
              </h4>
              <p className="mb-4 text-xs text-gray-600 dark:text-gray-300 md:mb-6 md:text-sm">
                Ready to discuss your next project or explore collaboration opportunities.
              </p>
              <a
                href="mailto:christinamday@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-light/90 dark:bg-accent-dark dark:text-gray-900 dark:hover:bg-accent-dark/90"
              >
                Get in Touch
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Portfolio CTA */}
            <div className="rounded-xl border border-white/30 bg-white p-4 text-center shadow-lg dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:dark:bg-gray-800/80">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light/20 dark:bg-accent-dark/20">
                <svg
                  className="h-4 w-4 text-accent-light dark:text-accent-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white md:mb-3 md:text-xl">
                Explore My Work
              </h4>
              <p className="mb-4 text-xs text-gray-600 dark:text-gray-300 md:mb-6 md:text-sm">
                See detailed case studies and examples of my design and development process.
              </p>
              <a
                href="https://christinamday.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-light/30 px-6 py-3 text-sm font-semibold text-accent-light transition-all duration-300 hover:bg-accent-light/10 dark:border-accent-dark/30 dark:text-accent-dark dark:hover:bg-accent-dark/10"
              >
                View Portfolio
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Download Resume CTA */}
            <div className="rounded-xl border border-white/30 bg-white p-4 text-center shadow-lg dark:border-gray-600/30 dark:bg-gray-800 md:bg-white/80 md:p-6 md:backdrop-blur-xl md:dark:bg-gray-800/80">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light/20 dark:bg-accent-dark/20">
                <svg
                  className="h-4 w-4 text-accent-light dark:text-accent-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white md:mb-3 md:text-xl">
                Download Resume
              </h4>
              <p className="mb-4 text-xs text-gray-600 dark:text-gray-300 md:mb-6 md:text-sm">
                Get a PDF copy of my complete resume with all experience details.
              </p>
              <a
                href="https://upfetch.me/resume-christina-day.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-light to-accent-light/80 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-accent-light/90 hover:to-accent-light/70 dark:from-accent-dark dark:to-accent-dark/80 dark:text-gray-900 dark:hover:from-accent-dark/90 dark:hover:to-accent-dark/70"
              >
                Download PDF
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

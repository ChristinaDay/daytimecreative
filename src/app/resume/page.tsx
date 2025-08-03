'use client';

import React, { useEffect } from 'react';
import { StarfieldSVG } from '@/components/StarfieldSVG';

// Timeline node animations CSS - mimicking starfield constellation with color cycling
const timelineAnimationsCSS = `
@keyframes timelineNodeTwinkle {
  0% { 
    background-color: rgb(59, 130, 246);
    box-shadow: 0 0 12px 2px rgba(59, 130, 246, 0.08), 0 0 24px 4px rgba(96, 165, 250, 0.04);
    opacity: 0.9;
  }
  58% { 
    background-color: rgb(59, 130, 246);
    box-shadow: 0 0 12px 2px rgba(59, 130, 246, 0.08), 0 0 24px 4px rgba(96, 165, 250, 0.04);
    opacity: 0.9;
  }
  64% { 
    background-color: rgb(147, 51, 234);
    box-shadow: 0 0 12px 2px rgba(147, 51, 234, 0.12), 0 0 24px 4px rgba(168, 85, 247, 0.06);
    opacity: 1;
  }
  65% { 
    background-color: rgb(252, 165, 165);
    box-shadow: 0 0 12px 2px rgba(252, 165, 165, 0.12), 0 0 24px 4px rgba(254, 202, 202, 0.06);
    opacity: 1;
  }
  66% { 
    background-color: rgb(249, 115, 22);
    box-shadow: 0 0 12px 2px rgba(249, 115, 22, 0.12), 0 0 24px 4px rgba(251, 146, 60, 0.06);
    opacity: 1;
  }
  67% { 
    background-color: rgb(234, 179, 8);
    box-shadow: 0 0 12px 2px rgba(234, 179, 8, 0.12), 0 0 24px 4px rgba(250, 204, 21, 0.06);
    opacity: 1;
  }
  68% { 
    background-color: rgb(244, 217, 131);
    box-shadow: 0 0 12px 2px rgba(244, 217, 131, 0.13), 0 0 24px 4px rgba(252, 236, 178, 0.07);
    opacity: 1;
  }
  70% { 
    background-color: rgb(248, 250, 255);
    box-shadow: 0 0 15px 3px rgba(248, 250, 255, 0.25), 0 0 30px 6px rgba(240, 245, 255, 0.15);
    opacity: 1;
  }
  74% { 
    background-color: rgb(240, 245, 255);
    box-shadow: 0 0 18px 4px rgba(240, 245, 255, 0.3), 0 0 36px 8px rgba(230, 240, 255, 0.18);
    opacity: 1;
  }
  78% { 
    background-color: rgb(235, 245, 255);
    box-shadow: 0 0 15px 3px rgba(235, 245, 255, 0.25), 0 0 30px 6px rgba(220, 235, 255, 0.15);
    opacity: 1;
  }
  85% { 
    background-color: rgb(177, 210, 253);
    box-shadow: 0 0 10px 2px rgba(177, 210, 253, 0.14), 0 0 20px 4px rgba(205, 228, 254, 0.07);
    opacity: 0.95;
  }
  88% { 
    background-color: rgb(59, 130, 246);
    box-shadow: 0 0 10px 2px rgba(59, 130, 246, 0.10), 0 0 20px 4px rgba(96, 165, 250, 0.05);
    opacity: 0.95;
  }
  100% { 
    background-color: rgb(59, 130, 246);
    box-shadow: 0 0 12px 2px rgba(59, 130, 246, 0.08), 0 0 24px 4px rgba(96, 165, 250, 0.04);
    opacity: 0.9;
  }
}

@keyframes timelineNodeTwinkleDark {
  0% { 
    background-color: rgb(96, 165, 250);
    box-shadow: 0 0 12px 2px rgba(96, 165, 250, 0.12), 0 0 24px 4px rgba(147, 197, 253, 0.06);
    opacity: 0.85;
  }
  58% { 
    background-color: rgb(96, 165, 250);
    box-shadow: 0 0 12px 2px rgba(96, 165, 250, 0.12), 0 0 24px 4px rgba(147, 197, 253, 0.06);
    opacity: 0.85;
  }
  64% { 
    background-color: rgb(168, 85, 247);
    box-shadow: 0 0 12px 2px rgba(168, 85, 247, 0.18), 0 0 24px 4px rgba(196, 125, 251, 0.08);
    opacity: 1;
  }
  65% { 
    background-color: rgb(252, 165, 165);
    box-shadow: 0 0 12px 2px rgba(252, 165, 165, 0.18), 0 0 24px 4px rgba(254, 202, 202, 0.08);
    opacity: 1;
  }
  66% { 
    background-color: rgb(251, 146, 60);
    box-shadow: 0 0 12px 2px rgba(251, 146, 60, 0.18), 0 0 24px 4px rgba(253, 186, 116, 0.08);
    opacity: 1;
  }
  67% { 
    background-color: rgb(250, 204, 21);
    box-shadow: 0 0 12px 2px rgba(250, 204, 21, 0.18), 0 0 24px 4px rgba(254, 240, 138, 0.08);
    opacity: 1;
  }
  68% { 
    background-color: rgb(252, 229, 138);
    box-shadow: 0 0 12px 2px rgba(252, 229, 138, 0.19), 0 0 24px 4px rgba(254, 243, 199, 0.09);
    opacity: 1;
  }
  70% { 
    background-color: rgb(248, 250, 255);
    box-shadow: 0 0 15px 3px rgba(248, 250, 255, 0.3), 0 0 30px 6px rgba(240, 245, 255, 0.18);
    opacity: 1;
  }
  74% { 
    background-color: rgb(240, 245, 255);
    box-shadow: 0 0 18px 4px rgba(240, 245, 255, 0.35), 0 0 36px 8px rgba(230, 240, 255, 0.22);
    opacity: 1;
  }
  78% { 
    background-color: rgb(235, 245, 255);
    box-shadow: 0 0 15px 3px rgba(235, 245, 255, 0.3), 0 0 30px 6px rgba(220, 235, 255, 0.18);
    opacity: 1;
  }
  85% { 
    background-color: rgb(191, 219, 254);
    box-shadow: 0 0 10px 2px rgba(191, 219, 254, 0.19), 0 0 20px 4px rgba(219, 234, 254, 0.09);
    opacity: 0.95;
  }
  88% { 
    background-color: rgb(96, 165, 250);
    box-shadow: 0 0 10px 2px rgba(96, 165, 250, 0.15), 0 0 20px 4px rgba(147, 197, 253, 0.07);
    opacity: 0.9;
  }
  100% { 
    background-color: rgb(96, 165, 250);
    box-shadow: 0 0 12px 2px rgba(96, 165, 250, 0.12), 0 0 24px 4px rgba(147, 197, 253, 0.06);
    opacity: 0.85;
  }
}

.timeline-node {
  animation: timelineNodeTwinkle 4s ease-in-out infinite;
  filter: blur(0.5px);
}

.dark .timeline-node {
  animation: timelineNodeTwinkleDark 4s ease-in-out infinite;
}

.timeline-node:hover {
  animation-duration: 2s;
  filter: blur(0.3px);
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

  return (
    <>
      {/* Starfield Background - Only in Dark Mode */}
      <div className="absolute z-0 inset-0 pointer-events-none">
          <StarfieldSVG />
      </div>

      <article className="max-w-[100rem] mx-auto pt-12 pb-24 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 dark:text-white leading-tight mb-6">
            Christina Day
          </h1>
          <h2 className="text-xl md:text-2xl font-serif font-normal text-accent-light dark:text-accent-dark mb-8 max-w-4xl mx-auto">
            Senior Product Designer | UX/UI + Branding + Frontend Dev | AI Tools • Systems Design • Web + Mobile • Figma • React
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-200 mb-8">
            <div className="flex items-center gap-2">
              <span>Oakland, California</span>
            </div>
            <a 
              href="mailto:christinamday@gmail.com"
              className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:underline font-medium"
            >
              christinamday@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/christinaday"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:underline font-medium"
            >
              LinkedIn 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://christinamday.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:underline font-medium"
            >
              Portfolio 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif font-normal mb-8 text-center">Summary</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-text-light/90 dark:text-text-dark/90">
            <p>
              I'm a multidisciplinary product designer who thrives at the intersection of UX, brand, and frontend development. 
              With over a decade of experience spanning B2B SaaS, consumer platforms, and immersive installations, I design 
              elegant, scalable solutions grounded in empathy and craft.
            </p>
            <p>
              My work spans early-stage startups to global brands, with specialties in end-to-end product design (UX/UI, 
              interaction, visual systems), frontend development (React, Next.js, Tailwind), branding and storytelling for 
              digital experiences, and AI-integrated workflows and emerging tech.
            </p>
            <p>
              I've helped build everything from internal enterprise platforms to AI-driven health tools, from spatial 
              installations to browser-based IDEs. Whether I'm in Figma or VS Code, I move fluidly from idea to implementation.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif font-normal mb-12 text-center">Experience</h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-light/40 via-accent-light/20 to-transparent dark:from-accent-dark/40 dark:via-accent-dark/20"></div>
              
              <div className="space-y-12">
            {/* Rotary Pictures */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '0.7s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Brand and Product Consultant</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">Nov 2022 - Present</span>
              </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium mb-4">Rotary Pictures • Boston, MA</h5>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Led end-to-end product and brand design for an innovative sound studio reinvigorating film production in Boston. 
                Delivered identity systems, marketing assets, and digital touchpoints to support brand growth and industry partnerships.
              </p>
                  </div>
            </div>

            {/* Local Language */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '2.1s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Fabrication Artist</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">Jul 2024 - Mar 2025</span>
              </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium mb-4">Local Language • Oakland, CA</h5>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Fabricated custom art and architectural elements for luxury hospitality, galleries, and public art clients. 
                Spanned hands-on production, surface prep, component assembly, logistics, and installation coordination—bringing 
                creative vision into physical reality.
              </p>
                  </div>
            </div>

            {/* Betterview */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '4.3s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">UX Designer</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">Feb 2021 - Jul 2021</span>
              </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium mb-4">Betterview • San Francisco, CA</h5>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Collaborated closely with the Director of Design as the sole supporting designer on Betterview's property intelligence platform. 
                Contributed UX and UI design for new features including a modular property detail view, risk overlay maps, and parcel-level 
                visualizations. Developed flexible, component-based systems to support customizable insurer workflows.
              </p>
                  </div>
            </div>

                {/* ZeroCater Product Designer */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '1.2s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Product Designer</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">Jul 2017 - Apr 2018</span>
              </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium mb-4">ZeroCater • San Francisco, CA</h5>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Helped launch new Kitchens & Snacks product. Collaborated with cross-functional teams and engineering to improve 
                client dashboards and internal tools. Built production-ready frontend components and maintained design systems.
              </p>
                  </div>
            </div>

            {/* ZeroCater Designer */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '3.4s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Designer</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">Feb 2016 - Jul 2017</span>
              </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium mb-4">ZeroCater • San Francisco, CA</h5>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Worked with Director of Design to create company style guide, marketing campaign layouts and assets, 
                manage printed materials and vendors, create web and app assets, illustrations for icon systems, and 
                graphic design services for events.
              </p>
                  </div>
            </div>

            {/* AnyPerk */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '0.3s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Designer</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">Aug 2014 - Sep 2015</span>
              </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium mb-4">AnyPerk (Fond) • San Francisco Bay Area</h5>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Provided illustrations and collateral while designing, developing, and maintaining the company's marketing website. 
                Worked on employee perks platform serving companies from 10 to 100,000+ employees.
              </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif font-normal mb-8 text-center">Core Skills</h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-base">Design & UX</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>• End-to-end product design</li>
                <li>• UX/UI design & research</li>
                <li>• Design systems & tokens</li>
                <li>• Figma & prototyping</li>
                <li>• Brand & visual identity</li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-base">Frontend Development</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>• React & Next.js</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• Component libraries</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-base">AI & Emerging Tech</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
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
        <section className="mb-16">
          <h3 className="text-3xl font-serif font-normal mb-12 text-center">Education</h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-light/40 via-accent-light/20 to-transparent dark:from-accent-dark/40 dark:via-accent-dark/20"></div>
              
              <div className="space-y-8">
                {/* BFA New Media Art */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '0.3s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">BFA, New Media Art</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">2007-2010</span>
                    </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium">University of North Texas</h5>
                  </div>
                </div>

                {/* BFA Drawing and Painting */}
                <div className="relative flex items-center group">
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300 z-10" style={{ animationDelay: '2.9s' }}></div>
                  {/* Content Card */}
                  <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">BFA, Drawing and Painting</h4>
                      <span className="text-accent-light dark:text-accent-dark font-medium text-sm bg-accent-light/20 dark:bg-accent-dark/20 px-3 py-1 rounded-full mt-2 sm:mt-0">2007-2010</span>
                    </div>
                    <h5 className="text-lg text-accent-light dark:text-accent-dark font-medium">University of North Texas</h5>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-surface-light/5 to-accent-light/5 dark:from-surface-dark/5 dark:to-accent-dark/5 py-16 px-6 rounded-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-normal text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            Currently seeking roles where thoughtful design, storytelling, and technology meet. 
            I'm passionate about creating elegant, scalable solutions that bridge the gap between user needs and business goals.
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Email CTA */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 text-center border border-white/30 dark:border-gray-600/30 shadow-lg">
              <div className="w-12 h-12 bg-accent-light/20 dark:bg-accent-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-4 h-4 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Start a Conversation
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                Ready to discuss your next project or explore collaboration opportunities.
              </p>
            <a 
              href="mailto:christinamday@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 text-sm"
            >
              Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Portfolio CTA */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 text-center border border-white/30 dark:border-gray-600/30 shadow-lg">
              <div className="w-12 h-12 bg-accent-light/20 dark:bg-accent-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-4 h-4 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Explore My Work
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                See detailed case studies and examples of my design and development process.
              </p>
            <a 
              href="https://christinamday.com"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-light/30 dark:border-accent-dark/30 text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300 text-sm"
            >
              View Portfolio 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            </div>
          </div>
        </section>
    </article>
    </>
  );
}
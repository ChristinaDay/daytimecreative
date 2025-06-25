"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { getImageUrl } from '@/utils/imageUtils';

export default function SnacksAndKitchensPage() {
  return (
    <main className="min-h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="max-w-5xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-text-light dark:text-text-dark leading-tight mb-8">
              ZeroCater Design System
            </h1>
            <div className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80 mb-12 leading-relaxed max-w-4xl">
              Building a comprehensive design system and component library that reduced development time by 60% while maintaining design consistency across the entire platform.
            </div>
            
            {/* Project Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">React Development</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Design Systems</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Component Libraries</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">GitHub Collaboration</span>
            </div>

            <ProjectDetailTags
              role="Product Designer & Front-End Engineer"
              employer="ZeroCater"
              platforms="React, Web, SaaS, GitHub"
              areas="Product Design, Front-End Development, UX Research"
              year="2014-2017"
            />
          </div>
        </motion.section>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img 
                src={getImageUrl("zerocater-ZeroCater_design-system.png")}
                alt="ZeroCater design system showing component library and code implementation" 
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light/20 to-accent-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">60%</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Faster Development</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">50+</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">React Components</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">3 years</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Project Duration</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">Multiple</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Product Teams</div>
            </div>
          </div>
        </motion.section>

        {/* Problem & Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-text-light dark:text-text-dark">The Challenge</h2>
              <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
                ZeroCater was scaling rapidly with multiple product teams building different parts of the platform. We needed a unified design system that would:
              </p>
              <ul className="space-y-4 text-lg text-text-light/80 dark:text-text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  Ensure visual consistency across all products
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  Reduce development time and duplicate code
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  Enable rapid prototyping and iteration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  Scale with the growing engineering team
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-text-light dark:text-text-dark">My Approach</h2>
              <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
                I took a hybrid design-development approach, building the system from both perspectives:
              </p>
              <ul className="space-y-4 text-lg text-text-light/80 dark:text-text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Audited existing UI patterns and created a component inventory
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Built reusable React components with my own GitHub commits
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Created comprehensive documentation and usage guidelines
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Collaborated directly with engineering teams for seamless adoption
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Process Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">Design & Development Process</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={getImageUrl("zerocater_snacks-dashboard3.jpg")}
                  alt="ZeroCater dashboard showing implemented design system components" 
                  className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-light/10 to-accent-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
            </div>
            
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={getImageUrl("zerocater_snacks-user-flows.png")}
                  alt="User flows and component architecture planning" 
                  className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-light/10 to-accent-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">System Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-20 h-20 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">React Components</h3>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                Production-ready React components with props, state management, and comprehensive testing coverage.
              </p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-20 h-20 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Living Documentation</h3>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                Interactive style guide with usage examples, code snippets, and design principles for team adoption.
              </p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-20 h-20 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Developer Tools</h3>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                Build tools, linting rules, and automated workflows that enforce consistency and quality standards.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Results & Impact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-text-light dark:text-text-dark">Results & Impact</h2>
            <p className="text-xl text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto leading-relaxed">
              The design system became the foundation for all ZeroCater products, dramatically improving development efficiency while maintaining design quality and consistency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Development Efficiency</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Reduced development time by 60% through reusable components and eliminated duplicate code across multiple product teams</p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Design Consistency</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Achieved unified visual language across all products with automated quality checks and comprehensive usage guidelines</p>
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
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
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-gray-900 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
} 
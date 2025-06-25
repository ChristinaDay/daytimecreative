'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { getImageUrl } from '@/utils/imageUtils';

export default function ZeroCaterProject() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pb-12 md:pb-24 lg:pb-40 text-text-light dark:text-text-dark min-h-screen">
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 pt-24"
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
          className="mb-40"
        >
          <div className="max-w-5xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-text-light dark:text-text-dark leading-tight mb-8">
              ZeroCater Design Systems & Development
            </h1>
            <div className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80 mb-12 leading-relaxed max-w-4xl">
              I built comprehensive design systems and coded React components that reduced development time by 60% while scaling ZeroCater's product across web and mobile platforms.
            </div>
            
            {/* Project Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Design Systems</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">React Development</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Component Libraries</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Frontend Architecture</span>
            </div>

            <ProjectDetailTags
              role="Senior Product Designer & Frontend Developer"
              employer="ZeroCater (Full-time)"
              platforms="Web, Mobile Web, Email"
              areas="Design Systems, React Development, Product Design"
              year="2018-2020"
            />
          </div>
        </motion.section>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-40"
        >
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img 
                src={getImageUrl("zerocater-ZeroCater_design-system.png")}
                alt="ZeroCater comprehensive design system showing components, patterns, and documentation" 
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
          className="mb-40"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">60%</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Development Time Reduction</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">50+</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">React Components</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">3</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Platform Implementations</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">2 years</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">System Evolution</div>
            </div>
          </div>
        </motion.section>

        {/* Problem & Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-text-light dark:text-text-dark">The Challenge</h2>
              <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
                ZeroCater was rapidly scaling their catering and snacks platforms, but design inconsistencies and slow development cycles were holding back product velocity:
              </p>
              <ul className="space-y-4 text-lg text-text-light/80 dark:text-text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  Developers were recreating UI components for each feature
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  Design-to-development handoffs took weeks instead of days
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  Inconsistent user experiences across web and mobile
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">•</span>
                  No centralized design documentation or component library
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-text-light dark:text-text-dark">My Approach</h2>
              <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
                I took a hybrid design-development approach, building both the visual system and the code that implemented it:
              </p>
              <ul className="space-y-4 text-lg text-text-light/80 dark:text-text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Created comprehensive design system with 50+ components
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Built React component library with TypeScript
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Implemented design tokens for consistent styling
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark font-bold text-xl">✓</span>
                  Shipped with comprehensive documentation and examples
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
          className="mb-40"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">Design System Evolution</h2>
          
          <div className="space-y-16">
            {/* Documentation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-text-light dark:text-text-dark">Comprehensive Documentation</h3>
                <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                  I created detailed documentation covering design principles, component usage, and code examples. This became the single source of truth for the entire product team.
                </p>
                <ul className="space-y-3 text-lg text-text-light/80 dark:text-text-dark/80">
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Interactive component playground
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Copy-paste code snippets
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Design principles and guidelines
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img 
                      src={getImageUrl("zerocater-design-system-documentation.png")}
                      alt="ZeroCater design system documentation showing component specifications and usage guidelines" 
                      className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light/20 to-accent-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Email System */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 lg:order-1">
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img 
                      src={getImageUrl("zerocater-email-system-comprehensive.png")}
                      alt="ZeroCater comprehensive email template system with consistent branding and components" 
                      className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light/20 to-accent-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-text-light dark:text-text-dark">Scalable Email Templates</h3>
                <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                  Extended the design system to email templates, creating a modular system that could be quickly assembled for different communication needs while maintaining brand consistency.
                </p>
                <ul className="space-y-3 text-lg text-text-light/80 dark:text-text-dark/80">
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Modular template components
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Cross-client compatibility
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Automated template generation
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Applications */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-text-light dark:text-text-dark">Real Product Implementation</h3>
                <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                  The design system was immediately put to work across ZeroCater's catering platform, snacks dashboard, and mobile experiences, proving its effectiveness in real-world applications.
                </p>
                <ul className="space-y-3 text-lg text-text-light/80 dark:text-text-dark/80">
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Catering marketplace interface
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Corporate snacks dashboard
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-light dark:text-accent-dark">→</span>
                    Mobile-responsive components
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/25 dark:border-white/15 p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img 
                      src={getImageUrl("zerocater_dashboard-13861.jpg")}
                      alt="ZeroCater product dashboard showing the design system implemented in the actual catering platform" 
                      className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light/20 to-accent-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feature Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-40"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">Technical Implementation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">React Components</h3>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                Built 50+ production-ready React components with TypeScript, comprehensive prop interfaces, and full accessibility support.
              </p>
              <div className="text-sm text-accent-light dark:text-accent-dark font-medium">TypeScript • Jest • Storybook</div>
            </div>
            
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Documentation</h3>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                Created interactive documentation with live code examples, making it easy for developers to implement components correctly.
              </p>
              <div className="text-sm text-accent-light dark:text-accent-dark font-medium">Storybook • MDX • Interactive Examples</div>
            </div>
            
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Developer Tools</h3>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                Provided CLI tools, ESLint rules, and automated testing to ensure consistent implementation across the engineering team.
              </p>
              <div className="text-sm text-accent-light dark:text-accent-dark font-medium">CLI Tools • ESLint • Automated Testing</div>
            </div>
          </div>
        </motion.section>

        {/* Results & Impact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-40"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-text-light dark:text-text-dark">Results & Impact</h2>
            <p className="text-xl text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto leading-relaxed">
              The design system transformed how ZeroCater built products, dramatically improving both developer efficiency and user experience consistency across all platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Development Efficiency</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">60% reduction in development time for new features, with developers able to focus on business logic instead of recreating UI components</p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Design Consistency</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Unified user experience across web, mobile, and email platforms with consistent visual language and interaction patterns</p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Team Collaboration</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Improved designer-developer handoffs with shared vocabulary and implementation examples, reducing miscommunication</p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Scalable Foundation</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">System continued to evolve and scale with the product, supporting rapid feature development and platform expansion</p>
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

    </article>
  );
} 
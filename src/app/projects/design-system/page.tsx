'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';

export default function DesignSystemPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="max-w-4xl">
          <h1 className="text-left text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-6">
            Betterview Design System & Component Library
          </h1>
          <div className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
            Building scalable design infrastructure that reduced development time by 60% and enabled rapid product development across three major platform initiatives.
          </div>
          <ProjectDetailTags
            role="Lead Design Systems Designer"
            employer="Betterview"
            year="2020-2022"
            platforms="React, Figma, Storybook, Design Tokens"
            areas="Design Systems, Component Architecture, Design Tokens, Engineering Collaboration"
          />
        </div>
      </motion.div>

      {/* Executive Summary - TinyCrowbar Style */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">Problem</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Inconsistent UI patterns across products, 3-week development cycles for simple features, and design-engineering handoff friction slowing product velocity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">Solution</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Comprehensive design system with 50+ React components, design tokens, automated workflows, and collaborative documentation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Impact</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                60% faster development, 90% reduction in design inconsistencies, and seamless collaboration between 8 engineers and 3 designers.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hero Visual */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-20"
      >
        <div className="w-full relative aspect-[16/10] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">Design System Overview</h2>
              <p className="text-text-light/70 dark:text-text-dark/70">Comprehensive component library and design tokens</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
          Design system architecture overview showing component relationships and token structure
        </p>
      </motion.section>

      {/* The Challenge */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">The Challenge: Scaling Design at Velocity</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          As Betterview grew from a single product to a comprehensive platform with PartnerHub, Property Intelligence, and Customizable UI initiatives, we faced critical scaling challenges that threatened our product velocity and user experience consistency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-red-50/50 dark:bg-red-900/10 border border-red-200/50 dark:border-red-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-400">Development Bottlenecks</h3>
            <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
              <li>• 3+ week cycles for simple UI features</li>
              <li>• Engineers rebuilding components from scratch</li>
              <li>• 40+ hours per feature for design-to-code translation</li>
              <li>• Inconsistent implementations across teams</li>
            </ul>
          </div>
          <div className="p-6 bg-orange-50/50 dark:bg-orange-900/10 border border-orange-200/50 dark:border-orange-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-orange-700 dark:text-orange-400">Design Consistency Issues</h3>
            <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
              <li>• 12 different button variations across products</li>
              <li>• Inconsistent spacing and typography scales</li>
              <li>• No shared color or sizing standards</li>
              <li>• Design decisions made in isolation</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-200/50 dark:border-blue-800/50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">The Turning Point</h3>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            When our engineering team estimated 6 weeks to implement a "simple" dashboard redesign due to component inconsistencies, leadership recognized we needed systematic change. That's when I was tasked with building Betterview's first comprehensive design system.
          </p>
        </div>
      </motion.section>

      {/* Design-Engineering Collaboration */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Design-Engineering Collaboration Process</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The key to our design system's success was establishing a collaborative workflow that put engineers and designers on equal footing. Rather than traditional "design handoffs," we created a shared language and iterative process.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Weekly Design-Engineering Sync</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark">Component Review</h4>
                  <p className="text-text-light/80 dark:text-text-dark/80">Engineers and designers review proposed components together, discussing implementation feasibility and design intent.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark">Token Validation</h4>
                  <p className="text-text-light/80 dark:text-text-dark/80">Live validation of design tokens in code, ensuring design values translate accurately to implementation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark">Documentation Sprint</h4>
                  <p className="text-text-light/80 dark:text-text-dark/80">Collaborative documentation in Storybook with usage examples, do's/don'ts, and implementation notes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Collaboration Tools & Workflow</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Figma → Code Sync</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">Automated</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Design Token Pipeline</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Style Dictionary</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Component Documentation</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">Storybook</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Version Control</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">Git + NPM</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Tokens Deep Dive */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Design Tokens: The Foundation</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Design tokens became our single source of truth, automatically syncing design decisions to code and ensuring perfect consistency across all touchpoints. This was the technical foundation that made everything else possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">Color System</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>primary-500</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <span>neutral-700</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>success-500</span>
              </div>
            </div>
            <p className="text-xs text-text-light/60 dark:text-text-dark/60 mt-3">
              120+ semantic color tokens with automatic dark mode variants
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">Typography Scale</h3>
            <div className="space-y-2 text-sm">
              <div className="text-2xl font-bold">Heading 1</div>
              <div className="text-lg font-semibold">Heading 2</div>
              <div className="text-base">Body Text</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Caption</div>
            </div>
            <p className="text-xs text-text-light/60 dark:text-text-dark/60 mt-3">
              Modular scale with consistent line heights and spacing
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">Spacing System</h3>
            <div className="space-y-2">
              <div className="h-2 bg-blue-200 rounded w-4"></div>
              <div className="h-2 bg-blue-300 rounded w-8"></div>
              <div className="h-2 bg-blue-400 rounded w-12"></div>
              <div className="h-2 bg-blue-500 rounded w-16"></div>
            </div>
            <p className="text-xs text-text-light/60 dark:text-text-dark/60 mt-3">
              8px base unit with consistent spacing relationships
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Token Implementation Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mb-2">F</div>
              <h4 className="font-semibold text-sm">Figma Design</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">Design tokens defined</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">J</div>
              <h4 className="font-semibold text-sm">JSON Export</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">Automated sync</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">S</div>
              <h4 className="font-semibold text-sm">Style Dictionary</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">Multi-platform build</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">R</div>
              <h4 className="font-semibold text-sm">React/CSS</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">Ready for development</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Component Architecture */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Component Architecture & Engineering Integration</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Our component library wasn't just a collection of UI elements—it was a carefully architected system that enabled engineers to build complex interfaces quickly while maintaining design consistency and accessibility standards.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Component Categories</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-900/10">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400">Foundational (12 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Button, Input, Typography, Icons</p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50/50 dark:bg-green-900/10">
                <h4 className="font-semibold text-green-700 dark:text-green-400">Layout (8 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Grid, Stack, Container, Spacer</p>
              </div>
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-900/10">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400">Data Display (15 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Table, Chart, Card, Badge, Progress</p>
              </div>
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-900/10">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400">Complex (18 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Dashboard, Modal, Navigation, Forms</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Engineering Standards</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">TypeScript First</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Strict typing for all props and variants with comprehensive IntelliSense support</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Accessibility Built-in</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">WCAG 2.1 AA compliance with screen reader support and keyboard navigation</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Performance Optimized</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Tree-shakeable imports, lazy loading, and minimal bundle impact</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Testing Coverage</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">95%+ test coverage with visual regression testing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4 text-white">Component Usage Example</h3>
          <pre className="text-green-400 text-sm">
{`// Design tokens automatically applied
<Button 
  variant="primary" 
  size="large"
  disabled={loading}
  onClick={handleSubmit}
>
  {loading ? <Spinner /> : 'Submit Report'}
</Button>

// Consistent spacing using design tokens
<Stack spacing="md" direction="vertical">
  <PropertyCard data={propertyData} />
  <RiskAssessment score={riskScore} />
</Stack>`}
          </pre>
        </div>
      </motion.section>

      {/* Results & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Results & Business Impact</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          The design system's impact was immediate and measurable, transforming how our team shipped products and enabling the rapid development of PartnerHub, Property Intelligence, and Customizable UI initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">Faster Development</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Feature delivery time reduced from 3 weeks to 1.2 weeks average</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">Consistency Improvement</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Reduction in UI inconsistencies across products</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">React Components</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Production-ready components with full documentation</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">Engineers Onboarded</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Seamless adoption across front-end teams</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-green-50/50 dark:bg-green-900/10 border border-green-200/50 dark:border-green-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Engineering Team Feedback</h3>
            <blockquote className="text-text-light/80 dark:text-text-dark/80 italic mb-4">
              "The design system completely changed how we build features. Instead of spending days on UI implementation, we focus on business logic and user experience."
            </blockquote>
            <cite className="text-sm text-green-600 dark:text-green-400">— Senior Frontend Engineer</cite>
          </div>
          <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/50 dark:border-blue-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Product Team Impact</h3>
            <blockquote className="text-text-light/80 dark:text-text-dark/80 italic mb-4">
              "We shipped PartnerHub 40% faster than originally estimated because the design system eliminated so much implementation overhead."
            </blockquote>
            <cite className="text-sm text-blue-600 dark:text-blue-400">— Product Manager</cite>
          </div>
        </div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Key Learnings & Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">What Worked Well</h3>
              <ul className="space-y-3 text-text-light/80 dark:text-text-dark/80">
                <li>• <strong>Engineer-first approach:</strong> Involving engineers in design system creation from day one</li>
                <li>• <strong>Automated workflows:</strong> Removing manual sync points between design and code</li>
                <li>• <strong>Progressive adoption:</strong> Starting with foundational components and building up</li>
                <li>• <strong>Living documentation:</strong> Storybook as single source of truth for both teams</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Lessons Learned</h3>
              <ul className="space-y-3 text-text-light/80 dark:text-text-dark/80">
                <li>• <strong>Governance is crucial:</strong> Clear processes for component updates and additions</li>
                <li>• <strong>Migration strategy:</strong> Plan for gradual adoption across existing products</li>
                <li>• <strong>Performance monitoring:</strong> Track bundle size impact as system grows</li>
                <li>• <strong>User feedback loops:</strong> Regular check-ins with engineering teams using the system</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </article>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';

export default function DesignSystemPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pt-32 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="max-w-4xl">
          <h1 className="text-left text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-6">
            ZeroCater Design System & Component Library
          </h1>
          <div className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
            Building a comprehensive design system that unified user experience across web and mobile platforms, supporting rapid growth from startup to enterprise-scale food service platform.
          </div>
          <ProjectDetailTags
            role="Lead Product Designer & Front-End Engineer"
            employer="ZeroCater"
            year="2016-2018"
            platforms="React, Sketch, InVision, Sass, GitHub, Style Guide"
            areas="Design Systems, Component Architecture, Front-End Development, Brand Guidelines"
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
              <h3 className="text-lg font-semibold text-rose-400 dark:text-rose-300 mb-3">Problem</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Rapid startup growth created inconsistent user experiences across web, mobile, and admin platforms, with no unified design language or component standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 dark:text-emerald-300 mb-3">Solution</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Built ZeroCater's first comprehensive design system with reusable components, brand guidelines, and cross-platform design standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-400 dark:text-violet-300 mb-3">Impact</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Unified experience across all touchpoints, 50% faster feature development, and scalable design foundation supporting 10x user growth.
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
          <Image
            src="/images/zerocater-ZeroCater_design-system.png"
            alt="ZeroCater Design System Overview"
            fill
            className="object-contain p-8"
            sizes="100vw"
          />
        </div>
        <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
          ZeroCater design system showing component library, style guide, and cross-platform standards
        </p>
      </motion.section>

      {/* The Challenge */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">The Challenge: Startup Growth Without Design Chaos</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          As ZeroCater rapidly expanded from a simple catering service to a comprehensive workplace food platform with mobile apps, web dashboards, and admin tools, we faced the classic startup challenge: maintaining design quality while moving fast and scaling quickly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-text-light/80 dark:text-text-dark/80">Cross-Platform Inconsistency</h3>
            <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
              <li>• Web app looked completely different from mobile</li>
              <li>• Admin tools had their own visual language</li>
              <li>• Customer-facing vs internal tools felt like different brands</li>
              <li>• No shared component patterns between platforms</li>
            </ul>
          </div>
          <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-text-light/80 dark:text-text-dark/80">Rapid Growth Pain Points</h3>
            <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
              <li>• New features launched with inconsistent styling</li>
              <li>• No documentation for design decisions</li>
              <li>• Engineers guessing at spacing and colors</li>
              <li>• Brand identity diluted across touchpoints</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-light/10 to-accent-light/5 dark:from-accent-dark/10 dark:to-accent-dark/5 border border-accent-light/20 dark:border-accent-dark/20 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-accent-light dark:text-accent-dark">The Turning Point</h3>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            When a customer complained that our mobile app and website "felt like completely different companies," and our team struggled to maintain brand consistency while shipping features weekly, I proposed building ZeroCater's first comprehensive design system to scale our design quality with our growth.
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
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Building a Startup Design Culture</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          In a fast-moving startup environment, the design system needed to be practical and adoptable. I focused on creating tools and processes that would actually be used by our small but growing team, emphasizing documentation and clear guidelines over complex tooling.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Practical Design System Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-400 dark:bg-rose-300 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark">Component Library</h4>
                  <p className="text-text-light/80 dark:text-text-dark/80">Built reusable React components with clear documentation, focusing on the most commonly used UI patterns across our platforms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-400 dark:bg-emerald-300 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark">Style Guide</h4>
                  <p className="text-text-light/80 dark:text-text-dark/80">Comprehensive visual guidelines covering typography, colors, spacing, and brand elements with clear usage examples.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-violet-400 dark:bg-violet-300 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark">Cross-Platform Standards</h4>
                  <p className="text-text-light/80 dark:text-text-dark/80">Established design patterns that worked across web, mobile, and admin interfaces while respecting platform conventions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design System Tools & Assets</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Design Tool</span>
                <span className="bg-rose-400/10 dark:bg-rose-300/10 text-rose-500 dark:text-rose-400 px-2 py-1 rounded text-sm">Sketch + InVision</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Component Library</span>
                <span className="bg-emerald-400/10 dark:bg-emerald-300/10 text-emerald-500 dark:text-emerald-400 px-2 py-1 rounded text-sm">React + Sass</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Style Guide</span>
                <span className="bg-violet-400/10 dark:bg-violet-300/10 text-violet-500 dark:text-violet-400 px-2 py-1 rounded text-sm">Living Document</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-light/80 dark:text-text-dark/80">Brand Guidelines</span>
                <span className="bg-amber-400/10 dark:bg-amber-300/10 text-amber-500 dark:text-amber-400 px-2 py-1 rounded text-sm">PDF + Web</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Website Evolution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Design Evolution: Consistency Across Time</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          The design system enabled ZeroCater to maintain brand consistency while evolving the product experience. Here's how our website evolved from 2014 to 2020, showing the power of systematic design thinking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zc_website2014.gif"
                alt="ZeroCater Website 2014"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">2014: Foundation</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Simple, clean design establishing core brand elements.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zerocater_site-2.jpg"
                alt="ZeroCater Website Design System Implementation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">2016: System Implementation</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Design system components applied across marketing and product pages.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zc_website_2017.gif"
                alt="ZeroCater Website 2017"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">2017: Systematic Growth</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Consistent typography, spacing, and component usage.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zc_website-hero_2020.gif"
                alt="ZeroCater Website 2020"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">2020: Mature System</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Refined design language with sophisticated animations.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Tokens Deep Dive */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Comprehensive Documentation: The Foundation</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          Before design tokens were widely adopted, we created extensive documentation that served as our single source of truth. This comprehensive system included detailed style guides, component specifications, and implementation guidelines that ensured consistency across web, mobile, and admin interfaces while enabling rapid development.
        </p>

        {/* Documentation Overview */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[3/2] relative bg-white">
              <Image
                src="/images/zerocater-design-system-documentation.png"
                alt="ZeroCater Design System Comprehensive Documentation"
                fill
                className="object-contain p-6"
                sizes="100vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">Living Style Guide & Component Library</h3>
              <p className="text-base text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                Our comprehensive documentation system included detailed specifications for every component, interaction state, and design pattern. This wasn't just a static style guide—it was a living document that evolved with our product, ensuring every team member had access to the latest design standards and implementation guidelines.
              </p>
            </div>
          </div>
        </div>

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

        {/* Icon System Evolution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zc_website-icons_2017.png"
                alt="ZeroCater Icon System 2017"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Icon System 2017</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Cohesive icon library with consistent stroke weights, corner radius, and visual style across all platforms.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zc_website-icons2020.png"
                alt="ZeroCater Icon System 2020"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Icon Evolution 2020</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Refined icon system with improved accessibility, scalability, and expanded library for enterprise features.</p>
            </div>
          </div>
        </div>

        {/* Visual Content Standards */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-text-light dark:text-text-dark">Visual Content Standards & Photography</h3>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-8">
            A comprehensive design system extends beyond UI components to include visual content standards. I worked on-site with professional food photographers to build a custom photography library that became essential to our brand identity and user experience across all platforms.
          </p>

          {/* Studio Process - Two smaller cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/zerocater-studio-1.jpg"
                  alt="ZeroCater Studio Photography Session 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Professional Food Photography</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Working with professional photographers to establish consistent lighting, styling, and composition standards for all food imagery.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/zerocater-studio-2.jpg"
                  alt="ZeroCater Studio Photography Session 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Brand-Consistent Imagery</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Building a comprehensive visual library with consistent styling that reinforced brand identity across web, mobile, and marketing materials.</p>
              </div>
            </div>
          </div>

          {/* Results - Full width featured card */}
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden mb-8">
            <div className="aspect-[3/1] relative bg-gradient-to-br from-white/95 via-gray-50/30 to-white/95 dark:from-gray-900/95 dark:via-gray-800/30 dark:to-gray-900/95">
              <Image
                src="/images/zerocater-Screen Shot 2020-06-15 at 7.36.53 PM.png"
                alt="ZeroCater Professional Food Photography Results"
                fill
                className="object-contain p-8"
                sizes="100vw"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">Photography Standards in Production</h4>
              <p className="text-base text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                The results of our professional food photography sessions integrated into the actual product experience. This shows how consistent, high-quality imagery became a core part of ZeroCater's design system, enhancing the user experience with appetizing, brand-consistent visuals that reinforced our commitment to quality food service.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">Photography Standards & Guidelines</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h5 className="font-semibold text-accent-light dark:text-accent-dark mb-2">Lighting & Composition</h5>
                <ul className="text-text-light/70 dark:text-text-dark/70 space-y-1">
                  <li>• Natural lighting standards</li>
                  <li>• Consistent angles and framing</li>
                  <li>• Color temperature guidelines</li>
                  <li>• Background and prop standards</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-text-light/80 dark:text-text-dark/80 mb-2">Brand Integration</h5>
                <ul className="text-text-light/70 dark:text-text-dark/70 space-y-1">
                  <li>• Color palette consistency</li>
                  <li>• Typography integration</li>
                  <li>• Logo placement guidelines</li>
                  <li>• Cross-platform optimization</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">Content Library</h5>
                <ul className="text-text-light/70 dark:text-text-dark/70 space-y-1">
                  <li>• 200+ high-quality food images</li>
                  <li>• Multiple format variations</li>
                  <li>• Seasonal content updates</li>
                  <li>• Usage rights documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design-to-Development Workflow</h3>
          <div className="mb-6 p-4 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/50 dark:border-blue-800/50 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Designer-Developer Hybrid Role</h4>
            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
              When our team lost its dedicated front-end developer, I transitioned from pure design to also taking on front-end engineering responsibilities. Working alongside our Director of Design (who also coded), I contributed directly to the codebase with my own GitHub account, individual pull requests, and full participation in engineering best practices and release cycles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-rose-400 dark:bg-rose-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold mb-2">S</div>
              <h4 className="font-semibold text-sm">Sketch Design</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">Style guide defined</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-400 dark:bg-emerald-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold mb-2">D</div>
              <h4 className="font-semibold text-sm">Documentation</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">Living style guide</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-violet-400 dark:bg-violet-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold mb-2">S</div>
              <h4 className="font-semibold text-sm">Sass Variables</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">CSS preprocessing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-400 dark:bg-amber-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold mb-2">R</div>
              <h4 className="font-semibold text-sm">React Components</h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">Production ready</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Dashboard Examples */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Components in Action: Dashboard Designs</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          The design system enabled consistent dashboard experiences across customer-facing apps, admin tools, and mobile interfaces. Here's how our components scaled across different use cases.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zerocater_snacks-dashboard3.jpg"
                alt="ZeroCater Snacks Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Customer Dashboard</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Clean, data-focused interface using consistent card components, typography, and color system for snacks management.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zerocater-catering-snacks-customer-dashboards.jpg"
                alt="ZeroCater Catering Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Admin Interface</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Complex data visualization using the same design patterns, showing how components scale from simple to sophisticated interfaces.</p>
            </div>
          </div>
        </div>

        {/* Cross-Platform Consistency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zerocater_dashboard-iphone.png"
                alt="ZeroCater Mobile Dashboard"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Mobile Dashboard</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Responsive design system ensuring consistent experience across devices, with mobile-optimized component variations.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater-email-system-comprehensive.png"
                alt="ZeroCater Comprehensive Email Design System"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Comprehensive Email Design System</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Complete email template library with consistent branding, typography, and component usage across transactional, marketing, and notification emails—ensuring cohesive user experience across all digital touchpoints.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Process & User Flows */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Design Process: From Research to Implementation</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          Building a design system required understanding user journeys, testing multiple design approaches, and iterating based on real usage data. Our process emphasized documentation and validation at every step.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater_snacks-user-flows.png"
                alt="ZeroCater User Flow Documentation"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">User Flow Documentation</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Comprehensive user journey mapping and flow documentation to ensure consistent experiences across all touchpoints and platforms.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater-zdrocater_marketplace-iterations.png"
                alt="ZeroCater Marketplace Design Iterations"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Design Iterations & A/B Testing</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Multiple design explorations and systematic A/B testing variations to optimize user engagement and conversion rates.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Physical Branding & Real-World Applications */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.88 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Beyond Digital: Physical Brand Applications</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          A comprehensive design system extends beyond screens to physical touchpoints. Our design standards guided everything from office signage to delivery packaging, ensuring consistent brand experience across all customer interactions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zerocater-homepage-design-system.jpg"
                alt="ZeroCater Homepage Design System Implementation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Digital Brand Consistency</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Homepage design showcasing consistent application of typography, color palette, spacing, and component patterns established in our design system.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/zerocater-physical-branding.jpg"
                alt="ZeroCater Physical Branding Applications"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">Physical Brand Extensions</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Design system principles applied to physical materials including signage, packaging, and promotional materials—ensuring brand consistency across all customer touchpoints.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Holistic Brand Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3">Digital Applications</h4>
              <ul className="text-text-light/70 dark:text-text-dark/70 space-y-2 text-sm">
                <li>• Website and mobile app interfaces</li>
                <li>• Email templates and notifications</li>
                <li>• Admin dashboards and reporting tools</li>
                <li>• Social media templates and assets</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3">Physical Applications</h4>
              <ul className="text-text-light/70 dark:text-text-dark/70 space-y-2 text-sm">
                <li>• Office signage and environmental graphics</li>
                <li>• Delivery packaging and branded materials</li>
                <li>• Marketing collateral and sales materials</li>
                <li>• Event displays and promotional items</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Component Architecture */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Component Library & Cross-Platform Standards</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Our component library focused on practical, reusable patterns that worked across web, mobile, and admin interfaces. By establishing clear standards and documentation, we enabled our small but growing team to ship consistent experiences quickly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Component Categories</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-900/10">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400">Core UI (8 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Buttons, Forms, Typography, Icons, Cards</p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50/50 dark:bg-green-900/10">
                <h4 className="font-semibold text-green-700 dark:text-green-400">Navigation (6 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Header, Footer, Sidebar, Breadcrumbs, Tabs</p>
              </div>
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-900/10">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400">Food Service (10 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Menu Items, Order Cards, Calendar, Reviews, Ratings</p>
              </div>
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-900/10">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400">Dashboard (12 components)</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Charts, Data Tables, Metrics, Filters, Reports</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Development Standards & Implementation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">React Components</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Modular, reusable components with clear prop interfaces and consistent naming conventions - implemented directly by me as front-end engineer</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Sass Architecture</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Organized stylesheets with variables, mixins, and BEM methodology for maintainable CSS, building on my experience coding email templates</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Engineering Integration</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Full participation in engineering workflows: GitHub pull requests, code reviews, and release cycles alongside backend engineers</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Cross-Platform Consistency</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Shared design patterns that adapt gracefully across web, mobile, and admin interfaces</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Documentation</h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Living style guide with usage examples, do's and don'ts, and implementation guidelines</p>
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

      {/* Component Testing & Validation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Component Testing & Validation</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          A key part of our design system process was systematic A/B testing of component variations. Here's how we tested different approaches to feedback collection, using data to inform our final component designs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater-Feedback form A - Multiple choice.png"
                alt="Feedback Form Variation A - Multiple Choice"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-1 text-text-light dark:text-text-dark">Variation A: Multiple Choice</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Traditional radio button approach with clear categorical options</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater-Feedback form B - Icons.png"
                alt="Feedback Form Variation B - Icons"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-1 text-text-light dark:text-text-dark">Variation B: Icon-Based</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Visual feedback using emoji/icon system for quick emotional response</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater-Feedback form C - Cards.png"
                alt="Feedback Form Variation C - Cards"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-1 text-text-light dark:text-text-dark">Variation C: Card Layout</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Card-based selection with more visual hierarchy and space</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater-Feedback form D - Cards 2.png"
                alt="Feedback Form Variation D - Alternative Cards"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-1 text-text-light dark:text-text-dark">Variation D: Enhanced Cards</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Refined card approach with improved typography and spacing</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] relative bg-white">
              <Image
                src="/images/zerocater-Feedback form E - Simple.png"
                alt="Feedback Form Variation E - Simple"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-1 text-text-light dark:text-text-dark">Variation E: Minimal</h3>
              <p className="text-xs text-text-light/70 dark:text-text-dark/70">Simplified approach focusing on core feedback collection</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">Testing Results & Component Decision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-accent-light dark:text-accent-dark mb-2">Winner: Icon-Based (Variation B)</h4>
              <ul className="text-text-light/70 dark:text-text-dark/70 space-y-1">
                <li>• 34% higher completion rate</li>
                <li>• 2.3x faster user interaction</li>
                <li>• Universal visual language</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-light/80 dark:text-text-dark/80 mb-2">Key Insights</h4>
              <ul className="text-text-light/70 dark:text-text-dark/70 space-y-1">
                <li>• Visual feedback reduces cognitive load</li>
                <li>• Emoji transcends language barriers</li>
                <li>• Mobile-first approach wins</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Design System Impact</h4>
              <ul className="text-text-light/70 dark:text-text-dark/70 space-y-1">
                <li>• Icon-based feedback became standard</li>
                <li>• Influenced rating components</li>
                <li>• Adopted across all products</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Results & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Transformative Business Impact</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
          The design system became the foundation that enabled ZeroCater to scale from a scrappy startup to a comprehensive enterprise platform. It transformed how our team shipped products, maintained quality at scale, and established the systematic approach that influenced the entire organization's design culture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">50%</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">Faster Development</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Reduced design-to-deployment time with reusable components</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">10x</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">User Growth</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Scalable foundation supported massive expansion</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-text-light/80 dark:text-text-dark/80 mb-2">100%</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">Brand Consistency</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Unified experience across all touchpoints</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-text-light/70 dark:text-text-dark/70 mb-2">3</div>
            <div className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">Years of Evolution</div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">Continuous refinement and growth</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-accent-light dark:text-accent-dark">Engineering Team Impact</h3>
            <blockquote className="text-text-light/80 dark:text-text-dark/80 italic mb-4">
              "The design system completely transformed our development process. We went from reinventing UI patterns for every feature to having a reliable foundation that let us focus on solving food service challenges."
            </blockquote>
            <cite className="text-sm text-text-light/70 dark:text-text-dark/70">— Frontend Engineering Team</cite>
          </div>
          <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Business Growth Enabler</h3>
            <blockquote className="text-text-light/80 dark:text-text-dark/80 italic mb-4">
              "The design system was crucial to our ability to scale. As we grew from serving hundreds to thousands of companies, the consistent experience became our competitive advantage."
            </blockquote>
            <cite className="text-sm text-text-light/70 dark:text-text-dark/70">— ZeroCater Leadership Team</cite>
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
          <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Key Learnings & Design System Legacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent-light dark:text-accent-dark">What Made It Successful</h3>
              <ul className="space-y-3 text-text-light/80 dark:text-text-dark/80">
                <li>• <strong>Designer-developer hybrid:</strong> Direct implementation eliminated hand-off friction</li>
                <li>• <strong>Startup-appropriate scope:</strong> Focused on essential patterns rather than comprehensive coverage</li>
                <li>• <strong>Progressive enhancement:</strong> Started with foundational elements and grew organically</li>
                <li>• <strong>Cross-platform thinking:</strong> Designed patterns that worked across web, mobile, and email</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light/80 dark:text-text-dark/80">Long-term Impact</h3>
              <ul className="space-y-3 text-text-light/80 dark:text-text-dark/80">
                <li>• <strong>Cultural foundation:</strong> Established systematic design thinking across the organization</li>
                <li>• <strong>Scalability enabler:</strong> Made rapid growth possible without sacrificing quality</li>
                <li>• <strong>Industry influence:</strong> Early example of startup-scale design system implementation</li>
                <li>• <strong>Career evolution:</strong> Demonstrated the value of design-development hybrid roles</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </article>
  );
} 
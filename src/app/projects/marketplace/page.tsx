'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { getImageUrl } from '@/utils/imageUtils';

export default function MarketplacePage() {
  return (
    <article className="mx-auto max-w-[100rem] px-4 pb-96 text-[#0f172a] dark:text-white md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 pt-24"
      >
        <h1 className="mb-8 text-left font-serif text-5xl font-normal leading-hero text-text-light dark:text-text-dark md:text-5xl lg:text-6xl">
          ZeroCater Marketplace
        </h1>
        <ProjectSubtitle>
          Designing a comprehensive vendor marketplace connecting restaurants, caterers, and office
          food programs with seamless ordering and management tools.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Product Designer & Front-End Engineer"
          employer="ZeroCater"
          platforms="React, Web, Mobile, API Integration"
          areas="Marketplace Design, Vendor Onboarding, Order Management, UX Research"
          year="2016-2018"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark"
        >
          <Image
            src="/images/zerocater_marketplace-12175.jpg"
            alt="ZeroCater Marketplace platform interface"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <p className="mb-12 text-center text-sm text-text-light/60 dark:text-text-dark/60">
          The marketplace platform that opened ZeroCater's curated network to hundreds of new
          restaurant partners.
        </p>
      </div>

      {/* Overview Section */}
      <div className="py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="mb-8 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-accent-light dark:text-accent-dark">
                The Challenge
              </h3>
              <p className="mb-4 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                ZeroCater needed to scale beyond curated catering partnerships to create a
                comprehensive marketplace where any restaurant or caterer could join the platform.
                The challenge was designing a dual-sided marketplace that served both vendors
                seeking new customers and offices needing reliable food service options.
              </p>
              <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                As the lead designer and front-end engineer, I needed to create intuitive
                experiences for vendor onboarding, menu management, order processing, and customer
                discovery while maintaining ZeroCater's quality standards.
              </p>
            </div>
            <div>
              <Image
                src="/images/zerocater_dashboard-13861.jpg"
                alt="ZeroCater marketplace dashboard interface"
                width={500}
                height={400}
                className="w-full rounded-lg object-contain"
                style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
              />
              <p className="mt-2 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                Comprehensive dashboard for managing marketplace orders, vendors, and customer
                relationships.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Design Process Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-text-light dark:text-text-dark">
            Design Process & Iterations
          </h3>
          <p className="mb-8 max-w-3xl text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            The marketplace required extensive iteration and testing to balance the needs of
            restaurants, caterers, and office customers. Through user research, competitive
            analysis, and rapid prototyping, we developed a platform that simplified complex
            marketplace dynamics.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark"
          >
            <Image
              src="/images/zdrocater_marketplace-iterations-11579.png"
              alt="ZeroCater marketplace design iterations and wireframes"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="mb-12 text-center text-sm text-text-light/60 dark:text-text-dark/60">
            Iterative design process showing evolution from initial wireframes to final marketplace
            interface, exploring different approaches to restaurant discovery and ordering flows.
          </p>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                Research & Discovery
              </h4>
              <ul className="mb-8 space-y-3 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>
                  • Interviewed 25+ restaurant owners about their catering pain points and digital
                  ordering needs
                </li>
                <li>
                  • Analyzed competitor platforms (Grubhub, Seamless, Eat24) to identify marketplace
                  best practices
                </li>
                <li>
                  • Conducted user testing with office managers to understand discovery and ordering
                  preferences
                </li>
                <li>
                  • Mapped vendor onboarding journeys to identify friction points and optimization
                  opportunities
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                Key Design Decisions
              </h4>
              <ul className="mb-8 space-y-3 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>
                  • Simplified vendor onboarding with progressive disclosure and smart defaults
                </li>
                <li>
                  • Created unified menu management system supporting different restaurant formats
                </li>
                <li>
                  • Designed discovery algorithms balancing quality, availability, and customer
                  preferences
                </li>
                <li>
                  • Built order management dashboard streamlining communication between all parties
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Platform Implementation Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-text-light dark:text-text-dark">
            Cross-Platform Implementation
          </h3>
          <p className="mb-8 max-w-3xl text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            The marketplace needed to work seamlessly across all devices and contexts. Restaurant
            partners needed mobile-friendly interfaces for on-the-go order management, while office
            administrators required comprehensive desktop dashboards for planning and oversight.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/zerocater_marketplace-12175.jpg"
                  alt="ZeroCater marketplace desktop interface showing restaurant listings and ordering options"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-lg font-semibold text-text-light dark:text-text-dark">
                  Desktop Platform
                </h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                  Comprehensive marketplace interface optimized for office administrators managing
                  large-scale catering orders and vendor relationships.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
              <div className="relative aspect-[4/3] bg-white p-6">
                <Image
                  src="/images/zerocater_dashboard-iphone-13847.png"
                  alt="ZeroCater marketplace mobile interface"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-lg font-semibold text-text-light dark:text-text-dark">
                  Mobile Experience
                </h4>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                  Restaurant-focused mobile interface enabling vendors to manage menus, track
                  orders, and communicate with customers from anywhere.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 p-6 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
            <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
              Technical Architecture & Engineering Collaboration
            </h4>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h5 className="mb-3 font-semibold text-text-light dark:text-text-dark">
                  Frontend Implementation
                </h5>
                <ul className="space-y-2 text-sm text-text-light/80 dark:text-text-dark/80">
                  <li>• React-based responsive components with shared design system</li>
                  <li>• Real-time order updates using WebSocket connections</li>
                  <li>• Progressive Web App features for mobile restaurant partners</li>
                  <li>• Optimistic UI updates for improved perceived performance</li>
                </ul>
              </div>
              <div>
                <h5 className="mb-3 font-semibold text-text-light dark:text-text-dark">
                  Design-Engineering Process
                </h5>
                <ul className="space-y-2 text-sm text-text-light/80 dark:text-text-dark/80">
                  <li>• Direct implementation of designs in React codebase</li>
                  <li>• Collaborative API design with backend engineering team</li>
                  <li>• Component-driven development with Storybook documentation</li>
                  <li>• A/B testing framework for marketplace optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-accent-light dark:text-accent-dark">
            Results & Business Impact
          </h3>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 p-6 text-center backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
              <div className="mb-2 text-3xl font-bold text-accent-light dark:text-accent-dark">
                300+
              </div>
              <div className="mb-1 text-sm font-semibold text-text-light dark:text-text-dark">
                Vendors Onboarded
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60">
                First 6 months post-launch
              </div>
            </div>
            <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 p-6 text-center backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
              <div className="mb-2 text-3xl font-bold text-text-light dark:text-text-dark">40%</div>
              <div className="mb-1 text-sm font-semibold text-text-light dark:text-text-dark">
                Order Volume Increase
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60">
                Compared to curated-only model
              </div>
            </div>
            <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 p-6 text-center backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
              <div className="mb-2 text-3xl font-bold text-text-light/80 dark:text-text-dark/80">
                85%
              </div>
              <div className="mb-1 text-sm font-semibold text-text-light dark:text-text-dark">
                Vendor Satisfaction
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60">
                Post-onboarding survey results
              </div>
            </div>
            <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 p-6 text-center backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
              <div className="mb-2 text-3xl font-bold text-text-light/70 dark:text-text-dark/70">
                60%
              </div>
              <div className="mb-1 text-sm font-semibold text-text-light dark:text-text-dark">
                Faster Onboarding
              </div>
              <div className="text-xs text-text-light/60 dark:text-text-dark/60">
                Reduced from 2 weeks to 3 days
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-surface-light/50 bg-surface-light/30 p-6 dark:border-surface-dark/50 dark:bg-surface-dark/30">
              <h4 className="mb-4 text-xl font-semibold text-accent-light dark:text-accent-dark">
                Vendor Feedback
              </h4>
              <blockquote className="mb-4 italic text-text-light/80 dark:text-text-dark/80">
                "The marketplace onboarding was incredibly smooth. We went from signing up to
                receiving our first orders in just two days. The interface makes it easy to manage
                our menu and track orders."
              </blockquote>
              <cite className="text-sm text-text-light/70 dark:text-text-dark/70">
                Local Restaurant Partner
              </cite>
            </div>
            <div className="rounded-xl border border-surface-light/50 bg-surface-light/30 p-6 dark:border-surface-dark/50 dark:bg-surface-dark/30">
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                Customer Impact
              </h4>
              <blockquote className="mb-4 italic text-text-light/80 dark:text-text-dark/80">
                "Having access to so many more restaurant options transformed our office lunch
                program. The variety keeps everyone happy, and the ordering process is seamless."
              </blockquote>
              <cite className="text-sm text-text-light/70 dark:text-text-dark/70">
                Office Manager, Tech Company
              </cite>
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  );
}

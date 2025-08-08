"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { getImageUrl } from '@/utils/imageUtils';

export default function SnacksAndKitchensPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pt-32 pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          ZeroCater – Snacks & Kitchens
        </h1>
        <ProjectSubtitle>
          Designing a subscription-based office snack and kitchen service for modern workplaces.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Product Designer & Front-End Engineer"
          employer="ZeroCater"
          platforms="React, Web, SaaS, GitHub"
          areas="Product Design, Front-End Development, UX Research"
          year="2014-2017"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="py-16">
        {/* Video Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="w-full relative aspect-[16/9]">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                muted
                autoPlay
                loop
                poster="/images/zerocater_snacks-dashboard3.jpg"
              >
                <source src="/images/zerocater-dashboard.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
        <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
          Live product demo of the Snacks & Kitchens dashboard in action.
        </p>

        {/* Main Image (Hero) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="w-full relative aspect-[16/9]">
              <Image
                src={getImageUrl("zerocater_snacks.jpg")}
                alt="Curated snack selections for every office."
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
        <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-12">
          Curated snack selections for every office.
        </p>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h3>
              <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-4">
                As Product Designer and Front-End Engineer, I led the creation of ZeroCater's Snacks & Kitchens dashboard—a subscription-based platform that redefined office catering. Through user research, market analysis, and hands-on development work, I delivered a seamless experience for office managers to manage snack and kitchen supplies, track usage, and optimize workplace satisfaction.
              </p>
              <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                The dashboard's intuitive design and data-driven insights empowered clients to make informed decisions, setting a new standard for workplace food services and driving ZeroCater's market expansion.
              </p>
            </div>
            <div>
              <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/zerocater-catering-snacks-customer-dashboards.jpg"
                    alt="Customer dashboard for managing snack and kitchen subscriptions."
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-2">
                Customer dashboard for managing snack and kitchen subscriptions.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Process</h3>
              <ul className="space-y-4 text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
                <li>• Conducted stakeholder interviews, market analysis, and user behavior studies to inform design.</li>
                <li>• Synthesized complex information into user-friendly dashboard designs through iterative feedback.</li>
                <li>• Implemented front-end code directly, participating in engineering workflows with GitHub pull requests and code reviews.</li>
                <li>• Developed a design system and dashboard model for future product development at ZeroCater.</li>
              </ul>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full"
              >
                <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/zc_snacks_data-driven.jpg"
                      alt="Data-driven insights for optimizing office snack programs."
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-2">
                Data-driven insights for optimizing office snack programs.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 mb-8 w-full"
          >
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/zerocater_snacks-dashboard3.jpg"
                  alt="Snacks & Kitchens dashboard for office managers."
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Snacks & Kitchens dashboard for office managers.
          </p>

          
        </motion.section>
      </div>

      {/* My Contributions */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">My Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Led product design for Snacks & Kitchens from research to delivery</li>
                <li>• Built production UI as a designer-developer with individual PRs</li>
                <li>• Established dashboard component patterns and design tokens</li>
                <li>• Created user flows, prototypes, and ran feedback sessions</li>
                <li>• Collaborated with engineering on code reviews and releases</li>
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-text-light dark:text-text-dark mb-1">Role</div>
                    <div className="text-text-light/70 dark:text-text-dark/70">Product Designer & Front-End Engineer</div>
                  </div>
                  <div>
                    <div className="font-semibold text-text-light dark:text-text-dark mb-1">Focus</div>
                    <div className="text-text-light/70 dark:text-text-dark/70">Dashboard UX, Components, Tokens</div>
                  </div>
                  <div>
                    <div className="font-semibold text-text-light dark:text-text-dark mb-1">Collaboration</div>
                    <div className="text-text-light/70 dark:text-text-dark/70">Cross-functional with Eng & Ops</div>
                  </div>
                  <div>
                    <div className="font-semibold text-text-light dark:text-text-dark mb-1">Outcomes</div>
                    <div className="text-text-light/70 dark:text-text-dark/70">Faster shipping, higher adoption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* User Flows Section */}
      <div className="py-16">
        <section>
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">User Flows & Research</h3>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-8 max-w-2xl">
            Understanding user journeys was central to the design process. We mapped out comprehensive user flows to ensure the snacks and kitchen management experience was intuitive and efficient for office managers.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 w-full"
          >
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/zerocater_snacks-user-flows.png"
                  alt="User flows for the Snacks & Kitchens platform."
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            User flows for the Snacks & Kitchens platform.
          </p>
        </section>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div>
              <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
                The Snacks & Kitchens product launch expanded ZeroCater's market reach, improved customer satisfaction, and became a benchmark for future product development. The dashboard design enhanced user engagement and streamlined subscription management for clients.
              </p>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
                <li>• Successful launch and market expansion</li>
                <li>• Enhanced customer satisfaction and engagement</li>
                <li>• Model for future product development at ZeroCater</li>
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-[7/5]">
                  <Image
                    src="/images/zerocater-onsite-staff-powered-by-technology.jpg"
                    alt="Onsite staff powered by technology for seamless service."
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-2">
                Onsite staff powered by technology for seamless service.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  );
} 
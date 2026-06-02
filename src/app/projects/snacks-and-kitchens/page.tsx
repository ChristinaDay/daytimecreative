'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { getImageUrl } from '@/utils/imageUtils';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function SnacksAndKitchensPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Ignore autoplay block errors; user interaction will start playback
        });
      }
    } catch (_) {
      // no-op
    }
  }, []);
  return (
    <article className="mx-auto max-w-[100rem] px-4 pb-40 pt-32 text-[#0f172a] dark:text-white md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="mb-8 text-left font-serif text-5xl font-normal leading-hero text-text-light dark:text-text-dark md:text-5xl lg:text-6xl">
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
          year="2016-2018"
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
          <div className="clip-fix overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
            <div className="relative aspect-[16/9] w-full">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                playsInline
                muted
                autoPlay
                loop
                preload="auto"
                poster="/images/zerocater_snacks-dashboard3.jpg"
              >
                <source src="/images/zerocater-dashboard-compressed.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
        <p className="mb-8 text-center text-sm text-text-light/60 dark:text-text-dark/60">
          Live product demo of the Snacks & Kitchens dashboard in action.
        </p>

        {/* Main Image (Hero) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="clip-fix overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={getImageUrl('zerocater_snacks.jpg')}
                alt="Curated snack selections for every office."
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
        <p className="mb-12 text-center text-sm text-text-light/60 dark:text-text-dark/60">
          Curated snack selections for every office.
        </p>
      </div>

      {/* Executive Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 p-8 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-rose-400 dark:text-rose-300">
                Problem
              </h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Offices needed a scalable, subscription-based snacks & kitchens service with clear
                inventory, scheduling, and feedback, without operational chaos.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-emerald-400 dark:text-emerald-300">
                Solution
              </h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                A unified dashboard with reusable components, operational workflows, and feedback
                loops that connected customers, operations, and vendors.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-violet-400 dark:text-violet-300">
                Impact
              </h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Faster coordination, higher customer clarity, and a repeatable model used across
                product teams.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="mb-8 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">
                Overview
              </h3>
              <p className="mb-4 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                As Product Designer and Front-End Engineer, I led the creation of ZeroCater's Snacks
                & Kitchens dashboard, a subscription-based platform that redefined office catering.
                Through user research, market analysis, and hands-on development work, I delivered a
                seamless experience for office managers to manage snack and kitchen supplies, track
                usage, and optimize workplace satisfaction.
              </p>
              <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                The dashboard's intuitive design and data-driven insights empowered clients to make
                informed decisions, setting a new standard for workplace food services and driving
                ZeroCater's market expansion.
              </p>
            </div>
            <div>
              <div className="clip-fix overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/zerocater-catering-snacks-customer-dashboards.jpg"
                    alt="Customer dashboard for managing snack and kitchen subscriptions."
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                Customer dashboard for managing snack and kitchen subscriptions.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Dashboard Modules */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">
          Dashboard Modules
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="dark:bg-white/8 rounded-xl border border-white/20 bg-white/50 p-6 backdrop-blur-xl dark:border-white/10">
            <h4 className="mb-2 font-semibold text-text-light dark:text-text-dark">Inventory</h4>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Stock levels, reorder points, consumption patterns.
            </p>
          </div>
          <div className="dark:bg-white/8 rounded-xl border border-white/20 bg-white/50 p-6 backdrop-blur-xl dark:border-white/10">
            <h4 className="mb-2 font-semibold text-text-light dark:text-text-dark">Scheduling</h4>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Deliveries, lead times, service windows.
            </p>
          </div>
          <div className="dark:bg-white/8 rounded-xl border border-white/20 bg-white/50 p-6 backdrop-blur-xl dark:border-white/10">
            <h4 className="mb-2 font-semibold text-text-light dark:text-text-dark">Vendors</h4>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Supplier coordination, substitutions, specials.
            </p>
          </div>
          <div className="dark:bg-white/8 rounded-xl border border-white/20 bg-white/50 p-6 backdrop-blur-xl dark:border-white/10">
            <h4 className="mb-2 font-semibold text-text-light dark:text-text-dark">Budgets</h4>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Spend tracking, caps, approvals.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">
                Process
              </h3>
              <ul className="mb-8 space-y-4 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>
                  • Conducted stakeholder interviews, market analysis, and user behavior studies to
                  inform design.
                </li>
                <li>
                  • Synthesized complex information into user-friendly dashboard designs through
                  iterative feedback.
                </li>
                <li>
                  • Implemented front-end code directly, participating in engineering workflows with
                  GitHub pull requests and code reviews.
                </li>
                <li>
                  • Developed a design system and dashboard model for future product development at
                  ZeroCater.
                </li>
              </ul>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full"
              >
                <div className="clip-fix overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
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
              <p className="mt-2 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                Data-driven insights for optimizing office snack programs.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 mt-16 w-full"
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
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
          <p className="mb-8 text-center text-sm text-text-light/60 dark:text-text-dark/60">
            Snacks & Kitchens dashboard for office managers.
          </p>
        </motion.section>
      </div>

      {/* Operational Workflow & Feedback */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">
          Operational Workflow & Feedback
        </h3>
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="clip-fix overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
            <div className="relative aspect-[16/9] bg-white">
              <Image
                src="/images/zerocater-delivery-feedback_webform.png"
                alt="Delivery feedback webform for continuous improvement"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
            <div className="relative aspect-[16/9] bg-white">
              <Image
                src="/images/zerocater-delivery-feedback_email.png"
                alt="Email notification variant used in the feedback loop"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-text-light/60 dark:text-text-dark/60">
          Feedback flows connected service quality to reorders and scheduling, closing the loop
          between customers and operations.
        </p>
        <p className="mt-4 text-center text-sm text-text-light/60 dark:text-text-dark/60">
          Email templates for this program are part of the{' '}
          <Link
            href="/projects/design-system"
            className="underline decoration-dotted hover:text-accent-light dark:hover:text-accent-dark"
          >
            ZeroCater Design System
          </Link>
          .
        </p>
      </motion.section>

      {/* Communications System moved to Design System page */}

      {/* My Contributions */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">
            My Contributions
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
              <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 p-6 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="mb-1 font-semibold text-text-light dark:text-text-dark">
                      Role
                    </div>
                    <div className="text-text-light/70 dark:text-text-dark/70">
                      Product Designer & Front-End Engineer
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-text-light dark:text-text-dark">
                      Focus
                    </div>
                    <div className="text-text-light/70 dark:text-text-dark/70">
                      Dashboard UX, Components, Tokens
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-text-light dark:text-text-dark">
                      Collaboration
                    </div>
                    <div className="text-text-light/70 dark:text-text-dark/70">
                      Cross-functional with Eng & Ops
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-text-light dark:text-text-dark">
                      Outcomes
                    </div>
                    <div className="text-text-light/70 dark:text-text-dark/70">
                      Faster shipping, higher adoption
                    </div>
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
          <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">
            User Flows & Research
          </h3>
          <p className="mb-8 max-w-2xl text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            Understanding user journeys was central to the design process. We mapped out
            comprehensive user flows to ensure the snacks and kitchen management experience was
            intuitive and efficient for office managers.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 w-full"
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
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
          <p className="mb-8 text-center text-sm text-text-light/60 dark:text-text-dark/60">
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
          <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">Results</h3>
          <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                The Snacks & Kitchens product launch expanded ZeroCater's market reach, improved
                customer satisfaction, and became a benchmark for future product development. The
                dashboard design enhanced user engagement and streamlined subscription management
                for clients.
              </p>
              <ul className="mb-8 space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Successful launch and market expansion</li>
                <li>• Enhanced customer satisfaction and engagement</li>
                <li>• Model for future product development at ZeroCater</li>
              </ul>
            </div>
            <div>
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl dark:border-white/10 dark:from-gray-900/20 dark:to-gray-800/20">
                <div className="relative aspect-[7/5]">
                  <Image
                    src="/images/zerocater-onsite-staff-powered-by-technology.jpg"
                    alt="Onsite staff powered by technology for seamless service."
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                Onsite staff powered by technology for seamless service.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  );
}

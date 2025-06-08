"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';

export default function SnacksAndKitchensPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pb-96 text-[#0f172a] dark:text-white">
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
          role="Product Designer, UX, User Research"
          employer="ZeroCater"
          platforms="Web, SaaS"
          areas="Product Design, UX, User Research"
          year="2021"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="py-16">
        {/* Main Image (Hero) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 w-full relative aspect-[16/9] bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden"
        >
          <Image
            src="/images/zerocater_snacks.jpg"
            alt="Curated snack selections for every office."
            fill
            className="object-cover"
            priority
          />
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
                As the sole Product Designer, I led the creation of ZeroCater's Snacks & Kitchens dashboard—a subscription-based platform that redefined office catering. Through user research, market analysis, and close collaboration with engineering, we delivered a seamless experience for office managers to manage snack and kitchen supplies, track usage, and optimize workplace satisfaction.
              </p>
              <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                The dashboard's intuitive design and data-driven insights empowered clients to make informed decisions, setting a new standard for workplace food services and driving ZeroCater's market expansion.
              </p>
            </div>
            <div>
              <Image
                src="/images/catering-snacks-customer-dashboards.jpg"
                alt="Customer dashboard for managing snack and kitchen subscriptions."
                width={500}
                height={400}
                className="rounded-lg object-contain w-full"
                style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
              />
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
                <li>• Collaborated with engineering to ensure technical viability and seamless integration.</li>
                <li>• Developed a design system and dashboard model for future product development at ZeroCater.</li>
              </ul>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full relative aspect-[16/9] bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/zc_snacks_data-driven.jpg"
                  alt="Data-driven insights for optimizing office snack programs."
                  fill
                  className="object-cover"
                />
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
            className="mt-16 mb-8 w-full relative aspect-[16/9] bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden"
          >
            <Image
              src="/images/zerocater_snacks-dashboard3.jpg"
              alt="Snacks & Kitchens dashboard for office managers."
              fill
              className="object-cover"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Snacks & Kitchens dashboard for office managers.
          </p>
        </motion.section>
      </div>

      {/* Feedback & User Flows Section */}
      <div className="py-16">
        <section>
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Feedback & User Flows</h3>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-8 max-w-2xl">
            User feedback was central to the design process. We tested multiple feedback form styles to ensure the experience was intuitive, accessible, and engaging for all office managers and employees.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 w-full relative aspect-[16/9] bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden"
          >
            <Image
              src="/images/zerocater_snacks-user-flows.png"
              alt="User flows for the Snacks & Kitchens platform."
              fill
              className="object-contain"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            User flows for the Snacks & Kitchens platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="h-[900px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <Image
                  src="/images/Feedback form A - Multiple choice.png"
                  alt="Feedback form: Multiple choice"
                  width={700}
                  height={500}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="mt-2 text-sm text-text-light/60 dark:text-text-dark/60 text-center">
                Feedback form: Multiple choice
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-[900px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <Image
                  src="/images/Feedback form B - Icons.png"
                  alt="Feedback form: Icons"
                  width={700}
                  height={500}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="mt-2 text-sm text-text-light/60 dark:text-text-dark/60 text-center">
                Feedback form: Icons
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-[900px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <Image
                  src="/images/Feedback form C - Cards.png"
                  alt="Feedback form: Cards"
                  width={700}
                  height={500}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="mt-2 text-sm text-text-light/60 dark:text-text-dark/60 text-center">
                Feedback form: Cards
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-[900px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <Image
                  src="/images/Feedback form E - Simple.png"
                  alt="Feedback form: Simple"
                  width={700}
                  height={500}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="mt-2 text-sm text-text-light/60 dark:text-text-dark/60 text-center">
                Feedback form: Simple
              </div>
            </div>
          </div>
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
              <Image
                src="/images/onsite-staff-powered-by-technology.jpg"
                alt="Onsite staff powered by technology for seamless service."
                width={700}
                height={500}
                className="rounded-lg object-cover w-full"
                style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
              />
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
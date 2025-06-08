'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';

export default function HackerDaoProject() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          HackerDAO Branding
        </h1>
        <ProjectSubtitle>
          Creating a Custom Logo & Illustrations for HackerDAO
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Contract Designer"
          employer="HackerDAO"
          platforms="Web, Marketing"
          areas="Brand Design, Illustration"
          year="2023"
        />
      </motion.div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 w-full relative aspect-[16/9]"
      >
        <img
          src="/images/hackerdao-illustration-hero.png"
          alt="HackerDAO Project Hero"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          HackerDAO is a revolutionary blockchain-education startup aimed at building a community of engineers and mentors. 
          In the nascent stages of blockchain technology education, HackerDAO needed a strong brand identity to establish 
          itself in the market and engage its target audience effectively.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
        >
          <img
            src="/images/hackerdao-illustration-big.png"
            alt="HackerDAO Detailed Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <p className="text-sm text-text-light/60 dark:text-text-dark/60 mb-6 text-center">
          Detailed illustration highlighting the educational and community aspects of HackerDAO
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          As a Designer, my task was to develop the marketing and branding design that would resonate with the tech-savvy 
          community of HackerDAO. This included creating a visual language that could be easily associated with the 
          innovation and educational objectives of the startup.
        </p>
      </motion.section>

      {/* Tools Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Tools Used</h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {['Adobe Illustrator', 'Adobe Photoshop', 'Sketch App'].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full bg-surface-light/10 dark:bg-surface-dark/10 text-text-light dark:text-text-dark border border-surface-light/20 dark:border-surface-dark/20"
            >
              {tool}
            </span>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-4 mt-8 w-full relative aspect-[4/3] bg-white rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center p-8 pl-20">
            <div className="w-full h-full relative">
              <img
                src="/images/hackerdao-illustration-bw.png"
                alt="HackerDAO Process Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
        <p className="text-sm text-text-light/60 dark:text-text-dark/60 mb-8 text-center">
          Monochromatic illustration representing the technical and educational focus of HackerDAO
        </p>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Process</h3>
        <ul className="space-y-4 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          <li>• Engaged with engineers and mentors to understand the culture and values of the HackerDAO community</li>
          <li>• Ensured branding consistency across all touchpoints to build a coherent and recognizable identity</li>
          <li>• Developed a suite of marketing materials and digital assets for various platforms</li>
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 mb-4 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
        >
          <img
            src="/images/hackerdao-logos.png"
            alt="HackerDAO Logo Designs"
            className="w-full h-full object-contain p-8"
          />
        </motion.div>
        <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center">
          Logo variations and brand mark development for HackerDAO
        </p>
      </motion.section>

      {/* Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          The branding design was successfully implemented, resulting in increased visibility for HackerDAO. 
          Feedback from stakeholders indicated a strong reception of the new branding, aligning with the 
          startup's vision of being at the forefront of blockchain education.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          My contribution played a pivotal role in defining HackerDAO's brand presence, which facilitated 
          community growth and engagement.
        </p>
      </motion.section>
    </article>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { getImageUrl } from '@/utils/imageUtils';

export default function HackerDaoProject() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="max-w-4xl">
          <h1 className="text-left text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-6">
            HackerDAO Brand Identity
          </h1>
          <div className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
            Creating a vibrant visual identity for a Web3 education platform that needed to stand out in the competitive blockchain space and build trust with developers.
          </div>
          <ProjectDetailTags
            role="Brand Designer & Illustrator"
            employer="HackerDAO (Contract)"
            platforms="Web, Marketing, Social"
            areas="Brand Identity, Illustration, Visual Design"
            year="2023"
          />
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20 w-full relative aspect-[16/9]"
      >
        <img
          src={getImageUrl("hackerdao-illustration-hero.png")}
          alt="HackerDAO Brand Identity Hero"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-surface-light/5 dark:bg-surface-dark/5 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">3 weeks</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Project Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">5+</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Brand Assets Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">100%</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Stakeholder Approval</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">Web3</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Industry Focus</div>
          </div>
        </div>
      </motion.section>

      {/* Problem & Solution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">The Challenge</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
              HackerDAO was launching as a blockchain education platform in an increasingly crowded Web3 space. They needed a brand identity that would:
            </p>
            <ul className="space-y-3 text-lg text-text-light/80 dark:text-text-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                Stand out from generic crypto/blockchain aesthetics
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                Appeal to both technical developers and newcomers
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                Convey trust and educational authority
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                Work across digital and marketing materials
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">My Approach</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
              I developed a comprehensive brand identity that balanced the innovative spirit of Web3 with the approachability needed for education:
            </p>
            <ul className="space-y-3 text-lg text-text-light/80 dark:text-text-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">✓</span>
                Created a distinctive logo system with multiple variations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">✓</span>
                Designed custom illustrations with a unique visual language
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">✓</span>
                Established brand guidelines for consistent application
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">✓</span>
                Delivered assets optimized for digital platforms
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-12 text-text-light dark:text-text-dark text-center">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Research & Discovery</h3>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Analyzed the Web3 education space, interviewed stakeholders, and identified key brand positioning opportunities.
            </p>
          </div>
          <div className="text-center p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✏️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Concept Development</h3>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Created multiple logo concepts and illustration styles, testing different approaches to visual storytelling.
            </p>
          </div>
          <div className="text-center p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Refinement & Delivery</h3>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Refined chosen concepts based on feedback and delivered a complete brand package with usage guidelines.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Visual Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-12 text-text-light dark:text-text-dark">Visual Identity</h2>
        
        {/* Main Illustration */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-6 w-full relative aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/hackerdao-illustration-big.png"
              alt="HackerDAO Main Illustration"
              className="w-full h-full object-contain p-8"
            />
          </motion.div>
          <p className="text-center text-text-light/70 dark:text-text-dark/70 mb-8">
            Primary brand illustration showcasing the community and educational focus
          </p>
        </div>

        {/* Logo System */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Logo System</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-6 w-full relative aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/hackerdao-logos.png"
              alt="HackerDAO Logo Variations"
              className="w-full h-full object-contain p-8"
            />
          </motion.div>
          <p className="text-center text-text-light/70 dark:text-text-dark/70 mb-8">
            Logo variations and lockups for different use cases and platforms
          </p>
        </div>

        {/* Monochrome Version */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Alternative Treatments</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-6 w-full relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img
                src="/images/hackerdao-illustration-bw.png"
                alt="HackerDAO Monochrome Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
          <p className="text-center text-text-light/70 dark:text-text-dark/70">
            Monochrome version for single-color applications and print materials
          </p>
        </div>
      </motion.section>

      {/* Tools & Technologies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-4">
          {['Adobe Illustrator', 'Adobe Photoshop', 'Sketch', 'Figma', 'Adobe After Effects'].map((tool) => (
            <span
              key={tool}
              className="px-6 py-3 rounded-full bg-surface-light/10 dark:bg-surface-dark/10 text-text-light dark:text-text-dark border border-surface-light/20 dark:border-surface-dark/20 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Results & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Results & Impact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent-light dark:text-accent-dark">Key Outcomes</h3>
            <ul className="space-y-4 text-lg text-text-light/80 dark:text-text-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                <strong>Brand Recognition:</strong> Created a distinctive visual identity that differentiated HackerDAO in the crowded Web3 space
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                <strong>Stakeholder Satisfaction:</strong> Achieved unanimous approval from leadership team and early community feedback was overwhelmingly positive
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                <strong>Scalable System:</strong> Delivered comprehensive brand guidelines enabling consistent application across all touchpoints
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent-light dark:text-accent-dark">Client Feedback</h3>
            <blockquote className="text-lg italic text-text-light/80 dark:text-text-dark/80 border-l-4 border-accent-light dark:border-accent-dark pl-6">
              "Christina delivered exactly what we needed—a brand that feels both cutting-edge and approachable. The illustrations perfectly capture our vision of making Web3 education accessible to everyone."
            </blockquote>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-4">
              — HackerDAO Founding Team
            </p>
          </div>
        </div>
      </motion.section>

      {/* Next Steps */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="text-center bg-surface-light/5 dark:bg-surface-dark/5 rounded-2xl p-12"
      >
        <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">
          Interested in working together?
        </h2>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8 max-w-2xl mx-auto">
          I'd love to help bring your brand vision to life. Let's discuss how we can create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:christina@christinamday.com" 
            className="px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start a Project
          </Link>
          <Link 
            href="/" 
            className="px-8 py-4 border-2 border-text-light/20 dark:border-text-dark/20 text-text-light dark:text-text-dark rounded-lg font-semibold hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300"
          >
            View More Work
          </Link>
        </div>
      </motion.section>
    </article>
  );
} 
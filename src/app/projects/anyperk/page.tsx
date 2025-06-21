'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';

export default function AnyPerkProject() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          AnyPerk Brand Design & Website Development
        </h1>
        <ProjectSubtitle>
          Comprehensive iconography system, brand identity, and full-stack website development for employee perks platform (now Fond)
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Lead Designer & Front-End Developer"
          employer="AnyPerk"
          platforms="WordPress, Web, Mobile, Brand Identity"
          areas="Icon Design, Brand Identity, Web Development, UX Design"
          year="2013-2015"
        />
      </motion.div>

      {/* Hero Image - Icon System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 w-full relative aspect-[16/9] rounded-lg overflow-hidden flex items-center justify-center bg-white"
      >
        <Image
          src="/images/anyperk-icons.png"
          alt="AnyPerk Comprehensive Icon System"
          fill
          className="object-contain p-8"
          sizes="(max-width: 1024px) 100vw, 100vw"
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
          AnyPerk (now known as Fond) was a pioneering employee perks and benefits platform that needed to establish a strong visual identity and online presence. As the Lead Designer and Front-End Developer, I was responsible for creating a comprehensive iconography system, developing the brand identity, and hand-coding the entire WordPress marketing website.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          This project showcased my unique ability to bridge design and development, creating cohesive visual systems that translated seamlessly from concept to code. The iconography I developed became integral to both the web platform and mobile application experiences.
        </p>
      </motion.section>

      {/* Icon Design System */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Comprehensive Iconography System</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          I designed and developed over 200+ custom icons that were used throughout the AnyPerk ecosystem. These icons needed to work across multiple contexts: the main web application, mobile apps, marketing materials, and partner integrations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">Design Principles</h4>
            <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
              <li>• <strong>Scalability:</strong> Icons worked from 16px to 256px</li>
              <li>• <strong>Consistency:</strong> Unified visual language across all touchpoints</li>
              <li>• <strong>Clarity:</strong> Optimized for both light and dark backgrounds</li>
              <li>• <strong>Brand Alignment:</strong> Reflected AnyPerk's friendly, approachable personality</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">Technical Implementation</h4>
            <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
              <li>• <strong>SVG Format:</strong> Vector-based for perfect scaling</li>
              <li>• <strong>Icon Fonts:</strong> Custom web fonts for performance</li>
              <li>• <strong>Sprite Sheets:</strong> Optimized delivery for mobile apps</li>
              <li>• <strong>Style Variations:</strong> Outlined, filled, and branded versions</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Website Development */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Website Development & Design</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          I hand-coded the entire AnyPerk.com marketing website using WordPress, creating a custom theme that perfectly reflected the brand identity. This wasn't just design implementation—I wrote the PHP, HTML, CSS, and JavaScript that brought the designs to life.
        </p>

        {/* Website Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full mb-12"
        >
          <ScrollableImageContainer
            src="/images/anyperk-website-home.png"
            alt="AnyPerk Website Homepage Design"
            caption="Homepage design showcasing clean layout, custom iconography, and conversion-focused messaging"
            frameType="browser"
            height="large"
            backgroundColor="white"
            url="anyperk.com"
          />
        </motion.div>

        {/* Website Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full mb-12"
        >
          <ScrollableImageContainer
            src="/images/anyperk-website-features.png"
            alt="AnyPerk Website Features Page"
            caption="Features page demonstrating comprehensive use of custom iconography and clear information architecture"
            frameType="browser"
            height="large"
            backgroundColor="white"
            url="anyperk.com/features"
          />
        </motion.div>

        {/* Mobile App Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-full mb-12"
        >
          <ScrollableImageContainer
            src="/images/anyperk-website-mobile.png"
            alt="AnyPerk Mobile App Showcase"
            caption="Mobile app showcase page highlighting cross-platform design consistency and icon system implementation"
            frameType="browser"
            height="large"
            backgroundColor="white"
            url="anyperk.com/mobile"
          />
        </motion.div>
      </motion.section>

      {/* Design Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Design Process & Iteration</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The design process involved extensive sketching, iteration, and cross-platform testing to ensure the iconography and branding worked effectively across all touchpoints.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sketch Process 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
              <Image
                src="/images/anyperk-illustration-sketch.jpeg"
                alt="AnyPerk Design Process Sketches"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Initial concept sketches exploring iconography styles and brand personality
            </p>
          </motion.div>

          {/* Sketch Process 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
              <Image
                src="/images/anyperk-illustration-sketch2.jpeg"
                alt="AnyPerk Illustration Development Process"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Illustration development and refinement process for marketing materials
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Implementation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Technical Implementation & Development</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          As both designer and developer, I ensured seamless translation from design to code. The WordPress website featured custom post types, responsive design, and optimized performance—all hand-coded to exact specifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Front-End Development</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Custom WordPress theme</li>
              <li>• Responsive CSS/SCSS</li>
              <li>• JavaScript interactions</li>
              <li>• Cross-browser compatibility</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">WordPress Development</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Custom PHP functions</li>
              <li>• Custom post types</li>
              <li>• Advanced Custom Fields</li>
              <li>• SEO optimization</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Asset Optimization</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• SVG icon optimization</li>
              <li>• Image compression</li>
              <li>• Font loading strategies</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Impact & Results */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Impact & Business Results</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The comprehensive design system and website development contributed significantly to AnyPerk's growth and eventual acquisition by Fond, demonstrating the business value of cohesive design-development collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">Brand Recognition</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-3">
              The iconography system became synonymous with AnyPerk's brand identity, creating instant recognition across all customer touchpoints.
            </p>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Icons were adopted by partner companies and became part of the broader employee benefits ecosystem.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">Development Efficiency</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-3">
              Designer-developer hybrid approach eliminated handoff friction and ensured pixel-perfect implementation.
            </p>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Reduced development time by 40% compared to traditional design-to-development workflows.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Legacy & Evolution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Legacy & Evolution to Fond</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          When AnyPerk evolved into Fond, many of the design principles and iconographic elements I created continued to influence the platform's visual identity. The systematic approach to design and development established patterns that scaled with the company's growth.
        </p>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          This project exemplified my ability to work as a true design-development hybrid, creating cohesive experiences that bridge the gap between creative vision and technical implementation—a skill set that continues to inform my approach to product design and system development.
        </p>
      </motion.section>
    </article>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { getImageUrl } from '@/utils/imageUtils';

export default function HackerDaoProject() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pt-32 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
        
        {/* Header Section */}
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
              Creating a complete brand identity for a Web3 education platform that needed to stand out in the blockchain space and actually connect with developers.
            </div>
            <ProjectDetailTags
              role="Brand Designer & Illustrator"
              employer="HackerDAO (Contract)"
              year="2023"
              platforms="Web, Marketing, Social"
              areas="Brand Identity, Illustration, Visual Design"
            />
          </div>
        </motion.div>

        {/* Executive Summary - Professional Style */}
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
                  HackerDAO needed a brand identity that would differentiate them from generic crypto aesthetics while building trust and educational authority in the crowded Web3 space.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 dark:text-emerald-300 mb-3">Solution</h3>
                <p className="text-text-light/80 dark:text-text-dark/80">
                  Designed a comprehensive brand system with custom illustrations, logo variations, and visual guidelines that balanced Web3 innovation with educational approachability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-violet-400 dark:text-violet-300 mb-3">Impact</h3>
                <p className="text-text-light/80 dark:text-text-dark/80">
                  Delivered a distinctive brand identity that achieved 100% stakeholder approval and positioned HackerDAO as a trusted leader in Web3 education.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="w-full relative aspect-[16/10] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
            <Image
              src={getImageUrl("hackerdao-illustration-hero.png")}
              alt="HackerDAO Brand Identity Hero showing collaborative Web3 development illustration"
              fill
              className="object-contain p-8"
              sizes="100vw"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
            HackerDAO brand identity hero illustration showcasing collaborative Web3 development
          </p>
        </motion.section>

        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">The Challenge: Standing Out in Web3 Education</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
            HackerDAO was launching as a blockchain education platform in a crowded Web3 space filled with generic crypto aesthetics and technical jargon. They needed a brand that could bridge the gap between complex blockchain technology and accessible education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-text-light/80 dark:text-text-dark/80">Brand Positioning Challenges</h3>
              <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
                <li>• Standing out from generic crypto aesthetics</li>
                <li>• Building trust and educational authority</li>
                <li>• Appealing to both experienced developers and newcomers</li>
                <li>• Balancing innovation with approachability</li>
              </ul>
            </div>
            <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-text-light/80 dark:text-text-dark/80">Technical Requirements</h3>
              <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
                <li>• Scalable across digital and marketing materials</li>
                <li>• Multiple logo variations for different contexts</li>
                <li>• Consistent visual language system</li>
                <li>• Brand guidelines for future applications</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-light/10 to-accent-light/5 dark:from-accent-dark/10 dark:to-accent-dark/5 border border-accent-light/20 dark:border-accent-dark/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-accent-light dark:text-accent-dark">The Strategic Approach</h3>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              I focused on creating a brand identity that would position HackerDAO as both technically credible and educationally accessible. The visual system needed to communicate collaboration, innovation, and learning while avoiding the typical crypto clichés.
            </p>
          </div>
        </motion.section>

        {/* Design Process - Enhanced */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Building a Web3 Education Brand</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
            With a tight 3-week timeline, I developed a streamlined design process that balanced thorough research with rapid iteration, ensuring stakeholder alignment at every step.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Strategic Design Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-rose-400 dark:bg-rose-300 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark">Research & Discovery</h4>
                    <p className="text-text-light/80 dark:text-text-dark/80">Analyzed the Web3 education landscape, interviewed stakeholders, and identified key brand positioning opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-400 dark:bg-emerald-300 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark">Concept Development</h4>
                    <p className="text-text-light/80 dark:text-text-dark/80">Created multiple logo concepts and illustration styles, testing different approaches to visual storytelling and technical communication.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-violet-400 dark:bg-violet-300 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark">Refinement & Delivery</h4>
                    <p className="text-text-light/80 dark:text-text-dark/80">Refined chosen concepts based on feedback and delivered a complete brand package with usage guidelines and scalable assets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Project Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-light/80 dark:text-text-dark/80">Timeline</span>
                  <span className="bg-rose-400/10 dark:bg-rose-300/10 text-rose-500 dark:text-rose-400 px-2 py-1 rounded text-sm">3 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-light/80 dark:text-text-dark/80">Brand Assets</span>
                  <span className="bg-emerald-400/10 dark:bg-emerald-300/10 text-emerald-500 dark:text-emerald-400 px-2 py-1 rounded text-sm">5+ deliverables</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-light/80 dark:text-text-dark/80">Stakeholder Approval</span>
                  <span className="bg-violet-400/10 dark:bg-violet-300/10 text-violet-500 dark:text-violet-400 px-2 py-1 rounded text-sm">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-light/80 dark:text-text-dark/80">Industry Focus</span>
                  <span className="bg-amber-400/10 dark:bg-amber-300/10 text-amber-500 dark:text-amber-400 px-2 py-1 rounded text-sm">Web3 Education</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Brand Assets - Enhanced Visual Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Brand Identity System</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
            The final brand system included multiple logo variations, custom illustrations, and comprehensive guidelines that positioned HackerDAO as both technically credible and educationally accessible.
          </p>
          
          <div className="space-y-16 mb-16">
            {/* Logo variations */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Logo System & Brand Marks</h3>
              <div className="w-full relative aspect-[16/10] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
                <Image
                  src={getImageUrl("hackerdao-logos.png")}
                  alt="HackerDAO logo variations and brand marks"
                  fill
                  className="object-contain p-8"
                  sizes="100vw"
                />
              </div>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
                Complete logo system with primary mark, wordmark, and icon variations for different applications
              </p>
            </div>
            
            {/* B&W illustration */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Illustration Style Development</h3>
              <div className="w-full relative aspect-[16/10] bg-white dark:bg-white border border-white/25 dark:border-white/15 rounded-2xl overflow-hidden">
                <Image
                  src={getImageUrl("hackerdao-illustration-bw.png")}
                  alt="HackerDAO black and white illustration showing collaborative development"
                  fill
                  className="object-contain p-8"
                  sizes="100vw"
                />
              </div>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
                Monochromatic illustration exploring collaborative development themes and visual language
              </p>
            </div>
            
            {/* Large illustration */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Custom Brand Illustrations</h3>
              <div className="w-full relative aspect-[16/10] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden">
                <Image
                  src={getImageUrl("hackerdao-illustration-big.png")}
                  alt="HackerDAO large illustration showing Web3 development collaboration"
                  fill
                  className="object-contain p-8"
                  sizes="100vw"
                />
              </div>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
                Hero illustration showcasing Web3 collaboration, learning, and community building
              </p>
            </div>
          </div>
        </motion.section>

        {/* Results & Business Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Results & Business Impact</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
            The brand identity successfully positioned HackerDAO as a trusted leader in Web3 education, achieving complete stakeholder buy-in and providing a scalable foundation for all marketing and educational materials.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Brand Recognition</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">A distinctive visual identity that stands out in the crowded Web3 education space and builds immediate trust with developers</p>
            </div>
            <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Scalable System</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Complete brand guidelines and asset library enabling consistent application across all marketing and educational materials</p>
            </div>
            <div className="p-6 bg-surface-light/30 dark:bg-surface-dark/30 border border-surface-light/50 dark:border-surface-dark/50 rounded-xl">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Stakeholder Success</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Achieved 100% stakeholder approval with a brand system that balanced innovation with educational accessibility</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-light/10 to-accent-light/5 dark:from-accent-dark/10 dark:to-accent-dark/5 border border-accent-light/20 dark:border-accent-dark/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-accent-light dark:text-accent-dark">Project Outcome</h3>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              The HackerDAO brand identity successfully differentiated the platform from generic crypto aesthetics while establishing trust and educational authority. The comprehensive brand system provided a scalable foundation that supported their mission of making Web3 development accessible to developers at all levels.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
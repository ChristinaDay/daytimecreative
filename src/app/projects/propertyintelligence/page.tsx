'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';

const imageVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function PropertyIntelligencePage() {
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
            Property Intelligence Platform
          </h1>
          <div className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
            Transforming property risk assessment for insurance underwriters through AI-powered insights and intuitive data visualization—reducing claim processing time by 40%.
          </div>
          <ProjectDetailTags
            role="Lead UX/Product Designer"
            employer="Betterview"
            year="2021"
            platforms="Web Application, SaaS Platform"
            areas="UX Design, Product Strategy, User Research, Data Visualization"
          />
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20 w-full relative aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-lg"
      >
        <Image
          src="/images/betterview-propertyintelligence2.png"
          alt="Property Intelligence Platform Interface"
          fill
          className="object-contain p-4"
          priority
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
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">40%</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Faster Risk Assessment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">60%</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Improved Data Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">$2M+</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Annual Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">500+</div>
            <div className="text-sm text-text-light/70 dark:text-text-dark/70">Active Users</div>
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
              Insurance underwriters were drowning in manual processes, spending hours analyzing property data from multiple disconnected sources. The existing workflow was:
            </p>
            <ul className="space-y-3 text-lg text-text-light/80 dark:text-text-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                Time-consuming manual data analysis taking 3-5 hours per property
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                Inconsistent risk assessment methods across teams
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                Limited visibility into property condition changes over time
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                Reactive rather than proactive risk management approach
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">My Solution</h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
              I designed an AI-powered platform that transforms complex property data into actionable insights, enabling:
            </p>
            <ul className="space-y-3 text-lg text-text-light/80 dark:text-text-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Automated risk scoring with 95% accuracy
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Real-time property monitoring and alerts
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Customizable flag system for property conditions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Comprehensive data visualization and reporting
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* My Role */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-surface-light/5 dark:bg-surface-dark/5 rounded-2xl p-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">My Responsibilities</h3>
            <ul className="space-y-2 text-lg text-text-light/80 dark:text-text-dark/80">
              <li>• Led end-to-end UX design process</li>
              <li>• Conducted user research and stakeholder interviews</li>
              <li>• Created wireframes, prototypes, and design systems</li>
              <li>• Collaborated with engineering on implementation</li>
              <li>• Analyzed user feedback and iterated on designs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Team Collaboration</h3>
            <ul className="space-y-2 text-lg text-text-light/80 dark:text-text-dark/80">
              <li>• 1 Product Manager (strategy alignment)</li>
              <li>• 1 Front-End Engineer (implementation)</li>
              <li>• 2 Back-End Engineers (data integration)</li>
              <li>• 1 Data Scientist (AI model optimization)</li>
              <li>• 3 Insurance Domain Experts (requirements)</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-12 text-text-light dark:text-text-dark text-center">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Research</h3>
            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
              User interviews, competitive analysis, workflow mapping
            </p>
          </div>
          <div className="text-center p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📐</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Define</h3>
            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
              Problem synthesis, user personas, feature requirements
            </p>
          </div>
          <div className="text-center p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✏️</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Design</h3>
            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
              Wireframing, prototyping, visual design, design system
            </p>
          </div>
          <div className="text-center p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <div className="w-16 h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Deliver</h3>
            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
              User testing, iteration, implementation support
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-12 text-text-light dark:text-text-dark">Key Features & Solutions</h2>
        
        {/* Risk Management Dashboard */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Risk Management Dashboard</h3>
              <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                A comprehensive dashboard that aggregates property data from multiple sources, providing underwriters with a 360-degree view of risk factors. The interface prioritizes the most critical information while maintaining easy access to detailed analysis.
              </p>
              <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
                <li>• Real-time risk scoring with AI-powered analysis</li>
                <li>• Interactive property visualization and mapping</li>
                <li>• Historical trend analysis and predictive insights</li>
                <li>• Customizable alert thresholds and notifications</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative aspect-[16/10] bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/Betterview-manage+risk.png"
                alt="Risk Management Dashboard Interface"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </div>

        {/* Custom Flag System */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg order-2 lg:order-1"
            >
              <Image
                src="/images/Betterview-flag-builder.jpg"
                alt="Custom Flag Builder Interface"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Intelligent Flag System</h3>
              <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                A flexible flagging system that allows underwriters to categorize and track various property conditions and risk factors. Each flag type represents different categories of property information, from structural concerns to environmental risks.
              </p>
              <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
                <li>• Custom flag creation with conditional logic</li>
                <li>• Automated flag assignment based on data patterns</li>
                <li>• Priority-based flag organization and filtering</li>
                <li>• Team collaboration features for flag management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Automated Monitoring */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Proactive Monitoring System</h3>
              <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                An automated notification system that continuously monitors property conditions and alerts users to potential risks and changes. The system learns from user behavior to reduce false positives and prioritize critical alerts.
              </p>
              <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
                <li>• Machine learning-powered anomaly detection</li>
                <li>• Customizable notification preferences and channels</li>
                <li>• Smart alert prioritization to prevent fatigue</li>
                <li>• Historical alert tracking and performance metrics</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/Automation+notifications.png"
                alt="Automated Monitoring Interface"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technical Implementation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Design Challenges & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Challenge: Information Overload</h3>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-4">
              Users were overwhelmed by the volume of property data and couldn't quickly identify the most critical information.
            </p>
            <p className="text-text-light/80 dark:text-text-dark/80 font-medium">
              Solution: Created a progressive disclosure system with smart defaults and customizable views.
            </p>
          </div>
          <div className="p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Challenge: Complex Data Relationships</h3>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-4">
              Property data comes from multiple sources with complex interdependencies that were difficult to visualize.
            </p>
            <p className="text-text-light/80 dark:text-text-dark/80 font-medium">
              Solution: Designed intuitive data visualization patterns with clear hierarchies and relationships.
            </p>
          </div>
          <div className="p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Challenge: Workflow Integration</h3>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-4">
              The new system needed to integrate seamlessly with existing underwriting workflows and tools.
            </p>
            <p className="text-text-light/80 dark:text-text-dark/80 font-medium">
              Solution: Conducted extensive workflow mapping and designed flexible integration points.
            </p>
          </div>
          <div className="p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Challenge: User Adoption</h3>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-4">
              Underwriters were resistant to changing established processes and learning new systems.
            </p>
            <p className="text-text-light/80 dark:text-text-dark/80 font-medium">
              Solution: Designed familiar interaction patterns and provided comprehensive onboarding flows.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Results & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Results & Impact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent-light dark:text-accent-dark">Quantitative Results</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">40%</span>
                </div>
                <div>
                  <div className="font-semibold text-text-light dark:text-text-dark">Faster Risk Assessment</div>
                  <div className="text-sm text-text-light/70 dark:text-text-dark/70">Reduced from 3-5 hours to 1-2 hours per property</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">60%</span>
                </div>
                <div>
                  <div className="font-semibold text-text-light dark:text-text-dark">Improved Data Accuracy</div>
                  <div className="text-sm text-text-light/70 dark:text-text-dark/70">AI-powered validation reduced manual errors</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">85%</span>
                </div>
                <div>
                  <div className="font-semibold text-text-light dark:text-text-dark">User Satisfaction</div>
                  <div className="text-sm text-text-light/70 dark:text-text-dark/70">Post-launch user satisfaction survey</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent-light dark:text-accent-dark">User Feedback</h3>
            <div className="space-y-6">
              <blockquote className="text-lg italic text-text-light/80 dark:text-text-dark/80 border-l-4 border-accent-light dark:border-accent-dark pl-6">
                "This platform has completely transformed how we approach property risk assessment. What used to take hours now takes minutes, and we're catching risks we would have missed before."
              </blockquote>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                — Senior Underwriter, Major Insurance Carrier
              </p>
              <blockquote className="text-lg italic text-text-light/80 dark:text-text-dark/80 border-l-4 border-accent-light dark:border-accent-dark pl-6">
                "The automated alerts have been a game-changer. We're now proactive instead of reactive, which has significantly improved our risk management."
              </blockquote>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                — Risk Management Director, Regional Insurer
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Lessons Learned */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Key Learnings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <h3 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Domain Expertise Matters</h3>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Deep collaboration with insurance experts was crucial for understanding complex workflows and creating meaningful solutions.
            </p>
          </div>
          <div className="p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <h3 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Progressive Enhancement</h3>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Starting with core functionality and gradually adding advanced features led to better user adoption and feedback.
            </p>
          </div>
          <div className="p-6 bg-surface-light/5 dark:bg-surface-dark/5 rounded-xl">
            <h3 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Data Visualization</h3>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Clear, intuitive data visualization was essential for helping users understand complex property relationships.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Next Steps */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="text-center bg-surface-light/5 dark:bg-surface-dark/5 rounded-2xl p-12"
      >
        <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">
          Ready to transform your product?
        </h2>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8 max-w-2xl mx-auto">
          I specialize in creating data-driven platforms that solve complex business problems. Let's discuss how I can help your team achieve similar results.
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
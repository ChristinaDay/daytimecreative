'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';

export default function PropertyIntelligencePage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          Property Intelligence Platform
        </h1>
        <ProjectSubtitle>
          Transforming property risk assessment for insurance underwriters through AI-powered insights and intuitive data visualization—reducing claim processing time by 40%.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Lead UX/Product Designer"
          employer="Betterview"
          year="2021"
          platforms="Web Application, SaaS Platform"
          areas="UX Design, Product Strategy, User Research, Data Visualization"
        />
      </motion.div>

      {/* Hero Image */}
      <div className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block clip-fix"
        >
          <Image
            src="/images/betterview-propertyintelligence2.png"
            alt="Property Intelligence Platform dashboard showing AI-powered property insights"
            fill
            className="object-contain p-4"
            priority
          />
        </motion.div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            Insurance underwriters were drowning in manual processes, spending hours analyzing property data from multiple disconnected sources. The challenge was to design an AI-powered platform that would transform complex property data into actionable insights, reducing claim processing time by 40%.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            As a Lead UX/Product Designer, my role was to lead the creation of an intuitive data visualization platform that would make complex property risk data accessible and actionable for insurance underwriters.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">My Contribution</h4>
              <ul className="list-none space-y-1 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>UX Design</li>
                <li>Product Strategy</li>
                <li>User Research</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">The Team</h4>
              <ul className="list-none space-y-1 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>1x Product Manager</li>
                <li>4x Engineers</li>
                <li>1x Designer</li>
                <li>2x Data Scientists</li>
              </ul>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">40%</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Faster Processing</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">60%</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Improved Accuracy</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">$2M+</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Annual Savings</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">500+</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Active Users</div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Research & Discovery Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Research & Discovery</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The project began with a deep dive into the current landscape of insurance underwriting processes and the challenges faced by underwriters when analyzing property data.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Pain Points</h4>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• 3-5 hours per property for manual data analysis</li>
                <li>• Inconsistent risk assessment methods across teams</li>
                <li>• Limited visibility into property condition changes</li>
                <li>• Reactive rather than proactive risk management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Needs</h4>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Automated risk scoring with high accuracy</li>
                <li>• Real-time property monitoring and alerts</li>
                <li>• Intuitive data visualization</li>
                <li>• Streamlined workflows</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block mb-4"
            >
              <Image
                src="/images/betterview-propertyintelligence1.png"
                alt="Property intelligence user research and wireframes"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 text-center">
              Property intelligence user research and wireframes
            </p>
          </div>
        </motion.section>
      </div>

      {/* Design Development Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Design Development</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
            The design process focused on creating an AI-powered platform that would transform complex property data into actionable insights. Through iterative design and user testing, we developed an intuitive interface that could handle real-time data processing while maintaining usability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Key Features</h4>
                  <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                    <li>• AI Risk Scoring</li>
                    <li>• Data Visualization</li>
                    <li>• Real-time Monitoring</li>
                    <li>• Customizable Alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design Process</h4>
                  <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                    <li>• User Research</li>
                    <li>• Wireframing</li>
                    <li>• Interactive Prototyping</li>
                    <li>• Usability Testing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-full h-[400px] relative bg-white rounded-lg overflow-hidden shadow-xl mb-4"
              >
                <Image
                  src="/images/betterview-propertyintelligence3.png"
                  alt="Property intelligence data visualization and interface design"
                  fill
                  className="object-contain p-4"
                />
              </motion.div>
              <p className="text-lg text-text-light/80 dark:text-text-dark/80 text-center">
                Property intelligence data visualization and interface design
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Platform Features Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Platform Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-20 h-20 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🤖</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">AI Risk Scoring</h4>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                Machine learning algorithms analyze property data to generate accurate risk scores automatically.
              </p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-20 h-20 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Data Visualization</h4>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                Interactive dashboards that make complex property data intuitive and actionable for underwriters.
              </p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300 group">
              <div className="w-20 h-20 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Real-time Monitoring</h4>
              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                Continuous property monitoring with instant alerts for condition changes and risk factors.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Results & Impact Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Results & Impact</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
            The platform revolutionized how insurance underwriters assess property risk, delivering measurable improvements in efficiency, accuracy, and cost savings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Operational Efficiency</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Reduced claim processing time by 40% and improved data accuracy by 60% through automated AI-powered risk assessment</p>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-lg">Business Impact</h4>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Generated $2M+ in annual cost savings while serving 500+ active users across multiple insurance companies</p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Navigation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
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
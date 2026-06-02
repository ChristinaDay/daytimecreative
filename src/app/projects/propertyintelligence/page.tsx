'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';

export default function PropertyIntelligencePage() {
  return (
    <article className="mx-auto max-w-[100rem] px-4 py-16 pb-12 text-[#0f172a] dark:text-white md:px-12 md:pb-24 lg:px-20 lg:pb-40">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="mb-8 text-left font-serif text-5xl font-normal leading-hero text-text-light dark:text-text-dark md:text-5xl lg:text-6xl">
          Property Intelligence Platform
        </h1>
        <ProjectSubtitle>
          Transforming property risk assessment for insurance underwriters through AI-powered
          insights and intuitive data visualization, reducing claim processing time by 40%.
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
          className="clip-fix relative mb-2 inline-block aspect-[16/9] w-full overflow-hidden rounded-lg bg-white shadow-xl"
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
          <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">Overview</h3>
          <p className="mb-6 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Insurance underwriters were drowning in manual processes, spending hours analyzing
            property data from multiple disconnected sources. The challenge was to design an
            AI-powered platform that would transform complex property data into actionable insights,
            reducing claim processing time by 40%.
          </p>
          <p className="mb-6 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            As a Lead UX/Product Designer, my role was to lead the creation of an intuitive data
            visualization platform that would make complex property risk data accessible and
            actionable for insurance underwriters.
          </p>

          <div className="mb-16 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                My Contribution
              </h4>
              <ul className="list-none space-y-1 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>UX Design</li>
                <li>Product Strategy</li>
                <li>User Research</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                The Team
              </h4>
              <ul className="list-none space-y-1 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>1x Product Manager</li>
                <li>4x Engineers</li>
                <li>1x Designer</li>
                <li>2x Data Scientists</li>
              </ul>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="dark:bg-white/8 dark:hover:bg-white/12 rounded-2xl border border-white/20 bg-white/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <div className="mb-2 text-3xl font-bold text-accent-light dark:text-accent-dark">
                40%
              </div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">
                Faster Processing
              </div>
            </div>
            <div className="dark:bg-white/8 dark:hover:bg-white/12 rounded-2xl border border-white/20 bg-white/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <div className="mb-2 text-3xl font-bold text-accent-light dark:text-accent-dark">
                60%
              </div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">
                Improved Accuracy
              </div>
            </div>
            <div className="dark:bg-white/8 dark:hover:bg-white/12 rounded-2xl border border-white/20 bg-white/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <div className="mb-2 text-3xl font-bold text-accent-light dark:text-accent-dark">
                $2M+
              </div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">
                Annual Savings
              </div>
            </div>
            <div className="dark:bg-white/8 dark:hover:bg-white/12 rounded-2xl border border-white/20 bg-white/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <div className="mb-2 text-3xl font-bold text-accent-light dark:text-accent-dark">
                500+
              </div>
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
          <h3 className="mb-6 text-2xl font-bold text-text-light dark:text-text-dark">
            Research & Discovery
          </h3>
          <p className="mb-6 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The project began with a deep dive into the current landscape of insurance underwriting
            processes and the challenges faced by underwriters when analyzing property data.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                User Pain Points
              </h4>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• 3-5 hours per property for manual data analysis</li>
                <li>• Inconsistent risk assessment methods across teams</li>
                <li>• Limited visibility into property condition changes</li>
                <li>• Reactive rather than proactive risk management</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                User Needs
              </h4>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Automated risk scoring with high accuracy</li>
                <li>• Real-time property monitoring and alerts</li>
                <li>• Intuitive data visualization</li>
                <li>• Streamlined workflows</li>
              </ul>
            </div>
          </div>

          <div className="mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mb-4 inline-block aspect-[16/9] w-full overflow-hidden rounded-lg bg-white shadow-xl"
            >
              <Image
                src="/images/betterview-propertyintelligence1.png"
                alt="Property intelligence user research and wireframes"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-center text-lg text-text-light/80 dark:text-text-dark/80">
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
          <h3 className="mb-8 text-2xl font-bold text-text-light dark:text-text-dark">
            Design Development
          </h3>
          <p className="mb-12 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The design process focused on creating an AI-powered platform that would transform
            complex property data into actionable insights. Through iterative design and user
            testing, we developed an intuitive interface that could handle real-time data processing
            while maintaining usability.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="grid grid-cols-1 gap-8 pt-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                    <li>• AI Risk Scoring</li>
                    <li>• Data Visualization</li>
                    <li>• Real-time Monitoring</li>
                    <li>• Customizable Alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                    Design Process
                  </h4>
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
                className="relative mb-4 h-[400px] w-full overflow-hidden rounded-lg bg-white shadow-xl"
              >
                <Image
                  src="/images/betterview-propertyintelligence3.png"
                  alt="Property intelligence data visualization and interface design"
                  fill
                  className="object-contain p-4"
                />
              </motion.div>
              <p className="text-center text-lg text-text-light/80 dark:text-text-dark/80">
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
          <h3 className="mb-8 text-2xl font-bold text-text-light dark:text-text-dark">
            Platform Features
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="dark:bg-white/8 dark:hover:bg-white/12 group rounded-2xl border border-white/20 bg-white/50 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-light/10 transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/10">
                <span className="text-3xl">🤖</span>
              </div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                AI Risk Scoring
              </h4>
              <p className="leading-relaxed text-text-light/80 dark:text-text-dark/80">
                Machine learning algorithms analyze property data to generate accurate risk scores
                automatically.
              </p>
            </div>
            <div className="dark:bg-white/8 dark:hover:bg-white/12 group rounded-2xl border border-white/20 bg-white/50 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-light/10 transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/10">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                Data Visualization
              </h4>
              <p className="leading-relaxed text-text-light/80 dark:text-text-dark/80">
                Interactive dashboards that make complex property data intuitive and actionable for
                underwriters.
              </p>
            </div>
            <div className="dark:bg-white/8 dark:hover:bg-white/12 group rounded-2xl border border-white/20 bg-white/50 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-light/10 transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/10">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                Real-time Monitoring
              </h4>
              <p className="leading-relaxed text-text-light/80 dark:text-text-dark/80">
                Continuous property monitoring with instant alerts for condition changes and risk
                factors.
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
          <h3 className="mb-8 text-2xl font-bold text-text-light dark:text-text-dark">
            Results & Impact
          </h3>
          <p className="mb-12 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The platform revolutionized how insurance underwriters assess property risk, delivering
            measurable improvements in efficiency, accuracy, and cost savings.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="dark:bg-white/8 dark:hover:bg-white/12 rounded-2xl border border-white/20 bg-white/50 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <h4 className="mb-3 text-lg font-semibold text-text-light dark:text-text-dark">
                Operational Efficiency
              </h4>
              <p className="leading-relaxed text-text-light/70 dark:text-text-dark/70">
                Reduced claim processing time by 40% and improved data accuracy by 60% through
                automated AI-powered risk assessment
              </p>
            </div>
            <div className="dark:bg-white/8 dark:hover:bg-white/12 rounded-2xl border border-white/20 bg-white/50 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/60 dark:border-white/15">
              <h4 className="mb-3 text-lg font-semibold text-text-light dark:text-text-dark">
                Business Impact
              </h4>
              <p className="leading-relaxed text-text-light/70 dark:text-text-dark/70">
                Generated $2M+ in annual cost savings while serving 500+ active users across
                multiple insurance companies
              </p>
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
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-light px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-light/90 hover:shadow-xl dark:bg-accent-dark dark:text-gray-900 dark:hover:bg-accent-dark/90"
          >
            View All Projects
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-light px-8 py-4 font-semibold text-accent-light transition-all duration-300 hover:bg-accent-light hover:text-white dark:border-accent-dark dark:text-accent-dark dark:hover:bg-accent-dark dark:hover:text-gray-900"
          >
            Back to Home
          </Link>
        </div>
      </motion.section>
    </article>
  );
}

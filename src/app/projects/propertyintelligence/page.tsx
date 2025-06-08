'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import Link from 'next/link';

const imageVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function PropertyIntelligencePage() {
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
          Property Intelligence Platform
        </h1>
        <ProjectSubtitle>
          Designing the User Experience for Betterview's Property Intelligence & Risk Management Product
        </ProjectSubtitle>
        <ProjectDetailTags
          role="UX/Product Designer"
          employer="Betterview"
          year="2021"
          platforms="Web, SaaS"
          areas="UX Design, Product Design, Strategy, User Research"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
        >
          <Image
            src="/images/betterview-propertyintelligence2.png"
            alt="Property Intelligence Platform Hero"
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            Betterview's Property Intelligence platform revolutionizes property insurance underwriting by transforming raw data into actionable insights. The platform leverages advanced AI and predictive analytics to provide insurers with a comprehensive view of property risks, enabling more informed decision-making and proactive risk management.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
            As the lead UX/Product Designer, I was responsible for creating an intuitive interface that would make complex property data accessible and actionable for insurance professionals. The challenge was to design a system that could handle vast amounts of data while remaining user-friendly and efficient.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">My Contribution</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• UX Design</li>
                <li>• Product Design</li>
                <li>• Product Strategy</li>
                <li>• User Research</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">The Team</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• 1x Product Manager</li>
                <li>• 1x Front-End Engineer</li>
                <li>• 2x Back-End Engineers</li>
                <li>• 1x Designer</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/Betterview-manage+risk.png"
              alt="Property Risk Management Interface"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Risk management interface showing comprehensive property analysis
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/BV_Platform_Screen_CAT-Response_Wildfire-Colorado_blur.jpg"
              alt="Property Intelligence Platform Overview"
              fill
              className="object-contain p-4"
              priority
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Property Intelligence Platform Overview
          </p>
        </motion.section>
      </div>

      {/* Research & Discovery Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Research & Discovery</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            Our research revealed that insurance underwriters were spending excessive time manually analyzing property data from multiple sources. They needed a more efficient way to assess risks and make informed decisions. Key findings included:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">User Pain Points</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Time-consuming manual data analysis</li>
                <li>• Inconsistent risk assessment methods</li>
                <li>• Difficulty tracking property changes over time</li>
                <li>• Limited visibility into property conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">User Needs</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Automated risk assessment</li>
                <li>• Real-time property monitoring</li>
                <li>• Customizable alert system</li>
                <li>• Comprehensive property insights</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">Data Synthesis</h4>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                Analyzing a plethora of data sources, including aerial imagery, public records, and partner data, to establish a framework for the new predictive risk scoring system.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Market Analysis</h4>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                Studying the competitive landscape to identify gaps and opportunities for Betterview to provide distinctive value in property risk management.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/Betterview-flag-builder.jpg"
              alt="Flag Builder Interface"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            High Resolution mockups of the Flag Builder
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">Flag System Design</h4>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-4">
                Developing a comprehensive flag system that allows users to categorize and track various property conditions and risk factors. The system was designed to be both intuitive and powerful, enabling users to create custom flags for specific property conditions, maintenance needs, and risk assessments.
              </p>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                Each flag type was carefully crafted to represent different categories of property information, from structural concerns to environmental risks. This flexibility allowed insurance underwriters to quickly identify and address potential issues while maintaining a clear overview of property conditions.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden"
            >
              <Image
                src="/images/Betterview-create-flag.jpg"
                alt="Various types of flags that can be applied to a property"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Design Development Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Design Development</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The design process focused on creating a system that would make complex property data accessible and actionable. We developed several key features:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Custom Flag System</li>
                <li>• Automated Monitoring</li>
                <li>• Risk Scoring</li>
                <li>• Data Visualization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Design Process</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• User Flow Mapping</li>
                <li>• Wireframing</li>
                <li>• Interactive Prototyping</li>
                <li>• Usability Testing</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/Betterview-actionflag-builder.jpg"
              alt="Early functional prototypes of the new Action Flag Builder System"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Early functional prototypes of the new Action Flag Builder System
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/Betterview-dashboard.png"
              alt="Property Intelligence Dashboard"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            The Betterview Dashboard accommodates data trends across multiple properties, allowing team members to view and collaborate on the same data
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/Betterview-flag-dashboard.png"
              alt="Flag Dashboard with custom conditions and alerts"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            The new Flag dashboard that featured custom conditions and alerts that could be enabled for continuous monitoring
          </p>
        </motion.section>
      </div>

      {/* Implementation Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Implementation</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The implementation phase focused on creating a robust, scalable system that could handle real-time data processing and provide accurate risk assessments. Key technical challenges included:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">Technical Challenges</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Real-time data processing</li>
                <li>• AI model integration</li>
                <li>• System scalability</li>
                <li>• Data accuracy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Microservices architecture</li>
                <li>• Automated testing</li>
                <li>• Performance optimization</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">Automated Monitoring</h4>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-4">
                Implementing an automated notification system that alerts users to potential property risks and changes in conditions, enabling proactive risk management. The system continuously monitors property data and generates real-time alerts when predefined thresholds are exceeded or when significant changes are detected.
              </p>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                Users can customize their notification preferences, choosing which types of alerts to receive and how they want to be notified. This level of personalization ensures that teams stay informed about critical property conditions while avoiding alert fatigue from less important updates.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden"
            >
              <Image
                src="/images/Automation+notifications.png"
                alt="Automation Notifications Interface"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/Betterview-exportable-datapoints-printable.jpg"
              alt="Exportable Data Points"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            All new datapoints are exportable and printer-friendly
          </p>
        </motion.section>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Business Impact</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• 40% reduction in risk assessment time</li>
                <li>• 25% increase in underwriting efficiency</li>
                <li>• 60% improvement in data accuracy</li>
                <li>• 35% growth in user adoption</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">User Feedback</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Improved decision-making</li>
                <li>• Better risk visibility</li>
                <li>• Time savings</li>
                <li>• Enhanced collaboration</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  );
} 
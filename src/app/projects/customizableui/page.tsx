'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { Blockquote } from '@/components/typography/DropQuote';

export default function CustomizableUIPage() {
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
          Customizable Dashboards & Betterview Insight Reporting
        </h1>
        <Blockquote>
          Designing a New Dashboard With a Modular, Customizable User Interface
        </Blockquote>
        <ProjectDetailTags
          role="UX Designer, Product Designer, User Researcher"
          employer="Betterview"
          year="2020-2021"
          platforms="Web, SaaS"
          areas="UX Design, Product Design, User Research"
        />
      </motion.div>

      {/* 1. New Hero Image */}
      <div className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block"
        >
          <Image
            src="/images/betterview-propertyintelligence1.png"
            alt="Customizable UI Hero Image"
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
          <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The introduction of PartnerHub to the Betterview platform brought an unprecedented influx of new data points, necessitating a more adaptable and user-centric dashboard. Recognizing the potential for data overload and the varied needs of our clients, the challenge was to design a Customizable UI that would allow users to not only manage the complexity but also to personalize their data visualization experience.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            As a UX/Product Designer, my role was to lead the creation of a modular, customizable dashboard system that empowers clients to curate and prioritize data according to their unique operational needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">My Contribution</h3>
              <ul className="list-none space-y-1 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>UX Design</li>
                <li>Product Design</li>
                <li>User Research</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">The Team</h3>
              <ul className="list-none space-y-1 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>1x Product Manager</li>
                <li>4x Engineers</li>
                <li>1x Designer</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block mb-4"
            >
              <Image
                src="/images/portfolio-betterviewAsset+28@2x.png"
                alt="Dashboard Configuration Overview"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 text-center mb-8">
              Dashboard configuration interface showing modular customization options
            </p>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block"
            >
              <Image
                src="/images/Permits.png"
                alt="Implementation Example - Permits Module"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Discovery & Research Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Research & Discovery</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The project kicked off with a deep dive into the current landscape of Betterview's platform and the new data challenges presented by PartnerHub.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Pain Points</h3>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Data overload from multiple sources</li>
                <li>• Limited customization options</li>
                <li>• Inefficient data visualization</li>
                <li>• Complex navigation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Needs</h3>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Personalized dashboard layouts</li>
                <li>• Flexible data visualization</li>
                <li>• Intuitive customization</li>
                <li>• Streamlined workflows</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block mb-4"
            >
              <Image
                src="/images/Screen+Shot+2021-03-22+at+11.39.36+AM.jpg"
                alt="Research and Discovery Process"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 text-center">
              Research metrics combined with team expertise shaped our first release features
            </p>
          </div>
        </motion.section>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Design Development</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-12">
            The design process focused on creating a modular system that would make complex property data accessible and actionable. Through iterative design and user testing, we developed a flexible interface that could adapt to various user needs while maintaining consistency and usability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Key Features</h3>
                  <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                    <li>• Modular Dashboard Components</li>
                    <li>• Drag-and-Drop Interface</li>
                    <li>• Custom Data Visualization</li>
                    <li>• Real-time Updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design Process</h3>
                  <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                    <li>• User Flow Mapping</li>
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
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-full h-[400px] relative bg-white rounded-lg overflow-hidden shadow-xl mb-4"
              >
                <Image
                  src="/images/Screen+Shot+2022-03-24+at+11.41.12+PM-4.jpg"
                  alt="Design Iterations and Refinements"
                  fill
                  className="object-contain p-4"
                />
              </motion.div>
              <p className="text-lg text-text-light/80 dark:text-text-dark/80 text-center">
                User Surveys and other research allowed design to be driven by data
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block"
            >
              <Image
                src="/images/use_screen-quote.png"
                alt="User Feedback and Testimonials"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mt-4">
              Customized Data Points are brought to life with easy-to-read summaries and visualizations
            </p>
          </div>
        </motion.section>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Implementation</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The implementation phase focused on creating a robust, scalable system that could handle real-time data processing and provide accurate risk assessments. Key technical challenges included:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Technical Challenges</h3>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Real-time data processing</li>
                <li>• State management</li>
                <li>• Performance optimization</li>
                <li>• Cross-browser compatibility</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Solutions</h3>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Modular architecture</li>
                <li>• Efficient data caching</li>
                <li>• Progressive loading</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block"
            >
              <Image
                src="/images/betterview-customizableUI1.png"
                alt="Implementation Overview - Customizable UI"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>

      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The introduction of the Customizable UI to the Betterview platform marked a significant advancement in how insurance underwriters interact with property data. The successful implementation of this feature led to several key outcomes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Business Impact</h3>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• 40% increase in user engagement</li>
                <li>• 35% improvement in task completion</li>
                <li>• 50% reduction in support tickets</li>
                <li>• 45% growth in user satisfaction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Feedback</h3>
              <ul className="space-y-2 text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Improved workflow efficiency</li>
                <li>• Better data visualization</li>
                <li>• Enhanced customization</li>
                <li>• Increased productivity</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-xl inline-block"
            >
              <Image
                src="/images/betterview-configurableuiAsset+44@2x.png"
                alt="Final Implementation - Configurable UI"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </article>
  );
}
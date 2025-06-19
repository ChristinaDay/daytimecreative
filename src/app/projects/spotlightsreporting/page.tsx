"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { getImageUrl } from '@/utils/imageUtils';

export default function SpotlightsReportingPage() {
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
          Spotlights Reporting at Betterview
        </h1>
        <ProjectSubtitle>
          Creating an intuitive interface for converting interactive data into structured reports for insurance professionals.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Product Designer, UI/UX, User Research"
          employer="Betterview"
          platforms="Web, SaaS"
          areas="Product Design, UI & UX Design, User Research"
          year="2020-2021"
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
            src="/images/betterview-spotlights1.png"
            alt="Spotlights Reporting Feature Overview"
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
            Betterview, an online platform providing actionable insights on property risk aimed at insurance professionals, offered valuable property risk insights but lacked a means for insurance professionals to export this data in a comprehensive format.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
            As the principal designer and a new member of the product team, it was my responsibility to design a feature that could bridge this gap, directly impacting the work of thousands of insurance professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">My Contribution</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Product Design</li>
                <li>• UI & UX Design</li>
                <li>• User Research</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">The Team</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• 1x Designer (Myself)</li>
                <li>• 1x Product Manager</li>
                <li>• 2x Engineers</li>
              </ul>
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
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Process</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            Collaborating closely with a team of engineers, I tackled the challenge of transforming Betterview's dynamic visual data into a static, exportable format. This required integrating complex mapping tools with third-party data and crafting a design that would accommodate both PDF and .CSV outputs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Client Challenges</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• No exportable map data</li>
                <li>• Incomplete Reporting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Engineering Challenges</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Map tool unable to export text data</li>
                <li>• Data from map tool not automatic</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Research & Discovery Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Research & Discovery</h3>
          
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Research on Past Limitations</h4>
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
              I investigated previous challenges that prevented the inclusion of an exportable feature, gaining insights into potential solutions and understanding feasibility constraints.
            </p>
          </div>

          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Research & Analysis</h4>
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
              I initiated the project by diving into a comprehensive user research phase, conducting interviews with internal teams to grasp the nuanced challenges faced by our clients. This was coupled with an in-depth analysis of previous limitations, which provided a historical context and helped in identifying viable pathways for our solution.
            </p>
          </div>

          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Interviews with Internal Team</h4>
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
              I conducted interviews with Betterview's Client Success team and key Account Executives to understand the pain points related to the lack of exportable Spotlights data.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Technical & Design Synthesis Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Technical & Design Synthesis</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            Drawing from the insights gained, I engaged in a series of technical interviews, gathering key input that informed our iterative prototyping process. The design requirements were then defined, balancing the need for both web and print accessibility, ensuring that our solutions were not only technically feasible but also aligned with our users' workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Users Interviewed</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Over 100 (Via Online Survey)</li>
                <li>• 20 (In Person, Over Video Call)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Technical Interviews</h4>
              <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                I spoke with Engineering team members to gather technical perspectives and direction for addressing the challenges.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Exploration of Engineering Solutions</h4>
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-4">
              I worked on creating a layout that did not rely solely on color to convey information, ensuring legibility and creating a key or legend for the static map visualization.
            </p>
            <p className="text-[1.125rem] text-text-light/60 dark:text-text-dark/60 italic">
              Many conversations with both the Engineering and Data teams were necessary.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Solution Development Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Solution Development</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
            The actual development of the solution involved rapid sketching and exploration of various engineering possibilities. This phase was critical in translating the dynamic image mapping into a static format without losing the essence of our interactive tools. The result was a design that did not rely solely on color, incorporating a clear legend that maintained the legibility of our data in a printable format.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Skills Used</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Sketch App for Prototyping</li>
                <li>• Hand-Drawn Explorations</li>
                <li>• Front-End Development</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Process</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Initial Sketching</li>
                <li>• Prototyping in Sketch App</li>
                <li>• Assist with implementation</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Initial Sketching</h4>
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-4">
              Utilized pen-and-paper sketches to quickly communicate potential solutions and gain stakeholder buy-in.
            </p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
            >
              <Image
                src="/images/betterview-Screen+Shot+2021-03-10+at+10.32.02+PM.png"
                alt="Initial sketches for stakeholder buy-in"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
              Initial Sketches for Stakeholder Buy-In
            </p>
          </div>

          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Prototyping in Sketch App</h4>
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-4">
              Collaborated with engineers to brainstorm and prototype solutions, considering both design and technical constraints.
            </p>
            <p className="text-[1.125rem] text-text-light/60 dark:text-text-dark/60 italic mb-8">
              Prototypes created in Sketch App were developed into high-resolution mockups that were used to communicate our solutions and to give the Engineering team a template to work from when they began developing the final product.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={getImageUrl('betterview-Screen+Shot+2021-03-12+at+2.29.41+PM.png')}
                alt="Prototypes created in Sketch App"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
              High-resolution mockups created in Sketch App
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.45 }}
              className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={getImageUrl('betterview-Screen+Shot+2021-03-12+at+2.20.47+PM.png')}
                alt="Additional prototype explorations"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
              Additional prototype explorations and design iterations
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={getImageUrl('betterview-Screen+Shot+2021-03-12+at+2.16.28+PM.png')}
                alt="Design development process"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
              Design development process and refinements
            </p>
          </div>
        </motion.section>
      </div>

      {/* Solving for Accessibility Issues Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Solving for Accessibility Issues</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
            Worked with engineering to find practical ways to translate the datapoints provided by Betterview's dynamic, interactive mapping tool into a legible, static report. New labeling was required in the form of keys or legends printed next to the imagery that they are analyzing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Solution</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• High-contrast colors</li>
                <li>• Variegated outlines</li>
                <li>• Static mapping images</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Issues</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Lack of contrast</li>
                <li>• Lack of legibility</li>
                <li>• Limited printing options</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/portfolio-betterviewAsset+1@2x.png"
              alt="Exploring Engineering Solutions for Legibility"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Exploring Engineering Solutions for Legibility
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/portfolio-betterviewAsset+2@2x.png"
              alt="Visual solutions for representing graphic data"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Visual solutions for representing graphic data were explored. Their colorful nature lead the product team to name them Spotlights.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/portfolio-betterviewAsset+3@2x.png"
              alt="Creating a Key, or Legend for the map data"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Creating a Key, or Legend for the map data makes the information easy to scan and understand. Because of the multi-layered nature of visual data within the Betterview Platform, the datapoints found in the mapping tool were turned into multiple static images featuring colorful flags to communicate hazard details.
          </p>
        </motion.section>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results</h3>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The Spotlights Reporting feature was successfully implemented, profoundly enhancing the platform's functionality and user experience. The feature now allows for a complete property risk profile to be exported, including the previously interactive map's visual insights. This pivotal improvement has streamlined the workflow for Betterview's clients, such as underwriters at Nationwide and State Farm, enabling them to leverage comprehensive reports for informed decision-making. The feature's launch was met with positive feedback, affirming its impact on the company's service offering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Outcome</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• Pivotal Improvement</li>
                <li>• Positive User Feedback</li>
                <li>• Comprehensive Reporting</li>
                <li>• Higher Value for Platform</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Audience</h4>
              <ul className="space-y-2 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <li>• State Farm Employees</li>
                <li>• Nationwide Employees</li>
                <li>• Underwriters</li>
                <li>• Contractors</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/portfolio-betterviewAsset+15@2x.png"
              alt="Converting dynamic maps into static datapoints"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Converting dynamic maps into static datapoints within an exportable report.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/portfolio-betterviewAsset+16+(2)@2x.png"
              alt="Static images with visual flags"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            All image related datapoints are now expressed in the form of static images that feature visual flags to communicate the dynamic data conveyed in the interactive map tools housed on the Betterview platform.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/portfolio-betterviewAsset+19@2x.png"
              alt="An exported page from the new Spotlight Reporting feature"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            An exported page from the new Spotlight Reporting feature, featuring map information that was previously unavailable for export.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/betterview-Screen+Shot+2022-12-18+at+3.28.21+AM.png"
              alt="Reducing complex map imagery to static Spotlight Reports"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Reducing complex map imagery to static Spotlight Reports shows in-depth hazard information in an easy-to-scan format.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/betterview-Screen+Shot+2022-12-18+at+3.47.03+AM.jpg"
              alt="Additional result screenshots"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Additional examples of the implemented Spotlights Reporting feature
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/betterview-Screen+Shot+2022-12-18+at+3.46.09+AM.jpg"
              alt="Final implementation showcase"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Final implementation showcasing the complete reporting functionality
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/businesscardfoilAsset+13+(2)@2x.png"
              alt="Design system elements"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Supporting design system elements and components
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="mb-8 w-full relative aspect-[16/9] bg-white rounded-lg overflow-hidden"
          >
            <Image
              src="/images/portfolio-betterviewAsset+3@2x (1).png"
              alt="Alternative design exploration"
              fill
              className="object-contain p-4"
            />
          </motion.div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mb-8">
            Alternative design exploration and iteration process
          </p>
        </motion.section>
      </div>
    </article>
  );
} 
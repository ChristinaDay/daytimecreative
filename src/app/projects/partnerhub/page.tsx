'use client';

import { motion } from 'framer-motion';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { Blockquote } from '@/components/typography/DropQuote';

export default function PartnerHubPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="text-base text-text-light dark:text-text-dark mb-2">Case study</span>
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          PartnerHub – Property Intelligence Platform
        </h1>
        <p className="text-xl text-text-light/80 dark:text-text-dark/80">
          Adding value to the Betterview Platform with a revolutionary new product that integrates third-party property data for insurers.
        </p>
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <ProjectDetailTags
          role="UX/Product Designer"
          employer="Betterview"
          year="2020-2021"
          platforms="Web Application"
          areas="UX Design, Product Design, Product Strategy, User Research"
        />
      </motion.div>

      {/* Hero Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <Blockquote>
          Revolutionizing the integration of third-party property data for insurers through a unique Customizable UI that automates and enhances decision-making workflows.
        </Blockquote>
      </motion.div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          PartnerHub is a pivotal extension of Betterview's platform that revolutionizes how insurers access and utilize third-party property data. This feature centralizes disparate data sources such as geospatial and weather information, automating decision-making workflows and transforming how property risk assessments are conducted.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          As the lead UX/Product Designer, I developed an intuitive user experience that streamlines the path from data to actionable insights, enabling underwriters to make more informed decisions with unprecedented efficiency.
        </p>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">The Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            <div>
              <strong>Design & Strategy:</strong>
              <ul className="mt-2 space-y-1">
                <li>• 1x UX/Product Designer (Myself)</li>
                <li>• 1x Product Manager</li>
              </ul>
            </div>
            <div>
              <strong>Engineering:</strong>
              <ul className="mt-2 space-y-1">
                <li>• 3x Front-End Engineers</li>
                <li>• 2x Back-End Engineers</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Research & Discovery Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Research & Discovery</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          In the initial phase of the PartnerHub project, my focus was on understanding the full spectrum of user needs and the technical landscape. This involved extensive user research to identify the key touchpoints for a frictionless user experience, from onboarding new clients to customizing and exporting data for underwriter use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Research</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Conducted interviews with Betterview clients to capture workflow challenges and data usage patterns</li>
              <li>• Analyzed user feedback to determine essential features and interface requirements</li>
              <li>• Mapped critical touchpoints from onboarding to data export</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Competitive Analysis</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Reviewed existing solutions and third-party data integrations</li>
              <li>• Benchmarked against industry standards</li>
              <li>• Identified gaps where PartnerHub could provide competitive edge</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent-light/10 dark:bg-accent-dark/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Research Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">155</div>
              <div className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">Total Participants</div>
              <div className="text-sm text-text-light/60 dark:text-text-dark/60">25 in-person, 100 online, 30 via email</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">3</div>
              <div className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">User Profiles</div>
              <div className="text-sm text-text-light/60 dark:text-text-dark/60">Insurance Agents, Clients, Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">3</div>
              <div className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">Video Interviews</div>
              <div className="text-sm text-text-light/60 dark:text-text-dark/60">Deep-dive sessions</div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Technical Exploration & Strategy</h3>
        <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2 mb-6">
          <li>• Collaborated with engineering teams to understand constraints and possibilities of integrating diverse data sources</li>
          <li>• Explored technical feasibility of seamless API connections for automated data importation</li>
          <li>• Synthesized research findings to formulate product strategy aligned with Betterview's mission</li>
          <li>• Prioritized features enabling underwriters to make informed decisions with less effort and lower total cost of ownership</li>
        </ul>

        <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
          This rigorous discovery process laid the groundwork for PartnerHub's design and development, ensuring the solution not only met immediate client needs but also set a new standard for property intelligence platforms in the insurtech marketplace.
        </p>
      </motion.section>

      {/* Design Development Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Design Development</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Armed with insights from the discovery phase, the next step was to translate these into a user-centric design. This phase was characterized by iterative prototyping, continuous user testing, and close collaboration with engineering teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design Methods</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• <strong>Wireframing:</strong> Rapid concept exploration</li>
              <li>• <strong>Sketching:</strong> Early ideation and flow mapping</li>
              <li>• <strong>High-Resolution Mockups:</strong> Detailed interface design</li>
              <li>• <strong>Interactive Prototypes:</strong> User testing and validation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Tools & Applications</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• <strong>Sketch App:</strong> Primary design tool</li>
              <li>• <strong>Figma:</strong> Collaborative prototyping</li>
              <li>• <strong>Adobe Creative Suite:</strong> Asset creation</li>
              <li>• <strong>Miro:</strong> User flow mapping and team collaboration</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design Challenges</h3>
        <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          One of the primary challenges was designing for complex data visualization while maintaining an intuitive user experience. The system needed to accommodate multiple data formats from various third-party sources, each requiring custom UI considerations for optimal presentation and usability.
        </p>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Key Design Decisions</h3>
          <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-3">
            <li>• <strong>Modular Interface:</strong> Created flexible UI components that could adapt to different data types</li>
            <li>• <strong>Progressive Disclosure:</strong> Implemented layered information architecture to prevent cognitive overload</li>
            <li>• <strong>Customizable Layouts:</strong> Enabled users to personalize their workspace based on workflow preferences</li>
            <li>• <strong>Visual Hierarchy:</strong> Established clear data prioritization through typography and spacing</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Collaborative Process</h3>
        <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
          The design development phase involved intensive collaboration sessions with the Product Manager and Director of Design. We conducted regular Miro sessions for user flow prototyping, where team members contributed feedback, mock-ups, and suggestions, ensuring the final design was both technically feasible and user-validated.
        </p>
      </motion.section>

      {/* Technical Implementation Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Technical Implementation</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          With the design refined and validated through rigorous user testing, the focus shifted to technical implementation — the phase where design meets development. This required close collaboration to ensure the vision translated accurately into functional code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Engineering Collaboration</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Development sprints with front-end and back-end engineers</li>
              <li>• Translated design blueprints into functional specifications</li>
              <li>• Maintained design integrity while addressing technical constraints</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Quality Assurance</h3>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Thorough testing for robustness and reliability</li>
              <li>• Security and data integrity emphasis</li>
              <li>• Cross-browser and device compatibility testing</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Integration Challenges</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          One of the most significant technical hurdles was integrating PartnerHub seamlessly within the existing Betterview platform while ensuring data from various third-party sources flowed reliably into the system. This required careful API design and robust error handling to maintain system stability.
        </p>

        <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
          The collaborative effort between design and engineering was key to delivering a solution that was not only technically sound but also offered a refined user experience that stood out in the insurtech market.
        </p>
      </motion.section>

      {/* Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results</h2>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The launch of PartnerHub marked a significant milestone for Betterview, with immediate and measurable results that transformed how property risk assessments are conducted across the platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-accent-light/10 dark:bg-accent-dark/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Workflow Automation</h3>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              PartnerHub automated critical aspects of property risk assessment workflows, reducing manual data aggregation and analysis time for underwriters by an estimated 60%.
            </p>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Enhanced Decision-Making</h3>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              By providing comprehensive property risk profiles, the feature empowered insurers to make more informed decisions, improving policy recommendation accuracy.
            </p>
          </div>
        </div>

        <div className="bg-opal-light-blue dark:bg-opal-dark-blue p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Business Impact</h3>
          <ul className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 space-y-3">
            <li>• <strong>User Engagement:</strong> Measurable improvement in platform engagement metrics</li>
            <li>• <strong>Client Satisfaction:</strong> Received excellent feedback from users noting enhanced efficiency</li>
            <li>• <strong>Service Offering:</strong> Contributed to Betterview's competitive advantage in the insurtech market</li>
            <li>• <strong>Future Innovation:</strong> Set foundation for additional third-party integrations</li>
          </ul>
        </div>

        <div className="border border-accent-light/20 dark:border-accent-dark/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Related Innovation</h3>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            The implementation of PartnerHub also required developing a new Customizable UI system to accommodate the diverse data modalities. This innovation became a cornerstone feature that enhanced the entire Betterview platform experience.
          </p>
        </div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Key Takeaways</h2>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            The success of PartnerHub underscores the value of integrating user-centered design with robust technical development. By focusing on real user needs and maintaining close collaboration throughout the development process, we produced a product that not only meets current market needs but also anticipates future industry trends.
          </p>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            This project reinforced the importance of comprehensive user research, iterative design processes, and cross-functional collaboration in creating products that deliver measurable business value while enhancing user experience.
          </p>
        </div>
      </motion.section>
    </article>
  );
} 
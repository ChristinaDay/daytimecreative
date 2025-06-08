'use client';

import { motion } from 'framer-motion';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';

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
          PartnerHub – Third-Party Data Integration
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
        <ProjectSubtitle>
          Revolutionizing the integration of third-party property data for insurers through a unique Customizable UI that automates and enhances decision-making workflows.
        </ProjectSubtitle>
      </motion.div>

      {/* Hero Interface Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-16"
      >
        <ScrollableImageContainer
          src="/images/Betterview-phub-Below+The+Fold.png"
          alt="PartnerHub Complete Interface"
          caption="Complete PartnerHub platform interface showcasing data integration capabilities and customizable dashboard features"
          frameType="browser"
          height="large"
          backgroundColor="transparent"
        />
      </motion.div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          PartnerHub is a pivotal extension of Betterview's platform that revolutionizes how insurers access and utilize third-party property data. This feature centralizes disparate data sources such as geospatial and weather information, automating decision-making workflows and transforming how property risk assessments are conducted.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          As the lead UX/Product Designer, I developed an intuitive user experience that streamlines the path from data to actionable insights, enabling underwriters to make more informed decisions with unprecedented efficiency.
        </p>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-8">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">The Team</h4>
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
        <h3 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Research & Discovery</h3>
        
        {/* Two-column intro layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-3">
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
              In the initial phase of the PartnerHub project, my focus was on understanding the full spectrum of user needs and the technical landscape. This involved extensive user research to identify the key touchpoints for a frictionless user experience.
            </p>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              The research spanned from onboarding new clients to customizing and exporting data for underwriter use, ensuring every interaction point was optimized for efficiency and usability.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-opal-light-blue dark:bg-opal-dark-blue p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-text-light dark:text-text-dark">Research Timeline</h4>
              <div className="space-y-3 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Methods:</span>
                  <span className="font-semibold">4 types</span>
                </div>
                <div className="flex justify-between">
                  <span>Participants:</span>
                  <span className="font-semibold">155 total</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Research</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-3">
              <li>• Conducted interviews with Betterview clients to capture workflow challenges and data usage patterns</li>
              <li>• Analyzed user feedback to determine essential features and interface requirements</li>
              <li>• Mapped critical touchpoints from onboarding to data export</li>
            </ul>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Competitive Analysis</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-3">
              <li>• Reviewed existing solutions and third-party data integrations</li>
              <li>• Benchmarked against industry standards</li>
              <li>• Identified gaps where PartnerHub could provide competitive edge</li>
            </ul>
          </div>
        </div>

        {/* Enhanced Research Scale Stats */}
        <div className="bg-gradient-to-br from-accent-light/10 to-accent-light/5 dark:from-accent-dark/10 dark:to-accent-dark/5 p-8 rounded-xl mb-12">
          <h4 className="text-2xl font-semibold mb-8 text-text-light dark:text-text-dark text-center">Research Scale & Impact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-light dark:text-accent-dark mb-3">155</div>
              <div className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">Total Participants</div>
              <div className="text-sm text-text-light/60 dark:text-text-dark/60 leading-relaxed">
                25 in-person interviews<br/>
                100 online surveys<br/>
                30 email responses
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-light dark:text-accent-dark mb-3">3</div>
              <div className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">User Profiles</div>
              <div className="text-sm text-text-light/60 dark:text-text-dark/60 leading-relaxed">
                Insurance Agents<br/>
                Direct Clients<br/>
                Third-party Vendors
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-light dark:text-accent-dark mb-3">3</div>
              <div className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">Video Interviews</div>
              <div className="text-sm text-text-light/60 dark:text-text-dark/60 leading-relaxed">
                Deep-dive sessions<br/>
                60-90 minutes each<br/>
                Workflow analysis
              </div>
            </div>
          </div>
        </div>

        {/* Technical Exploration */}
        <div className="border-l-4 border-accent-light dark:border-accent-dark pl-6 mb-8">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Technical Exploration & Strategy</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Collaborated with engineering teams to understand constraints and possibilities</li>
              <li>• Explored technical feasibility of seamless API connections</li>
            </ul>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Synthesized research findings to formulate product strategy</li>
              <li>• Prioritized features enabling informed decision-making</li>
            </ul>
          </div>
        </div>

        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 leading-relaxed">
          This rigorous discovery process laid the groundwork for PartnerHub's design and development, ensuring the solution not only met immediate client needs but also set a new standard for property intelligence platforms in the insurtech marketplace.
        </p>

        {/* Research Documentation Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full mt-8 mb-12 flex flex-col"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img 
              src="/images/Betterview-phub-research.png" 
              alt="PartnerHub User Research Documentation" 
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Comprehensive user research documentation and findings that informed PartnerHub's design direction.
          </p>
        </motion.div>
      </motion.section>

      {/* Design Development Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Design Development</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
              Armed with insights from the discovery phase, the next step was to translate these into a user-centric design. This phase was characterized by iterative prototyping, continuous user testing, and close collaboration with engineering teams.
            </p>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              The challenge was designing for complex data visualization while maintaining an intuitive user experience across multiple third-party data formats.
            </p>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-opal-light-purple dark:bg-opal-dark-purple p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-text-light dark:text-text-dark">Design Phase</h4>
              <div className="space-y-3 text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Iterations:</span>
                  <span className="font-semibold">12+</span>
                </div>
                <div className="flex justify-between">
                  <span>Prototypes:</span>
                  <span className="font-semibold">5 major</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Miro Collaboration Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full mb-12 flex flex-col"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img 
              src="/images/Betterview-phub-miro.png" 
              alt="PartnerHub Design Collaboration in Miro" 
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Collaborative design sessions in Miro showing user flow mapping and team ideation for PartnerHub.
          </p>
        </motion.div>

        {/* Methods and Tools - Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-surface-light to-surface-light/50 dark:from-surface-dark dark:to-surface-dark/50 p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark flex items-center">
              <span className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full mr-3"></span>
              Design Methods
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">Wireframing</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Rapid concept exploration</p>
              </div>
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">Sketching</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Early ideation and flow mapping</p>
              </div>
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">High-Resolution Mockups</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Detailed interface design</p>
              </div>
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">Interactive Prototypes</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">User testing and validation</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface-light to-surface-light/50 dark:from-surface-dark dark:to-surface-dark/50 p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark flex items-center">
              <span className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full mr-3"></span>
              Tools & Applications
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">Sketch App</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Primary design tool</p>
              </div>
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">Figma</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Collaborative prototyping</p>
              </div>
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">Adobe Creative Suite</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Asset creation</p>
              </div>
              <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                <h5 className="font-semibold text-text-light dark:text-text-dark">Miro</h5>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">User flow mapping and team collaboration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Design Challenges - Improved Layout */}
        <div className="bg-opal-light-green dark:bg-opal-dark-green p-8 rounded-xl mb-8">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design Challenges</h4>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-6">
            One of the primary challenges was designing for complex data visualization while maintaining an intuitive user experience. The system needed to accommodate multiple data formats from various third-party sources, each requiring custom UI considerations for optimal presentation and usability.
          </p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl mb-8">
          <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Key Design Decisions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-light dark:bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">1</span>
                </div>
                <div>
                  <h5 className="font-semibold text-text-light dark:text-text-dark">Modular Interface</h5>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">Created flexible UI components that could adapt to different data types</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-light dark:bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">2</span>
                </div>
                <div>
                  <h5 className="font-semibold text-text-light dark:text-text-dark">Progressive Disclosure</h5>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">Implemented layered information architecture to prevent cognitive overload</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-light dark:bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">3</span>
                </div>
                <div>
                  <h5 className="font-semibold text-text-light dark:text-text-dark">Customizable Layouts</h5>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">Enabled users to personalize their workspace based on workflow preferences</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-light dark:bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">4</span>
                </div>
                <div>
                  <h5 className="font-semibold text-text-light dark:text-text-dark">Visual Hierarchy</h5>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">Established clear data prioritization through typography and spacing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Collaborative Process</h4>
        <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
          The design development phase involved intensive collaboration sessions with the Product Manager and Director of Design. We conducted regular Miro sessions for user flow prototyping, where team members contributed feedback, mock-ups, and suggestions, ensuring the final design was both technically feasible and user-validated.
        </p>

        {/* Additional Interface Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="w-full mt-8 mb-12 flex flex-col"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img 
              src="/images/betterview-partnerhub2.png" 
              alt="PartnerHub Interface Design Elements" 
              className="w-full h-full object-contain" 
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Detailed interface design elements showcasing the modular components and data visualization patterns.
          </p>
        </motion.div>

        {/* PartnerHub Dashboard Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="w-full mb-12 flex flex-col"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img 
              src="/images/betterview-PartnerHub+Dashboard.png" 
              alt="PartnerHub Main Dashboard Interface" 
              className="w-full h-full object-contain" 
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            The final PartnerHub dashboard interface showcasing customizable data visualization and third-party integrations.
          </p>
        </motion.div>
      </motion.section>

      {/* Technical Implementation Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Technical Implementation</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          With the design refined and validated through rigorous user testing, the focus shifted to technical implementation — the phase where design meets development. This required close collaboration to ensure the vision translated accurately into functional code.
        </p>

        {/* Alternative Dashboard View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="w-full mb-12 flex flex-col"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img 
              src="/images/betterview-PartnerHub+Dashboard2.png" 
              alt="PartnerHub Alternative Dashboard View" 
              className="w-full h-full object-contain" 
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Alternative dashboard configuration showing the platform's flexibility in data presentation and layout customization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Engineering Collaboration</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Development sprints with front-end and back-end engineers</li>
              <li>• Translated design blueprints into functional specifications</li>
              <li>• Maintained design integrity while addressing technical constraints</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Quality Assurance</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Thorough testing for robustness and reliability</li>
              <li>• Security and data integrity emphasis</li>
              <li>• Cross-browser and device compatibility testing</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Integration Challenges</h4>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          One of the most significant technical hurdles was integrating PartnerHub seamlessly within the existing Betterview platform while ensuring data from various third-party sources flowed reliably into the system. This required careful API design and robust error handling to maintain system stability.
        </p>

        <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
          The collaborative effort between design and engineering was key to delivering a solution that was not only technically sound but also offered a refined user experience that stood out in the insurtech market.
        </p>

        {/* Implementation Process Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="w-full mt-8 mb-12 flex flex-col"
        >
          <ScrollableImageContainer
            src="/images/Betterview-phub-image+(2).png"
            alt="PartnerHub Development Process"
            caption="Development process documentation showing the transition from design concepts to functional implementation"
            frameType="browser"
            height="large"
            backgroundColor="transparent"
          />
        </motion.div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The launch of PartnerHub marked a significant milestone for Betterview, with immediate and measurable results that transformed how property risk assessments are conducted across the platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-accent-light/10 dark:bg-accent-dark/10 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Workflow Automation</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              PartnerHub automated critical aspects of property risk assessment workflows, reducing manual data aggregation and analysis time for underwriters by an estimated 60%.
            </p>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Enhanced Decision-Making</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              By providing comprehensive property risk profiles, the feature empowered insurers to make more informed decisions, improving policy recommendation accuracy.
            </p>
          </div>
        </div>

        <div className="bg-opal-light-blue dark:bg-opal-dark-blue p-8 rounded-lg mb-8">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Business Impact</h4>
          <ul className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 space-y-3">
            <li>• <strong>User Engagement:</strong> Measurable improvement in platform engagement metrics</li>
            <li>• <strong>Client Satisfaction:</strong> Received excellent feedback from users noting enhanced efficiency</li>
            <li>• <strong>Service Offering:</strong> Contributed to Betterview's competitive advantage in the insurtech market</li>
            <li>• <strong>Future Innovation:</strong> Set foundation for additional third-party integrations</li>
          </ul>
        </div>

        <div className="border border-accent-light/20 dark:border-accent-dark/20 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Related Innovation</h4>
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
          <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Key Takeaways</h3>
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
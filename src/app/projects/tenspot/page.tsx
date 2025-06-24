'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';

export default function TenSpotProject() {
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
          TenSpot Workforce Engagement Platform
        </h1>
        <ProjectSubtitle>
          The ultimate workforce engagement platform connecting teams through wellness, challenges, and community building
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Marketing Website Designer & Developer"
          employer="TenSpot"
          platforms="Marketing Website, Landing Pages, Brand Collateral"
          areas="Web Design, Front-End Development, Brand Design, Marketing Design"
          year="2016-2018"
        />
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 w-full relative aspect-[3/2] rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20"
      >
        <Image
          src="/images/tenspot-desk-purple-macbook-mockup.png"
          alt="TenSpot Platform Desktop Mockup"
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
          TenSpot was a pioneering workforce engagement platform that combined wellness programs, social challenges, and team building activities to create more connected and healthy workplace communities. As Marketing Website Designer and Developer, I was responsible for creating the complete digital marketing presence that communicated the platform's value to potential clients.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          My role focused on translating the complex platform capabilities into compelling marketing narratives, designing conversion-focused landing pages, and developing the complete website experience that helped TenSpot acquire enterprise clients and insurance partnerships.
        </p>
      </motion.section>

      {/* Platform Vision */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Platform Vision & Value Proposition</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Ultimate Engagement Platform</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
              Comprehensive workforce engagement solution combining wellness programs, social challenges, and team building activities to create healthier, more connected workplace communities.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">All-in-One Team Management</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
              Single platform for connecting, engaging, and managing teams with intuitive tools for communication, challenge participation, and progress tracking across the organization.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Insurance Partnership Value</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
              Strategic partnerships with insurance brokers focused on workplace wellness, providing measurable ROI through reduced healthcare costs and improved employee health outcomes.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Website Design & Development */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Website Design & Development</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          I designed and developed the complete TenSpot marketing website, creating a compelling narrative that communicated the platform's value to both employers and employees. The site needed to appeal to multiple audiences while maintaining a cohesive brand experience.
        </p>

        {/* Homepage Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full mb-12"
        >
          <ScrollableImageContainer
            src="/images/tenspot-January-Homepage.png"
            alt="TenSpot Homepage Design"
            caption="Homepage design featuring clear value proposition, engaging visuals, and conversion-focused layout"
            frameType="browser"
            height="large"
            backgroundColor="white"
            url="tenspot.com"
          />
        </motion.div>

        {/* About Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full mb-12"
        >
          <ScrollableImageContainer
            src="/images/tenspot-January-AboutUs.png"
            alt="TenSpot About Us Page"
            caption="About page showcasing team, mission, and company values with engaging storytelling"
            frameType="browser"
            height="large"
            backgroundColor="white"
            url="tenspot.com/about"
          />
        </motion.div>
      </motion.section>

      {/* Marketing Assets & Platform Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Marketing Assets & Platform Showcase</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          To effectively market TenSpot's platform capabilities, I created compelling visual assets that showcased the product in realistic contexts. These marketing materials helped potential clients understand the platform's value and envision it in their own workplace environments.
        </p>

        {/* Main Platform Marketing Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-12 w-full relative aspect-[3/2] rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20"
        >
          <Image
            src="/images/tenspot-imac-desk.png"
            alt="TenSpot Platform Marketing Showcase"
            fill
            className="object-contain p-8"
            sizes="(max-width: 1024px) 100vw, 100vw"
          />
        </motion.div>

        {/* Platform Variations for Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col mb-8"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <Image
              src="/images/tenspot-platform-mock-red.png"
              alt="TenSpot Platform Marketing Mockup"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-4">
            Marketing materials showcasing platform flexibility with different visual themes for various client presentations
          </p>
        </motion.div>
      </motion.section>

      {/* Marketing Challenge Presentations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Feature Marketing & Client Presentations</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          To help potential clients understand TenSpot's core value proposition, I created marketing materials that showcased the platform's social challenge features. These presentation assets demonstrated how the platform could drive engagement and build workplace community.
        </p>

        <div className="space-y-8 mb-12">
          {/* Individual Challenge Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
              <Image
                src="/images/tenspot-social-challenges.png"
                alt="TenSpot Individual Challenges Marketing Material"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-4">
              Marketing materials showcasing individual challenge features for client presentations
            </p>
          </motion.div>

          {/* Company Challenge Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
              <Image
                src="/images/tenspot-social-challenges companies.png"
                alt="TenSpot Company Challenges Marketing Material"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-4">
              Company-wide challenge marketing materials for enterprise client presentations
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Marketing Lifestyle & Context */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Lifestyle Marketing & Context</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          To help potential clients envision TenSpot in their workplace environments, I created lifestyle marketing materials that showed the platform being used in realistic contexts. These assets were crucial for sales presentations and marketing campaigns.
        </p>

        {/* Main Lifestyle Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12 w-full relative aspect-[3/2] rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20"
        >
          <Image
            src="/images/Ten-Spot_Lifestyle-Tablet Mockup-1.jpg"
            alt="TenSpot Lifestyle Marketing Photography"
            fill
            className="object-contain p-8"
            sizes="(max-width: 1024px) 100vw, 100vw"
          />
        </motion.div>

        {/* Additional Marketing Assets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col mb-8"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <Image
              src="/images/tenspot-ipad-on-demand mockup.png"
              alt="TenSpot Marketing Asset for iPad"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-4">
            Marketing materials showcasing platform accessibility across different devices and contexts
          </p>
        </motion.div>
      </motion.section>

      {/* Design System & Brand */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Marketing Design System & Brand Application</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          I developed a comprehensive marketing design system that balanced professionalism with approachability, ensuring the brand felt trustworthy to HR departments while remaining engaging and accessible. This system guided all marketing materials, website design, and client presentations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Marketing Visual Design</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Energetic, wellness-focused color palette</li>
              <li>• Professional yet approachable typography</li>
              <li>• Motivational imagery and iconography</li>
              <li>• Consistent brand application</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Website Experience</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Conversion-focused navigation</li>
              <li>• Clear value proposition presentation</li>
              <li>• Lead generation optimization</li>
              <li>• Multi-audience messaging</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Technical Implementation</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Responsive marketing website</li>
              <li>• SEO optimization</li>
              <li>• Performance optimization</li>
              <li>• Analytics integration</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Impact & Results */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Impact & Business Results</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          TenSpot successfully bridged the gap between employee wellness and business outcomes, creating measurable value for all stakeholders in the workplace wellness ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">Employee Engagement</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-3">
              The platform achieved high user engagement rates through its social features and gamification elements, making wellness activities feel like community building rather than corporate mandates.
            </p>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Consistent daily active usage and strong social interaction metrics across client companies.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">Insurance Partnership Value</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-3">
              The platform's data and engagement metrics provided valuable insights for insurance brokers, helping them demonstrate ROI on wellness programs to their clients.
            </p>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Successful partnerships with multiple insurance brokers and measurable health outcomes.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Key Learnings & Marketing Design Philosophy</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          TenSpot taught me the importance of translating complex platform capabilities into compelling marketing narratives that resonate with multiple stakeholders. The challenge was communicating the value of workplace wellness to both HR decision-makers and end users through cohesive marketing design.
        </p>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          This project demonstrated how effective marketing design can bridge the gap between innovative technology and business adoption, helping companies understand how wellness platforms can transform their workplace culture and deliver measurable ROI.
        </p>
      </motion.section>
    </article>
  );
}
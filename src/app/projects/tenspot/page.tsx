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
          role="Lead Product Designer & Developer"
          employer="TenSpot"
          platforms="Web Platform, Mobile, Insurance Integration"
          areas="Product Design, UX Research, Front-End Development, Brand Design"
          year="2016-2018"
        />
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 w-full relative aspect-[16/9] rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20"
      >
        <Image
          src="/images/tenspot-hero-laptop-mockup.png"
          alt="TenSpot Platform Hero Mockup"
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
          TenSpot was a pioneering workforce engagement platform that combined wellness programs, social challenges, and team building activities to create more connected and healthy workplace communities. As Lead Product Designer and Developer, I was responsible for the complete user experience, from initial concept through implementation.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          The platform served as a bridge between employees, employers, and insurance brokers, creating a comprehensive ecosystem for workplace wellness that drove engagement, reduced healthcare costs, and built stronger company cultures.
        </p>
      </motion.section>

      {/* Platform Vision */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8 text-text-light dark:text-text-dark">Platform Vision & Positioning</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Core Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/Ten-Spot-The-ultimate-workforce-engagement-platform-.png"
                alt="TenSpot Ultimate Workforce Engagement Platform"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Core platform positioning as the ultimate workforce engagement solution
            </p>
          </motion.div>

          {/* Team Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/Ten-Spot-Connect-Engage-and-Manage-your-team-all-in-one-platform-.png"
                alt="TenSpot Team Management Platform"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              All-in-one platform for connecting, engaging, and managing teams
            </p>
          </motion.div>

          {/* Insurance Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/Ten-Spot-An-insurance-broker-partnership-focused-on-workplace-wellness.png"
                alt="TenSpot Insurance Broker Partnership"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Strategic insurance broker partnerships focused on workplace wellness
            </p>
          </motion.div>
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

      {/* Platform Design */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Platform Interface Design</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The core platform interface needed to balance functionality with engagement, making workplace wellness activities feel fun and social rather than corporate and mandatory. I focused on creating an intuitive, game-like experience that encouraged participation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Desktop Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <Image
                src="/images/tenspot-imac-desk.png"
                alt="TenSpot Desktop Platform Interface"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Desktop platform interface showcasing dashboard, challenges, and team engagement features
            </p>
          </motion.div>

          {/* Platform Red Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/tenspot-platform-mock-red.png"
                alt="TenSpot Platform Red Theme Mockup"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Alternative platform design with energetic red theme for high-engagement campaigns
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Features & Challenges */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Social Challenges & Engagement</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The heart of TenSpot was its social challenge system, designed to make wellness activities competitive, collaborative, and fun. I created interfaces that encouraged both individual achievement and team participation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Individual Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/tenspot-social-challenges.png"
                alt="TenSpot Social Challenges Interface"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Social challenges interface encouraging individual participation and achievement tracking
            </p>
          </motion.div>

          {/* Company Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/tenspot-social-challenges companies.png"
                alt="TenSpot Company Challenges Interface"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Company-wide challenges fostering team collaboration and healthy competition
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile & Cross-Platform */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Mobile & Cross-Platform Experience</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Recognizing that engagement happens throughout the day, I designed responsive interfaces that worked seamlessly across desktop, tablet, and mobile devices. The mobile experience was optimized for quick check-ins and on-the-go participation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tablet Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20">
              <Image
                src="/images/Ten-Spot_Lifestyle-Tablet Mockup-1.jpg"
                alt="TenSpot Tablet Lifestyle Mockup"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              Tablet experience designed for casual browsing and team engagement during breaks
            </p>
          </motion.div>

          {/* iPad On-Demand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/tenspot-ipad-on-demand mockup.png"
                alt="TenSpot iPad On-Demand Features"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
              iPad interface featuring on-demand wellness content and interactive features
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Design System & Brand */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Design System & Brand Identity</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          I developed a comprehensive design system that balanced professionalism with approachability, ensuring the platform felt trustworthy to HR departments while remaining engaging for everyday employees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Visual Design</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Energetic color palette</li>
              <li>• Friendly, approachable typography</li>
              <li>• Game-like UI elements</li>
              <li>• Motivational iconography</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">User Experience</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Intuitive navigation</li>
              <li>• Progressive disclosure</li>
              <li>• Gamification elements</li>
              <li>• Social interaction patterns</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold mb-3 text-accent-light dark:text-accent-dark">Technical Implementation</h4>
            <ul className="space-y-1 text-sm text-text-light/80 dark:text-text-dark/80">
              <li>• Responsive design system</li>
              <li>• Cross-browser compatibility</li>
              <li>• Performance optimization</li>
              <li>• Accessibility standards</li>
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
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Key Learnings & Design Philosophy</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          TenSpot taught me the importance of designing for multiple stakeholders while maintaining a cohesive user experience. The challenge of making wellness engaging without feeling forced shaped my approach to motivation design and social features.
        </p>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          This project demonstrated how thoughtful UX design can transform traditionally dry corporate programs into engaging, community-building experiences that deliver real business value while genuinely improving people's lives.
        </p>
      </motion.section>
    </article>
  );
}
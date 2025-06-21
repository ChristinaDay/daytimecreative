'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';

export default function MakersquareProject() {
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
          Makersquare Logo Design, Branding & Marketing
        </h1>
        <ProjectSubtitle>
          Creating a comprehensive branding overhaul for a premier coding bootcamp
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Lead Designer"
          employer="MakerSquare"
          platforms="Print, Web, Interior"
          areas="Logo Design, Branding, Marketing Design, Product Design, Interior Design"
          year="2013-2014"
        />
      </motion.div>

      {/* Main Image - Hero Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 w-full relative aspect-[16/9] rounded-lg overflow-hidden flex items-center justify-center"
      >
        <img
          src="/images/makeersquare-logo.png"
          alt="MakerSquare Logo"
          className="w-auto h-auto max-w-[85%] max-h-[85%] object-contain"
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
          MakerSquare, now known as Hack Reactor, required a comprehensive branding overhaul to reflect its standing as a premier coding bootcamp. 
          The challenge was to create a visual identity that would resonate across its locations in Austin, San Francisco, New York and Los Angeles, 
          and solidify its brand in the competitive coding education market.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          As the Lead Designer, I was tasked with developing MakerSquare's new branding, which included creating a logo, updating the branding and 
          style guide in collaboration with the marketing team, and designing interior wall installations for each campus.
        </p>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Process</h3>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          I undertook the creative process to craft MakerSquare's new logo and visual elements, ensuring they aligned with the brand's educational 
          philosophy and appeal to a tech-savvy audience.
        </p>

        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          I collaborated with the marketing team to develop a cohesive branding update and style guide that would be integral to MakerSquare's identity.
        </p>

        {/* Austin Campus Sign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full mb-8 flex flex-col"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src="/images/makersquare-sign.jpeg"
              alt="MakerSquare Austin Congress Avenue Campus Sign"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            The original Makersquare campus was in Austin, Texas on busy, central Congress Avenue. An early iteration of the logo and wordmark were emblazoned on a custom sign.
          </p>
        </motion.div>

        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          I designed and executed various branded materials, including fliers, business cards, letterheads, and banners, which played a critical role in the brand refresh.
        </p>

        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          I also facilitated community engagement by designing promotional materials and orchestrating the venue for a talk by Alexis Ohanian, co-founder of Reddit, 
          at the MakerSquare Austin campus. This event was a testament to MakerSquare's growing influence and commitment to tech education.
        </p>

        {/* Reddit Event Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full mb-8 flex flex-col"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/images/makersquare-reddit.jpeg"
              alt="Alexis Ohanian Reddit Event at MakerSquare Austin"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Promotional materials for the Alexis Ohanian (Reddit co-founder) speaking event at MakerSquare Austin
          </p>
        </motion.div>

        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          In addition to developing the branding and style guide, I played a key role in MakerSquare's recognition at a national level, contributing to our invitation 
          to a White House summit focused on tech education.
        </p>

        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          The rebranding and my contributions to MakerSquare's educational mission were validated by the company's trust in my leadership and vision, demonstrated by 
          my relocation to San Francisco to spearhead the launch of the new campus.
        </p>
      </motion.section>

      {/* Logo Design & Brand Identity */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Logo Design & Brand Identity</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The MakerSquare logo needed to embody the intersection of craftsmanship and technology. The geometric "M" represents both the structural precision of code and the creative problem-solving mindset of makers. The square element reinforces the systematic approach to learning while maintaining approachability for students from diverse backgrounds.
        </p>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Typography and color choices were carefully selected to appeal to both technical professionals and career changers, balancing professionalism with the innovative spirit of the coding bootcamp movement.
        </p>
      </motion.section>

      {/* Branding Materials Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Comprehensive Brand System</h3>
        
        {/* Comprehensive Branding Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full mb-8 flex flex-col"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src="/images/Makersquare-Screen+Shot+2020-06-15+at+1.10.01+AM.png"
              alt="MakerSquare Comprehensive Branding Overview"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Comprehensive branding overview showcasing logo variations, typography, and brand guidelines
          </p>
        </motion.div>
        
        {/* Swag and Branded Materials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full mb-8 flex flex-col"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/images/makersquare-swag.jpeg"
              alt="MakerSquare Branded Materials and Swag"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Branded materials including business cards, stickers, and promotional swag developed for MakerSquare's comprehensive rebrand
          </p>
        </motion.div>

        {/* San Francisco Campus Shirts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-full mb-8 flex flex-col"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/images/makersquare-sanfran-shirts.jpeg"
              alt="MakerSquare San Francisco Campus Shirts and Environment"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight mt-2">
            Branded apparel and environmental design for the San Francisco campus launch
          </p>
        </motion.div>

        {/* LA Campus Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full mb-8 flex flex-col"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/images/makersquare-la-branding.jpeg"
              alt="MakerSquare Los Angeles Campus Branding"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-text-light/60 dark:text-text-dark/60 text-center leading-tight pt-2">
            Environmental branding and signage for the Los Angeles campus expansion
          </span>
        </motion.div>
      </motion.section>

      {/* Impact & Recognition */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Impact & Recognition</h3>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The comprehensive rebrand positioned MakerSquare as a leader in coding education, directly contributing to significant business milestones and industry recognition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">National Recognition</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-3">
              The rebrand helped secure MakerSquare's invitation to the White House Tech Education Summit, validating our position as an industry leader.
            </p>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Direct contribution to policy discussions on coding education and workforce development.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-3 text-accent-light dark:text-accent-dark">Multi-City Expansion</h4>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-3">
              Brand system successfully scaled across Austin, San Francisco, Los Angeles, and New York campuses.
            </p>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              Cohesive identity maintained across diverse markets and demographics.
            </p>
          </div>
        </div>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          The brand's strength was validated through high-profile speaking engagements, including hosting Reddit co-founder Alexis Ohanian, demonstrating MakerSquare's credibility within the tech ecosystem.
        </p>
      </motion.section>

      {/* Legacy & Acquisition */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Legacy & Acquisition</h3>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          The comprehensive branding work contributed to MakerSquare's eventual acquisition by Hack Reactor, with brand elements and design principles continuing to influence the combined organization's visual identity.
        </p>
        
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
          This project demonstrated how thoughtful brand design can support rapid scaling, community building, and industry recognition—lessons that continue to inform my approach to system design and brand development in subsequent roles.
        </p>
      </motion.section>
    </article>
  );
} 
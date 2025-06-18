'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const featuredProjects = [
  {
    title: 'HackerDAO',
    description: 'Brand identity and platform design for Web3 developers to collaborate and build together.',
    image: '/images/hackerdao-illustration-big.png',
    link: '/projects/hackerdao',
    tags: ['Brand Design', 'Product Design', 'Illustration'],
    year: '2023'
  },
  {
    title: 'Property Intelligence Platform',
    description: 'AI-powered platform transforming property data into actionable insights for insurance professionals.',
    image: '/images/betterview-propertyintelligence2.png',
    link: '/projects/propertyintelligence',
    tags: ['Product Strategy', 'UX Research', 'Data Visualization'],
    year: '2022-2024'
  },
  {
    title: 'ZeroCater',
    description: 'Subscription-based office snack and kitchen service for modern workplaces.',
    image: '/images/zerocater-snacks1.png',
    link: '/projects/snacks-and-kitchens',
    tags: ['Service Design', 'Growth Design', 'Mobile'],
    year: '2014-2017'
  }
];

const additionalProjects = [
  {
    title: 'PartnerHub',
    description: 'Third-party property data integration platform with customizable UI for insurance workflows.',
    image: '/images/betterview-partnerhub2.png',
    link: '/projects/partnerhub',
    tags: ['Enterprise UX', 'Data Integration', 'Dashboard Design'],
    year: '2023'
  },
  {
    title: 'Customizable UI System',
    description: 'Modular dashboard system empowering users to personalize their data visualization experience.',
    image: '/images/betterview-propertyintelligence1.png',
    link: '/projects/customizableui',
    tags: ['Design Systems', 'Component Library', 'User Personalization'],
    year: '2023'
  },
  {
    title: 'Spotlights Reporting',
    description: 'Transforming dynamic map data into accessible, exportable reports for insurance professionals.',
    image: '/images/betterview-spotlights1.png',
    link: '/projects/spotlightsreporting',
    tags: ['Data Visualization', 'Reporting', 'Maps'],
    year: '2022'
  },
  {
    title: 'MakerSquare Branding',
    description: 'Comprehensive branding overhaul for a premier coding bootcamp across multiple cities.',
    image: '/images/makeersquare-logo.png',
    link: '/projects/makersquare',
    tags: ['Brand Design', 'Logo Design', 'Identity Systems'],
    year: '2014'
  }
];

function ProjectCard({ project, featured = false }: { project: any, featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={project.link} className="block h-full">
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
          {featured ? (
            /* Featured card - horizontal layout on larger screens */
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative aspect-[16/9] lg:aspect-[3/2] lg:w-1/2 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-white/0 group-hover:from-black/5 group-hover:to-white/5 transition-all duration-300" />
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col lg:w-1/2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-accent-light dark:text-accent-dark font-semibold">{project.year}</span>
                  <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text-light dark:text-text-dark mb-4 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-light/80 dark:text-text-dark/80 mb-6 flex-1 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface-light/10 dark:bg-surface-dark/10 text-text-light/70 dark:text-text-dark/70 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Regular card - vertical layout */
            <>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-white/0 group-hover:from-black/5 group-hover:to-white/5 transition-all duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-accent-light dark:text-accent-dark font-semibold">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-light/80 dark:text-text-dark/80 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-surface-light/10 dark:bg-surface-dark/10 text-text-light/70 dark:text-text-dark/70 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-6">
            All Projects
          </h1>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto">
            A comprehensive look at my design work across product design, branding, and creative direction. 
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">Featured Work</h2>
            <p className="text-text-light/80 dark:text-text-dark/80">
              My most impactful projects that showcase the breadth of my design capabilities.
            </p>
          </motion.div>

          {/* First featured project - full width */}
          <div className="mb-8">
            <ProjectCard project={featuredProjects[0]} featured={true} />
          </div>
          
          {/* Remaining featured projects - regular grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredProjects.slice(1).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Additional Projects */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">Additional Work</h2>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Other significant projects that demonstrate specialized skills and creative problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </article>

      {/* Combined CTA Section - Full Width */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-gradient-to-br from-surface-light/5 to-accent-light/5 dark:from-surface-dark/5 dark:to-accent-dark/5 py-16 px-4 md:px-12 lg:px-20 mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            What's Next?
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto">
            Ready to collaborate on your next project, or curious about my creative process? 
            Let's connect and explore how thoughtful design can drive your goals forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Collaboration CTA */}
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center border border-white/30 dark:border-white/10 shadow-lg">
            <div className="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
              Let's Work Together
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-6 text-sm">
              I'm excited to take on new challenges and collaborate with teams who value user-centered design.
            </p>
            <Link 
              href="mailto:christina@christinamday.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 text-sm"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Creative Process CTA */}
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center border border-white/30 dark:border-white/10 shadow-lg">
            <div className="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
              Explore My Process
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-6 text-sm">
              Discover how hands-on fabrication work informs my digital design approach and creative thinking.
            </p>
            <Link 
              href="/art-fabrication" 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-light/30 dark:border-accent-dark/30 text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300 text-sm"
            >
              View Fabrication Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Additional Navigation */}
        <div className="text-center mt-8 pt-6 border-t border-text-light/10 dark:border-text-dark/10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
} 
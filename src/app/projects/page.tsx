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
      className={`group ${featured ? 'col-span-2' : ''}`}
    >
      <Link href={project.link} className="block">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className={`relative ${featured ? 'h-80' : 'h-64'} bg-gray-100 dark:bg-gray-700`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-accent-light dark:text-accent-dark font-semibold">{project.year}</span>
              {featured && (
                <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
              {project.title}
            </h3>
            <p className="text-text-light/80 dark:text-text-dark/80 mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
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
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 py-16 pb-12 md:pb-24 lg:pb-40">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Creative Work CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-surface-light/5 dark:bg-surface-dark/5 rounded-2xl p-12"
      >
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
          Explore My Creative Process
        </h2>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8 max-w-2xl mx-auto">
          Discover how my hands-on fabrication work informs my digital design approach. 
          See custom installations, art pieces, and the creative process behind them.
        </p>
        <Link 
          href="/art-fabrication" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300"
        >
          View Fabrication Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
          Interested in working together?
        </h2>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and collaborate with teams who value thoughtful, user-centered design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:christina@christinamday.com" 
            className="px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300"
          >
            Start a Conversation
          </Link>
          <Link 
            href="/" 
            className="px-8 py-4 border-2 border-text-light/20 dark:border-text-dark/20 text-text-light dark:text-text-dark rounded-lg font-semibold hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </motion.section>
    </article>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '../projects/ProjectCard';
import { featuredProjects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section id="featured-work" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto mb-8">
            Design and development projects showcasing technical implementation and systematic thinking
          </p>
        </motion.div>

        {/* Featured Project - Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <ProjectCard 
            project={featuredProjects[0]} 
            featured={true}
            className=""
          />
        </motion.div>

        {/* Additional Featured Projects - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.slice(1, 3).map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              className=""
            />
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a 
            href="/projects" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-light to-accent-light/80 dark:from-accent-dark dark:to-accent-dark/80 text-white dark:text-gray-900 rounded-lg font-semibold hover:from-accent-light/90 hover:to-accent-light/70 dark:hover:from-accent-dark/90 dark:hover:to-accent-dark/70 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '../projects/ProjectCard';

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "HackerDAO",
    description: "A decentralized autonomous organization platform for developers and hackers to collaborate on Web3 projects.",
    thumbnail: "/images/hackerdao-illustration-bw.png",
    slug: "hackerdao",
    tags: ["Ethereum", "Solidity", "Web3.js", "React"]
  },
  {
    title: "Property Intelligence Platform",
    description: "A sophisticated system leveraging AI and predictive analytics to transform property data into actionable insights for insurance underwriting.",
    thumbnail: "/images/BV_Platform_Screen_CAT-Response_Wildfire-Colorado_blur.jpg",
    slug: "propertyintelligence",
    tags: ["UX Design", "Product Design", "AI/ML", "Insurance Tech"]
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    thumbnail: "/images/hackerdao-illustration-bw.png",
    slug: "project-two",
    tags: ["Next.js", "Tailwind", "MongoDB"]
  },
  // Add more projects as needed
];

export function ProjectsSection() {
  return (
    <section className="py-16 px-2">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-text-light dark:text-text-dark"
      >
        Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
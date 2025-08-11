'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  year: string;
  bgColor?: string;
  // When true, render a constrained white background only behind the image area
  constrainWhiteBg?: boolean;
  // Role-specific content
  designLeaderDescription?: string;
  designLeaderTags?: string[];
  designHighlights?: string[];
  designerDeveloperDescription?: string;
  designerDeveloperTags?: string[];
  technicalHighlights?: string[];
  // Card image presentation controls
  imageFit?: 'contain' | 'cover';
  imagePosition?: 'top' | 'center' | 'bottom';
}

interface ProjectCardProps {
  project: ProjectData;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({ project, featured = false, className = '' }: ProjectCardProps) {
  // Use designer-developer content when available
  const description = project.designerDeveloperDescription || project.description;
  const tags = project.designerDeveloperTags || project.tags;
  const highlights = project.technicalHighlights;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`group ${className}`}
    >
      <Link href={project.link} className="block h-full">
        <div className={`bg-white/50 dark:bg-white/15 backdrop-blur-3xl border border-white/60 dark:border-white/30 rounded-xl shadow-2xl hover:shadow-3xl hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 overflow-hidden h-full flex flex-col ${featured ? 'lg:flex-row' : ''}`}>
          <div className={`relative ${featured ? 'lg:w-1/2' : ''} aspect-[4/3] ${
              project.constrainWhiteBg
                ? 'bg-transparent'
                : `bg-gradient-to-br ${project.bgColor || 'from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20'}`
            } overflow-hidden`}>
            {project.constrainWhiteBg ? (
              <div className="absolute inset-0 p-6">
                <div className="relative w-full h-full bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`${project.imageFit === 'cover' ? 'object-cover' : 'object-contain'} ${project.imagePosition === 'top' ? 'object-top' : project.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'} group-hover:scale-105 transition-transform duration-300`}
                    sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                </div>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`${project.imageFit === 'cover' ? 'object-cover' : 'object-contain'} ${project.imagePosition === 'top' ? 'object-top' : project.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'} p-6 group-hover:scale-105 transition-transform duration-300`}
                sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              />
            )}
          </div>
          
          <div className={`p-6 flex-1 flex flex-col ${featured ? 'lg:w-1/2' : ''}`}>
            <div className="mb-2">
              <h3 className={`font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
                {project.title}
              </h3>
              <span className="text-sm text-text-light/60 dark:text-text-dark/60">
                {project.year}
              </span>
            </div>
            
            <p className={`text-text-light/80 dark:text-text-dark/80 mb-4 flex-1 ${featured ? 'text-lg' : ''}`}>
              {description}
            </p>
            
            {/* Technical highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-text-light/90 dark:text-text-dark/90 mb-2">
                  Technical Implementation
                </h4>
                <ul className="space-y-1">
                  {highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="text-sm text-text-light/70 dark:text-text-dark/70 flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full mt-2 mr-2 bg-accent-light dark:bg-accent-dark" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.slice(0, featured ? 6 : 4).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 backdrop-blur-sm border text-xs rounded transition-colors bg-accent-light/10 dark:bg-accent-dark/10 border-accent-light/20 dark:border-accent-dark/20 text-accent-light dark:text-accent-dark"
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
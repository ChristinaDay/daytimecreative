'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative overflow-hidden rounded-lg bg-background-light/10 dark:bg-[#323849]/10 backdrop-blur-sm border-2 border-surface-light/10 dark:border-surface-dark/10 hover:border-accent-light/30 dark:hover:border-accent-dark/30 transition-all duration-300 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_20px_-8px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_16px_-6px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_20px_-8px_rgba(0,0,0,0.20)]">
        {/* Card Header */}
        <div className="p-3 border-b-2 border-surface-light/10 dark:border-surface-dark/10">
          <h3 className="text-lg font-bold text-text-light dark:text-text-dark text-center">
            {project.title}
          </h3>
        </div>

        {/* Image Section with white background */}
        <div className={`relative ${project.slug === 'customizableui' ? 'aspect-[4/4]' : 'aspect-[4/3]'} p-2`}>
          <div className="absolute inset-2 bg-white rounded-md" /> {/* Solid white background */}
          <div className="absolute inset-2 flex items-center justify-center">
            <div className="relative w-[90%] h-[90%]">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-3 border-t-2 border-surface-light/10 dark:border-surface-dark/10">
          <p className="text-sm text-text-light/80 dark:text-text-dark/80 line-clamp-2 mb-3">
            {project.description}
          </p>
          
          {/* Tags Section */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-surface-light/10 dark:bg-surface-dark/10 text-text-light dark:text-text-dark border border-surface-light/20 dark:border-surface-dark/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
} 
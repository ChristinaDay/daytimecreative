'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CyclingText from './ui/CyclingText';

export function FlexibleHeroText({ children }: { children?: React.ReactNode }) {
  const reliableWords = ['reliable', 'creative', 'gorgeous', 'innovative', 'scalable', 'beautiful'];
  const industryWords = ['B2B', 'computer vision', 'real estate tech', 'food tech', 'proptech', 'fintech'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="flex flex-col min-h-32 md:min-h-52 lg:min-h-60 justify-start">
        <h1 className="text-left text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-text-light dark:text-text-dark leading-relaxed mb-6 md:mb-8">
          I am an Oakland-based designer and developer building{' '}
          <CyclingText 
            words={reliableWords}
            interval={8000}
            fancyWords={['gorgeous']}
          />{' '}
          products for the modern{' '}
          <CyclingText 
            words={industryWords}
            interval={9500}
          />{' '}
          marketplace and beyond.
        </h1>
        <div className="mb-8 md:mb-12 relative z-20">{children}</div>
      </div>
    </motion.div>
  );
}

export function FlexibleBioText() {
  return (
    <div className="space-y-4 text-lg text-text-light/80 dark:text-text-dark/80 leading-relaxed">
      <p>
        I'm Christina, a product designer and front-end developer based in Oakland. 
        I've spent the last decade working with teams to build digital products—everything 
        from early prototypes at startups to enterprise platforms used by thousands of people.
      </p>
      <p>
        I like to work at the intersection of design and code. I think about implementation 
        while I'm designing, and I care about user experience when I'm coding. It tends to 
        make things move faster and work better.
      </p>
      <p>
        I build design systems with React, prototype with real data, and create interfaces 
        that developers can actually implement. This hybrid approach helps teams ship 
        better products faster.
      </p>
    </div>
  );
}

export function FlexibleSkillsSection() {
  const skills = {
    primary: [
      { label: 'Design Systems', description: 'Component libraries, design tokens, documentation' },
      { label: 'Front-End Development', description: 'React, TypeScript, modern CSS, performance optimization' },
      { label: 'Prototyping', description: 'Interactive prototypes, API integration, real data' },
    ],
    tools: {
      design: 'Figma, Adobe Creative Suite, Sketch, Principle, Framer',
      development: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion',
      workflow: 'Git, GitHub, Vercel, Linear, Storybook'
    }
  };

  return (
    <div className="space-y-6">
      {/* Primary Skills */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
          Technical Focus
        </h3>
        <div className="space-y-3">
          {skills.primary.map((skill, index) => (
            <div key={index}>
              <div className="text-sm font-medium text-text-light/90 dark:text-text-dark/90 mb-1">
                {skill.label}
              </div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                {skill.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Tools I use</h3>
        <div className="space-y-3">
          {Object.entries(skills.tools).map(([category, tools]) => (
            <div key={category}>
              <div className="text-sm font-medium text-text-light/90 dark:text-text-dark/90 mb-1 capitalize">
                {category}
              </div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                {tools}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FlexibleQuickStats() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '60%', label: 'Faster Development' },
    { value: '50+', label: 'Components Built' },
  ];

  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-3xl font-bold text-accent-light dark:text-accent-dark">
            {stat.value}
          </div>
          <div className="text-sm text-text-light/70 dark:text-text-dark/70">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
} 
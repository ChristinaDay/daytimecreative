'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CyclingText from './ui/CyclingText';

export function FlexibleHeroText({ children }: { children?: React.ReactNode }) {
  const reliableWords = ['reliable', 'creative', 'gorgeous', 'innovative', 'scalable', 'beautiful'];
  const industryWords = [
    'B2B',
    'computer vision',
    'real estate tech',
    'food tech',
    'proptech',
    'fintech',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="flex min-h-32 flex-col justify-start md:min-h-52 lg:min-h-60">
        <div className="grid">
          {/* Ghost h1 reserves max-wrap height so cycling words can't shift content below */}
          <h1
            aria-hidden="true"
            className="invisible col-start-1 row-start-1 mb-6 text-left font-serif text-4xl font-normal leading-relaxed md:mb-8 md:text-6xl lg:text-7xl"
          >
            I am an Oakland-based designer and developer building{' '}
            <span className="inline-block rounded px-1.5 py-0.5 font-medium md:px-2 md:py-1">
              innovative
            </span>{' '}
            products for the modern{' '}
            <span className="inline-block rounded px-1.5 py-0.5 font-medium md:px-2 md:py-1">
              real estate tech
            </span>{' '}
            marketplace and beyond.
          </h1>
          <h1 className="col-start-1 row-start-1 mb-6 text-left font-serif text-4xl font-normal leading-relaxed text-text-light dark:text-text-dark md:mb-8 md:text-6xl lg:text-7xl">
            I am an Oakland-based designer and developer building{' '}
            <CyclingText words={reliableWords} interval={8000} fancyWords={['gorgeous']} /> products
            for the modern <CyclingText words={industryWords} interval={9500} /> marketplace and
            beyond.
          </h1>
        </div>
        <div className="relative z-20 mb-8 md:mb-12">{children}</div>
      </div>
    </motion.div>
  );
}

export function FlexibleBioText() {
  return (
    <div className="space-y-4 text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80">
      <p>
        I'm Christina, a product designer and front-end developer based in Oakland. I've spent the
        last decade working with teams to build digital products, everything from early prototypes
        at startups to enterprise platforms used by thousands of people.
      </p>
      <p>
        I create design systems, prototype with real data, and build interfaces that developers
        can actually implement. This hybrid approach helps teams ship better products faster.
      </p>
      <p>
        Outside of product work, I work on my{' '}
        <a
          href="https://www.instagram.com/xtinamakes/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 underline-offset-2 transition-colors hover:text-accent-light dark:hover:text-accent-dark"
        >
          personal art practice
        </a>{' '}
        and help other artists and studios produce large-scale pieces that require multiple hands
        to finish.{' '}
        <Link
          href="/art-fabrication"
          className="underline decoration-1 underline-offset-2 transition-colors hover:text-accent-light dark:hover:text-accent-dark"
        >
          Check out some of that work here
        </Link>
        .
      </p>
    </div>
  );
}

export function FlexibleSkillsSection() {
  const skills = {
    primary: [
      { label: 'Design Systems', description: 'Component libraries, design tokens, documentation' },
      {
        label: 'Front-End Development',
        description: 'React, TypeScript, modern CSS, performance optimization',
      },
      { label: 'Prototyping', description: 'Interactive prototypes, API integration, real data' },
    ],
    tools: {
      design: 'Figma, Adobe Creative Suite, Sketch, Principle, Framer',
      development: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion',
      workflow: 'Git, GitHub, Vercel, Linear, Storybook',
    },
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
              <div className="mb-1 text-sm font-medium text-text-light/90 dark:text-text-dark/90">
                {skill.label}
              </div>
              <div className="text-xs leading-relaxed text-text-light/70 dark:text-text-dark/70">
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
              <div className="mb-1 text-sm font-medium capitalize text-text-light/90 dark:text-text-dark/90">
                {category}
              </div>
              <div className="text-xs leading-relaxed text-text-light/70 dark:text-text-dark/70">
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
          <div className="text-sm text-text-light/70 dark:text-text-dark/70">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

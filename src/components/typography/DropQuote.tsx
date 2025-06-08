import React from 'react';

interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

export function Blockquote({ children, className = '' }: BlockquoteProps) {
  return (
    <blockquote className={`font-serif italic text-left text-3xl md:text-4xl lg:text-5xl text-text-light dark:text-text-dark leading-heading mb-8 border-l-4 border-accent-light dark:border-accent-dark pl-6
    ${className}`}>
      {children}
    </blockquote>
  );
}

interface ProjectSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ProjectSubtitle({ children, className = '' }: ProjectSubtitleProps) {
  return (
    <h2 className={`font-serif italic text-left text-3xl md:text-4xl lg:text-5xl text-text-light dark:text-text-dark leading-heading mb-8 border-l-4 border-accent-light dark:border-accent-dark pl-6
    ${className}`}>
      {children}
    </h2>
  );
} 
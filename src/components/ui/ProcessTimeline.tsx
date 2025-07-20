'use client';

import { useState } from 'react';

export default function ProcessTimeline() {
  const [isHovered, setIsHovered] = useState(false);
  
  const timelineItems = [
    {
      title: "Framework Discovery",
      description: "Relearning Next.js and React patterns after the break. Discovering what had changed and what new approaches were available.",
      status: "completed"
    },
    {
      title: "Workflow Foundation",
      description: "Setting up the development environment and establishing the dual-mode workflow approach that would guide the entire project.",
      status: "completed"
    },
    {
      title: "Design System Discovery",
      description: "Exploring color palettes, typography scales, and discovering what patterns would work best for the content I had in mind.",
      status: "completed"
    },
    {
      title: "Component Exploration",
      description: "Building and testing reusable components, discovering which patterns were most effective and which needed iteration.",
      status: "completed"
    },
    {
      title: "Layout Experimentation",
      description: "Trying different navigation and layout approaches, discovering what worked best for the content structure.",
      status: "completed"
    },
    {
      title: "Content Discovery",
      description: "Exploring how to tell the story of each case study, discovering the right narrative structure and content strategy.",
      status: "completed"
    },
    {
      title: "Process Documentation",
      description: "Documenting the design and development process as it unfolded, discovering what was worth preserving for future use.",
      status: "completed"
    },
    {
      title: "Interactive Discovery",
      description: "Exploring animations, demos, and interactive elements to discover what would best showcase the technical approach.",
      status: "completed"
    },
    {
      title: "Performance Discovery",
      description: "Discovering the right image optimization and loading strategies for the specific content and user experience goals.",
      status: "completed"
    },
    {
      title: "System Refinement",
      description: "Discovering edge cases, optimizing the workflow, and refining the entire system based on real usage and feedback.",
      status: "current"
    }
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      <div 
        className="flex overflow-x-auto pb-8 gap-8 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {timelineItems.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-64">
            {/* Timeline dot */}
            <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${
              item.status === 'current' 
                ? 'bg-blue-500 border-blue-500' 
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }`}></div>
            
            {/* Content */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                {item.status === 'current' && (
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        
        {/* Hover overlay with scroll indicators */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent"></div>
            
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent"></div>
            
            {/* Scroll hint text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-2 rounded-lg text-xs font-medium shadow-lg">
                Scroll to see more →
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
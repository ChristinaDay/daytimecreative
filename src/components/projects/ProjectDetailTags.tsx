import React from 'react';

interface ProjectDetailTagsProps {
  role: string;
  employer: string;
  year: string;
  platforms: string;
  areas: string;
}

export const ProjectDetailTags: React.FC<ProjectDetailTagsProps> = ({ role, employer, year, platforms, areas }) => {
  // Helper function to split comma-separated strings into arrays
  const splitToTags = (str: string) => str.split(',').map(item => item.trim());

  return (
    <div className="detail-tags mt-12 space-y-8">
      {/* Basic info in a compact horizontal layout */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-lg">
        <div className="flex items-center gap-2">
          <span className="text-text-light/60 dark:text-text-dark/60 text-sm font-medium uppercase tracking-wide">Role:</span>
          <span className="text-text-light dark:text-text-dark font-medium">{role}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-text-light/60 dark:text-text-dark/60 text-sm font-medium uppercase tracking-wide">At:</span>
          <span className="text-text-light dark:text-text-dark font-medium">{employer}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-text-light/60 dark:text-text-dark/60 text-sm font-medium uppercase tracking-wide">Year:</span>
          <span className="text-text-light dark:text-text-dark font-medium">{year}</span>
        </div>
      </div>

      {/* Tech stack as tags */}
      <div>
        <div className="text-sm text-text-light/60 dark:text-text-dark/60 mb-3 tracking-wide uppercase font-medium">Platforms & Tools</div>
        <div className="flex flex-wrap gap-2">
          {splitToTags(platforms).map((platform, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-text-light/10 dark:bg-text-dark/10 text-text-light dark:text-text-dark text-sm rounded-full border border-text-light/20 dark:border-text-dark/20"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Areas as tags */}
      <div>
        <div className="text-sm text-text-light/60 dark:text-text-dark/60 mb-3 tracking-wide uppercase font-medium">Focus Areas</div>
        <div className="flex flex-wrap gap-2">
          {splitToTags(areas).map((area, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark text-sm rounded-full border border-accent-light/30 dark:border-accent-dark/30"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}; 
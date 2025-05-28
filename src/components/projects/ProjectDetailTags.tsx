import React from 'react';

interface ProjectDetailTagsProps {
  role: string;
  employer: string;
  year: string;
  platforms: string;
  areas: string;
}

export const ProjectDetailTags: React.FC<ProjectDetailTagsProps> = ({ role, employer, year, platforms, areas }) => (
  <div className="detail-tags grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-12 mt-12">
    <div>
      <div className="text-sm text-text-light/60 dark:text-text-dark/60 mb-1 tracking-wide uppercase font-medium">Role</div>
      <div className="text-lg text-text-light dark:text-text-dark font-normal">{role}</div>
    </div>
    <div>
      <div className="text-sm text-text-light/60 dark:text-text-dark/60 mb-1 tracking-wide uppercase font-medium">Employer</div>
      <div className="text-lg text-text-light dark:text-text-dark font-normal">{employer}</div>
    </div>
    <div>
      <div className="text-sm text-text-light/60 dark:text-text-dark/60 mb-1 tracking-wide uppercase font-medium">Year</div>
      <div className="text-lg text-text-light dark:text-text-dark font-normal">{year}</div>
    </div>
    <div>
      <div className="text-sm text-text-light/60 dark:text-text-dark/60 mb-1 tracking-wide uppercase font-medium">Platforms</div>
      <div className="text-lg text-text-light dark:text-text-dark font-normal">{platforms}</div>
    </div>
    <div>
      <div className="text-sm text-text-light/60 dark:text-text-dark/60 mb-1 tracking-wide uppercase font-medium">Areas</div>
      <div className="text-lg text-text-light dark:text-text-dark font-normal">{areas}</div>
    </div>
  </div>
); 
'use client';

import React from 'react';

type ResumeDownloadLinkProps = {
  className?: string;
  children?: React.ReactNode;
  // Optional override for file name on download attribute
  downloadFileName?: string;
};

const PDF_NAME = 'Resume-ChristinaDay2025.pdf';
const GITHUB_RAW_URL = `https://raw.githubusercontent.com/ChristinaDay/daytimecreative/main/public/images/${PDF_NAME}`;

export function ResumeDownloadLink({ className, children, downloadFileName = 'Christina_Day_Resume_2025.pdf' }: ResumeDownloadLinkProps) {
  const explicit = process.env.NEXT_PUBLIC_RESUME_URL || '';
  const href = explicit || GITHUB_RAW_URL;
  return (
    <a href={href} download={downloadFileName} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ResumeDownloadLink;



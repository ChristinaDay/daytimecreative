'use client';

import React, { useEffect, useMemo, useState } from 'react';

type ResumeDownloadLinkProps = {
  className?: string;
  children?: React.ReactNode;
  // Optional override for file name on download attribute
  downloadFileName?: string;
};

const PDF_NAME = 'Resume-ChristinaDay2025.pdf';

export function ResumeDownloadLink({ className, children, downloadFileName = 'Christina_Day_Resume_2025.pdf' }: ResumeDownloadLinkProps) {
  const [href, setHref] = useState<string>('');

  const candidates = useMemo(() => {
    if (typeof window === 'undefined') return [] as string[];
    const origin = window.location.origin;
    const pathParts = window.location.pathname.split('/').filter(Boolean);

    // Build a relative candidate like "images/..." and also one directory up "../images/..."
    const relative = `images/${PDF_NAME}`;
    const oneUp = `../images/${PDF_NAME}`;

    // Absolute at site root
    const rootAbsolute = `/images/${PDF_NAME}`;

    // Absolute with origin
    const absoluteOrigin = `${origin}/images/${PDF_NAME}`;

    // Optional external CDN env
    const externalCdn = (process.env.NEXT_PUBLIC_EXTERNAL_CDN_URL || '').replace(/\/$/, '');
    const external = externalCdn ? `${externalCdn}/images/${PDF_NAME}` : '';

    // Try order: origin-absolute, root-absolute, path-relative, one-up relative, external CDN (if available)
    const urls: string[] = [absoluteOrigin, rootAbsolute, relative, oneUp];
    if (external) urls.push(external);
    return urls;
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function resolveFirstWorkingUrl() {
      for (const url of candidates) {
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res.ok) {
            if (!cancelled) setHref(url);
            return;
          }
        } catch (_) {
          // continue trying next candidate
        }
      }
      // As a very last resort, set to root path to allow manual correction if needed
      if (!cancelled) setHref(`/images/${PDF_NAME}`);
    }
    resolveFirstWorkingUrl();
    return () => {
      cancelled = true;
    };
  }, [candidates]);

  return (
    <a href={href || '#'} download={downloadFileName} className={className}>
      {children}
    </a>
  );
}

export default ResumeDownloadLink;



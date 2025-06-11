'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-light/20 dark:bg-[#323849]/20 backdrop-blur-sm border-b border-surface-light/20 dark:border-transparent px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-none mx-auto">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-text-light dark:text-white">
              daytime creative ⚆
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:christinamday@gmail.com" className="text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark">
              Contact
            </a>
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-surface-light/20 dark:hover:bg-surface-dark/20"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === 'light' ? (
                <svg className="w-5 h-5 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : mounted && resolvedTheme === 'dark' ? (
                <svg className="w-5 h-5 text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Debug logging
    console.log('Navbar mounted, resolvedTheme:', resolvedTheme);
    
    // Force theme reset if there are issues
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme && storedTheme !== resolvedTheme) {
        console.log('Theme mismatch detected, resetting...');
        setTheme(storedTheme);
      }
    }
  }, [resolvedTheme, setTheme]);

  return (
    <nav key={`navbar-${resolvedTheme}-${mounted}`} className="fixed top-0 left-0 right-0 z-[100] bg-background-light/20 dark:bg-[#323849]/20 backdrop-blur-sm border-b border-surface-light/20 dark:border-transparent px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 shadow-md">
      <div className="max-w-none mx-auto">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="text-base sm:text-lg md:text-xl font-semibold text-text-light dark:text-white">
              daytime creative ⚆
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/projects" className="text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark">
              Projects
            </Link>
            <Link href="/resume" className="text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark">
              Resume
            </Link>
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-surface-light/20 dark:hover:bg-surface-dark/20"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === 'light' ? (
                <svg className="w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : mounted && resolvedTheme === 'dark' ? (
                <svg className="w-4 h-4 text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : null}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-surface-light/20 dark:hover:bg-surface-dark/20"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5 text-text-light dark:text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-text-light dark:text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background-light/95 dark:bg-[#323849]/95 backdrop-blur-md border-b border-surface-light/20 dark:border-surface-dark/20">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/projects" 
                className="block text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/resume" 
                className="block text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </Link>
              <a 
                href="mailto:christinamday@gmail.com" 
                className="block text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
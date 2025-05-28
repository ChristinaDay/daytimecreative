import Link from 'next/link';

export default function ComponentLibraryPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-[rgb(178,148,198)]">
        Component Library
      </h1>
      <p className="mb-12 text-center text-lg text-text-light dark:text-text-dark">
        Explore and test reusable UI and SVG components for this project. Click a section below to view available components and usage examples.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg border border-surface-light/20 dark:border-surface-dark/20 bg-background-light/40 dark:bg-background-dark/40 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-[rgb(178,148,198)]">UI Components</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-text-light dark:text-text-dark">(Add UI component demo links here)</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-surface-light/20 dark:border-surface-dark/20 bg-background-light/40 dark:bg-background-dark/40 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-[rgb(178,148,198)]">SVG Components</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/component-library/svg/animated-pulse-circle" className="text-accent-light dark:text-accent-dark hover:underline">
                AnimatedPulseCircle
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
} 
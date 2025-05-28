import Link from 'next/link';

const caseStudies = [
  {
    title: 'HackerDAO',
    description:
      'A decentralized autonomous organization platform for developers and hackers to collaborate on Web3 projects.',
    link: '/projects/hackerdao',
  },
  {
    title: 'Property Intelligence Platform',
    description:
      'A sophisticated system leveraging AI and predictive analytics to transform property data into actionable insights for insurance underwriting.',
    link: '/projects/propertyintelligence',
  },
  // Add more case studies as needed
];

export default function NarrativeHome() {
  return (
    <main className="relative min-h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Holographic gradient overlays */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.3), rgba(173, 216, 230, 0.3), rgba(221, 160, 221, 0.3))',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      <div 
        className="absolute top-0 right-0 w-[20vw] h-[20vw] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.3), transparent 70%)',
          transform: 'translate(10%, -10%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[20vw] h-[20vw] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.3), transparent 70%)',
          transform: 'translate(-10%, 10%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[25vw] h-[25vw] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(221, 160, 221, 0.22), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      {/* Hero area */}
      <header className="relative z-10 w-full min-h-[70vh] flex flex-col justify-between">
        {/* Large headline */}
        <div className="flex flex-col items-start justify-center flex-1 px-8 py-16">
          <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark max-w-4xl leading-hero">
            I'm Christina, a designer based in Oakland, CA.<br />
            I specialize in product design, UX, and creative direction for web, apps, and brands.
          </h1>
        </div>
        {/* Down arrow */}
        <div className="absolute left-8 bottom-8">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="8" x2="18" y2="28" stroke="currentColor" strokeWidth="2" />
            <polyline points="10,22 18,30 26,22" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </header>
      {/* Full-bleed case studies */}
      <section className="w-full max-w-6xl mx-auto mt-8 z-10 px-2">
        <h3 className="text-2xl font-semibold mb-10 text-center text-[rgb(178,148,198)]">Case Studies</h3>
        <div className="flex flex-col gap-16">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.title}
              className={`w-full flex flex-col md:flex-row items-center md:items-stretch md:gap-8 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1 flex flex-col justify-center px-6 md:px-0 text-left md:text-left">
                <h4 className="text-2xl font-bold mb-2 text-text-light dark:text-text-dark">{cs.title}</h4>
                <p className="mb-4 text-lg text-text-light/80 dark:text-text-dark/80">{cs.description}</p>
                <Link href={cs.link} className="text-accent-light dark:text-accent-dark hover:underline font-medium">
                  Read more
                </Link>
              </div>
              {/* Placeholder for image or visual accent */}
              <div className="flex-1 flex items-center justify-center min-h-[180px]">
                <div className="w-full h-40 md:h-56 bg-surface-light/30 dark:bg-surface-dark/30 rounded-lg shadow-inner" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 
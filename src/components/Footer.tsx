import Link from 'next/link';

const footerTextColor = 'text-[rgb(178,148,198)]';

export default function Footer() {
  return (
    <footer className="w-full h-64 -mt-16 bg-slate-100 dark:bg-gray-800 border-t-2 border-gray-300 dark:border-surface-dark/20 relative z-50 flex items-center pt-16">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Link href="/" className="group">
              <h2 className="font-sans text-lg font-semibold mb-1 text-text-light dark:text-white group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors cursor-pointer">
                daytime creative ⚆
              </h2>
            </Link>
            <p className="text-xs text-[rgb(178,148,198)]">
              Design Portfolio of Christina Day
            </p>
            <div className="mt-2 text-xs text-[rgb(178,148,198)]">
              ©{new Date().getFullYear()}
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-3">
              <Link 
                href="/art-fabrication" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                FabLab! Art Fabrication & Installation ✰
              </Link>
            </div>
            <div className="flex gap-3">
              <a 
                href="mailto:christinamday@gmail.com" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                Contact
              </a>
              <Link 
                href="/resume" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                Resume
              </Link>
              <a 
                href="mailto:christinamday@gmail.com" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                Email ✉︎
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                LinkedIn ⎆
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                GitHub ⎆
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                Instagram ⎆
              </a>
              <a 
                href="https://dribbble.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                Dribbble ⎆
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
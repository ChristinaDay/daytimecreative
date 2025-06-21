import Link from 'next/link';

const footerTextColor = 'text-[rgb(178,148,198)]';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-300/30 dark:border-surface-dark/10 relative z-50 py-16">
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
          
          <div className="flex flex-col items-center md:items-end gap-3">
            {/* Art Fabrication Link */}
            <div className="text-center md:text-right">
              <Link 
                href="/art-fabrication" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium text-sm`}
              >
                FabLab! Art Fabrication & Installation ✰
              </Link>
            </div>
            
            {/* Main Navigation Links */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center">
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
            </div>
            
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center">
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
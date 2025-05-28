import Link from 'next/link';

const footerTextColor = 'text-[rgb(178,148,198)]';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-surface-light/20 dark:border-surface-dark/20 dark:bg-[#0f172a]">
      <div className="max-w-[100rem] mx-auto px-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="font-sans text-xl font-semibold mb-2 text-text-light dark:text-white">
              daytime creative ⚆
            </h2>
            <p className="text-sm text-[rgb(178,148,198)]">
              Design Portfolio of Christina Day
            </p>
            <div className="mt-4 text-sm text-[rgb(178,148,198)]">
              ©{new Date().getFullYear()}
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <Link 
                href="/contact" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium`}
              >
                Contact
              </Link>
              <Link 
                href="/resume" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium`}
              >
                Resume ✰
              </Link>
            </div>
            <div className="flex gap-4">
              <a 
                href="mailto:your.email@example.com" 
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium`}
              >
                Email ✉︎
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium`}
              >
                LinkedIn ⎆
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium`}
              >
                GitHub ⎆
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium`}
              >
                Instagram ⎆
              </a>
              <a 
                href="https://dribbble.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${footerTextColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium`}
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
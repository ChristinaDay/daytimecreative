'use client';

import { motion } from 'framer-motion';

interface ScrollableImageContainerProps {
  src: string;
  alt: string;
  caption?: string;
  frameType?: 'browser' | 'laptop' | 'none';
  height?: 'small' | 'medium' | 'large';
  backgroundColor?: 'white' | 'transparent';
  className?: string;
  url?: string;
}

export function ScrollableImageContainer({
  src,
  alt,
  caption,
  frameType = 'browser',
  height = 'medium',
  backgroundColor = 'white',
  className = '',
  url = 'example.com'
}: ScrollableImageContainerProps) {
  const heightClasses = {
    small: 'h-80',
    medium: 'h-96',
    large: 'h-[32rem]'
  };

  const backgroundClasses = backgroundColor === 'white' ? 'bg-white' : 'bg-transparent';
  const outerBackgroundClasses = backgroundColor === 'white' ? 'bg-gray-100 dark:bg-gray-800' : 'bg-transparent';

  const containerContent = (
    <div className={`${backgroundClasses} ${heightClasses[height]} overflow-y-auto border-x border-b border-gray-300 dark:border-gray-600 rounded-b-lg relative group`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto" 
      />
      
      {/* Scroll indicator overlay - appears on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-lg flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Scroll to explore</span>
          <div className="animate-bounce">
            <svg 
              className="w-4 h-4 text-gray-700 dark:text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const browserFrame = (
    <>
      {/* Browser frame */}
      <div className="bg-gray-800 dark:bg-gray-900 rounded-t-lg px-4 py-3 flex items-center space-x-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 bg-gray-700 dark:bg-gray-600 rounded px-3 py-1 text-xs text-gray-300">
          {url}
        </div>
      </div>
      {containerContent}
    </>
  );

  return (
    <div className={`w-full ${className}`}>
      {frameType === 'laptop' ? (
        <div className="relative">
          {/* Laptop mockup */}
          <div className="relative mx-auto max-w-7xl">
            {/* Laptop perspective container */}
            <div className="relative" style={{ perspective: '1200px' }}>
              {/* Laptop screen (slightly tilted back) */}
              <div 
                className="relative mx-auto bg-gray-800 rounded-t-3xl shadow-2xl"
                style={{ 
                  transform: 'rotateX(-2deg)',
                  transformStyle: 'preserve-3d',
                  width: '100%',
                  maxWidth: '900px'
                }}
              >
                {/* Screen outer bezel */}
                <div className="bg-gray-900 rounded-t-3xl p-6 pb-8">
                  {/* Screen inner bezel */}
                  <div className="bg-black rounded-2xl p-4">
                    {/* Actual screen content */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden">
                      {browserFrame}
                    </div>
                  </div>
                  {/* Apple logo */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 bg-gray-600 rounded-sm opacity-40"></div>
                  </div>
                </div>
              </div>
              
              {/* Laptop base/keyboard area */}
              <div 
                className="relative mx-auto bg-gradient-to-b from-gray-700 to-gray-800 shadow-2xl"
                style={{ 
                  transform: 'rotateX(65deg) translateZ(-20px)',
                  transformOrigin: 'top',
                  width: '100%',
                  maxWidth: '900px',
                  height: '320px',
                  borderRadius: '0 0 24px 24px'
                }}
              >
                {/* Keyboard area */}
                <div className="absolute inset-4 top-8">
                  {/* Keyboard grid */}
                  <div className="grid grid-cols-14 gap-1 mb-6">
                    {/* Generate keyboard keys */}
                    {Array.from({ length: 56 }, (_, i) => (
                      <div 
                        key={i} 
                        className="bg-gray-600 rounded-sm h-6 shadow-sm"
                        style={{ 
                          opacity: 0.8,
                          width: i === 13 || i === 27 || i === 41 ? '40px' : '24px' // Some keys wider
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Trackpad */}
                  <div className="mx-auto mt-8 w-32 h-20 bg-gray-600 rounded-xl shadow-inner opacity-60"></div>
                </div>
                
                {/* Laptop edge highlight */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gray-500 opacity-50"></div>
              </div>
              
              {/* Laptop shadow */}
              <div 
                className="absolute -bottom-8 left-8 right-8 h-8 bg-black/20 rounded-full blur-xl"
                style={{ transform: 'rotateX(90deg) translateZ(-40px)' }}
              ></div>
            </div>
          </div>
          
          {caption && (
            <p className="text-center mt-12 text-sm text-text-light/60 dark:text-text-dark/60">
              {caption} • Scroll to explore the full interface
            </p>
          )}
        </div>
      ) : frameType === 'browser' ? (
        <div className={`relative ${outerBackgroundClasses} p-6 rounded-xl`}>
          <div className="mx-auto max-w-4xl">
            {browserFrame}
          </div>
          {caption && (
            <p className="text-center mt-4 text-sm text-text-light/60 dark:text-text-dark/60">
              {caption} • Scroll to explore the full interface
            </p>
          )}
        </div>
      ) : (
        <div className="relative">
          <div className={`border border-gray-300 dark:border-gray-600 rounded-lg ${heightClasses[height]} overflow-y-auto`}>
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto" 
            />
          </div>
          {caption && (
            <p className="text-center mt-4 text-sm text-text-light/60 dark:text-text-dark/60">
              {caption} • Scroll to explore
            </p>
          )}
        </div>
      )}
    </div>
  );
} 
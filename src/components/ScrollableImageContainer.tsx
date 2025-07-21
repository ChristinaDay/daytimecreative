'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useCallback, useEffect } from 'react';

interface ScrollableImageContainerProps {
  src: string;
  alt: string;
  caption?: string;
  frameType?: 'browser' | 'laptop' | 'phone' | 'viewport' | 'none';
  height?: 'small' | 'medium' | 'large' | 'phone' | 'viewport';
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
    large: 'h-[32rem]',
    phone: 'h-[44rem]',
    viewport: 'h-[60vh]'
  };

  const backgroundClasses = backgroundColor === 'white' ? 'bg-white' : 'bg-transparent';
  const outerBackgroundClasses = backgroundColor === 'white' ? 'bg-gray-100 dark:bg-gray-800' : 'bg-transparent';

  const ScrollableContainer = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleScroll = () => {
        setShowOverlay(false);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div 
        ref={containerRef}
        className={`${backgroundClasses} ${heightClasses[height]} overflow-y-auto border-x border-b border-gray-300 dark:border-gray-600 rounded-b-lg relative group`}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto" 
          style={{ minHeight: '120%', width: '100%', height: 'auto' }}
        />
        
        {/* Scroll indicator overlay - appears on hover and disappears on scroll */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center pointer-events-none ${
          showOverlay ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
        }`}>
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
  };

  const containerContent = <ScrollableContainer />;

  const NoFrameScrollableContainer = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleScroll = () => {
        setShowOverlay(false);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div 
        ref={containerRef}
        className={`border border-gray-300 dark:border-gray-600 rounded-lg ${heightClasses[height]} overflow-y-auto relative group`}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto" 
          style={{ minHeight: '120%', width: '100%', height: 'auto' }}
        />
        
        {/* Scroll indicator overlay - appears on hover and disappears on scroll */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center pointer-events-none ${
          showOverlay ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
        }`}>
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
  };

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

  const PhoneScrollableContainer = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleScroll = () => {
        setShowOverlay(false);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className={`${backgroundClasses} overflow-y-auto relative group`} style={{ height: '38rem' }}>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto" 
          style={{ minHeight: '120%', width: '100%', height: 'auto' }}
        />
        
        {/* Scroll indicator overlay - appears on hover and disappears on scroll */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center pointer-events-none ${
          showOverlay ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
        }`}>
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
  };

  const phoneFrame = (
    <div className="relative mx-auto w-80 max-w-sm">
      {/* Phone outer frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Phone screen */}
        <div className="bg-black rounded-[2.25rem] overflow-hidden">
          {/* Dynamic Island/Notch */}
          <div className="relative bg-black h-8 flex items-center justify-center">
            <div className="w-28 h-5 bg-black rounded-full border border-gray-700"></div>
          </div>
          
          {/* Scrollable content area */}
          <PhoneScrollableContainer />
          
          {/* Home indicator */}
          <div className="bg-black h-6 flex items-center justify-center">
            <div className="w-24 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Phone side buttons */}
        <div className="absolute left-0 top-20 w-1 h-6 bg-gray-700 rounded-r-lg -translate-x-1"></div>
        <div className="absolute left-0 top-32 w-1 h-10 bg-gray-700 rounded-r-lg -translate-x-1"></div>
        <div className="absolute left-0 top-44 w-1 h-10 bg-gray-700 rounded-r-lg -translate-x-1"></div>
        <div className="absolute right-0 top-28 w-1 h-12 bg-gray-700 rounded-l-lg translate-x-1"></div>
      </div>
    </div>
  );

  // Viewport frame with drag-to-pan functionality
  const ViewportFrame = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }, [position]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
      if (!isDragging) return;
      
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }, [isDragging, dragStart]);

    const handleMouseUp = useCallback(() => {
      setIsDragging(false);
    }, []);

    return (
      <div 
        className={`relative w-full ${heightClasses[height]} ${backgroundClasses} border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden cursor-grab ${isDragging ? 'cursor-grabbing' : ''} group`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img 
          src={src} 
          alt={alt} 
          className="absolute object-contain pointer-events-none select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            maxWidth: 'none',
            height: 'auto',
            minWidth: '150%',
            minHeight: '150%'
          }}
          draggable={false}
        />
        
        {/* Drag hint overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-lg flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Click and drag to explore</span>
            <div className="text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full ${className}`}>
      {frameType === 'viewport' ? (
        <div className="relative">
          <ViewportFrame />
          {caption && (
            <p className="text-center mt-4 text-sm text-text-light/60 dark:text-text-dark/60">
              {caption} • Click and drag to explore
            </p>
          )}
        </div>
      ) : frameType === 'phone' ? (
        <div className="relative">
          {phoneFrame}
          {caption && (
            <p className="text-center mt-6 text-sm text-text-light/60 dark:text-text-dark/60">
              {caption} • Scroll to explore the full interface
            </p>
          )}
        </div>
      ) : frameType === 'laptop' ? (
        <div className="relative">
          {/* Clean laptop mockup */}
          <div className="relative mx-auto max-w-5xl">
            {/* Laptop screen */}
            <div className="relative bg-gray-800 rounded-t-2xl shadow-2xl p-6">
              {/* Screen bezel */}
              <div className="bg-black rounded-xl p-4">
                {/* Screen content */}
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  {browserFrame}
                </div>
              </div>
              
              {/* Apple logo */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-gray-600 rounded-sm opacity-40"></div>
              </div>
            </div>
            
            {/* Laptop base (simplified) */}
            <div className="relative bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl h-8 shadow-lg">
              {/* Simple hinge line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gray-600 opacity-50"></div>
            </div>
            
            {/* Drop shadow */}
            <div className="absolute -bottom-4 left-4 right-4 h-6 bg-black/20 rounded-full blur-xl"></div>
          </div>
          
          {caption && (
            <p className="text-center mt-8 text-sm text-text-light/60 dark:text-text-dark/60">
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
          <NoFrameScrollableContainer />
          {caption && (
            <p className="text-center mt-4 text-sm text-text-light/60 dark:text-text-dark/60">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
} 
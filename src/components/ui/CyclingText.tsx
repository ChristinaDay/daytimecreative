import React, { useState, useEffect, useRef } from 'react';

interface CyclingTextProps {
  words: string[];
  interval?: number;
  className?: string;
  fancyWords?: string[]; // Words that should use fancy styling
}

export default function CyclingText({ 
  words, 
  interval = 3000, 
  className = '',
  fancyWords = [] 
}: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [minWidth, setMinWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure minimum width based on "B2B" without extra padding
  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.textContent = 'B2B';
      const b2bWidth = measureRef.current.offsetWidth;
      setMinWidth(b2bWidth + 16); // Account for px-2 padding
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping(true);
      
      // Fade out current text
      setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, 400);

      // Start typing new text after fade out
      setTimeout(() => {
        const newWord = words[(currentIndex + 1) % words.length];
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          setDisplayText(newWord.substring(0, charIndex + 1));
          charIndex++;
          
          if (charIndex >= newWord.length) {
            clearInterval(typeInterval);
            setIsTyping(false);
          }
        }, 60); // Character typing speed
      }, 600);
      
    }, interval);

    return () => clearInterval(timer);
  }, [words, currentIndex, interval]);

  // Initialize display text with first word
  useEffect(() => {
    if (displayText === '') {
      setDisplayText(words[0]);
    }
  }, [words, displayText]);

  const currentWord = displayText || words[currentIndex];
  const isFancyWord = fancyWords.includes(currentWord);

  // Cohesive, professional color palette
  const magnetColors = [
    'bg-slate-600',
    'bg-slate-700', 
    'bg-gray-600',
    'bg-zinc-600',
    'bg-neutral-600',
    'bg-stone-600'
  ];

  const currentColor = magnetColors[currentIndex % magnetColors.length];

  return (
    <>
      {/* Hidden measurement element */}
      <span 
        ref={measureRef}
        className={`absolute -top-full opacity-0 pointer-events-none px-2 py-1 rounded font-medium ${className}`}
        style={{ whiteSpace: 'nowrap' }}
      >
        B2B
      </span>
      
      {/* Visible cycling text with typing effect */}
      <span 
        className={`relative inline-block align-baseline ${className}`}
        style={{ 
          minWidth: minWidth > 0 ? `${minWidth}px` : '3em',
          verticalAlign: 'baseline'
        }}
      >
        <span 
          className={`
            inline-block text-center transition-opacity duration-500 ease-out
            px-2 py-1 rounded border-0
            ${currentColor} text-white font-medium tracking-normal
            ${displayText === '' ? 'opacity-0' : 'opacity-100'}
            ${isFancyWord ? 'font-serif italic bg-gradient-to-r from-purple-500 to-pink-500' : ''}
          `}
          style={{ 
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            verticalAlign: 'baseline'
          }}
        >
          {currentWord}
          {isTyping && displayText !== '' && (
            <span className="animate-pulse">|</span>
          )}
        </span>
      </span>
    </>
  );
} 
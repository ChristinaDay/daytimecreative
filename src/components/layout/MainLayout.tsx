'use client';

import { Navbar } from './Navbar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Footer from '../Footer';


export function MainLayout({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-[#0f172a] text-text-light dark:text-text-dark relative overflow-hidden flex flex-col">
      {/* Light mode daytime sky background */}
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          background: 'linear-gradient(to bottom, #b6d6f9 0%, #eaf6ff 100%)',
          opacity: 1,
        }}
      />
      {/* Sun glow (light mode only) */}
      <div
        className="absolute top-[-10vw] left-[-10vw] w-[40vw] h-[40vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #fffbe6 0%, #ffe9a7 40%, transparent 80%)',
          opacity: 0.45,
          filter: 'blur(30px)',
        }}
      />
      {/* Clouds (light mode only) */}
      <div
        className="absolute top-[20%] left-[10%] w-[30vw] h-[10vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #fff 60%, #eaf6ff 100%)',
          opacity: 0.7,
          filter: 'blur(24px)',
        }}
      />
      <div
        className="absolute top-[35%] left-[50%] w-[40vw] h-[12vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #fff 60%, #b6d6f9 100%)',
          opacity: 0.5,
          filter: 'blur(32px)',
        }}
      />
      <div
        className="absolute bottom-[15%] left-[30%] w-[35vw] h-[10vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #fff 60%, #eaf6ff 100%)',
          opacity: 0.6,
          filter: 'blur(28px)',
        }}
      />
      
      {/* Base gradient layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.3), rgba(173, 216, 230, 0.3), rgba(221, 160, 221, 0.3))',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      
      {/* Pink light leak from top right */}
      <div 
        className="absolute top-0 right-0 w-[20vw] h-[20vw]"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.3), transparent 70%)',
          transform: 'translate(10%, -10%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      
      {/* Blue light leak from bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-[20vw] h-[20vw]"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.3), transparent 70%)',
          transform: 'translate(-10%, 10%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      
      {/* Purple light leak from center */}
      <div 
        className="absolute top-1/2 left-1/2 w-[25vw] h-[25vw]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(221, 160, 221, 0.22), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />

      <Navbar />
      <main className="flex-1 mt-4 px-4 md:px-12 lg:px-20 relative z-20 mb-24">
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 
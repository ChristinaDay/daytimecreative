"use client";

import React from 'react';

interface AuroraBackgroundProps {
  zIndexClass?: string; // e.g., "z-10" or "z-[12]"
}

// Fixed, full-viewport aurora layers used across pages. Matches the art-fabrication page styling.
export function AuroraBackground({ zIndexClass = "z-[30]" }: AuroraBackgroundProps) {
  return (
    <div className={`fixed inset-0 hidden dark:block pointer-events-none ${zIndexClass}`}>
      {/* Base aurora haze */}
      <div
        className="fixed inset-0"
        style={{
          background:
            'radial-gradient(60% 85% at 12% 45%, rgba(var(--aurora-teal), 0.28) 0%, rgba(11,16,34,0) 88%), ' +
            'radial-gradient(60% 85% at 88% 50%, rgba(var(--aurora-magenta), 0.26) 0%, rgba(11,16,34,0) 88%), ' +
            'radial-gradient(85% 70% at 50% -8%, rgba(var(--aurora-purple), 0.22) 0%, rgba(11,16,34,0) 90%), ' +
            'radial-gradient(85% 75% at 50% 108%, rgba(var(--aurora-teal), 0.20) 0%, rgba(11,16,34,0) 90%)',
          mixBlendMode: 'screen',
          filter: 'blur(22px)'
        }}
      />

      {/* Full overlay wash to extend color across entire viewport */}
      <div
        className="fixed inset-0 opacity-70"
        style={{
          background:
            'linear-gradient(180deg, rgba(18,26,52,0) 0%, rgba(18,26,52,0.35) 60%, rgba(18,26,52,0.55) 100%)'
        }}
      />

      {/* Soft vertical gradient wash for top/bottom balancing */}
      <div
        className="fixed inset-0"
        style={{
          background:
            'linear-gradient( to right, rgba(106,79,179,0.12), rgba(11,16,34,0.0), rgba(200,80,192,0.12) )',
          filter: 'blur(18px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Horizon band */}
      <div
        className="fixed left-[-15vw] right-[-15vw] top-[52%] h-[48vh] aurora-drift aurora-pulse-fast aurora-ribbon"
        style={{
          background:
            'linear-gradient(90deg, rgba(106,79,179,0) 0%, rgba(200,80,192,0.22) 12%, rgba(127,230,176,0.44) 48%, rgba(35,189,184,0.34) 68%, rgba(200,80,192,0.16) 88%, rgba(106,79,179,0) 100%)',
          backgroundSize: '200% 100%',
          filter: 'blur(36px)',
          transform: 'translateY(-50%)'
        }}
      />

      {/* Wide glows to fill sides */}
      <div
        className="fixed top-[-4%] left-[-15%] w-[85vw] h-[90vh] aurora-animate-med aurora-pulse-slow"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(var(--aurora-teal), 0.26) 0%, rgba(11,16,34,0) 70%)',
          filter: 'blur(32px)'
        }}
      />
      <div
        className="fixed top-[-6%] right-[-10%] w-[85vw] h-[90vh] aurora-animate-med aurora-pulse-slow"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(var(--aurora-magenta), 0.22) 0%, rgba(11,16,34,0) 72%)',
          filter: 'blur(32px)'
        }}
      />

      {/* Bottom glows to extend vertical coverage */}
      <div
        className="fixed bottom-[-12%] left-[-12%] w-[85vw] h-[90vh] aurora-animate-slow"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(var(--aurora-purple), 0.16) 0%, rgba(11,16,34,0) 78%)',
          filter: 'blur(42px)'
        }}
      />
      <div
        className="fixed bottom-[-14%] right-[-12%] w-[85vw] h-[90vh] aurora-animate-slow"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 44%, rgba(var(--aurora-rose), 0.14) 0%, rgba(11,16,34,0) 80%)',
          filter: 'blur(42px)'
        }}
      />

      {/* Vertical beams */}
      <div
        className="fixed top-[6%] left-[12%] w-[9vw] h-[70vh] aurora-animate-fast"
        style={{
          background: 'linear-gradient(to bottom, rgba(200,80,192,0) 0%, rgba(200,80,192,0.3) 40%, rgba(127,230,176,0.24) 70%, rgba(11,16,34,0) 100%)',
          filter: 'blur(30px)',
          transform: 'rotate(-6deg)'
        }}
      />
      <div
        className="fixed top-[4%] left-[38%] w-[8vw] h-[68vh] aurora-animate-fast"
        style={{
          background: 'linear-gradient(to bottom, rgba(106,79,179,0) 0%, rgba(106,79,179,0.28) 35%, rgba(127,230,176,0.24) 65%, rgba(11,16,34,0) 100%)',
          filter: 'blur(28px)',
          transform: 'rotate(4deg)'
        }}
      />
      <div
        className="fixed top-[8%] right-[14%] w-[10vw] h-[66vh] aurora-animate-fast"
        style={{
          background: 'linear-gradient(to bottom, rgba(35,189,184,0) 0%, rgba(35,189,184,0.28) 45%, rgba(200,80,192,0.2) 75%, rgba(11,16,34,0) 100%)',
          filter: 'blur(30px)',
          transform: 'rotate(-2deg)'
        }}
      />
      <div
        className="fixed top-[12%] left-[58%] w-[6vw] h-[60vh] aurora-animate-fast"
        style={{
          background: 'linear-gradient(to bottom, rgba(127,230,176,0) 0%, rgba(127,230,176,0.22) 40%, rgba(35,189,184,0.18) 70%, rgba(11,16,34,0) 100%)',
          filter: 'blur(26px)',
          transform: 'rotate(2deg)'
        }}
      />

      {/* Edge feather vignette and bottom fade */}
      <div
        className="fixed inset-0"
        style={{
          background:
            'radial-gradient(130% 110% at 50% 50%, rgba(11,16,34,0) 58%, rgba(11,16,34,0.16) 80%, rgba(11,16,34,0.34) 100%)'
        }}
      />
      <div
        className="fixed inset-x-0 bottom-0 h-[35vh]"
        style={{
          background: 'linear-gradient(to bottom, rgba(11,16,34,0) 0%, rgba(11,16,34,0.28) 40%, rgba(11,16,34,0.7) 100%)',
          filter: 'blur(18px)',
          height: '50vh'
        }}
      />
    </div>
  );
}



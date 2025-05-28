'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Star {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  opacity: number;
}

// Add twinkle CSS animation
const twinkleStyle = `
@keyframes twinkle {
  0%, 100% { opacity: VAR_OPACITY; }
  50% { opacity: VAR_OPACITY_HALF; }
}
@keyframes pulse {
  0%, 100% { opacity: VAR_OPACITY; }
  50% { opacity: VAR_OPACITY_MIN; }
}
`;

export function StarfieldSVG() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [stars, setStars] = useState<Star[]>([]);
  const [satellitePath, setSatellitePath] = useState('');

  // Generate stars only on client-side
  useEffect(() => {
    const generateStars = () => {
      const stars = [];
      const clusters = [
        // Cluster 1 - Top right
        { x: 900, y: 120, radius: 50, count: 8 },
        // Cluster 2 - Center
        { x: 720, y: 450, radius: 60, count: 10 },
        // Cluster 3 - Bottom left
        { x: 300, y: 700, radius: 45, count: 7 },
        // Cluster 4 - Top left
        { x: 200, y: 200, radius: 40, count: 6 },
        // Cluster 5 - Bottom right
        { x: 1000, y: 600, radius: 55, count: 9 },
      ];

      // Generate clustered stars
      clusters.forEach(cluster => {
        for (let i = 0; i < cluster.count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * cluster.radius;
          const cx = cluster.x + Math.cos(angle) * distance;
          const cy = cluster.y + Math.sin(angle) * distance;
          const r = Math.random() * 1.5 + 0.8;
          const opacity = Math.random() * 0.5 + 0.5;
          const colors = ['#fff', '#5cc6ff', '#ffd1dc', '#ff6b6b', '#fffbe6'];
          const fill = colors[Math.floor(Math.random() * colors.length)];
          
          stars.push({ cx, cy, r, fill, opacity });
        }
      });

      // Add some random stars throughout the space
      for (let i = 0; i < 40; i++) {
        const cx = Math.random() * 1440;
        const cy = Math.random() * 900;
        const r = Math.random() * 1.2 + 0.6;
        const opacity = Math.random() * 0.3 + 0.2;
        const colors = ['#fff', '#5cc6ff', '#ffd1dc'];
        const fill = colors[Math.floor(Math.random() * colors.length)];
        
        stars.push({ cx, cy, r, fill, opacity });
      }

      return stars;
    };

    setStars(generateStars());

    // Generate satellite path
    const startX = Math.random() * 100 + 20;
    const startY = Math.random() * 60 + 100;
    const endX = Math.random() * 100 + 1320;
    const endY = Math.random() * 60 + 100;
    const controlX = (startX + endX) / 2 + (Math.random() * 40 - 20);
    const controlY = Math.min(startY, endY) - (Math.random() * 40 + 20);
    const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
    setSatellitePath(path);

    // Inject styles
    if (typeof window !== 'undefined') {
      if (!document.getElementById('twinkle-style')) {
        const style = document.createElement('style');
        style.id = 'twinkle-style';
        style.innerHTML = twinkleStyle;
        document.head.appendChild(style);
      }
    }
  }, []);

  // Only render a few faint stars in light mode
  const faintStars = stars.slice(0, 8).map((star, i) => ({
    ...star,
    opacity: 0.08 + Math.random() * 0.07,
    fill: '#b6d6f9',
  }));

  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 1440 900"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 10,
        opacity: 0.9,
        mixBlendMode: 'screen',
      }}
      className="dark:block"
    >
      {/* Only render Scorpio constellation in dark mode */}
      {isDark && stars.length > 0 && (() => {
        const scorpioStars = [
          { cx: 1100, cy: 700 }, // Antares
          { cx: 1120, cy: 740 },
          { cx: 1140, cy: 780 },
          { cx: 1160, cy: 820 },
          { cx: 1180, cy: 860 },
          { cx: 1200, cy: 880 },
          { cx: 1130, cy: 670 },
          { cx: 1150, cy: 640 },
          { cx: 1170, cy: 610 },
        ];
        // Order for connecting lines (main curve)
        const lineOrder = [0, 1, 2, 3, 4, 5];
        const upperOrder = [0, 6, 7, 8];
        return (
          <g>
            {/* Pulsating connecting lines (main curve) */}
            {lineOrder.slice(0, -1).map((idx, i) => {
              const from = scorpioStars[lineOrder[i]];
              const to = scorpioStars[lineOrder[i + 1]];
              // CSS pulse animation
              const duration = (3.2 + i * 0.1).toFixed(2) + 's';
              const delay = (i * 0.3).toFixed(2) + 's';
              const pulseKeyframes = `@keyframes pulse-main-${i} { 0%, 100% { opacity: 0.7; } 50% { opacity: 0.15; } }`;
              if (typeof window !== 'undefined' && !document.getElementById(`pulse-main-style-${i}`)) {
                const style = document.createElement('style');
                style.id = `pulse-main-style-${i}`;
                style.innerHTML = pulseKeyframes;
                document.head.appendChild(style);
              }
              return (
                <line
                  key={`scorpio-line-main-${i}`}
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke="#fffbe6"
                  strokeWidth={2.2}
                  opacity={0.7}
                  filter="url(#line-glow)"
                  className={`pulse-main-${i}`}
                  style={{
                    animation: `pulse-main-${i} ${duration} linear ${delay} infinite`,
                    willChange: 'opacity',
                  }}
                />
              );
            })}
            {/* Pulsating connecting lines (upper arc) */}
            {upperOrder.slice(0, -1).map((idx, i) => {
              const from = scorpioStars[upperOrder[i]];
              const to = scorpioStars[upperOrder[i + 1]];
              // CSS pulse animation
              const duration = (2.8 + i * 0.1).toFixed(2) + 's';
              const delay = (i * 0.25 + 0.5).toFixed(2) + 's';
              const pulseKeyframes = `@keyframes pulse-upper-${i} { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.1; } }`;
              if (typeof window !== 'undefined' && !document.getElementById(`pulse-upper-style-${i}`)) {
                const style = document.createElement('style');
                style.id = `pulse-upper-style-${i}`;
                style.innerHTML = pulseKeyframes;
                document.head.appendChild(style);
              }
              return (
                <line
                  key={`scorpio-line-upper-${i}`}
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke="#5cc6ff"
                  strokeWidth={1.7}
                  opacity={0.5}
                  filter="url(#line-glow)"
                  className={`pulse-upper-${i}`}
                  style={{
                    animation: `pulse-upper-${i} ${duration} linear ${delay} infinite`,
                    willChange: 'opacity',
                  }}
                />
              );
            })}
            {/* Stars */}
            {[
              { cx: 1100, cy: 700, r: 5, fill: '#fffbe6', glow: true }, // Antares
              { cx: 1120, cy: 740, r: 3.2, fill: '#5cc6ff', glow: true },
              { cx: 1140, cy: 780, r: 2.8, fill: '#fff', glow: true },
              { cx: 1160, cy: 820, r: 2.5, fill: '#ffd1dc', glow: true },
              { cx: 1180, cy: 860, r: 2.2, fill: '#fff', glow: true },
              { cx: 1200, cy: 880, r: 2, fill: '#fffbe6', glow: true },
              { cx: 1130, cy: 670, r: 2.7, fill: '#fff', glow: true },
              { cx: 1150, cy: 640, r: 2.3, fill: '#5cc6ff', glow: true },
              { cx: 1170, cy: 610, r: 2, fill: '#fff', glow: true },
            ].map((star, i) => (
              <g key={`scorpio-${i}`}>
                <circle
                  cx={star.cx}
                  cy={star.cy}
                  r={star.r}
                  fill={star.fill}
                  opacity={0.95}
                  filter="url(#glow)"
                />
              </g>
            ))}
          </g>
        );
      })()}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Random and clustered stars */}
      {(isDark ? stars : faintStars).map((star, i) => {
        // Randomize duration and delay for each star
        const duration = (Math.random() * 2 + 1).toFixed(2) + 's';
        const delay = (Math.random() * 2).toFixed(2) + 's';
        // Replace VAR_OPACITY and VAR_OPACITY_HALF in keyframes for each star
        const starTwinkle = `@keyframes twinkle${i} { 0%, 100% { opacity: ${star.opacity}; } 50% { opacity: ${star.opacity * 0.5}; } }`;
        // Inject per-star keyframes
        if (typeof window !== 'undefined' && !document.getElementById(`twinkle-style-${i}`)) {
          const style = document.createElement('style');
          style.id = `twinkle-style-${i}`;
          style.innerHTML = starTwinkle;
          document.head.appendChild(style);
        }
        return (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill={star.fill}
            opacity={star.opacity}
            className={`twinkle${i}`}
            style={{
              animation: `twinkle${i} ${duration} linear ${delay} infinite`,
              willChange: 'opacity',
            }}
          />
        );
      })}
      {/* Shooting star animation */}
      <g>
        <defs>
          <linearGradient id="shooting-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="comet-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id="shooting-path" d="M 200 200 L 1200 700" />
          {/* Simple glowy streak with gradient tail */}
          <path id="comet-shape" d="M0,0 L-40,0 L0,2 L40,0 Z" />
          {/* Satellite path for animateMotion */}
          {satellitePath && <path id="satellite-path" d={satellitePath} />}
        </defs>
        <g>
          <use
            href="#comet-shape"
            fill="url(#shooting-gradient)"
            filter="url(#comet-glow)"
            transform="scale(2)"
            opacity="0.8"
          >
            <animateMotion
              dur="20s"
              repeatCount="indefinite"
              path="M 200 200 L 1200 700"
              rotate="auto"
              keyPoints="0;1;1"
              keyTimes="0;0.15;1"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              values="0;0.8;0.8;0;0"
              keyTimes="0;0.07;0.07;0.1;1"
              dur="20s"
              repeatCount="indefinite"
            />
          </use>
        </g>
        {/* Satellite dot animation */}
        {satellitePath && (
          <circle r="0.8" fill="#fff" filter="url(#comet-glow)">
            <animateMotion
              dur="12s"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              path={satellitePath}
            />
            <animate
              attributeName="opacity"
              values="0;1;0;1;0"
              keyTimes="0;0.2;0.5;0.7;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        )}
      </g>
    </svg>
  );
} 
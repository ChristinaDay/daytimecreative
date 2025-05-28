import React from 'react';

export function AnimatedPulseCircle({ size = 100, color = 'rgb(178,148,198)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        strokeWidth="4"
        fill="none"
      >
        <animate
          attributeName="r"
          values="40;45;40"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
} 
import React from 'react';
import { useTheme } from 'next-themes';

interface CascadeSVGProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

export const CascadeSVG: React.FC<CascadeSVGProps> = ({ 
  className = "", 
  width = "100%", 
  height = "auto",
  style,
  ...props 
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div 
      className={`cascade-svg-wrapper ${className}`}
      style={{
        width,
        height,
        ...style,
        '--cascade-primary': isDark ? '#1e40af' : '#0ea5e9',        // Blue - main waterfall color
        '--cascade-secondary': isDark ? '#1e293b' : '#bae6fd',      // Light blue - secondary elements
        '--cascade-accent': isDark ? '#334155' : '#7dd3fc',         // Sky blue - accent elements
        '--cascade-dark': isDark ? '#0f172a' : '#1e293b',          // Dark slate - deep shadows
        '--cascade-light': isDark ? '#475569' : '#f0f9ff',         // Light - highlights
        '--cascade-medium': isDark ? '#64748b' : '#e0f2fe',        // Medium tone - mid-range elements
        '--cascade-gradient-start': isDark ? '#0f172a' : '#f8fafc',
        '--cascade-gradient-end': isDark ? '#334155' : '#cbd5e1',
        transition: 'all 300ms ease-in-out'
      } as React.CSSProperties & Record<string, string>}
      {...props}
    >
      <style>
        {`
          .cascade-svg-wrapper svg .st0 { fill: var(--cascade-dark) !important; }
          .cascade-svg-wrapper svg .st1 { fill: var(--cascade-light) !important; }
          .cascade-svg-wrapper svg .st2 { fill: var(--cascade-accent) !important; }
          .cascade-svg-wrapper svg .st3 { fill: var(--cascade-secondary) !important; }
          .cascade-svg-wrapper svg .st4 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st5 { fill: var(--cascade-medium) !important; }
          .cascade-svg-wrapper svg .st6 { fill: var(--cascade-accent) !important; }
          .cascade-svg-wrapper svg .st7 { fill: var(--cascade-secondary) !important; }
          .cascade-svg-wrapper svg .st8 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st9 { fill: var(--cascade-medium) !important; }
          .cascade-svg-wrapper svg .st10 { fill: var(--cascade-light) !important; }
          .cascade-svg-wrapper svg .st11 { fill: var(--cascade-dark) !important; }
          .cascade-svg-wrapper svg .st12 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st13 { fill: var(--cascade-medium) !important; }
          .cascade-svg-wrapper svg .st14 { fill: var(--cascade-accent) !important; }
          .cascade-svg-wrapper svg .st15 { fill: var(--cascade-secondary) !important; }
          .cascade-svg-wrapper svg .st16 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st17 { fill: var(--cascade-accent) !important; }
          .cascade-svg-wrapper svg .st18 { fill: var(--cascade-light) !important; }
          .cascade-svg-wrapper svg .st19 { fill: var(--cascade-medium) !important; }
          .cascade-svg-wrapper svg .st20 { fill: var(--cascade-dark) !important; }
          .cascade-svg-wrapper svg .st21 { fill: var(--cascade-secondary) !important; }
          .cascade-svg-wrapper svg .st22 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st23 { opacity: .6; }
          .cascade-svg-wrapper svg .st24 { fill: var(--cascade-accent) !important; }
          .cascade-svg-wrapper svg .st25 { fill: var(--cascade-dark) !important; }
          .cascade-svg-wrapper svg .st26 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st27 { fill: var(--cascade-light) !important; }
          .cascade-svg-wrapper svg .st28 { fill: var(--cascade-light) !important; }
          .cascade-svg-wrapper svg .st29 { fill: var(--cascade-medium) !important; }
          .cascade-svg-wrapper svg .st30 { fill: var(--cascade-accent) !important; }
          .cascade-svg-wrapper svg .st31 { fill: var(--cascade-dark) !important; }
          .cascade-svg-wrapper svg .st32 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st33 { fill: var(--cascade-secondary) !important; }
          .cascade-svg-wrapper svg .st34 { fill: var(--cascade-accent) !important; }
          .cascade-svg-wrapper svg .st35 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st36 { fill: var(--cascade-secondary) !important; }
          .cascade-svg-wrapper svg .st37 { fill: var(--cascade-secondary) !important; }
          .cascade-svg-wrapper svg .st38 { fill: var(--cascade-primary) !important; }
          .cascade-svg-wrapper svg .st39 { fill: var(--cascade-medium) !important; }
          .cascade-svg-wrapper svg .st40 { fill: var(--cascade-accent) !important; }
        `}
      </style>
      
      <svg 
        id="cascade-svg" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        version="1.1" 
        viewBox="0 0 1086.4 407.5"
        style={{ width: '100%', height: 'auto' }}
      >
        <defs>
          <linearGradient id="linear-gradient" x1="787" y1="431.4" x2="752.8" y2="175.5" gradientTransform="translate(0 410) scale(1 -1)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--cascade-dark)"/>
            <stop offset=".4" stopColor="var(--cascade-dark)"/>
            <stop offset=".6" stopColor="var(--cascade-medium)"/>
            <stop offset=".7" stopColor="var(--cascade-medium)"/>
            <stop offset=".8" stopColor="var(--cascade-accent)"/>
            <stop offset=".9" stopColor="var(--cascade-secondary)"/>
            <stop offset=".9" stopColor="var(--cascade-primary)"/>
            <stop offset="1" stopColor="var(--cascade-light)"/>
          </linearGradient>
        </defs>
        
        {/* Main waterfall cascade - this is just a sample, we'd need the complete structure */}
        <rect className="st0" x="0" y="0" width="100" height="100" />
        <rect className="st1" x="100" y="0" width="100" height="100" />
        <rect className="st2" x="200" y="0" width="100" height="100" />
        <rect className="st3" x="300" y="0" width="100" height="100" />
        <rect className="st11" x="0" y="100" width="100" height="100" />
        <rect className="st12" x="100" y="100" width="100" height="100" />
        <rect className="st13" x="200" y="100" width="100" height="100" />
        <rect className="st15" x="300" y="100" width="100" height="100" />
      </svg>
    </div>
  );
}; 
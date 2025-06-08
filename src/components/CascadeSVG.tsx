'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Color mappings for theme-based color replacement
const colorMappings = {
  light: {
    // Architecture/building colors - warm earth tones for daytime
    '#191919': '#8B4513', // Dark brown -> Saddle brown
    '#232323': '#A0522D', // Dark gray -> Sienna  
    '#1f1f1f': '#8B4513', // Very dark -> Saddle brown
    '#111': '#654321',     // Black -> Dark brown
    '#212121': '#A0522D',  // Dark -> Sienna
    '#292929': '#CD853F',  // Medium dark -> Peru
    '#353535': '#DEB887',  // Medium -> Burlywood
    '#343434': '#DEB887',  // Medium -> Burlywood
    '#404040': '#F4A460',  // Light medium -> Sandy brown
    '#4b4b4b': '#F4A460',  // Light medium -> Sandy brown
    '#4c4c4c': '#F4A460',  // Light medium -> Sandy brown
    '#535353': '#F5DEB3',  // Light -> Wheat
    '#5f5f5f': '#F5DEB3',  // Light -> Wheat
    '#6b6b6b': '#F5F5DC',  // Very light -> Beige
    '#646464': '#F5F5DC',  // Very light -> Beige
    
    // Foliage/vegetation colors - warm greens
    '#474747': '#228B22', // Dark gray -> Forest green
    '#777': '#32CD32',    // Medium gray -> Lime green  
    '#787878': '#90EE90', // Light gray -> Light green
    '#797979': '#90EE90', // Light gray -> Light green
    '#7d7d7d': '#98FB98', // Light gray -> Pale green
    
    // Accent/detail colors - warm tones
    '#828282': '#DAA520', // Gray -> Goldenrod
    '#8f8f8f': '#F0E68C', // Light gray -> Khaki
    '#919191': '#F0E68C', // Light gray -> Khaki
    '#a8a8a8': '#FFFFE0', // Very light -> Light yellow
    '#acacac': '#FFFACD', // Very light -> Lemon chiffon
    '#afafaf': '#FFFACD', // Very light -> Lemon chiffon
    '#b9b9b9': '#FFF8DC', // Lightest -> Cornsilk
    '#bebebe': '#FFF8DC', // Lightest -> Cornsilk
  },
  dark: {
    // Architecture/building colors - cool blues and purples for night
    '#191919': '#1a1a2e', // Dark brown -> Dark navy
    '#232323': '#16213e', // Dark gray -> Darker blue
    '#1f1f1f': '#0f1419', // Very dark -> Very dark blue
    '#111': '#0f1419',     // Black -> Very dark blue
    '#212121': '#1a1a2e',  // Dark -> Dark navy
    '#292929': '#16213e',  // Medium dark -> Darker blue
    '#353535': '#533a7d',  // Medium -> Dark purple
    '#343434': '#533a7d',  // Medium -> Dark purple
    '#404040': '#6b46c1',  // Light medium -> Purple
    '#4b4b4b': '#7c3aed',  // Light medium -> Violet
    '#4c4c4c': '#7c3aed',  // Light medium -> Violet
    '#535353': '#8b5cf6',  // Light -> Light purple
    '#5f5f5f': '#a78bfa',  // Light -> Lighter purple
    '#6b6b6b': '#c4b5fd',  // Very light -> Very light purple
    '#646464': '#c4b5fd',  // Very light -> Very light purple
    
    // Foliage/vegetation colors - cool teals and blues
    '#474747': '#0d4f3c', // Dark gray -> Dark teal
    '#777': '#0f766e',    // Medium gray -> Teal  
    '#787878': '#14b8a6', // Light gray -> Light teal
    '#797979': '#14b8a6', // Light gray -> Light teal
    '#7d7d7d': '#5eead4', // Light gray -> Very light teal
    
    // Accent/detail colors - cool tones
    '#828282': '#1e40af', // Gray -> Blue
    '#8f8f8f': '#3b82f6', // Light gray -> Light blue
    '#919191': '#3b82f6', // Light gray -> Light blue
    '#a8a8a8': '#60a5fa', // Very light -> Very light blue
    '#acacac': '#93c5fd', // Very light -> Pale blue
    '#afafaf': '#93c5fd', // Very light -> Pale blue
    '#b9b9b9': '#dbeafe', // Lightest -> Very pale blue
    '#bebebe': '#dbeafe', // Lightest -> Very pale blue
  }
};

export default function CascadeSVG() {
  const { resolvedTheme } = useTheme();
  const [svgContent, setSvgContent] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const response = await fetch('/images/cascade.svg');
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    loadSVG();
  }, []);

  const getThemedSVG = () => {
    if (!svgContent || !mounted) return svgContent;

    const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
    const mappings = colorMappings[theme];
    let themedSVG = svgContent;

    // Replace inline fill colors
    Object.entries(mappings).forEach(([originalColor, newColor]) => {
      // Replace inline style fills
      const inlineStyleRegex = new RegExp(`style="fill:\\s*${originalColor.replace('#', '\\#')};?"`, 'gi');
      themedSVG = themedSVG.replace(inlineStyleRegex, `style="fill: ${newColor}"`);
      
      // Replace CSS class fills
      const cssClassRegex = new RegExp(`fill:\\s*${originalColor.replace('#', '\\#')};`, 'gi');
      themedSVG = themedSVG.replace(cssClassRegex, `fill: ${newColor};`);
    });

    // Update gradient colors for theme
    if (theme === 'light') {
      // Warm golden gradients for light theme
      themedSVG = themedSVG.replace(/stop-color="#000"/g, 'stop-color="#8B4513"');
      themedSVG = themedSVG.replace(/stop-color="#010101"/g, 'stop-color="#A0522D"');
      themedSVG = themedSVG.replace(/stop-color="#080808"/g, 'stop-color="#CD853F"');
      themedSVG = themedSVG.replace(/stop-color="#141414"/g, 'stop-color="#DEB887"');
      themedSVG = themedSVG.replace(/stop-color="#252525"/g, 'stop-color="#F4A460"');
      themedSVG = themedSVG.replace(/stop-color="#3b3b3b"/g, 'stop-color="#F5DEB3"');
      themedSVG = themedSVG.replace(/stop-color="#555"/g, 'stop-color="#F5F5DC"');
      themedSVG = themedSVG.replace(/stop-color="#707070"/g, 'stop-color="#FFF8DC"');
      themedSVG = themedSVG.replace(/stop-color="#fff"/g, 'stop-color="#FFFEF0"');
      themedSVG = themedSVG.replace(/stop-color="#ccc"/g, 'stop-color="#F0E68C"');
    } else {
      // Cool blue/purple gradients for dark theme
      themedSVG = themedSVG.replace(/stop-color="#000"/g, 'stop-color="#0f1419"');
      themedSVG = themedSVG.replace(/stop-color="#010101"/g, 'stop-color="#1a1a2e"');
      themedSVG = themedSVG.replace(/stop-color="#080808"/g, 'stop-color="#16213e"');
      themedSVG = themedSVG.replace(/stop-color="#141414"/g, 'stop-color="#533a7d"');
      themedSVG = themedSVG.replace(/stop-color="#252525"/g, 'stop-color="#6b46c1"');
      themedSVG = themedSVG.replace(/stop-color="#3b3b3b"/g, 'stop-color="#7c3aed"');
      themedSVG = themedSVG.replace(/stop-color="#555"/g, 'stop-color="#8b5cf6"');
      themedSVG = themedSVG.replace(/stop-color="#707070"/g, 'stop-color="#a78bfa"');
      themedSVG = themedSVG.replace(/stop-color="#fff"/g, 'stop-color="#dbeafe"');
      themedSVG = themedSVG.replace(/stop-color="#ccc"/g, 'stop-color="#60a5fa"');
    }

    return themedSVG;
  };

  if (!mounted) {
    return <div className="w-full h-auto" />; // Placeholder to prevent hydration mismatch
  }

  return (
    <div 
      className="w-full h-auto transition-all duration-500 ease-in-out"
      dangerouslySetInnerHTML={{ __html: getThemedSVG() }}
    />
  );
} 
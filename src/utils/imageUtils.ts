/**
 * Universal Image CDN Utilities with Smart Routing
 * Routes large images to external CDN, small images to Vercel
 */

import { getSmartImageUrl } from './cdnUtils';

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || '';

/**
 * Get the full CDN URL for any image (legacy function)
 * @param imagePath - The image path (e.g., '/images/zerocater-web-2015.png' or 'zerocater-web-2015.png')
 * @returns Full CDN URL for the image
 */
export function getCDNImageUrl(imagePath: string): string {
  // Extract filename from path
  const filename = imagePath.split('/').pop() || '';
  
  // Use smart routing for individual images
  if (filename && imagePath.includes('images/') && !imagePath.includes('fab-lab/')) {
    return getSmartImageUrl(filename);
  }
  
  // For fab-lab images and other paths, always use relative paths when no CDN_URL is set
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  if (!CDN_URL) {
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  }
  
  return `${CDN_URL}/${cleanPath}`;
}

/**
 * Get CDN URL for regular portfolio images with smart routing
 * Large images go to external CDN, small images stay on Vercel
 * @param filename - Just the filename (e.g., 'zerocater-web-2015.png')
 * @returns Full CDN URL with smart routing
 */
export function getImageUrl(filename: string): string {
  return getSmartImageUrl(filename);
}

/**
 * Get CDN URL for fab-lab images (existing function, updated to use CDN)
 * @param projectName - The project directory name
 * @param imageName - The image filename
 * @returns Full CDN URL for fab-lab image
 */
export function getFabImageUrl(projectName: string, imageName: string): string {
  // Convert spaces to hyphens for URL compatibility
  const formattedProjectName = projectName.replace(/\s+/g, '-');
  // Force fab images to use relative paths for now
  return `/images/fab-lab/${formattedProjectName}/${imageName}`;
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use getFabImageUrl instead
 */
export function getImagePath(projectName: string, imageName: string): string {
  return getFabImageUrl(projectName, imageName);
}

/**
 * Check if running in development mode
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Get optimized image props for Next.js Image component
 * @param src - Image source (filename or path)
 * @param alt - Alt text
 * @param options - Additional options
 */
export function getImageProps(src: string, alt: string, options: {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
} = {}) {
  const { width = 800, height = 600, priority = false, className = '' } = options;
  
  return {
    src: src.includes('http') ? src : getImageUrl(src),
    alt,
    width,
    height,
    priority,
    className
  };
} 
/**
 * Universal Image CDN Utilities
 * Handles both regular images and fab-lab images with CDN delivery
 */

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || '';

/**
 * Get the full CDN URL for any image
 * @param imagePath - The image path (e.g., '/images/zerocater-web-2015.png' or 'zerocater-web-2015.png')
 * @returns Full CDN URL for the image
 */
export function getCDNImageUrl(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // If no CDN URL is configured, return the original path
  if (!CDN_URL) {
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  }
  
  // Return CDN URL
  return `${CDN_URL}/${cleanPath}`;
}

/**
 * Get CDN URL for regular portfolio images (case studies, etc.)
 * @param filename - Just the filename (e.g., 'zerocater-web-2015.png')
 * @returns Full CDN URL
 */
export function getImageUrl(filename: string): string {
  return getCDNImageUrl(`images/${filename}`);
}

/**
 * Get CDN URL for fab-lab images (existing function, updated to use CDN)
 * @param projectName - The project directory name
 * @param imageName - The image filename
 * @returns Full CDN URL for fab-lab image
 */
export function getFabImageUrl(projectName: string, imageName: string): string {
  return getCDNImageUrl(`images/fab-lab/${projectName}/${imageName}`);
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
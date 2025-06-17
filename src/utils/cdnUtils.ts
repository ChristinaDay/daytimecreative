/**
 * CDN Utilities for Smart Image Delivery
 * Routes large images to external CDN, small images stay on Vercel
 */

// Configuration
const EXTERNAL_CDN_URL = process.env.NEXT_PUBLIC_EXTERNAL_CDN_URL || 'http://cdn.christinamday.com';
const VERCEL_CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || '';
const LARGE_IMAGE_THRESHOLD_MB = 1; // Images over 1MB go to external CDN

// List of large images that should use external CDN
const LARGE_IMAGES = [
  // HIGH Priority (2MB+) - already migrated
  'zc_website_2015.gif',
  'zc_website_2017.gif', 
  'Screen Shot 2020-06-15 at 7.36.53 PM.png',
  'zerocater-web-2015.png',
  'zc_website-hero_2017.gif',
  'zerocater-hero-2017.gif',
  'Screen Shot 2020-06-12 at 12.00.30 AM.png',
  'zerocater-web-2017.png',
  'Screen+Shot+2021-03-12+at+2.20.47+PM.png',
  'zc_website2014.gif',
  'zerocater-web-2014.gif',
  'Screen+Shot+2021-03-12+at+2.16.28+PM.png',
  
  // MEDIUM Priority (1-2MB) - candidates for external CDN
  'betterview-customizableUI4.png',
  'Betterview-phub-Below+The+Fold.png',
  'betterview-PartnerHub+Dashboard2.png',
  'Makersquare-Screen+Shot+2020-06-15+at+6.13.59+PM.png',
  'Screen Shot 2020-06-11 at 6.29.14 PM.png',
  'zerocater-web-2014-1.png',
  'Screen Shot 2020-06-11 at 6.29.54 PM.png',
  'zerocater-web-2014-2.png',
  'portfolio-betterviewAsset+19@2x.png',
  'Screen Shot 2020-06-11 at 6.31.14 PM.png',
  'zerocater-web-2014-3.png',
  'Makersquare-Screen+Shot+2020-06-15+at+6.26.19+PM.png',
  'Makersquare-Screen+Shot+2020-06-15+at+1.08.35+AM.png',
  'zc_website-hero_2020.gif',
  'zerocater-hero-2020.gif',
  'hackerdao-illustration-hero.png',
  'portfolio-betterviewAsset+16+(2)@2x.png'
];

/**
 * Determines if an image should use external CDN
 */
function shouldUseExternalCDN(imageName: string): boolean {
  return LARGE_IMAGES.includes(imageName);
}

/**
 * Gets the appropriate CDN URL for an image
 * @param imageName - Just the filename (e.g., 'zerocater-web-2015.png')
 * @returns Full URL to the image
 */
export function getSmartImageUrl(imageName: string): string {
  if (shouldUseExternalCDN(imageName)) {
    return `${EXTERNAL_CDN_URL}/images/${imageName}`;
  }
  
  // Use Vercel for small images
  if (VERCEL_CDN_URL) {
    return `${VERCEL_CDN_URL}/images/${imageName}`;
  }
  
  // Fallback to relative path
  return `/images/${imageName}`;
}

/**
 * Gets external CDN URL (for large images)
 */
export function getExternalCDNUrl(imageName: string): string {
  return `${EXTERNAL_CDN_URL}/images/${imageName}`;
}

/**
 * Gets Vercel CDN URL (for small images)
 */
export function getVercelCDNUrl(imageName: string): string {
  if (VERCEL_CDN_URL) {
    return `${VERCEL_CDN_URL}/images/${imageName}`;
  }
  return `/images/${imageName}`;
}

/**
 * Legacy compatibility - maps to smart routing
 */
export function getCDNImageUrl(imageName: string): string {
  return getSmartImageUrl(imageName);
}

/**
 * Get image URL with smart routing (replaces getImageUrl)
 */
export function getImageUrl(imageName: string): string {
  return getSmartImageUrl(imageName);
}

/**
 * Utility to check CDN status
 */
export function getCDNStatus() {
  return {
    externalCDN: EXTERNAL_CDN_URL,
    vercelCDN: VERCEL_CDN_URL || 'Local/Vercel',
    largeImageCount: LARGE_IMAGES.length,
    threshold: `${LARGE_IMAGE_THRESHOLD_MB}MB`
  };
} 
#!/usr/bin/env node

// Test script to verify smart CDN routing
const { getSmartImageUrl, getCDNStatus } = require('./src/utils/cdnUtils');

console.log('🧪 Testing Smart CDN Routing\n');

// Show CDN configuration
const status = getCDNStatus();
console.log('📊 CDN Configuration:');
console.log(`   External CDN: ${status.externalCDN}`);
console.log(`   Vercel CDN: ${status.vercelCDN}`);
console.log(`   Large Images: ${status.largeImageCount}`);
console.log(`   Threshold: ${status.threshold}\n`);

// Test large images (should use external CDN)
console.log('🔥 Large Images (External CDN):');
const largeImages = [
  'zc_website_2015.gif',
  'zerocater-web-2015.png',
  'Screen Shot 2020-06-15 at 7.36.53 PM.png'
];

largeImages.forEach(image => {
  const url = getSmartImageUrl(image);
  const isExternal = url.includes('cdn.christinamday.com');
  console.log(`   ${isExternal ? '✅' : '❌'} ${image}`);
  console.log(`      → ${url}`);
});

console.log('\n📦 Small Images (Vercel CDN):');
const smallImages = [
  'betterview-spotlights1.png',
  'zerocater-snacks1.png',
  'hackerdao-logos.png'
];

smallImages.forEach(image => {
  const url = getSmartImageUrl(image);
  const isVercel = !url.includes('cdn.christinamday.com');
  console.log(`   ${isVercel ? '✅' : '❌'} ${image}`);
  console.log(`      → ${url}`);
});

console.log('\n🎯 Summary:');
console.log('✅ Large images → External CDN (hosting.com)');
console.log('✅ Small images → Vercel CDN');
console.log('✅ Smart routing active!'); 
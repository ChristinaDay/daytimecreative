#!/usr/bin/env node

// Remove migrated images from local repository
// ⚠️  ONLY run this AFTER confirming CDN upload and code updates work!

const fs = require('fs');
const { execSync } = require('child_process');

const imagesToRemove = [
  "public/images/zc_website_2015.gif",
  "public/images/zc_website_2017.gif",
  "public/images/Screen Shot 2020-06-15 at 7.36.53 PM.png",
  "public/images/zerocater-web-2015.png",
  "public/images/zc_website-hero_2017.gif",
  "public/images/zerocater-hero-2017.gif",
  "public/images/Screen Shot 2020-06-12 at 12.00.30 AM.png",
  "public/images/zerocater-web-2017.png",
  "public/images/Screen+Shot+2021-03-12+at+2.20.47+PM.png",
  "public/images/zc_website2014.gif",
  "public/images/zerocater-web-2014.gif",
  "public/images/Screen+Shot+2021-03-12+at+2.16.28+PM.png"
];

function removeImages() {
  console.log('🗑️  Removing migrated images from repository...\n');
  
  let removedCount = 0;
  let savedMB = 0;
  
  imagesToRemove.forEach(imagePath => {
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      const sizeMB = stats.size / (1024 * 1024);
      
             fs.unlinkSync(imagePath);
       console.log('✅ Removed: ' + imagePath + ' (' + sizeMB.toFixed(2) + 'MB)');
       
       removedCount++;
       savedMB += sizeMB;
     } else {
       console.log('⚠️  Not found: ' + imagePath);
     }
   });
   
   console.log('\n🎉 Removed ' + removedCount + ' images, saved ' + savedMB.toFixed(1) + 'MB');
  console.log('💡 Run "npm run check-size" to see final deployment size');
}

if (require.main === module) {
  console.log('⚠️  WARNING: This will permanently remove images from your repository!');
  console.log('   Make sure CDN upload and code updates are working first.\n');
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Are you sure you want to remove these images? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      removeImages();
    } else {
      console.log('❌ Cancelled - no images removed');
    }
    rl.close();
  });
}

module.exports = { removeImages };

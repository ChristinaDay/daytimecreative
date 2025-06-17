#!/usr/bin/env node

// Auto-generated script to update image references to CDN URLs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const updates = [
  {
    "from": "/images/zc_website_2015.gif",
    "to": "https://christinamday.com/images/zc_website_2015.gif",
    "name": "zc_website_2015.gif"
  },
  {
    "from": "/images/zc_website_2017.gif",
    "to": "https://christinamday.com/images/zc_website_2017.gif",
    "name": "zc_website_2017.gif"
  },
  {
    "from": "/images/Screen Shot 2020-06-15 at 7.36.53 PM.png",
    "to": "https://christinamday.com/images/Screen Shot 2020-06-15 at 7.36.53 PM.png",
    "name": "Screen Shot 2020-06-15 at 7.36.53 PM.png"
  },
  {
    "from": "/images/zerocater-web-2015.png",
    "to": "https://christinamday.com/images/zerocater-web-2015.png",
    "name": "zerocater-web-2015.png"
  },
  {
    "from": "/images/zc_website-hero_2017.gif",
    "to": "https://christinamday.com/images/zc_website-hero_2017.gif",
    "name": "zc_website-hero_2017.gif"
  },
  {
    "from": "/images/zerocater-hero-2017.gif",
    "to": "https://christinamday.com/images/zerocater-hero-2017.gif",
    "name": "zerocater-hero-2017.gif"
  },
  {
    "from": "/images/Screen Shot 2020-06-12 at 12.00.30 AM.png",
    "to": "https://christinamday.com/images/Screen Shot 2020-06-12 at 12.00.30 AM.png",
    "name": "Screen Shot 2020-06-12 at 12.00.30 AM.png"
  },
  {
    "from": "/images/zerocater-web-2017.png",
    "to": "https://christinamday.com/images/zerocater-web-2017.png",
    "name": "zerocater-web-2017.png"
  },
  {
    "from": "/images/Screen+Shot+2021-03-12+at+2.20.47+PM.png",
    "to": "https://christinamday.com/images/Screen+Shot+2021-03-12+at+2.20.47+PM.png",
    "name": "Screen+Shot+2021-03-12+at+2.20.47+PM.png"
  },
  {
    "from": "/images/zc_website2014.gif",
    "to": "https://christinamday.com/images/zc_website2014.gif",
    "name": "zc_website2014.gif"
  },
  {
    "from": "/images/zerocater-web-2014.gif",
    "to": "https://christinamday.com/images/zerocater-web-2014.gif",
    "name": "zerocater-web-2014.gif"
  },
  {
    "from": "/images/Screen+Shot+2021-03-12+at+2.16.28+PM.png",
    "to": "https://christinamday.com/images/Screen+Shot+2021-03-12+at+2.16.28+PM.png",
    "name": "Screen+Shot+2021-03-12+at+2.16.28+PM.png"
  }
];

function updateImageReferences() {
  console.log('🔄 Updating image references to CDN URLs...\n');
  
  let totalUpdates = 0;
  
  updates.forEach(update => {
    try {
      // Use sed to replace references in all source files
      const sedCmd = 'find src/ -type f \\( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \\) -exec sed -i \'\'\' \'s|' + update.from + '|' + update.to + '|g\' {} +';
      execSync(sedCmd);
      
      console.log('✅ Updated references for: ' + update.name);
      totalUpdates++;
    } catch (error) {
      console.log('⚠️  Error updating ' + update.name + ': ' + error.message);
    }
  });
  
  console.log('\n🎉 Updated ' + totalUpdates + ' image references to use CDN URLs');
  console.log('💡 Next: Run "npm run check-size" to see your savings!');
}

if (require.main === module) {
  updateImageReferences();
}

module.exports = { updateImageReferences };

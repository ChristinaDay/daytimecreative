#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Top 12 HIGH priority images to migrate first
const HIGH_PRIORITY_IMAGES = [
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
  'Screen+Shot+2021-03-12+at+2.16.28+PM.png'
];

function findImageReferences(imageName) {
  const references = [];
  const searchDirs = ['src/', 'pages/', 'components/'];
  
  // Clean the image name for searching (remove spaces, special chars)
  const cleanName = imageName.replace(/[+\s]/g, '\\s*[+\\s]*');
  const searchPattern = `images/${cleanName}`;
  
  try {
    // Search for references in code files
    const grepCmd = `grep -r "${imageName}" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null || true`;
    const result = execSync(grepCmd, { encoding: 'utf8' });
    
    if (result.trim()) {
      const lines = result.trim().split('\n');
      lines.forEach(line => {
        const [file, ...content] = line.split(':');
        references.push({
          file: file.trim(),
          content: content.join(':').trim()
        });
      });
    }
  } catch (error) {
    // Ignore grep errors
  }
  
  return references;
}

function createMigrationPlan() {
  console.log('🎯 Creating migration plan for HIGH priority images...\n');
  
  const migrationPlan = [];
  let totalSavings = 0;
  
  HIGH_PRIORITY_IMAGES.forEach((imageName, index) => {
    const imagePath = path.join('public/images', imageName);
    
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      const sizeMB = stats.size / (1024 * 1024);
      totalSavings += sizeMB;
      
      const references = findImageReferences(imageName);
      
      migrationPlan.push({
        index: index + 1,
        name: imageName,
        path: imagePath,
        size: sizeMB,
        references: references
      });
      
      console.log(`${index + 1}. ${imageName}`);
      console.log(`   Size: ${sizeMB.toFixed(2)}MB`);
      console.log(`   References found: ${references.length}`);
      references.forEach(ref => {
        console.log(`   → ${ref.file}`);
      });
      console.log('');
    } else {
      console.log(`⚠️  ${imageName} not found`);
    }
  });
  
  console.log(`💾 Total savings: ${totalSavings.toFixed(1)}MB`);
  console.log(`📊 This will bring you from 93.3% to ~${((955 - totalSavings) / 1024 * 100).toFixed(1)}% of limit\n`);
  
  return migrationPlan;
}

function generateUploadScript(migrationPlan) {
  console.log('📝 Generating upload script...\n');
  
  const uploadCommands = migrationPlan.map(item => {
    const remotePath = `public_html/images/${item.name}`;
    return `put "${item.path}" "${remotePath}"`;
  }).join('\n');
  
  const scriptContent = `#!/bin/bash

# Upload HIGH priority images to CDN
# This will save ~44MB from your Vercel deployment

echo "🚀 Uploading HIGH priority images to CDN..."

lftp -c "
set ftp:ssl-allow no
open -u christinaday@christinamday.com,N@tsum3S0s3k1! 106.0.62.101
${uploadCommands}
quit
"

echo "✅ Upload complete!"
echo "💡 Next steps:"
echo "   1. Run 'npm run update-image-refs' to update code references"
echo "   2. Run 'npm run check-size' to verify savings"
echo "   3. Test your site to ensure images load correctly"
`;

  fs.writeFileSync('upload-high-priority-images.sh', scriptContent);
  execSync('chmod +x upload-high-priority-images.sh');
  
  console.log('✅ Created: upload-high-priority-images.sh');
}

function generateUpdateScript(migrationPlan) {
  console.log('📝 Generating code update script...\n');
  
  const updates = migrationPlan.map(item => {
    return {
      from: `/images/${item.name}`,
      to: `https://christinamday.com/images/${item.name}`,
      name: item.name
    };
  });
  
  const scriptContent = `#!/usr/bin/env node

// Auto-generated script to update image references to CDN URLs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const updates = ${JSON.stringify(updates, null, 2)};

function updateImageReferences() {
  console.log('🔄 Updating image references to CDN URLs...\\n');
  
  let totalUpdates = 0;
  
  updates.forEach(update => {
    try {
      // Use sed to replace references in all source files
      const sedCmd = 'find src/ -type f \\\\( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \\\\) -exec sed -i \\'\\'\\' \\'s|' + update.from + '|' + update.to + '|g\\' {} +';
      execSync(sedCmd);
      
      console.log('✅ Updated references for: ' + update.name);
      totalUpdates++;
    } catch (error) {
      console.log('⚠️  Error updating ' + update.name + ': ' + error.message);
    }
  });
  
  console.log('\\n🎉 Updated ' + totalUpdates + ' image references to use CDN URLs');
  console.log('💡 Next: Run "npm run check-size" to see your savings!');
}

if (require.main === module) {
  updateImageReferences();
}

module.exports = { updateImageReferences };
`;

  fs.writeFileSync('scripts/update-image-refs.js', scriptContent);
  
  console.log('✅ Created: scripts/update-image-refs.js');
}

function generateRemovalScript(migrationPlan) {
  console.log('📝 Generating cleanup script...\n');
  
  const scriptContent = `#!/usr/bin/env node

// Remove migrated images from local repository
// ⚠️  ONLY run this AFTER confirming CDN upload and code updates work!

const fs = require('fs');
const { execSync } = require('child_process');

const imagesToRemove = ${JSON.stringify(migrationPlan.map(item => item.path), null, 2)};

function removeImages() {
  console.log('🗑️  Removing migrated images from repository...\\n');
  
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
   
   console.log('\\n🎉 Removed ' + removedCount + ' images, saved ' + savedMB.toFixed(1) + 'MB');
  console.log('💡 Run "npm run check-size" to see final deployment size');
}

if (require.main === module) {
  console.log('⚠️  WARNING: This will permanently remove images from your repository!');
  console.log('   Make sure CDN upload and code updates are working first.\\n');
  
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
`;

  fs.writeFileSync('scripts/remove-migrated-images.js', scriptContent);
  
  console.log('✅ Created: scripts/remove-migrated-images.js');
}

function main() {
  console.log('🚀 HIGH Priority Image Migration Tool\n');
  console.log('This will migrate your 12 largest images to CDN, saving ~44MB\n');
  
  const migrationPlan = createMigrationPlan();
  
  if (migrationPlan.length === 0) {
    console.log('❌ No images found to migrate');
    return;
  }
  
  generateUploadScript(migrationPlan);
  generateUpdateScript(migrationPlan);
  generateRemovalScript(migrationPlan);
  
  console.log('\n🎯 Migration Plan Created!');
  console.log('\n📋 Next Steps:');
  console.log('1. ./upload-high-priority-images.sh    # Upload images to CDN');
  console.log('2. npm run update-image-refs           # Update code references');
  console.log('3. npm run check-size                  # Verify savings');
  console.log('4. Test your site                      # Ensure images load');
  console.log('5. npm run remove-migrated-images      # Clean up (optional)');
  console.log('\n⚠️  Test thoroughly before removing local images!');
}

if (require.main === module) {
  main();
}

module.exports = { createMigrationPlan, HIGH_PRIORITY_IMAGES }; 
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getFileSizeInMB(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size / (1024 * 1024);
  } catch (error) {
    return 0;
  }
}

function findLargeImages(directory = 'public/images', minSizeMB = 0.5) {
  console.log(`🔍 Finding images larger than ${minSizeMB}MB in ${directory}...\n`);

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff'];
  const largeImages = [];
  let totalSize = 0;
  let totalCount = 0;

  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (imageExtensions.includes(ext)) {
            const sizeMB = getFileSizeInMB(fullPath);
            totalSize += sizeMB;
            totalCount++;
            
            if (sizeMB >= minSizeMB) {
              largeImages.push({
                path: fullPath,
                relativePath: path.relative('.', fullPath),
                size: sizeMB,
                extension: ext
              });
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning ${dir}:`, error.message);
    }
  }

  if (fs.existsSync(directory)) {
    scanDirectory(directory);
  } else {
    console.log(`Directory ${directory} does not exist.`);
    return;
  }

  // Sort by size (largest first)
  largeImages.sort((a, b) => b.size - a.size);

  console.log('📊 Summary:');
  console.log(`   Total images: ${totalCount}`);
  console.log(`   Total size: ${totalSize.toFixed(1)}MB`);
  console.log(`   Large images (>${minSizeMB}MB): ${largeImages.length}`);
  console.log('');

  if (largeImages.length > 0) {
    console.log('🎯 Large Images (CDN candidates):');
    console.log('');
    
    let cumulativeSize = 0;
    largeImages.forEach((img, index) => {
      cumulativeSize += img.size;
      const priority = img.size > 2 ? '🔴 HIGH' : img.size > 1 ? '🟡 MED' : '🟢 LOW';
      console.log(`${index + 1}. ${priority} ${img.relativePath}`);
      console.log(`   Size: ${img.size.toFixed(2)}MB`);
      console.log('');
    });

    console.log('💡 Recommendations:');
    console.log(`   Moving top 10 largest images would save: ${largeImages.slice(0, 10).reduce((sum, img) => sum + img.size, 0).toFixed(1)}MB`);
    console.log(`   Moving all large images would save: ${cumulativeSize.toFixed(1)}MB`);
    console.log('');
    console.log('🚀 Next Steps:');
    console.log('   1. Move 🔴 HIGH priority images to CDN first');
    console.log('   2. Update image paths to use CDN URLs');
    console.log('   3. Test deployment size with `npm run check-size`');
  } else {
    console.log('✅ No large images found - all images are optimally sized!');
  }

  return largeImages;
}

if (require.main === module) {
  const minSize = process.argv[2] ? parseFloat(process.argv[2]) : 0.5;
  findLargeImages('public/images', minSize);
}

module.exports = { findLargeImages }; 
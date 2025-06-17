#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Vercel Pro plan limits
const LIMITS = {
  PRO_DEPLOYMENT_SIZE_MB: 1024, // 1GB
  WARNING_THRESHOLD: 0.8, // 80%
  CRITICAL_THRESHOLD: 0.95 // 95%
};

function getDirectorySize(dirPath) {
  try {
    const output = execSync(`du -sm "${dirPath}" 2>/dev/null | cut -f1`, { encoding: 'utf8' });
    return parseInt(output.trim()) || 0;
  } catch (error) {
    return 0;
  }
}

function getFileCount(dirPath) {
  try {
    const output = execSync(`find "${dirPath}" -type f | wc -l`, { encoding: 'utf8' });
    return parseInt(output.trim()) || 0;
  } catch (error) {
    return 0;
  }
}

function checkDeploymentSize() {
  console.log('🔍 Checking Vercel deployment size limits...\n');

  // Calculate deployment size (excluding node_modules, .git, .next)
  const excludeDirs = ['node_modules', '.git', '.next', '.vercel'];
  const totalSize = getDirectorySize('.');
  
  let excludedSize = 0;
  excludeDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      excludedSize += getDirectorySize(dir);
    }
  });

  const deploymentSize = totalSize - excludedSize;
  const imageSize = getDirectorySize('public/images');
  const imageCount = getFileCount('public/images');
  const totalFileCount = getFileCount('.') - getFileCount('node_modules') - getFileCount('.git');

  // Calculate percentages
  const sizePercentage = (deploymentSize / LIMITS.PRO_DEPLOYMENT_SIZE_MB) * 100;
  const filePercentage = (totalFileCount / 15000) * 100; // 15k file limit

  console.log('📊 Current Status:');
  console.log(`   Deployment Size: ${deploymentSize}MB / ${LIMITS.PRO_DEPLOYMENT_SIZE_MB}MB (${sizePercentage.toFixed(1)}%)`);
  console.log(`   Images: ${imageCount} files, ${imageSize}MB`);
  console.log(`   Total Files: ${totalFileCount} / 15,000 (${filePercentage.toFixed(1)}%)`);
  console.log('');

  // Size warnings
  if (sizePercentage >= LIMITS.CRITICAL_THRESHOLD * 100) {
    console.log('🚨 CRITICAL: Deployment size is at 95%+ of limit!');
    console.log('   Action needed: Move large images to CDN immediately');
  } else if (sizePercentage >= LIMITS.WARNING_THRESHOLD * 100) {
    console.log('⚠️  WARNING: Deployment size is at 80%+ of limit');
    console.log('   Consider moving largest images to CDN');
  } else {
    console.log('✅ Deployment size is within safe limits');
  }

  // File count warnings
  if (filePercentage >= 80) {
    console.log('⚠️  WARNING: File count is high');
    console.log('   Consider optimizing or consolidating files');
  }

  console.log('');
  console.log('💡 Tips:');
  console.log('   - Images over 1MB should be considered for CDN');
  console.log('   - Use `npm run check-large-images` to find optimization candidates');
  console.log('   - Monitor Vercel dashboard for bandwidth usage');

  return {
    deploymentSize,
    sizePercentage,
    imageSize,
    imageCount,
    isWarning: sizePercentage >= LIMITS.WARNING_THRESHOLD * 100,
    isCritical: sizePercentage >= LIMITS.CRITICAL_THRESHOLD * 100
  };
}

if (require.main === module) {
  checkDeploymentSize();
}

module.exports = { checkDeploymentSize }; 
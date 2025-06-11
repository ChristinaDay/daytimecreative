const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/fab-lab');
const supportedFormats = ['.jpg', '.jpeg', '.png'];

// Configuration for optimization
const config = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 85,
    compressionLevel: 8,
    progressive: true
  },
  // Resize large images to reasonable max dimensions
  maxWidth: 1920,
  maxHeight: 1080
};

async function optimizeImage(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    let pipeline = sharp(inputPath);
    
    // Get image metadata
    const metadata = await pipeline.metadata();
    
    // Resize if image is too large
    if (metadata.width > config.maxWidth || metadata.height > config.maxHeight) {
      pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Apply format-specific optimization with EXIF preservation
    if (['.jpg', '.jpeg'].includes(ext)) {
      pipeline = pipeline.jpeg(config.jpeg);
    } else if (ext === '.png') {
      pipeline = pipeline.png(config.png);
    }

    // Preserve EXIF orientation data without applying rotation
    await pipeline.withMetadata().toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${path.relative(inputDir, inputPath)}: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (-${reduction}%)`);
    
    return { originalSize, newSize, reduction: parseFloat(reduction) };
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  const results = {
    totalOriginal: 0,
    totalOptimized: 0,
    filesProcessed: 0,
    averageReduction: 0
  };

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subResults = await processDirectory(fullPath);
      results.totalOriginal += subResults.totalOriginal;
      results.totalOptimized += subResults.totalOptimized;
      results.filesProcessed += subResults.filesProcessed;
    } else if (stat.isFile() && supportedFormats.includes(path.extname(fullPath).toLowerCase())) {
      const tempPath = fullPath + '.tmp';
      const result = await optimizeImage(fullPath, tempPath);
      
      if (result) {
        // Replace original with optimized version
        fs.renameSync(tempPath, fullPath);
        results.totalOriginal += result.originalSize;
        results.totalOptimized += result.newSize;
        results.filesProcessed++;
      } else {
        // Clean up temp file if optimization failed
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }
  }

  return results;
}

async function main() {
  console.log('🖼️  Starting image optimization for fab-lab images...\n');
  
  if (!fs.existsSync(inputDir)) {
    console.error(`❌ Directory not found: ${inputDir}`);
    process.exit(1);
  }

  const startTime = Date.now();
  const results = await processDirectory(inputDir);
  const endTime = Date.now();

  const totalReduction = ((results.totalOriginal - results.totalOptimized) / results.totalOriginal * 100).toFixed(1);

  console.log('\n📊 Optimization Complete!');
  console.log('============================');
  console.log(`Files processed: ${results.filesProcessed}`);
  console.log(`Original size: ${formatBytes(results.totalOriginal)}`);
  console.log(`Optimized size: ${formatBytes(results.totalOptimized)}`);
  console.log(`Total reduction: ${formatBytes(results.totalOriginal - results.totalOptimized)} (-${totalReduction}%)`);
  console.log(`Time taken: ${((endTime - startTime) / 1000).toFixed(1)}s`);
  console.log('\n✨ Your static export will now be much faster!');
}

main().catch(console.error); 
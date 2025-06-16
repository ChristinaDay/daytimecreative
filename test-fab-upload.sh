#!/bin/bash

# Test upload of just a few fab-lab images
echo "🧪 Testing fab-lab image upload with small batch..."

# Configuration (corrected for christinamday.com)
FTP_HOST="106.0.62.101"
FTP_USER="christinaday@christinamday.com"
FTP_PASS="N@tsum3S0s3k1!"
REMOTE_BASE_DIR="public_html/images"

# Create a temporary file for FTP commands
FTP_SCRIPT=$(mktemp)

# Simple test - upload just 3 images from one project
TEST_PROJECT="Hammered-Metal-Flowers"
TEST_DIR="public/images/fab-lab/$TEST_PROJECT"

if [ ! -d "$TEST_DIR" ]; then
    echo "❌ Test directory $TEST_DIR not found"
    exit 1
fi

echo "📁 Testing with project: $TEST_PROJECT"
echo "📁 Found $(find "$TEST_DIR" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | wc -l) images in test project"

# Create the test script
cat > "$FTP_SCRIPT" << EOF
set ssl:verify-certificate no
set ftp:passive-mode true
set net:timeout 60
set net:max-retries 2
open -u $FTP_USER,$FTP_PASS $FTP_HOST

# Create directories
mkdir -p $REMOTE_BASE_DIR
mkdir -p $REMOTE_BASE_DIR/fab-lab
mkdir -p $REMOTE_BASE_DIR/fab-lab/$TEST_PROJECT

# Upload first 3 images
cd $REMOTE_BASE_DIR/fab-lab/$TEST_PROJECT
EOF

# Add just the first 3 images
find "$TEST_DIR" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | head -3 | while read file; do
    filename=$(basename "$file")
    echo "put \"$file\" -o \"$filename\"" >> "$FTP_SCRIPT"
done

echo "quit" >> "$FTP_SCRIPT"

echo "🚀 Starting test upload..."
echo "📤 FTP Script contents:"
echo "------------------------"
cat "$FTP_SCRIPT"
echo "------------------------"

# Run the upload
lftp -f "$FTP_SCRIPT"

if [ $? -eq 0 ]; then
    echo "✅ Test upload successful!"
    echo "🌐 Test images should be at:"
    echo "   https://christinamday.com/images/fab-lab/$TEST_PROJECT/"
    echo ""
    echo "🔗 Test one of these URLs:"
    find "$TEST_DIR" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | head -3 | while read file; do
        filename=$(basename "$file")
        echo "   https://christinamday.com/images/fab-lab/$TEST_PROJECT/$filename"
    done
else
    echo "❌ Test upload failed"
fi

# Cleanup
rm "$FTP_SCRIPT" 
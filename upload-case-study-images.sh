#!/bin/bash

# Upload all case study images (non-fab-lab) to CDN
echo "🚀 Uploading case study images to christinamday.com CDN..."

# Configuration (same as working credentials)
FTP_HOST="106.0.62.101"
FTP_USER="christinaday@christinamday.com"
FTP_PASS="N@tsum3S0s3k1!"
REMOTE_BASE_DIR="public_html/images"

# Create a temporary file for FTP commands
FTP_SCRIPT=$(mktemp)

# Count images
TOTAL_IMAGES=$(find public/images -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" | grep -v fab-lab | wc -l)
echo "📁 Found $TOTAL_IMAGES case study images to upload"

# Create the upload script
cat > "$FTP_SCRIPT" << EOF
set ssl:verify-certificate no
set ftp:passive-mode true
set net:timeout 60
set net:max-retries 2
open -u $FTP_USER,$FTP_PASS $FTP_HOST

# Ensure images directory exists
mkdir -p $REMOTE_BASE_DIR

# Upload all case study images
cd $REMOTE_BASE_DIR
EOF

# Add upload commands for all non-fab-lab images
echo "📤 Preparing upload commands..."
COUNTER=0
find public/images -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" | grep -v fab-lab | while read file; do
    COUNTER=$((COUNTER + 1))
    filename=$(basename "$file")
    echo "put \"$file\" -o \"$filename\"" >> "$FTP_SCRIPT"
    
    # Progress indicator
    if [ $((COUNTER % 20)) -eq 0 ]; then
        echo "   📋 Prepared $COUNTER/$TOTAL_IMAGES upload commands..."
    fi
done

echo "quit" >> "$FTP_SCRIPT"

echo ""
echo "🚀 Starting case study image upload..."
echo "📊 This will upload $TOTAL_IMAGES images to christinamday.com/images/"
echo ""

# Run the upload
lftp -f "$FTP_SCRIPT"

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Case study images uploaded successfully!"
    echo "🌐 All images now available at:"
    echo "   https://christinamday.com/images/[filename]"
    echo ""
    echo "🔗 Test a few URLs:"
    echo "   https://christinamday.com/images/zerocater-web-2015.png"
    echo "   https://christinamday.com/images/betterview-spotlights1.png"
    echo "   https://christinamday.com/images/hackerdao-illustration-hero.png"
    echo ""
    echo "✅ Your portfolio is now fully CDN-powered!"
else
    echo "❌ Upload failed"
fi

# Cleanup
rm "$FTP_SCRIPT" 
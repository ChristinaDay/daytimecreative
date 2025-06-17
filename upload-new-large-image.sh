#!/bin/bash

# Upload a new large image to CDN
# Usage: ./upload-new-large-image.sh "path/to/image.jpg"

if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide an image path"
    echo "Usage: ./upload-new-large-image.sh 'public/images/my-large-image.png'"
    exit 1
fi

IMAGE_PATH="$1"
IMAGE_NAME=$(basename "$IMAGE_PATH")
FULL_PATH=$(realpath "$IMAGE_PATH")

# FTP connection details
FTP_HOST="106.0.62.101"
FTP_USER="chris194"
FTP_PASS="N@tsum3S0s3k1!"

echo "🚀 Uploading large image to CDN..."
echo "   File: $IMAGE_NAME"

# Check if file exists
if [ ! -f "$IMAGE_PATH" ]; then
    echo "❌ Error: File not found: $IMAGE_PATH"
    exit 1
fi

# Get file size
FILE_SIZE=$(du -h "$IMAGE_PATH" | cut -f1)
echo "   Size: $FILE_SIZE"

# Upload via FTP
lftp -c "
set ftp:ssl-allow no
open -u $FTP_USER,$FTP_PASS $FTP_HOST
cd public_html/images
put \"$FULL_PATH\" \"$IMAGE_NAME\"
quit
"

if [ $? -eq 0 ]; then
    echo "✅ Upload successful!"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Add '$IMAGE_NAME' to LARGE_IMAGES array in src/utils/cdnUtils.ts"
    echo "   2. Remove '$IMAGE_PATH' from local repository"
    echo "   3. Use getImageUrl('$IMAGE_NAME') in your code"
    echo ""
    echo "🧪 Test CDN URL:"
    echo "   http://cdn.christinamday.com/images/$IMAGE_NAME"
else
    echo "❌ Upload failed!"
    exit 1
fi 
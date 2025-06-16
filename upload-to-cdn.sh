#!/bin/bash

# Upload images to hosting.com CDN
# Usage: ./upload-to-cdn.sh

echo "🚀 Uploading images to hosting.com CDN..."

# Configuration - Updated with your hosting.com details
SERVER="106.0.62.101"
USERNAME="christinaday@christinamday.com"
REMOTE_PATH="public_html/images" # Path on your hosting server

# Check if images directory exists
if [ ! -d "public/images" ]; then
    echo "❌ Error: public/images directory not found!"
    exit 1
fi

echo "📁 Found $(find public/images -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | wc -l) image files"

# Create SFTP batch file
cat > /tmp/sftp_commands.txt << EOF
cd $REMOTE_PATH
mkdir -p fab-lab
cd fab-lab
EOF

# Add commands to create each project directory
find public/images/fab-lab -type d -exec basename {} \; | tail -n +2 | while read dir; do
    echo "mkdir -p \"$dir\"" >> /tmp/sftp_commands.txt
done

# Add upload commands for each directory
find public/images/fab-lab -type d | tail -n +2 | while read local_dir; do
    project_name=$(basename "$local_dir")
    echo "cd \"$project_name\"" >> /tmp/sftp_commands.txt
    echo "mput \"$local_dir\"/*" >> /tmp/sftp_commands.txt
    echo "cd .." >> /tmp/sftp_commands.txt
done

echo "quit" >> /tmp/sftp_commands.txt

echo "📤 Starting SFTP upload..."
echo "Server: $SERVER"
echo "Remote path: $REMOTE_PATH"
echo ""
echo "You'll be prompted for your password..."

# Execute SFTP with batch commands
sftp -b /tmp/sftp_commands.txt $USERNAME@$SERVER

# Cleanup
rm /tmp/sftp_commands.txt

echo "✅ Upload complete!"
echo "Your images should now be available at: https://cdn.christinamday.com/images/fab-lab/" 
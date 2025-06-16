#!/bin/bash

# Upload images to hosting.com CDN using regular FTP
# Usage: ./upload-to-cdn-ftp.sh

echo "🚀 Uploading images to hosting.com CDN..."

# Configuration
SERVER="106.0.62.101"
USERNAME="christinaday@christinamday.com"
REMOTE_PATH="public_html/images"

# Check if images directory exists
if [ ! -d "public/images" ]; then
    echo "❌ Error: public/images directory not found!"
    exit 1
fi

echo "📁 Found $(find public/images -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | wc -l) image files"

# Create FTP command file
cat > /tmp/ftp_commands.txt << EOF
cd $REMOTE_PATH
mkdir images
cd images
mkdir fab-lab
cd fab-lab
EOF

# Create directories for each project
find public/images/fab-lab -type d -mindepth 1 -maxdepth 1 | while read local_dir; do
    project_name=$(basename "$local_dir")
    echo "mkdir \"$project_name\"" >> /tmp/ftp_commands.txt
done

# Upload files for each project
find public/images/fab-lab -type d -mindepth 1 -maxdepth 1 | while read local_dir; do
    project_name=$(basename "$local_dir")
    echo "cd \"$project_name\"" >> /tmp/ftp_commands.txt
    # Upload each file in the directory
    find "$local_dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read file; do
        filename=$(basename "$file")
        echo "put \"$file\" \"$filename\"" >> /tmp/ftp_commands.txt
    done
    echo "cd .." >> /tmp/ftp_commands.txt
done

echo "quit" >> /tmp/ftp_commands.txt

echo "📤 Starting FTP upload..."
echo "Server: $SERVER"
echo "Username: $USERNAME"
echo "Remote path: $REMOTE_PATH"
echo ""
echo "You'll be prompted for your password..."

# Execute FTP with commands
ftp -n $SERVER < /tmp/ftp_commands.txt

# Cleanup
rm /tmp/ftp_commands.txt

echo "✅ Upload complete!"
echo "Your images should now be available at: https://christinamday.com/images/fab-lab/" 
#!/bin/bash

# Upload fab-lab images using lftp with correct credentials
echo "🚀 Uploading fab-lab images to christinamday.com..."

# Configuration (corrected for christinamday.com)
FTP_HOST="106.0.62.101"
FTP_USER="christinaday@christinamday.com"  # Fixed: was using @daytimecreative.com
FTP_PASS="N@tsum3S0s3k1!"
REMOTE_BASE_DIR="public_html/images"  # Fixed: use public_html structure

# Create a temporary file for FTP commands
FTP_SCRIPT=$(mktemp)

echo "📁 Found $(find public/images/fab-lab -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | wc -l) image files"

# Function to create directory structure
create_fab_dirs() {
    echo "📂 Creating fab-lab directory structure..."
    cat > "$FTP_SCRIPT" << EOF
set ssl:verify-certificate no
set ftp:passive-mode true
set net:timeout 60
set net:max-retries 2
open -u $FTP_USER,$FTP_PASS $FTP_HOST
mkdir -p $REMOTE_BASE_DIR
mkdir -p $REMOTE_BASE_DIR/fab-lab
EOF

    # Add mkdir commands for each project directory
    find public/images/fab-lab -type d -mindepth 1 -maxdepth 1 | while read dir; do
        project_name=$(basename "$dir")
        echo "mkdir -p $REMOTE_BASE_DIR/fab-lab/\"$project_name\"" >> "$FTP_SCRIPT"
    done

    echo "quit" >> "$FTP_SCRIPT"
    
    lftp -f "$FTP_SCRIPT"
}

# Function to upload images in batches by project
upload_fab_images() {
    echo "📤 Uploading images by project..."
    
    # Process each project directory
    find public/images/fab-lab -type d -mindepth 1 -maxdepth 1 | while read dir; do
        project_name=$(basename "$dir")
        image_count=$(find "$dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | wc -l)
        echo "📂 Processing project: $project_name ($image_count images)"
        
        # Create script for this project
        cat > "$FTP_SCRIPT" << EOF
set ssl:verify-certificate no
set ftp:passive-mode true
set net:timeout 60
set net:max-retries 2
open -u $FTP_USER,$FTP_PASS $FTP_HOST
cd $REMOTE_BASE_DIR/fab-lab/"$project_name"
EOF

        # Add upload commands for this project's images
        find "$dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read file; do
            filename=$(basename "$file")
            echo "put \"$file\" -o \"$filename\"" >> "$FTP_SCRIPT"
        done
        
        echo "quit" >> "$FTP_SCRIPT"
        
        # Upload this batch
        lftp -f "$FTP_SCRIPT"
        
        if [ $? -eq 0 ]; then
            echo "   ✅ $project_name uploaded successfully"
        else
            echo "   ❌ $project_name upload failed"
        fi
        
        # Small delay between batches
        sleep 2
    done
}

# Main execution
echo "🔧 Step 1: Creating directory structure..."
create_fab_dirs

if [ $? -eq 0 ]; then
    echo "✅ Directory structure created successfully"
    echo ""
    echo "🔧 Step 2: Uploading images..."
    upload_fab_images
    
    echo ""
    echo "🎉 Upload complete!"
    echo "🌐 Your images are now available at:"
    echo "   https://christinamday.com/images/fab-lab/[project-name]/[image.jpg]"
    echo ""
    echo "🔗 Test a few URLs:"
    echo "   https://christinamday.com/images/fab-lab/Hammered-Metal-Flowers/IMG_9900.jpeg"
    echo "   https://christinamday.com/images/fab-lab/Blue-Cow/IMG_9407.jpeg"
    echo ""
    echo "🔧 Next steps:"
    echo "1. Set up cdn.christinamday.com subdomain in hosting control panel"
    echo "2. Update Vercel environment variable to use cdn.christinamday.com"
    echo "3. Deploy to Vercel and test the art fabrication page"
else
    echo "❌ Directory creation failed. Check your credentials and network."
fi

# Cleanup
rm "$FTP_SCRIPT" 
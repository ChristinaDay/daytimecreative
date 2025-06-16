#!/bin/bash

# Debug FTP connection to see what's actually on the server
echo "🔍 Debugging FTP server structure..."

# Configuration (same as working upload-media.sh)
FTP_HOST="106.0.62.101"
FTP_USER="christinaday@daytimecreative.com"
FTP_PASS="N@tsum3S0s3k1!"

# Create a temporary file for FTP commands
FTP_SCRIPT=$(mktemp)

# Create debug script
cat > "$FTP_SCRIPT" << EOF
set ssl:verify-certificate no
set ftp:passive-mode true
set net:timeout 30
open -u $FTP_USER,$FTP_PASS $FTP_HOST

# See where we start
echo "=== CURRENT DIRECTORY ==="
pwd

# List contents of home directory
echo "=== HOME DIRECTORY CONTENTS ==="
ls -la

# Check if media directory exists
echo "=== CHECKING FOR MEDIA DIRECTORY ==="
ls -la media 2>/dev/null || echo "No media directory found"

# Check if media/portfolio exists  
echo "=== CHECKING FOR MEDIA/PORTFOLIO ==="
ls -la media/portfolio 2>/dev/null || echo "No media/portfolio directory found"

# Try to see what's in the root
echo "=== TRYING TO GO TO ROOT ==="
cd /
pwd
ls -la

quit
EOF

echo "📤 Running FTP debug..."
lftp -f "$FTP_SCRIPT"

# Cleanup
rm "$FTP_SCRIPT" 
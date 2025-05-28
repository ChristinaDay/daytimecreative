#!/bin/bash

# Exit on error
set -e

# FTP credentials
FTP_HOST="106.0.62.101"
FTP_USER="christinaday@christinamday.com"
FTP_PASS="N@tsum3S0s3k1!"
REMOTE_DIR="public_html" # Try without leading slash

# Build the project (static export)
echo "Building the project..."
npm run build

# Upload the out folder to the server (excluding images directory)
echo "Uploading 'out' folder to the server (excluding images directory)..."
lftp -u "$FTP_USER","$FTP_PASS" $FTP_HOST <<EOF
set ssl:verify-certificate no
set ftp:list-options -a
set ftp:passive-mode on
set net:timeout 30
set net:max-retries 3
pwd
ls -la
mirror -R -e -v --exclude images/ ./out $REMOTE_DIR
quit
EOF

echo "Deployment complete! Your site should be live at https://daytimecreative.com/"
echo "Note: Images directory was excluded from upload as images are already on the server." 
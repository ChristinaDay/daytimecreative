#!/bin/bash

# Move large images from FTP root to public_html/images/ for web access

echo "🚀 Moving large images to web-accessible location..."

# FTP connection details
FTP_HOST="106.0.62.101"
FTP_USER="chris194"
FTP_PASS="N@tsum3S0s3k1!"

# List of large images to move
LARGE_IMAGES=(
    "zc_website_2015.gif"
    "zc_website_2017.gif"
    "Screen Shot 2020-06-15 at 7.36.53 PM.png"
    "zerocater-web-2015.png"
    "zc_website-hero_2017.gif"
    "zerocater-hero-2017.gif"
    "Screen Shot 2020-06-12 at 12.00.30 AM.png"
    "zerocater-web-2017.png"
    "Screen+Shot+2021-03-12+at+2.20.47+PM.png"
    "zc_website2014.gif"
    "zerocater-web-2014.gif"
    "Screen+Shot+2021-03-12+at+2.16.28+PM.png"
)

# Create FTP script
cat > /tmp/move_images.ftp << EOF
set ftp:ssl-allow no
open -u $FTP_USER,$FTP_PASS $FTP_HOST
EOF

# Add move commands for each image
for image in "${LARGE_IMAGES[@]}"; do
    echo "Moving: $image"
    cat >> /tmp/move_images.ftp << EOF
mv "$image" "public_html/images/$image"
EOF
done

# Close FTP script
echo "quit" >> /tmp/move_images.ftp

# Execute FTP commands
echo "📁 Executing FTP move commands..."
lftp -f /tmp/move_images.ftp

# Clean up
rm /tmp/move_images.ftp

echo "✅ Large images moved to public_html/images/"
echo "🌐 Images should now be accessible via web server" 
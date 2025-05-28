#!/bin/bash

# Configuration
FTP_HOST="106.0.62.101"
FTP_USER="christinaday@daytimecreative.com"
FTP_PASS="N@tsum3S0s3k1!"
REMOTE_BASE_DIR="/media/portfolio"

# Create a temporary file for FTP commands
FTP_SCRIPT=$(mktemp)

# Function to create directory structure
create_dirs() {
    cat > "$FTP_SCRIPT" << EOF
set ssl:verify-certificate no
open -u $FTP_USER,$FTP_PASS $FTP_HOST
mkdir -p $REMOTE_BASE_DIR
mkdir -p $REMOTE_BASE_DIR/zerocater
mkdir -p $REMOTE_BASE_DIR/zerocater/web-marketing
mkdir -p $REMOTE_BASE_DIR/zerocater/snacks-kitchens
mkdir -p $REMOTE_BASE_DIR/betterview
mkdir -p $REMOTE_BASE_DIR/betterview/spotlights
mkdir -p $REMOTE_BASE_DIR/betterview/customizable-ui
mkdir -p $REMOTE_BASE_DIR/betterview/property-intelligence
mkdir -p $REMOTE_BASE_DIR/hackerdao
quit
EOF
}

# Function to upload files
upload_files() {
    cat > "$FTP_SCRIPT" << EOF
set ssl:verify-certificate no
open -u $FTP_USER,$FTP_PASS $FTP_HOST
cd $REMOTE_BASE_DIR/zerocater/web-marketing
put "public/images/ZeroCater/WebMarketingBranding/Screen Shot 2020-06-15 at 7.36.53 PM.png" -o "zerocater-web-2015.png"
put "public/images/ZeroCater/WebMarketingBranding/zc_website-hero_2017.gif" -o "zerocater-hero-2017.gif"
put "public/images/ZeroCater/WebMarketingBranding/Screen Shot 2020-06-12 at 12.00.30 AM.png" -o "zerocater-web-2017.png"
put "public/images/ZeroCater/WebMarketingBranding/zc_website2014.gif" -o "zerocater-web-2014.gif"
put "public/images/ZeroCater/WebMarketingBranding/Screen Shot 2020-06-11 at 6.29.14 PM.png" -o "zerocater-web-2014-1.png"
put "public/images/ZeroCater/WebMarketingBranding/Screen Shot 2020-06-11 at 6.29.54 PM.png" -o "zerocater-web-2014-2.png"
put "public/images/ZeroCater/WebMarketingBranding/zc_website-hero_2020.gif" -o "zerocater-hero-2020.gif"
put "public/images/ZeroCater/WebMarketingBranding/Screen Shot 2020-06-11 at 6.31.14 PM.png" -o "zerocater-web-2014-3.png"

cd $REMOTE_BASE_DIR/betterview/spotlights
put "public/images/Betterview/Spotlights/Screen+Shot+2021-03-12+at+2.20.47+PM.png" -o "betterview-spotlights-1.png"
put "public/images/Betterview/Spotlights/Screen+Shot+2021-03-12+at+2.16.28+PM.png" -o "betterview-spotlights-2.png"
put "public/images/Betterview/Spotlights/portfolio-betterviewAsset+19@2x.png" -o "betterview-spotlights-3.png"
put "public/images/Betterview/Spotlights/betterview-spotlights1.png" -o "betterview-spotlights-4.png"

cd $REMOTE_BASE_DIR/betterview/customizable-ui
put "public/images/Betterview/Customizable UI/betterview-customizableUI4.png" -o "betterview-customizable-ui-1.png"
put "public/images/Betterview/Customizable UI/betterview-propertyintelligence1.png" -o "betterview-customizable-ui-2.png"

cd $REMOTE_BASE_DIR/betterview/property-intelligence
put "public/images/Betterview/Property Intelligence/betterview-propertyintelligence2.png" -o "betterview-property-intelligence-1.png"

cd $REMOTE_BASE_DIR/hackerdao
put "public/images/HackerDAO/hackerdao-illustration-big.png" -o "hackerdao-illustration-big.png"
put "public/images/HackerDAO/hackerdao-logos.png" -o "hackerdao-logos.png"
put "public/images/HackerDAO/hackerdao-illustration-hero.png" -o "hackerdao-illustration-hero.png"
put "public/images/HackerDAO/hackerdao-illustration-bw.png" -o "hackerdao-illustration-bw.png"

quit
EOF
}

# Create a mapping file for updating references in the code
create_mapping() {
    cat > "media-mapping.json" << EOF
{
  "zerocater": {
    "web-marketing": {
      "Screen Shot 2020-06-15 at 7.36.53 PM.png": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-web-2015.png",
      "zc_website-hero_2017.gif": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-hero-2017.gif",
      "Screen Shot 2020-06-12 at 12.00.30 AM.png": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-web-2017.png",
      "zc_website2014.gif": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-web-2014.gif",
      "Screen Shot 2020-06-11 at 6.29.14 PM.png": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-web-2014-1.png",
      "Screen Shot 2020-06-11 at 6.29.54 PM.png": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-web-2014-2.png",
      "zc_website-hero_2020.gif": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-hero-2020.gif",
      "Screen Shot 2020-06-11 at 6.31.14 PM.png": "https://daytimecreative.com/media/portfolio/zerocater/web-marketing/zerocater-web-2014-3.png"
    }
  },
  "betterview": {
    "spotlights": {
      "Screen+Shot+2021-03-12+at+2.20.47+PM.png": "https://daytimecreative.com/media/portfolio/betterview/spotlights/betterview-spotlights-1.png",
      "Screen+Shot+2021-03-12+at+2.16.28+PM.png": "https://daytimecreative.com/media/portfolio/betterview/spotlights/betterview-spotlights-2.png",
      "portfolio-betterviewAsset+19@2x.png": "https://daytimecreative.com/media/portfolio/betterview/spotlights/betterview-spotlights-3.png",
      "betterview-spotlights1.png": "https://daytimecreative.com/media/portfolio/betterview/spotlights/betterview-spotlights-4.png"
    },
    "customizable-ui": {
      "betterview-customizableUI4.png": "https://daytimecreative.com/media/portfolio/betterview/customizable-ui/betterview-customizable-ui-1.png",
      "betterview-propertyintelligence1.png": "https://daytimecreative.com/media/portfolio/betterview/customizable-ui/betterview-customizable-ui-2.png"
    },
    "property-intelligence": {
      "betterview-propertyintelligence2.png": "https://daytimecreative.com/media/portfolio/betterview/property-intelligence/betterview-property-intelligence-1.png"
    }
  },
  "hackerdao": {
    "hackerdao-illustration-big.png": "https://daytimecreative.com/media/portfolio/hackerdao/hackerdao-illustration-big.png",
    "hackerdao-logos.png": "https://daytimecreative.com/media/portfolio/hackerdao/hackerdao-logos.png",
    "hackerdao-illustration-hero.png": "https://daytimecreative.com/media/portfolio/hackerdao/hackerdao-illustration-hero.png",
    "hackerdao-illustration-bw.png": "https://daytimecreative.com/media/portfolio/hackerdao/hackerdao-illustration-bw.png"
  }
}
EOF
}

# Main execution
echo "Creating directory structure..."
create_dirs
lftp -f "$FTP_SCRIPT"

echo "Uploading files..."
upload_files
lftp -f "$FTP_SCRIPT"

echo "Creating mapping file..."
create_mapping

# Cleanup
rm "$FTP_SCRIPT"

echo "Done! Please check media-mapping.json for the new file locations."
echo "Next steps:"
echo "1. Update your code to use the new URLs from media-mapping.json"
echo "2. Remove the large files from your Git repository"
echo "3. Commit the changes" 
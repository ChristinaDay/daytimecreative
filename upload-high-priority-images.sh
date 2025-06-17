#!/bin/bash

# Upload HIGH priority images to CDN
# This will save ~44MB from your Vercel deployment

echo "🚀 Uploading HIGH priority images to CDN..."

lftp -c "
set ftp:ssl-allow no
open -u christinaday@christinamday.com,N@tsum3S0s3k1! 106.0.62.101
put "public/images/zc_website_2015.gif" "public_html/images/zc_website_2015.gif"
put "public/images/zc_website_2017.gif" "public_html/images/zc_website_2017.gif"
put "public/images/Screen Shot 2020-06-15 at 7.36.53 PM.png" "public_html/images/Screen Shot 2020-06-15 at 7.36.53 PM.png"
put "public/images/zerocater-web-2015.png" "public_html/images/zerocater-web-2015.png"
put "public/images/zc_website-hero_2017.gif" "public_html/images/zc_website-hero_2017.gif"
put "public/images/zerocater-hero-2017.gif" "public_html/images/zerocater-hero-2017.gif"
put "public/images/Screen Shot 2020-06-12 at 12.00.30 AM.png" "public_html/images/Screen Shot 2020-06-12 at 12.00.30 AM.png"
put "public/images/zerocater-web-2017.png" "public_html/images/zerocater-web-2017.png"
put "public/images/Screen+Shot+2021-03-12+at+2.20.47+PM.png" "public_html/images/Screen+Shot+2021-03-12+at+2.20.47+PM.png"
put "public/images/zc_website2014.gif" "public_html/images/zc_website2014.gif"
put "public/images/zerocater-web-2014.gif" "public_html/images/zerocater-web-2014.gif"
put "public/images/Screen+Shot+2021-03-12+at+2.16.28+PM.png" "public_html/images/Screen+Shot+2021-03-12+at+2.16.28+PM.png"
quit
"

echo "✅ Upload complete!"
echo "💡 Next steps:"
echo "   1. Run 'npm run update-image-refs' to update code references"
echo "   2. Run 'npm run check-size' to verify savings"
echo "   3. Test your site to ensure images load correctly"

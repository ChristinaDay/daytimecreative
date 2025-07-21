const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshots() {
  console.log('🚀 Starting screenshot capture of updrift.me...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('📱 Navigating to updrift.me...');
    await page.goto('https://updrift.me/', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Wait a bit for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take full page screenshot
    console.log('📸 Taking full page screenshot...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-full-page.png'),
      fullPage: true
    });

    // Take viewport screenshot
    console.log('📸 Taking viewport screenshot...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-viewport.png'),
      fullPage: false
    });

    // Take mobile screenshot
    console.log('📱 Taking mobile screenshot...');
    await page.setViewport({ width: 375, height: 667 });
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-mobile.png'),
      fullPage: true
    });

    // Take tablet screenshot
    console.log('📱 Taking tablet screenshot...');
    await page.setViewport({ width: 768, height: 1024 });
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-tablet.png'),
      fullPage: true
    });

    console.log('✅ Screenshots saved to public/images/');
    console.log('📁 Files created:');
    console.log('  - updrift-full-page.png');
    console.log('  - updrift-viewport.png');
    console.log('  - updrift-mobile.png');
    console.log('  - updrift-tablet.png');

  } catch (error) {
    console.error('❌ Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots().catch(console.error); 
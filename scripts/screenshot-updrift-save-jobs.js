const puppeteer = require('puppeteer');
const path = require('path');

async function takeUpdriftSaveJobsScreenshots() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to updrift.me jobs page
    console.log('Navigating to updrift.me jobs page...');
    await page.goto('https://updrift.me/jobs', { waitUntil: 'networkidle2' });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Take screenshot of full page
    console.log('Taking screenshot of jobs page...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-me-jobs-page.png'),
      fullPage: true
    });
    
    // Scroll down and take another screenshot
    console.log('Scrolling and taking second screenshot...');
    await page.evaluate(() => window.scrollTo(0, 600));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-me-jobs-page-scrolled.png'),
      fullPage: true
    });
    
    // Try to find and click a save button
    console.log('Looking for save buttons...');
    const saveButtons = await page.$$('button, svg');
    console.log(`Found ${saveButtons.length} potential buttons`);
    
    // Take screenshot showing save functionality
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-me-save-jobs-functionality.png'),
      fullPage: true
    });
    
    console.log('Screenshots saved successfully!');
    
  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
}

takeUpdriftSaveJobsScreenshots(); 
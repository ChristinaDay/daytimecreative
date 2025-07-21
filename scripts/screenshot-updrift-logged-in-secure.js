const puppeteer = require('puppeteer');
const path = require('path');

async function takeLoggedInScreenshots() {
  console.log('🚀 Starting secure logged-in screenshot capture of updrift.me...');
  
  // Use provided credentials
  const email = 'christinamday@gmail.com';
  const password = 'M1sh1m@!';
  
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

    // Look for login/signup buttons
    console.log('🔍 Looking for login elements...');
    
    // Try to find login button - common selectors
    const loginSelectors = [
      'a[href*="login"]',
      'a[href*="signin"]', 
      'button[data-testid*="login"]',
      'button:contains("Login")',
      'button:contains("Sign In")',
      '[data-testid="login"]',
      '.login-button',
      '.signin-button'
    ];

    let loginButton = null;
    for (const selector of loginSelectors) {
      try {
        loginButton = await page.$(selector);
        if (loginButton) {
          console.log(`✅ Found login button with selector: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    if (!loginButton) {
      console.log('❌ Could not find login button automatically');
      console.log('📸 Taking screenshot of current state for manual review...');
      await page.screenshot({
        path: path.join(__dirname, '../public/images/updrift-login-page.png'),
        fullPage: true
      });
      return;
    }

    // Click login button
    console.log('🖱️ Clicking login button...');
    await loginButton.click();
    
    // Wait for login form to appear
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Look for email/username field
    const emailSelectors = [
      'input[type="email"]',
      'input[name="email"]',
      'input[name="username"]',
      'input[placeholder*="email"]',
      'input[placeholder*="Email"]',
      '#email',
      '#username'
    ];

    let emailField = null;
    for (const selector of emailSelectors) {
      try {
        emailField = await page.$(selector);
        if (emailField) {
          console.log(`✅ Found email field with selector: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    if (!emailField) {
      console.log('❌ Could not find email field');
      console.log('📸 Taking screenshot of login form for manual review...');
      await page.screenshot({
        path: path.join(__dirname, '../public/images/updrift-login-form.png'),
        fullPage: true
      });
      return;
    }

    // Fill in email
    console.log('📧 Filling in email...');
    await emailField.type(email);
    
    // Look for password field
    const passwordSelectors = [
      'input[type="password"]',
      'input[name="password"]',
      '#password'
    ];

    let passwordField = null;
    for (const selector of passwordSelectors) {
      try {
        passwordField = await page.$(selector);
        if (passwordField) {
          console.log(`✅ Found password field with selector: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    if (!passwordField) {
      console.log('❌ Could not find password field');
      return;
    }

    // Fill in password
    console.log('🔐 Filling in password...');
    await passwordField.type(password);
    
    // Look for submit button
    const submitSelectors = [
      'button[type="submit"]',
      'input[type="submit"]',
      'button:contains("Login")',
      'button:contains("Sign In")',
      'button:contains("Submit")',
      '[data-testid="submit"]'
    ];

    let submitButton = null;
    for (const selector of submitSelectors) {
      try {
        submitButton = await page.$(selector);
        if (submitButton) {
          console.log(`✅ Found submit button with selector: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    if (!submitButton) {
      console.log('❌ Could not find submit button');
      return;
    }

    // Click submit button
    console.log('🖱️ Submitting login form...');
    await submitButton.click();
    
    // Wait for login to complete
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Check if login was successful by looking for logged-in indicators
    const loggedInIndicators = [
      'a[href*="logout"]',
      'button:contains("Logout")',
      '.user-menu',
      '.profile-menu',
      '[data-testid="user-menu"]',
      // Add more specific indicators for UpDrift
      '[data-testid="user-avatar"]',
      '.user-profile',
      '.dashboard',
      '[data-testid="dashboard"]',
      // Look for any user-related content
      'a[href*="profile"]',
      'a[href*="settings"]',
      'a[href*="account"]'
    ];

    let isLoggedIn = false;
    for (const selector of loggedInIndicators) {
      try {
        const element = await page.$(selector);
        if (element) {
          console.log(`✅ Found logged-in indicator: ${selector}`);
          isLoggedIn = true;
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    // If no specific indicators found, check if we're on a different page (dashboard, etc.)
    if (!isLoggedIn) {
      const currentUrl = page.url();
      const pageTitle = await page.title();
      console.log(`📍 Current URL: ${currentUrl}`);
      console.log(`📄 Page title: ${pageTitle}`);
      
      // If we're not on the homepage anymore, assume login worked
      if (!currentUrl.includes('updrift.me/') || currentUrl !== 'https://updrift.me/') {
        console.log('✅ Login appears successful - redirected to different page');
        isLoggedIn = true;
      } else {
        console.log('❌ Login may have failed - still on homepage');
        console.log('📸 Taking screenshot of current state...');
        await page.screenshot({
          path: path.join(__dirname, '../public/images/updrift-login-failed.png'),
          fullPage: true
        });
        return;
      }
    }

    console.log('✅ Successfully logged in! Taking screenshots...');

    // Take screenshots of logged-in experience
    console.log('📸 Taking logged-in desktop screenshot...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-logged-in-desktop.png'),
      fullPage: true
    });

    // Take viewport screenshot
    console.log('📸 Taking logged-in viewport screenshot...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-logged-in-viewport.png'),
      fullPage: false
    });

    // Take mobile screenshot
    console.log('📱 Taking logged-in mobile screenshot...');
    await page.setViewport({ width: 375, height: 667 });
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-logged-in-mobile.png'),
      fullPage: true
    });

    // Take tablet screenshot
    console.log('📱 Taking logged-in tablet screenshot...');
    await page.setViewport({ width: 768, height: 1024 });
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-logged-in-tablet.png'),
      fullPage: true
    });

    console.log('✅ Logged-in screenshots saved to public/images/');
    console.log('📁 Files created:');
    console.log('  - updrift-logged-in-desktop.png');
    console.log('  - updrift-logged-in-viewport.png');
    console.log('  - updrift-logged-in-mobile.png');
    console.log('  - updrift-logged-in-tablet.png');

  } catch (error) {
    console.error('❌ Error taking logged-in screenshots:', error);
  } finally {
    await browser.close();
  }
}

takeLoggedInScreenshots().catch(console.error); 
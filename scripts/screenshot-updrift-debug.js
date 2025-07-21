const puppeteer = require('puppeteer');
const path = require('path');

async function debugLogin() {
  console.log('🚀 Starting debug login capture of updrift.me...');
  
  const browser = await puppeteer.launch({
    headless: false, // Show browser window so we can see what's happening
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

    // Take screenshot of homepage
    console.log('📸 Taking homepage screenshot...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-homepage-debug.png'),
      fullPage: true
    });

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
        path: path.join(__dirname, '../public/images/updrift-no-login-button.png'),
        fullPage: true
      });
      return;
    }

    // Click login button
    console.log('🖱️ Clicking login button...');
    await loginButton.click();
    
    // Wait for login form to appear
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Take screenshot of login form
    console.log('📸 Taking login form screenshot...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-login-form-debug.png'),
      fullPage: true
    });
    
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
      return;
    }

    // Fill in email
    console.log('📧 Filling in email...');
    await emailField.type('christinamday@gmail.com');
    
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
    await passwordField.type('M1sh1m@!');
    
    // Take screenshot after filling credentials
    console.log('📸 Taking screenshot after filling credentials...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-credentials-filled.png'),
      fullPage: true
    });
    
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
    console.log('⏳ Waiting for login to complete...');
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    // Take screenshot after login attempt
    console.log('📸 Taking screenshot after login attempt...');
    await page.screenshot({
      path: path.join(__dirname, '../public/images/updrift-after-login-attempt.png'),
      fullPage: true
    });
    
    // Check if login was successful by looking for logged-in indicators
    const loggedInIndicators = [
      'a[href*="logout"]',
      'button:contains("Logout")',
      '.user-menu',
      '.profile-menu',
      '[data-testid="user-menu"]',
      '.avatar',
      '.user-avatar',
      '[data-testid="avatar"]'
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

    if (!isLoggedIn) {
      console.log('❌ Login may have failed - no logged-in indicators found');
      console.log('📸 Taking screenshot of current state...');
      await page.screenshot({
        path: path.join(__dirname, '../public/images/updrift-login-failed-debug.png'),
        fullPage: true
      });
      
      // Let's also check the page content to see what's there
      const pageContent = await page.content();
      console.log('📄 Page title:', await page.title());
      console.log('🔍 Looking for error messages...');
      
      // Look for common error messages
      const errorSelectors = [
        '.error',
        '.error-message',
        '[data-testid="error"]',
        '.alert',
        '.alert-danger'
      ];
      
      for (const selector of errorSelectors) {
        try {
          const errorElement = await page.$(selector);
          if (errorElement) {
            const errorText = await errorElement.textContent();
            console.log(`❌ Found error: ${errorText}`);
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      return;
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

    console.log('✅ Debug screenshots saved to public/images/');
    console.log('📁 Files created:');
    console.log('  - updrift-homepage-debug.png');
    console.log('  - updrift-login-form-debug.png');
    console.log('  - updrift-credentials-filled.png');
    console.log('  - updrift-after-login-attempt.png');
    console.log('  - updrift-logged-in-desktop.png');
    console.log('  - updrift-logged-in-viewport.png');

  } catch (error) {
    console.error('❌ Error during debug:', error);
  } finally {
    // Keep browser open for manual inspection
    console.log('🔍 Browser will stay open for manual inspection. Close it when done.');
    // await browser.close();
  }
}

debugLogin().catch(console.error); 
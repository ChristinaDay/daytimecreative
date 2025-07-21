# Screenshot Tools

This guide covers how to take screenshots of websites for case studies and documentation.

## 🚀 Quick Start

```bash
# Take screenshots of updrift.me
npm run screenshot-updrift

# Take logged-in screenshots (requires credentials)
export UPDRIFT_EMAIL="your-email@example.com"
export UPDRIFT_PASSWORD="your-password"
npm run screenshot-updrift-logged-in-secure
```

## 📸 Available Screenshot Scripts

### Updrift.me Screenshots
- **Script**: `scripts/screenshot-updrift.js`
- **Command**: `npm run screenshot-updrift`
- **Output**: 4 screenshots in different formats
  - `updrift-full-page.png` - Full page screenshot
  - `updrift-viewport.png` - Viewport screenshot (used in case study)
  - `updrift-mobile.png` - Mobile view (375x667)
  - `updrift-tablet.png` - Tablet view (768x1024)

### Updrift.me Logged-In Screenshots ✅
- **Script**: `scripts/screenshot-updrift-logged-in-secure.js`
- **Command**: `npm run screenshot-updrift-logged-in-secure`
- **Status**: **Successfully tested and working!**
- **Output**: 4 logged-in screenshots
  - `updrift-logged-in-desktop.png` - Full page logged-in view (used in case study)
  - `updrift-logged-in-viewport.png` - Viewport logged-in view
  - `updrift-logged-in-mobile.png` - Mobile logged-in view
  - `updrift-logged-in-tablet.png` - Tablet logged-in view

## 🛠️ How It Works

The screenshot system uses **Puppeteer** to:
1. **Launch a headless browser**
2. **Navigate to the target website**
3. **Wait for content to load**
4. **Take screenshots at different viewport sizes**
5. **Save files to `public/images/`**

## 📱 Multiple Device Views

Each screenshot script captures:
- **Desktop**: 1920x1080 (full page and viewport)
- **Mobile**: 375x667 (iPhone-like)
- **Tablet**: 768x1024 (iPad-like)

## 🎯 Using Screenshots in Case Studies

### 1. Update the Hero Image
```tsx
<Image
  src="/images/updrift-viewport.png"
  alt="Updrift.me homepage screenshot"
  fill
  className="object-cover"
  priority
/>
```

### 2. Add Overlay Text
```tsx
<div className="absolute bottom-4 left-4 text-white">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">
    Project Name
  </h2>
  <p className="text-sm md:text-base opacity-90">
    Project description
  </p>
</div>
```

## 🔧 Creating New Screenshot Scripts

### Authentication Setup
For sites requiring login, use environment variables for security:

```bash
# Set credentials (don't commit these to git)
export SITE_EMAIL="your-email@example.com"
export SITE_PASSWORD="your-password"

# Run secure screenshot script
npm run screenshot-site-logged-in-secure
```

### Template
```javascript
const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Desktop screenshot
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://example.com/', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await page.screenshot({
      path: path.join(__dirname, '../public/images/example-viewport.png'),
      fullPage: false
    });

    // Mobile screenshot
    await page.setViewport({ width: 375, height: 667 });
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await page.screenshot({
      path: path.join(__dirname, '../public/images/example-mobile.png'),
      fullPage: true
    });

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots().catch(console.error);
```

### Steps to Add New Screenshot Script
1. **Create script** in `scripts/` directory
2. **Add npm script** to `package.json`
3. **Update this documentation** with new script details
4. **Test the script** to ensure it works

## 📋 Best Practices

### Timing
- **Wait for network idle** - Ensures all content loads
- **Add delay after load** - Allows animations to complete
- **Reload for different viewports** - Ensures proper mobile rendering

### File Naming
- **Use descriptive names** - `project-name-viewport.png`
- **Include device type** - `project-name-mobile.png`
- **Keep consistent format** - All lowercase with hyphens

### Image Usage
- **Use viewport screenshots** for hero images
- **Use full-page screenshots** for detailed views
- **Use mobile screenshots** for responsive design examples

## 🐛 Troubleshooting

### Common Issues
- **Timeout errors**: Increase timeout in `page.goto()`
- **Blank screenshots**: Add longer delays after page load
- **Missing content**: Wait for specific elements with `page.waitForSelector()`

### Debug Mode
```javascript
// Launch browser in non-headless mode to see what's happening
const browser = await puppeteer.launch({
  headless: false, // Shows browser window
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
```

## 📚 Related Documentation

- **[Image Workflow Guide](../IMAGE-WORKFLOW.md)** - How to handle large images
- **[Scripts Reference](scripts.md)** - All available npm scripts
- **[Case Study Guidelines](case-studies.md)** - How to structure case studies

---

*Last updated: January 2025* 
const puppeteer = require('puppeteer');

async function checkTimeline() {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1200, height: 800 }
  });
  
  const page = await browser.newPage();
  
  try {
    // Go to the resume page
    await page.goto('http://localhost:3001/resume', { 
      waitUntil: 'networkidle0',
      timeout: 10000 
    });
    
    // Wait a bit for animations
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check if timeline lines exist
    const lines = await page.$$('svg line');
    console.log(`Found ${lines.length} SVG lines on the page`);
    
    // Check specific timeline containers
    const experienceContainer = await page.$('.max-w-4xl .relative svg');
    console.log(`Experience timeline SVG container exists: ${!!experienceContainer}`);
    
    // Debug SVG timeline lines vs working Scorpio lines
    const debugComparison = await page.evaluate(() => {
      // Find Scorpio lines (working)
      const scorpioLines = document.querySelectorAll('svg line[stroke="#fffbe6"][x1="1100"], svg line[stroke="#5cc6ff"][x1="1100"]');
      
      // Find timeline lines (new SVG approach)
      const timelineLines = document.querySelectorAll('svg line[stroke="#fffbe6"][x1="33"], svg line[stroke="#5cc6ff"][x1="33"]');
      
      // Find timeline SVG containers
      const timelineSVGs = document.querySelectorAll('svg[class*="z-5"]');
      
      return {
        scorpioLines: Array.from(scorpioLines).map((line, i) => {
          const rect = line.getBoundingClientRect();
          const styles = window.getComputedStyle(line);
          return {
            index: i,
            x1: line.getAttribute('x1'),
            y1: line.getAttribute('y1'),
            x2: line.getAttribute('x2'),
            y2: line.getAttribute('y2'),
            stroke: line.getAttribute('stroke'),
            strokeWidth: line.getAttribute('strokeWidth'),
            opacity: line.getAttribute('opacity'),
            filter: line.getAttribute('filter'),
            visible: rect.width > 0 && rect.height > 0 && styles.display !== 'none',
            boundingBox: { x: Math.round(rect.x), y: Math.round(rect.y), width: rect.width, height: rect.height }
          };
        }),
        timelineLines: Array.from(timelineLines).map((line, i) => {
          const rect = line.getBoundingClientRect();
          const styles = window.getComputedStyle(line);
          return {
            index: i,
            x1: line.getAttribute('x1'),
            y1: line.getAttribute('y1'),
            x2: line.getAttribute('x2'),
            y2: line.getAttribute('y2'),
            stroke: line.getAttribute('stroke'),
            strokeWidth: line.getAttribute('strokeWidth'),
            opacity: line.getAttribute('opacity'),
            filter: line.getAttribute('filter'),
            visible: rect.width > 0 && rect.height > 0 && styles.display !== 'none',
            boundingBox: { x: Math.round(rect.x), y: Math.round(rect.y), width: rect.width, height: rect.height },
            computedStyles: {
              stroke: styles.stroke,
              strokeWidth: styles.strokeWidth,
              opacity: styles.opacity,
              display: styles.display,
              visibility: styles.visibility
            },
            filterExists: !!document.getElementById(line.getAttribute('filter')?.replace('url(#', '').replace(')', ''))
          };
        }),
        timelineSVGs: Array.from(timelineSVGs).map((svg, i) => {
          const rect = svg.getBoundingClientRect();
          const styles = window.getComputedStyle(svg);
          return {
            index: i,
            classes: svg.className.baseVal || svg.className,
            visible: rect.width > 0 && rect.height > 0 && styles.display !== 'none',
            boundingBox: { x: Math.round(rect.x), y: Math.round(rect.y), width: rect.width, height: rect.height }
          };
        })
      };
    });
    
    console.log('Debug comparison:', JSON.stringify(debugComparison, null, 2));
    
    // Take screenshot
    await page.screenshot({ 
      path: 'timeline-debug.png',
      fullPage: true 
    });
    
    console.log('Screenshot saved as timeline-debug.png');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

checkTimeline();
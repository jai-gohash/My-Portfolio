import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (!response.ok()) {
      console.log('NETWORK FAILED:', response.status(), response.url());
    }
  });
  
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });
  await browser.close();
})();

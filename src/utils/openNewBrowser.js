import puppeteer from 'puppeteer';

// TODO: need to check --proxy-server
const openNewBrowser = (options = {}) =>
  puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080'
    ],
    ...options
  });

export default openNewBrowser;

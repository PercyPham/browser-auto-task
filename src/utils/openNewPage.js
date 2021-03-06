/* eslint-disable no-underscore-dangle */
const blockedResourceTypes = [
  'image',
  'media',
  'font',
  'texttrack',
  'object',
  'beacon',
  'csp_report',
  'imageset'
];

// TODO: check necessity of each skippedResource
const skippedResources = [
  'quantserve',
  'adzerk',
  'doubleclick',
  'adition',
  'exelator',
  'sharethrough',
  'cdn.api.twitter',
  'google-analytics',
  'googletagmanager',
  'google',
  'fontawesome',
  'facebook',
  'analytics',
  'optimizely',
  'clicktale',
  'mixpanel',
  'zedo',
  'clicksor',
  'tiqcdn',
  'laz-img-cdn',
  'vn-test-11.slatic'
];

const openNewPage = async (browser, url) => {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', request => {
    const requestUrl = request._url.split('?')[0].split('#')[0];
    if (
      blockedResourceTypes.indexOf(request.resourceType()) !== -1 ||
      skippedResources.some(resource => requestUrl.indexOf(resource) !== -1)
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });
  await page.goto(url);
  return page;
};

export default openNewPage;

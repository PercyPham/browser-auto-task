export default async (page, selector) => {
  await page.waitFor(selector);
  const value = await page.$eval(selector, el => el.innerHTML);
  return value;
};

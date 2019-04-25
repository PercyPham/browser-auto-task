import getProductPriceFromPage from './getProductPriceFromPage';
import getStandardShippingFeeFromPageWithAddress from './getStandardShippingFeeFromPageWithAddress';

const openNewPage = async (browser, productUrl) => {
  const productPage = await browser.newPage();
  await productPage.goto(productUrl);
  return productPage;
};

const getInfosFromPage = async (productPage, { shippingAddress }) => {
  const infos = {};

  infos.productPrice = await getProductPriceFromPage(productPage);
  infos.shippingFee = await getStandardShippingFeeFromPageWithAddress(productPage, shippingAddress);

  return infos;
};

const getProductInfos = async (browser, options) => {
  const productPage = await openNewPage(browser, options.productUrl);
  const infos = await getInfosFromPage(productPage, options);
  await productPage.close();
  return infos;
};

export default getProductInfos;

import getProductPriceFromPage from './getProductPriceFromPage';
import getStandardShippingFeeFromPageWithAddress from './getStandardShippingFeeFromPageWithAddress';
import openNewPage from '../utils/openNewPage';

const getInfosFromPage = async (productPage, shippingAddress) => {
  const infos = {};

  infos.productPrice = await getProductPriceFromPage(productPage);
  infos.shippingFee = await getStandardShippingFeeFromPageWithAddress(productPage, shippingAddress);

  return infos;
};

const getProductInfos = async (browser, productUrl, shippingAddress) => {
  const productPage = await openNewPage(browser, productUrl);
  const infos = await getInfosFromPage(productPage, shippingAddress);
  await productPage.close();
  return infos;
};

export default getProductInfos;

import convertRawPriceTextToNumber from './utils/convertRawPriceTextToNumber';
import getElementValueFromPage from './utils/getElementValueFromPage';

const getProductPriceFromPage = async productPage => {
  const productPriceSelector = '.pdp-price';
  const productPriceRawText = await getElementValueFromPage(productPage, productPriceSelector);
  const productPrice = convertRawPriceTextToNumber(productPriceRawText);
  return productPrice;
};

export default getProductPriceFromPage;

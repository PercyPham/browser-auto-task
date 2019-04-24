import convertRawPriceTextToNumber from './utils/convertRawPriceTextToNumber';

const getProductPriceFromPage = async productPage => {
  const productPriceSelector = '.pdp-price';

  await productPage.waitFor(productPriceSelector);

  const productPriceRawText = await productPage.$eval(productPriceSelector, el => el.innerHTML);

  const productPrice = convertRawPriceTextToNumber(productPriceRawText);

  return productPrice;
};

export default getProductPriceFromPage;

import getProductPriceFromPage from './getProductPriceFromPage';
import getStandardShippingFeeFromPageAndAddress from './getStandardShippingFeeFromPageAndAddress';

const getProductPrice = async (browser, { productLink, shippingAddress }) => {
  const productPage = await browser.newPage();
  await productPage.goto(productLink);

  const productPrice = await getProductPriceFromPage(productPage);
  const shippingFee = await getStandardShippingFeeFromPageAndAddress(productPage, shippingAddress);
  const totalPrice = productPrice + shippingFee;

  await productPage.close();

  return { productPrice, shippingFee, totalPrice };
};

export default getProductPrice;

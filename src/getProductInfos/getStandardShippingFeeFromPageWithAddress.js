import convertRawPriceTextToNumber from './utils/convertRawPriceTextToNumber';
import waitForResponseFromSpecificRequestUrl from './utils/waitForResponseFromSpecificRequestUrl';
import getElementValueFromPage from './utils/getElementValueFromPage';

const selectAddressFromList = async (productPage, addressName) => {
  const listSelector = '.location-list__item.automation-location-list-item';
  await productPage.waitFor(listSelector);
  await productPage.$$eval(
    listSelector,
    (elements, passedAddressName) => {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].innerHTML === passedAddressName) {
          elements[i].click();
          break;
        }
      }
    },
    addressName
  );
};

const selectLevel1Address = async (productPage, addessLevel1) => {
  await selectAddressFromList(productPage, addessLevel1);
};

const selectLevel2Address = async (productPage, addessLevel2) => {
  const appearedAddressLevel1Selector = '.location-nav__list .location-nav__item';
  await productPage.waitFor(appearedAddressLevel1Selector);
  await selectAddressFromList(productPage, addessLevel2);
};

const selectLevel3Address = async (productPage, addessLevel3) => {
  const appearedAddressLevel2Selector = '.location-nav__list .location-nav__item:nth-child(2)';
  await productPage.waitFor(appearedAddressLevel2Selector);
  await selectAddressFromList(productPage, addessLevel3);
};

const waitForNewShippingFeeToShowUp = async productPage => {
  const newShippingFeeRequestUrl = 'https://pdpdesc-m.lazada.vn/pcdetailSync';
  const checkResponse = responseText => !!responseText;
  await waitForResponseFromSpecificRequestUrl(productPage, newShippingFeeRequestUrl, checkResponse);
};

const getStandardShippingFeeFromPage = async productPage => {
  const standardShippingFeeSelector =
    '.delivery__option .delivery-option-item_type_standard .delivery-option-item__body .delivery-option-item__shipping-fee';
  const standardShippingFeeRawText = await getElementValueFromPage(
    productPage,
    standardShippingFeeSelector
  );
  const standardShippingFee = convertRawPriceTextToNumber(standardShippingFeeRawText);
  return standardShippingFee;
};

const getStandardShippingFeeFromPageWithAddress = async (productPage, shippingAddress) => {
  const changeLocationButtonSelector = '.location-link';
  await productPage.click(changeLocationButtonSelector);

  await selectLevel1Address(productPage, shippingAddress.level1);
  await selectLevel2Address(productPage, shippingAddress.level2);
  await selectLevel3Address(productPage, shippingAddress.level3);

  await waitForNewShippingFeeToShowUp(productPage);
  const standardShippingFee = await getStandardShippingFeeFromPage(productPage);

  return standardShippingFee;
};

export default getStandardShippingFeeFromPageWithAddress;

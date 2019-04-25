import puppeteer from 'puppeteer';
import getProductInfos from './src/getProductInfos';

(async () => {
  const browser = await puppeteer.launch();

  const product = {
    productLink:
      'https://www.lazada.vn/products/may-pha-ca-phe-gran-gaggia-deluxe-i102287966-s102748363.html?spm=a2o4n.col_prod_list.list.1.71d7233dTOqQzt&abtest=&pos=1&abbucket=&acm=201711102.1003.1.2262604&scm=1007.16901.116837.100200300000000',
    shippingAddress: {
      level1: 'Bắc Kạn',
      level2: 'Huyện Na Rì',
      level3: 'Xã Cư Lễ'
    }
  };

  const result = await getProductInfos(browser, product);
  console.log(result);

  await browser.close();
})();

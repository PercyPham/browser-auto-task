/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import getProductInfos from './src/getProductInfos';
import openNewBrowser from './src/utils/openNewBrowser';

(async () => {
  const browser = await openNewBrowser();

  const productUrls = [
    'https://www.lazada.vn/products/tuyet-doi-nong-nguoi-sat-sieu-anh-hung-tich-hop-den-led-mau-xanh-duong-danh-cho-nam-cua-quan-doi-sang-trong-quan-su-dong-ho-deo-tay-quoc-te-i103463206-s104314554.html?spm=a2o4n.pdp.recommendation_2.5.6f822381sFD5wS&mp=1&clickTrackInfo=6c5f9893-2cd2-4218-be65-43f022b5bf10__103463206__8960__trigger2i__124582__0.395__0.3952573__0.0__0.40014562__0.114725__0.5952573__4__1__PDPV2V__244__null__null__0__&scm=1007.16389.126158.0',
    'https://www.lazada.vn/products/1kg-2-hop-vien-mam-dau-nanh-hong-sam-tang-vong-1-lam-dep-da-i264756094-s379822572.html?spm=a2o4n.home.flashSale.3.19056afeYfBH02&search=1&mp=1&c=fs&clickTrackInfo=%7B%22rs%22%3A%220.4687139712334767%22%2C%22rmc%22%3A%229%22%2C%22type%22%3A%22entrance%22%2C%22isw%22%3A%220.3%22%2C%22userid%22%3A%22%22%2C%22sca%22%3A%228%22%2C%22abid%22%3A%22104841%22%2C%22itemid%22%3A%22264756094_1_i2i_0.346_0.4687139712334767%22%2C%22pvid%22%3A%22912b99e8-dc43-4b8e-9c68-5fc1a6ac4746%22%2C%22pos%22%3A%221%22%2C%22ccw%22%3A%220.1%22%2C%22rms%22%3A%220.03829787234042553%22%2C%22c2i%22%3A%220.0%22%2C%22scm%22%3A%221007.17760.104841.%22%2C%22rmw%22%3A%220.05833468367323318%22%2C%22isrw%22%3A%220.1%22%2C%22rkw%22%3A%220.4%22%2C%22ss%22%3A%220.017097470950102528%22%2C%22i2i%22%3A%220.173%22%2C%22ms%22%3A%220.346%22%2C%22itr%22%3A%220.015%22%2C%22mt%22%3A%22i2i%22%2C%22its%22%3A%221000%22%2C%22anonid%22%3A%2223ae3de0-32ab-4d40-fde1-357cd2cac4e9%22%2C%22ppw%22%3A%220.0%22%2C%22isc%22%3A%2215%22%2C%22config%22%3A%22%22%7D&scm=1007.17760.104841.0',
    'https://www.lazada.vn/products/1-kg-2-hu-vien-mam-dau-nanh-hong-sam-mat-ong-tre-hoa-tang-vong-1-i249183782-s327988480.html?spm=a2o4n.pdp.recommendation_2.3.560b68333SDuki&mp=1&clickTrackInfo=9cce64e6-8983-4412-8f50-ddb2de1595d3__249183782__2374__trigger2i__124582__0.624__0.6285888__0.0__0.7157764__0.106495__0.6285888__2__1__PDPV2V__244__null__1__0__&scm=1007.16389.126158.0',
    'https://www.lazada.vn/products/1kg-2-hop-mam-dau-nanh-nguyen-xo-tang-vong-1-lam-dep-da-i264738641-s379834619.html?spm=a2o4n.pdp.recommendation_1.3.560b68333SDuki&mp=1&clickTrackInfo=b998dd34-8368-41e7-9080-22b4832f512c__264738641__14470__trigger2i__124572__0.71__0.71026516__0.0__0.7153035__0.160605__0.71026516__2__null__null__null__null__null__null__&scm=1007.16389.126158.0',
    'https://www.lazada.vn/products/chiclife-dong-ho-the-thao-nam-nu-chong-nuoc-man-hinh-led-dien-tu-i246797095-s317957538.html?spm=a2o4n.searchlistcategory.list.1.794134d2EYPRnw&search=1',
    'https://www.lazada.vn/products/nhan-nam-titan-da-xanh-cuc-dep-i167935404-s256326834.html?spm=a2o4n.pdp.recommendation_2.3.52957c82AY20q1&mp=1&clickTrackInfo=46f60df0-5353-4aab-8056-0904cbb584c4__167935404__13627__trigger2i__124582__0.013__0.049568802__0.0__0.74437606__1.0__0.2495688__2__1__PDPV2V__244__null__null__0__&scm=1007.16389.126158.0',
    'https://www.lazada.vn/products/dien-thoai-gia-re-sieu-ben-du-phu-kien-pin-sac-o-dau-re-hon-hoan-tien-lai-i249477811-s328612158.html?spm=a2o4n.home.just4u.15.1f3d6afen2fryd&scm=1007.17519.116426.0&pvid=a8a9a05b-deb3-4633-8e2f-668c08d7c698&clickTrackInfo=tcExpIds%3A243%3Btcsceneid%3AHPJFY%3Bbuyernid%3A23ae3de0-32ab-4d40-fde1-357cd2cac4e9%3Btcbid%3A2%3Btcboost%3A0%3Bpvid%3Aa8a9a05b-deb3-4633-8e2f-668c08d7c698%3B',
    'https://www.lazada.vn/products/dien-thoai-doc-co-nokia-6300-gia-re-tang-kem-sim-3g-i262898282-s374990127.html?spm=a2o4n.pdp.recommendation_2.5.34c93837tXC0VP&mp=1&clickTrackInfo=9e59da8b-b0e5-4bed-8e3a-f87b87e1b7c3__262898282__4518__trigger2i__124582__0.078__0.10065674__0.0__0.53113484__0.14136499__0.30065674__4__1__PDPV2V__244__null__null__0__&scm=1007.16389.126158.0',
    'https://www.lazada.vn/products/dien-thoai-6300-zin-full-phu-kien-i252193876-s335597264.html?spm=a2o4n.pdp.recommendation_2.5.32777cbbIufdBx&mp=1&clickTrackInfo=4b26eff6-1eb5-4d33-b024-322d9682f18e__252193876__11029__trigger2i__124582__0.28__0.29712608__0.0__0.62252164__0.10554499__0.49712607__4__1__PDPV2V__244__null__null__0__&scm=1007.16389.126158.0'
  ];

  const shippingAddress = {
    level1: 'Bắc Kạn',
    level2: 'Huyện Na Rì',
    level3: 'Xã Cư Lễ'
  };

  const beginTimeOfAll = Date.now();

  for (const productUrl of productUrls) {
    const beginTime = Date.now();
    const productInfo = await getProductInfos(browser, productUrl, shippingAddress);
    const endTime = Date.now();
    console.log(`Time: ${endTime - beginTime} ms, got: ${JSON.stringify(productInfo)}`);
  }

  const endTimeOfAll = Date.now();

  console.log(
    `Average ms per Request: ${Math.ceil((endTimeOfAll - beginTimeOfAll) / productUrls.length)} ms`
  );

  await browser.close();
})();

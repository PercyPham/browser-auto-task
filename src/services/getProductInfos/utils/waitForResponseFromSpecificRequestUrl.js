const waitForResponseFromSpecificRequestUrl = (page, requestUrl, checkResponse = () => true) => {
  return new Promise(resolve => {
    page.on('response', async function responseDataHandler(response) {
      if (response.url().indexOf(requestUrl) >= 0) {
        const text = await response.text();
        if (checkResponse(text)) resolve('ok');
      }
    });
  });
};

export default waitForResponseFromSpecificRequestUrl;

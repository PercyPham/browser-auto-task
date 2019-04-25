const waitForResponseFromSpecificRequestUrl = (page, requestUrl) => {
  return new Promise(resolve => {
    page.on('response', async function responseDataHandler(response) {
      if (response.url().indexOf(requestUrl) >= 0) {
        let text;
        try {
          text = await response.text();
        } catch (err) {
          console.log(err);
        }
        if (text) resolve('ok');
      }
    });
  });
};

export default waitForResponseFromSpecificRequestUrl;

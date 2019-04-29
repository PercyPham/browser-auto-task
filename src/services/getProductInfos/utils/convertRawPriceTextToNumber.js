const convertTextToNum = str => {
  const regex = /\d+/g;
  const priceTextList = str.match(regex) || [0];
  const priceText = priceTextList.join('');
  const price = parseInt(priceText, 10);
  return price;
};

export default convertTextToNum;

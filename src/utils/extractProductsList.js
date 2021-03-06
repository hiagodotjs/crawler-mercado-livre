const cheerio = require('cheerio');

const shouldStopScraping = (productsListSize, results, limit, checkedItems) => (
  productsListSize < results.length
  && productsListSize < limit
  && checkedItems < results.length
);

const formatPrice = (value) => Number(value.trim().replace('R$ ', '').replace(' ', '.'));

const formatStore = (value) => value.trim().replace('por ', '');

const getText = ($, result, elementClass) => $(result).find(elementClass).text();

const extractProductsList = (document, limit = 10) => {
  const productsList = [];

  const $ = cheerio.load(document);
  const results = $('#searchResults').find('li').children().toArray();

  if (results.length > 0) {
    let productsListSize = 0;
    let checkedItems = 0;
    for (
      let index = 0;
      shouldStopScraping(productsListSize, results, limit, checkedItems);
      index++
    ) {
      checkedItems++;

      const rawName = getText($, results[index], '.main-title');

      if (rawName) {
        const rawPrice = getText($, results[index], '.item__price');
        const rawState = getText($, results[index], '.item__condition');
        const rawStore = getText($, results[index], '.item__brand-title-tos');

        productsListSize++;

        productsList.push({
          name: rawName.trim(),
          link: $(results[index]).find('a').attr('href'),
          price: rawPrice ? formatPrice(rawPrice) : null,
          state: rawState ? rawState.trim() : null,
          store: rawStore ? formatStore(rawStore) : null,
        });
      }
    }
  }

  return productsList;
};

module.exports = extractProductsList;

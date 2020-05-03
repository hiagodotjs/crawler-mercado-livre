const { get } = require('axios');

const MERCADO_LIVRE_ENDPOINT = 'https://lista.mercadolivre.com.br/';

const mercadoLivreProductSearch = (query) => get(`${MERCADO_LIVRE_ENDPOINT}$${query}`);

module.exports = {
  mercadoLivreProductSearch,
};

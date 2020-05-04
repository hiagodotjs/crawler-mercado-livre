const { mercadoLivreProductSearch } = require('../services/mercadoLivre');
const extractProductsList = require('../utils/extractProductsList');

const searchProducts = async (req, res) => {
  try {
    const { search, limit } = req.body;

    const response = await mercadoLivreProductSearch(search);

    const productsList = extractProductsList(response.data, limit);

    return res.status(200).send({ products: productsList });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  searchProducts,
};

const express = require('express');

const crawlerController = require('../controllers/crawler');
const crawlerMiddleware = require('../middlewares/crawler');

const router = express.Router({ mergeParams: true });

router.post('/mercado-livre/products',
  crawlerMiddleware.onSearchProducts,
  crawlerController.searchProducts);

module.exports = router;

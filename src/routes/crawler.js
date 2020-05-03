const express = require('express');

const crawlerController = require('../controllers/crawler');

const router = express.Router({ mergeParams: true });

router.post('/mercado-livre/products', (req, res) => crawlerController.searchProducts(req, res));

module.exports = router;

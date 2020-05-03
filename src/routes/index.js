const express = require('express');

const crawlerRoutes = require('./crawler');

const router = express.Router();

router.use('/crawler', crawlerRoutes);

module.exports = router;


const express = require('express');
const router = express.Router();
const stocksController = require('../controllers/stocksController');

router.get('/stocks/:symbol', stocksController.getStockInfo);

module.exports = router;

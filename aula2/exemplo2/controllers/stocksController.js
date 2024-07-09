
const alphaVantageService = require('../services/alphaVantageService');

exports.getStockInfo = async (req, res, next) => {
    try {
        const symbol = req.params.symbol;
        const stockData = await alphaVantageService.getStockData(symbol);
        res.render('index', { stockData });
    } catch (error) {
        next(error);
    }
};

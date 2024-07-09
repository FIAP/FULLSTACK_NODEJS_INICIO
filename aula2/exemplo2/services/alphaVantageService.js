
const axios = require('axios');
const apiKey = process.env.ALPHA_VANTAGE_API_KEY; 

exports.getStockData = async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    const response = await axios.get(url);
    const timeSeries = response.data['Time Series (Daily)'];
    const latestDate = Object.keys(timeSeries)[0];
    const latestData = timeSeries[latestDate];

    return {
        symbol,
        open: latestData['1. open'],
        high: latestData['2. high'],
        low: latestData['3. low'],
        close: latestData['4. close'],
        volume: latestData['5. volume'],
    };
};

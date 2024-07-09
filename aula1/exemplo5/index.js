const axios = require('axios');

exports.handler = async (event) => {
    const { symbol } = event;

    if (!symbol) {
        return {
            statusCode: 400,
            body: JSON.stringify('Missing parameter: symbol is required.')
        };
    }

    const apiKey = '12132w33refs3awew3533';
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify('Error fetching data from Alpha Vantage API.')
        };
    }
};
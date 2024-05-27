// functions/fetchStockData.js

import yahooFinance from 'yahoo-finance2';

exports.handler = async (event, context) => {
    const { symbol } = event.queryStringParameters;

    try {
        const result = await yahooFinance.quoteSummary(symbol, { modules: ['price'] });
        const currentValue = result.price.regularMarketPrice;
        const previousClose = result.price.regularMarketPreviousClose;
        const changePercentage = ((currentValue - previousClose) / previousClose) * 100;

        return {
            statusCode: 200,
            body: JSON.stringify({
                indexName: symbol,
                currentValue: currentValue.toFixed(2),
                changePercentage: changePercentage.toFixed(2)
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch stock data' })
        };
    }
};

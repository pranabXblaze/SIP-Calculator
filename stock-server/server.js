import express from 'express';
import yahooFinance from 'yahoo-finance2';
import cors from 'cors';
const app = express();
const port = 5000 ;


app.use(cors());

app.get('/api/stock',async (req, res) => {
    const symbol = req.query.symbol;

    try {
        const result = await yahooFinance.quoteSummary(symbol, { modules: ['price'] });
        const currentValue = result.price.regularMarketPrice;
        const previousClose = result.price.regularMarketPreviousClose;
        const changePercentage = ((currentValue - previousClose) / previousClose) * 100;

        res.json({
            indexName: symbol,
            currentValue: currentValue.toFixed(2),
            changePercentage: changePercentage.toFixed(2)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

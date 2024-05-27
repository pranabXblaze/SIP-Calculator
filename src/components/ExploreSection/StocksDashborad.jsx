import React, { useState, useEffect } from 'react';
import StockCard from './StockCard';

const StockDashboard = () => {
    const [stockData, setStockData] = useState([]);
    const symbols = ['^NSEI', '^BSESN', '^NSEBANK'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Promise.all(symbols.map(async (symbol) => {
                    const response = await fetch(`/.netlify/functions/fetchStockData?symbol=${symbol}`);
                    const result = await response.json();

                    return result;
                }));

                setStockData(data);
            } catch (error) {
                console.error("Error fetching stock data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-around p-4 bg-gray-100">
            {stockData.map(stock => (
                <StockCard 
                    key={stock.indexName}
                    indexName={stock.indexName}
                    currentValue={stock.currentValue}
                    changePercentage={stock.changePercentage}
                />
            ))}
        </div>
    );
};

export default StockDashboard;

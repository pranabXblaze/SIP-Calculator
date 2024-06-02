import React from 'react'
import { useEffect,useState,useId } from 'react';
import StockCard from './StockCard'
export default function TempStock() {
    
    const [stockData, setStockData] = useState([]);
    const symbols = [
        '^NSEI', '^BSESN', '^NSEBANK', '^CNXIT', '^CNXPHARMA', '^CNXFMCG', 
        '^CNXAUTO', '^CNXENERGY', '^CNXREALTY', 'RELIANCE.NS', 'TCS.NS', 
        'HDFCBANK.NS', 'INFY.NS', 'ICICIBANK.NS', 'HINDUNILVR.NS', 
        'KOTAKBANK.NS', 'SBIN.NS', 'BHARTIARTL.NS', 'ASIANPAINT.NS', 
        'MARUTI.NS', 'LT.NS', 'HCLTECH.NS', 'AXISBANK.NS', 'M&M.NS', 
        'BAJFINANCE.NS', 'TITAN.NS', 'WIPRO.NS', 'TATAMOTORS.NS', 
        'ULTRACEMCO.NS'
    ];
    


    const indices = {
        '^NSEI' : 'Nifty50',
         '^BSESN':'BSESensex' , 
        '^NSEBANK':'NiftyBank',
         '^CNXIT':'NiftyIT',
         '^CNXPHARMA':'NiftyPharma',
         '^CNXFMCG':'NiftyFMCG',
         '^CNXAUTO':'NiftyAuto',
        '^CNXENERGY': 'NiftyEnergy',
        '^CNXREALTY': 'NiftyRealty',
         'RELIANCE.NS':'Reliance Industries',
         'TCS.NS':'Tata Consultancy Services (TCS)',
         'HDFCBANK.NS':'HDFC Bank',
         'INFY.NS':'Infosys',
          'ICICIBANK.NS':'ICICI Bank',
             'HINDUNILVR.NS':'Hindustan Unilever',
  'KOTAKBANK.NS':'KotakBank',
'SBIN.NS' :'SBI',
  'BHARTIARTL.NS':'Bharti Airtel',
  'ASIANPAINT.NS':'Asian Paints',
  'MARUTI.NS':'Maruti Suzuki',
  'LT.NS':'Larsen & Toubro (L&T)',
  'HCLTECH.NS':'HCL Technologies',
  'AXISBANK.NS':'Axis Bank',
  'M&M.NS':'Mahindra & Mahindra',
  'BAJFINANCE.NS':'Bajaj Finance',
  'TITAN.NS':'Titan Company',
  'WIPRO.NS':'Wipro',
 'TATAMOTORS.NS':'Tata Motors' ,
  'ULTRACEMCO.NS':'UltraTech Cement',
    }
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Promise.all(
                    Object.keys(indices)
                    .map(async (symbol) => {
                    const response = await fetch(`http://localhost:5000/api/stock?symbol=${symbol}`);
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
    <div className='flex flex-wrap justify-center'>
    {
        stockData.map((stock,key) => (
            <StockCard 
            key={stock.id}
            indexName={indices[stock.indexName]}
            currentValue={stock.currentValue}
            changePercentage={stock.changePercentage}
            />
        ))
}
    </div>
  )
}
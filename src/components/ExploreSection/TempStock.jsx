import React from 'react'
import { useEffect,useState,useId } from 'react';
import StockCard from './StockCard'
import { ClimbingBoxLoader } from 'react-spinners';
export default function TempStock() {
    const id = useId();
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const symbols = [
    //     '^NSEI', '^BSESN', '^NSEBANK', '^CNXIT', '^CNXPHARMA', '^CNXFMCG', 
    //     '^CNXAUTO', '^CNXENERGY', '^CNXREALTY', 'RELIANCE.NS', 'TCS.NS', 
    //     'HDFCBANK.NS', 'INFY.NS', 'ICICIBANK.NS', 'HINDUNILVR.NS', 
    //     'KOTAKBANK.NS', 'SBIN.NS', 'BHARTIARTL.NS', 'ASIANPAINT.NS', 
    //     'MARUTI.NS', 'LT.NS', 'HCLTECH.NS', 'AXISBANK.NS', 'M&M.NS', 
    //     'BAJFINANCE.NS', 'TITAN.NS', 'WIPRO.NS', 'TATAMOTORS.NS', 
    //     'ULTRACEMCO.NS'
    // ];
    
    const indices = {
        //Nitfy symbols
        '^NSEI' : 'Nifty50',
         '^BSESN':'BSESensex' , 
        '^NSEBANK':'NiftyBank',
         '^CNXIT':'NiftyIT',
         '^CNXPHARMA':'NiftyPharma',
         '^CNXFMCG':'NiftyFMCG',
         '^CNXAUTO':'NiftyAuto',
        '^CNXENERGY': 'NiftyEnergy',
        '^CNXREALTY': 'NiftyRealty',
        //Energy Resources
         'RELIANCE.NS':'Reliance Industries',
         "ONGC.NS" : 'Oil and Natural Gas Corporation',
        
         //Tech & IT
         'TCS.NS':'Tata Consultancy Services (TCS)',
         'WIPRO.NS':'Wipro',
       
         // Banking 
         'ICICIBANK.NS':'ICICI Bank',
          'HDFCBANK.NS':'HDFC Bank',
          'KOTAKBANK.NS':'KotakBank',
         
          
          //Consumer Goods
          'HINDUNILVR.NS':'Hindustan Unilever',
          'ITC.NS' : 'ITC Limited',
          'NESTLEIND.NS' : 'Nestle India',
          'TATACONSUM.NS' : 'Tata Consumer Products',
          
          //Pharma
          'SUNPHARMA.NS':'Sun Pharmaceutical Industries',
          'DRREDDY.NS' : "Dr. Reddy's Laboratories",
          'CIPLA.NS' : 'Cipla Limited',
         
           
          // Automobiles
          'TATAMOTORS.NS':'Tata Motors' ,
          'M':'Mahindra & Mahindra',
          'HEROMOTOCO.NS':'Hero MotoCorp',
          'MARUTI.NS':'Maruti Suzuki',
          'BAJAJ-AUTO.NS' : 'Bajaj Auto',
      
          
          //Industrial & Conglomerates 
          'ADANIPORTS.NS': 'Adani Ports & SEZ',
          
          
         
        
      }
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Promise.all(
                    Object.keys(indices)
                    .map(async (symbol) => {
                    const response = await fetch(`https://hmf3pjregg.ap-southeast-2.awsapprunner.com/api/stock?symbol=${symbol}`);
                    const result = await response.json();
                    return result;
                }));
               setLoading(false);
                setStockData(data);
            } catch (error) {
                console.error("Error fetching stock data", error);
            }
        };
        fetchData();
    }, []);
 
   
  if (!loading)
    return (
    <div className='flex flex-wrap justify-center'>
    {      
        stockData.map((stock,key=id) => (
            <StockCard 
            key={`${key}`}
            indexName={indices[stock.indexName]}
            currentValue={stock.currentValue}
            changePercentage={stock.changePercentage}
            />
        ))
    }
    </div>
  )
  else {
    return (
       <ClimbingBoxLoader color='#1A53CD' size={20} loading={true}/>
    )
  }
}

import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import AlertDialogue from './Alert-dialogue';
import { Skeleton } from "@/components/ui/skeleton"
import { useId,useState,useEffect } from 'react';
import StockCard from '../StockCard';
import useAuth, { AuthProvider } from '../../../context/AuthContext';
//Stock Symbols
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
   
   "ONGC.NS" : 'Oil and Natural Gas Corporation',
   'BPCL.NS':'Bharat Petroleum Corporation Limited',
   'NTPC.NS': 'NTPC Limited',
   'GAIL.NS': 'GAIL India Limited',
   'IOC.NS' : 'Indian Oil Corporation',
   'POWERGRID.NS': 'Power Grid Corporation of India',
   'TATAPOWER.NS' : 'Tata Power',
   'ADANIGREEN.NS' : 'Adani Green Energy Limited',
   'NHPC.NS' : 'NHPC Limited',
   
   //Tech & IT
   'TCS.NS':'Tata Consultancy Services (TCS)',
   'WIPRO.NS':'Wipro',
   'INFY.NS':'Infosys',
   'HCLTECH.NS': 'HCL Technologies',
   'TECHM.NS':'Tech Mahindra',
   
   // Banking 
   'ICICIBANK.NS':'ICICI Bank',
    'HDFCBANK.NS':'HDFC Bank',
    'KOTAKBANK.NS':'KotakBank',
    'SBIN.NS' :'SBI',
    'AXISBANK.NS' :"Axis Bank",
    'BAJFINANCE.NS':'Bajaj Finance',
    
    //Consumer Goods
    'HINDUNILVR.NS':'Hindustan Unilever',
    'ITC.NS' : 'ITC Limited',
    'NESTLEIND.NS' : 'Nestle India',
    'TATACONSUM.NS' : 'Tata Consumer Products',
    'BRITANNIA.NS' : 'Britania Industries',
    'DABUR.NS':'Dabur India Limited',
    'EMAMILTD.NS' : 'Emami Limited',
    'GODREJCP.NS' : 'Godrej Consumer Products Limited',
    'MCDOWELL-N.NS': 'United Spirits Limited',
    'COLPAL.NS' : 'Colgate-Palmolive (India) Limited',
    'MARICO.NS' : 'Marico Limited',
    'VBL.NS' : 'Varun Beverages Limited',
    'HATSUN.NS' : 'Hatsun Agro Product Limited',
    'TASTYBITE.NS':'Tasty Bite Eatables Limited',
    'PGHH.NS' : 'Procter & Gamble Hygiene and Health Care Limited',
    'VENKEYS.NS' : "Venky's (India) Limited",
    'VSTIND.NS' : 'VST Industris Limited',
    'GODFRYPHLP.NS': 'Godfrey Phillips India Limited',
    
    //Pharma
    'SUNPHARMA.NS':'Sun Pharmaceutical Industries',
    'DRREDDY.NS' : "Dr. Reddy's Laboratories",
    'CIPLA.NS' : 'Cipla Limited',
    'DIVISLAB.NS' : "Divi's Laboratories",
    'BIOCON.NS' : 'Biocon Limited',
    'LUPIN.NS' : 'Lupin Limited',
    'AUROPHARMA.NS' : 'Aurobindo Pharma',
    //'CADILAHC.NS' : 'Cadila HealthCare', Internal err 500
     
    // Automobiles
    'TATAMOTORS.NS':'Tata Motors' ,
    'M':'Mahindra & Mahindra',
    'HEROMOTOCO.NS':'Hero MOtoCorp',
    'MARUTI.NS':'Maruti Suzuki',
    'BAJAJ-AUTO.NS' : 'Bajaj Auto',
    'ASHOKLEY.NS' : 'Ashok Leyland',
    'EICHERMOT.NS' : 'Eicher Motors',
    'TVSMOTOR.NS' : 'TVS Motor Company',
    'ESCORTS.NS' : 'Escorts Limited',
    'BOSCHLTD.NS': 'Bosch Limited',

    //Industrial & Conglomerates 
    'ADANIPORTS.NS': 'Adani Ports & SEZ',
    'JSWSTEEL.NS' : 'JSW Steel',
    'TATASTEEL.NS' : 'TATA Steel',
    'LT.NS':'Larsen & Toubro (L&T)',
    'ULTRACEMCO.NS':'UltraTech Cement',
    'TITAN.NS':'Titan Company',
    'GRASIM.NS': 'Grasim Industries',
    'BHEL.NS' : 'Bharat Heavy Electricals Limited',
    'HINDALCO.NS' : 'Hindalco Industries',
    'SAIL.NS' : 'Steel Authority of India Limited',
    'ADANIENT.NS': 'Adani Enterprises',
    
    //Real Estate
    'DLF.NS': 'DLF Limited)',
    'GODREJPROP.NS': 'Godrej Properties',
    'OBEROIRLTY.NS':'Oberoi Realty',
    'PRESTIGE.NS' :'Prestige Estates Projects',
    'PHOENIXLTD.NS' : 'The Phoenix Mills',
    'SOBHA.NS' :'Sobha Limited',
    'BRIGADE.NS' :'Brigade Enterprises',
    'SUNTECK.NS' : 'Sunteck Realty',
    'MAHLIFE.NS' : 'Mahindra Lifespace Developers',
    'OMAXE.NS' :'Omaxe Limited',

    //Telecom
    'BHARTIARTL.NS':'Bharti Airtel',
    'ASIANPAINT.NS':'Asian Paints',
    'RELIANCE.NS':'Reliance-Jio part of Industries'
}

export default function Stocks({authProp}) {
  const [loading, setLoading] = useState(true);
  const [stockData, setStockData] = useState([]);
  const id = useId();
  const {authStatus} = useAuth()
 
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

  return (
    <AuthProvider value={{authStatus}}>
    <div  className='grid grid-cols-2 md:grid-cols-3 gap-4 my-8'>
    <ReactTypingEffect 
    className='text-6xl font-bold mx-[40px] md:h-1/2 h-[320px]'
     text={['Welcome!!', 'to Share Market']}
     speed={100}
     eraseSpeed={100}
     eraseDelay={1000}
     cursorRenderer ={ (cursor) => (<h1>{cursor}</h1>)}
     cursorClassName='text-gray-500'
     displayTextRenderer={(text) => 
      (
        <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
      )
      }
    />
    
    <div className='fixed bottom-4 mx-5 my-5 float-left'>
    <AlertDialogue/>
    </div>

    <div className='mx-5 my-20 col-span-1 md:col-span-2'>
    {
     (!loading && authStatus) &&  (
      <div className='flex flex-wrap justify-center'>        
        {stockData.map((stock,key=id) => (
            <StockCard 
            key={`${key}`}
            indexName={indices[stock.indexName]}
            currentValue={stock.currentValue}
            changePercentage={stock.changePercentage}
            />
        ))}
      </div>
     )
    } 
     {(loading && authStatus) && (
      <div className='flex flex-col flex-wrap gap-4'>
     <Skeleton className="w-[144px] h-[10px] sm:w-[700px] sm:h-[20px] rounded-full"/>
     <Skeleton className="w-[144px] h-[10px] sm:w-[200px] sm:h-[20px] rounded-full" />  
     <Skeleton className="w-[160px] h-[10px] sm:w-[600px] sm:h-[30px] rounded-full" />  
     <Skeleton className="w-[172px] h-[10px] sm:w-[900px] sm:h-[30px] rounded-full" />  
     <Skeleton className="w-[144px] h-[10px] sm:w-[800px] sm:h-[30px] rounded-full" />  
     <Skeleton className="w-[144px] h-[10px] sm:w-[700px] sm:h-[30px] rounded-full" />
     <Skeleton className="w-[144px] h-[10px] sm:w-[900px] sm:h-[30px] rounded-full" />  
     <Skeleton className="w-[144px] h-[10px] sm:w-[950px] sm:h-[30px] rounded-full" />  
     </div>
    ) 
    }
    </div>
    </div>
  /</AuthProvider>
  )
}

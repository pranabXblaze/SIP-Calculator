import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import StockCard from '../StockCard';
export default function Stocks() {
  return (
    <div  className='flex justify-center items-start my-8'>
    <ReactTypingEffect 
    className='text-6xl font-bold'
     text={['Welcome!!', 'to Share Market']}
     speed={100}
     eraseSpeed={100}
     eraseDelay={1000}
     cursorRenderer ={ (cursor) => (<h1>{cursor}</h1>)}
     cursorClassName='text-gray-500 w-2'
     displayTextRenderer={(text, i) => 
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
    <div>
     {
      /* All stocks they can get! */
     }
    {/* <StockCard /> */}
    </div>
    </div>
  )
}

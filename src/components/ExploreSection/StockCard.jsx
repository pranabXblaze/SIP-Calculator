import React, { useId } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const StockCard = ({ indexName, currentValue, changePercentage,className='', }) => {
    const isPositive = (changePercentage >= 0);
     const id = useId();
    return (
        <div className={`border border-gray-300 rounded-lg p-4 bg-gray-500 shadow-md hover:shadow-lg transition-shadow duration-300 w-auto m-2 ${className}`} id={id}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{indexName}</h3>
                <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-600'}`}>
                    <FontAwesomeIcon icon={isPositive ? faArrowUp : faArrowDown} />
                    <span className="ml-1">{changePercentage}%</span>
                </div>
            </div>
            <div className="text-2xl font-bold text-gray-800">
                {currentValue}
            </div>
        </div>
    );
};

export default StockCard;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const StockCard = ({ indexName, currentValue, changePercentage }) => {
    const isPositive = (changePercentage >= 0);

    return (
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-52 m-2">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{indexName}</h3>
                <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    <FontAwesomeIcon icon={isPositive ? faArrowUp : faArrowDown} />
                    <span className="ml-1">{changePercentage.toFixed(2)}%</span>
                </div>
            </div>
            <div className="text-2xl font-bold text-gray-800">
                {currentValue}
            </div>
        </div>
    );
};

export default StockCard;

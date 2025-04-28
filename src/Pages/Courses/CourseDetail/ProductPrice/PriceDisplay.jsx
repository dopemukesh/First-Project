import React from 'react';

const PriceDisplay = ({ original, discount, calculated }) => {
    return (
        <>
            <div className="mb-6">
                <div className="text-xl text-gray-500 mb-2">Premium Course</div>
                <div className="text-4xl font-bold">₹ {calculated} /-</div>
            </div>

            <div className="bg-white border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-400">
                    <span className="line-through">₹ {original}</span>
                    <span className="text-teal-600 dark:text-teal-500 ml-2">{discount}% off</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    <span className="countdown">23 hours</span> left at this price!
                </p>
            </div>
        </>
    );
};

export default PriceDisplay;
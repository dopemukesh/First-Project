import React from 'react';

const PriceDisplay = ({ original, discount, calculated }) => {
    return (
        <>
            <div className="mb-6">
                {/* Pricing Header */}
                <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-lg font-medium">Premium</h2>
                    <div className='flex items-center gap-2'>
                        <span className="line-through text-sm text-gray-400 dark:text-gray-500">₹ {original}</span>
                        <span className='flex items-center text-xs text-white py-1 px-2.5 w-fit bg-gradient-to-t from-orange-500 to-orange-400 rounded-full'>
                            {discount}% OFF
                        </span>
                    </div>
                </div>
                <div className='flex items-end gap-2'>
                    <p className="text-3xl font-bold">₹ {calculated}</p>
                    <span className="text-sm text-gray-400 dark:text-gray-500">/month</span>
                </div>
            </div>
        </>
    );
};

export default PriceDisplay;
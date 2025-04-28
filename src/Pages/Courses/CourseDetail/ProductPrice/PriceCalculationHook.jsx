import { useState, useEffect } from 'react';

export const defaultPrices = {
    original: "4999",
    discount: "60"
};

export const useDiscountCalculator = (originalPrice, discountPercent) => {
    const [prices, setPrices] = useState({
        original: originalPrice || defaultPrices.original,
        discount: discountPercent || defaultPrices.discount,
        calculated: "0"
    });

    useEffect(() => {
        const price = Number(prices.original);
        const discount = Number(prices.discount);
        const calculatedPrice = (price * (1 - discount / 100)).toFixed();

        setPrices(prev => ({
            ...prev,
            calculated: calculatedPrice
        }));
    }, [prices.original, prices.discount]);

    return prices;
};
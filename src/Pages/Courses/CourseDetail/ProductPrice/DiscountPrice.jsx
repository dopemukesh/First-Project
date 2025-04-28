import React from 'react';
import { useDiscountCalculator } from './PriceCalculationHook';
import PriceDisplay from './PriceDisplay';

const DiscountPrice = ({ originalPrice, discountPercent }) => {
    const prices = useDiscountCalculator(originalPrice, discountPercent);

    return <PriceDisplay {...prices} />;
};

export default DiscountPrice;
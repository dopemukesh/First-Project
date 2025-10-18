import React from 'react';
import { useDiscountCalculator } from './PriceCalculationHook';
import PriceDisplay from './PriceDisplay';
import courses from '../../../../api/Courses.json';
import { useParams } from 'react-router-dom';

const DiscountPrice = ( {data}) => {
    const { id } = useParams();  // id is a string from useParams
    const courseData = data.find((c) => c._id === id);

    const prices = useDiscountCalculator(courseData.originalPrice, null, courseData.discountedPrice);
    if (!prices) {
        return <div className="text-red-500">NaN</div>;
    }

    return <PriceDisplay {...prices} />;
};

export default DiscountPrice;
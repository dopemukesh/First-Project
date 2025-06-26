import React from 'react';
import { useDiscountCalculator } from './PriceCalculationHook';
import PriceDisplay from './PriceDisplay';
import courses from '../../../../api/Courses.json';
import { useParams } from 'react-router-dom';

const DiscountPrice = () => {
    const { id } = useParams();  // id is a string from useParams
    const courseData = courses.find((course) => course.id.toString() === id);  // convert course.id to string for comparison

    const prices = useDiscountCalculator(courseData.actualPrice, null, courseData.price);
    if (!prices) {
        return <div className="text-red-500">NaN</div>;
    }

    return <PriceDisplay {...prices} />;
};

export default DiscountPrice;
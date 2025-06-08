import React, { useState, useEffect } from 'react';

const predefinedColors = ['#FF5733', '#33FF57', '#3357FF', '#F033FF', '#FF33A6', '#33FFF5', '#FFDD33'];

const generateRandomValues = () => {
    const getRandomValue = (max) => Math.random() * max;

    // Generate a random number of circles between 4 and 6
    const numberOfCircles = Math.floor(Math.random() * 3) + 4; // Random number between 4 and 6

    const circles = Array.from({ length: numberOfCircles }, () => ({
        cx: getRandomValue(1008), // Constrain cx within the SVG width (0 to 1008)
        cy: getRandomValue(567),  // Constrain cy within the SVG height (0 to 567)
        r: 300,   // Fixed radius
        fill: predefinedColors[Math.floor(Math.random() * predefinedColors.length)],
    }));

    return circles;
};

const GradientsBg = ({ className }) => {
    const [circles, setCircles] = useState(generateRandomValues());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCircles(generateRandomValues());
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <svg
                className={`${className}`} // Apply the passed className here
                viewBox="0 0 1008.48 567.27"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <rect
                    className="bg transition-all duration-700"
                    id="bg"
                    x="0"
                    y="0"
                    width="1008.48"
                    height="567.27"
                    fill="#ffffff"
                ></rect>
                <defs>
                    <filter id="f1" x="-200%" y="-200%" width="500%" height="500%">
                        <feGaussianBlur stdDeviation="100"></feGaussianBlur>
                    </filter>
                </defs>
                {circles.map(({ cx, cy, r, fill }, index) => (
                    <circle
                        key={index}
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill={fill}
                        className="transition-all animate-pulse duration-700"
                        filter="url(#f1)"
                    ></circle>
                ))}
            </svg>
        </>
    );
};

export default GradientsBg;
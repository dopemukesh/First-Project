// Designed and developed by:
// - Mukesh Yadav

import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        const fadeTimer = setTimeout(() => {
            setOpacity(0);
        }, 1500);

        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 700);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] grid place-items-center h-screen w-screen bg-white dark:bg-gray-950 transition-opacity duration-1000 ease-out"
            style={{ opacity }}
            aria-live="polite"
            aria-busy="true"
        >
            <div className="flex items-center gap-2">
                <img
                    src="./logo/cwtLogo-animatedColor.svg"
                    alt="Loading..."
                    className="w-16 h-16"
                />
            </div>
        </div>
    );
};

export default Loader;
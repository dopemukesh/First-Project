/* eslint-disable no-unused-vars */
import React from "react";

const Testimonial = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-end pt-32 pb-16 px-4 overflow-hidden">

            {/* Cards Grid - Curved layout */}
            <div className="relative z-10 w-full max-w-6xl px-2 sm:px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 justify-items-center">
                    {/* Far Left */}
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-1 row-start-3 translate-y-12 sm:translate-y-16" />
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-1 row-start-2 translate-y-12 sm:translate-y-16" />

                    {/* Left side */}
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 row-start-3 translate-y-1" />
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 row-start-2 translate-y-1" />

                    {/* Left inner - between center line */}
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 sm:col-start-3 row-start-2 -translate-y-1/2" />

                    {/* Center */}
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-40 sm:h-44 bg-indigo-200 rounded-xl col-start-2 sm:col-start-3 md:col-start-4 row-start-1" />

                    {/* Right inner - between center line */}
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 sm:col-start-5 row-start-2 -translate-y-1/2" />

                    {/* Right side */}
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 sm:col-start-6 row-start-2 translate-y-1" />
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 sm:col-start-6 row-start-3 translate-y-1" />

                    {/* Far Right */}
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 sm:col-start-7 row-start-2 translate-y-12 sm:translate-y-16" />
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-36 sm:h-40 bg-indigo-200 rounded-xl col-start-2 sm:col-start-7 row-start-3 translate-y-12 sm:translate-y-16" />
                </div>
            </div>

            {/* Text Section */}
            <div className="relative z-10 text-center mt-16 px-2">
                <p className="text-xs sm:text-sm md:text-base text-gray-500">Testimonials</p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1">
                    Trusted by <span className="text-purple-500 font-bold">n+</span> Students<br /> across globe
                </h2>
            </div>
        </div>
    );
}

export default Testimonial;
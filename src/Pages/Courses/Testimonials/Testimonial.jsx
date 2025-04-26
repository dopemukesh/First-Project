/* eslint-disable no-unused-vars */
import React from "react";
import AnimatedCounter from "../../../Pages/Home/SocialStats/AnimatedCounter";

const Testimonial = () => {
    return (
        <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-end py-8 md:py-16 px-2 md:px-4 overflow-hidden">
            {/* Cards Grid - Curved layout */}
            <div className="relative z-10 w-full max-w-6xl">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 md:gap-4 justify-items-center">
                    {/* Far Left */}
                    <div className="hidden md:block w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-1 row-start-3 translate-y-8 sm:translate-y-12" />
                    <div className="hidden md:block w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-1 row-start-2 translate-y-8 sm:translate-y-12" />

                    {/* Left side */}
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-1 md:col-start-2 row-start-3 translate-y-1" />
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-1 md:col-start-2 row-start-2 translate-y-1" />

                    {/* Left inner - between center line */}
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-2 sm:col-start-2 md:col-start-3 row-start-2 -translate-y-1/2" />

                    {/* Center */}
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-32 sm:h-36 md:h-40 bg-indigo-200 rounded-xl col-start-2 sm:col-start-2 md:col-start-4 row-start-1" />

                    {/* Right inner - between center line */}
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-2 sm:col-start-3 md:col-start-5 row-start-2 -translate-y-1/2" />

                    {/* Right side */}
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-3 sm:col-start-4 md:col-start-6 row-start-2 translate-y-1" />
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl col-start-3 sm:col-start-4 md:col-start-6 row-start-3 translate-y-1" />

                    {/* Far Right */}
                    <div className="hidden md:block w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl md:col-start-7 row-start-2 translate-y-8 sm:translate-y-12" />
                    <div className="hidden md:block w-16 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-32 md:h-36 bg-indigo-200 rounded-xl md:col-start-7 row-start-3 translate-y-8 sm:translate-y-12" />
                </div>
            </div>

            {/* Text Section */}
            <div className="relative z-10 text-center mt-8 md:mt-16 px-2 md:px-4">
                <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2">
                    Testimonials
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Trusted by
                    {/* <span className="text-purple-500 font-bold"> */}
                        <AnimatedCounter end='22000' className='text-purple-500 font-bold' />
                    {/* </span> */}
                    Students across globe
                </h2>
            </div>
        </div>
    );
}

export default Testimonial;
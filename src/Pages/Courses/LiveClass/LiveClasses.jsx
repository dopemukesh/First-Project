/* eslint-disable no-unused-vars */
// LiveClasses.jsx

import React from "react";
import SearchBox from "../../../Components/Common/Search/SearchBox";
import { Button } from "../../../Components/Common/Button/Button";
import ClassCard from "./ClassCard";
import Container from "../../../Components/Common/Container/Container";
import TypeWriterText from '../../../Components/Common/TypeWriter/TypeWriterText';

const LiveClasses = () => {
    return (
        <Container className="py-14 px-4">
            <div className="flex flex-col gap-6">
                {/* Search Bar */}
                <div className="mb-2">
                    <SearchBox
                        icon="search"
                        defaultText="Find best courses for you"
                        placeholderText="Search anything..."
                    />
                </div>
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-xl">
                    Elevate Your Skills with <br />
                    {/* <span className="text-teal-500"> Live Classes</span> */}
                    <TypeWriterText
                        className='text-teal-600 dark:text-teal-500'
                        text="Live Classes" />
                </h1>

                {/* Subtext */}
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Engage in real-time learning, interact with top mentors, and master
                    in-demand skills through immersive live sessions.
                </p>

                {/* Enroll Button */}
                <div className="mt-6 flex">
                    <Button variant="secondary">
                        Enroll Now
                    </Button>
                </div>
            </div>

            {/* <div className="w-96 h-[800px]">
                <ClassCard/>
            </div> */}
        </Container>
    );
};

export default LiveClasses;
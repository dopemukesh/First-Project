/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "../../../Components/Common/Button/Button";

const SubscriptionSection = () => {

    const coursePoints = [
        "Daily live classes on Google Meet with top coding instructors.",
        "Instant doubt support via WhatsApp and Slack groups.",
        "Project-based learning with real-world applications.",
        "One-on-one mentor support from experienced developers.",
        "Recorded sessions available for flexible access.",
        "Career support with job, internship, and freelance gigs.",
        "Join easily from mobile or desktop devices.",
    ]

    return (
        <section className="bg-[#7043E3] py-16 px-4">
            {/* Title */}
            <div className="text-left max-w-6xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
                    Accelerate growth — just for you
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                    Reach your goals faster with a powerful all-in-one learning plan. <br className="hidden sm:block" />
                    Try it free or subscribe to get started.
                </p>
            </div>

            {/* Subscription Card */}
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-10 shadow-lg flex flex-col gap-8">

                {/* Left Side - Price & Button */}
                <div className="flex flex-col">
                    <h2 className="text-xl sm:text-3xl font-semibold mb-1">
                        ₹ 2000 /-
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">Billed monthly</p>
                    <Button
                        // size="sm"
                        variant="tertiary"
                        className="w-fit"
                        // className="bg-[#9C6ADE] hover:bg-[#844fd1] transition text-white px-6 py-2 rounded-md font-semibold shadow-md"
                    >
                        Start Subscription
                    </Button>
                </div>

                {/* Right Side - Details */}
                <div className="flex flex-col items-center md:items-start space-y-4 text-2xl sm:text-base">
                    <h4 className="text-2xl font-semibold">
                        Enroll In live classes today
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl ">
                        Beyond Just Classes – Your End-to-End Tech Career Launchpad with
                        <span className="font-medium text-gray-800 dark:text-white"> Expert Mentorship</span>, Real Projects, and Career-Driven Learning.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                    <div className="space-y-2 text-gray-500 dark:text-gray-400 text-left w-full max-w-2xl">
                            {coursePoints.slice(0, coursePoints.length/2).map((point, idx) => (
                            <li key={idx} className="flex md:items-center  gap-2 text-base">
                                    {/* <span className="text-green-400 text-xl leading-5">✅</span> */}
                                    <img src="./sparkle.png" alt="sparkle" className="h-5" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </div>
                    <div className="space-y-2 text-gray-500 dark:text-gray-400 text-left w-full max-w-2xl">
                            {coursePoints.slice(coursePoints.length/2,coursePoints.length).map((point, idx) => (
                                <li key={idx} className="flex md:items-center  gap-2 text-base">
                                    {/* <span className="text-green-400 text-xl leading-5">✅</span> */}
                                    <img src="./sparkle.png" alt="sparkle" className="h-5" />
                                    <span>{point}</span>
                                </li>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionSection;
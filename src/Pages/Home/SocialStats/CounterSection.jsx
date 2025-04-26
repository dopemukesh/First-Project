import React from "react";
import AnimatedCounter from "./AnimatedCounter"; // Yaha tum apna sahi path dena
import { motion } from "framer-motion";

const stats = [
    { label: "Active Users", value: 100000 },
    { label: "Downloads", value: 500000 },
    { label: "Projects Completed", value: 1200 },
    { label: "Communities", value: 75 },
];

const CounterSection = () => {
    return (
        <section className="w-full py-16 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Achievements
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <AnimatedCounter end={stat.value} />
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounterSection;

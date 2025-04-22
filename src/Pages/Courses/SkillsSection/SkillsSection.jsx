/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Star } from "lucide-react";
import courses from "../../../api/Courses.json";
import categories from "../../../api/Categories.json";

const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter courses based on selected category
    const filteredCourses =
        selectedCategory === "All"
            ? courses
            : courses.filter((course) => course.category === selectedCategory);

    return (
        <section className="bg-gray-100 dark:bg-gray-900/30 py-16 px-4 md:px-8 overflow-hidden">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
                All the skills you need in one place
            </h2>

            {/* Categories */}
            <div className="w-full flex justify-center">
                <div className="flex border dark:border-gray-800 rounded-full p-1 flex-nowrap overflow-x-auto max-w-5xl justify-start gap-4 mb-12 px-1 scrollbar-hide">
                    <li
                        onClick={() => setSelectedCategory("All")}
                        className={`border list-none dark:border-gray-600 cursor-pointer px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition duration-200 ${selectedCategory === "All"
                            ? "bg-[#00FFCA] text-gray-800 shadow-md"
                            : "bg-white text-gray-800 hover:bg-gray-200"
                            }`}
                    >
                        All
                    </li>
                    {categories.map((cat, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(cat)}
                            className={`border list-none dark:border-gray-600 cursor-pointer px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition duration-200 ${selectedCategory === cat
                                ? "bg-[#00FFCA] text-gray-800 shadow-md"
                                : "bg-white text-gray-800 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </li>
                    ))}
                </div>
            </div>

            {/* Cards */}
            {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl ${course.color} p-6 text-black relative hover:shadow-lg transition duration-300`}
                        >
                            {/* Title */}
                            <h3 className="text-lg font-bold mb-2">{course.title}</h3>

                            {/* Instructor */}
                            <p className="text-sm font-medium">{course.instructor}</p>

                            {/* Rating */}
                            <div className="flex gap-1 mt-1 mb-4">
                                {[...Array(course.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                                ))}
                            </div>

                            {/* Labels */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-white text-xs px-3 py-1 rounded-full">
                                    {course.level}
                                </span>
                                <span className="bg-white text-xs px-3 py-1 rounded-full">
                                    {course.type}
                                </span>
                            </div>

                            {/* Enroll Button */}
                            <button className="bg-gray-900 rounded-lg py-2.5 px-4 text-sm text-white active:scale-95 transition-all duration-500">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 dark:text-gray-300 mt-10 text-lg">
                    No courses found for <strong>{selectedCategory}</strong>.
                </p>
            )}
        </section>
    );
};

export default SkillsSection;

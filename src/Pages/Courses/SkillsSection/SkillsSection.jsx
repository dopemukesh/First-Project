/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import courses from "../../../api/Courses.json";
import categories from "../../../api/Categories.json";
import projectData from "../../../api/ProjectDetails.json";

import { DefaultCard, ProjectCard } from "./Cards/CourseCard";

const SkillsSection = ({ cardType = "default", topHeader = "" }) => {
    const isProjectCard = cardType === "projectCard";
    const [selectedCategory, setSelectedCategory] = useState("All");

    const bgColors = [
        "bg-blue-200",
        "bg-green-200",
        "bg-yellow-200",
        "bg-pink-200",
        "bg-teal-200",
        "bg-red-200",
    ];

    const getCardColor = (index) => {
        return bgColors[Math.floor(Math.random() * bgColors.length)];
    };

    // For dynamic categories and data
    const allProjects = projectData.projects || [];
    const allCourses = courses || [];

    const activeData = isProjectCard ? allProjects : allCourses;

    // Dynamically generate unique categories based on data
    // const dynamicCategories = [
    //     "All",
    //     ...Array.from(
    //         new Set(
    //             activeData
    //                 .map((item) => item.category)
    //                 .filter((cat) => cat && typeof cat === "string")
    //         )
    //     ),
    // ];

    // Use Categories.json for category list
    // const dynamicCategories = ["All", ...categories];

    // Categories based on card type
    const dynamicCategories = isProjectCard
        ? [
              "All",
              ...new Set(
                  allProjects
                      .map((p) => p.category)
                      .filter((cat) => cat && typeof cat === "string")
              ),
          ]
        : ["All", ...categories];

    // Filtered data
    const filteredItems =
        selectedCategory === "All"
            ? activeData
            : activeData.filter((item) => item.category === selectedCategory);

    return (
        <section className="bg-gray-100 dark:bg-gray-900/30 py-16 px-4 md:px-8 overflow-hidden">
            {/* Title */}
            {topHeader &&
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
                    {topHeader}
                </h2>
            }

            {/* Categories */}
            <div className="w-full flex justify-center z-50">
                <ul className="flex bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-full p-1.5 flex-nowrap overflow-x-auto max-w-5xl justify-start gap-4 mb-12 scrollbar-hide">
                    {dynamicCategories.map((cat, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(cat)}
                            className={`border dark:border-gray-700 list-none cursor-pointer px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition duration-200 ${selectedCategory === cat
                                ? "bg-teal-500 text-gray-900 border-teal-600 shadow-md"
                                : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100"
                                }`}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cards */}
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {filteredItems.map((item, index) => {
                        if (isProjectCard) {
                            return (
                                <div key={item.id || index}>
                                    {/* Ensure project has ID and all required props */}
                                    <ProjectCard {...item} />
                                </div>
                            );
                        } else {
                            return (
                                <DefaultCard
                                    key={index}
                                    course={item}
                                    index={index}
                                    getCardColor={getCardColor}
                                />
                            );
                        }
                    })}
                </div>
            ) : (
                <p className="text-center text-gray-600 dark:text-gray-300 mt-10 text-lg">
                    No {isProjectCard ? "projects" : "courses"} found for{" "}
                    <strong>{selectedCategory}</strong>.
                </p>
            )}
        </section>
    );
};

export default SkillsSection;

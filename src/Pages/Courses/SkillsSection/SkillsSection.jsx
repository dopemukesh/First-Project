/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import courses from "../../../api/Courses.json";
import categories from "../../../api/Categories.json"; // Now each category is { title, value }
import projectData from "../../../api/ProjectDetails.json";

import { DefaultCard, ProjectCard } from "./Cards/CourseCard";
import { NavLink, useParams } from "react-router-dom";

const SkillsSection = ({ cardType = "default", topHeader = "", parentRoute = "classes" }) => {
    const isProjectCard = cardType === "projectCard";
    const { category } = useParams(); // read route param
    const [selectedCategory, setSelectedCategory] = useState(category || "all");

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

    // Data source
    const allProjects = projectData.projects || [];
    const allCourses = courses || [];
    const activeData = isProjectCard ? allProjects : allCourses;

    // For route-safe comparison (convert to lowercase and kebab-case if needed)
    const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "-");

    // Filtered Data
    const filteredItems =
        selectedCategory === "all"
            ? activeData
            : activeData.filter((item) =>
                  normalize(item.category) === selectedCategory
              );

    // Final categories list (if projectCard use string-based logic instead)
    const dynamicCategories = isProjectCard
        ? [
              { title: "All", value: "all" },
              ...Array.from(
                  new Set(
                      allProjects.map((p) => p.category).filter(Boolean)
                  )
              ).map((cat) => ({
                  title: cat,
                  value: normalize(cat),
              })),
          ]
        : [{ title: "All", value: "all" }, ...categories];

    return (
        <section className="bg-gray-100 dark:bg-gray-900/30 py-16 px-4 md:px-8 overflow-hidden">
            {topHeader && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
                    {topHeader}
                </h2>
            )}

            {/* Category Pills */}
            <div className="w-full flex justify-center z-50">
                <ul className="flex bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-full p-1.5 flex-nowrap overflow-x-auto max-w-5xl justify-start gap-4 mb-12 scrollbar-hide">
                    {dynamicCategories.map((cat, index) => (
                        <NavLink
                            to={`/${parentRoute}/${cat.value}`}
                            key={index}
                            onClick={() => setSelectedCategory(cat.value)}
                            className={`border dark:border-gray-700 list-none cursor-pointer px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition duration-200 ${
                                selectedCategory === cat.value
                                    ? "bg-teal-500 text-gray-900 border-teal-600 shadow-md"
                                    : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100"
                            }`}
                        >
                            {cat.title}
                        </NavLink>
                    ))}
                </ul>
            </div>

            {/* Cards */}
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {filteredItems.map((item, index) =>
                        isProjectCard ? (
                            <div key={item.id || index}>
                                <ProjectCard {...item} />
                            </div>
                        ) : (
                            <DefaultCard
                                key={index}
                                course={item}
                                index={index}
                                getCardColor={getCardColor}
                            />
                        )
                    )}
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

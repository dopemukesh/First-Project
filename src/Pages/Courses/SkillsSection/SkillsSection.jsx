/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import categories from "../../../api/Categories.json"; // Optional: can be moved to backend too
import projectData from "../../../api/ProjectDetails.json";
import { DefaultCard, ProjectCard } from "./Cards/CourseCard";
import { NavLink, useParams } from "react-router-dom";
import FetchAPI from "../../../api/fetchAPI/FetchAPI2";

const SkillsSection = ({ cardType = "default", topHeader = "", parentRoute, endpoint }) => {
    const isProjectCard = cardType === "projectCard";
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category || "all");

    const [allCourses, setAllCourses] = useState([]);

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

    const [allProjects, setAllProjects] = useState([]);
    const activeData = isProjectCard ? allProjects : allCourses;

    // Fetch courses from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await FetchAPI(endpoint, { method: "get" });

                if (isProjectCard) {
                    setAllProjects(res?.projects || []);
                } else {
                    setAllCourses(res?.data || []);
                }
            } catch (err) {
                console.error("Failed to fetch data:", err.message);
            }
        };

        fetchData();
    }, [endpoint, isProjectCard]);

    const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "-");

    const filteredItems =
        selectedCategory === "all"
            ? activeData
            : activeData.filter((item) => normalize(item.category) === selectedCategory);

    const dynamicCategories = isProjectCard
        ? [
            { title: "All", value: "all" },
            ...Array.from(
                new Set(allProjects.map((p) => p.category).filter(Boolean))
            ).map((cat) => ({
                title: cat,
                value: normalize(cat),
            })),
        ]
        : [{ title: "All", value: "all" }, ...categories];

    return (
        <section className="py-16 px-4 md:px-4 overflow-hidden">
            {topHeader && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
                    {topHeader}
                </h2>
            )}

            {/* Category Pills */}
            <div className="w-full flex justify-center z-50 relative">
                <ul className="flex py-2 px-6 flex-nowrap overflow-x-auto max-w-full justify-start gap-3 border-b dark:border-gray-800 scrollbar-hide">
                    {dynamicCategories.map((cat, index) => (
                        <NavLink
                            to={`/${parentRoute}/${cat.value}`}
                            key={index}
                            onClick={() => setSelectedCategory(cat.value)}
                            className={`list-none cursor-pointer px-2 py-2 text-xs font-medium whitespace-nowrap transition duration-200 relative ${selectedCategory === cat.value
                                ? "text-teal-600 dark:text-teal-500"
                                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                                }`}
                        >
                            {cat.title}
                            {selectedCategory === cat.value && (
                                // <span className="ml-1 text-xs text-gray-500">(active)</span>
                                <i className="absolute -bottom-2 left-0 h-1.5 rounded-t-xl w-full bg-teal-600 dark:bg-teal-500"></i>
                            )}
                        </NavLink>
                    ))}
                </ul>
                {/* Decorative fading shadows for scroll edges to look smooth */}
                <div className="pointer-events-none absolute inset-0 flex justify-between">
                    <div className="w-8 h-full bg-gradient-to-r from-white dark:from-gray-950 to-transparent"></div>
                    <div className="w-8 h-full bg-gradient-to-l from-white dark:from-gray-950 to-transparent"></div>
                </div>
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
                    No {isProjectCard ? "projects" : "classes"} found for{" "}
                    <strong>{selectedCategory}</strong>.
                </p>
            )}
        </section>
    );
};

export default SkillsSection;

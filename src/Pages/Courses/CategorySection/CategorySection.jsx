/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchAPI from "../../../api/fetchAPI/FetchAPI2";
import categories from "../../../api/Categories.json"; 
import { CourseCard, ProjectCard } from "./Cards/Cards";
import CategoryTabs from "./CategoryTabs"; // Reusable category navigation component

// -----------------------------------------------------------------------------
// CategorySection Component
// -----------------------------------------------------------------------------
// Displays a section for either courses or projects.
// It handles:
//   - Fetching data from the backend
//   - Managing the currently selected category
//   - Filtering data based on that category
//   - Rendering dynamic category tabs and corresponding cards
// -----------------------------------------------------------------------------

const CategorySection = ({
  cardType = "default",  // Defines whether to show course or project cards
  topHeader = "",        // Optional heading displayed above the section
  parentRoute,           // Used for category routing (e.g., /courses or /projects)
  endpoint,              // API endpoint to fetch data from
}) => {
  // Determine whether this component is rendering projects
  const isProjectCard = cardType === "projectCard";

  // Extract category from URL params, default to "all"
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");

  // Store fetched data for both projects and courses
  const [allCourses, setAllCourses] = useState([]);
  const [allProjects, setAllProjects] = useState([]);

  // Determines which dataset to use based on card type
  const activeData = isProjectCard ? allProjects : allCourses;

  // ---------------------------------------------------------------------------
  // Styling Helpers
  // ---------------------------------------------------------------------------

  // Define gradient backgrounds for visual variety in course cards
  const bgColors = [
    "bg-gradient-to-r from-teal-500/50 to-transparent backdrop-blur",
    "bg-gradient-to-r from-yellow-500/50 to-transparent backdrop-blur",
    "bg-gradient-to-r from-rose-500/50 to-transparent backdrop-blur",
    "bg-gradient-to-r from-sky-500/50 to-transparent backdrop-blur",
    "bg-gradient-to-r from-red-500/50 to-transparent backdrop-blur",
    "bg-gradient-to-r from-violet-500/50 to-transparent backdrop-blur",
  ];

  // Assigns a random gradient to each card for differentiation
  const getCardColor = () =>
    bgColors[Math.floor(Math.random() * bgColors.length)];

  // ---------------------------------------------------------------------------
  // Fetch Data on Component Mount or Endpoint Change
  // ---------------------------------------------------------------------------
  // When the component loads or the endpoint prop changes, it triggers
  // a fetch request to load either project or course data from the backend.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call reusable FetchAPI utility
        const res = await FetchAPI(endpoint, { method: "get" });

        // Conditionally store results in appropriate state
        if (isProjectCard) {
          setAllProjects(res?.projects || []);
        } else {
          setAllCourses(res?.classes || []);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
      }
    };

    fetchData();
  }, [endpoint, isProjectCard]);

  // ---------------------------------------------------------------------------
  // Utility Functions
  // ---------------------------------------------------------------------------

  // Normalizes category names for route matching
  // (e.g., "Web Design" → "web-design")
  const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "-");

  // Filters data according to selected category
  const filteredItems =
    selectedCategory === "all"
      ? activeData
      : activeData.filter(
          (item) => normalize(item.category) === selectedCategory
        );

  // ---------------------------------------------------------------------------
  // Generate Dynamic Category Tabs
  // ---------------------------------------------------------------------------
  // - For project cards: categories are extracted dynamically from project data.
  // - For courses: categories come from a pre-defined local JSON file.
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // JSX Rendering
  // ---------------------------------------------------------------------------
  // Renders:
  //   - Section heading (if provided)
  //   - Scrollable category tabs
  //   - Data grid of CourseCards or ProjectCards
  //   - Empty-state message if no matching content is found
  // ---------------------------------------------------------------------------
  return (
    <section className="py-16 px-4 md:px-4 overflow-hidden">
      {/* Optional top heading */}
      {topHeader && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          {topHeader}
        </h2>
      )}

      {/* Category tabs (dynamic and scrollable) */}
      <CategoryTabs
        categories={dynamicCategories}
        parentRoute={parentRoute}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Main content area: cards or empty message */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-4">
          {filteredItems.map((item, index) =>
            isProjectCard ? (
              // Render ProjectCard when projects are shown
              <ProjectCard key={item.id || index} {...item} />
            ) : (
              // Render CourseCard when courses are shown
              <CourseCard
                key={index}
                course={item}
                index={index}
                getCardColor={getCardColor}
              />
            )
          )}
        </div>
      ) : (
        // Fallback message when no results are found
        <p className="text-center text-gray-600 dark:text-gray-300 mt-10 text-lg">
          No {isProjectCard ? "projects" : "classes"} found for{" "}
          <strong>{selectedCategory}</strong>.
        </p>
      )}
    </section>
  );
};

export default CategorySection;

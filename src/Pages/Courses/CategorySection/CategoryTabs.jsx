import React from "react";
import { NavLink } from "react-router-dom";

// -----------------------------------------------------------------------------
// CategoryTabs Component
// -----------------------------------------------------------------------------
// A reusable horizontal category selector with scrollable tabs 
// and animated underline for the active category.
// -----------------------------------------------------------------------------

const CategoryTabs = ({ categories, parentRoute, selectedCategory, onSelect }) => {
  return (
    <div className="w-full flex justify-center z-50 relative">
      <ul className="flex py-2 px-6 flex-nowrap overflow-x-auto max-w-full justify-start gap-3 border-b dark:border-gray-800 scrollbar-hide">
        {categories.map((cat, index) => (
          <NavLink
            key={index}
            to={`/${parentRoute}/${cat.value}`}
            onClick={() => onSelect(cat.value)}
            className={`list-none cursor-pointer px-2 py-2 text-xs font-medium whitespace-nowrap transition duration-200 relative ${
              selectedCategory === cat.value
                ? "text-teal-600 dark:text-teal-500"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            }`}
          >
            {cat.title}
            {selectedCategory === cat.value && (
              <i className="absolute -bottom-2 left-0 h-1.5 rounded-t-xl w-full bg-teal-600 dark:bg-teal-500"></i>
            )}
          </NavLink>
        ))}
      </ul>

      {/* Fading edges for scroll appearance */}
      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-8 h-full bg-gradient-to-r from-white dark:from-gray-950 to-transparent"></div>
        <div className="w-8 h-full bg-gradient-to-l from-white dark:from-gray-950 to-transparent"></div>
      </div>
    </div>
  );
};

export default CategoryTabs;

// Designed and developed by:
// - Ankush Kumar
// ReDesigned and developed by:
// - Mukesh Yadav

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Store = () => {
  const tabs = [
    { to: "books", text: "Books", color: "yellow-500", darkColor: "dark:text-yellow-500" },
    { to: "products", text: "Products", color: "yellow-500", darkColor: "dark:text-yellow-500" },
    { to: "tranings", text: "Trainings", color: "yellow-500", darkColor: "dark:text-yellow-500" }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto h-auto mt-2">
        <div className="h-8 flex justify-around w-full p-4">
          {tabs.map((tab) => (
            <NavLink
              to={tab.to}
              key={tab.to}
              className={({ isActive }) =>
                `font-semibold text-xl active ${
                  isActive
                    ? `text-${tab.color} ${tab.darkColor}`
                    : "text-gray-800 dark:text-white"
                }`
              }
            >
              {tab.text}
            </NavLink>
          ))}
        </div>
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Store;

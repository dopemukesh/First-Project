// Designed and developed by:
// - Ankush Kumar

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Store = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 h-auto mt-2">
        <div className="h-8 flex justify-around w-full p-4">
          <NavLink
            to="books"
            className={({ isActive }) =>
              `font-bold text-xl active ${
                isActive
                  ? "text-yellow-500 dark:text-yellow-500"
                  : "text-black dark:text-white"
              }`
            }
          >
            Books
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `font-bold text-xl active ${
                isActive
                  ? "text-orange-600 dark:text-yellow-500"
                  : "text-black dark:text-white"
              }`
            }
          >
            <div className="">Products</div>
          </NavLink>
          <NavLink
            to="tranings"
            className={({ isActive }) =>
              `font-bold text-xl active ${
                isActive
                  ? "text-yellow-500 dark:text-yellow-500"
                  : "text-black dark:text-white"
              }`
            }
          >
            Trainings
          </NavLink>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Store;

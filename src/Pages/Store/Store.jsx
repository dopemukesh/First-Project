// Designed and developed by:
// - Ankush Kumar
// ReDesigned and developed by:
// - Mukesh Yadav

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../../Components/Common/Container/Container";

const Store = () => {
  const tabs = [
    { to: "books", text: "Books" },
    { to: "products", text: "Products" },
    { to: "tranings", text: "Trainings" }
  ];

  return (
    <>
      <Container>
        <div className="flex flex-col items-center my-8">
          <div className="flex justify-center gap-2 w-fit p-1 rounded-xl bg-gray-100 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-300 dark:border-gray-700/60">
            {tabs.map((tab) => (
              <NavLink
                to={tab.to}
                key={tab.to}
                className={({ isActive }) =>
                  `text-sm rounded-lg px-4 py-1.5 active 
                ${isActive
                    ? `text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 `
                    : "text-gray-800 dark:text-white border border-transparent"
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
      </Container>
    </>
  );
};

export default Store;

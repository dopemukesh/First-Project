// Designed and developed by:
// - Mukesh Yadav

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeChange from "./ThemeChange";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaHome, FaUsers, FaBook, FaStore, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarLinks = [
    { path: "/", name: "Home", icon: FaHome },
    { path: "/members", name: "Members", icon: FaUsers },
    { path: "/resources", name: "Resources", icon: FaBook },
    { path: "/store", name: "Store", icon: FaStore },
    { path: "/about", name: "About Us", icon: FaInfoCircle },
  ];

  return (
    <>
      <nav className="bg-white p-4 w-full dark:bg-gray-950 sticky top-0 z-[999]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left side - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-800 dark:text-gray-300 hover:text-yellow-500 ${isActive ? "text-yellow-500 dark:text-yellow-500" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/members"
              className={({ isActive }) =>
                `text-gray-800 dark:text-gray-300 hover:text-yellow-500 ${isActive ? "text-yellow-500 dark:text-yellow-500" : ""
                }`
              }
            >
              Members
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-gray-800 dark:text-gray-300 hover:text-yellow-500 ${isActive ? "text-yellow-500 dark:text-yellow-500" : ""
                }`
              }
            >
              Resources
            </NavLink>
          </div>

          {/* Center - visible on all screens */}
          <NavLink to="/" className="flex items-center space-x-4">
            <img
              src="./logo/cwtLogo-animatedColor.svg"
              alt="site-logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </NavLink>

          {/* Right side - hidden on mobile */}
          <div className="md:flex items-center space-x-4">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hidden md:flex text-gray-800 dark:text-gray-300 hover:text-yellow-500 ${isActive ? "text-yellow-500 dark:text-yellow-500" : ""
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/store"
              className={({ isActive }) =>
                `hidden md:flex text-gray-800 dark:text-gray-300 hover:text-yellow-500 ${isActive ? "text-yellow-500 dark:text-yellow-500" : ""
                }`
              }
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hidden md:flex text-gray-800 dark:text-gray-300 hover:text-yellow-500 ${isActive ? "text-yellow-500 dark:text-yellow-500" : ""
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile menu button - only visible on mobile */}
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-gray-800 dark:text-gray-300 focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <ThemeChange />
            </div>
          </div>
        </div>

        {/* Sidebar/Mobile menu - with overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <div
          className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } w-64 bg-white dark:bg-gray-900 overflow-y-auto transition duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="mt-2.5 px-4 divide-y divide-gray-300 dark:divide-gray-800">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-2">
              <NavLink to="/" className="flex items-center gap-2">
                <img
                  src="./logo/cwtLogo-animatedColor.svg"
                  alt="site-logo"
                  className="w-8 h-8 mr-2"
                />
                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  CWT
                </span>
              </NavLink>
              {/* Close icon */}
              <BsLayoutSidebar onClick={() => setIsSidebarOpen(false)} className="text-gray-800 dark:text-gray-300 hover:text-yellow-500" />
            </div>

            {/* Mobile menu links */}
            <div className="flex flex-col py-2 space-y-1">
              {sidebarLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-1.5 px-2 ${isActive ? "text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600" : "text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-100"
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

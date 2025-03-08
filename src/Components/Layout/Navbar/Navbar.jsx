/*************  ✨ Codeium Command 🌟  *************/
// Designed and developed by:
// - Mukesh Yadav

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeChange from "./ThemeChange";
import Sidebar from "./Sidebar/Sidebar";
import navData from '../../../api/NavLinks.json';
import { getIcon } from '../../../utils/NavIcons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { navLinks } = navData;

  return (
    <>
      <nav className="bg-transparent backdrop-blur-xl px-4 py-3 w-full sticky top-0 z-[999] rounded-b-3xl sm:rounded-b-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" title="Code With Techries" className="flex items-center space-x-4">
            <img
              src="./logo/cwtLogo-animatedColor.svg"
              alt="site-logo"
              className="w-8 h-8"
            />
            <p className="font-semibold">CWT</p>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium text-gray-800 dark:text-gray-500 hover:text-purple-500 ${isActive ? "text-purple-500 dark:text-purple-500" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-gray-800 dark:text-gray-300 focus:outline-none"
                onClick={() => setIsSidebarOpen(true)}
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
                    strokeWidth={2.2}
                    d="M2 6h08M4 12h14M4 18h06"
                  />
                </svg>
              </button>

              <ThemeChange />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Navbar;

/******  e44ee2b3-5f5b-4bbf-a30d-1bf7a9389a6b  *******/
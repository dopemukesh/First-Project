/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeChange from "./ThemeChange";
import Sidebar from "./Sidebar/Sidebar";
import navData from "../../../api/NavLinks.json";
import Logo from "../../Common/Logo/Logo";
import { Button } from "../../Common/Button/Button";
import { BiLogOut } from "react-icons/bi";
// import LogoExpand from '../../Common/LogoExpand/LogoExpand'

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { navLinks } = navData;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(user.isLoggedIn);
      setUserData(user);
    }
  }, []);

  const renderButton = () => {
    if (isLoggedIn && userData) {
      return (
        <div className="hidden md:flex items-center gap-4 ">
          <div className="flex flex-col flex-1 cursor-default">
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              Welcome back
            </p>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
              {userData.name}
            </p>
          </div>
          <div
            className="p-2 rounded-xl border border-red-200 dark:border-red-800 bg-red-100 dark:bg-red-900 hover:bg-red-300 dark:hover:bg-red-800 transition-colors grid place-content-center"
          onClick={handleLogout}
          >
            <BiLogOut className="text-xl text-red-500" />
          </div>
        </div>
      );
    }
    return <Button variant="secondary" size="sm" to="/login">Login</Button>;
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-950/90 backdrop-blur-2xl px-4 py-3 w-full sticky top-0 z-[999]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            title="Code With Techries"
            className="flex items-center space-x-4"
          >
            <Logo className="h-8 md:h-10">
              <p className="text-2xl font-semibold">CWT</p>
              {/* <LogoExpand /> */}
            </Logo>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => {
                return (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm ${isActive
                        ? "text-gray-900 dark:text-gray-200"
                        : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
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
              {renderButton()}
              <ThemeChange />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;

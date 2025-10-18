/* eslint-disable no-unused-vars */
// Designed and developed by Mukesh Yadav

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import ThemeChange from "./ThemeChange";
import Sidebar from "./Sidebar/Sidebar";
import Logo from "../../Common/Logo/Logo";
import { Button } from "../../Common/Button/Button";
import navData from "../../../api/NavLinks.json";
import { getRoleFromToken } from "../../../utils/GetUserRoleFromToken";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = getRoleFromToken(token); // ✅ Extract user role from token
  const { navLinks } = navData;

  // 🔹 State management
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // 🔹 On mount: Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(user.isLoggedIn);
      setUserData(user);
    }
  }, []);

  // 🔹 Navigate to profile page
  const handleProfileClick = () => {
    navigate("/profile");
  };

  // 🔹 Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  // 🔹 Render profile button or Sign in button
  const renderUserButton = () => {
    if (isLoggedIn && userData) {
      return (
        <div className="hidden md:flex items-center gap-4 scale-75">
          <div
            onClick={handleProfileClick}
            className="flex items-center gap-4 cursor-pointer"
          >
            {/* Profile picture or initials */}
            <div className="flex justify-center items-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              {userData.picture ? (
                <img
                  src={userData.picture}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <p>
                  {userData.name
                    .split(" ")
                    .map((word) => word[0].toUpperCase())
                    .slice(0, 2)
                    .join("")}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Default: Sign in button
    return (
      <div className="hidden md:block">
        <Button variant="outline2" size="ssm" to="/login">
          Sign in
        </Button>
      </div>
    );
  };

  return (
    <>
      {/* 🔹 Top Navigation Bar */}
      <div className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl px-4 py-3 w-full sticky top-0 z-[999]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* 🔹 Left Section — Logo & Nav Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <NavLink
              to="/"
              title="Code With Techries"
              className="flex items-center space-x-4"
            >
              <Logo>
                <p className="text-2xl font-semibold">CWT</p>
              </Logo>
            </NavLink>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-gray-900 dark:text-gray-200"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                    } text-sm font-medium`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* 🔹 Right Section — Actions */}
          <div className="md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* Mobile Sidebar Toggle */}
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
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                </svg>
              </button>

              {/* Admin Dashboard Link */}
              {role === "admin" && (
                <div className="hidden md:block">
                  <NavLink
                    to="/admin/dashboard"
                    className="font-medium text-sm text-sky-500 hover:underline"
                  >
                    Admin
                  </NavLink>
                </div>
              )}

              {/* Profile / Sign In */}
              {renderUserButton()}

              {/* Theme Switcher */}
              <ThemeChange className="scale-75" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Sidebar */}
      <Sidebar role={role} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;

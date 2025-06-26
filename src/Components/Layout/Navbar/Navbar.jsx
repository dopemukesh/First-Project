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

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  const renderButton = () => {
    if (isLoggedIn && userData) {
      return (
        <div className="hidden md:flex items-center gap-4 ">
          <div onClick={handleProfileClick} className="flex items-center gap-4 flex-1 cursor-pointer">
            <div className="flex justify-center items-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              {userData.picture ?
                <img
                  src={userData.picture}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                /> :
                <b>{userData.name.split(' ').map(w => w[0].toUpperCase()).slice(0, 2).join('')}</b>
              }
            </div>
          </div>
          {/* <div
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors grid place-content-center"
            onClick={handleLogout}
          >
            <BiLogOut className="text-xl" />
          </div> */}
        </div>
      );
    }
    return (
      <div className="hidden md:block">
        <Button size="ssm" to="/login">Login now</Button>
      </div>
    )
  };


  return (
    <>
      <div className="bg-white dark:bg-gray-950/90 backdrop-blur-2xl px-4 py-3 w-full sticky top-0 z-[999]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
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
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex items-center space-x-4">

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

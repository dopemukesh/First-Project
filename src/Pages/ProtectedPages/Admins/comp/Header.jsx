import React from "react";
import ThemeChange from "../../../../Components/Layout/Navbar/ThemeChange";
import { NavLink } from "react-router-dom";
import { topBarLinks } from "../adminPages";
import Logo from "../../../../Components/Common/Logo/Logo";

const Header = ({ onMenuClick }) => {
    return (
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-950/5 dark:border-white/10 fixed inset-x-0 top-0 bg-white dark:bg-gray-950 shadow-sm z-10">
            {/* Mobile Sidebar Toggle */}
            <button
                className="text-2xl md:hidden"
                onClick={onMenuClick}
            >
                ☰
            </button>

            {/* Dashboard Title + Theme Switch */}
            <div className="flex gap-2 items-center">
                <Logo className="w-5 h-5" />
                <span className="hidden md:flex font-medium text-lg [user-select:none]">
                    CWT Admin
                </span>
            </div>
            <div className="flex gap-2 items-center">
                <NavLink to="/" className="font-medium text-sm text-rose-500 hover:underline">
                    Home
                </NavLink> <span className="text-gray-300 dark:text-gray-600 select-none pointer-events-none">|</span>

                {/* Navigation Links (Desktop only) */}
                <div className="hidden md:flex items-center gap-5">
                    {topBarLinks.map((page) => (
                        <NavLink
                            key={page.id}
                            to={`/admin/dashboard/${page.id}`}
                            className={({ isActive }) =>
                                `text-sm transition-colors duration-300 ${isActive
                                    ? "text-sky-500 dark:text-sky-400"
                                    : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                }`
                            }
                        >
                            {page.name}
                        </NavLink>
                    ))}
                </div>

                {/* Theme Switch */}
                <div className="ml-4">
                    <ThemeChange className={"h-8 w-8"} />
                </div>
            </div>
        </div>
    );
};

export default Header;

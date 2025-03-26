import React from "react";
import { NavLink } from "react-router-dom";
import { BsLayoutSidebar } from "react-icons/bs";
import navData from "../../../../api/NavLinks.json";
import { getIcon } from "../../../../utils/NavIcons";
import Logo from "../../../Common/Logo/Logo";

const Sidebar = ({ isOpen, onClose }) => {
  const { navLinks } = navData;

  return (
    <>
      {/* Overlay with fade animation */}
      <div
        className={`fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Sidebar with slide and fade animation */}
        <div
          className={`fixed inset-y-0 left-0 min-w-[296px] bg-white dark:bg-gray-950 
                        transform transition-all duration-300 ease-in-out
                        ${
                          isOpen
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full opacity-0"
                        }
                        overflow-y-auto z-50 h-full shadow-2xl`}
        >
          <div className="h-full flex flex-col divide-y divide-gray-300 dark:divide-gray-800">
            {/* Header with fade-in animation */}
            <div
              className={`flex items-center justify-between px-4 py-4 transition-all duration-500 delay-100 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <NavLink
                to="/"
                className="flex items-center gap-4"
                onClick={onClose}
              >
                {/* <img
                                    src="./logo/cwtLogo-animatedColor.svg"
                                    alt="site-logo"
                                    className="w-8 h-8"
                                /> */}
                <Logo className="h-10" />
                <div className="relative flex flex-col">
                  <p className="text-md font-semibold text-gray-800 dark:text-gray-200">
                    CWT
                  </p>

                  {/* devlopment status  */}
                  <span className="absolute right-0 bg-yellow-500/10 px-2 py-[2px] rounded text-yellow-600 text-[10px]">
                    Beta
                  </span>
                  <p className="text-[12px] text-gray-500">
                    Community for coders
                  </p>
                </div>
              </NavLink>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <BsLayoutSidebar className="text-gray-800 dark:text-gray-300 hover:text-teal-500 transform transition-transform hover:rotate-180 duration-300" />
              </button>
            </div>

            {/* Navigation Links with staggered animation */}
            <div className="flex-1 py-4 px-3">
              <div className="space-y-1">
                {navLinks.map((link, index) => {
                  const Icon = getIcon(link.icon);
                  return (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg
                                                transition-all duration-300 ease-in-out
                                                transform ${
                                                  isOpen
                                                    ? "translate-x-0 opacity-100"
                                                    : "-translate-x-4 opacity-0"
                                                }
                                                ${
                                                  isActive
                                                    ? "bg-gray-800 text-white"
                                                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                                                }`
                      }
                      style={{
                        transitionDelay: `${150 + index * 50}ms`,
                      }}
                      onClick={onClose}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                      <span className="font-medium">{link.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

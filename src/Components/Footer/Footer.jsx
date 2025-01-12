import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo/cwtLogo-animatedColor.svg";

const Footer = () => {

    const footerLinks = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/resources", name: "Resources" },
        { path: "/store", name: "Store" },
    ]

    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="mb-4 md:mb-0 flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12"
                        />
                        <p className="text-white font-semibold text-xl">CWT</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        {footerLinks.map((link) => (
                            <NavLink key={link.path} to={link.path} className="hover:text-white">
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-700" />

                {/* Bottom Section */}
                <div className="flex justify-center">
                    {/* Copyright */}
                    <p className="text-sm text-gray-400 w-fit">
                        &copy; {new Date().getFullYear()} CodeWithTechries. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

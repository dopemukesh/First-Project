import React, { useState, useEffect, useRef } from 'react';
import { Search } from "lucide-react";
import { Button } from '../Button/Button';
import { motion, AnimatePresence } from "framer-motion";
import SearchShow from './SearchShow';

const SearchBox = ({
    icon = '', // optional: initial icon state
    defaultText = "Learners to Leaders", // optional: default prompt text
    placeholderText = "Search anything..." // optional: input placeholder
}) => {
    // State variables
    const [isExpanded, setIsExpanded] = useState(false); // tracks if search is expanded
    const [searchQuery, setSearchQuery] = useState(''); // current input value
    const [currentIcon, setCurrentIcon] = useState(icon); // toggle icon state
    const containerRef = useRef(null); // reference for click outside detection

    // Toggle between search icon and shapes every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIcon(prev => prev === 'search' ? 'shape' : 'search');
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Collapse search when clicking outside the component
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handlers
    const handleSearchClick = () => setIsExpanded(true);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Future: add search logic here
    };

    return (
        <div className="group relative w-full max-w-lg" ref={containerRef}>
            {/* Background overlay when search is expanded */}
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 dark:bg-black/20 backdrop-blur-md z-40"
                    onClick={() => setIsExpanded(false)}
                />
            )}

            {/* Main search container */}
            <div className="relative z-50">
                {!isExpanded ? (
                    // Compact search button (collapsed state)
                    <div
                        onClick={handleSearchClick}
                        className="flex items-center gap-4 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 py-2 px-4 rounded-full w-fit cursor-pointer overflow-hidden"
                    >
                        {/* Icon animation (search icon vs shape icons) */}
                        <AnimatePresence mode="wait">
                            {currentIcon === 'search' ? (
                                <motion.div
                                    key="search"
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="grid place-content-center h-5 w-5"
                                >
                                    <Search />
                                </motion.div>
                            ) : (
                                <motion.div key="shape" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="flex items-center h-5 w-fit">
                                    <motion.img src="./icons/html.svg" alt="HTML" className="h-5 rounded-full -me-1 border-2 border-white" initial={{ x: -120 }} animate={{ x: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }} />
                                    <motion.img src="./icons/js.svg" alt="JavaScript" className="h-5 rounded-full -me-1 border-2 border-white" initial={{ x: -120 }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} />
                                    <motion.img src="./icons/react.svg" alt="React" className="h-5 rounded-full -me-1 border-2 border-white" initial={{ x: -120 }} animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Default text next to icon */}
                        <p className="text-sm">{defaultText}</p>
                    </div>
                ) : (
                    // Expanded search form
                    <form onSubmit={handleSearchSubmit} className="w-full relative">
                        <div className={`flex flex-col gap-2 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur ${searchQuery.length > 0 ? 'rounded-t-xl' : 'rounded-3xl'} p-4 shadow-2xl shadow-gray-300 dark:shadow-gray-950 border border-gray-200 dark:border-gray-700/30 group transition-all duration-500`}>
                            <h3 className="text-gray-500 text-sm mb-2">What are you looking for?</h3>

                            {/* Search input field */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center w-full bg-gray-50 dark:bg-gray-950/50 border border-gray-300 dark:border-gray-700 focus-within:border-teal-600 dark:focus-within:border-teal-700 rounded-[10px] overflow-hidden">
                                    <div className="p-2">
                                        <Search className="text-gray-600 p-0.5 dark:text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder={placeholderText}
                                        className="bg-transparent w-full h-full outline-none py-2 pe-2"
                                        autoFocus
                                        aria-label="Search input"
                                    />
                                </div>

                                {/* Submit button */}
                                <Button variant="secondary" size="sm" type="submit" aria-label="Search" rounded="[10px]">
                                    Search
                                </Button>
                            </div>
                        </div>

                        {/* Search results component */}
                        <SearchShow query={searchQuery} />
                    </form>
                )}
            </div>
        </div>
    );
};

export default SearchBox;

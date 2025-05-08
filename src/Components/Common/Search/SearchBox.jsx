import React, { useState, useEffect } from 'react';
import { Search } from "lucide-react";
import { Button } from '../Button/Button'
import { motion, AnimatePresence } from "framer-motion";
import SearchShow from './SearchShow';

// Dummy Data for demo
const dummyData = [
    { id: 1, title: "How to become a leader", description: "Learn leadership skills" },
    { id: 2, title: "React best practices", description: "Tips for better React code" },
    { id: 3, title: "HTML fundamentals", description: "Basic HTML tags and usage" },
    { id: 4, title: "CSS animations", description: "Create beautiful transitions" },
];

const SearchBox = ({
    icon = '',
    defaultText = "Learners to Leaders",
    placeholderText = "Search anything..."
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentIcon, setCurrentIcon] = useState(icon);
    const [filteredData, setFilteredData] = useState([]);

    // Animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIcon(prev => prev === 'search' ? 'shape' : 'search');
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Filter data based on searchQuery
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredData([]);
        } else {
            const lowerCaseQuery = searchQuery.toLowerCase();
            const results = dummyData.filter(item =>
                item.title.toLowerCase().includes(lowerCaseQuery) ||
                item.description.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredData(results);
        }
    }, [searchQuery]);

    const handleSearchClick = () => {
        setIsExpanded(true);
    };

    const handleSearchBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsExpanded(false);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Optional: send request to server or log
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="group cursor-default" onBlur={handleSearchBlur} tabIndex={0}>
            {!isExpanded ? (
                <div onClick={handleSearchClick} className="flex items-center gap-4 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 group py-2 px-4 rounded-full w-fit cursor-pointer overflow-hidden">
                    <AnimatePresence mode="wait">
                        {currentIcon === 'search' ? (
                            <motion.div key="search" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="grid place-content-center h-5 w-5">
                                <Search />
                            </motion.div>
                        ) : (
                            <motion.div key="shape" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="flex items-center h-5 w-fit">
                                    <motion.img src="./icons/html.svg" alt="" className="h-5 rounded-full -me-1 border-2 border-white" initial={{x:-120}} animate={{x:0}} transition={{ duration: 0.6, ease: "easeInOut" }} />
                                    <motion.img src="./icons/js.svg" alt="" className="h-5 rounded-full -me-1 border-2 border-white" initial={{x:-120}} animate={{x:0}} transition={{ duration: 0.4, ease: "easeInOut" }} />
                                <motion.img src="./icons/react.svg" alt="" className="h-5 rounded-full -me-1 border-2 border-white" initial={{x:-120}} animate={{x:0}} transition={{ duration: 0.2, ease: "easeInOut" }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <p className='text-sm'>{defaultText}</p>
                </div>
            ) : (
                <form onSubmit={handleSearchSubmit} className="w-full h-full relative">
                    <div className="flex max-w-lg flex-col gap-2 justify-between bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur rounded-xl p-4 shadow-2xl shadow-gray-300 dark:shadow-gray-950 border border-gray-200 dark:border-gray-700/30 group transition-all duration-500">
                            <h3 className='text-gray-800 font-medium text-sm dark:text-gray-300'>What you are looking for?</h3>
                        <div className="flex items-center gap-2">
                            <div className='flex items-center max-w-xl flex-1 bg-gray-50 dark:bg-gray-950/50 border border-gray-300 dark:border-gray-700 focus-within:border-teal-600 group rounded-full overflow-hidden'>
                                <div className='p-2'>
                                    <Search className='text-gray-600 p-0.5 dark:text-gray-400' />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={placeholderText}
                                    className="bg-transparent w-full h-full outline-none py-2 pe-2"
                                    autoFocus
                                />
                            </div>
                            <div>
                                <Button variant='secondary' size='sm' type="submit" aria-label="Search" rounded='full'>Search</Button>
                            </div>
                        </div>
                    </div>

                    {/* Show results */}
                    <SearchShow results={filteredData} query={searchQuery} />
                </form>
            )}
        </div>
    );
};

export default SearchBox;
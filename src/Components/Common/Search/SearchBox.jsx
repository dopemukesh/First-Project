/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Search } from "lucide-react";

const SearchBox = (
    {
        icon = '',
        defaultText = "Learners to Leaders",
        placeholderText = "Search anything..."
    }
) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

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
        // TODO: Implement your search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <div
            className="group cursor-default font-medium"
            // onClick={handleSearchClick}
            onBlur={handleSearchBlur}
            tabIndex={0}
        >
            {!isExpanded ? (
                <div
                    onClick={handleSearchClick}
                    className="flex items-center gap-4 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 group py-2 px-4 rounded-full w-fit cursor-pointer"
                >
                    {
                        icon == 'search' ?
                            <Search />
                            :
                            <div className="grid place-content-center">
                                <img
                                    src="shape01.svg"
                                    alt=""
                                    className="h-5 group-hover:rotate-45 group-hover:scale-125 transition-all duration-500"
                                />
                            </div>
                    }
                    <p>{defaultText}</p>
                </div>
            ) : (
                <form onSubmit={handleSearchSubmit} className="w-full">
                    <div className="flex">
                        <div className="flex items-center max-w-xl flex-1 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 focus-within:border-teal-600 dark:focus-within:border-teal-500 shadow-2xl shadow-gray-300 dark:shadow-gray-950 group py-2 px-4 rounded-full">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={`${placeholderText}`}
                                className="bg-transparent w-full outline-none"
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="outline-none ps-2"
                                aria-label="Search"
                            >
                                <Search />
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SearchBox;
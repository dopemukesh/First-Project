/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Search } from "lucide-react";
import { Button } from '../Button/Button'

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
            className="group cursor-default"
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
                    <div className="flex max-w-lg flex-col gap-2 justify-between bg-gray-100 dark:bg-gray-900 rounded-xl p-4 shadow-2xl shadow-gray-300 dark:shadow-gray-950 border border-gray-200 dark:border-gray-700/30 group transition-all duration-500">
                        <h3>What you are looking for ?</h3>
                        <div className="flex items-center gap-2">
                            <div className='flex items-center max-w-xl flex-1 bg-white dark:bg-gray-950/50 border border-gray-200 dark:border-gray-700/50 focus-within:border-teal-600 group rounded-full overflow-hidden'>
                                <div className='p-2'>
                                    <Search className='text-gray-600 p-0.5 dark:text-gray-400' />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={`${placeholderText}`}
                                    className="bg-transparent w-full h-full outline-none py-2 pe-2"
                                    autoFocus
                                />
                            </div>
                            <div>
                                <Button
                                    size='sm'
                                    type="submit"
                                    aria-label="Search"
                                    rounded='full'
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SearchBox;
import React, { useState, useEffect, useRef } from 'react';
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchForm from './SearchForm';
import { blurBg2 } from '../Colors/BlurBgs';

const SearchBox = ({
  icon = '',
  defaultText = "Learners to Leaders",
  placeholderText = "Search anything..."
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(icon);
  const containerRef = useRef(null);

  // Icon toggle logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prev => prev === 'search' ? 'shape' : 'search');
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="group relative w-full max-w-lg" ref={containerRef}>
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

      <div className="relative z-50">
        {!isExpanded ? (
          <div
            onClick={() => setIsExpanded(true)}
            className={`flex items-center gap-4 ${blurBg2} border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 py-2 px-4 rounded-full w-fit cursor-pointer overflow-hidden`}
          >
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

            <p className="text-sm">{defaultText}</p>
          </div>
        ) : (
          <SearchForm placeholderText={placeholderText} closeForm={() => setIsExpanded(false)} />
        )}
      </div>
    </div>
  );
};

export default SearchBox;

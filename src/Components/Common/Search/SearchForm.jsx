import React, { useState, useEffect, useCallback } from 'react';
import { Search } from "lucide-react";
import { Button } from '../Button/Button';
import SearchShow from './SearchShow';

const SearchForm = ({ placeholderText, closeForm }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce logic
  useEffect(() => {
    const currentQuery = searchQuery || '';
    if (!currentQuery.trim()) {
      setDebouncedQuery('');
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(currentQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchLoading = useCallback((loading) => {
    setIsSearching(loading);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => Math.min(prev + 1, (results?.length || 0) - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && results?.[activeIndex]) {
          // Get the display value from the result
          const selectedValue = results[activeIndex].fields?.name ||
            results[activeIndex].fields?.username ||
            results[activeIndex].fields?.title ||
            results[activeIndex].fields?.description ||
            results[activeIndex].value;
          setSearchQuery(selectedValue);
          setActiveIndex(-1);
        }
        break;
      case 'Escape':
        closeForm?.();
        break;
      default:
        break;
    }
  }, [activeIndex, results, closeForm]);

  // Handle item selection from SearchShow
  const handleSelect = useCallback((item) => {
    // Get the display value from the selected item
    const selectedValue = item.fields?.name ||
      item.fields?.username ||
      item.fields?.title ||
      item.fields?.description ||
      item.value;
    setSearchQuery(selectedValue);
    setActiveIndex(-1);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const currentQuery = searchQuery || '';
    if (currentQuery.trim()) {
      console.log('Searching for:', currentQuery);
      // Add your search logic here
    }
  };

  // Clear search input and results
  const handleClearSearch = () => {
  setSearchQuery('');
  setResults([]); // agar results ko bhi empty karna ho
};


  return (
    <form onSubmit={handleSearchSubmit} className="w-full relative">
      <div className={`flex flex-col gap-2 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur ${(searchQuery?.length || 0) > 0 ? 'rounded-t-xl' : 'rounded-3xl'
        } p-4 shadow-2xl shadow-gray-300 dark:shadow-gray-950 border border-gray-200 dark:border-gray-700/30 transition-all duration-500`}>
        <h3 className="text-gray-500 text-sm mb-2">What are you looking for?</h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center md:w-96 bg-gray-50 dark:bg-gray-950/50 border border-gray-300 dark:border-gray-700 focus-within:border-teal-600 dark:focus-within:border-teal-700 rounded-[10px] overflow-hidden">
            <div className="p-2">
              <Search className="text-gray-600 p-0.5 dark:text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholderText || 'Search...'}
              className="bg-transparent w-full h-full outline-none py-2 pe-2"
              autoFocus
              aria-label="Search input"
            />
          </div>

          <Button
            variant="secondary"
            size="sm"
            rounded="[10px]"
            type="submit"
            disabled={isSearching}
          >
            {isSearching ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
                Searching...
              </span>
            ) : 'Search'}
          </Button>
        </div>
      </div>

      {searchQuery && (
        <SearchShow
          query={debouncedQuery}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          setResults={setResults}
          onLoadingChange={handleSearchLoading}
          onClear={handleClearSearch}
        />
      )}
    </form>
  );
};

export default SearchForm;
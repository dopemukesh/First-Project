import React, { useEffect, useState } from 'react';
import FetchAPI from '../../../api/fetchAPI/FetchAPI2';
import { RESULT_TYPES, RESULT_CATEGORIES } from './Types/searchResultTypes';

const SearchShow = ({ query, activeIndex = -1, onSelect, setResults, onLoadingChange }) => {
    const [localResults, setLocalResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [groupedResults, setGroupedResults] = useState({});

    useEffect(() => {
        onLoadingChange?.(loading);
    }, [loading, onLoadingChange]);

    useEffect(() => {
        if (!query || query.trim() === '') {
            setLocalResults([]);
            setResults([]);
            setGroupedResults({});
            return;
        }

        const fetchResults = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await FetchAPI(
                    `v1/search/suggest/?query=${encodeURIComponent(query)}`,
                    { method: 'GET' }
                );

                // Process the API response to match your data structure
                const processedResults = (Array.isArray(response.results)
                    ? response.results
                    : Array.isArray(response)
                        ? response
                        : []);

                // Transform results to include all fields
                const transformedResults = processedResults.map(item => ({
                    id: item.id,
                    role: item.role,
                    fields: item.fields, // Keep all fields
                    metadata: item.metadata || {} // Include metadata if exists
                }));

                setLocalResults(transformedResults);
                setResults(transformedResults);

                // Group results by category
                const grouped = transformedResults.reduce((acc, result) => {
                    const config = RESULT_TYPES[result.role] || RESULT_TYPES.default;
                    if (!acc[config.category]) {
                        acc[config.category] = [];
                    }
                    acc[config.category].push(result);
                    return acc;
                }, {});

                setGroupedResults(grouped);

            } catch (err) {
                console.error("Error fetching search results:", err);
                setError('Failed to fetch. Please try/refresh again.');
                setLocalResults([]);
                setResults([]);
                setGroupedResults({});
            } finally {
                setLoading(false);
            }
        };

        const debounceTimer = setTimeout(fetchResults, 300);
        return () => clearTimeout(debounceTimer);
    }, [query, setResults]);

    const getResultConfig = (result) => {
        return RESULT_TYPES[result.role] || RESULT_TYPES.default;
    };

    if (!query) return null;

    return (
        <div className='absolute max-w-lg w-full bg-gray-50 dark:bg-gray-900/80 shadow-2xl shadow-gray-300 dark:shadow-gray-950 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-b-xl overflow-hidden z-50'>
            {loading && (
                <div className='p-3 flex items-center justify-center gap-2'>
                    <div className='animate-spin h-5 w-5 border-2 border-teal-500 rounded-full border-t-transparent'></div>
                    <span className='text-gray-500'>Searching...</span>
                </div>
            )}

            {error && (
                <div className='p-3 text-red-500 text-center flex items-center justify-center gap-2'>
                    <span>⚠️</span>
                    <span>{error}</span>
                </div>
            )}

            {!loading && !error && localResults.length === 0 && (
                <div className='p-3 text-gray-400 text-center'>
                    <h2>No results found for &quot;{query}&quot;.</h2>
                    <p className='text-xs mt-1'>Try different keywords</p>
                </div>
            )}

            {Object.keys(groupedResults).length > 0 && (
                <div className='overflow-y-auto max-h-96'>
                    {Object.entries(groupedResults).map(([category, results]) => (
                        <div key={category} className='border-b border-gray-200 dark:border-gray-700 last:border-b-0'>
                            <div className='sticky top-0 bg-gray-100 dark:bg-gray-800/80 px-3 py-1.5 flex items-center gap-2 text-gray-400 text-xs'>
                                <span>{RESULT_CATEGORIES[category]?.name || category}</span>
                            </div>

                            <ul className='divide-y dark:divide-gray-800'>
                                {results.map((result, index) => {
                                    const config = getResultConfig(result);
                                    const globalIndex = localResults.findIndex(r => r.id === result.id);
                                    const isActive = globalIndex === activeIndex;

                                    return (
                                        <li
                                            key={`${result.id}-${index}`}
                                            className={`p-2 flex items-center gap-3 cursor-pointer transition-colors ${isActive
                                                ? 'bg-gray-200 dark:bg-gray-800'
                                                : 'bg-white dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                }`}
                                            onClick={() => onSelect(result)}
                                            tabIndex={0}
                                            onKeyDown={(e) => e.key === 'Enter' && onSelect(result)}
                                            aria-selected={isActive}
                                        >
                                            <span className='flex-shrink-0'>{config.icon}</span>
                                            <div className='min-w-0'>
                                                {/* Display name if available, otherwise fallback to username */}
                                                <p className={`text-sm truncate ${config.className || ''}`}>
                                                    {result.fields.name || result.fields.username || result.fields.title || result.fields.description || 'No name'}
                                                </p>

                                                {/* Display username if different from name */}
                                                {/* {result.fields.username && result.fields.name !== result.fields.username && (
                                                    <p className='text-xs text-gray-500 dark:text-gray-400 truncate'>
                                                        @{result.fields.username}
                                                    </p>
                                                )} */}

                                                {result.fields.description && result.fields.title ? (
                                                    <p className='text-xs text-gray-500 dark:text-gray-400 truncate'>
                                                        {result.fields.description}
                                                    </p>
                                                ):(
                                                    <p className='text-xs text-gray-500 dark:text-gray-400 truncate'>
                                                        {result.fields.title}
                                                    </p>
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchShow;
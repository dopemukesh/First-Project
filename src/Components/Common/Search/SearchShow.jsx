import React, { useEffect, useState } from 'react';
import FetchAPI from '../../../api/fetchAPI/FetchAPI';

const SearchShow = ({ query }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query || query.trim() === '') {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await FetchAPI(`v1/search/suggest/?query=${encodeURIComponent(query)}`, { method: 'GET' });
                setResults(response.results || response); // Adjust based on API response
            } catch (err) {
                console.error("Error fetching search results:", err);
                setError('Failed to fetch results');
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query]);


    if (!query) return null;

    return (
        <div className='absolute max-w-lg w-full bg-gray-50 dark:bg-gray-900/80 shadow-2xl shadow-gray-300 dark:shadow-gray-950 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-b-xl overflow-hidden z-50'>
            {loading && <p className='p-3 text-gray-500 text-center'>Loading...</p>}
            {error && <p className='p-3 text-red-500 text-center'>Error: {error}</p>}

            {results.length > 0 ? (
                <ul className='overflow-y-scroll max-h-64 divide-y divide-gray-300 dark:divide-gray-700'>
                    {/* fields ke basis pe show */}
                    {/* {results.map((result, index) => (
                        <li key={`${result.id}-${result.field}`} className='bg-white dark:bg-gray-900 p-3 flex items-start gap-2'>
                            {result.field === 'title' && (
                                <p className='font-bold text-gray-800 dark:text-gray-200'>{result.value}</p>
                            )}

                            {result.field === 'description' && (
                                <p className='text-gray-600 dark:text-gray-300 text-sm line-clamp-2'>{result.value}</p>
                            )}

                            {result.field === 'name' && (
                                <p className='text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1'>
                                    <span>👤</span> {result.value}
                                </p>
                            )}

                            {result.field === 'company' && (
                                <p className='text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1'>
                                    <span>🏢</span> {result.value}
                                </p>
                            )}

                            {result.field === 'job' && (
                                <p className='text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1'>
                                    <span>💼</span> {result.value}
                                </p>
                            )}

                            {!(["title", "description", "name", "company", "job"].includes(result.field)) && (
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>{result.value}</p>
                            )}
                        </li>
                    ))} */}

                    {/* role and fields ke basis pe value show */}
                    {results
                        .filter(result => {
                            // Student: show only 'name'
                            if (result.role === 'Student' && result.field === 'name') return true;
                            // Career: show only 'title'
                            if (result.role === 'Career' && result.field === 'description') return true;
                            // Classes: show only 'name'
                            if (result.role === 'Classes' && result.field === 'name') return true;
                            return false; // Ignore everything else
                        })
                        .map((result, index) => (
                            <li key={`${result.id}-${result.field}`} className='bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 flex items-start gap-2'>

                                {result.role === 'Student' && (
                                    <p className='text-gray-600 dark:text-gray-300 text-sm flex gap-2'>
                                        👤 {result.value}
                                    </p>
                                )}

                                {result.role === 'Career' && (
                                    <div className='text-gray-600 dark:text-gray-300 text-sm flex gap-2'>
                                        <span>📑</span>
                                        <span>{result.value}</span>
                                    </div>
                                )}

                                {result.role === 'Classes' && (
                                    <div className='text-gray-600 dark:text-gray-300 text-sm flex gap-2'>
                                        <span>📑</span>
                                        <span>{result.value}</span>
                                    </div>
                                )}

                            </li>
                        ))}





                </ul>
            ) : (
                !loading && <div className='p-3 text-gray-400 text-center'>
                    <p>No results found for &quot;{query}&quot;.</p>
                </div>
            )
            }
        </div >
    );
};

export default SearchShow;

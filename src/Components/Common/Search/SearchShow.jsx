import React from 'react';

const SearchShow = ({ results = [], query }) => {
    if (!query) return null;

    return (
        <>
            {results && (
                <div className='mt-4 absolute max-w-lg w-full bg-gray-50 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden z-50'>
                    <p className='text-gray-800 font-medium text-sm dark:text-gray-300 bg-white dark:bg-gray-900 p-2'>
                        Results : 
                        <span className='text-gray-400'> {results.length}</span>
                    </p>
                    {results.length > 0 ? (
                        <ul className='space-y-2 p-2 mb-1 overflow-y-scroll max-h-64 rounded-lg'>
                            {results.map(result => (
                                <li key={result.id} className='bg-white dark:bg-gray-700 p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:shadow-inner'>
                                    <h4 className='font-semibold text-gray-900 dark:text-white'>{result.title}</h4>
                                    <p className='text-gray-600 dark:text-gray-300 text-sm'>{result.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                            <div className='p-3 m-2 text-gray-400 text-center'>
                            <p>No results found for &quot;{query}&quot;.</p>
                        </div>
                    )}
                </div>
            )}
        </>
    )
};

export default SearchShow;
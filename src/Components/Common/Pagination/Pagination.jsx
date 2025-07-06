import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";

const Pagination = ({ data, showPerPage, render }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [windowStart, setWindowStart] = useState(1);

    const windowSize = 3;
    const totalPages = Math.ceil(data.length / showPerPage);

    const windowEnd = Math.min(windowStart + windowSize - 1, totalPages);

    const paginatedData = data.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
    );

    // shift window dynamically when currentPage is outside window
    useEffect(() => {
        if (currentPage < windowStart) {
            setWindowStart(currentPage);
        } else if (currentPage > windowEnd) {
            setWindowStart(currentPage - windowSize + 1);
        }
    }, [currentPage, windowStart, windowEnd]);

    // next window on ... click
    const handleNextWindow = () => {
        const nextStart = windowStart + windowSize;
        if (nextStart > totalPages) {
            setWindowStart(1); // loop to start
        } else {
            setWindowStart(nextStart);
        }
    };

    const pageNumbersToShow = [];
    for (let i = windowStart; i <= windowEnd; i++) {
        pageNumbersToShow.push(i);
    }

    return (
        <>
            {render(paginatedData)}

            {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2 flex-wrap">
                    <Button
                        size="ssm"
                        variant="secondary"
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>

                    {pageNumbersToShow.map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded-lg ${currentPage === page
                                ? "bg-teal-600 dark:bg-teal-500 text-white dark:text-gray-800"
                                : "bg-gray-200 dark:bg-gray-700"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {windowEnd < totalPages && (
                        <button
                            onClick={handleNextWindow}
                            className="px-3 py-1 rounded-lg bg-gray-300 dark:bg-gray-600"
                        >
                            ...
                        </button>
                    )}

                    <Button
                        size="ssm"
                        variant="secondary"
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            )}
        </>
    );
};

export default Pagination;

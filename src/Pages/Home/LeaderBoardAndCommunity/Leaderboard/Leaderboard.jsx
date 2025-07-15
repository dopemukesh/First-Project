import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useInView, motion } from "framer-motion";
import { Button } from '../../../../Components/Common/Button/Button';
import Loader from '../../../../Components/Common/Loader/Loader';
import FetchAPI from '../../../../api/fetchAPI/FetchAPI2';

const Leaderboard = () => {
    // Refs & Animation Trigger
    const leaderboardRef = useRef(null);
    const isLeaderboardInView = useInView(leaderboardRef, {
        triggerOnce: true,
        margin: "-50px",
    });

    // State management
    const [contributors, setContributors] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);

    // Background class styling
    const bgGrads = "bg-white dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 rounded-2xl";

    // Fetch contributors from API
    const fetchContributors = async () => {
        try {
            setLoading(true);
            setError(null); // Clear previous errors

            const res = await FetchAPI(
                `v1/leaderboard/all?page=${page}&limit=${limit}`,
                { method: 'get' }
            );

            const data = res;

            if (data?.success) {
                if (data.contributors.length < limit) setHasMore(false);
                setContributors(prev => [...prev, ...data.contributors]);
            } else {
                throw new Error(data?.message || "Something went wrong while fetching contributors.");
            }

        } catch (err) {
            let errorMessage = "An unexpected error occurred. Please try again.";

            if (err.response) {
                // Server responded but with an error code
                const status = err.response.status;
                const serverMessage = err.response.data?.message || "Server responded with an error.";
                errorMessage = `Error ${status}: ${serverMessage}`;
            } else if (err.code === "ERR_NETWORK" || err.message === "Failed to fetch") {
                // No internet or DNS/network issue
                errorMessage = "No internet connection. Please check your network.";
            } else if (err.message) {
                // Custom error or unknown error
                errorMessage = err.message;
            }

            setError(errorMessage);
            console.error("Error Details:", err);
        } finally {
            setLoading(false);
        }
    };

    // Trigger fetch on page change
    useEffect(() => {
        fetchContributors();
    }, [page]);

    // Load more handler
    const handleLoadMore = () => {
        if (hasMore && !loading) {
            setPage(prev => prev + 1);
        }
    };

    return (
        <div className="flex flex-col items-center">
            {/* Animated Leaderboard Container */}
            <motion.div
                ref={leaderboardRef}
                className={`w-full max-w-xl ${bgGrads} mb-4 relative overflow-hidden`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isLeaderboardInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1 }}
            >
                {/* Background Glow */}
                <i className="w-56 h-56 bg-teal-500/30 absolute blur-[96px] z-0 left-[30%] -bottom-56"></i>

                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-800 p-4">
                    <h3 className="text-sm font-medium">Top Leaderboard</h3>
                    <h3 className="text-sm text-teal-600 dark:text-teal-500">Contributions</h3>
                </div>

                {/* Contributor List */}
                <div className="max-h-64 overflow-y-scroll relative">
                    {contributors.length > 0 ? (
                        <>
                            {contributors.map((user, index) => (
                                <motion.div
                                    key={user._id || index}
                                    className="flex items-center justify-between gap-4 cursor-pointer px-4 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-100/5"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isLeaderboardInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Left Section: Profile Info */}
                                    <div className="flex flex-1 items-center space-x-4">
                                        <p className="text-gray-400 text-xs">{index + 1}</p>
                                        <img
                                            src={user.profilePicture}
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-gray-500"
                                        />
                                        <div className="flex gap-4">
                                            <div>
                                                <h4 title={user.name} className="text-sm font-semibold">
                                                    {user.name} {" "}

                                                    {/* UID Display (First 2 + Last 3 chars) */}
                                                    <span className="text-xs font-normal text-gray-400 dark:text-gray-600">
                                                        {(user.userId.slice(0, 2) + user.userId.slice(-3)).toUpperCase()}
                                                    </span>
                                                </h4>
                                                <p
                                                    title={user.bio || "No bio available!"}
                                                    className="text-xs font-normal text-gray-500 dark:text-gray-400"
                                                >
                                                    {/* Truncated Bio */}
                                                    {user.bio
                                                        ? user.bio.length > 30
                                                            ? `${user.bio.slice(0, 30)}...`
                                                            : user.bio
                                                        : "No bio available at this time because no bio in the server have been feeded!"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Section: Contribution Points */}
                                    <span className="text-sm text-teal-600 dark:text-teal-500">
                                        {user.contributions}
                                    </span>
                                </motion.div>
                            ))}

                            {/* Load More Button */}
                            {hasMore && (
                                <div className="w-full flex justify-center py-2">
                                    <Button
                                        onClick={handleLoadMore}
                                        variant={loading ? 'outline2' : 'secondary'}
                                        size='ssm'
                                    >
                                        {loading ? "Loading..." : "Load More"}
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        // Empty / Error State
                        <div className='flex justify-center py-4'>
                            {loading ? (
                                // 'Loading...'
                                <Loader />
                            ) : (
                                <>
                                    {error ?
                                        <div className='p-3 text-center flex items-center justify-center gap-2'>
                                            <div className='space-y-4 py-4'>
                                                <div className='space-y-2'>
                                                    <h2 className='font-medium'>{error}</h2>
                                                    <p className='text-sm text-gray-400 dark:text-gray-500 max-w-md'>
                                                        Sorry we couldn't find any data to {" "}
                                                        <span className='font-mono px-1 bg-gray-200 dark:bg-white/10'>show</span> here.
                                                    </p>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <Button
                                                        variant='outline2'
                                                        rounded='full'
                                                        size='sm'
                                                        onClick={() => window.location.reload()}
                                                    >
                                                        Refresh
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <p>No contributors found!</p>
                                    }
                                </>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Leaderboard;

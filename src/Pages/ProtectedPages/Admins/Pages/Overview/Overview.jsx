import React, { useEffect, useState } from 'react'
import Pagination from '../../../../../Components/Common/Pagination/Pagination';
import useResource from '../../../../../hooks/useResource';
import {JobCard2} from '../../../../Career/Jobs/JobCard2'
import { Button } from '../../../../../Components/Common/Button/Button';

/**
 * Overview admin dashboard page — displays stats, date/time,
 * recent jobs and quick actions.
 */
const Overview = () => {
    // Fetch jobs data using custom hook
    const { data: jobs, loading, error } = useResource("jobs");

    // Track current date and time for the dashboard
    const [dateTime, setDateTime] = useState(new Date());
    // Store current user info from localStorage
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Update the clock every second
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Retrieve user info once on mount
        const user = JSON.parse(localStorage.getItem('currentUser')) || {};
        setCurrentUser(user);

        // Cleanup timer on unmount
        return () => clearInterval(interval);
    }, []);

    // Format date and time for display
    const formattedDate = dateTime.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedTime = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Example statistics — replace with real data
    const statsData = [
        { title: "Total Jobs", value: "24", change: "+12%", icon: "💼" },
        { title: "Active Users", value: "1,240", change: "+8%", icon: "👥" },
        { title: "Applications", value: "560", change: "+5%", icon: "📝" },
        { title: "Revenue", value: "₹42K", change: "+15%", icon: "💰" }
    ];

    return (
        <div className='min-h-screen'>
            {/* Welcome and Quick Actions Section */}
            <section className='flex flex-col md:flex-row justify-between md:items-center mb-6'>
                <div>
                    {/* Personalized greeting with fallback for admin */}
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Hi, {currentUser?.name || "Admin"} 👋
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Here's what's happening with your platform today.
                    </p>
                </div>
                <div className="flex md:justify-end items-center my-4 w-screen md:w-full overflow-auto">
                    {/* Quick action buttons with icons */}
                    <div className='flex gap-2 overflow-x-auto min-w-[50%]'>
                        <Button to={'/admin/dashboard/users'} size='ssm' variant='outline2' className='w-fit'>
                            {/* Triangle icon SVG for users */}
                            <div className='w-3 h-3 fill-emerald-500 dark:fill-emerald-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium">Manage Users</span>
                        </Button>
                        <Button size='ssm' variant='outline2' className='w-fit'>
                            {/* Orange dot icon for reports */}
                            <div className='w-3 h-3 rounded-full bg-orange-500 dark:bg-orange-400'></div>
                            <span className="text-sm font-medium">Reports</span>
                        </Button>
                        <Button to={'/admin/dashboard/jobs'} size='ssm' variant='outline2' className='w-fit'>
                            {/* Blue dot icon for jobs */}
                            <div className='w-3 h-3 bg-sky-500 dark:bg-sky-400'></div>
                            <span className="text-sm font-medium">Add Jobs</span>
                        </Button>
                        <Button to={'/admin/dashboard/classes'} size='ssm' variant='info' className='w-fit'>
                            {/* Plus icon for new classes */}
                            <span className='text-lg'>+</span>
                            <span className="text-sm font-medium">Create Class</span>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Statistic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {statsData.map((stat, index) => (
                    <div key={index} className="p-4 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 rounded-2xl hover:shadow-md">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                            </div>
                            <span className="text-5xl">{stat.icon}</span>
                        </div>
                        <p className="text-xs text-green-500 mt-2">{stat.change} from last week</p>
                    </div>
                ))}
            </div>

            {/* Date & Time */}
            <div className="mb-6 p-2">
                <div className="flex justify-end items-center">
                    <div className='flex gap-2'>
                        <p className="text-sm border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1.5">{formattedDate}</p>
                        <p className="text-sm border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1.5">{formattedTime}</p>
                    </div>
                </div>
            </div>

            {/* Recent Job Postings */}
            <section className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-800 dark:text-gray-100">Recent Job Postings</h3>
                    {/* Optional: View All button */}
                </div>

                {/* Job list loading/error/success states */}
                {loading ? (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                        <p>Loading jobs...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800 shadow-sm">
                        <p className="text-red-500 dark:text-red-300">Error loading jobs: {error}</p>
                    </div>
                ) : (
                    <div>
                        {/* Paginated job cards */}
                        <Pagination
                            data={jobs}
                            showPerPage={6}
                            render={(paginatedJobs) => (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {paginatedJobs.map((job) => (
                                        <JobCard2
                                            key={job._id}
                                            job={{
                                                ...job,
                                                jobTitle: job.title || job.jobTitle,
                                                companyName: job.company || job.companyName,
                                                location: job.location,
                                                salaryPerMonth: job.salary || job.salaryPerMonth,
                                                createdAt: job.postedAt || job.createdAt
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        />
                    </div>
                )}
            </section>
        </div>
    )
}

export default Overview

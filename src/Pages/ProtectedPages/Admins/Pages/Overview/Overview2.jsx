import { MapPin, MoreHorizontal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { MdEdit, MdOutlineCurrencyRupee } from 'react-icons/md';
import Pagination from '../../../../../Components/Common/Pagination/Pagination';
import JobCard from '../../../../Career/Jobs/JobCard2';
import useResource from '../../../../../hooks/useResource';
import CopyBtn from '../../../../../Components/Common/Button/CopyBtn';

const Overview = () => {

    // For jobs
    const { data: jobs, loading, error } = useResource("jobs");

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // cleanup
    }, []);

    const formattedDate = dateTime.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedTime = dateTime.toLocaleTimeString();

    return (
        <>
            <div className=''>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Hey, Dev 👋
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Manage and view all the data from here.
                    </p>
                </div>

                <section>
                    <h3>Recent</h3>
                    <div className='w-fit bg-gray-100 dark:bg-white/10 border dark:border-white/10 rounded-xl overflow-hidden'>
                        <div className="text-xs flex items-center gap-2 mb-2 bg-gradient-to-r from-sky-500/10 to-rose-500/10 p-2">
                            <p>Today</p>
                            <p>{formattedTime}</p>
                            <p>{formattedDate}</p>
                        </div>

                        <div className='p-2 flex flex-wrap gap-2'>
                            {/* job card */}
                            <div className='bg-white dark:bg-gray-950 border border-gray-300 dark:border-white/20 p-2 rounded-2xl w-80'>
                                {/* top */}
                                <div className='flex items-center justify-between gap-4'>
                                    <div>
                                        <p className='text-xs font-medium'>Frontend Developer</p>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>HR Mukesh</p>
                                    </div>

                                    <div className='flex items-center gap-2 text-xs'>
                                        <p className='text-gray-500 dark:text-gray-400'>100</p>
                                        <p className='text-gray-500 dark:text-gray-400'>Full Time</p>
                                        <p className='text-sky-500 font-semibold'>20K</p>
                                        <div><MoreHorizontal className='cursor-pointer bg-gray-200 dark:bg-white/10 h-5 w-5 p-0.5 rounded-md' /></div>
                                    </div>
                                </div>

                                {/* center */}
                                <div className='my-4'>
                                    <p className='text-xs font-medium'>Description</p>
                                    <p className='text-xs text-gray-500 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, rerum!</p>
                                </div>

                                {/* bottom */}
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2 text-[9px]'>
                                        <p className='py-0.5 px-1.5 border border-gray-300 dark:border-white/20 rounded-full text-gray-500 dark:text-gray-400'>development</p>
                                        <p className='py-0.5 px-1.5 border border-gray-300 dark:border-white/20 rounded-full text-gray-500 dark:text-gray-400'>frontend</p>
                                    </div>

                                    <div>
                                        <MdEdit className='cursor-pointer bg-gray-200 dark:bg-white/10 h-5 w-5 p-0.5 rounded-md' />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Pagination
                                    data={jobs}
                                    showPerPage={6}
                                    render={(paginatedJobs) => (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {paginatedJobs.map((job) => (
                                                <JobCard key={job._id} job={job} />
                                            ))}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Overview
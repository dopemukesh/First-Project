/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '../Common/Button/Button';
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";

const JobCard = ({ job, bgColors, onBookmark }) => {
    // Predefined color array based on job categories or types
    const cardColors = {
        "Full Time": "bg-blue-300",
        "Part Time": "bg-green-300",
        "Contract": "bg-yellow-300",
        "Freelance": "bg-red-300",
        "Remote": "bg-purple-300",
        "Internship": "bg-teal-300",
    };


    // Get color based on job type, fallback to a default color
    const getCardColor = () => {
        const jobType = job.type?.toLowerCase().trim();

        return (
            Object.entries(cardColors).find(
                ([key]) => key.toLowerCase().trim() === jobType
            )?.[1] || "bg-gray-100 dark:bg-gray-800"
        );
    };



    return (
        <div className={`${bgColors} text-black min-h-[250px] flex flex-col justify-between p-4 group`}>
            <div className={`${getCardColor()} relative overflow-hidden p-4 rounded-xl group-hover:-translate-y-8 transition-transform duration-700`}>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{job.date}</span>
                    <span
                        className="absolute top-0 right-0 bg-gradient-to-l from-indigo-400 to-indigo-600 text-white text-sm px-3 py-1 rounded-bl-xl cursor-pointer"
                        onClick={onBookmark}
                    >
                        {job.bookMarked ? (
                            <BsBookmarkCheckFill size={18} />
                        ) : (
                            <BsBookmark size={18} />
                        )}
                    </span>
                </div>
                <div className="mb-2">
                    <p className="text-sm font-medium">{job.company}</p>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        <img src={job.logo} alt="logo" className="w-6 h-6 ml-2" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                    <span className="px-2 py-1 bg-white/80 rounded-full">{job.type}</span>
                    <span className="px-2 py-1 bg-white/80 rounded-full">{job.level}</span>
                    <span className="px-2 py-1 bg-white/80 rounded-full">{job.mode}</span>
                    <span className="px-2 py-1 bg-white/80 rounded-full">{job.project}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
                <div className="text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                        <MapPin size={18} />
                        {job.location}
                    </div>
                    <div className="flex items-center">
                        <p className="font-semibold text-teal-600 dark:text-teal-500 ps-1">
                            {job.salary} / -
                        </p>
                    </div>
                </div>
                <Button variant="secondary" size="sm">
                    Get Details
                </Button>
            </div>
        </div>
    );
};

export default JobCard;
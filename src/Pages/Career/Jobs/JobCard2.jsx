/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MapPin } from 'lucide-react';
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Components/Common/Button/Button';

/**
 * Helper function to determine background color based on job type.
 * Falls back to a default if type is not found in the mapping.
 */
const getCardColor = (jobType, cardColors) => {
    const type = jobType?.toLowerCase().trim();

    return (
        Object.entries(cardColors).find(
            ([key]) => key.toLowerCase().trim() === type
        )?.[1] || "bg-gray-100 dark:bg-gray-800"
    );
};

const JobCard = ({
    job,
    bgColors,
    onBookmark,
    actions // Optional custom actions (e.g., Apply button)
}) => {
    const navigate = useNavigate();

    const handleDetails = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser?.isLoggedIn) {
            navigate(`/job-details/${job._id}`);
        } else {
            navigate('/login', { 
                state: { 
                    from: `/job-details/${job._id}`,
                    message: 'Please login to view job details' 
                } 
            });
        }
    };

    // Predefined color palette based on job types
    const cardColors = {
        "Full Time": "bg-blue-300",
        "Part Time": "bg-green-300",
        "Contract": "bg-yellow-300",
        "Freelance": "bg-red-300",
        "Remote": "bg-purple-300",
        "Internship": "bg-teal-300",
    };

    const badgeClasses = "px-2 py-1 bg-white/80 rounded-full text-xs";

    return (
        <div className={`${bgColors} text-black min-h-[250px] flex flex-col justify-between p-4 group`}>
            {/* Top Section with company info and dynamic background color */}
            <div className={`relative overflow-hidden p-4 rounded-xl group-hover:-translate-y-8 transition-transform duration-700 bg-red-400`}>
                {/* Date and Bookmark Icon */}
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">{job.createdAt}</span>
                    {onBookmark && (
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
                    )}
                </div>

                {/* Company and Job Title */}
                <div className="mb-2">
                    <p className="text-sm font-medium">{job.companyName}</p>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">{job.jobTitle}</h3>
                        {job.logo && (
                            <img src={job.logo} alt="logo" className="w-6 h-6 ml-2" />
                        )}
                    </div>
                </div>

                {/* Job Details Badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {job.jobType && <span className={badgeClasses}>{job.jobType}</span>}
                    {job.keywords && <span className={badgeClasses}>{job.keyword}</span>}
                    {/* {job.mode && <span className={badgeClasses}>{job.mode}</span>} */}
                    {/* {job.project && <span className={badgeClasses}>{job.project}</span>} */}
                </div>
            </div>

            {/* Bottom Section with Location, Salary, and Action Button */}
            <div className="flex justify-between items-center mt-4 text-sm">
                <div className="text-gray-500 dark:text-gray-400">
                    {/* Location Info */}
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                    </div>

                    {/* Salary Info */}
                    {job.salaryPerMonth && (
                        <div className="flex items-center">
                            <p className="font-semibold text-teal-600 dark:text-teal-500 ps-1">
                                {job.salaryPerMonth} / -
                            </p>
                        </div>
                    )}
                </div>

                {/* Render custom action if passed, otherwise default button */}
                <div>
                    {actions ? (
                        actions
                    ) : (
                        <Button variant="secondary" size="sm" onClick={handleDetails}>
                            Get Details
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobCard;

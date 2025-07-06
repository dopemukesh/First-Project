/* eslint-disable react/prop-types */
import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../Components/Common/Button/Button";

// Custom background with glassmorphism + subtle border
const cardBackground = `bg-gradient-to-tl from-teal-500/20 via-transparent via-30% to-white/20 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl`;

// Skills badge styling
const chips = `px-2 py-0.5 border dark:border-gray-700 rounded-full text-[10px] text-gray-500`;

// Utility to format a date
const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

const JobCard = ({ job, actions }) => {
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

    return (
        <div className={`${cardBackground} min-h-[156px] overflow-hidden flex flex-col justify-between group`}>
            {/* Top Section with company info and dynamic background color */}
            <div className={`p-4`}>

                {/* Posting date and animated job type label */}
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">{formatDate(job.createdAt)}</span>
                    {job.jobType &&
                        <p className="absolute top-0 right-0 text-white text-xs px-3 py-1 rounded-bl-xl cursor-pointer animate-gradient">
                            {job.jobType}
                        </p>
                    }
                </div>

                {/* Company info */}
                <div className="mb-2 flex items-center justify-between">
                    <div className=" items-center">
                        <p className="text-xs text-gray-700 dark:text-gray-400">{job.companyName}</p>
                        <h3 className="text-base font-medium">{job.jobTitle}</h3>
                    </div>
                    {job.companyLogo && (
                        <div className="max-w-8 max-h-8 overflow-hidden flex flex-1 items-center justify-center ml-1">
                            <img src={job.companyLogo} alt="logo" className='object-cover' />
                        </div>
                    )}
                </div>

                {/* skills */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {job.skills && job.skills.map((skill, idx) => (
                        <span key={idx} className={chips}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Section with Location, Salary, and Action Buttons */}
            <div className="flex justify-between items-center text-xs border-t border-dashed border-gray-300 dark:border-gray-700 px-4 py-2">
                <div className="text-gray-500">
                    {/* Location Info */}
                    <div className="flex items-center gap-1">
                        <MapPin size={16} className='text-pink-500' />
                        {job.location}
                    </div>

                    {/* Salary Info */}
                    {job.salaryPerMonth && (
                        <div className="flex items-center">
                            <p className="text-sm font-semibold text-teal-600 dark:text-teal-500 ps-1">
                                ₹{job.salaryPerMonth}&nbsp;
                            </p>
                            <span className='text-gray-500'>/ month</span>
                        </div>
                    )}
                </div>

                {/* Actions (custom passed action) */}
                <div>
                    {actions ? (
                        actions
                    ) : (
                        <Button variant="secondary" size="ssm" onClick={handleDetails}>
                            Get Details
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobCard;

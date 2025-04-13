import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '../../../Components/Common/Button/Button';
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import Container from '../../../Components/Common/Container/Container';
import jobs from '../../../api/Jobs.json';

const ShowJobs = ({ searchCriteria }) => {
    const { skill, experience, location } = searchCriteria;

    // Filter jobs based on search criteria
    const filteredJobs = jobs.filter(job => {
        const matchesSkill = !skill ||
            job.title.toLowerCase().includes(skill.toLowerCase()) ||
            job.skills?.some(s => s.toLowerCase().includes(skill.toLowerCase()));

        // Updated experience matching logic
        const matchesExperience = 
            !experience || 
            experience === "All Experience" ||
            job.level === experience ||
            (experience === "Fresher (0-1 Year)" && 
                job.level.toLowerCase().includes("fresher")) ||
            (experience === "Junior (1-3 Years)" && 
                job.level.toLowerCase().includes("junior")) ||
            (experience === "Senior (3+ Years)" && 
                job.level.toLowerCase().includes("senior"));

        const matchesLocation = !location ||
            job.location.toLowerCase().includes(location.toLowerCase());

        return matchesSkill && matchesExperience && matchesLocation;
    });

    const bgColors =
        "bg-gradient-to-tl from-teal-500/20 via-transparent via-30% to-white/20 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-3xl";

    return (
        <Container className="py-14 px-4">
            <div className="mb-10">
                <h2 className="text-xl md:text-3xl font-semibold">
                    Search Results ({filteredJobs.length})
                </h2>
            </div>

            {filteredJobs.length === 0 ? (
                <div className="text-center text-gray-500">
                    No jobs found matching your criteria
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className={`${bgColors} text-black min-h-[250px] flex flex-col justify-between p-4 group`}
                        >
                            <div
                                className={`${job.bgColor} relative overflow-hidden p-4 rounded-xl group-hover:-translate-y-8 transition-transform duration-700`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">{job.date}</span>
                                    <span className="absolute top-0 right-0 bg-gradient-to-l from-indigo-400 to-indigo-600 text-white text-sm px-3 py-1 rounded-bl-xl cursor-pointer">
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
                                    <span className="px-2 py-1 bg-white rounded-full">
                                        {job.type}
                                    </span>
                                    <span className="px-2 py-1 bg-white rounded-full">
                                        {job.level}
                                    </span>
                                    <span className="px-2 py-1 bg-white rounded-full">
                                        {job.mode}
                                    </span>
                                    <span className="px-2 py-1 bg-white rounded-full">
                                        {job.project}
                                    </span>
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
                    ))}
                </div>
            )}
        </Container>
    );
};

export default ShowJobs;
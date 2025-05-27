import React from 'react';
import { useParams } from 'react-router-dom';
import jobsData from '../../../api/Jobs.json';
import { MapPin } from 'lucide-react';

const JobDetails = () => {
    const { id } = useParams();
    const job = jobsData.find(j => j.id === parseInt(id));

    if (!job) {
        return <div className="text-center p-8">Job not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                        <div className="flex items-center gap-4">
                            {job.logo && (
                                <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain"/>
                            )}
                            <div>
                                <h2 className="text-xl font-semibold">{job.company}</h2>
                                <div className="flex items-center text-gray-600">
                                    <MapPin size={16} className="mr-2"/>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-teal-600">{job.salary}</div>
                        <div className="text-gray-600">{job.date}</div>
                    </div>
                </div>
            </div>

            {/* Job Details Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h3 className="font-semibold mb-2">Job Type</h3>
                        <p>{job.type}</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h3 className="font-semibold mb-2">Experience Level</h3>
                        <p>{job.level}</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h3 className="font-semibold mb-2">Work Mode</h3>
                        <p>{job.mode}</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h3 className="font-semibold mb-2">Work Style</h3>
                        <p>{job.style}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Job Description</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {job.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;

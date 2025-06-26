import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from '../../../api/Jobs.json';
import { MapPin, Calendar, Users, Clock, Briefcase } from 'lucide-react';
import { Button } from '../../../Components/Common/Button/Button';

const JobConfirmationModal = ({ isOpen, onClose, onSubmit, jobTitle }) => {
    const [resume, setResume] = useState(null);
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!resume) {
            setError('Please upload your resume');
            return;
        }
        if (!agreed) {
            setError('Please agree to the terms');
            return;
        }
        onSubmit({ resume, agreed });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Apply for {jobTitle}</h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Upload Resume (PDF only)
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file && file.type === 'application/pdf') {
                                    setResume(file);
                                    setError('');
                                } else {
                                    setError('Please upload a PDF file');
                                    setResume(null);
                                }
                            }}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>

                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-1"
                        />
                        <label className="text-sm">
                            I confirm that all the information provided is accurate and I agree to the terms and conditions
                        </label>
                    </div>

                    <div className="flex justify-end gap-2 mt-6">
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={!resume || !agreed}
                        >
                            Submit Application
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = jobsData.find(j => j.id === parseInt(id));
    const [showConfirmation, setShowConfirmation] = useState(false);

    if (!job) {
        return <div className="text-center p-8">Job not found</div>;
    }

    // Map current data to API format
    const mappedJob = {
        jobTitle: job.title || '',
        jobType: job.type || '',
        recruitmentQuota: job.recruitmentQuota || 'Not specified',
        recruitmentPeriod: job.date || '',
        salaryPerMonth: parseInt(job.salary?.replace(/[^0-9]/g, '')) || 0,
        experienceInYears: parseInt(job.level) || 0,
        location: job.location || '',
        skills: job.skills || [],
        jobDescription: job.description || '',
        company: job.company || '',
        logo: job.logo || '',
        mode: job.mode || '',
        style: job.style || ''
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleBack = () => {
        navigate('/career');
    };

    const handleApply = () => {
        setShowConfirmation(true);
    };

    const handleSubmitApplication = (data) => {
        console.log('Application submitted:', data);
        setShowConfirmation(false);
        // Handle submission success (e.g., show success message, redirect)
    };

    return (
        <>
            <div className="max-w-4xl mx-auto p-3 sm:p-6">
                {/* Back button at the top */}
                <div className="mb-4">
                    <Button
                        variant="ghost"
                        onClick={handleBack}
                        className="flex items-center gap-2"
                    >
                        ← Back to Careers
                    </Button>
                </div>

                {/* Header Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-4">
                            <h1 className="text-2xl sm:text-3xl font-bold">{mappedJob.jobTitle}</h1>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                {mappedJob.logo && (
                                    <img src={mappedJob.logo} alt={mappedJob.company} className="w-12 h-12 object-contain"/>
                                )}
                                <div>
                                    <h2 className="text-lg sm:text-xl font-semibold">{mappedJob.company}</h2>
                                    <div className="flex items-center text-gray-600 mt-1">
                                        <MapPin size={16} className="mr-2"/>
                                        <span>{mappedJob.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-left sm:text-right">
                            <div className="text-xl sm:text-2xl font-bold text-teal-600">
                                ₹{mappedJob.salaryPerMonth.toLocaleString()}/month
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                {formatDate(mappedJob.recruitmentPeriod)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Details Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-6">
                        {/* Job Type */}
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Briefcase size={16} />
                                <h3 className="font-semibold text-sm sm:text-base">Job Type</h3>
                            </div>
                            <p className="text-sm sm:text-base">{mappedJob.jobType}</p>
                        </div>

                        {/* Experience */}
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Clock size={16} />
                                <h3 className="font-semibold text-sm sm:text-base">Experience Required</h3>
                            </div>
                            <p className="text-sm sm:text-base">{mappedJob.experienceInYears} Years</p>
                        </div>

                        {/* Quota */}
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Users size={16} />
                                <h3 className="font-semibold text-sm sm:text-base">Recruitment Quota</h3>
                            </div>
                            <p className="text-sm sm:text-base">{mappedJob.recruitmentQuota}</p>
                        </div>

                        {/* Work Mode */}
                        {mappedJob.mode && (
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h3 className="font-semibold mb-2 text-sm sm:text-base">Work Mode</h3>
                                <p className="text-sm sm:text-base">{mappedJob.mode}</p>
                            </div>
                        )}

                        {/* Work Style */}
                        {mappedJob.style && (
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h3 className="font-semibold mb-2 text-sm sm:text-base">Work Style</h3>
                                <p className="text-sm sm:text-base">{mappedJob.style}</p>
                            </div>
                        )}
                    </div>

                    {/* Skills Section */}
                    {mappedJob.skills && mappedJob.skills.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg sm:text-xl font-semibold mb-4">Required Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {mappedJob.skills.map((skill, index) => (
                                    <span key={index} className="px-2 sm:px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Description Section */}
                    <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4">Job Description</h3>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {mappedJob.jobDescription}
                        </p>
                    </div>

                    {/* Apply Button Section */}
                    <div className="flex justify-end mt-8">
                        <Button
                            variant="primary"
                            onClick={handleApply}
                            className="w-full sm:w-auto px-8"
                        >
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>

            <JobConfirmationModal
                isOpen={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onSubmit={handleSubmitApplication}
                jobTitle={mappedJob.jobTitle}
            />
        </>
    );
};

export default JobDetails;

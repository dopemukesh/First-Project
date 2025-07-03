import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import jobsData from '../../../api/Jobs.json';
import { MapPin, Calendar, Users, Clock, Briefcase, Calendar1 } from 'lucide-react';
import { Button } from '../../../Components/Common/Button/Button';
import useResource from '../../../hooks/useResource';
import Container from '../../../Components/Common/Container/Container';

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
        setResume(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-300 dark:bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4 z-[99999999]">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 max-w-lg overflow-y-auto border border-gray-300 dark:border-gray-700">
                <h2 className="text- font-semibold mb-4">
                    Apply for {jobTitle}
                </h2>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Resume Upload */}
                    <div>
                        <label
                            className="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                        >
                            Upload Resume (PDF only)
                        </label>
                        <label
                            htmlFor="resumeUpload"
                            className="bg-gray-200/70 dark:bg-gray-700 h-32 grid place-content-center p-2 rounded-xl cursor-pointer"
                        >
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                                {resume ? resume.name : "Click to upload your resume"}
                            </span>
                            <input
                                id="resumeUpload"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file && file.type === "application/pdf") {
                                        setResume(file);
                                        setError("");
                                    } else {
                                        setError("Please upload a PDF file");
                                        setResume(null);
                                    }
                                }}
                                className="sr-only"
                            />
                        </label>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-2">
                        <input
                            id="termsCheck"
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-1"
                        />
                        <label
                            htmlFor="termsCheck"
                            className={`text-sm ${agreed
                                ? "text-gray-800 dark:text-gray-300"
                                : "text-gray-600 dark:text-gray-400"
                                }`}
                        >
                            I confirm that all the information provided is accurate and I agree to the
                            terms and conditions
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2">
                        <Button
                            size="ssm"
                            variant="outline2"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            size="ssm"
                            variant="secondary"
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
    // For job details
    const { data: jobsData, loading, error } = useResource("jobs");
    const { id } = useParams();
    const navigate = useNavigate();
    const job = jobsData.find(j => j._id === id);

    // if (job){
    //     console.log(job);
    // }

    const [showConfirmation, setShowConfirmation] = useState(false);
    if (loading) return <p className="text-center p-8">Loading job...</p>;
    if (error) return <p className="text-center p-8 text-red-600">Error: {error}</p>;
    if (!job) return <p className="text-center p-8">Job not found</p>;

    const {
        jobTitle,
        jobType,
        jobDescription,
        jobDeadline,
        recruitmentPeriod,
        recruitmentQuota,
        salaryPerMonth,
        experienceInYears,
        location,
        skills,
        userQualification,
        keywords,
        companyName,
        companySite,
        companyDescription,
        applyLink,
        mode,
        style,
        logo,
    } = job;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const isExpired = new Date(jobDeadline) < new Date();

    const handleApply = () => setShowConfirmation(true);
    const handleSubmitApplication = (data) => {
        console.log("Application submitted:", data);
        setShowConfirmation(false);
    };

    return (
        <>
            <Container className="px-4">
                {/* Back button */}
                <div className="mb-4">
                    <Button
                        size='sm'
                        variant="outline2"
                        to={-1}
                        className="w-fit"
                    >
                        ← Back to Careers
                    </Button>
                </div>

                {/* Header Section */}
                <div className="border-b border-dashed border-gray-300 dark:border-gray-700 py-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                        <div className="space-y-4 flex flex-col">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-semibold">{jobTitle}</h1>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center">
                                <div>
                                    {logo ? (
                                        <img
                                            src={companyName}
                                            alt={companyName}
                                            className="w-12 h-12 object-contain"
                                        />
                                    ) : ""}
                                </div>

                                <div className='text-sm flex flex-wrap items-center text-gray-400 dark:text-gray-500 gap-2'>
                                    <div>
                                        <p className="text-teal-600 dark:text-teal-500">{companyName}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} className="text-pink-500" />
                                        <span>{location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar1 size={16} className="text-blue-500" />
                                        <span>{formatDate(recruitmentPeriod)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar1 size={16} className="text-blue-500" />
                                        Apply by <span>{formatDate(jobDeadline)}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-500">
                                    ₹{salaryPerMonth} /month
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-2 items-center h-fit w-fit'>
                            <Button
                                size='sm'
                                variant="primary"
                                onClick={handleApply}
                                className="w-full sm:w-auto px-8"
                                disabled={isExpired}
                            >
                                {isExpired ? "Expired" : "Apply now"}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="pb-8 mb-8">
                    {/* Details Grid */}
                    <div className="flex flex-1 justify-between flex-wrap row-gap-6 mb-6">
                        <DetailCard icon={<Briefcase size={16} />} label="Job Type" value={jobType} />
                        <DetailCard icon={<Clock size={16} />} label="Experience Required" value={`${experienceInYears} Years`} />
                        <DetailCard icon={<Users size={16} />} label="Number of openings" value={recruitmentQuota} />
                        {mode && <DetailCard label="Work Mode" value={mode} />}
                        {style && <DetailCard label="Work Style" value={style} />}
                    </div>

                    {/* Skills */}
                    <h3 className="font-semibold mb-2">Skills</h3>
                    {skills?.length > 0 ? (
                        <div className="mb-8">
                            <div className="flex flex-wrap gap-2 text-gray-600 dark:text-gray-400">
                                {skills.map((skill, i) => (
                                    <span key={i} className='text-xs px-2 py-1 border dark:border-gray-700 rounded-full'>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="mb-8">
                            <p className='text-sm text-gray-600 dark:text-gray-400'>No skills found</p>
                        </div>
                    )}

                    {/* Description */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-2">Job Description</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                            {jobDescription}
                        </p>
                    </div>

                    {/* Who can apply */}
                    <div className="mb-8">
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Qualifications required</h3>
                            {userQualification && userQualification.length > 0 ? (
                                <>
                                    <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3'>
                                        Only those candidates can apply :
                                    </p>
                                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-1">
                                        {userQualification.map((q, idx) => (
                                            <li key={idx}>{q}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    No specific requirements mentioned
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Keywords */}
                    {/* <div className="mb-8">
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Explore</h3>
                        </div>
                    </div> */}

                    <hr className='py-4 border-gray-200 dark:border-gray-800' />

                    {/* Company Information Section */}
                    <div className="mb-8">
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">
                                About the
                                <span className="text-gray-600 dark:text-gray-400 font-normal"> {companyName}</span>
                            </h3>
                            {companyDescription ? (
                                <>
                                    <div className='text-sm text-teal-600 dark:text-teal-400 leading-relaxed mb-3'>
                                        <a href={companySite} target='_blank'>Visit Website</a>
                                    </div>
                                    <div className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-1">
                                        <p>{companyDescription}</p>
                                    </div>
                                </>
                            ) : (
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    No description available
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Apply CTA */}
                    <div className="flex mt-8">
                        <Button
                            size='sm'
                            variant="primary"
                            onClick={handleApply}
                            className="w-full sm:w-auto px-8"
                            disabled={isExpired}
                        >
                            {isExpired ? "Expired" : "Apply now"}
                        </Button>
                    </div>
                </div>
            </Container>

            <JobConfirmationModal
                isOpen={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onSubmit={handleSubmitApplication}
                jobTitle={jobTitle}
            />
        </>
    );
};

export default JobDetails;

// Reusable inner component for field-card UI
const DetailCard = ({ icon, label, value }) => (
    <div className="py-2">
        {label && (
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                {icon}
                <h3 className="text-sm">{label}</h3>
            </div>
        )}
        <p className="text-sm sm:text-base">{value}</p>
    </div>
);

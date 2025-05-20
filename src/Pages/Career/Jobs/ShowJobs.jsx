import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '../../../Components/Common/Button/Button';
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import Container from '../../../Components/Common/Container/Container';
import jobs from '../../../api/Jobs.json';
import JobCard from '../../../Components/JobCard/JobCard';

const ShowJobs = ({ searchCriteria }) => {
    const { skill, experience, location } = searchCriteria;

    // Filter jobs based on search criteria: skill, experience, and location
    const filteredJobs = jobs.filter(job => {
        // Match skill if provided
        const matchesSkill =
            !skill ||
            skill
                .trim() // Remove leading/trailing spaces
                .toLowerCase()
                .split(' ') // Split by single space only
                .some(query =>
                    job.title.toLowerCase().includes(query) ||
                    job.skills?.some(s => s.toLowerCase().includes(query))
                );


        // Match experience level if provided or based on common groupings
        const matchesExperience =
            !experience ||
            experience === "All Experience" ||
            job.level === experience ||
            (experience === "Fresher (0-1 Year)" && job.level.toLowerCase().includes("fresher")) ||
            (experience === "Junior (1-3 Years)" && job.level.toLowerCase().includes("junior")) ||
            (experience === "Senior (3+ Years)" && job.level.toLowerCase().includes("senior"));

        // Match location if provided
        const matchesLocation =
            !location ||
            job.location.toLowerCase().includes(location.trim().toLowerCase());

        // Return true only if all conditions are matched
        return matchesSkill && matchesExperience && matchesLocation;
    });

    // Styling for the job card background
    const bgColors =
        "bg-gradient-to-tl from-teal-500/20 via-transparent via-30% to-white/20 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-3xl";

    return (
        <Container className="py-14 px-4">
            {/* Header showing number of results */}
            <div className="mb-10">
                <h2 className="text-xl md:text-3xl font-semibold">
                    Search Results ({filteredJobs.length})
                </h2>
            </div>

            {/* Show message if no jobs match */}
            {filteredJobs.length === 0 ? (
                <div className="text-center text-gray-500">
                    No jobs found matching your criteria
                </div>
            ) : (
                // Show matching job cards in a grid layout
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                            bgColors={bgColors}
                            // onBookmark={() => handleBookmark(job.id)} // Note: handleBookmark function should be defined
                            actions={
                                <Button variant="secondary" size="ssm">
                                    Apply now
                                </Button>
                            }
                        />
                    ))}
                </div>
            )}
        </Container>
    );
};

export default ShowJobs;

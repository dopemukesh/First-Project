import React from 'react';
import { Button } from '../../../Components/Common/Button/Button';
import Container from '../../../Components/Common/Container/Container';
import useResource from '../../../hooks/useResource';
import JobCard from './JobCard2';


const ShowJobs = ({ searchCriteria }) => {
    // For jobs
    const { data: jobs, loading, error } = useResource("jobs");
    const { keywords, experience, location } = searchCriteria;

    // Filter jobs based on search criteria: keywords, experience, and location
    const filteredJobs = jobs.filter(job => {
        // Match keywords in jobTitle, keywords, skills
        const matchKeyword =
            !keywords ||
            keywords
                .trim()
                .toLowerCase()
                .split(' ')
                .some(query =>
                    job.jobTitle.toLowerCase().includes(query) ||
                    job.keywords?.some(k => k.toLowerCase().includes(query)) ||
                    job.skills?.some(s => s.toLowerCase().includes(query))
                );

        // Match experienceInYears if provided
        const matchesExperience =
            !experience ||
            experience === "All Experience" ||
            Number(job.experienceInYears) === Number(experience) ||
            (experience === "Fresher (0-1 Year)" && job.experienceInYears <= 1) ||
            (experience === "Junior (1-3 Years)" && job.experienceInYears >= 1 && job.experienceInYears <= 3) ||
            (experience === "Senior (3+ Years)" && job.experienceInYears >= 3);

        // Match location if provided
        const matchesLocation =
            !location ||
            job.location.toLowerCase().includes(location.trim().toLowerCase());

        // Match salary if provided in searchCriteria
        const matchesSalary =
            !searchCriteria.salary ||
            job.salaryPerMonth >= Number(searchCriteria.salary);

        return matchKeyword && matchesExperience && matchesLocation && matchesSalary;
    });


    return (
        <Container className="py-14 px-4">
            {/* Header showing number of results */}
            <div className="mb-10">
                <h2 className="text-xl md:text-3xl font-semibold">
                    Search Results ({filteredJobs.length})
                </h2>
            </div>

            {/* Show message if no jobs match */}
            {loading ? (
                <div className="flex justify-center items-center py-8">
                    <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : filteredJobs.length === 0 ? (
                <div className="text-center text-gray-500">
                    No jobs found matching your criteria
                </div>
            ) : (
                // Show matching job cards in a grid layout
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <JobCard
                            key={job._id}
                            job={job}
                        // actions={
                        //     <Button variant="secondary" size="ssm">
                        //         Apply now
                        //     </Button>
                        // }
                        />
                    ))}
                </div>
            )}
        </Container>
    );
};

export default ShowJobs;

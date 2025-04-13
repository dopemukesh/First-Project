import { useMemo } from 'react';

export const useJobFilter = (jobs, searchCriteria) => {
    const { skill, experience, location } = searchCriteria;

    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const matchesSkill = !skill ||
                job.title.toLowerCase().includes(skill.toLowerCase()) ||
                job.skills?.some(s => s.toLowerCase().includes(skill.toLowerCase()));

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
    }, [jobs, skill, experience, location]);

    return filteredJobs;
};
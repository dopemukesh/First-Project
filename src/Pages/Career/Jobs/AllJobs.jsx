import { useEffect, useState } from "react";
import FetchAPI from "../../../api/fetchAPI/FetchAPI2";
import JobCard from "./JobCard2";
import Container from "../../../Components/Common/Container/Container";
import useResource from "../../../hooks/useResource";

const AllJobsFetcher = () => {

    // For jobs
    const { data: jobs, loading, error } = useResource("jobs");

    // const [jobs, setJobs] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchAllJobs = async () => {
    //         try {
    //             const data = await FetchAPI("v1/jobs/all", { method: "GET" });
    //             if (!data) throw new Error("Failed to fetch jobs");
    //             setJobs(data.jobs);
    //         } catch (err) {
    //             console.error("Error fetching jobs:", err);
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchAllJobs();
    // }, []);

    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container className="py-14 px-4">
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">All Jobs</h2>

                {jobs.length === 0 ? (
                    <p>No jobs found.</p>
                ) : (
                    <ul className="space-y-2">
                        {jobs.map((job) => (
                            <li key={job._id} className="border p-2 rounded shadow">
                                <strong>{job.jobTitle}</strong> at {job.companyName} —{" "}
                                {job.jobType}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">With JobCard2</h2>
                    {jobs.length === 0 ? (
                        <p>No jobs to display in JobCard.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {jobs.map((job) => (
                                <JobCard
                                    key={job._id}
                                    job={job}
                                    bgColors="bg-gradient-to-tl from-white/5 via-transparent via-40% to-teal-200/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 rounded-xl"
                                    onBookmark={() => console.log("Bookmark clicked")}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default AllJobsFetcher;

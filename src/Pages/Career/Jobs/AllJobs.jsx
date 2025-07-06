import JobCard from "./JobCard2";
import Container from "../../../Components/Common/Container/Container";
import useResource from "../../../hooks/useResource";
import Pagination from "../../../Components/Common/Pagination/Pagination";

const AllJobs = () => {

    // For jobs
    const { data: jobs, loading, error } = useResource("jobs");

    return (
        <Container className="py-14 px-4">
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">All Jobs</h2>
                <div className="mt-6">
                    {loading ? (
                        <div className="flex justify-center items-center py-8">
                            <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : jobs.length === 0 ? (
                        <p>No jobs to display in JobCard.</p>
                    ) : (
                        <Pagination
                            data={jobs}
                            showPerPage={6}
                            render={(paginatedJobs) => (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {paginatedJobs.map((job) => (
                                        <JobCard key={job._id} job={job} />
                                    ))}
                                </div>
                            )}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default AllJobs;

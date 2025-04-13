/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import jobs from "../../../api/Jobs.json";
import Dropdown from "../PostJob/Dropdown";
import { sortJobs } from "./Sorting";
import { useBookmarks } from "./Bookmarking";
import Container from "../../../Components/Common/Container/Container";
import JobCard from "../../../Components/JobCard/JobCard";

const RecommendedJobs = () => {
  const { jobs: jobsList, handleBookmark } = useBookmarks(jobs);
  
  const bgColors =
  "bg-gradient-to-tl from-teal-500/20 via-transparent via-30% to-white/20 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-3xl"; // Background color for the job cards

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "popular", label: "Most Popular" },
    { value: "salary", label: "Highest Salary" },
  ];
  const [sort, setSort] = useState(sortOptions[0].label); // Initialize with "Most Recent"
  const sortedJobs = sortJobs(jobsList, sort);

  
  return (
    <Container className="py-14 px-4">
      {/* <div className="w-full mx-auto"> */}
        <div className="mb-10 gap-4">
          <h2 className="text-xl md:text-3xl font-semibold max-w-3xl">
            Recommended Jobs
          </h2>
          <div className="flex items-center justify-between cursor-default select-none mt-2 px-2 w-fit rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <p className="whitespace-nowrap">Sort by : &nbsp;</p>
              <Dropdown
                options={sortOptions.map((opt) => opt.label)} // string array
                placeholder={sortOptions[0].label}
                selected={sort}
                onSelect={setSort}
                className="w-40"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedJobs.map((job, index) => (
          <JobCard
            key={job.id}
            job={job}
            bgColors={bgColors}
            onBookmark={() => handleBookmark(job.id)}
          />
        ))}
        </div>
      {/* </div> */}
    </Container>
  );
};

export default RecommendedJobs;

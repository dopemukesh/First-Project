/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import jobs from "../../../api/Jobs.json";
import Dropdown from "../PostJob/Dropdown";
import { sortJobs } from "./Sorting";
import { useBookmarks } from "./Bookmarking";
import Container from "../../../Components/Common/Container/Container";
import JobCard from "../../../Components/JobCard/JobCard";
import { Button } from "../../../Components/Common/Button/Button";

const RecommendedJobs = () => {
  // Custom hook to manage job list and bookmarking functionality
  const { jobs: jobsList, handleBookmark } = useBookmarks(jobs);

  // Background gradient style for each job card
  const bgColors =
    "bg-gradient-to-tl from-teal-500/20 via-transparent via-30% to-white/20 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-3xl";

  // Dropdown sorting options
  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "popular", label: "Most Popular" },
    { value: "salary", label: "Highest Salary" },
  ];

  // State to track selected sort option (default is "Most Recent")
  const [sort, setSort] = useState(sortOptions[0].label);

  // Apply sorting to jobs list based on selected option
  const sortedJobs = sortJobs(jobsList, sort);

  return (
    <Container className="py-14 px-4">
      {/* Header and Sort Dropdown */}
      <div className="mb-10 gap-4">
        <h2 className="text-xl md:text-3xl font-semibold max-w-3xl">
          Recommended Jobs
        </h2>

        {/* Sort Dropdown */}
        <div className="flex items-center justify-between cursor-default select-none mt-2 px-2 w-fit rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <p className="whitespace-nowrap">Sort by : &nbsp;</p>
            <Dropdown
              options={sortOptions.map((opt) => opt.label)} // Convert to string array
              placeholder={sortOptions[0].label}
              selected={sort}
              onSelect={setSort}
              className="w-40"
            />
          </div>
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            bgColors={bgColors}
            onBookmark={() => handleBookmark(job.id)} // Toggle bookmark
          />
          
        ))}
       
      </div>
    </Container>
  );
};

export default RecommendedJobs;

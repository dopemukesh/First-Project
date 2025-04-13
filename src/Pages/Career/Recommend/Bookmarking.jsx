import { useState, useEffect } from "react";

// Toggle bookmark status
export const toggleBookmark = (jobs, jobId) => {
  const updatedJobs = jobs.map((job) =>
    job.id === jobId ? { ...job, bookMarked: !job.bookMarked } : job
  );

  // Save to localStorage
  localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedJobs));
  return updatedJobs;
};

// Custom hook to manage bookmarked jobs
export const useBookmarks = (initialJobs) => {
  const [jobs, setJobs] = useState(initialJobs);

  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    const savedJobs = localStorage.getItem("bookmarkedJobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleBookmark = (jobId) => {
    setJobs((prevJobs) => toggleBookmark(prevJobs, jobId));
  };

  return { jobs, handleBookmark };
};

export const sortJobs = (jobs, sortBy) => {
  if (!sortBy) return jobs;

  const sortedJobs = [...jobs];

  switch (sortBy) {
    case "Most Recent":
      return sortedJobs.sort((a, b) => new Date(b.date) - new Date(a.date));

    case "Most Popular":
      // Assuming we have a views or popularity field, using bookMarked for now
      return sortedJobs.sort(
        (a, b) => (b.bookMarked ? 1 : 0) - (a.bookMarked ? 1 : 0)
      );

    case "Highest Salary":
      return sortedJobs.sort((a, b) => {
        // Remove any non-numeric characters (like commas, currency symbols, spaces)
        const salaryA = parseInt(a.salary.toString().replace(/[^0-9]/g, ""));
        const salaryB = parseInt(b.salary.toString().replace(/[^0-9]/g, ""));
        return salaryB - salaryA;
      });

    default:
      return sortedJobs;
  }
};

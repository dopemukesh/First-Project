import React from 'react';

const RatingsOverview = ({ averageRating, count }) => (
  <div className="flex items-center gap-4">
    <div className="text-5xl font-bold text-teal-600 dark:text-teal-500">{averageRating}</div>
    <div>
      <div className="flex gap-1 text-yellow-400 mb-1 text-xl">
        {'★'.repeat(Math.floor(averageRating))}
        {'☆'.repeat(5 - Math.floor(averageRating))}
      </div>
      <p className="text-gray-700 dark:text-gray-500">{count} Course Ratings</p>
    </div>
  </div>
);

export default RatingsOverview;

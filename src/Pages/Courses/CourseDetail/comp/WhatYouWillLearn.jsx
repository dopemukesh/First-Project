import React from "react";

// Section showing list of points about what will be learned
const WhatYouWillLearn = ({ points }) => {
  return (
    <section className="bg-white dark:bg-gray-900 border dark:border-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {points?.map((point, idx) => (
          <div key={idx} className="flex gap-3">
            <span className="text-teal-600 dark:text-teal-500">✓</span>
            <p className="text-gray-600 dark:text-gray-400">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouWillLearn;

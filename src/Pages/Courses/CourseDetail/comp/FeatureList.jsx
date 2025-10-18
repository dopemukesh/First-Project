import React from "react";

// Generic feature list with checkmarks, accepts title and array of features
const FeatureList = ({ title, features }) => {
  return (
    <section>
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {features?.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-teal-600 dark:text-teal-500">✓</span>
            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureList;

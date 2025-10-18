import React from "react";

// Displays a list of related topic tags
const RelatedTopics = ({ topics }) => {
  return (
    <section>
      <h3 className="text-xl font-medium mb-4">Explore related topics</h3>
      <div className="flex flex-wrap gap-2">
        {topics?.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full text-xs"
          >
            {tag.trim()}
          </span>
        ))}
      </div>
    </section>
  );
};

export default RelatedTopics;

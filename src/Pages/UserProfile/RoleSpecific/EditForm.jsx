import React, { useState } from "react";

const EditForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data:", formData);
    // You can now save this data to localStorage or send to an API
  };

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add a Project</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter project title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Brief description of your project"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        {/* Project URL */}
        <div>
          <label htmlFor="url" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Project URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            placeholder="https://example.com"
            value={formData.url}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
        >
          Save Project
        </button>
      </form>
    </div>
  );
};

export default EditForm;

import React from "react";

// Instructor information card with name, specialization, rating, students, and courses count
const InstructorInfo = ({ instructor, teacherName, teacherSpecialization, teacherRating, averageRating }) => {
  return (
    <section>
      <h3 className="text-xl font-medium mb-4">Instructor</h3>
      <div className="flex gap-4 p-2 rounded-xl max-w-sm">
        {/* Placeholder for instructor photo */}
        <div className="min-w-24 h-24 bg-gray-700 rounded-full"></div>

        <div>
          <h4 className="text-lg font-semibold">{teacherName}</h4>
          <p className="text-gray-600 dark:text-gray-400">{teacherSpecialization}</p>

          {/* Instructor stats */}
          <div className="flex flex-wrap gap-4 mt-2 text-sm">
            <span className="text-gray-500 border dark:border-gray-900 rounded-md px-1.5 py-0.5">
              ⭐ {teacherRating || averageRating}
            </span>
            <span className="text-gray-500 border dark:border-gray-900 rounded-md px-1.5 py-0.5">
              👥 {instructor?.students || 0}
            </span>
            <span className="text-gray-500 border dark:border-gray-900 rounded-md px-1.5 py-0.5">
              📚 {instructor?.courses || 0}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorInfo;

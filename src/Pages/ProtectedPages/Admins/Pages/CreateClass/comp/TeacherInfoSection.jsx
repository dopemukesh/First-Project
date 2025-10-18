// components/TeacherInfoSection.jsx
import React from "react";

const TeacherInfoSection = ({ formData, handleChange, inputClass, labelText, sectionClass, languageOptions }) => {
  return (
    <div className={sectionClass}>
      <h2 className="text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Teacher Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="teacherName" className={labelText}>
            Teacher Name <span className="text-red-500">*</span>
          </label>
          <input
            id="teacherName"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. Mukesh Yadav"
            required
          />
        </div>

        <div>
          <label htmlFor="teacherSpecialization" className={labelText}>
            Specialization <span className="text-red-500">*</span>
          </label>
          <input
            id="teacherSpecialization"
            name="teacherSpecialization"
            value={formData.teacherSpecialization}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. Frontend Developer"
            required
          />
        </div>

        <div>
          <label htmlFor="teacherRating" className={labelText}>
            Teacher Rating (0-5)
          </label>
          <input
            type="number"
            id="teacherRating"
            name="teacherRating"
            value={formData.teacherRating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="language" className={labelText}>
            Language *
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className={inputClass}
            required
          >
            {languageOptions.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfoSection;

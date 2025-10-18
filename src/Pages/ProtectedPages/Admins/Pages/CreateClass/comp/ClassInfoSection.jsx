// components/ClassInfoSection.jsx
import React from "react";
import ChipInput from "./ChipInput";
import Categories from "../../../../../../api/Categories.json";

const ClassInfoSection = ({
  formData,
  handleChange,
  addArrayItem,
  removeArrayItem,
  inputClass,
  labelText,
  sectionClass,
}) => {
  return (
    <div className={sectionClass}>
      <h2 className="text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Class Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Class Name */}
        <div>
          <label htmlFor="className" className={labelText}>
            Class Name <span className="text-red-500">*</span>
          </label>
          <input
            id="className"
            name="className"
            value={formData.className || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter class name"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className={labelText}>
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {Categories.map((cat) => (
              <option
                key={cat.value}
                value={cat.value}
                className="dark:bg-gray-900"
              >
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <div>
          <label htmlFor="shortDescription" className={labelText}>
            Short Description
          </label>
          <input
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter a short description"
          />
        </div>

        {/* Long Description */}
        <div className="md:col-span-2">
          <label htmlFor="longDescription" className={labelText}>
            Long Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="longDescription"
            name="longDescription"
            value={formData.longDescription || ""}
            onChange={handleChange}
            rows="4"
            className={inputClass}
            placeholder="Enter a long description"
            required
          />
        </div>

        {/* WhatsApp Community Link */}
        <div>
          <label htmlFor="WhatsAppCommunityLink" className={labelText}>
            WhatsApp Community Link
          </label>
          <input
            id="WhatsAppCommunityLink"
            name="WhatsAppCommunityLink"
            value={formData.WhatsAppCommunityLink || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="https://chat.whatsapp.com/..."
          />
        </div>

        {/* Chip Inputs */}
        <ChipInput
          label="What You Will Learn"
          arrayName="whatYouWillLearn"
          values={formData.whatYouWillLearn || []}
          onAdd={addArrayItem}
          onRemove={removeArrayItem}
          inputClass={inputClass}
          placeholder="Enter what will be learned"
          required
        />

        <ChipInput
          label="This Course Includes"
          arrayName="thisCourseIncludes"
          values={formData.thisCourseIncludes || []}
          onAdd={addArrayItem}
          onRemove={removeArrayItem}
          inputClass={inputClass}
          placeholder="Enter course inclusions"
          required
        />

        <ChipInput
          label="Course Features"
          arrayName="courseIncludes"
          values={formData.courseIncludes || []}
          onAdd={addArrayItem}
          onRemove={removeArrayItem}
          inputClass={inputClass}
          placeholder="Enter course feature"
          required
        />

        <ChipInput
          label="Related Topics"
          arrayName="relatedTopics"
          values={formData.relatedTopics || []}
          onAdd={addArrayItem}
          onRemove={removeArrayItem}
          inputClass={inputClass}
          placeholder="Enter related topic"
        />
      </div>
    </div>
  );
};

export default ClassInfoSection;

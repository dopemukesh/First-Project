// components/PricingInfoSection.jsx
import React from "react";

const PricingInfoSection = ({ formData, handleChange, inputClass, labelText, sectionClass }) => {
  return (
    <div className={sectionClass}>
      <h2 className="text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="originalPrice" className={labelText}>
            Original Price (₹) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="originalPrice"
            name="originalPrice"
            value={formData.originalPrice}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter original price"
            required
          />
        </div>

        <div>
          <label htmlFor="discountedPrice" className={labelText}>
            Discounted Price (₹) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="discountedPrice"
            name="discountedPrice"
            value={formData.discountedPrice}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter selling price"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PricingInfoSection;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../Components/Common/Button/Button";
import Dropdown from "../../Career/PostJob/Dropdown";
import DeveloperDataFields from "./DeveloperDataFields";

const FormDataFields = ({
  formData,
  errors,
  isLoading,
  inputClass,
  labelTexts,
  roles,
  handleChange,
  handleSubmit,
  setFormData,
}) => {
  const position = ["Available", "Not Available"];

  return (
    <>
      {/* ✅ FORM: Sign-up input fields */}
      <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
        {/* 🔴 Error display for general form submission errors */}
        {errors.general && (
          <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg">
            {errors.general}
          </div>
        )}

        {/* 🔡 Full Name Field */}
        <div>
          <label className={labelTexts}>Full Name</label>
          <input
            type="text"
            name="fullName"
            className={`${inputClass} ${
              errors?.fullName ? "ring-1 ring-red-500" : ""
            }`}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* ☎️ Phone Number Field */}
        <div>
          <label className={labelTexts}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={`${inputClass} ${
              errors?.phone ? "ring-1 ring-red-500" : ""
            }`}
            placeholder="Enter your phone number"
            value={formData.phone}
            maxLength={10}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* bio */}
        <div>
          <label className={labelTexts}>Bio</label>
          <textarea
            name="bio"
            className={inputClass}
            placeholder="Enter your bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        {/* 👥 Role Selection via Dropdown */}
        <div>
          <label className={labelTexts}>Select Role</label>
          <Dropdown
            className={inputClass}
            options={roles}
            name="role"
            placeholder="Select a role"
            defaultSelected={formData.role}
            onSelect={(selectedRole) =>
              setFormData({ ...formData, role: selectedRole })
            }
          />
        </div>

        {/* 🔁 Conditional Fields: Show only when role is 'Developer' */}
        {formData.role.toLowerCase() === "developer" && (
          <>
            {/* 💼 Developer Experience Field */}
            <DeveloperDataFields
              handleChange={handleChange}
              labelClass={labelTexts}
              inputClass={inputClass}
              formData={formData}
              setFormData={setFormData}
            />
          </>
        )}

        {formData.role.toLowerCase() === "recruiter" && (
          <>
            {/* 🏢 Company Name Field for Recruiters */}
            {/* 👥 Role Selection via Dropdown */}
            <div>
              <label className={labelTexts}>Openings</label>
              <Dropdown
                className={inputClass}
                options={position}
                name="openings"
                placeholder="Select"
                defaultSelected={formData.position}
                onSelect={(selectedPosition) =>
                  setFormData({ ...formData, openings: selectedPosition })
                }
              />
            </div>

            {/* 💼 Recruiter company website */}
            <div>
              <label className={labelTexts}>Company Website</label>
              <input
                type="text"
                name="companyWebsite"
                className={inputClass}
                placeholder="e.g., https://example.com"
                value={formData.companyWebsite}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default FormDataFields;

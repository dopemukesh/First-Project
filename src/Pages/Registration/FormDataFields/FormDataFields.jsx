/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '../../../Components/Common/Button/Button';
import Dropdown from '../../Career/PostJob/Dropdown';

const FormDataFields = ({
  formData,
  errors,
  isLoading,
  inputClass,
  labelTexts,
  roles,
  handleChange,
  handleSubmit,
  setFormData
}) => {
  return (
    <>
      {/* ✅ FORM: Sign-up input fields */}
      <form onSubmit={handleSubmit} autoComplete="off" className="p-4 space-y-6">

        {/* 🔴 Error display for general form submission errors */}
        {errors.general && (
          <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg">
            {errors.general}
          </div>
        )}

        {/* 🔡 Full Name Field */}
        <div>
          <label htmlFor="fullName" className={labelTexts}>Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            className={inputClass}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
        </div>

        {/* 📧 Email Field */}
        <div>
          <label htmlFor="email" className={labelTexts}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={inputClass}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* 🔒 Password Field */}
        <div>
          <label htmlFor="password" className={labelTexts}>Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={inputClass}
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
        </div>

        {/* ☎️ Phone Number Field */}
        <div>
          <label htmlFor="phone" className={labelTexts}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className={inputClass}
            placeholder="Enter your phone number"
            value={formData.phone}
            maxLength={10}
            onChange={handleChange}
          />
          {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
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
        {formData.role.toLowerCase() === 'developer' && (
          <>
            {/* 💼 Developer Experience Field */}
            <div>
              <label htmlFor="experience" className={labelTexts}>Experience</label>
              <input
                id="experience"
                type="text"
                name="experience"
                className={inputClass}
                placeholder="e.g., 0-1 years"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>

            {/* 💡 Developer Interest Field */}
            <div>
              <label htmlFor="fieldOfInterest" className={labelTexts}>Field of Interest</label>
              <input
                id="fieldOfInterest"
                type="text"
                name="fieldOfInterest"
                className={inputClass}
                placeholder="e.g., Web Development"
                value={formData.fieldOfInterest}
                onChange={handleChange}
              />
            </div>

            {/* 🔗 LinkedIn URL Field */}
            <div>
              <label htmlFor="linkedin" className={labelTexts}>LinkedIn Profile</label>
              <input
                id="linkedin"
                type="url"
                name="linkedin"
                className={inputClass}
                placeholder="Your LinkedIn profile URL"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            {/* 🔗 GitHub URL Field */}
            <div>
              <label htmlFor="github" className={labelTexts}>GitHub Profile</label>
              <input
                id="github"
                type="url"
                name="github"
                className={inputClass}
                placeholder="Your GitHub profile URL"
                value={formData.github}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {/* ✅ Footer: Redirect & Submit */}
        <div className="flex items-center justify-between pt-4">
          {/* 🔁 Redirect to login if already registered */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-teal-600 dark:text-teal-500 hover:underline"
            >
              Sign in
            </NavLink>
          </p>

          {/* ⏳ Button: Register */}
          <Button
            variant="secondary"
            type="submit"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register Now"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormDataFields;

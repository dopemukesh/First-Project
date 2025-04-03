/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React, { useState } from "react";
import Container from "../../../Components/Common/Container/Container";
import Dropdown from "./Dropdown";
import Calendar from "../../../Components/Common/Calendar/Calendar";
import { Button } from "../../../Components/Common/Button/Button";
import SkillsInput from "./SkillsInput";

const JobPosting = () => {
  // Currency options with country flags
  const currencyOptions = [
    { code: "INR", symbol: "₹", flag: "https://flagcdn.com/w40/in.png" },
    { code: "USD", symbol: "$", flag: "https://flagcdn.com/w40/us.png" },
    { code: "EUR", symbol: "€", flag: "https://flagcdn.com/w40/eu.png" },
  ];

  const category = ["Development", "Design", "Marketing"];
  const jobTypes = [
    "Full Time",
    "Part Time",
    "Internship",
    "Design",
    "Marketing",
  ];

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const [skills, setSkills] = useState([]);

  const handleSkillsChange = (updatedSkills) => {
    setSkills(updatedSkills);
  };

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className="max-w-3xl rounded-2xl overflow-hidden w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
          {/* Header */}
          <div className="border-b border-gray-300 px-4 py-6 dark:border-gray-600">
            <h2 className="text-lg font-semibold">Job Details</h2>
            <p className="text-sm text-gray-500">
              Here you can add job details
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col md:grid md:grid-cols-2 p-4 gap-6">
            <div className="col-span-2">
              <label className="block mb-1.5 font-semibold">Job title</label>
              <input
                type="text"
                placeholder="e.g. Frontend Developer, Backend Developer"
                className={inputClass}
              />
            </div>

            <div className="categories w-full">
              <label className="block mb-1.5 font-semibold">Category</label>
              <Dropdown options={category} placeholder="Select a category" />
            </div>

            <div className="jobTypes w-full">
              <label className="block mb-1.5 font-semibold">Job type</label>
              <Dropdown options={jobTypes} placeholder="Select a type" />
            </div>

            <div className="w-full">
              <label className="block mb-1.5 font-semibold">
                Recruitment quota
              </label>
              <input
                type="text"
                placeholder="e.g. 100, 200, 300"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-1.5 font-semibold">
                Recruitment period
              </label>
              <Calendar />
            </div>

            <div>
              <label className="block mb-1.5 font-semibold">
                Expected Salary
              </label>
              <div className="flex w-full space-x-2 items-center">
                <Dropdown
                  options={currencyOptions}
                  placeholder="Currency"
                  defaultSelected={currencyOptions[0]}
                />
                <input
                  type="text"
                  placeholder="Enter amount"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block mb-1.5 font-semibold">
                Experience in Years
              </label>
              <input
                type="text"
                placeholder="Enter Experience"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-1.5 font-semibold">Location</label>
              <input
                type="text"
                placeholder="e.g. Remote, On-Site, Hybrid, City Name "
                className={inputClass}
              />
            </div>

            {/* Skill Sets */}
            <div>
              <SkillsInput onSkillsChange={handleSkillsChange} />
            </div>

            {/* Job Description */}
            <div className="col-span-2">
              <label className="block mb-1.5 font-semibold">
                Job Description
              </label>
              <textarea
                placeholder="Description (minimum 50 words)"
                className="w-full h-28 px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between col-span-2">
              <div className="h-10 flex items-center justify-end">
                <a
                  href="#"
                  className="text-sm text-teal-600 dark:text-teal-500"
                >
                  Need help ?
                </a>
              </div>

              <div className="flex items-center gap-2 justify-between">
                <Button variant="outline" size="sm">
                  Save as Draft
                </Button>
                <Button variant="secondary" size="sm">
                  Post Vacancy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobPosting;

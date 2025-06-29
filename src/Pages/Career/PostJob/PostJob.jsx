/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React, { useRef, useState } from "react";
import Container from "../../../Components/Common/Container/Container";
import Dropdown from "./Dropdown";
import Calendar from "../../../Components/Common/Calendar/Calendar";
import { Button } from "../../../Components/Common/Button/Button";
import SkillsInput from "./SkillsInput";

const JobPosting = () => {
  const [experienceType, setExperienceType] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const experienceInputRef = useRef(null); // Ref for the input box

  const handleExperienceBlur = () => {
    const value = experienceYears.toString().trim();
    if (!value || value === "0") {
      setExperienceType("Fresher/No Experience");
      setExperienceYears("");
    }
  };

  const experience = ["Fresher/No Experience", "Experienced"];

  // Currency options with country flags
  const currencyOptions = [
    { code: "INR", symbol: "₹", flag: "https://flagcdn.com/w40/in.png" },
    { code: "USD", symbol: "$", flag: "https://flagcdn.com/w40/us.png" },
    { code: "EUR", symbol: "€", flag: "https://flagcdn.com/w40/eu.png" },
  ];

  // const jobCategories = ["Development", "Design", "Marketing", "Sales", "HR"];
  const jobTypes = [
    "Full Time",
    "Part Time",
    "Remote",
    "Hybrid",
    "On-Site",
    "Internship",
  ];

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";

  const dropdownInput =
    "w-full border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500";

  const [skills, setSkills] = useState([]);

  const handleSkillsChange = (updatedSkills) => {
    setSkills(updatedSkills);
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-3xl overflow-hidden w-full ${bgGrads}`}>
          {/* Header */}
          <div className="border-b border-gray-300 px-4 py-6 dark:border-gray-800 bg-gradient-to-tl from-teal-500/5 via-transparent to-teal-500/5 backdrop-blur rounded-t-2xl">
            <h2 className="font-semibold">Job Description</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Find best fit for your requirement
            </p>
          </div>

          {/* Form Fields */}
          <form action="" onSubmit={handleJobSubmit}>
            <div className="flex flex-col md:grid md:grid-cols-2 p-4 pt-6 gap-6">
              <div className="col-span-2">
                <label className={`${labelTexts}`}>Job title</label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Developer, Backend Developer"
                  className={inputClass}
                  name="title"
                />
              </div>

              {/* <div className="categories w-full">
              <label className={`${labelTexts}`}>Category</label>
              <Dropdown options={category} placeholder="Select a category" />
            </div> */}

              <div className="jobTypes w-full">
                <label className={`${labelTexts}`}>Job type</label>
                <div className={`${dropdownInput}`}>
                  <Dropdown options={jobTypes} placeholder="Select a type" />
                </div>
              </div>

              <div className="w-full">
                <label className={`${labelTexts}`}>Recruitment quota</label>
                <input
                  type="text"
                  placeholder="e.g. 100, 200, 300"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={`${labelTexts}`}>Recruitment period</label>
                <Calendar />
              </div>

              <div>
                <label className={`${labelTexts}`}>
                  Expected Salary Per Month
                </label>
                <div className="flex w-full space-x-2 items-center">
                  <div className={`${dropdownInput}`}>
                    <Dropdown
                      options={currencyOptions}
                      placeholder="Currency"
                      defaultSelected={currencyOptions[0]}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={`${labelTexts}`}>Experience in Years</label>
                <div className={`${dropdownInput}`}>
                  <Dropdown
                    options={experience}
                    placeholder="Select a type"
                    defaultSelected={experienceType}
                    selected={experienceType} // Use controlled selection
                    onSelect={(selectedOption) => {
                      setExperienceType(selectedOption);
                      if (selectedOption === "Experienced") {
                        setTimeout(
                          () => experienceInputRef.current?.focus(),
                          0
                        );
                      } else {
                        setExperienceYears("");
                      }
                    }}
                  />
                </div>
                {experienceType === "Experienced" && (
                  <input
                    ref={experienceInputRef}
                    type="number"
                    min="0"
                    placeholder="Enter years of experience"
                    className={`${inputClass} mt-2`}
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    onBlur={handleExperienceBlur}
                  />
                )}
              </div>

              <div>
                <label className={`${labelTexts}`}>Location</label>
                <input
                  type="text"
                  placeholder="e.g. Remote, On-Site, Hybrid, City Name "
                  className={inputClass}
                />
              </div>

              {/* Skill Sets */}
              <div>
                <label className={`${labelTexts}`}>Skills</label>
                <SkillsInput onSkillsChange={handleSkillsChange} />
              </div>

              {/* Job Description */}
              <div className="col-span-2">
                <label className={`${labelTexts}`}>Job Description</label>
                <textarea
                  placeholder="Description (minimum 50 words)"
                  className="w-full h-28 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none"
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
          </form>
        </div>
      </div>
    </Container>
  );
};

export default JobPosting;

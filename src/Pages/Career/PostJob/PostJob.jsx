/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React, { useRef, useState } from "react";
import Container from "../../../Components/Common/Container/Container";
import Dropdown from "./Dropdown";
import Calendar from "../../../Components/Common/Calendar/Calendar";
import { Button } from "../../../Components/Common/Button/Button";
import SkillsInput from "./SkillsInput";
import FetchAPI from "../../../api/fetchAPI/FetchAPI2";

const JobPosting = () => {
  const experienceInputRef = useRef(null);

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    location: "",
    jobDescription: "",
    skills: [],
    recruitmentQuota: "",
    recruitmentPeriod: "",
    salaryCurrency: "INR",
    salaryAmount: "",
    experienceType: "",
    experienceYears: "",
    companyName: "",
    companyDescription: "",
    companySite: "",
    applyLink: "",
    userQualification: "",
    jobDeadline: "",
    keywords: "",
  });

  const experienceOptions = ["Fresher/No Experience", "Experienced"];

  const currencyOptions = [
    { code: "INR", symbol: "₹", flag: "https://flagcdn.com/w40/in.png" },
    // { code: "USD", symbol: "$", flag: "https://flagcdn.com/w40/us.png" },
    // { code: "EUR", symbol: "€", flag: "https://flagcdn.com/w40/eu.png" },
  ];

  const jobTypes = [
    "Full-Time",
    "Part-time",
    "Internship",
    "Contract",
    "Remote",
  ];

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";
  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";
  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";
  const dropdownInput =
    "w-full border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500";

  // input value changes ke liye
  const handleChange = (field) => (e) => {
    const value = e?.target?.value ?? e;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // direct value lene ke liye calendar se
  const handleDateChange = (field) => (dateValue) => {
  setFormData((prev) => ({ ...prev, [field]: dateValue }));
};


  const handleSkillsChange = (skills) => {
    setFormData((prev) => ({ ...prev, skills }));
  };

  const handleSubmit = async () => {
    const {
      jobTitle,
      jobType,
      location,
      jobDescription,
      skills,
      recruitmentQuota,
      recruitmentPeriod,
      salaryAmount,
      // salaryCurrency,
      // experienceType,
      experienceYears,
      companyName,
      companyDescription,
      companySite,
      applyLink,
      userQualification,
      jobDeadline,
      keywords,
    } = formData;

    if (
      !jobTitle ||
      !jobType ||
      !jobDescription ||
      !location ||
      skills.length === 0
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const payload = {
      jobTitle: jobTitle,
      jobType,
      location,
      skills: skills,
      jobDescription: jobDescription,
      recruitmentPeriod: recruitmentPeriod,
      recruitmentQuota: Number(recruitmentQuota),
      salaryPerMonth: Number(salaryAmount),
      experienceInYears: Number(experienceYears),
      companyName: companyName,
      companyDescription: companyDescription,
      companySite: companySite,
      applyLink: applyLink,
      userQualification: userQualification
        .split(",")
        .map((q) => q.trim())
        .filter(Boolean),
      jobDeadline: jobDeadline,
      keywords: keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean),
    };

    try {
      const response = await FetchAPI("v1/jobs/create", {
        method: "post",
        payload,
      });

      if (response.success) {
        alert("Job posted successfully!");
        resetForm();
      } else {
        alert("Error: " + response.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while posting the job.");
    }
  };

  const resetForm = () => {
    setFormData({
      jobTitle: "",
      jobType: "",
      location: "",
      jobDescription: "",
      skills: [],
      recruitmentQuota: "",
      recruitmentPeriod: "",
      // salaryCurrency: "INR",
      salaryAmount: "",
      experienceType: "",
      experienceYears: "",
      companyName: "",
      companyDescription: "",
      companySite: "",
      applyLink: "",
      userQualification: "",
      jobDeadline: "",
      keywords: "",
    });
  };

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-3xl overflow-hidden w-full ${bgGrads}`}>
          <div className="border-b border-gray-300 px-4 py-6 dark:border-gray-800 bg-gradient-to-tl from-teal-500/5 via-transparent to-teal-500/5 backdrop-blur rounded-t-2xl">
            <h2 className="font-semibold">Job Description</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Find best fit for your requirement
            </p>
          </div>

          <form className="flex flex-col md:grid md:grid-cols-2 p-4 pt-6 gap-6">
            {/* Job Title */}
            <div className="col-span-2">
              <label className={labelTexts}>Job title</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Frontend Developer"
                value={formData.jobTitle}
                onChange={handleChange("jobTitle")}
              />
            </div>

            {/* Job Type */}
            <div>
              <label className={labelTexts}>Job type</label>
              <div className={dropdownInput}>
                <Dropdown
                  options={jobTypes}
                  placeholder="Select a type"
                  selected={formData.jobType}
                  onSelect={handleChange("jobType")}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className={labelTexts}>Location</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Bangalore"
                value={formData.location}
                onChange={handleChange("location")}
              />
            </div>

            {/* Company Name */}
            <div>
              <label className={labelTexts}>Company Name</label>
              <input
                type="text"
                className={inputClass}
                value={formData.companyName}
                onChange={handleChange("companyName")}
              />
            </div>

            {/* Company Website */}
            <div>
              <label className={labelTexts}>Company Website</label>
              <input
                type="url"
                className={inputClass}
                value={formData.companySite}
                onChange={handleChange("companySite")}
              />
            </div>

            {/* Company Description */}
            <div className="col-span-2">
              <label className={labelTexts}>Company Description</label>
              <textarea
                className={inputClass}
                value={formData.companyDescription}
                onChange={handleChange("companyDescription")}
              />
            </div>

            {/* Apply Link */}
            <div className="col-span-2">
              <label className={labelTexts}>Apply Link</label>
              <input
                type="url"
                className={inputClass}
                value={formData.applyLink}
                onChange={handleChange("applyLink")}
              />
            </div>

            {/* User Qualification */}
            <div className="col-span-2">
              <label className={labelTexts}>Qualifications (comma-separated)</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. B.Tech, MCA"
                value={formData.userQualification}
                onChange={handleChange("userQualification")}
              />
            </div>

            {/* Recruitment Quota */}
            <div>
              <label className={labelTexts}>Recruitment Quota</label>
              <input
                type="number"
                className={inputClass}
                value={formData.recruitmentQuota}
                onChange={handleChange("recruitmentQuota")}
              />
            </div>

            {/* Recruitment Period */}
            <div>
              <label className={labelTexts}>Recruitment Period</label>
              <Calendar onSelect={handleDateChange("recruitmentPeriod")} />
            </div>

            {/* Job Deadline */}
            <div>
              <label className={labelTexts}>Job Deadline</label>
              <Calendar onSelect={handleDateChange("jobDeadline")} />
            </div>

            {/* Salary */}
            <div>
              <label className={labelTexts}>Salary per month</label>
              <div className="flex gap-2">
                <div className={dropdownInput}>
                  <Dropdown
                    options={currencyOptions}
                    selected={formData.salaryCurrency}
                    onSelect={(val) => setFormData((prev) => ({ ...prev, salaryCurrency: val.code }))}
                  />
                </div>
                <input
                  type="number"
                  className={inputClass}
                  value={formData.salaryAmount}
                  onChange={handleChange("salaryAmount")}
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className={labelTexts}>Experience</label>
              <div className={dropdownInput}>
                <Dropdown
                  options={experienceOptions}
                  selected={formData.experienceType}
                  onSelect={(val) => {
                    handleChange("experienceType")(val);
                    if (val === "Experienced") {
                      setTimeout(() => experienceInputRef.current?.focus(), 0);
                    } else {
                      setFormData((prev) => ({
                        ...prev,
                        experienceYears: "0",
                      }));
                    }
                  }}
                />
              </div>
              {formData.experienceType === "Experienced" && (
                <input
                  ref={experienceInputRef}
                  type="number"
                  className={`${inputClass} mt-2`}
                  value={formData.experienceYears}
                  onChange={handleChange("experienceYears")}
                />
              )}
            </div>

            {/* Skills */}
            <div className="col-span-2">
              <label className={labelTexts}>Skills</label>
              <SkillsInput onSkillsChange={handleSkillsChange} />
            </div>

            {/* Job Description */}
            <div className="col-span-2">
              <label className={labelTexts}>Job Description</label>
              <textarea
                className="w-full h-28 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none"
                value={formData.jobDescription}
                onChange={handleChange("jobDescription")}
              ></textarea>
            </div>

            {/* keywords related to job */}
            <div className="col-span-2">
              <label className={labelTexts}>Keywords (comma-separated)</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. react, node, frontend"
                value={formData.keywords}
                onChange={handleChange("keywords")}
              />
            </div>


            {/* Buttons */}
            <div className="flex justify-between col-span-2">
              <a
                href="#"
                className="text-sm text-teal-600 dark:text-teal-500"
              >
                Need help?
              </a>
              <div className="flex gap-2">
                <Button to={-1} variant="outline2" size="sm">
                  Cancel
                </Button>
                <Button variant="secondary" size="sm" onClick={handleSubmit}>
                  Post Vacancy
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default JobPosting;

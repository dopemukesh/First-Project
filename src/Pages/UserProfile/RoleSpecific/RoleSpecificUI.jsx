// RoleSpecificUI.jsx
import React from "react";
import { MdEdit, MdLink, MdAdd } from "react-icons/md";
import SectionCard from "../SectionCard";
import ExpandableTextbox from "../../../utils/ExpandableContent";
import { formatDate } from "../../../utils/dateFormat";

const RoleSpecificUI = ({ role, userData, onAdd, onEdit }) => {
  const NoData = ({ text, section }) => (
    <div className="italic text-sm text-gray-500 flex items-center justify-between">
      {text}
      {onAdd && (
        <button
          onClick={() => onAdd(section)}
          className="text-teal-600 text-xs flex items-center gap-1 hover:underline"
        >
          <MdAdd /> Add
        </button>
      )}
    </div>
  );

  // STUDENT SECTION
  const renderStudentSection = () => (
    <>
      <SectionCard
        icon={<MdEdit />}
        title="Education"
        textBtn="Edit"
        onClick={() => onEdit && onEdit("education")}
      >
        {userData?.collegeName ? (
          <div className="mb-2">
            <div className="font-semibold">{userData.collegeName}</div>
            <div className="text-sm text-gray-500">{userData.degree}</div>
          </div>
        ) : (
          <NoData text="No education details added yet." section="education" />
        )}
      </SectionCard>

      <SectionCard
        // icon={<MdEdit />}
        title={
          <>
            Skills
            <span className="text-xs font-normal text-gray-500 mt-2"> [{userData.skills.length}]</span>
          </>
        }
        textBtn={userData?.skills ? "Edit" : "+ Add"}
        onClick={() => onEdit && onEdit("skills")}
      >
        {userData?.skills ? (
          <div className="mb-2">
            <div className="flex flex-wrap gap-2">
              {userData.skills?.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center w-fit border border-gray-300 dark:border-white/20 px-1.5 rounded-full text-gray-700 dark:text-gray-300 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <NoData text="No skills found." section="skills" />
        )}
      </SectionCard>
    </>
  );

  // DEVELOPER SECTION
  const renderDeveloperSection = () => (
    <>
      <SectionCard
        title="Field of Interest"
        textBtn={userData?.fieldOfInterest ? "Edit" : "Add"}
        onClick={() => onEdit && onEdit("interest")}
      >
        {userData?.fieldOfInterest ? (
          <div className="flex flex-wrap gap-2">{userData.fieldOfInterest}</div>
        ) : (
          <NoData text="No interests mentioned." section="interest" />
        )}
      </SectionCard>

      <SectionCard
        icon={<MdEdit />}
        title="Work Experience"
        textBtn="Add"
        onClick={() => onAdd && onAdd("experience")}
      >
        {Array.isArray(userData?.experience) && userData.experience.length > 0 ? (
          userData.experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-semibold text-sm">
                {exp.position || "Undefined"} at {exp.company || "Unknown"}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-300">
                {formatDate(exp.startDate, "MMM yyyy") || "03/2025"} -{" "}
                {exp.endDate
                  ? formatDate(exp.endDate, "MMM yyyy")
                  : "Present"}
              </div>
              {exp.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {exp.description}
                </p>
              )}
            </div>
          ))
        ) : (
          <NoData text="No work experience added yet." section="experience" />
        )}
      </SectionCard>

      <SectionCard
        icon={<MdEdit />}
        title="Projects"
        textBtn="Add"
        onClick={() => onAdd && onAdd("projects")}
      >
        {Array.isArray(userData?.projects) && userData.projects.length > 0 ? (
          userData.projects.map((proj, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-semibold text-sm dark:text-gray-300">
                {proj.title}
              </div>
              <ExpandableTextbox
                text={proj.description}
                limit={100}
                textClass="text-gray-500 dark:text-gray-400 text-xs"
              />
              {proj.url && (
                <div className="flex items-center gap-2 mt-2">
                  <MdLink className="bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-600 rounded text-base p-0.5" />
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-teal-600 dark:text-teal-500 truncate max-w-56"
                  >
                    {proj.url}
                  </a>
                </div>
              )}
            </div>
          ))
        ) : (
          <NoData text="No projects available." section="projects" />
        )}
      </SectionCard>
    </>
  );

  // RECRUITER SECTION
  const renderRecruiterSection = () => (
    <>
      <SectionCard
        title="Company Details"
        textBtn="Add"
        onClick={() => onAdd && onAdd("openPositions")}
      >
        {userData && (
          <div className="space-y-3">
            {/* Company Header: Name, Website, Type */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">
                {userData.companyName || "Company Name"}
              </span>

              {userData.companyWebsite && (
                <a
                  href={userData.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Website
                </a>
              )}

              {userData.companyType && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-md text-xs font-medium">
                  {userData.companyType}
                </span>
              )}
            </div>

            {/* Company Description */}
            <div>
              <ExpandableTextbox
                text={userData.companyDescription || "No description provided."}
                limit={150}
                textClass="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
              />
            </div>
          </div>
        )}
      </SectionCard>

      <SectionCard
        // icon={<MdEdit />}
        title="Open Positions"
        textBtn="Add"
        onClick={() => onAdd && onAdd("openPositions")}
      >
        {Array.isArray(userData?.openPositions) &&
          userData.openPositions.length > 0 ? (
          userData.openPositions.map((job, idx) => (
            <div key={idx} className="mb-2">
              <div className="font-semibold">{job.title}</div>
              <div className="text-sm text-gray-500">
                {job.location} | {job.salaryRange}
              </div>
              <div className="text-sm text-gray-500">
                Posted on: {formatDate(job.postedOn, "MMM yyyy")}
              </div>
            </div>
          ))
        ) : (
          <NoData text="No open positions listed yet." section="openPositions" />
        )}
      </SectionCard>
    </>
  );

  return (
    <div className="mt-6 flex flex-col">
      {role === "student" && renderStudentSection()}
      {role === "developer" && renderDeveloperSection()}
      {role === "recruiter" && renderRecruiterSection()}
    </div>
  );
};

export default RoleSpecificUI;

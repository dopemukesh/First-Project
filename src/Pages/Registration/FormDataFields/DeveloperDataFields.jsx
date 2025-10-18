import React, { useState } from "react";
import { Button } from "../../../Components/Common/Button/Button";
import { IoMdRemove } from "react-icons/io";
import ThemeChange from "../../../Components/Layout/Navbar/ThemeChange";
import useEnterKey from "../../../hooks/useEnterKey";

const DeveloperDataFields = ({
  labelClass,
  inputClass,
  formData,
  setFormData,
  handleChange,
}) => {
  // ============ Skills ============
  const [newSkill, setNewSkill] = useState("");
  const handleEnter = useEnterKey(() => addSkill());

  const addSkill = () => {
    const skill = newSkill.trim();
    if (!skill || formData.skills.includes(skill)) return;

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
    setNewSkill("");
  };

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  // ============ Experience ============
  const handleExperienceChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = prev.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      );
      return { ...prev, experience: updated };
    });
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  // ============ Projects ============
  const handleProjectChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = prev.projects.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      );
      return { ...prev, projects: updated };
    });
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { title: "", description: "", url: "", technologies: [""] },
      ],
    }));
  };

  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  // ============ Render ============
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-2">
        {/* Portfolio & Bio */}
        <div>
          <label className={labelClass}>Portfolio Website</label>
          <input
            name="portfolioWebsite"
            className={inputClass}
            value={formData.portfolioWebsite}
            placeholder="Enter your portfolio url"
            onChange={handleChange}
          />
        </div>

        {/* github */}
        <div>
          <label className={labelClass}>Github</label>
          <input
            name="github"
            className={inputClass}
            value={formData.github}
            placeholder="Enter your github profile url"
            onChange={handleChange}
          />
        </div>

        {/* linkedin */}
        <div>
          <label className={labelClass}>Linkedin</label>
          <input
            name="linkedin"
            className={inputClass}
            value={formData.linkedin}
            placeholder="Enter your linkedin profile url"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="my-4 shadow-sm">
        <label className={labelClass}>Skills</label>

        <div className="flex flex-nowrap gap-2 mb-2 p-1 overflow-x-auto max-w-72 md:max-w-full">
          {formData.skills.length === 0 ? (
            <span className="text-gray-400 italic">No skills added yet</span>
          ) : (
            formData.skills.map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-1 whitespace-nowrap bg-white/20 border border-gray-500 p-1 ps-2 rounded-full text-gray-400 hover:text-white text-xs"
              >
                {skill}
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => removeSkill(i)}
                >
                  <IoMdRemove className="w-4 h-4 bg-white/20 rounded-full text-white" />
                </button>
              </span>
            ))
          )}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <input
            type="text"
            className={`${inputClass} flex-1`}
            value={newSkill}
            placeholder="Add a skill and press Enter"
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleEnter}
          />
          <Button type="button" variant="tertiary" size="sm" onClick={addSkill}>
            + Add
          </Button>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-lg text-white">Experience</h3>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-3 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-xs">Experience {i + 1}</p>
              <Button
                type="button"
                variant="danger"
                size="xs"
                onClick={() => removeExperience(i)}
              >
                Remove
              </Button>
            </div>

            <input
              placeholder="Company"
              className={inputClass}
              value={exp.company}
              onChange={(e) =>
                handleExperienceChange(i, "company", e.target.value)
              }
            />
            <input
              placeholder="Position"
              className={inputClass}
              value={exp.position}
              onChange={(e) =>
                handleExperienceChange(i, "position", e.target.value)
              }
            />

            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                className={inputClass}
                value={exp.startDate}
                onChange={(e) =>
                  handleExperienceChange(i, "startDate", e.target.value)
                }
              />
              <input
                type="date"
                className={inputClass}
                value={exp.endDate}
                onChange={(e) =>
                  handleExperienceChange(i, "endDate", e.target.value)
                }
              />
            </div>

            <textarea
              placeholder="Description"
              className={inputClass}
              value={exp.description}
              onChange={(e) =>
                handleExperienceChange(i, "description", e.target.value)
              }
            />
          </div>
        ))}
        <Button
          type="button"
          variant="tertiary"
          size="ssm"
          onClick={addExperience}
        >
          + Add Experience
        </Button>
      </div>

      {/* Projects */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-lg text-white">Projects</h3>
        {formData.projects.map((proj, i) => (
          <div key={i} className="mb-3 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-xs">Project {i + 1}</p>
              <Button
                type="button"
                variant="danger"
                size="xs"
                onClick={() => removeProject(i)}
              >
                Remove
              </Button>
            </div>

            <input
              placeholder="Title"
              className={inputClass}
              value={proj.title}
              onChange={(e) => handleProjectChange(i, "title", e.target.value)}
            />
            <textarea
              placeholder="Description"
              className={inputClass}
              value={proj.description}
              onChange={(e) =>
                handleProjectChange(i, "description", e.target.value)
              }
            />
            <input
              placeholder="Project URL"
              className={inputClass}
              value={proj.url}
              onChange={(e) => handleProjectChange(i, "url", e.target.value)}
            />

            {/* technologies */}
            <input
              type="text"
              className={inputClass}
              placeholder="Technologies (comma separated)"
              value={proj.technologies}
              onChange={(e) =>
                handleProjectChange(i, "technologies", e.target.value)
              }
            />
          </div>
        ))}
        <Button
          type="button"
          variant="tertiary"
          size="ssm"
          onClick={addProject}
        >
          + Add Project
        </Button>
      </div>
    </div>
  );
};

export default DeveloperDataFields;

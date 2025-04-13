import React, { useState, useRef } from "react";
import { Button } from "../../../Components/Common/Button/Button";

const SkillsInput = ({ onSkillsChange }) => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const inputRef = useRef(null); // Create a ref for the input field

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      const updatedSkills = [...skills, skillInput.trim()];
      setSkills(updatedSkills);
      setSkillInput("");
      if (onSkillsChange) onSkillsChange(updatedSkills);
    }
    inputRef.current.focus(); // Autofocus on the input field
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(updatedSkills);
    if (onSkillsChange) onSkillsChange(updatedSkills);
  };

  return (
    <>
      <div className="flex gap-2 mb-2">
        <input
          ref={inputRef} // Attach the ref to the input field
          type="text"
          placeholder="e.g. html, js, css"
          className="w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <Button variant="secondary" size="sm" onClick={handleAddSkill}>
          Add Skill
        </Button>
      </div>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 md:max-h-28 border dark:border-gray-700 overflow-y-scroll p-1 rounded-lg">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-3 py-1 h-fit text-sm bg-gray-200 dark:bg-gray-800 rounded-md"
            >
              <span>{skill}</span>
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveSkill(skill)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SkillsInput;

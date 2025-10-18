// components/ChipInput.jsx
import React, { useState } from "react";
import { PlusIcon } from "lucide-react";
import { IoMdRemove } from "react-icons/io";

const ChipInput = ({
  label,
  arrayName,
  values,
  onAdd,
  onRemove,
  required = false,
  inputClass = "",
  placeholder = "",
}) => {
  const [inputVal, setInputVal] = useState("");

  const handleAdd = () => {
    if (inputVal.trim() !== "") {
      onAdd(arrayName, inputVal.trim());
      setInputVal("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputVal.trim() !== "") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div>
      <label className="block mb-1.5 text-xs text-gray-600 dark:text-gray-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {values.length > 0 && (
        <div className="flex flex-nowrap gap-2 mb-2 p-1 overflow-x-auto">
          {values.map((val, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 whitespace-nowrap bg-gray-100 dark:bg-white/20 border border-gray-300 dark:border-gray-500 p-1 ps-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-xs"
            >
              {val}
              <button
                type="button"
                onClick={() => onRemove(arrayName, idx)}
                className="ml-0.5"
              >
                <IoMdRemove className="w-4 h-4 bg-white dark:bg-white/20 rounded-full text-gray-800 dark:text-white" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className={inputClass}
          placeholder={placeholder}
        />
        <button
          type="button"
          className="bg-gray-200 dark:bg-white/20 rounded-lg py-1 px-2.5"
          onClick={handleAdd}
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChipInput;

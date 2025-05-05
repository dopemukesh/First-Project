/* eslint-disable react/prop-types */
// Designed and developed by:
// - Mukesh Yadav

"use client";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Dropdown = ({
  className = "",
  name,
  options = [],
  placeholder = "Select an option",
  onSelect,
  defaultSelected = null,
  selected: controlledSelected = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const selected = controlledSelected !== null ? controlledSelected : internalSelected;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setInternalSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`min-w-36 w-full h-full px-3 py-2 gap-2 rounded-lg text-left flex justify-between items-center whitespace-nowrap ${className}`}
      >
        <span className="truncate">
          {selected ? (
            typeof selected === "object" ? (
              <span className="flex items-center">
                {selected.flag && (
                  <img
                    src={selected.flag}
                    alt={selected.code}
                    className="w-6 h-4 mr-2"
                  />
                )}
                {selected.symbol} {selected.code}
              </span>
            ) : (
              selected
            )
          ) : (
            placeholder
          )}
        </span>
        <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-50 p-2 space-y-1 max-h-60 overflow-y-auto">
          {options.map((option, idx) => (
            <li
              key={typeof option === "object" ? option.code : `${option}-${idx}`}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white transition flex items-center rounded-lg ${
                JSON.stringify(selected) === JSON.stringify(option)
                  ? "bg-teal-600/10 text-teal-600 dark:bg-teal-500/10 dark:text-teal-500"
                  : ""
              }`}
            >
              {typeof option === "object" ? (
                <span className="flex items-center">
                  {option.flag && (
                    <img
                      src={option.flag}
                      alt={option.code}
                      className="w-6 h-4 mr-2"
                    />
                  )}
                  {option.symbol} {option.code}
                </span>
              ) : (
                option
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

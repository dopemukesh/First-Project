import React, { useState, useEffect, useRef } from "react";

function ActivityLogComponent({ className, lastChangedValue }) {
  const [showActivityLog, setShowActivityLog] = useState(false);
  const logRef = useRef(null); // for detecting outside click

  const toggleActivityLog = () => {
    setShowActivityLog((prev) => !prev);
  };

  // 🧩 Hide activity log when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (logRef.current && !logRef.current.contains(event.target)) {
        setShowActivityLog(false);
      }
    };

    if (showActivityLog) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showActivityLog]);

  return (
    <div className={`flex justify-between gap-2 relative ${className}`} ref={logRef}>
      {/* Activity Log box */}
      {showActivityLog && Object.keys(lastChangedValue).length > 0 && (
        <div className="absolute bottom-12 left-0 z-[999] w-full p-4 bg-gray-100 dark:bg-gray-950 rounded-xl border dark:border-white/10">
          <p className="text-[10px] font-medium text-violet-500 mb-2">Changed Fields (Last Edit):</p>
          <div className="relative overflow-y-auto max-h-28">
            <div className="relative">
              <i className="absolute top-0  bg-gray-800 dark:bg-white w-[1px] h-[calc(100%-18px)] mt-1"></i>
              {Object.entries(lastChangedValue).map(([key, change]) => (
                <li key={key} className="text-xs relative">
                  <i className="absolute top-1.5  rounded-bl-md border-s border-b border-gray-800 dark:border-white w-2 h-1.5"></i>
                  <p className="capitalize pt-1 ps-3 hover:text-violet-500 transition-colors duration-300">
                    {key} :<span className="text-gray-500 dark:text-gray-400 font-normal"> {change}</span>
                  </p>
                </li>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={toggleActivityLog}
        className="grid place-content-center rounded-xl w-9 h-9 p-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/5"
        aria-label="activity-log"
        type="button"
      >
        <img
          src="../icons/activity-dualTone.svg"
          className="dark:invert w-7"
          alt="activity-log"
        />
      </button>
    </div>
  );
}

export default ActivityLogComponent;

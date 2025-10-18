import React from "react";

const SectionCard = ({ icon, textBtn, title, children }) => (
  <div className="border dark:border-white/10 bg-white dark:bg-white/5 rounded-xl mb-2">
    <div className="flex items-center gap-2 justify-between px-2 py-2 border-b dark:border-white/10">
      <div>
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div>
        {icon && (
          <div className="bg-gray-100 dark:bg-gray-800 p-1 border dark:border-gray-700 rounded-md cursor-pointer">
            {icon}
          </div>
        )}
        {textBtn && (
          <div className="text-xs text-gray-700 dark:text-gray-300 cursor-pointer">
            {textBtn}
          </div>
        )}
      </div>
    </div>
    <div className="p-4">{children}</div>
  </div>
);

export default SectionCard;

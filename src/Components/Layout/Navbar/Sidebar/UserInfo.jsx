import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../Common/Button/Button";
import ThemeChange from "../ThemeChange";

const UserInfo = ({ onCloseSidebar }) => {
  const navigate = useNavigate();

  // TODO: Replace with your auth logic
  const isLoggedIn = false;
  const userData = {
    name: "Mukesh Yadav",
    role: "Frontend Developer",
    avatar: "https://avatars.githubusercontent.com/dopemukesh",
  };

  const handleLoginClick = () => {
    if (onCloseSidebar) {
      onCloseSidebar(); // Close the sidebar
    }
    navigate("/login"); // Navigate to login page
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-between p-2 border border-gray-200 dark:border-gray-800 rounded-2xl">
        <Button variant="secondary" size="sm" onClick={handleLoginClick}>
          Login to Access More
        </Button>
        <ThemeChange className="h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="px-2 border border-gray-200 dark:border-gray-800 rounded-2xl">
      <div className="flex items-center gap-4 py-2">
        <div className="relative">
          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Online status indicator */}
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>

        <div className="flex flex-col flex-1">
          <p className="text-md font-semibold text-gray-800 dark:text-gray-200 truncate">
            {userData.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {userData.role}
          </p>
        </div>

        {/* User actions dropdown */}
        <button
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          aria-label="User menu"
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../Common/Button/Button";
import ThemeChange from "../ThemeChange";

const UserInfo = ({ onCloseSidebar }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check localStorage for user data
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(user.isLoggedIn);
      setUserData({
        name: user.name,
        email: user.email,
        position: user.position, // You can add role in localStorage if needed
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`
      });
    }
  }, []);

  const handleLoginClick = () => {
    if (onCloseSidebar) {
      onCloseSidebar();
    }
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  if (!isLoggedIn || !userData) {
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
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>

        <div className="flex flex-col flex-1">
          <p className="text-md font-semibold text-gray-800 dark:text-gray-200 truncate">
            {userData.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {userData.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm text-red-500"
          aria-label="Logout"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;

import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { Button } from "../../Components/Common/Button/Button";
import { getRoleFromToken } from "../../utils/GetUserRoleFromToken";
import Container from "../../Components/Common/Container/Container";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ThemeChange from "../../Components/Layout/Navbar/ThemeChange";

// Reusable Section Header
export const HeadIcon = ({ text, icon, iconText, color, className }) => (
  <div className={`flex justify-between items-center px-4 py-1.5 ${className}`}>
    <div className="text-sm opacity-90 font-semibold">{text}</div>
    {iconText && <p className={`text-xs font-medium cursor-pointer ${color}`}>{iconText}</p>}
    {icon && (
      <div className={`bg-gray-100 dark:bg-gray-800 p-1 border dark:border-gray-700 rounded-md cursor-pointer ${color}`}>
        {icon}
      </div>
    )}
  </div>
);

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) return navigate("/login");

    const user = JSON.parse(storedUser);
    if (!user.isLoggedIn) {
      navigate("/login");
    } else {
      setUserData({
        name: user.name,
        email: user.email,
        username: user.username,
        // role: user.role,
        avatar: user.picture || "https://placehold.co/150x150",
      });
    }
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => setShowHeader(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleEditProfile = () => {
    alert("Edit Profile Coming Soon!");
  };

  const token = localStorage.getItem("token");
  const role = getRoleFromToken(token);

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
        {/* Sticky header */}
        <ProfileHeader userData={userData} showHeader={showHeader} />
      <Container className="min-h-screen text-gray-800 dark:text-white">

        {/* Main layout */}
        <div className="flex flex-col md:flex-row gap-4 p-4">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 rounded-lg shadow-sm p-4 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-14 h-14 rounded-full object-cover border-4 border-white dark:border-gray-700"
              />
              <div>
                <h2 className="font-semibold">{userData.name}</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">@{userData.username}</p>
                <p className="text-xs font-medium text-teal-600 dark:text-teal-500">{role?.toUpperCase()}</p>
              </div>
            </div>

            {/* Role-specific quick stats */}
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              {role?.toLowerCase() === "student" && <p className="border w-fit p-0.5 rounded-md dark:border-gray-800"><b>0</b> Connections</p>}
              {role?.toLowerCase() === "developer" && <p className="border w-fit p-0.5 rounded-md dark:border-gray-800"><b>0</b> Contributions</p>}
              {role?.toLowerCase() === "recruiter" && (
                <div className="space-x-4 flex items-center justify-center">
                  <p className="border w-fit p-0.5 rounded-md dark:border-gray-800"><b>0</b> Jobs</p>
                  <p className="border w-fit p-0.5 rounded-md dark:border-gray-800"><b>0</b> Hired</p>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <ThemeChange />

              <div className="flex flex-col gap-2 mt-4">
                <NavLink to='/'>Back to home</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='notification'>Notification</NavLink>
              </div>

              <div className="flex gap-4 mt-4">
                <Button variant="outline" size="ssm" to={'editProfile'}>
                  Edit Profile
                </Button>
                <Button variant="danger" size="ssm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="w-full md:w-3/4 space-y-4">
            {/* <div className="h-32 w-full bg-gradient-to-t from-teal-950 to-teal-400 rounded-md"></div> */}

            {/* Nested routed components if needed */}
            <Outlet />
          </main>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;

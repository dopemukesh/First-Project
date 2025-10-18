import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { Button } from "../../Components/Common/Button/Button";
import { LogOut } from "lucide-react";

import Container from "../../Components/Common/Container/Container";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ThemeChange from "../../Components/Layout/Navbar/ThemeChange";
import { getRoleFromToken } from "../../utils/GetUserRoleFromToken";

// Reusable Section Header Component
export const HeadIcon = ({ text, icon, iconText, color, className }) => (
  <div className={`flex justify-between items-center px-4 py-1.5 ${className}`}>
    <div className="text-sm opacity-90 font-semibold">{text}</div>
    {iconText && (
      <p className={`text-xs font-medium cursor-pointer ${color}`}>
        {iconText}
      </p>
    )}
    {icon && (
      <div
        className={`bg-gray-100 dark:bg-gray-800 p-1 border dark:border-gray-700 rounded-md cursor-pointer ${color}`}
      >
        {icon}
      </div>
    )}
  </div>
);

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showHeader, setShowHeader] = useState(false);

  // Fetch user data from localStorage, redirect if not logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    if (!user.isLoggedIn) {
      navigate("/login");
      return;
    }

    setUserData({
      ...user,
      avatar: user.picture || "https://placehold.co/150x150",
    });
  }, [navigate]);

  // Show/hide header based on scroll position
  useEffect(() => {
    const handleScroll = () => setShowHeader(window.scrollY > 5);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logout handler clears localStorage and redirects to login
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  const role = getRoleFromToken(token);
  // const role = "developer"; // Hardcoded role for testing purposes

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // navlinks for menu
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/profile", label: "Profile" },
    { to: "notification", label: "Notification" },
  ];

  return (
    <>
      {/* Sticky header */}
      <ProfileHeader userData={userData} showHeader={showHeader} />

      <Container className="min-h-screen">
        <div className="flex flex-col md:flex-row gap-2 h-full">
          {/* Sidebar */}
          <aside className="w-full md:max-w-xs h-full bg-white dark:bg-white/5 md:border-r dark:border-white/10">
            <div className="flex flex-col p-4">
              {/* Profile Picture */}
              <div className="flex justify-center ">
                <div
                  id="profilePic"
                  className="group overflow-hidden cursor-pointer rounded-full w-20 h-20  border-4 border-white dark:border-gray-700"
                >
                  <img
                    src={userData.profilePicture}
                    alt={userData.name}
                    className="object-cover h-full group-hover:scale-125 transition-all duration-700"
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="flex flex-col items-center w-full text-center mt-2">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold">{userData.name}</h2>
                  <p className="text-xs text-teal-600 dark:text-teal-500 font-medium capitalize">
                    {role}
                  </p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  @{userData.username}
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 my-2">
                <div id="emailId">{userData.email}</div>
                <i className="h-1 w-1 rounded-full bg-gray-500/30"></i>
                <div id="phoneNumber">{userData.phoneNumber}</div>
              </div>

              {/* Role Stats */}
              <div className="flex items-center justify-end w-full gap-2">
                {role.toLowerCase() === "student" && (
                  <RoleStats
                    student
                    projects={userData.projects?.length || 0}
                  />
                )}
                {role.toLowerCase() === "developer" && (
                  <RoleStats
                    developer
                    projects={userData.projects?.length || 0}
                  />
                )}
                {role.toLowerCase() === "recruiter" && <RoleStats recruiter />}
              </div>

              {/* Quick Navigation Buttons */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <div className="flex items-center gap-2 w-full">
                  <Button
                    to={"editProfile"}
                    variant="tertiary"
                    size="sm"
                    className="w-full"
                  >
                    Edit Profile
                  </Button>
                  <button
                    onClick={handleLogout}
                    className="rounded-xl w-10 h-10 p-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/5"
                    aria-label="Logout"
                  >
                    <LogOut className="h-5" />
                  </button>
                  <ThemeChange className="rounded-xl w-14 h-10 p-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/5 border-none" />
                </div>
              </div>

              {/* Menu Links */}
              <nav className="w-full flex flex-col gap-2 mt-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="hover:underline text-sm font-medium w-fit py-1"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="w-full md:w-3/4">
            <div className="flex flex-col gap-4">
              <Outlet />
            </div>
          </main>
        </div>
      </Container>
    </>
  );
};

// RoleStats component to avoid repetition of similar JSX for roles
const RoleStats = ({ student, developer, recruiter, projects = 0 }) => {
  if (student) {
    return (
      <div className="flex items-center justify-center gap-2 w-full mb-4">
        <StatItem label="Contribution" value={0} />
        <Divider />
        <StatItem label="Projects" value={projects} />
        <Divider />
        <StatItem label="Followers" value={0} />
      </div>
    );
  }

  if (developer) {
    return (
      <div className="flex items-center justify-center gap-2 w-full mb-4">
        <StatItem label="Contribution" value={0} />
        <Divider />
        <StatItem label="Projects" value={projects} />
        <Divider />
        <StatItem label="Followers" value={0} />
      </div>
    );
  }

  if (recruiter) {
    return (
      <div className="flex items-center justify-center gap-2 w-full mb-4">
        <StatItem label="Jobs" value={0} />
        <Divider />
        <StatItem label="Hired" value={0} />
        <Divider />
        <StatItem label="Followers" value={0} />
      </div>
    );
  }

  return null;
};

const StatItem = ({ label, value }) => (
  <div className="text-center w-fit h-fit p-2">
    <p className="text-xl font-medium">{value}</p>
    <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
  </div>
);

const Divider = () => <i className="h-5 w-[1.5px] bg-gray-500/30" />;

export default UserProfile;

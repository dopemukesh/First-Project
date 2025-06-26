import React, { useEffect, useState } from "react";
import RoleSpecificUI from "../RoleSpecific/RoleSpecificUI";
import { HeadIcon } from "../UserProfile";
import ExpandableTextbox from "../../../utils/ExpandableContent";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getRoleFromToken } from "../../../utils/GetUserRoleFromToken";

const ProfileDashboard = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        const token = localStorage.getItem("token");

        if (!storedUser || !token) {
            navigate("/login");
            return;
        }

        const user = JSON.parse(storedUser);
        if (!user.isLoggedIn) {
            navigate("/login");
        } else {
            setUserData({
                name: user.name,
                email: user.email,
                username: user.username,
                role: user.role,
                avatar: user.picture || "https://placehold.co/150x150",
                bio: user.bio || "Write your bio here!",
                experience: [{
                    position: "Frontend Developer",
                    company: "TechNova Pvt Ltd",
                    startDate: "2023-01",
                    endDate: "2024-06",
                    description: "Developed and maintained user interfaces with React and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve performance."
                },
                {
                    position: "Web Developer Intern",
                    company: "CodeCraft Inc",
                    startDate: "2022-06",
                    endDate: "2022-12",
                    description: "Built responsive web components using HTML, CSS, and JavaScript. Contributed to redesigning the company's portfolio website."
                }],
                // project: user.project || [],
                project: [{
                    title: "Portfolio Website",
                    description: "A personal portfolio built with React, showcasing projects, resume, and contact information. Hosted on GitHub Pages.",
                    url: "https://johndoe.github.io/portfolio"
                },
                {
                    title: "To-Do List App",
                    description: "A simple to-do app built with React and Tailwind CSS. Features include task creation, filtering, and localStorage persistence.",
                    url: "https://github.com/johndoe/todo-app"
                },
                {
                    title: "Weather App",
                    description: "A weather forecasting web app using OpenWeatherMap API and React Hooks. Displays real-time weather based on city search.",
                    url: "https://weather-app-john.vercel.app/"
                }],
                openPositions: [
                    {
                        title: "Frontend Developer",
                        location: "Remote",
                        salaryRange: "₹6 LPA - ₹10 LPA",
                        postedOn: "2025-06-01"
                    },
                    {
                        title: "UI/UX Designer",
                        location: "Bangalore, India",
                        salaryRange: "₹5 LPA - ₹8 LPA",
                        postedOn: "2025-05-28"
                    },
                    {
                        title: "Backend Developer (Node.js)",
                        location: "Hyderabad, India",
                        salaryRange: "₹7 LPA - ₹11 LPA",
                        postedOn: "2025-06-05"
                    }
                ],
            });

            const roleFromToken = getRoleFromToken(token);
            setRole(roleFromToken);
        }
    }, [navigate]);

    if (!userData) return <p>Loading profile...</p>;

    return (
        <div>
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Welcome to your dashboard!
            </p>

            {/* About */}
            <div className="mt-4">
                <HeadIcon text="About" icon={<MdEdit />} />
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 rounded-sm text-sm">
                    <ExpandableTextbox text={userData.bio} limit={150} />
                </div>
            </div>

            {/* Role-specific section */}
            {role && <RoleSpecificUI role={role} userData={userData} />}
        </div>
    );
};

export default ProfileDashboard;

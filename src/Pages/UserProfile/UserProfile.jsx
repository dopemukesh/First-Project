import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Common/Button/Button";

const UserProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (!storedUser) {
            navigate("/login");
        } else {
            const user = JSON.parse(storedUser);
            if (!user.isLoggedIn) {
                navigate("/login");
            } else {
                setUserData({
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    avatar: user.picture || "https://placehold.co/150x150",
                });
            }
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleEditProfile = () => {
        // Aap yahan edit profile form open kar sakte hain ya redirect kardo
        alert("Edit Profile Comming soon !");
    };

    if (!userData) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
                {/* Cover Image */}
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                {/* Profile Info */}
                <div className="relative px-6 pb-6 -mt-16">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Avatar */}
                        <div className="relative">
                            <img
                                src={userData.avatar}
                                alt={userData.name}
                                className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-md"
                            />
                            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>

                        {/* User Details */}
                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                                {userData.name}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                {userData.email}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                Role: <span className="capitalize">{userData.role}</span>
                            </p>

                            <div className="mt-4 flex gap-3 justify-center md:justify-start">
                                <Button variant="primary" onClick={handleEditProfile}>
                                    Edit Profile
                                </Button>
                                <Button variant="secondary" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info / Bio */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            About Me
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            I'm a passionate developer and lifelong learner. I love building
                            modern web applications using the latest technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
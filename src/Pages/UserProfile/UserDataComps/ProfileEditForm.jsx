import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileEditForm = () => {
    const navigate = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("currentUser")) || {};

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        bio: "",
        role: "",
    });

    useEffect(() => {
        if (storedUser) {
            setFormData({
                name: storedUser.name || "",
                email: storedUser.email || "",
                username: storedUser.username || "",
                bio: storedUser.bio || "",
                role: storedUser.role || "",
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Profile:", formData);
        // Save to localStorage or API
        localStorage.setItem("currentUser", JSON.stringify({ ...storedUser, ...formData }));
        alert("Profile updated successfully!");
        // Optionally, you can redirect or update the UI after saving
        navigate("/profile");
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6 text-center">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        required
                    />
                </div>

                {/* Username */}
                <div>
                    <label htmlFor="username" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Username</label>
                    <input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Choose a username"
                        className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        required
                    />
                </div>

                {/* Bio */}
                <div>
                    <label htmlFor="bio" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows="4"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Tell something about yourself"
                        className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                </div>

                {/* Role (readonly) */}
                <div>
                    <label htmlFor="role" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Role</label>
                    <input
                        id="role"
                        name="role"
                        value={formData.role}
                        readOnly
                        className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEditForm;
// This component is a form for editing user profile data.
// src/layouts/DashboardLayout.jsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

// Simulated role getter (replace with real auth logic or context)
const getUserRole = () => {
    return localStorage.getItem("role"); // "admin", "teacher", "superadmin"
};

const DashboardLayout = () => {
    const navigate = useNavigate();
    const role = getUserRole();

    const handleLogout = () => {
        localStorage.clear(); // or specific token removal
        navigate("/login");
    };

    const menuItems = {
        admin: [
            { label: "Admin Dashboard", path: "/admin-dashboard" },
            { label: "Manage Users", path: "/admin-dashboard/users" },
        ],
        teacher: [
            { label: "Teacher Dashboard", path: "/teacher-dashboard" },
            { label: "My Classes", path: "/teacher-dashboard/classes" },
        ],
        superadmin: [
            { label: "Superadmin Panel", path: "/superadmin-panel" },
            { label: "System Logs", path: "/superadmin-panel/logs" },
        ],
    };

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <ul className="space-y-3">
                    {(menuItems[role] || []).map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-800"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleLogout}
                    className="mt-8 w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
                >
                    Logout
                </button>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;

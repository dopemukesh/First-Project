import React, { useEffect, useState } from "react";
import { fetchAdminUsers } from "./adminUserApi";

const AdminUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAdminUsers().then((data) => {
            setUsers(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="min-h-screen">
            <h2 className="mb-6">Admin Users</h2>

            {loading ? (
                <div className="text-gray-500 text-center py-10">Loading...</div>
            ) : (
                <div className="dark:bg-gray-800 border dark:border-gray-700 overflow-x-auto rounded-2xl max-w-5xl">
                    {/* Header (Desktop only) */}
                    <div className="hidden md:grid grid-cols-7 bg-gray-100 dark:bg-gray-900 text-sm text-gray-500 py-2 px-5 gap-4 w-full">
                        <div>ID</div>
                        <div>Name</div>
                        <div className="col-span-2">Email</div>
                        <div>Joined</div>
                        <div>Role</div>
                        <div>Status</div>
                    </div>

                    {/* Rows */}
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                        {users.map((user, idx) => (
                            <li
                                key={user.id}
                                className="grid md:grid-cols-7 gap-4 items-center py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                {/* Mobile Label + Value (hidden on md+) */}
                                <div className="md:hidden flex flex-col gap-1 w-full">
                                    <p className="text-xs text-gray-400">ID</p>
                                    <p className="dark:text-gray-300 font-medium">0{idx + 1}</p>
                                </div>
                                <div className="md:hidden flex flex-col gap-1 w-full">
                                    <p className="text-xs text-gray-400">Name</p>
                                    <p className="dark:text-gray-300">{user.name}</p>
                                </div>
                                <div className="md:hidden flex flex-col gap-1 w-full">
                                    <p className="text-xs text-gray-400">Email</p>
                                    <p className="text-gray-500 truncate">{user.email}</p>
                                </div>
                                <div className="md:hidden flex flex-col gap-1 w-full">
                                    <p className="text-xs text-gray-400">Joined</p>
                                    <p className="text-gray-500">{user.joined}</p>
                                </div>
                                <div className="md:hidden flex flex-col gap-1 w-full">
                                    <p className="text-xs text-gray-400">Role</p>
                                    <span className="text-sky-500 rounded-full text-xs font-medium">
                                        {user.role}
                                    </span>
                                </div>
                                <div className="md:hidden flex flex-col gap-1 w-full">
                                    <p className="text-xs text-gray-400">Status</p>
                                    <span
                                        className={`px-3 py-0.5 rounded-full w-fit text-xs ${user.status === "Active"
                                            ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
                                            : "border border-red-500/20 bg-red-500/10 text-red-500"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </div>

                                {/* Desktop Row */}
                                <div className="hidden md:block dark:text-gray-400 font-medium w-full">
                                    0{idx + 1}
                                </div>
                                <div className="hidden md:block w-full whitespace-nowrap">
                                    {user.name}
                                </div>
                                <div className="hidden md:block w-full whitespace-nowrap text-gray-500 truncate col-span-2">
                                    {user.email}
                                </div>
                                <div className="hidden md:block w-full whitespace-nowrap text-gray-500">
                                    {user.joined}
                                </div>
                                <div className="hidden md:block">
                                    <span className="w-full whitespace-nowrap text-sky-500 rounded-full text-xs font-medium">
                                        {user.role}
                                    </span>
                                </div>
                                <div className="hidden md:block">
                                    <span
                                        className={`w-full whitespace-nowrap px-3 py-0.5 rounded-full text-xs ${user.status === "Active"
                                            ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
                                            : "border border-red-500/20 bg-red-500/10 text-red-500"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


            )}
        </div>
    );
};

export default AdminUser;

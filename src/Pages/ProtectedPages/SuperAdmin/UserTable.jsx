import React, { useState } from 'react';
import { Button } from '../../../Components/Common/Button/Button';

const UserTable = ({ users, onToggleStatus, onEdit, onDelete }) => {
    const [filterRole, setFilterRole] = useState("all");

    const filteredUsers = filterRole === "all"
        ? users
        : users.filter(u => u.role === filterRole);

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Staff users list ({filteredUsers.length})</h2>
                <div className="space-x-2">
                    <button
                        onClick={() => setFilterRole("all")}
                        className={`px-3 py-1 rounded ${filterRole === "all" ? "bg-teal-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilterRole("teacher")}
                        className={`px-3 py-1 rounded ${filterRole === "teacher" ? "bg-teal-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                    >
                        Teachers
                    </button>
                    <button
                        onClick={() => setFilterRole("admin")}
                        className={`px-3 py-1 rounded ${filterRole === "admin" ? "bg-teal-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                    >
                        Admins
                    </button>
                </div>
            </div>

            {filteredUsers.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">No users found.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-left border-b pb-2">Name</th>
                            <th className="text-left border-b pb-2">Email</th>
                            <th className="text-left border-b pb-2">Role</th>
                            <th className="text-left border-b pb-2">Status</th>
                            <th className="text-left border-b pb-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((u, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="py-2">{u.name}</td>
                                <td className="py-2">{u.email}</td>
                                <td className="py-2 capitalize">{u.role}</td>
                                <td className="py-2">
                                    <button
                                        onClick={() => onToggleStatus(u.id)}
                                        className={`text-sm px-3 py-2 rounded-lg ${u.active ? 'bg-emerald-500 text-white' : 'bg-gray-400 text-white'
                                            }`}
                                    >
                                        {u.active ? 'Active' : 'Inactive'}
                                    </button>

                                </td>
                                <td className="py-2 flex gap-2">
                                    <Button
                                    variant='info'
                                    size='ssm'
                                        onClick={() => onEdit(u)}>
                                        Edit
                                    </Button>

                                    <Button
                                    variant='danger'
                                    size='ssm'
                                        onClick={() => onDelete(u.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserTable;

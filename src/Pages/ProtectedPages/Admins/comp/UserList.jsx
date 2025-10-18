import React from "react";
import CopyBtn from "../../../../Components/Common/Button/CopyBtn";
import { Button } from "../../../../Components/Common/Button/Button";

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="w-full">
            {/* <div className="mb-4">
                <h3 className="text-sm font-medium">Members</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Displaying all the members details.</p>
            </div> */}

            {/* Users Table */}
            <div className="w-fit max-w-[89vw] overflow-x-auto dark:bg-gray-800 rounded-lg border dark:border-gray-800">
                <table className="min-w-fit text-sm text-left">
                    <thead className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Joined</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-gray-700">
                        {users.map((user, idx) => (
                            <tr
                                key={idx}
                                className={`${idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : "bg-gray-100 dark:bg-gray-800"
                                    }`}
                            >
                                <td className="px-6 py-3">{user._id}</td>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <CopyBtn text={user.name} truncate />
                                </td>
                                <td className="px-6 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                    <CopyBtn text={user.email} truncate length={18} />
                                </td>
                                <td className="px-6 py-3">
                                    <span
                                        className={`px-3 py-1 whitespace-nowrap rounded-md text-xs font-medium 
                      ${user.role === "Super Admin"
                                                ? "bg-sky-500/10 text-sky-600"
                                                : user.role === "Admin"
                                                    ? "bg-emerald-500/10 text-emerald-600"
                                                    : user.role === "Recruiter"
                                                        ? "bg-teal-500/10 text-teal-600"
                                                        : user.role === "Teacher"
                                                            ? "bg-amber-500/10 text-amber-600"
                                                            : "bg-pink-500/10 text-pink-600"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                    {user.joined}
                                </td>
                                <td className="flex items-center gap-1 px-6 py-3 text-center space-x-2">
                                    <Button
                                        variant="outline2"
                                        size="xs"
                                        onClick={() => onEdit(user._id)}
                                    >
                                        Edit User
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="xs"
                                        onClick={() => onDelete(user._id)}
                                    >
                                        Delete User
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;

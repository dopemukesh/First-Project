import React from "react";
import { Button } from "../../../../../Components/Common/Button/Button";

const UserCard = ({ user, onEdit, onDelete }) => (
  <div className="w-full min-w-72 max-w-md p-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow duration-300">
    {/* Header */}
    <div className="flex gap-2 items-center">
      <div className="bg-gray-200 dark:bg-gray-800 w-10 h-10 rounded-full overflow-hidden">
        {user.image ? (
          <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
        ) : (
          <span className="flex items-center justify-center w-full h-full text-gray-500 text-xs">
            {user.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="text-sm">
        <p className="flex items-center gap-3 text-sm font-medium text-gray-900 dark:text-gray-100">
          {user.name}
          <span
            className={`text-[10px] font-medium px-2 rounded-full 
            ${
              user.status === "Active"
                ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                : "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
            }`}
          >
            {user.status}
          </span>
        </p>
        <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
      </div>
    </div>

    {/* Body */}
    <div className="pt-3 text-xs space-y-1">
      <p className="flex items-center justify-between">
        <span className="font-medium text-gray-700 dark:text-gray-300">Role</span>
        <span className="text-sky-500 dark:text-sky-400">{user.role}</span>
      </p>
      <p className="flex items-center justify-between">
        <span className="font-medium text-gray-700 dark:text-gray-300">Joined</span>
        <span className="text-gray-500 dark:text-gray-400">{user.joined}</span>
      </p>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-2 justify-end mt-4">
      <Button variant="outline2" size="xs" onClick={() => onEdit(user._id)}>
        Edit User
      </Button>
      <Button variant="danger" size="xs" onClick={() => onDelete(user._id)}>
        Delete User
      </Button>
    </div>
  </div>
);

export default UserCard;

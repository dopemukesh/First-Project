import React, { useEffect, useState } from "react";
import { DeleteModal, EditModal } from "../../comp/Modal";
import UserList from "../../comp/UserList";
import UserJsonCard from "../../comp/UserJsonCard";

// Mock API function (replace with your API)
const fetchAdminUsers = async () => [
  {
    _id: "1",
    name: "Mukesh hbjkkjskijs hjijosojojsijj",
    email: "mukesh@example.com",
    joined: "2025-01-01",
    role: "Admin",
    status: "Active",
  },
  {
    _id: "2",
    name: "Rohit",
    email: "rohit@example.com",
    joined: "2025-01-05",
    role: "Teacher",
    status: "Inactive",
  },
  {
    _id: "3",
    name: "Anita",
    email: "anita@example.com",
    joined: "2025-02-01",
    role: "Super Admin",
    status: "Active",
  },
];

const AdminUser2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Admin");

  // Modal state
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [editUserId, setEditUserId] = useState(null);

  // Fetch users
  useEffect(() => {
    fetchAdminUsers().then((data) => {
      setUsers(data || []);
      setLoading(false);
    });
  }, []);

  // Filtered users
  const filteredUsers = users.filter((user) =>
    activeTab === "All" ? true : user.role === activeTab
  );

  const tabs = ["All", "Admin", "Super Admin", "Teacher", "Students", "Recruiter"];

  // Delete handlers
  const handleDelete = (userId) => setDeleteUserId(userId);
  const confirmDelete = () => {
    if (!deleteUserId) return;
    setUsers((prev) => prev.filter((u) => u._id !== deleteUserId));
    console.log("Deleted ✅", deleteUserId);
    setDeleteUserId(null);
  };
  const handleDeleteCancel = () => setDeleteUserId(null);

  // Edit handlers
  const handleEdit = (userId) => setEditUserId(userId);
  const handleUpdate = () => {
    console.log("Update Done ✅", editUserId);
    setEditUserId(null);
  };
  const handleEditCancel = () => setEditUserId(null);

  return (
    <div className="min-h-screen rounded-xl">
      {/* Header */}
      
      <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Users Dashboard
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage and view all registered users.
                </p>
            </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-4 w-[89vw] sm:w-full overflow-x-auto text-xs border-b dark:border-gray-800">
        {tabs.map((tab) => {
          const count = tab === "All" ? users.length : null;
          const isActive = activeTab === tab;

          return (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-0.5 py-2 whitespace-nowrap cursor-pointer border-b-2 transition-colors ${
                isActive
                  ? "text-sky-500 dark:text-sky-400 border-sky-500 font-medium"
                  : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 border-transparent hover:border-gray-400"
              }`}
            >
              <span>{tab}</span>
              {tab === "All" && (
                <span className="text-[8px] bg-gray-200 dark:bg-gray-800 px-1.5 rounded-full">
                  {count}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Users Section */}
      {loading ? (
        <div className="text-gray-500 text-center py-10">Loading...</div>
      ) : filteredUsers.length === 0 ? (
        <div className="text-gray-500 text-center py-10">No {activeTab} found.</div>
      ) : (
        <UserList users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {/* Edit Modal */}
      {editUserId && (
        <EditModal
          isOpen={!!editUserId}
          title="Edit User"
          message="Update the user details below."
          onConfirm={handleUpdate}
          onCancel={handleEditCancel}
        >
          <div className="space-y-3">
            <input
              type="text"
              defaultValue={users.find((u) => u._id === editUserId)?.name}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 focus:border-sky-500 outline-none"
            />
            <input
              type="email"
              defaultValue={users.find((u) => u._id === editUserId)?.email}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 focus:border-sky-500 outline-none"
            />
            <select
              defaultValue={users.find((u) => u._id === editUserId)?.role}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 focus:border-sky-500 outline-none"
            >
              <option>Admin</option>
              <option>Super Admin</option>
              <option>Teacher</option>
            </select>
          </div>
        </EditModal>
      )}

      {/* Delete Modal */}
      {deleteUserId && (
        <DeleteModal
          isOpen={!!deleteUserId}
          title="Delete User"
          message={
            <>
              Are you sure you want to delete this user?
              <div className="pt-4">
                <UserJsonCard
                  user={users.find((u) => u._id === deleteUserId)}
                  idx={users.findIndex((u) => u._id === deleteUserId)}
                />
              </div>
            </>
          }
          onConfirm={confirmDelete}
          onCancel={handleDeleteCancel}
        />
      )}
    </div>
  );
};

export default AdminUser2;

import React, { useState, useEffect } from 'react';

const EditUserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-800"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-800"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <select
            className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-800"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;

import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'teacher',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;
        onAddUser(formData);
        setFormData({ name: '', email: '', role: 'teacher' });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
        >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Create new staff user</h2>

            <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <select
                className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
            </select>

            <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-colors"
            >
                Create User
            </button>
        </form>
    );
};

export default UserForm;

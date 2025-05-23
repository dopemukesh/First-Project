import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your backend endpoint
    axios.get('/v1/students')
      .then(res => {
        setAllUsers(res.data.users || []);
      })
      .catch(err => {
        console.error('Failed to fetch users', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        All users from backend
      </h2>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading users...</p>
      ) : allUsers.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No users found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left border-b pb-2">Name</th>
              <th className="text-left border-b pb-2">Email</th>
              <th className="text-left border-b pb-2">Role</th>
              <th className="text-left border-b pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2 capitalize">{user.role}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 text-sm rounded ${user.active ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                    {user.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsers;

import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';
import AllUsers from './Users/AllUsers';
import Container from '../../../Components/Common/Container/Container';
import EditUserModal from './EditUser/EditUserModal';
import ThemeChange from '../../../Components/Layout/Navbar/ThemeChange';
import { NavLink } from 'react-router-dom';

const SuperAdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (newUser) => {
    const userWithId = { ...newUser, id: Date.now(), active: true };
    setUsers([...users, userWithId]);
  };


  const handleToggleStatus = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };


  const handleEditUser = (user) => {
    setEditingUser(user);
    console.log("Editing user:", user);

  };


  const handleDeleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };



  return (
    <Container>
      <div className="min-h-screen">
        <div className='flex justify-between items-center sticky top-0 py-6 px-4 backdrop-blur-lg'>
          <h1 className="font-bold">SuperAdmin <span className='font-extralight'>Dashboard</span></h1>
          <div className='flex items-center gap-4'>
            <NavLink to={'/'}>Home</NavLink>
            <ThemeChange />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 p-4">
          <UserForm onAddUser={addUser} />
          <UserTable
            users={users}
            onToggleStatus={handleToggleStatus}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
          <AllUsers />
        </div>

        {/* ✅ Render Modal properly here */}
        {editingUser && (
          <EditUserModal
            user={editingUser}
            onClose={() => setEditingUser(null)}
            onSave={(updatedUser) => {
              setUsers(prev =>
                prev.map(u => u.id === updatedUser.id ? { ...u, ...updatedUser } : u)
              );
              setEditingUser(null); // close modal
            }}

          />
        )}
      </div>
    </Container>
  );
};

export default SuperAdminPanel;

import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='admin-dashboard bg-white h-screen flex flex-col justify-center items-center'>
                <div className='text-center py-4 px-6 bg-white shadow-md rounded-lg'>
                    <img src="https://via.placeholder.com/150" alt="Admin Logo" className='w-24 h-24 mb-4' />
                    <h1 className='text-2xl font-semibold text-gray-600'>Welcome to</h1>
                    <h1 className='text-4xl font-bold text-gray-800'>Admin Dashboard</h1>
                    <p className='text-gray-500 mt-2'>Manage your application settings and users from here.</p>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
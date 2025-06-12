import React from 'react';
import ThemeChange from '../../../Components/Layout/Navbar/ThemeChange';
import { NavLink } from 'react-router-dom';

const ProfileHeader = ({ userData, showHeader }) => {
    return (
        <div
            className={`fixed top-0 z-[9999] w-full border-b dark:border-gray-700 transition-all duration-300 ease-in-out ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} bg-white dark:bg-gray-950 backdrop-blur-xl`}
        >
            <div className='flex justify-between items-center px-4 py-2'>
                <div className='flex items-center gap-2'>
                    <div className='h-8 w-8 rounded-full overflow-hidden grid place-content-center'>
                        <img src={userData.avatar} alt="" className='w-full' />
                    </div>
                    <div>
                        <h1 className='text-sm font-semibold'>{userData.name}</h1>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>{userData.username}</p>
                    </div>
                </div>
                <ThemeChange className={'h-9 w-9'} />
            </div>
        </div>
    );
};

export default ProfileHeader;

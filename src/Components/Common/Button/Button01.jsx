// Designed and developed by:
// - Mukesh Yadav

import React from 'react';

const Button = ({
    children,
    onClick,
    className = '',
    type = 'button',
    variant = 'primary',
    disabled = false,
    rounded = 'lg', // Added rounded prop with default value 'lg'
}) => {
    // Define styles for different variants
    const variantClasses = {
        primary: 'bg-teal-500 border-2 border-teal-500 hover:bg-gradient-to-bl from-teal-500 to-teal-600/50 text-gray-900',
        primary01: '',
        secondary: 'border-2 border-gray-800 dark:border-white bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 dark:hover:bg-gray-200',
        outline: 'bg-transparent text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-white',
        danger: 'bg-rose-500 text-white hover:bg-rose-600',
    };

    return (
        <div className='group p-2 rounded-3xl hover:border border-teal-500/30 dark:border-teal-500/10 transition-all duration-700 ease-in-out'>
            <div className='p-2 rounded-2xl hover:border border-teal-500/30 transition-all duration-500 ease-in-out '>
                <button
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={`group-hover:shadow-xl group-hover:shadow-teal-500/50 flex gap-2 items-center justify-center h-12 lg:h-10 px-6 rounded-xl whitespace-nowrap active:scale-95 transition-all duration-500 lg:text-sm font-medium ${variantClasses[variant] || variantClasses.primary} 
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`} >
                    {children}
                </button>
            </div>
        </div>
    );
};

export default Button;

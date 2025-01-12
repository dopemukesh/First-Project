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
}) => {
    // Define styles for different variants
    const variantClasses = {
        primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:bg-gradient-to-l',
        secondary: 'bg-gray-800 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900 dark:hover:bg-gray-200',
        outline: 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white',
        danger: 'bg-rose-500 text-white hover:bg-rose-600',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`flex gap-2 items-center justify-center px-4 py-2 rounded-md whitespace-nowrap active:scale-95 ${variantClasses[variant] || variantClasses.primary
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

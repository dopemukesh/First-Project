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
        primary: 'bg-gradient-to-t border-2 border-purple-500 from-purple-500 to-purple-600 text-white hover:bg-gradient-to-l',
        secondary: 'border-2 border-gray-900 dark:border-white bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-300 text-white dark:text-gray-900 dark:hover:bg-gray-200',
        outline: 'bg-transparent text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white',
        danger: 'bg-rose-500 text-white hover:bg-rose-600',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`flex gap-2 items-center justify-center px-4 py-2 rounded-md whitespace-nowrap active:scale-95 transition-all duration-500 text-sm font-medium ${variantClasses[variant] || variantClasses.primary
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

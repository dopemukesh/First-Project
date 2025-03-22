import React from 'react';

// Button Component
export const Button = ({
    children,
    onClick,
    className = '',
    type = 'button',
    variant = 'primary',
    disabled = false,
    rounded = 'lg', // Default value for rounded
}) => {
    // Define styles for different variants
    const variantClasses = {
        primary: 'bg-teal-500 border-2 border-teal-500 hover:bg-gradient-to-bl from-teal-500 to-teal-600/50 text-gray-900 ',
        secondary: 'border-2 border-gray-800 dark:border-white bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 dark:hover:bg-gray-200',
        outline: 'bg-transparent text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-white',
        danger: 'bg-rose-500 text-white hover:bg-rose-600',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`flex gap-2 items-center justify-center h-12 lg:h-10 px-6 rounded-${rounded} whitespace-nowrap active:scale-95 transition-all duration-500 lg:text-sm font-medium 
        ${variantClasses[variant] || variantClasses.primary} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
        ${className}`}
        >
            {children}
        </button>
    );
};

// Button01 Component (with an outer wrapper and hover effect)
export const Button01 = ({
    children,
    onClick,
    className = '',
    type = 'button',
    variant = 'primary',
    disabled = false,
    rounded = '', // Default value for rounded
}) => {
    // Define styles for different variants (same as Button, if needed)
    const variantClasses = {
        primary: 'bg-teal-500 border-2 border-teal-500 hover:bg-gradient-to-bl from-teal-500 to-teal-600/50 text-gray-900 '
    };

    return (
        <div className={`p-2 rounded-${rounded || '3xl'} border border-teal-500/30 dark:border-teal-500/10 transition-all duration-200 ease-in-out`}>
            <div className={`p-2 rounded-${rounded || '2xl'} border border-teal-500/30 transition-all duration-100 ease-in`}>
                <button
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={`shadow-xl  shadow-teal-500/50 hover:shadow-xl hover:shadow-teal-500/80 flex gap-2 items-center justify-center h-12 lg:h-10 px-6 rounded-${rounded || 'lg'} whitespace-nowrap active:scale-95 transition-all duration-500 lg:text-sm font-medium 
                    ${variantClasses.primary} 
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
                    ${className}`} >
                    {children}
                </button>
            </div>
        </div>
    );
};

// Optional: Uncomment if you want to export a default button
// export default Button;

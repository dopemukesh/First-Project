/* eslint-disable react/prop-types */
// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import { Link } from "react-router-dom";

// Button Component
export const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  rounded = "",
  to, // 👈 Added "to" prop for navigation support
}) => {
  const variantClasses = {
    primary:
      "bg-teal-600 dark:bg-teal-500 text-white dark:text-gray-900 border border-teal-700 dark:border-teal-400 hover:bg-gradient-to-bl from-teal-500 to-teal-600/50",
    secondary:
      "border-2 border-gray-800 dark:border-white bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900",
    tertiary:
      "bg-purple-500 text-white border border-purple-400 hover:bg-gradient-to-bl from-purple-400 to-purple-600/50",
    outline:
      "bg-transparent text-gray-800 dark:text-gray-300 border border-gray-800 dark:border-gray-300 hover:bg-white/20 dark:hover:bg-gray-900",
    danger:
      "bg-red-500 text-white hover:bg-red-600 border border-red-600",
    warning:
      "bg-amber-500 text-white hover:bg-amber-600 border border-amber-600 dark:border-amber-400",
    success:
      "bg-emerald-500 text-white hover:bg-emerald-600 border border-emerald-600 dark:border-emerald-400",
    info:
      "bg-blue-500 text-white hover:bg-blue-600 border border-blue-600 dark:border-blue-400",
  };

  const sizeClasses = {
    xs: "px-2 py-1 rounded-md text-[10px] ",
    ssm: "h-9 px-4 py-1.5 rounded-lg text-sm gap-2",
    sm: `h-10 px-4 py-2 rounded-${rounded || 'lg'} text-sm gap-2`,
    md: "h-11 px-5 py-2.5 rounded-[10px] text-base gap-2",
    lg: "h-12 px-6 py-3 rounded-xl gap-2",
    xl: "h-14 px-7 py-3.5 rounded-xl text-xl gap-3",
  };

  const commonClasses = `flex ${sizeClasses[size] || sizeClasses.md
    } items-center justify-center gap-2 rounded-${rounded} whitespace-nowrap ${!disabled && "active:scale-95"
    } transition-all duration-500 font-medium ${variantClasses[variant] || variantClasses.primary
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  // ✅ If "to" is provided, use <Link> instead of <button>
  if (to) {
    return (
      <Link to={to} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={commonClasses}
    >
      {children}
    </button>
  );
};

// Button01 Component with size support and cleaner code
export const Button01 = ({
  children,
  onClick,
  className = "",
  type = "button",
  size = "md",
  disabled = false,
  rounded = "",
  to, // 👈 Added "to" prop
}) => {
  const variantClass =
    "bg-teal-500 border-2 border-teal-500 hover:bg-gradient-to-bl from-teal-500 to-teal-600/50 text-gray-900";

  const sizeClasses = {
    ssm: "h-9 px-4 py-2 rounded-lg text-sm gap-2",
    sm: "h-10 px-4 py-2 text-sm gap-2",
    md: "h-11 px-5 py-2.5 text-base gap-2",
    lg: "h-13 px-6 py-3 gap-2",
    xl: "h-14 px-7 py-3.5 text-xl gap-3",
  };

  const commonClasses = `shadow-xl shadow-teal-500/50 hover:shadow-xl hover:shadow-teal-500/80 flex items-center justify-center rounded-${rounded || "lg"
    } whitespace-nowrap active:scale-95 transition-all duration-500 font-medium ${sizeClasses[size] || sizeClasses.md
    } ${variantClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""
    } ${className}`;

  // ✅ Agar "to" prop hai, toh <Link> use karega
  const ButtonElement = to ? (
    <Link to={to} className={commonClasses}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={commonClasses}
    >
      {children}
    </button>
  );

  return (
    <div className="p-2 rounded-3xl w-fit border border-teal-500/30 dark:border-teal-500/10 transition-all duration-200 ease-in-out">
      <div className="p-2 rounded-2xl border border-teal-500/30 transition-all duration-100 ease-in">
        {ButtonElement}
      </div>
    </div>
  );
};

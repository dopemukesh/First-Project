/* eslint-disable react/prop-types */
import React from "react";

// Button Component
export const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  rounded = "lg",
}) => {
  const variantClasses = {
    primary:
      "bg-teal-500 border-2 border-teal-500 hover:bg-gradient-to-bl from-teal-500 to-teal-600/50 text-gray-900",
    secondary:
      "border-2 border-gray-800 dark:border-white bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900",
    outline:
      "bg-transparent text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-white",
    danger: "bg-rose-500 text-white hover:bg-rose-600",
  };

  const sizeClasses = {
    sm: "h-10 px-4 py-2 rounded-lg text-sm gap-2",
    md: "h-11 px-5 py-2.5 rounded-[10px] text-base gap-2",
    lg: "h-13 px-6 py-3 rounded-xl gap-2",
    xl: "h-14 px-7 py-3.5 rounded-xl text-xl gap-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex ${
        sizeClasses[size] || sizeClasses.md
      } items-center justify-center rounded-${rounded} whitespace-nowrap active:scale-95 transition-all duration-500 font-medium 
        ${variantClasses[variant] || variantClasses.primary} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
        ${className}`}
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
}) => {
  const variantClass =
    "bg-teal-500 border-2 border-teal-500 hover:bg-gradient-to-bl from-teal-500 to-teal-600/50 text-gray-900";

  const sizeClasses = {
    sm: "h-10 px-4 py-2 text-sm gap-2",
    md: "h-11 px-5 py-2.5 text-base gap-2",
    lg: "h-13 px-6 py-3 gap-2",
    xl: "h-14 px-7 py-3.5 text-xl gap-3",
  };

  return (
    <div
      className={`p-2 rounded-${
        rounded || "3xl"
      } w-fit border border-teal-500/30 dark:border-teal-500/10 transition-all duration-200 ease-in-out`}
    >
      <div
        className={`p-2 rounded-${
          rounded || "2xl"
        } border border-teal-500/30 transition-all duration-100 ease-in`}
      >
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`shadow-xl shadow-teal-500/50 hover:shadow-xl hover:shadow-teal-500/80 flex items-center justify-center rounded-${
            rounded || "lg"
          } whitespace-nowrap active:scale-95 transition-all duration-500 font-medium 
            ${sizeClasses[size] || sizeClasses.md} 
            ${variantClass} 
            ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
            ${className}`}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

// Optional default export
// export default Button;

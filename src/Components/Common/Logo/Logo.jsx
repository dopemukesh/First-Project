import React from "react";

const Logo = ({ children, className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center w-fit h-6">
        {/* Light Mode Logo */}
        <img
          src="/logo/cwtLogo-animatedColor.svg"
          alt="site-logo"
          className="block dark:hidden w-full h-6"
        />

        {/* Dark Mode Logo */}
        <img
          src="/logo/cwtLogo-animatedColor.svg" // <-- Change to your dark mode logo
          alt="site-logo-dark"
          className="hidden dark:block w-full h-6"
        />
      </div>

      {children}
    </div>
  );
};

export default Logo;

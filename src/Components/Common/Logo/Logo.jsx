import React from "react";

const Logo = ({ children, className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-8">
        {/* Light Mode Logo */}
        <img
          src="/logo/cwtLogo-animatedColor.svg"
          alt="site-logo"
          className="block dark:hidden w-full h-full"
        />

        {/* Dark Mode Logo */}
        <img
          src="/logo/cwtLogo-animatedColor.svg" // <-- Change to your dark mode logo
          alt="site-logo-dark"
          className="hidden dark:block w-full h-full"
        />
      </div>

      {children}
    </div>
  );
};

export default Logo;

// Designed and developed by:
// - Mukesh Yadav

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] grid place-items-center h-screen w-screen bg-white dark:bg-gray-950 transition-opacity duration-1000 ease-out"
      style={{ opacity }}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="./logo/cwtyelow-light-logo.svg"
            alt="Loading..."
            className="h-12"
          />
          {/* Add a glow effect behind the logo */}
          <div className="absolute inset-0 bg-yellow-500 opacity-50 blur-xl rounded-full animate-ping"></div>
        </div>
        <div className="mt-4 relative overflow-hidden">
          {/* Animated loading dots */}
          <div className="flex justify-center items-center h-8 p-2">
            <span
              className="h-2 w-2 bg-yellow-500 rounded-full mx-1 animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></span>
            <span
              className="h-3 w-3 bg-yellow-500 rounded-full mx-1 animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              className="h-2 w-2 bg-yellow-500 rounded-full mx-1 animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></span>
          </div>
          <p className="font-semibold text-sm animate-fadeIn">
            Code With Techries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;

export const LogoLoader = () => {
  return (
    <svg
      width="48"
      height="56"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="animate-bounce"
        style={{ animationDelay: "0ms" }}
        d="M43.0917 28.5015C44.2633 29.673 44.2633 31.5725 43.0917 32.7441L38.8491 36.9867C37.6775 38.1583 35.778 38.1583 34.6065 36.9867L30.3638 32.7441C29.1922 31.5725 29.1922 29.673 30.3638 28.5015L34.6065 24.2588C35.778 23.0873 37.6775 23.0873 38.8491 24.2588L43.0917 28.5015Z"
        fill="url(#paint0_linear_27_99)"
      />
      <path
        className="animate-bounce"
        style={{ animationDelay: "100ms" }}
        d="M33.1922 18.602C34.3638 19.7735 34.3638 21.673 33.1922 22.8446L26.1212 29.9157C24.9496 31.0873 23.0501 31.0873 21.8785 29.9157L14.8075 22.8446C13.6359 21.673 13.6359 19.7735 14.8075 18.602L21.8785 11.5309C23.0501 10.3593 24.9496 10.3593 26.1212 11.5309L33.1922 18.602Z"
        fill="url(#paint1_linear_27_99)"
      />
      <path
        className="animate-bounce"
        style={{ animationDelay: "150ms" }}
        d="M17.6359 28.5015C18.8075 29.673 18.8075 31.5725 17.6359 32.7441L13.3933 36.9867C12.2217 38.1583 10.3222 38.1583 9.15062 36.9867L4.90798 32.7441C3.7364 31.5725 3.7364 29.673 4.90798 28.5015L9.15062 24.2588C10.3222 23.0873 12.2217 23.0873 13.3933 24.2588L17.6359 28.5015Z"
        fill="url(#paint2_linear_27_99)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_27_99"
          x1="4.0293"
          y1="10.6522"
          x2="29.3552"
          y2="47.8233"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2CFBCD" />
          <stop offset="1" stopColor="#107C76" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_27_99"
          x1="4.0293"
          y1="10.6522"
          x2="29.3552"
          y2="47.8233"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2CFBCD" />
          <stop offset="1" stopColor="#107C76" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_27_99"
          x1="4.0293"
          y1="10.6522"
          x2="29.3552"
          y2="47.8233"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2CFBCD" />
          <stop offset="1" stopColor="#107C76" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import Container from "../../Components/Common/Container/Container";
import projectData from "../../api/ProjectDetails.json";
import { Button } from "../../Components/Common/Button/Button";
import { Navigate } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto flex items-center justify-center bg-gray-50 dark:bg-gray-950 h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            This is the Resource Page
          </h1>
          <p className="text-gray-800 dark:text-white">
            Here you can add your resources
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;

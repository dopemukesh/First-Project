import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectHeroSection from "./Hero/ProjectHeroSection";
import Container from "../../Components/Common/Container/Container";
import { Button } from "../../Components/Common/Button/Button";
import projectData from "../../api/ProjectDetails.json";
import SkillsSection from "../Courses/SkillsSection/SkillsSection";

/**
 * Projects Component
 * This component displays a list of projects with their details.
 */

const Projects = () => {
  const navigate = useNavigate();
  // Extract projects data with a default empty array.
  const { projects = [] } = projectData;

  // If there are no projects, return null.
  if (!projects?.length) {
    return null;
  }

  return (
    <>
      {/* Hero section of the projects page */}
      <ProjectHeroSection />
      <Container>
        <div className="px-4 pb-6">
          <div className="mb-10 space-y-2">
            <p className="text-sm text-teal-600 dark:text-teal-500 font-semibold">Featured</p>
            <h2 className="text-2xl font-semibold">Our Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of the projects that we have worked on.
            </p>
          </div>
        </div>
      </Container>
      <SkillsSection cardType="projectCard" topHeader="Our Projects" parentRoute={'projects'} />
    </>
  );
};

export default Projects;

import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectHeroSection from "./Hero/ProjectHeroSection";
import Container from "../../Components/Common/Container/Container";
import { Button } from "../../Components/Common/Button/Button";
import projectData from "../../api/ProjectDetails.json";

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
            <p className="text-sm text-teal-500 font-semibold">Featured</p>
            <h2 className="text-2xl font-semibold">Our Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of the projects that we have worked on.
            </p>
          </div>

          {/* Grid layout for displaying project cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
            {projects.map((project) => {
              // Skip rendering if project ID is not available.
              if (!project.id) {
                return null;
              }

              return (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-md p-5 h-fit shadow-xl border border-gray-300/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="bg-blue-600 overflow-hidden h-44 my-2 rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-col justify-between h-40">
                    <p className="text-gray-500 dark:text-gray-400 my-2">
                      {project.description.split(" ").slice(0, 12).join(" ") +
                        "..."}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* User profile details of project owner. */}
                      <div className="flex items-center gap-2 cursor-pointer">
                        <div className="flex items-center gap-2 bg-gray-300 dark:bg-gray-00 h-10 w-10 overflow-hidden rounded-full">
                          <img
                            src={project.userImage}
                            alt={project.userName}
                            className="w-12 h-12 scale-105"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-gray-800 dark:text-gray-400">
                            {project.userName || "Unknown"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {project.userRole || "Not Specified"}
                          </p>
                        </div>
                      </div>

                      {/* Button to navigate to project details */}
                      <Button
                        to={`details/${project.id}`}
                        variant="secondary"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;

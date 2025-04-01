import React from "react";
import Container from "../../../Components/Common/Container/Container";
import projects from "../../../api/ProjectShowCase.json";
import ProgramCarousel from "./ProgramCarousel";

const FeaturedPrograms = () => {
  return (
    <>
      <Container className="py-14 z-10 relative">
        <div className="px-4">
          <div className="flex flex-col items-center text-center mb-8 gap-4">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
              FEATURED PROGRAMS
            </h3>
            <h2 className="text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl">
              Explore Our Latest{" "}
              <span className="text-teal-600 dark:text-teal-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Check out some of our best work created by our talented community
              members
            </p>
          </div>

          <div className="flex justify-center py-8">
            <ProgramCarousel projects={projects} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FeaturedPrograms;

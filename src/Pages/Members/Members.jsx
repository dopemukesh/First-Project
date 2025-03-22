// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import { Button, Button01 } from "../../Components/Common/Button/Button";
import Container from "../../Components/Common/Container/Container";
import MemberCard from "./MemberCard";
import { NavLink, useNavigate } from "react-router-dom";
import projectData from '../../api/ProjectDetails.json';

const Members = () => {
  const { projects } = projectData;
  const navigate = useNavigate();

  return (
    <>
      <Container>

        {/* top hero section contents */}
        <div className="py-28 h-fit flex flex-col gap-8 justify-center items-center">
          <h1 className="text-4xl lg:leading-[72px] lg:text-[64px] font-bold text-center text-gray-950 dark:text-white">
            Your Brand Deserves a Best Developer
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
            We provide creativity and insight to deliver best website with best developers
          </p>

          {/* cta buttons */}
          <div className="flex gap-4 items-center">
            <NavLink to="/projects">
              <Button variant="secondary" className="w-fit">
                See Projects
              </Button>
            </NavLink>

            <NavLink to="">
              <Button01 className="w-fit">
                Book a Meet
              </Button01>
            </NavLink>
          </div>
        </div>
      </Container>

      {/* members display section */}
      <Container className="py-14">
        <h1 className="text-3xl font-bold text-center">Website Managers</h1>

        {/* members display grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          <MemberCard />
        </div>
      </Container>

      {/* contributors display section */}
      <Container className="py-14">

        {/* members display grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center px-4">
          <div>
            <p className='text-sm text-purple-500 font-semibold'>Our Contributors</p>
            <p className='my-4 text-3xl font-semibold'>That contributed, <br /> to our website</p>
            <p className='text-gray-500 max-w-2xl'>
              Meet the talented individuals whose efforts and expertise have helped shape and elevate our website. Their contributions have been invaluable to our success.
            </p>
          </div>

          <div className="px-4">
            <MemberCard />
          </div>
        </div>
      </Container>

      <Container className="py-14">

        {/* members display grid */}
        <div className="grid grid-cols gap-4 px-4">
          <div>
            <p className='text-sm text-purple-500 font-semibold'>Project Glymphs</p>
            <p className='my-4 text-3xl font-semibold'>Here is projects, of our members</p>
            <p className='text-gray-500 max-w-2xl'>
              Discover the innovative projects crafted by our talented members. Each project showcases creativity, skill, and dedication.
            </p>
          </div>

          {/* Here we have to show the projects images  */}
          <div className="px-4 mb-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((item) => (
                  <div key={item.id} className="bento-item relative group cursor-pointer flex justify-center items-center w-full h-44 overflow-hidden border border-gray-300 dark:border-gray-800 rounded-xl hover:shadow-xl transition-all duration-300">
                    <img
                      src={item.image}
                      className="h-fit scale-125"
                    />
                    <div className="absolute hidden group-hover:block bg-teal-950/20 backdrop-blur-md w-full h-full justify-center items-center">
                      <div className="w-full h-full grid place-content-center">
                        <NavLink to={item.demoLink}>
                          <Button01>Preview</Button01>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Members;
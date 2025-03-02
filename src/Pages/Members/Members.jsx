// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import Button from "../../Components/Common/Button/Button";
import Container from "../../Components/Common/Container/Container";
import GradientsBg from "../../Components/Common/Gradients/GradientsBg";
import TopAsset from "./asset-component/TopAsset";
import MemberCard from "./MemberCard";
import { NavLink } from "react-router-dom";

const Members = () => {
  return (
    <>
      <Container className="bg-gradient-to-bl from-purple-50 via-lime-50/50 to-sky-50 dark:bg-gradient-to-r dark:from-transparent dark:via-white/5 dark:to-transparent">

        {/* top hero section contents */}
        <div className="py-28 h-fit flex flex-col gap-8 justify-center items-center">
          <h1 className="text-4xl lg:leading-[72px] lg:text-[64px] font-bold text-center text-gray-950 dark:text-white">
            Your Brand Deserves a Best Developer
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
            We provide creativity and insight to deliver best website with best developers
          </p>

          {/* cta buttons */}
          <div className="flex gap-4">
            <NavLink to="/projects">
              <Button variant="secondary" className="w-fit">
                See Projects
              </Button>
            </NavLink>

            <NavLink to="">
              <Button className="w-fit">
                Book a Meet
              </Button>
            </NavLink>
          </div>
        </div>
      </Container>

      {/* members display section */}
      <Container className="py-14 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-900">Website Managers</h1>

        {/* members display grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          <MemberCard />
        </div>
      </Container>

      {/* contributors display section */}
      <Container className="bg-white">

        {/* members display grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center px-4">
          <div>
            <p className='text-sm text-purple-500 font-semibold'>Our Contributors</p>
            <p className='my-4 text-3xl text-gray-900 font-semibold'>That contributed, <br /> to our website</p>
            <p className='text-sm text-gray-600 max-w-xl'>
              Meet the talented individuals whose efforts and expertise have helped shape and elevate our website. Their contributions have been invaluable to our success.
            </p>
          </div>

          <div className="px-4">
            <MemberCard />
          </div>
        </div>
      </Container>

      <Container className="bg-white">

        {/* members display grid */}
        <div className="grid grid-cols gap-4 px-4">
          <div>
            <p className='text-sm text-purple-500 font-semibold'>Project Glymphs</p>
            <p className='my-4 text-3xl text-gray-900 font-semibold'>Here is projects, of our members</p>
            <p className='text-sm text-gray-600 max-w-xl'>
              Discover the innovative projects crafted by our talented members. Each project showcases creativity, skill, and dedication.
            </p>
          </div>

          {/* Here we have to show the projects images  */}
          <div className="px-4 mb-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bento-item w-full h-44 border border-gray-300 hover:border-gray-400 rounded-xl bg-gray-100 hover:bg-gray-300 hover:shadow-xl transition-all duration-300">
                  <p className="text-center text-gray-700 font-semibold pt-16">Project image 1</p>
                </div>
                <div className="bento-item w-full h-44 border border-gray-300 hover:border-gray-400 rounded-xl bg-gray-100 hover:bg-gray-300 hover:shadow-xl transition-all duration-300">
                  <p className="text-center text-gray-700 font-semibold pt-16">Project image 2</p>
                </div>
                <div className="bento-item w-full h-44 border border-gray-300 hover:border-gray-400 rounded-xl bg-gray-100 hover:bg-gray-300 hover:shadow-xl transition-all duration-300">
                  <p className="text-center text-gray-700 font-semibold pt-16">Project image 3</p>
                </div>
                <div className="bento-item w-full h-44 border border-gray-300 hover:border-gray-400 rounded-xl bg-gray-100 hover:bg-gray-300 hover:shadow-xl transition-all duration-300">
                  <p className="text-center text-gray-700 font-semibold pt-16">Project image 4</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>

    </>
  );
};

export default Members;
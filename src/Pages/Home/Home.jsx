// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import Container from "../../Components/Common/Container/Container";
import { Button, Button01 } from "../../Components/Common/Button/Button";
import socialData from "../../api/SocialData.json";
import projects from "../../api/ProjectShowCase.json";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container className="h-[456px] md:h-[556px] items-center">
        <div className="flex flex-col items-center">
          <div className="group cursor-default font-medium flex items-center gap-4 text--900 bg-secondary/20 py-2 px-4 rounded-full border border-secondary">
            <div className="grid place-content-center">
              <img
                src="shape01.svg"
                alt=""
                className="h-5 group-hover:animate-spin"
              />
            </div>
            <p>Learners to Leaders</p>
          </div>
          <div className="flex flex-col my-8 space-y-6 items-center">
            <h1 className="text-4xl lg:text-6xl font-bold md:font-semibold text-center max-w-2xl leading-tight">
              Transform Your Tech Career with{" "}
              <span className="text-teal-500">&quot;CWT&quot;</span>
            </h1>
            <p className="px-4 text-gray-500 dark:text-gray-400 text-center">
              Master in-demand skills, contribute to real projects, and connect
              with top techies, all in one community-driven platform
            </p>
          </div>
          <NavLink to='/signup'>
            <Button01>Get Started</Button01>
          </NavLink>
        </div>
      </Container>

      <Container className="relative">
        <img
          src="bg-gradient.png"
          alt=""
          className="absolute -z-10 left-0 w-full h-full blur-[86px] md:blur-[156px]"
        />
        <div className="z-10 flex flex-col items-center overflow-hidden rounded-2xl p-2 mb-14 bg-white/5">
          <div className="rounded-xl overflow-hidden border-8 border-white/10">
            <img
              src="./images/vsCode-project.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </Container>

      <Container className="py-14 bg-gradient-to-t from-white to-transparent backdrop-blur-md dark:bg-gradient-to-t dark:from-gray-950 dark:to-transparent">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
            COMMUNITY
          </p>
          <p className="my-4 text-2xl md:text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl">
            Our Community Empowers Innovators to
            <span className="text-emerald-400">
              {" "}
              Connect, Learn, and Grow Together
            </span>
          </p>
          <p className="my-8 text-gray-500 dark:text-gray-400">
            Trusted and loved by over{" "}
            <span className="dark:text-white text-gray-800 font-medium">
              22,000+ peoples on instagram
            </span>
          </p>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row  gap-4 justify-center items-center">
          {socialData.map((data, index) => (
            <div
              key={index}
              className="cursor-default bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 hover:scale-105 hover:z-10 transition-all duration-700 ease-in-out p-6 rounded-2xl w-80 flex flex-col gap-4"
            >
              <h2 className="text-emerald-400 text-4xl font-semibold drop-shadow-[0px_0px_30px_#34D399]">
                {data.socialNumbers}
              </h2>
              <h3 className="text-xl font-semibold">{data.socialMedia}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {data.socialDescription}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="py-14 z-10 relative overflow-hidden">
        {/* <div className='bg-gradient-to-r from-emerald-500 to-transparent absolute rotate-12 md:-rotate-45 h-14 w-[2000px] top-0 -z-10 blur-[156px]'></div> */}
        <div className="px-4">
          <div className="flex flex-col items-center text-center mb-8 gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
              FEATURED PROJECTS
            </p>
            <p className="text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl">
              Explore Our Latest{" "}
              <span className="text-emerald-400">Projects</span>
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Check out some of our best work created by our talented community
              members
            </p>
          </div>

          <div className="flex md:flex-row flex-col items-center md:items-start gap-4">
            {projects.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer flex flex-col flex-1 w-96 p-2 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl group"
              >
                <div className="h-56 md:h-40 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full origin-center group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-800 dark:text-white font-medium">
                    {item.title}
                  </h3>
                  <p className="my-1 text-sm text-gray-500">
                    {item.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

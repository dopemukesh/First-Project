// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import { Button, Button01 } from "../../Components/Common/Button/Button";
import Container from "../../Components/Common/Container/Container";
import MemberCard, { MemberAvatar } from "./MemberCard";
import { NavLink, useNavigate } from "react-router-dom";
import projectData from "../../api/ProjectDetails.json";
import ContributorsList from "../../Components/ContributorsList/ContributorsList";

const Community = () => {
  const { projects } = projectData;
  const navigate = useNavigate();

  return (
    <>
      <Container>
        {/* top hero section contents */}
        <div className="py-28 h-full md:min-h-[656px] flex flex-col gap-8 justify-center items-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl md:leading-tight max-w-4xl font-semibold text-center">
            Join CodeWithTechries, The Ultimate Developer Network
          </h1>
          <div className="text-center text-gray-500 dark:text-gray-400 max-w-lg">
            <b className="text-gray-800 dark:text-gray-200">
              Collaborate, Contribute, Get Hired
            </b>
            <p>
              A thriving community where developers build real-world projects,
              upskill, and connect with top recruiters.
            </p>
          </div>

          {/* cta buttons */}
          <div className="flex gap-4 items-center">
            <Button01 to="/projects">Join Community</Button01>
            <Button variant="outline">Explore now</Button>
          </div>
          {/* <p>&quot;Code, Collaborate, Create&quot;</p> */}
        </div>
      </Container>
      <div className="w-full h-28 bg-gradient-to-r from-pink-500  via-teal-500 to-pink-500 blur-[96px] md:blur-[196px]"></div>

      {/* members display section */}
      <Container className="pb-14">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Meet Our Developers</h1>
          <h3 className="text-gray-500 ">
            CodeWithTechries is home to talented developers worldwide.
          </h3>
        </div>
      </Container>

      {/* contributors display section */}
      <Container className="py-14">
        {/* members display grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center px-4">
          <div>
            <p className="text-sm text-purple-500 font-semibold">
              Our Contributors
            </p>
            <p className="my-4 text-3xl font-semibold">
              That contributed, <br /> to our website
            </p>
            <p className="text-gray-500 max-w-2xl">
              Meet the talented individuals whose efforts and expertise have
              helped shape and elevate our website. Their contributions have
              been invaluable to our success.
            </p>
          </div>

          {/* members display according to contributionType = Contributor */}
          <div className="px-4 h-fit">
            <MemberAvatar filters={{ contributionType: "Contributor" }} />
          </div>
        </div>
      </Container>

      <Container className="py-14">
        {/* projects display grid */}
        <div className="grid grid-cols gap-4 px-4">
          <div>
            <p className="text-sm text-purple-500 font-semibold">
              Project Glymphs
            </p>
            <p className="my-4 text-3xl font-semibold">
              Here is projects, of our members
            </p>
            <p className="text-gray-500 max-w-2xl">
              Discover the innovative projects crafted by our talented members.
              Each project showcases creativity, skill, and dedication.
            </p>
          </div>

          {/* Here we have to show the projects images  */}
          <div className="px-4 mb-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((item) => (
                  <div
                    key={item.id}
                    className="bento-item relative group cursor-pointer flex justify-center items-center w-full h-44 overflow-hidden border border-gray-300 dark:border-gray-800 rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    <img src={item.image} className="h-fit scale-125" />
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

export default Community;

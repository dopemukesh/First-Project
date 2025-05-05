// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import { Button, Button01 } from "../../Components/Common/Button/Button";
import Container from "../../Components/Common/Container/Container";
import SpaceCommunity from "./SpaceTheme/SpaceCommunity";

const Community = () => {

  return (
    <>
      <Container>
        {/* top hero section contents */}
        <div className="py-28 h-full md:min-h-[656px] flex flex-col gap-8 justify-center items-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl md:leading-tight max-w-4xl font-semibold text-center">
            Join
            <span className="text-teal-600 font-mono dark:text-teal-500"> {'<CodeWithTechries>'}</span>
            , The Ultimate Developer Network
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
      {/* <div className="absolute w-full h-36 -z-10 bg-gradient-to-r from-pink-500  via-teal-500 to-pink-500 blur-[96px] md:blur-[196px] opacity-50 md:opacity-100"></div> */}

      {/* members display section can be added here from .txt file */}


      {/* space theme community components */}
      <SpaceCommunity />

    </>
  );
};

export default Community;


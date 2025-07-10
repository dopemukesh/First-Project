// Designed and developed by:
// - Mukesh Yadav

import React, { useEffect, useRef, useState } from "react";
import { Button, Button01 } from "../../Components/Common/Button/Button";
import Container from "../../Components/Common/Container/Container";
import SpaceCommunity from "./SpaceTheme/SpaceCommunity";
import { useInView } from "framer-motion";
// import Podcasts from "../Home/Podcasts/Podcasts";
import LeaderboardCard from "../Home/LeaderBoardAndCommunity/LeaderboardCard";

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(user.isLoggedIn);
    }
  }, []);

  const renderButton = () => {
    if (isLoggedIn) {
      return (
        <>
          <a href='#explore-community'><Button01 >Explore now</Button01></a>
          <Button variant="outline2" to="/classes" className="w-fit">See classes</Button>
        </>
      );
    }
    return <Button01 to="/register">Join Community</Button01>;
  };

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
            <div id="joinCommunity" className="flex gap-4 items-center">
              {renderButton()}
            </div>
            {/* <Button variant="outline">Explore now</Button> */}
          </div>
          {/* <p>&quot;Code, Collaborate, Create&quot;</p> */}
        </div>
      </Container>
      <div className="absolute w-full h-36 -z-10 dark:bg-gradient-to-r dark:from-sky-500  dark:via-teal-500 dark:to-sky-500 blur-[96px] md:blur-[196px] opacity-50 md:opacity-100"></div>

      {/* members display section can be added here from .txt file */}


      {/* space theme community components */}
      <SpaceCommunity />
      {/* <LeaderBoardAndCommunity /> */}
      <Container className="mb-14">
        <div className="px-4">
          {/* Title */}
        <div className="flex flex-col items-center text-center mb-8 gap-4">
          <h2 className="text-2xl md:text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl">
            Developers Leaderboard
          </h2>
        </div>
        <LeaderboardCard refProp={ref} isInView={isInView} />
        </div>

      </Container>


    </>
  );
};

export default Community;


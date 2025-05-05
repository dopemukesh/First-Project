// Designed and developed by:
// - Mukesh Yadav

import React, { useEffect, useState } from "react";
import { Button, Button01 } from "../../Components/Common/Button/Button";
import Container from "../../Components/Common/Container/Container";
import SpaceCommunity from "./SpaceTheme/SpaceCommunity";

const Community = () => {
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
          <a href='#explore-community'><Button01 >Start Exploring 👇🏻</Button01></a>
          <Button variant="outline" to="/classes" className="w-fit">See Classes</Button>
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

    </>
  );
};

export default Community;


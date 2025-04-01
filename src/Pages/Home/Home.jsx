/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React, { useRef } from "react";
import SocialStats from "./SocialStats/SocialStats";
import HeroUI from "./Hero/HeroUI";
import LeaderBoardAndCommunity from "./LeaderBoardAndCommunity/LeaderBoardAndCommunity";
import { useInView } from "motion/react";
import RealWorldChallenge from "./Promotion/RealWorldChallenge";
import FeaturedPrograms from "./Featured Programs/FeaturedPrograms";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <HeroUI />
      <SocialStats />
      <FeaturedPrograms />
      <LeaderBoardAndCommunity refProp={ref} isInView={isInView} />
      <RealWorldChallenge refProp={ref} isInView={isInView} />
    </>
  );
};

export default Home;

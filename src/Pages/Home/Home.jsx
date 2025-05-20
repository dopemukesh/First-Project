/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React from "react";
import SocialStats from "./SocialStats/SocialStats";
import HeroUI from "./Hero/HeroUI";
import LeaderBoardAndCommunity from "./LeaderBoardAndCommunity/LeaderBoardAndCommunity";
import FeaturedPrograms from "./Featured Programs/FeaturedPrograms";
import PWAInstallBanner from "../../Components/Common/PWAInstaller/PWAInstallBanner";

const Home = () => {

  return (
    <>
      <HeroUI />
      <PWAInstallBanner />
      <SocialStats />
      <FeaturedPrograms />
      <LeaderBoardAndCommunity />
    </>
  );
};

export default Home;

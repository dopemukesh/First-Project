import React, { useRef } from "react";
import { useInView } from "framer-motion";
import earth from "../../../assets/earth4.png";
import Container from "../../../Components/Common/Container/Container";
import LeaderboardCard from "./LeaderboardCard";
import Podcasts from "../Podcasts/Podcasts";

const LeaderBoardAndCommunity = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Container className="py-14 z-10 relative overflow-hidden">
      <img
        src={earth}
        alt={earth}
        className="absolute top-0 left-0 z-[-1] w-full"
      />
      <div className="px-4">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl">
            Real-World Projects
          </h2>
          <p className="md:text-lg text-gray-500 dark:text-gray-400">
            A platform to explore and contribute to innovative real-world
            projects.
          </p>
        </div>

        {/* Leaderboard Card */}
        <LeaderboardCard refProp={ref} isInView={isInView} />

        {/* Podcast Section */}
        {/* <Podcasts refProp={ref} isInView={isInView} /> */}

      </div>
    </Container>
  );
};

export default LeaderBoardAndCommunity;

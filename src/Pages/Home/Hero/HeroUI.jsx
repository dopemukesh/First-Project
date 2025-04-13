import React from "react";
import { Button01 } from "../../../Components/Common/Button/Button";
import Container from "../../../Components/Common/Container/Container";
import { motion } from "motion/react";

const HeroUI = () => {
  return (
    <>
      <Container className="h-[456px] md:h-[556px] items-center">
        <div className="flex flex-col items-center">
          <div className="group cursor-default font-medium flex items-center gap-4 text--900 bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 group py-2 px-4 rounded-full">
            <div className="grid place-content-center">
              <img
                src="shape01.svg"
                alt=""
                className="h-5 group-hover:rotate-45 group-hover:scale-125 transition-all duration-500"
              />
            </div>
            <p>Learners to Leaders</p>
          </div>
          <div className="flex flex-col my-8 space-y-6 items-center">
            <h1 className="text-3xl sm:text-4xl md:text-7xl max-w-3xl font-semibold text-center">
              Transform Your Tech Career with{" "}
              <span className="text-teal-600 dark:text-teal-500">
                &quot;CWT&quot;
              </span>
            </h1>
            <p className="px-4 text-gray-500 dark:text-gray-400 text-center max-w-xl">
              Master in-demand skills, contribute to real projects, and connect
              with top techies, all in one community-driven platform.
            </p>
          </div>
          <div id="getStarted">
            <Button01 to="/register">Get Started</Button01>
          </div>
        </div>
      </Container>

      <Container className="relative">
        <img
          src="bg-gradient.png"
          alt=""
          className="absolute -z-10 left-0 w-full h-full blur-[86px] md:blur-[156px]"
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="z-10 flex flex-col items-center overflow-hidden rounded-2xl p-2 mb-14 bg-white/5"
        >
          <div className="rounded-xl overflow-hidden border-8 border-white/10">
            <img src="./images/vsCode-project.png" alt="" className="" />
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default HeroUI;

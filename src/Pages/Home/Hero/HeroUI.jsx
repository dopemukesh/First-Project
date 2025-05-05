import React, { useEffect, useState } from "react";
import { Button01 } from "../../../Components/Common/Button/Button";
import Container from "../../../Components/Common/Container/Container";
import { motion } from "motion/react";
import SearchBox from "../../../Components/Common/Search/SearchBox";

const HeroUI = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(user.isLoggedIn);
      setUserData(user);
    }
  }, []);

  const renderButton = () => {
    if (isLoggedIn && userData) {
      return (
        <Button01 to="/classes">
          Start Learning
        </Button01>
      );
    }
    return <Button01 to="/register">Get Started</Button01>;
  };

  return (
    <>
      <Container className="h-[456px] md:h-[556px] items-center">
        <div className="flex flex-col items-center">
          <div className="mb-2 px-4">
            <SearchBox
              defaultText="Learners to Leaders"
              placeholderText="Search courses..."
            />
          </div>

          <div className="flex flex-col my-8 space-y-6 items-center">
            <h1 className="text-3xl sm:text-4xl md:text-7xl max-w-3xl font-semibold text-center">
              Transform Your Tech Career with{" "}
              <span className="text-teal-600 dark:text-teal-500">
                &quot;CWT&quot;
              </span>
            </h1>
            <p className="px-4 text-gray-500 dark:text-gray-400 text-center max-w-xl">
              {isLoggedIn 
                ? "Continue your learning journey with our amazing resources"
                : "Master in-demand skills, contribute to real projects, and connect with top techies, all in one community-driven platform."
              }
            </p>
          </div>
          <div id="getStarted">
            {renderButton()}
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

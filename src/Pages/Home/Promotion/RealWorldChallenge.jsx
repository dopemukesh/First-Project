import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import earth1 from "../../../assets/earth1.png";
import Container from "../../../Components/Common/Container/Container";
import { Button, Button01 } from "../../../Components/Common/Button/Button";

const RealWorldChallenge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const bgGrads =
    "bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  return (
    <>
      {/* Real World Challenges Section */}
      <Container ref={ref} className="py-14 px-4">
        <div
          className={`w-full flex flex-col-reverse md:flex-row gap-8 items-center justify-between ${bgGrads}`}
        >
          {/* Left Content */}
          <motion.div className="md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left md:p-8 py-8">
            <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl w-full">
              Unlock Your True Potential with Real World Challenges
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Push your limits, solve real problems, and turn ideas into
              reality.
            </p>
            <div className="pt-8 md:pt-3">
              <Button to="/community" variant="secondary" className="w-fit">
                Join Open Source
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="relative flex overflow-hidden md:h-72">
            <motion.img
              src={earth1}
              alt="Glowing Earth"
              className="md:h-96 mt-8 h-80 object-contain"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            />
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default RealWorldChallenge;

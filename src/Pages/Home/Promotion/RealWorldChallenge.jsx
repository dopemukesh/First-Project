import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import earth1 from "../../../assets/earth1.png";
import Container from "../../../Components/Common/Container/Container";
import { Button } from "../../../Components/Common/Button/Button";
import usePWAInstall from "../../../hooks/usePWAInstall";

const RealWorldChallenge = () => {
  const { canInstall, promptInstall } = usePWAInstall();

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const bgGrads =
    "bg-white dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 rounded-2xl";

  return (
    <>
      {/* Real World Challenges Section */}
      <Container className="py-14 px-4">
        <div ref={ref} className={`w-full flex flex-col-reverse md:flex-row gap-8 items-center justify-between overflow-hidden ${bgGrads} relative`}>
          <i className="w-96 h-56 bg-sky-500/40 absolute blur-[96px] z-0 left-[30%] -bottom-56"></i>
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left md:p-8 py-8"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl text-gray-900 dark:text-white font-semibold max-w-3xl w-full">
              Unlock Your True Potential with Real World Challenges
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Push your limits, solve real problems, and turn ideas into reality.
            </p>
            <div className="pt-8 md:pt-3">
              {canInstall ? (
                <Button onClick={promptInstall} variant="secondary" className="w-fit">
                  Install App
                </Button>
              )
                :
                (<Button to='/community' variant="secondary" className="w-fit">
                  Join Community
                </Button>)
              }
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex overflow-hidden md:h-72"
            initial={{ opacity: 0, y: 150 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
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

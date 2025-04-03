import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ end }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Run every time it enters viewport
    threshold: 0.5, // Trigger animation when 50% visible
  });

  return (
    <h2
      ref={ref}
      className="text-emerald-400 text-4xl font-semibold drop-shadow-[0px_0px_30px_#34D399]"
    >
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={3}
          separator=","
          formattingFn={(value) => {
            if (value >= 1000000) return (value / 1000000).toFixed(1) + "M+";
            if (value >= 1000) return (value / 1000).toFixed(1) + "K+";
            return value;
          }}
        />
      ) : (
        "0" // Default before entering view
      )}
    </h2>
  );
};

export default AnimatedCounter;

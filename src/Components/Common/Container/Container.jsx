// Designed and developed by:
// - Mukesh Yadav
import { motion } from "motion/react";

const Container = ({ children, className = "", style = {} , ref }) => {
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className={`w-full flex justify-center ${className}`}
      style={style}
    >
      <div className="max-w-6xl flex-1">{children}</div>
    </motion.div>
  );
};

export default Container;

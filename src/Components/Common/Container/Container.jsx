// Designed and developed by:
// - Mukesh Yadav
import { motion } from "motion/react";

const Container = ({ children, className = "", style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`w-full flex justify-center ${className}`}
      style={style}
    >
      <div className="max-w-6xl flex-1">{children}</div>
    </motion.div>
  );
};

export default Container;

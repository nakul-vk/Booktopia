import React from "react";
import { motion } from "framer-motion";

const PrimaryBtn = ({ text, icon, styles, handleClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 7px rgba(0,0,0,0.6)" }}
      className={`w-full rounded-full p-5 font-spline font-bold flex justify-between items-center ${styles}`}
      onClick={() => {}}
    >
      {text}
      <span>{icon}</span>
    </motion.button>
  );
};

export default PrimaryBtn;

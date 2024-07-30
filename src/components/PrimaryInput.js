import React from "react";
import { motion } from "framer-motion";

const PrimaryInput = ({ type, placeholder, styles }) => {
  return (
    <motion.input
      autoCorrect="false"
      whileFocus={{ scale: 1.05, boxShadow: "0px 4px 7px rgba(0,0,0,0.6)" }}
      type={type}
      name="email"
      id="email"
      placeholder={placeholder}
      className={`w-full border-solid  border-4 rounded-full p-5  font-spline font-bold outline-none ${styles}`}
    />
  );
};

export default PrimaryInput;

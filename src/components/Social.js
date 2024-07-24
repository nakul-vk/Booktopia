import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Social = ({ link, name, icon }) => {
  return (
    <motion.div
      whileHover={{
        color: "#FCA311",
        scale: 1.1,
        textShadow: "0px 4px 7px rgba(0,0,0,0.6)",
      }}
    >
      <Link to={link} key={name} target="_blank">
        {icon}
      </Link>
    </motion.div>
  );
};

export default Social;

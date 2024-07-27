import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

const SnackBar = ({ data }) => {
  return (
    <motion.div className="z-10 font-spline font-bold flex flex-row items-center bg-white p-3 rounded-lg shadow-lg text-xs sm:text-base lg:text-lg">
      {data.type === "success" ? (
        <FaCircleCheck className="mr-2 text-green-600" />
      ) : (
        <IoCloseCircle className="mr-2 text-red-600 text-xl" />
      )}
      <h3>{data.message}</h3>
    </motion.div>
  );
};

export default SnackBar;

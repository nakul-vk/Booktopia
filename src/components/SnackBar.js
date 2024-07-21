import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

const SnackBar = ({ data }) => {
  return (
    <motion.div
      animate={{ x: [null, -325, -325, 325], opacity: [0, 1, 1, 1] }}
      transition={{ duration: 2, times: [0, 0.5, 0.9, 1], type: "tween" }}
      className="fixed -right-72 top-10 z-10 font-spline font-bold flex flex-row items-center bg-white p-3 rounded-lg shadow-lg text-xs sm:text-base lg:text-lg"
    >
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

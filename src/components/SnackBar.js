import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

const SnackBar = ({ data }) => {
  return (
    <div
      //   className={`fixed right-10 top-10 z-10 font-spline font-bold flex flex-row items-center bg-white
      // p-3 rounded-lg shadow-lg opacity-0 duration-500 transition-all`}
      className={`fixed right-10 top-10 z-10 font-spline font-bold flex flex-row items-center bg-white p-3 rounded-lg shadow-lg `}
    >
      {data.type === "success" ? (
        <FaCircleCheck className="mr-2 text-green-600" />
      ) : (
        <IoCloseCircle className="mr-2 text-red-600 text-xl" />
      )}
      <h3>{data.message}</h3>
    </div>
  );
};

export default SnackBar;

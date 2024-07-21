import React from "react";

const PrimaryBtn = ({ text, icon, styles, handleClick }) => {
  return (
    <button
      className={`w-full h-24 md:h-28 lg:h-32 rounded-full p-5 font-spline font-bold flex justify-between items-center ${styles}`}
      onClick={() => handleClick("Subscription unsuccessful", "error")}
    >
      {text}
      <span>{icon}</span>
    </button>
  );
};

export default PrimaryBtn;

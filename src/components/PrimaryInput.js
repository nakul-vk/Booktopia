import React from "react";

const PrimaryInput = ({ type, placeholder, styles }) => {
  return (
    <input
      type={type}
      name="email"
      id="email"
      placeholder={placeholder}
      className={`w-full border-solid  border-4 rounded-full p-5 m-10 font-spline font-bold outline-none ${styles}`}
    />
  );
};

export default PrimaryInput;

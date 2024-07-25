import React from "react";
import { Rating } from "../components";

const Filters = ({ placeholder, isSelected, addFilter }) => {
  const className = "filter px-2 py-1 md:px-5 md:py-2 rounded-full";

  const handleClick = (e) => {
    e.preventDefault();
    addFilter(placeholder);
  };

  return (
    <button
      className={
        isSelected
          ? `${className} bg-title text-white`
          : `${className} border-solid border-black border-2`
      }
      onClick={handleClick}
    >
      {Number(placeholder) ? <Rating rating={placeholder} /> : placeholder}
    </button>
  );
};

export default Filters;

import React from "react";
import { Rating } from "../components";
import { camelize } from "../utils/camelize";

const Filters = ({ placeholder, category, isSelected, addFilter }) => {
  const className = "filter px-2 py-1 md:px-5 md:py-2 rounded-full";

  const handleClick = (e) => {
    e.preventDefault();
    addFilter(placeholder, category);
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
      {Number(placeholder) ? (
        <Rating rating={placeholder} />
      ) : (
        camelize(placeholder)
      )}
    </button>
  );
};

export default Filters;

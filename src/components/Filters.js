import React from "react";
import { Rating } from "../components";
import { camelize } from "../utils/camelize";

const Filters = ({ placeholder, category, isSelected, addFilter }) => {
  const selected = "filter px-2 py-1 md:px-5 md:py-2 rounded-full";

  const handleClick = (e) => {
    e.preventDefault();
    addFilter(placeholder, category);
  };

  return (
    <button
      className={
        isSelected
          ? `${selected} bg-title text-white`
          : `${selected} border-solid border-black border-2`
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

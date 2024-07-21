import React from "react";

const Filters = ({ placeholder, isSelected }) => {
  const className = "filter px-5 py-2 rounded-full";

  const handleClick = (e) => {
    e.preventDefault();
    console.log(placeholder.toLowerCase());
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
      {placeholder}
    </button>
  );
};

export default Filters;

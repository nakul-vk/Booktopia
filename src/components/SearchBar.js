import React from "react";

const SearchBar = ({ val, changeVal }) => {
  return (
    <div className=" w-10/12 relative left-1/2 -translate-x-1/2 mt-5 md:mt-10 h-24 md:h-28 lg:h-32 border-solid border-yellow border-4 rounded-full text-black font-spline font-bold outline-none text-2xl md:text-5xl lg:text-6xl flex flex-row items-center">
      <input
        type="name"
        name="search"
        id="search"
        placeholder="Title/Author"
        className="outline-none ml-3 md:ml-7 lg:ml-12 w-11/12"
        value={val}
        onChange={(e) => changeVal(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;

import React from "react";

const Quotes = ({ quote }) => {
  return (
    <div className="mt-16 bg-yellow p-5 rounded-lg flex flex-row align-middle">
      <div className="w-2 h-auto bg-title rounded-lg mr-5" />
      <p className="italic">{quote}</p>
    </div>
  );
};

export default Quotes;

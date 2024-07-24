import React from "react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";

const BackgroundStar = ({ type, styles }) => {
  return (
    <div className="absolute text-xs" style={styles}>
      <ImStarFull className={type === "dark" ? "text-title" : "text-white"} />
    </div>
  );
};

export default BackgroundStar;

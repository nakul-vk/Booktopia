import React from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";

const Rating = ({ rating, className }) => {
  const ratingRemainder = rating - Math.floor(rating);
  const wholeRating = Math.floor(rating);

  return (
    <div className="flex">
      {Array.from({ length: wholeRating }).map((elem, index) => (
        <ImStarFull key={index} className={className} />
      ))}
      {ratingRemainder !== 0 && <ImStarHalf className={className} />}
    </div>
  );
};

export default Rating;

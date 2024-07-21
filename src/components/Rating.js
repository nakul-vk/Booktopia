import React from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";

const Rating = ({ rating }) => {
  const ratingRemainder = rating - Math.floor(rating);
  const wholeRating = Math.floor(rating);

  return (
    <div className="flex">
      {Array.from({ length: wholeRating }).map((index) => (
        <ImStarFull />
      ))}
      {ratingRemainder !== 0 && <ImStarHalf />}
    </div>
  );
};

export default Rating;

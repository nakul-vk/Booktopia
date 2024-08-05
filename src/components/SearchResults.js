import React from "react";
import { Rating } from "../components";
import { Link } from "react-router-dom";
import { camelize } from "../utils/camelize";

const SearchResults = ({ id, title, author, rating, cover }) => {
  return (
    <Link to={`/books/reviews/${id}`}>
      <div className={`mt-5 ml-5 md:ml-10 flex flex-row items-center`}>
        <img src={cover} width={100} height={75} alt="Book-cover" srcSet="" />
        <div className="list-disc self-end font-bold transition-all pt-12 pb-12 pl-5 pr-5 md:p-12 text-left text-sm md:text-xl">
          <p className="text-base md:text-xl">{camelize(title)}</p>
          <p className="">{camelize(author)}</p>
          {<Rating className="text-sm md:text-xl" rating={rating} />}
        </div>
      </div>
      <hr className="opacity-80 bg-title ml-10" />
    </Link>
  );
};

export default SearchResults;

import React, { useEffect, useState } from "react";
import logo from "../assets/the brothers karamazov.jpeg";
import { Rating } from "../components";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <Link to="/reviews/books">
      <div className={`mt-5 ml-5 md:ml-10 flex flex-row items-center`}>
        <img src={logo} width={100} height={75} alt="" srcSet="" />
        <div className="list-disc self-end font-bold transition-all pt-12 pb-12 pl-5 pr-5 md:p-12 text-left text-sm md:text-xl">
          <p className="text-base md:text-xl">The Brothers Karamazov</p>
          <p className="">Fyodor Dostoevsky</p>
          {<Rating className="text-sm md:text-xl" rating={5} />}
        </div>
      </div>
      <hr className="opacity-80 bg-title ml-10" />
    </Link>
  );
};

export default SearchResults;

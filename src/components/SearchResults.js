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
      <div className={`mt-5 ml-10 flex flex-row items-center`}>
        <img src={logo} width={100} height={75} alt="" srcset="" />
        <div className="list-disc self-end font-bold text-xl transition-all p-12 text-left">
          <p className="text-xl sm:text-3xl">The Brothers Karamazov</p>
          <p className="text-base sm:text-xl">Fyodor Dostoevsky</p>
          {<Rating className="text-base sm:text-xl" rating={5} />}
        </div>
      </div>
      <hr className="opacity-80 bg-title ml-10" />
    </Link>
  );
};

export default SearchResults;

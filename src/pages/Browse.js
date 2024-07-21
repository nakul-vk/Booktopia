import React, { useState } from "react";
import {
  Title,
  Navbar,
  SearchBar,
  Filters,
  Rating,
  SearchResults,
} from "../components";
import { filters } from "../utils/filtersPlaceholder";

const Browse = () => {
  const [data, setData] = useState(filters);
  const [selectedFilters, setSelectedFilters] = useState([
    "Fyodor Dostoevsky",
    "Thriller",
    <Rating rating={4.5} />,
    <Rating rating={5} />,
  ]);

  return (
    <section className="search text-center w-screen min-h-screen font-spline pb-16">
      <Title />
      <Navbar />
      <SearchBar />
      <div className="selected-filters w-10/12 text-left  mt-16 relative left-1/2 -translate-x-1/2 flex flex-row flex-wrap items-center gap-4">
        <h2 className="font-bold mr-10">Filters:</h2>
        {selectedFilters.map((items, index) => (
          <Filters key={index} placeholder={items} isSelected={true} />
        ))}
      </div>
      <section className="w-10/12 flex flex-row justify-center relative left-1/2 -translate-x-1/2 mt-10">
        <section className="w-2/5 text-left">
          {data.map(({ filter, values }, index) => (
            <div key={index}>
              <h2 className="font-bold mt-5">{`${filter}:`}</h2>
              <div className="filter-container flex flex-row flex-wrap gap-4 mt-5">
                {values.map((value, index) => (
                  <Filters
                    key={index}
                    placeholder={
                      Number(value) ? <Rating rating={value} /> : value
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
        <div className="w-1 h-auto bg-title rounded-lg" />
        <section className="w-3/5">
          {/* {Array.from({ length: 6 }).map((result, index) => (
            <SearchResults key={index} />
          ))} */}
        </section>
      </section>
    </section>
  );
};

export default Browse;

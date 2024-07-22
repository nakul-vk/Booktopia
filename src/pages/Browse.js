import React, { useState } from "react";
import {
  Title,
  Navbar,
  SearchBar,
  Filters,
  SearchResults,
} from "../components";
import { filters } from "../utils/filtersPlaceholder";

const Browse = () => {
  const [data, setData] = useState(filters);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const addFilter = (val) => {
    if (selectedFilters.find((elem) => elem == val) == undefined) {
      setSelectedFilters([...selectedFilters, val]);
    } else {
      setSelectedFilters(selectedFilters.filter((elem) => elem != val));
    }
  };

  return (
    <section className="search text-center w-screen min-h-screen font-spline pb-16">
      <Title />
      <Navbar />
      <SearchBar />
      <div className="selected-filters w-10/12 mt-16 relative left-1/2 -translate-x-1/2 flex">
        <h2 className="font-bold mr-10 pt-2">Filters:</h2>
        <div className="w-full flex flex-row flex-wrap gap-4">
          {selectedFilters.map((items, index) => (
            <Filters
              key={index}
              placeholder={items}
              isSelected={true}
              addFilter={addFilter}
            />
          ))}
        </div>
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
                    placeholder={value}
                    addFilter={addFilter}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
        <div className="w-1 h-auto bg-title rounded-lg" />
        <section className="w-3/5">
          {Array.from({ length: 6 }).map((result, index) => (
            <SearchResults key={index} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Browse;

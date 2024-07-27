import React, { useState, useEffect } from "react";
import {
  Title,
  Navbar,
  SearchBar,
  Filters,
  SearchResults,
} from "../components";
import { filters } from "../utils/filtersPlaceholder";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion, useAnimate } from "framer-motion";

const Browse = () => {
  const [search, setSearch] = useState("");

  const getBook = async (title) => {};

  useEffect(() => {
    getBook(search);
  }, [search]);

  const [data, setData] = useState(filters);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const addFilter = (val) => {
    if (selectedFilters.find((elem) => elem === val) === undefined) {
      setSelectedFilters([...selectedFilters, val]);
    } else {
      setSelectedFilters(selectedFilters.filter((elem) => elem !== val));
    }
  };

  const [scope, animate] = useAnimate();

  const openSequence = [[".openable", { visibility: "visible", x: [-500, 0] }]];
  const closeSequence = [[".openable", { x: -500 }]];

  const [open, setOpen] = useState(false);

  const openFilterBar = (e) => {
    e.preventDefault();
    setOpen(!open);
    if (scope.current) {
      open ? animate(closeSequence) : animate(openSequence);
    }
  };

  return (
    <section
      ref={scope}
      className="search text-center w-screen min-h-screen font-spline pb-16"
    >
      <motion.section
        initial={{ visibility: "hidden" }}
        className="openable absolute  z-10 w-3/4 h-screen pl-5 pt-5 pb-5 overflow-y-scroll text-left bg-yellow md:hidden"
      >
        {data.map(({ filter, values }, index) => (
          <div key={index}>
            <h2 className="font-bold mt-5 text-sm md:text-base">{`${filter}:`}</h2>
            <div className="filter-container flex flex-row flex-wrap gap-4 mt-5 text-xs md:text-sm">
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
      </motion.section>
      <button
        onClick={(e) => openFilterBar(e)}
        className="ml-2 text-3xl absolute left-0 top-3 z-20 box-border border-0 border-black md:hidden"
      >
        {open ? <IoIosClose /> : <IoIosMenu />}
      </button>
      <Title />
      <Navbar />
      <SearchBar val={search} changeVal={setSearch} />
      <div className="selected-filters w-10/12 mt-10 md:mt-16 relative left-1/2 -translate-x-1/2 flex">
        <h2 className="font-bold mr-10 pt-2 text-sm md:text-base">Filters:</h2>
        <div className="w-full flex flex-row flex-wrap gap-4 text-xs md:text-sm">
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
      <section className="w-10/12 flex flex-row justify-center relative left-1/2 -translate-x-1/2 mt-5 md:mt-8">
        <section className=" w-2/5 text-left hidden md:block">
          {data.map(({ filter, values }, index) => (
            <div key={index}>
              <h2 className="font-bold mt-5 text-sm md:text-base">{`${filter}:`}</h2>
              <div className="filter-container flex flex-row flex-wrap gap-4 mt-5 text-xs md:text-sm">
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
        <section className="md:w-3/5">
          {Array.from({ length: 0 }).map((result, index) => (
            <SearchResults key={index} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Browse;

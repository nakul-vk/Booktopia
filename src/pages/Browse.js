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
import axios from "axios";
import { useDispatch } from "react-redux";
import { showSnackBar } from "../features/snackbar/snackbarSlice";
import { camelize } from "../utils/camelize";

const Browse = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({
    author: [],
    genre: [],
    rating: [],
  });

  const addFilter = (val, category) => {
    if (selectedFilters[category].find((elem) => elem === val)) {
      setSelectedFilters({
        ...selectedFilters,
        [category]: selectedFilters[category].filter((elem) => elem !== val),
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [category]: [...selectedFilters[category], val],
      });
    }
  };

  const dispatch = useDispatch();

  const getBook = async (value) => {
    try {
      if (value.startsWith(" ")) throw new Error("Invalid request!"); //when search starts with whitespace, the get requests a page with path /books/search which results in an error.
      if (value !== "") {
        value = value.toLowerCase();
        const { data } = await axios.get(
          `http://localhost:5555/books/search/`,
          { params: { value } }
        );
        setResult(data);
        console.log(data);
      }
    } catch (error) {
      dispatch(
        showSnackBar({ message: error.message, type: "error", open: true })
      );
    }
  };

  const getFiltered = async (filter) => {
    console.log(filter);
    if (
      filter["author"].length !== 0 ||
      filter["genre"].length !== 0 ||
      filter["rating"].length !== 0
    ) {
      const { data } = await axios.get(`http://localhost:5555/books/filters/`, {
        params: filter,
      });
      setResult(data);
    }
  };

  useEffect(() => {
    getFiltered(selectedFilters);
  }, [selectedFilters]);

  useEffect(() => {
    getBook(search);
  }, [search]);

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
        {filters.map(({ filter, values }, index) => (
          <div key={index}>
            <h2 className="font-bold mt-5 text-sm md:text-base">{`${camelize(
              filter
            )}:`}</h2>
            <div className="filter-container flex flex-row flex-wrap gap-4 mt-5 text-xs md:text-sm">
              {values.map((value, index) => (
                <Filters
                  key={index}
                  placeholder={value}
                  category={filter}
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
          {selectedFilters.author.map((items, index) => (
            <Filters
              key={index}
              placeholder={items}
              category="author"
              isSelected={true}
              addFilter={addFilter}
            />
          ))}
          {selectedFilters.genre.map((items, index) => (
            <Filters
              key={index}
              placeholder={items}
              category="genre"
              isSelected={true}
              addFilter={addFilter}
            />
          ))}
          {selectedFilters.rating.map((items, index) => (
            <Filters
              key={index}
              placeholder={items}
              category="rating"
              isSelected={true}
              addFilter={addFilter}
            />
          ))}
        </div>
      </div>
      <section className="w-10/12 flex flex-row justify-center relative left-1/2 -translate-x-1/2 mt-5 md:mt-8">
        <section className=" w-2/5 text-left hidden md:block">
          {filters.map(({ filter, values }, index) => (
            <div key={index}>
              <h2 className="font-bold mt-5 text-sm md:text-base">{`${camelize(
                filter
              )}:`}</h2>
              <div className="filter-container flex flex-row flex-wrap gap-4 mt-5 text-xs md:text-sm">
                {values.map((value, index) => (
                  <Filters
                    key={index}
                    placeholder={value}
                    category={filter}
                    addFilter={addFilter}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
        <section className="md:w-3/5">
          {result.length === 0 &&
          (search !== "" ||
            selectedFilters["author"].length !== 0 ||
            selectedFilters["genre"].length !== 0 ||
            selectedFilters["rating"].length !== 0) ? (
            <h3 className="font-bold opacity-25 text-2xl lg:text-5xl">
              Not Found
            </h3>
          ) : (
            result.map((book, index) => (
              <SearchResults
                id={book._id}
                key={index}
                title={book.title}
                author={book.author}
                rating={book.rating}
                cover={book.img}
              />
            ))
          )}
        </section>
      </section>
    </section>
  );
};

export default Browse;

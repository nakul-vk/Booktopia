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
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const addFilter = (val) => {
    if (selectedFilters.find((elem) => elem === val)) {
      setSelectedFilters(selectedFilters.filter((elem) => elem !== val));
    } else {
      setSelectedFilters(() => [...selectedFilters, val]);
    }
  };

  const bookData = [
    {
      id: 1,
      img: "https://via.placeholder.com/150/FFFF00/000000?Text=google.com",
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      rating: "5",
      genre: ["Thriller"],
      quote:
        "The more I love humanity in general, the less I love man in particular",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=yttags.com",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: "3.5",
      genre: ["Romance"],
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
      title: "Harry Potter and the Chamber of Secrets",
      author: "JK Rowling",
      rating: "4",
      genre: ["Fiction", "Thriller"],
      quote:
        "Oh well... I'd just been thinking, if you had died, you'd have been welcome to share my toilet",
    },
    {
      id: 4,
      img: "https://www.picsum.photos/",
      title: "To Kill A Mockingbird",
      author: "Harper Lee",
      rating: "4.5",
      genre: ["Thriller"],
      quote:
        "The one thing that doesn't abide by majority rule is a person's conscience",
    },
    {
      id: 5,
      img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
      title: "Becoming",
      author: "Michelle Obama",
      rating: "2",
      genre: ["Bigoraphy"],
      quote: "God gave us this platform for a reason, let's not waste it",
    },
    {
      id: 6,
      img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      rating: "5",
      genre: ["Thriller"],
      quote:
        "To go wrong in one's own way is better than to go right in someone else's.",
    },
  ];

  const getBook = async (value) => {
    setResult(
      bookData.filter(
        (elem) => elem.title.includes(value) || elem.author.includes(value)
      )
    );
  };

  const getFiltered = (arr) => {
    setResult(
      bookData.filter((book) => arr.find((val) => val === book.author))
    );
    console.log(arr);
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
          {filters.map(({ filter, values }, index) => (
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
          {result.map((book, index) => (
            <SearchResults
              key={index}
              title={book.title}
              author={book.author}
              rating={book.rating}
              cover={book.img}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Browse;

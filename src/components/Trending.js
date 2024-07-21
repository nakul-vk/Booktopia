import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { Rating } from "../components";
import { Link } from "react-router-dom";

const Trending = () => {
  const data = [
    {
      id: 1,
      img: "https://via.placeholder.com/150/FFFF00/000000?Text=google.com",
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      rating: "5",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=yttags.com",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: "3.5",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
      title: "Harry Potter and the Chamber of Secrets",
      author: "JK Rowling",
      rating: "4",
    },
    {
      id: 4,
      img: "https://www.picsum.photos/",
      title: "To Kill A Mockingbird",
      author: "Harper Lee",
      rating: "4.5",
    },
    {
      id: 5,
      img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
      title: "Becoming",
      author: "Michelle Obama",
      rating: "2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightClick = () => {
    const isLastIndex = currentIndex === data.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="trending text-left w-10/12 relative left-1/2 -translate-x-1/2 text-base mt-16 pb-16 font-spline text-body">
      {/* <h1 className="font-spline font-bold sm:text-3xl">Trending Books</h1> */}
      <div
        className="container rounded-lg w-full h-96 text-body mt-11 flex justify-between group overflow-y-hidden bg-title"
        // style={{
        //   // background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(147,147,182,1) 57%, rgba(255,255,255,1) 100%), url(${data[currentIndex].img}) center cover no-repeat`,
        //   // backgroundColor:
        //   //   "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(147,147,182,1) 57%, rgba(255,255,255,1) 100%)",
        //   backgroundImage: `url(${data[currentIndex].img})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <button
          className=" text-3xl md:text-5xl lg:text-6xl"
          onClick={handleLeftClick}
        >
          <IoIosArrowBack />
        </button>

        <div className="book w-full flex self-end">
          <Link to={`/reviews/books`}>
            <motion.div className="py-5 list-disc self-end font-bold text-xl transition-all sm:p-11">
              <motion.p className="text-xl sm:text-3xl">
                {data[currentIndex].title}
              </motion.p>
              <p className="text-base sm:text-xl">
                {data[currentIndex].author}
              </p>
              {
                <Rating
                  className="text-base sm:text-xl"
                  rating={data[currentIndex].rating}
                />
              }
            </motion.div>
          </Link>
        </div>
        <button
          className=" text-3xl md:text-5xl lg:text-6xl"
          onClick={handleRightClick}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default Trending;

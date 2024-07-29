import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { Rating } from "../components";
import { Link } from "react-router-dom";
import { stagger, useAnimate } from "framer-motion";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrending = async () => {
    const { data } = await axios.get("http://localhost:5555/trending");
    setTrending(data);
    // setTimeout(() => {
    //   setLoading(false);
    //   animate(rightSequence);
    // }, 1500);
    setLoading(false);
    animate(rightSequence);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const [scope, animate] = useAnimate();

  const rightSequence = [
    [".bg-img", { opacity: [0, 1], x: [700, 0] }, { duration: 0.5 }],
    ["li", { opacity: [0, 1], y: [100, 0] }, { delay: stagger(0.1) }],
  ];

  const leftSequence = [
    [".bg-img", { opacity: [0, 1], x: [-700, 0] }, { duration: 0.5 }],
    ["li", { opacity: [0, 1], y: [100, 0] }, { delay: stagger(0.1) }],
  ];

  useEffect(() => {
    getTrending();
  }, []);

  const handleLeftClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? trending.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    animate(leftSequence);
  };

  const handleRightClick = () => {
    const isLastIndex = currentIndex === trending.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    animate(rightSequence);
  };

  return (
    <section
      ref={scope}
      className="trending text-left w-10/12 relative left-1/2 -translate-x-1/2 text-base mt-16 pb-16 font-spline text-body"
    >
      {!loading && (
        /* ? (
        <>
          <div className="bg-img absolute -z-20 w-full h-96 rounded-lg overflow-hidden bg-title" />
          <div className="container rounded-lg w-full h-96 text-body mt-11 flex justify-between group overflow-y-hidden">
            <button className=" text-3xl md:text-5xl lg:text-6xl">
              <IoIosArrowBack />
            </button>
            <div className="book w-full flex self-end ">
              <div className="container w-full animate-pulse list-none self-end font-bold text-xl transition-all sm:p-11 ">
                <div className="quote bg-pulse w-full  italic font-normal text-base sm:text-xl rounded-lg py-5 mb-2"></div>
                <div className="text-xl py-5 mb-2 sm:text-3xl bg-pulse  w-1/2  rounded-lg"></div>
                <div className="text-base py-5 mb-2 sm:text-xl bg-pulse  w-1/2  rounded-lg"></div>
                <div className="text-base py-5 mb-2 sm:text-xl  bg-pulse w-1/3  rounded-lg"></div>
              </div>
            </div>
            <button className=" text-3xl md:text-5xl lg:text-6xl">
              <IoIosArrowForward />
            </button>
          </div>
        </>
      ) : */
        <>
          <motion.div
            className="bg-img absolute -z-20 w-full h-96 rounded-lg overflow-hidden"
            style={{
              background: `linear-gradient(0deg, rgba(1,40,55,1) 0%, rgba(1,40,57,0.44870448179271705) 97%), url(${trending[currentIndex].img}) center/cover no-repeat fixed`,
            }}
          />
          <div className="container rounded-lg w-full h-96 text-body mt-11 flex justify-between group overflow-y-hidden">
            <button
              className=" text-3xl md:text-5xl lg:text-6xl"
              onClick={handleLeftClick}
            >
              <IoIosArrowBack />
            </button>

            <div className="book w-full flex self-end ">
              <Link to={`/reviews/books/${trending[currentIndex].id}`}>
                <motion.ul className="container py-5 list-none self-end font-bold text-xl transition-all sm:p-11">
                  <motion.li className="quote italic font-normal text-base sm:text-xl">
                    "{trending[currentIndex].quote[0]}"
                  </motion.li>
                  <motion.li className="text-xl sm:text-3xl">
                    {trending[currentIndex].title}
                  </motion.li>
                  <motion.li className="text-base sm:text-xl">
                    {trending[currentIndex].author}
                  </motion.li>
                  <motion.li>
                    <Rating
                      className="text-base sm:text-xl"
                      rating={trending[currentIndex].rating}
                    />
                  </motion.li>
                </motion.ul>
              </Link>
            </div>
            <button
              className=" text-3xl md:text-5xl lg:text-6xl"
              onClick={handleRightClick}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Trending;

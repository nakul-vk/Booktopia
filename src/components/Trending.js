import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { Rating } from "../components";
import { Link } from "react-router-dom";
import { stagger, useAnimate } from "framer-motion";

const Trending = () => {
  const data = [
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
    animate(rightSequence);
  }, []);

  const handleLeftClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    animate(leftSequence);
  };

  const handleRightClick = () => {
    const isLastIndex = currentIndex === data.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    animate(rightSequence);
  };

  return (
    <section
      ref={scope}
      className="trending text-left w-10/12 relative left-1/2 -translate-x-1/2 text-base mt-16 pb-16 font-spline text-body"
    >
      <motion.div
        className="bg-img absolute -z-20 w-full h-96 rounded-lg overflow-hidden"
        style={{
          background: `linear-gradient(0deg, rgba(1,40,55,1) 0%, rgba(1,40,57,0.44870448179271705) 97%), url(${data[currentIndex].img}) center/cover no-repeat fixed`,
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
          <Link to={`/reviews/books/${data[currentIndex].title}`}>
            <motion.ul className="container py-5 list-none self-end font-bold text-xl transition-all sm:p-11">
              <motion.li className="quote italic font-normal text-base sm:text-xl">
                "{data[currentIndex].quote}"
              </motion.li>
              <motion.li className="text-xl sm:text-3xl">
                {data[currentIndex].title}
              </motion.li>
              <motion.li className="text-base sm:text-xl">
                {data[currentIndex].author}
              </motion.li>
              <motion.li>
                <Rating
                  className="text-base sm:text-xl"
                  rating={data[currentIndex].rating}
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
    </section>
  );
};

export default Trending;

import React, { useEffect, useState } from "react";
import { Title, Navbar, Rating, Quotes, Footer } from "../components";
import { motion } from "framer-motion";
import axios from "axios";
import { camelize } from "../utils/camelize";

const Review = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  const getId = () => {
    const path = window.location.pathname;
    const id = path.split("/")[path.split("/").length - 1];
    return id;
  };

  const getBook = async (id) => {
    const { data } = await axios.get(
      `http://localhost:5555/books/reviews/${id}`
    );
    setBook(data);
    setLoading(false);
  };

  useEffect(() => {
    const id = getId();
    getBook(id);
  }, []);

  return (
    <section className="w-screen min-h-screen  text-center text-title">
      <Title />
      <Navbar />
      {!loading && (
        <>
          <section
            className="cover flex flex-row rounded-lg h-72 text-left w-10/12 relative left-1/2 -translate-x-1/2 text-base mt-12 font-spline "
            style={{
              background: `linear-gradient(0deg, rgba(1,40,55,1) 0%, rgba(1,40,57,0.44870448179271705) 97%), url(${book.img}) center/cover no-repeat fixed`,
            }}
          >
            <motion.div className="list-disc self-end font-bold text-xl transition-all p-12 text-white">
              <motion.p className="text-xl sm:text-3xl">
                {camelize(book.title)}
              </motion.p>
              <p className="text-base sm:text-xl">{camelize(book.author)}</p>
              {<Rating className="text-base sm:text-xl" rating={book.rating} />}
            </motion.div>
          </section>
          <section className="review w-10/12 relative left-1/2 -translate-x-1/2 text-left mt-12 text-lg font-spline pb-16">
            <p>
              <span className="font-bold text-3xl">{book.review.intro[0]}</span>
              {book.review.intro.slice(1, book.review.intro.length)}
            </p>
            <h4 className="mt-10 font-bold text-xl">Plot Summary:</h4>
            <p>{book.review.summary}</p>
            <Quotes quote={book.quotes[1]} />
            <h4 className="mt-10 font-bold text-xl">Characterization:</h4>
            <p>{book.review.characterization}</p>
            <h4 className="mt-10 font-bold text-xl">Themes:</h4>
            <p>{book.review.themes}</p>
            <h4 className="mt-10 font-bold text-xl">Conclusion:</h4>
            <p>{book.review.conclusion}</p>
            <Quotes quote={book.quotes[2]} />
          </section>
        </>
      )}
      <Footer />
    </section>
  );
};

export default Review;

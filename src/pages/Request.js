import React, { useEffect, useState } from "react";
import { Title, Navbar } from "../components";
import { IoIosArrowForward } from "react-icons/io";

const Request = () => {
  const inputs = [
    { placeholder: "Title", type: "text" },
    { placeholder: "Author", type: "text" },
    { placeholder: "Year", type: "number" },
  ];
  const quotes = [
    {
      quote:
        "A reader lives a thousand lives before he dies...The man who never reads lives only one.",
      quoter: "George R R Martin",
    },
    {
      quote:
        "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      quoter: "Dr Seuss",
    },
    {
      quote:
        "There is more treasure in books than in all the pirate's loot on Treasure Island.",
      quoter: "Walt Disney",
    },
    {
      quote:
        "My alma mater was books, a good library…. I could spend the rest of my life reading, just satisfying my curiosity.",
      quoter: "Malcolm X",
    },
    {
      quote:
        "Books serve to show a man that those original thoughts of his aren't very new after all.",
      quoter: "Abraham Lincoln",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getRandomQuote = () => {
    setCurrentIndex(Math.floor(Math.random() * quotes.length));
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <section className="w-screen text-center font-spline">
      <Title />
      <Navbar />
      <section className=" w-10/12 relative left-1/2 -translate-x-1/2 flex flex-row items-center justify-center pt-12 pb-12">
        <div className="w-1/3  bg-title text-white rounded-lg px-10 py-20 text-3xl">
          <h2 className="italic">{quotes[currentIndex].quote}</h2>
          <h2 className="font-bold mt-10">- {quotes[currentIndex].quoter}</h2>
        </div>
        <div className="w-2/3 self-end pl-5 text-3xl">
          <form action="">
            {inputs.map(({ placeholder, type }, index) => (
              <input
                type={type}
                inputMode={type === "number" && "numeric"}
                className="outline-none w-full  border-solid border-yellow border-4 rounded-full p-5  text-title  font-spline font-bold mb-5"
                key={index}
                placeholder={placeholder}
              />
            ))}
            <button
              className="text-title w-full bg-white p-5 font-spline font-bold flex justify-between items-center text-3xl border-black border-4 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                getRandomQuote();
              }}
            >
              Submit
              <span>
                <IoIosArrowForward />
              </span>
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Request;

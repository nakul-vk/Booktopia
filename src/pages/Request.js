import React, { useEffect, useState } from "react";
import { Title, Navbar, PrimaryBtn, PrimaryInput } from "../components";
import { IoIosArrowForward } from "react-icons/io";

const Request = () => {
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

  const handleClick = () => {
    getRandomQuote();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <section className="w-screen text-center font-spline">
      <Title />
      <Navbar />
      <section className=" w-10/12 relative left-1/2 -translate-x-1/2 flex flex-col-reverse lg:flex-row items-center justify-center pt-12 pb-12">
        <div className="w-full lg:w-1/3 mt-5 md:mt-10 lg:mt-0 text-title rounded-lg lg:px-10 lg:py-20 text-base md:text-xl md:px-2">
          <h2 className="italic">"{quotes[currentIndex].quote}"</h2>
          <h2 className="font-bold mt-10">- {quotes[currentIndex].quoter}</h2>
        </div>
        <div className="w-full lg:w-2/3 self-end lg:ml-5 text-xl md:text-3xl ">
          <form className="flex flex-col items-center">
            <PrimaryInput
              type="text"
              placeholder="Title"
              styles="mt-2 md:mt-5 border-yellow text-title"
            />
            <PrimaryInput
              type="text"
              placeholder="Author"
              styles="mt-2 md:mt-7 border-yellow text-title"
            />
            <PrimaryInput
              type="text"
              placeholder="Year"
              styles="mt-2 md:mt-7 mb-2 md:mb-7 border-yellow text-title"
            />
            <PrimaryBtn
              text="Submit"
              icon={<IoIosArrowForward />}
              styles="bg-yellow text-white h-16 md:h-24"
              handleClick={() => console.log("Button clicked")}
            />
          </form>
        </div>
      </section>
    </section>
  );
};

export default Request;

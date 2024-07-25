import React, { useEffect } from "react";
import { ImStarFull } from "react-icons/im";
import { useAnimate, stagger } from "framer-motion";

const Title = () => {
  const [scope, animate] = useAnimate();

  const titleSequence = [
    [".letter", { scale: [1, 1.2, 1] }, { duration: 0.5, delay: stagger(0.1) }],
  ];

  const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 76) + 25;
    return randomNumber;
  };

  useEffect(() => {
    setInterval(() => {
      if (scope.current) {
        animate(titleSequence);
      }
    }, 5000);
  }, []);

  return (
    <div ref={scope} className="text-title">
      <h1 className="text-title text-center font-bold font-fascinate  text-5xl sm:text-7xl md:text-9xl">
        {"BOOKTOPIA".split("").map((letter, index) => (
          <span className="letter inline-block" key={index}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Title;

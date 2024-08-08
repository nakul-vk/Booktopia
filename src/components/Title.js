import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const Title = () => {
  const [scope, animate] = useAnimate();

  // const titleSequence = [
  //   [
  //     ".letter",
  //     { scale: [1, 1.2, 1] },
  //     {
  //       duration: 0.5,
  //       delay: stagger(0.1),
  //       repeat: Infinity,
  //       repeatDelay: 5,
  //     },
  //   ],
  // ]; Open issue in framer-motion

  useEffect(() => {
    if (scope.current) {
      animate(
        ".letter",
        { scale: [1, 1.2, 1] },
        { duration: 0.5, delay: stagger(0.1), repeat: Infinity, repeatDelay: 5 }
      );
    }
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

import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const Loader = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        ".loader",
        { y: [0, -15, 0] },
        {
          duration: 0.5,
          delay: stagger(0.1),
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.5,
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-row w-fit gap-x-1" ref={scope}>
      <div className="loader block w-7 h-7 bg-yellow rounded-full" />
      <div className="loader block w-7 h-7 bg-yellow rounded-full" />
      <div className="loader block w-7 h-7 bg-yellow rounded-full" />
    </div>
  );
};

export default Loader;

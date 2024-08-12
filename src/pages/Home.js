import React from "react";
import {
  Title,
  Navbar,
  Trending,
  SocialNetwork,
  CallToAction,
  Subscribe,
  Footer,
} from "../components";
import { useAnimate, motion, stagger } from "framer-motion";

const Home = () => {
  const [scope, animate] = useAnimate();
  const sequence = [
    [".letter", { opacity: [0, 1] }, { duration: 0.1, delay: stagger(0.05) }],
  ];

  return (
    <div>
      <section className="hero w-screen min-h-screen bg-yellow text-center">
        <Title />
        <Navbar />
        <Trending />
      </section>
      <section className="w-screen min-h-screen bg-title flex flex-col justify-between text-3xl text-body sm:text-5xl">
        <div
          ref={scope}
          className="pt-10 pl-5 font-spline h-full  font-bold lg:text-7xl lg:pt-20 lg:pl-32 lg:w-10/12"
        >
          <motion.h2
            whileInView={() => {
              scope.current && animate(sequence);
            }}
            viewport={{ once: true }}
            className="welcome-title inline-block"
          >
            {"Welcome to".split("").map((letter, index) => (
              <span className="letter" key={index}>
                {letter}
              </span>
            ))}
          </motion.h2>{" "}
          <motion.h2 className="welcome-text inline-block">
            {`Booktopia`.split("").map((letter, index) => (
              <span className="letter text-yellow" key={index}>
                {letter}
              </span>
            ))}
          </motion.h2>
          <motion.h2 className="welcome-text inline-block">
            {"the ultimate haven for bookworkms craving juicy reviews and\n insightful takes on their favorite reads."
              .split("")
              .map((letter, index) => (
                <span className="letter" key={index}>
                  {letter}
                </span>
              ))}
          </motion.h2>
        </div>
        <SocialNetwork />
      </section>
      <CallToAction />
      {/* <section className="metrics flex justify-center text-title">
        <div className="w-10/12 flex flex-col sm:flex-row justify-between">
          <div className="pt-10">
            <h2 className="font-fascinate text-5xl sm:text-7xl">101</h2>
            <p className="font-spline font-bold text-2xl sm:text-3xl lg:text-5xl">
              Critic reviews available for your reading pleasure.
            </p>
          </div>
          <div className="pt-10">
            <h2 className="font-fascinate text-5xl sm:text-7xl">329</h2>
            <p className="font-spline font-bold text-2xl sm:text-3xl lg:text-5xl">
              Books recommended by our wonderful community.
            </p>
          </div>
        </div>
      </section> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;

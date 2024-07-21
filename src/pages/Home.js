import React, { useEffect, useState } from "react";
import {
  Title,
  Navbar,
  Trending,
  SocialNetwork,
  CallToAction,
  Subscribe,
  Footer,
} from "../components";

const Home = ({ subscribe }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <div>
      <section className="hero w-screen min-h-screen bg-yellow text-center">
        <Title />
        <Navbar />
        <Trending />
      </section>
      <section className="w-screen min-h-screen bg-title flex flex-col justify-between text-3xl text-body sm:text-5xl">
        <div className="pt-10 pl-5 font-spline  font-bold lg:text-7xl lg:pt-20 lg:pl-32 lg:w-10/12">
          <h2>
            Welcome to <span className="text-yellow">Booktopia,</span>
          </h2>
          <h2>
            the ultimate haven for bookworkms craving juicy reviews and
            insightful takes on their favorite reads.
          </h2>
        </div>
        <SocialNetwork />
      </section>
      <CallToAction />
      <section className="metrics flex justify-center text-title">
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
      </section>
      <Subscribe handleClick={subscribe} />
      <Footer />
    </div>
  );
};

export default Home;

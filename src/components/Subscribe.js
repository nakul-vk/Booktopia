import React from "react";
import { PrimaryBtn, PrimaryInput } from "../components";
import { IoIosArrowForward } from "react-icons/io";

const Subscribe = ({ handleClick }) => {
  return (
    <section
      className="cta-2 text-3xl md:text-5xl lg:text-6xl mt-12"
      id="subscribe"
    >
      <div className=" w-10/12 relative left-1/2 -translate-x-1/2 flex flex-col items-center py-16">
        <h1 className="font-fascinate text-5xl md:text-7xl text-title">
          Join Now
        </h1>
        <PrimaryInput
          type="email"
          placeholder="name@gmail.com"
          styles="h-24 md:h-28 lg:h-32 border-yellow text-title"
        />
        <PrimaryBtn
          text="Subscribe"
          icon={<IoIosArrowForward />}
          styles="bg-yellow text-white"
          handleClick={handleClick}
        />
      </div>
    </section>
  );
};

export default Subscribe;

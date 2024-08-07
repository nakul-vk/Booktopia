import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../components";

const CallToAction = () => {
  return (
    <section className="cta pt-5 md:pt-16" id="reviews">
      <div className=" relative left-1/2 -translate-x-1/2 w-10/12 flex flex-col items-center mt-5 md:mt-10 font-spline font-bold text-3xl md:text-5xl lg:text-6xl">
        <Link to="/search" className="w-full">
          <PrimaryBtn
            text="Browse Reviews"
            icon={<IoIosArrowForward />}
            styles="bg-title text-white h-24 md:h-28 lg:h-32"
            handleClick={() => {}}
          />
        </Link>
        <Link to="/request" className="w-full mt-10">
          <PrimaryBtn
            text="Request Review"
            icon={<IoIosArrowForward />}
            styles="border-solid border-title border-4 text-title h-24 md:h-28 lg:h-32"
            handleClick={() => {}}
          />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

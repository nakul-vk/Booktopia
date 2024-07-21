import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../components";

const CallToAction = () => {
  return (
    <section className="cta pt-16" id="reviews">
      <div className=" relative left-1/2 -translate-x-1/2 w-10/12 flex flex-col items-center mt-10 font-spline font-bold text-3xl md:text-5xl lg:text-6xl">
        <Link to="/reviews" className="w-full">
          <PrimaryBtn
            text="Browse Reviews"
            icon={<IoIosArrowForward />}
            styles="bg-title text-white"
          />
        </Link>
        <Link to="/request" className="w-full mt-10">
          <PrimaryBtn
            text="Request Review"
            icon={<IoIosArrowForward />}
            styles="border-solid border-title border-4 text-title"
          />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

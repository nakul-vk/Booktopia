import React, { useEffect, useState } from "react";
import { PrimaryBtn, PrimaryInput } from "../components";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { showMessage } from "../features/snackbar/snackbarSlice";
import axios from "axios";

const Subscribe = () => {
  const text = useSelector((state) => state.snackbar.value);
  const dispatch = useDispatch();

  const [user, setUser] = useState();

  const subscribe = async () => {
    try {
      const { data } = await axios.post("http://localhost:5555/user/", {
        user: user,
      });
      console.log(data);
    } catch (error) {
      console.error();
    }
    //Need to connect both results to snack bar
  };

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
          val={user}
          setVal={setUser}
          type="email"
          placeholder="name@gmail.com"
          styles="h-24 md:h-28 lg:h-32 m-10 border-yellow text-title"
        />
        <PrimaryBtn
          text="Subscribe"
          icon={<IoIosArrowForward />}
          styles="bg-yellow text-white h-24 md:h-28 lg:h-32"
          handleClick={subscribe}
        />
      </div>
    </section>
  );
};

export default Subscribe;

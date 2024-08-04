import React, { useState } from "react";
import { PrimaryBtn, PrimaryInput } from "../components";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { showSnackBar } from "../features/snackbar/snackbarSlice";
import axios from "axios";

const Subscribe = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");

  const subscribe = async () => {
    try {
      if (user === "") throw new Error("Email not provided");
      const { data } = await axios.post("http://localhost:5555/user/", {
        user: user,
      });
      dispatch(
        showSnackBar({
          message: data.message,
          type: data.type,
          open: true,
        })
      );
    } catch (error) {
      dispatch(
        showSnackBar({ message: error.message, type: "error", open: true })
      );
    }
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

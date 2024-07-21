import React, { useState } from "react";
import { Title, Navbar } from "../components";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [regEye, setRegEye] = useState("visible");
  const [regEyeSlash, setRegEyeSlash] = useState("hidden");
  const [type, setType] = useState("password");

  function toggleClass() {
    setRegEye((prev) => (prev === "visible" ? "hidden" : "visible"));
    setRegEyeSlash((prev) => (prev === "hidden" ? "visible" : "hidden"));
    setType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <section className="login w-screen h-screen">
      <Title />
      <Navbar />
      <div className="card w-10/12 relative left-1/2 -translate-x-1/2 mt-10 rounded-lg">
        <form action="" className="flex flex-col items-center p-5">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="w-full text-3xl border-solid border-yellow border-4 rounded-full p-5  text-black  font-spline font-bold outline-none mb-10"
          />
          <div className="w-full text-3xl border-solid border-yellow border-4 rounded-full p-5  text-black  font-spline font-bold mb-10 flex flex-row justify-between items-center">
            <input
              type={type}
              name="password"
              id="password"
              placeholder="password"
              className=" outline-none w-11/12"
            />
            <button
              className="text-title"
              onClick={(e) => {
                e.preventDefault();
                toggleClass();
              }}
            >
              <FaRegEye className={regEye} />
              <FaRegEyeSlash className={regEyeSlash} />
            </button>
          </div>
          <button className="text-title w-full bg-white p-5 font-spline font-bold flex justify-between items-center text-3xl border-black border-4 rounded-full">
            Login
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

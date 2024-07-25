import React from "react";
import { medias } from "../utils/socialMedia";
import { Social } from "../components";

const Footer = () => {
  return (
    <section className="flex flex-col items-center mt-10 md:mt-20 text-sm md:text-base font-spline">
      <div className=" flex justify-between w-10/12">
        {/* <div>
          <p className="text-black font-bold">Policies</p>
          <p className="text-title font-normal text-xs sm:text-base">Terms</p>
          <p className="text-title font-normal text-xs sm:text-base">Privacy</p>
          <p className="text-title font-normal text-xs sm:text-base">Cookies</p>
        </div> */}
      </div>
      <div className="social pt-10 w-10/12 flex flex-col items-center">
        <div className="external-links flex justify-center text-2xl gap-x-14">
          {medias.map(({ id, link, name, icon }) => (
            <Social
              key={id}
              link={link}
              name={name}
              icon={icon}
              hover={false}
            />
          ))}
        </div>
        <p className="mt-5"> &#169; 2024 Booktopia</p>
      </div>
    </section>
  );
};

export default Footer;

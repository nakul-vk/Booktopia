import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const links = [
    { children: "Home", link: "/" },
    { children: "Reviews", link: "/#reviews" },
    { children: "Join", link: "/#subscribe" },
  ];

  return (
    <div
      className="w-10/12 relative left-1/2 -translate-x-1/2 flex justify-between font-spline font-bold
     text-title text-base mt-5"
    >
      {links.map((link, index) => (
        <HashLink smooth={true} to={link.link} key={index}>
          {link.children}
        </HashLink>
      ))}
    </div>
  );
};

export default Navbar;

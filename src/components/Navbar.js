import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { stagger, motion, useAnimate } from "framer-motion";

const Navbar = () => {
  const links = [
    { children: "Home", link: "/" },
    { children: "Reviews", link: "/#reviews" },
    { children: "Join", link: "/#subscribe" },
  ];

  const [scope, animate] = useAnimate();

  const sequence = [[".links", { opacity: [0, 1] }, { delay: stagger(0.25) }]];

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <div
      ref={scope}
      className="w-10/12 relative left-1/2 -translate-x-1/2 flex justify-between font-spline font-bold
     text-title text-base mt-5"
    >
      {links.map((link, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1 }}>
          <HashLink className="links" smooth={true} to={link.link}>
            {link.children}
          </HashLink>
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;

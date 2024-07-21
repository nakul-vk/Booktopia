import React from "react";
import { Link } from "react-router-dom";

const Social = ({ link, name, icon, hover }) => {
  return (
    <Link
      to={link}
      key={name}
      target="_blank"
      className={hover && "hover:text-yellow"}
    >
      {icon}
    </Link>
  );
};

export default Social;

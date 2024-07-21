import React from "react";
import { Social } from "../components";
import { medias } from "../utils/socialMedia";

const SocialNetwork = () => {
  return (
    <div className="flex justify-between w-10/12 relative left-1/2 -translate-x-1/2 pb-10">
      {medias.map(({ id, link, name, icon }) => (
        <Social key={id} link={link} name={name} icon={icon} hover={true} />
      ))}
    </div>
  );
};

export default SocialNetwork;

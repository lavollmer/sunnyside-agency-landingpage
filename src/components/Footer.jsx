import React from "react";
import SunnyIcon from "./SunnyIcon"; // Import the SunnyIcon component
import Clickables from "./Clickables"; // Import the Clickables component
import Facebook from "../assets/icons/icon-facebook.svg";
import Instagram from "../assets/icons/icon-instagram.svg";
import Twitter from "../assets/icons/icon-twitter.svg";
import Pinterest from "../assets/icons/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-[#90D4C5]">
      <div>
        <img src={SunnyIcon} alt="Sunny Icon" />
      </div>
      <div className="text-[#2B7262]">
        <Clickables />
      </div>
      <div className="flex flex-row p-2 space-x-4">
        <img src={Facebook} alt="Facebook Icon" />
        <img src={Instagram} alt="Instagram Icon" />
        <img src={Twitter} alt="Twitter Icon" />
        <img src={Pinterest} alt="Pinterest Icon" />
      </div>
    </div>
  );
};

export default Footer;

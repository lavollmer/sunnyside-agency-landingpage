import React from "react";
import Clickables from "./Clickables"; // Import the Clickables component
import Facebook from "../assets/icons/icon-facebook.svg";
import Instagram from "../assets/icons/icon-instagram.svg";
import Twitter from "../assets/icons/icon-twitter.svg";
import Pinterest from "../assets/icons/icon-pinterest.svg";
import Logo from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-[#90D4C5]">
      <div>
        <img src={Logo} className="text-[#2B7262]"/>
      </div>
      <div className="text-darkfooter pt-10">
        <Clickables color="text-[#2B7262]" />
      </div>
      <div className="flex flex-row pt-20 space-x-4">
        <img src={Facebook} alt="Facebook Icon" />
        <img src={Instagram} alt="Instagram Icon" />
        <img src={Twitter} alt="Twitter Icon" />
        <img src={Pinterest} alt="Pinterest Icon" />
      </div>
    </div>
  );
};

export default Footer;

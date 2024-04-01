import React from "react";
import { useState } from "react";
import SunnyIcon from "./SunnyIcon"; // Import the SunnyIcon component
import Hamburger from "../assets/icons/icon-hamburger.svg"; // Import the Hamburger icon
import Clickables from "./Clickables"; // Import the Clickables component
import ContactButton from "./ContactButton"; // Import the ContactButton component

//declare functional component named Navbar
const Navbar = () => {
  // State for the mobile menu - initializes isMenuOpen with a value of false
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-[#3DBEFF] p-5 flex justify-between items-center">
      {/* Sunnyside Icon component imported for Navigation bar */}
      <div>
        <SunnyIcon size={80} />
      </div>
      <div className="hidden md:flex">
        <Clickables />
        <ContactButton />
      </div>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={Hamburger} alt="Hamburger icon for mobile menu" />
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-1/2 p-5 bg-white ">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

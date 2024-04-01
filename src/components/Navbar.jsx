import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="p-5">
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={Hamburger} alt="Hamburger icon for mobile menu" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center justify-center text-center fixed top-0 right-0 h-1/2 w- md:w-1/2 p-10 bg-white z-50 ">
          <Link
            to="/about"
            className="font-barlow font-600 text-md text-grayishblue mb-5"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-barlow font-600 text-md text-grayishblue mb-5"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="font-barlow font-600 text-md text-grayishblue mb-5"
          >
            Projects
          </Link>
          <ContactButton color="bg-yellow" />
        </div>
      )}
    </div>
  );
};

export default Navbar;

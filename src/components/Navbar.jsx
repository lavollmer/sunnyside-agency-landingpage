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
      <div>
        <SunnyIcon size={80} />
      </div>
      <div className="hidden md:flex md:flex-row md:justify-end w-full">
        <div className="flex">
          <Clickables />
          <ContactButton />
        </div>
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
        <>
          <div className="flex flex-col items-center justify-center bg-white text-center fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/3 w-3/4 z-50">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-8 border-transparent border-b-8 border-white"></div>
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
        </>
      )}
    </div>
  );
};

export default Navbar;

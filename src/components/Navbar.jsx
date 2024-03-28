import React from "react";
import { useState } from "react";
import SunnyIcon from "./SunnyIcon"; // Import the SunnyIcon component
import Hamburger from "../assets/icons/icon-hamburger.svg"; // Import the Hamburger icon

//declare functional component named Navbar
const Navbar = () => {
  // State for the mobile menu - initializes isMenuOpen with a value of false
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#3DBEFF]">
      {/* Sunnyside Icon component imported for Navigation bar */}
      <div>
        <SunnyIcon />
      </div>
      <div>
        <button>
          <img src={Hamburger} alt="Hamburger icon for mobile menu" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

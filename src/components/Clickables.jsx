import React from "react";
import { Link } from "react-router-dom";

const Clickables = () => {
  return (
    // add 1 rem of horizontal space between its child elements and margin of 10 pixels on the left and right sides
    <div className="flex flex-row items-center space-x-6 mx-10">
      <Link to="/about" className="text-white text-sm">
        About
      </Link>
      <Link to="/services" className="text-white text-sm">
        Services
      </Link>
      <Link to="/projects" className="text-white text-sm">
        Projects
      </Link>
    </div>
  );
};

export default Clickables;

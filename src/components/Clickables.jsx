import React from "react";
import { Link } from "react-router-dom";

const Clickables = ({ color = "text-white" }) => {
  return (
    // add 1 rem of horizontal space between its child elements and margin of 10 pixels on the left and right sides
    <div className="flex flex-row items-center space-x-10 mx-10 font-barlow font-600">
      <Link to="/about" className={`${color} text-md`}>
        About
      </Link>
      <Link to="/services" className={`${color} text-md`}>
        Services
      </Link>
      <Link to="/projects" className={`${color} text-md`}>
        Projects
      </Link>
    </div>
  );
};

export default Clickables;

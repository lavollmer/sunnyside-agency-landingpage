import React from "react";
import { Link } from "react-router-dom";

const Clickables = () => {
  return (
    <div>
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

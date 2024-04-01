import React from "react";
import { Link } from "react-router-dom";


const Brand = () => {
  return (
    <div className="bg-[#FFFBF8] p-40 flex flex-col space-y-16">
      <h1 className="text-[#202C35]">Transform your brand</h1>
      <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
      <Link to="/learnmore" className="text-[#333A3B]">
        <p className="font-bold text-sm" >LEARN MORE</p>
      </Link>
    </div>
  );
};

export default Brand;

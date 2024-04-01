import React from "react";
import { Link } from "react-router-dom";


const Brand = () => {
  return (
    <div className="bg-[#FFFBF8] p-20 md:p-40 flex flex-col items-center space-y-16">
      <h1 className="flex flex-row items-center text-md text-[#202C35]">Transform your brand</h1>
      <p className="text-sm">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
      <Link to="/learnmore" className="flex flex-row items-center text-[#333A3B] ">
        <p className="font-bold text-sm" >LEARN MORE</p>
      </Link>
    </div>
  );
};

export default Brand;

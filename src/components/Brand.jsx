import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="bg-[#FFFBF8] p-10 flex flex-col space-y-16">
      <h1 className="flex flex-row items-center font-fraunces font-700 md:text-md text-center text-[#202C35]">
        Transform your brand
      </h1>
      <p className="text-sm md:text-md front-barlow font-bold font-800 items-center text-center text-[#B0AFB4]">
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <Link to="/learnmore" className="flex flex-col md:flex-row justify-center items-center md:items-left text-[#333A3B] relative">
        <p className="items-center font-fraunces font-bold font-700 text-xl relative pb-1 z-10">
          LEARN MORE
        </p>
        <span className="absolute h-2 w-1/3 bottom-2 left-0 bg-underline-color z-0 left-1/2 transform -translate-x-1/2"></span>
      </Link>
    </div>
  );
};

export default Brand;

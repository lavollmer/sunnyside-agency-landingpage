import React from "react";
import { Link } from "react-router-dom";
const Audience = () => {
  return (
    <div className="bg-[#FFFBF8] p-10 md:p-40 flex flex-col  space-y-16">
      <h1 className="flex flex-row items-center text-center md:text-left font-fraunces font-bold font-700 text-md text-[#202C35]">
        Stand out to the right audience
      </h1>
      <p className="text-md text-center md:text-left front-barlow font-bold font-800 items-center text-[#B0AFB4]">
        Using a collaborative formula of designers, researchers, 
        photographers, videographers, and copywriters, we’ll build and extend 
        your brand in digital places.
      </p>
      <Link to="/learnmore" className="flex flex-col md:flex-row justify-center items-center md:items-left text-[#333A3B] relative">
        <p className=" text-center font-fraunces font-bold font-700 text-xl relative pb-1 z-10">
          LEARN MORE
        </p>
        <span className="absolute h-2 w-1/3 bottom-2 left-0 bg-underline-color2 z-0 left-1/2 transform -translate-x-1/2"></span>
      </Link>
    </div>
  );
};

export default Audience;

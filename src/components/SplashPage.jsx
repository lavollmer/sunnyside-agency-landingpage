import React from "react";
import Orange from "../assets/images/desktop/image-header.jpg"; // Import the Orange image
import Arrow from "../assets/icons/icon-arrow-down.svg"; // Import the Arrow icon

const SplashPage = () => {
  return (
    <div className="relative">
      <img src={Orange} alt="Orange Header photo" className="w-full" />

      <div className="absolute top-1/3 left-1/2 md:top-1/3 md:left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white font-fraunces font-bold font-900 text-3xl md:text-7xl tracking-wide md:text-7xl mb-5 md:mb-40">
          WE ARE CREATIVES
        </h1>
        <img
          src={Arrow}
          alt="Arrow down icon"
          className="mx-auto w-4 h-16 md:w-10 md:h-40 md:mt-20"
        />
      </div>
    </div>
  );
};

export default SplashPage;

import React from "react";
import Orange from "../assets/images/desktop/image-header.jpg"; // Import the Orange image
import Arrow from "../assets/icons/icon-arrow-down.svg"; // Import the Arrow icon

const SplashPage = () => {
  return (
    <div>
      <div className="relative">
        <img src={Arrow} alt="Arrow down icon" className="z-10 absolute" />
        <img src={Orange} alt="Orange Header phot" className="z-0"/>
      </div>
    </div>
  );
};

export default SplashPage;

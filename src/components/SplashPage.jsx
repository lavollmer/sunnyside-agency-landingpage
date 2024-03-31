import React from "react";
import Orange from "../assets/images/desktop/image-header.jpg"; // Import the Orange image
import Arrow from "../assets/icons/icon-arrow-down.svg"; // Import the Arrow icon

const SplashPage = () => {
    return (
        <div className="relative">
          {/* width of image to full length of the parent */}
            <img src={Orange} alt="Orange Header photo" className="w-full" />
            {/* position to the center of the div with the orange image */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-white font-bold text-8xl mb-40">WE ARE CREATIVES</h1>
                <img src={Arrow} alt="Arrow down icon" className="mx-auto mt-20" />
            </div>
        </div>
    );
};

export default SplashPage;


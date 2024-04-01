import React from "react";
import { Link } from "react-router-dom";
const Audience = () => {
  return (
    <div>
      <div className="bg-[#FFFBF8] p-20 md:p-40 flex flex-col items-center space-y-16">
        <h1 className="text-[#202C35]">Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <Link to="/learnmore" className="flex flex-row items-center">
          <p className="font-bold text-sm text-[#333A3B]">LEARN MORE</p>
        </Link>
      </div>
    </div>
  );
};

export default Audience;

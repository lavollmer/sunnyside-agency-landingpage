import React from "react";
import { Link } from "react-router-dom";
const Audience = () => {
  return (
    <div>
      <div className="bg-[#FFFBF8] p-40 flex flex-col space-y-16">
        <h1 className="text-[#202C35]">Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        {/* add a 2px thick border to the bottom with color */}
        <div className="border-b-10 border-[#F2E06B]">
          <Link to="/learnmore">
            <p className="font-bold text-sm text-[#333A3B]">LEARN MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Audience;

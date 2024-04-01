import React from "react";
import { Link } from "react-router-dom";
const Audience = () => {
  return (
    <div>
      <div className="bg-[#FFFBF8]">
        <h1 className="text-[#202C35]">Stand out to the right audience</h1>
        <p>
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
        </p>
        <Link to="/learnmore" className="text-[#333A3B]">
          <p className="font-bold text-sm">LEARN MORE</p>
        </Link>
      </div>
    </div>
  );
};

export default Audience;

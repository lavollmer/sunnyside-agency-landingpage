import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div>
      <Link to="/learnmore">
        <p className="font-bold text-black text-sm" >LEARN MORE</p>
      </Link>
    </div>
  );
};

export default LearnMore;

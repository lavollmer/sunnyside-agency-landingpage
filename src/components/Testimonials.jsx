import React from "react";
import Emily from "../assets/images/people/image-emily.jpg";
import Thomas from "../assets/images/people/image-thomas.jpg";
import Jennie from "../assets/images/people/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <h1 className="text-[#C3C1C2]">CLIENT TESTIMONIALS</h1>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="flex flex-col">
          <img src={Emily} alt="Emily image" className="rounded-full" />
          <h2 className="font-bold text-sm text-[#A2A2A2]">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </h2>
          <p className="font-bold text-lg text-[#44444B]">Emily R.</p>
          <p className="font-bold text-xs text-[#C7C6C4]">Marketing Director</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

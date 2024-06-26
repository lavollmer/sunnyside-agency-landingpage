import React from "react";
import Emily from "../assets/images/people/image-emily.jpg";
import Thomas from "../assets/images/people/image-thomas.jpg";
import Jennie from "../assets/images/people/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="flex flex-col p-2 md:p-10">
      <div className="flex items-center justify-center">
        <h1
          className="text-[#C3C1C2] font-fraunces font-bold font-700 pt-10 pb-10 md:pt-20 md:pb-10 text-lg md:text-xl tracking-widest"
        >
          CLIENT TESTIMONIALS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  p-10 md:p-20">
        <div className="flex flex-col items-center p-5 space-y-6">
          <img
            src={Emily}
            alt="Emily image"
            className="rounded-full w-1/4 h1-/4 p-2"
          />
          <h2 className="font-barlow font-bold font-600 text-md text-[#44444B] md:p-5 text-center">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </h2>
          <div className="flex flex-col items-center">
            <p className="font-fraunces font-bold font-700 text-lg text-[#252C34] pb-2">Emily R.</p>
            <p className="font-barlow font-bold font-600 text-xs text-[#C7C6C4] ">
              Marketing Director
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-5 space-y-6">
          <img
            src={Thomas}
            alt="Thomas image"
            className="rounded-full w-1/4 h1-/4 p-2"
          />
          <h2 className="font-barlow font-bold font-600  text-md text-[#44444B] p-5 text-center">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </h2>
          <div className="flex flex-col items-center">
            <p className="font-fraunces font-bold font-700 text-lg text-[#252C34] pb-2">Thomas S.</p>
            <p className="font-barlow font-bold font-600  text-xs text-[#C7C6C4] ">
              Chief Operating Officer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-5 space-y-6">
          <img
            src={Jennie}
            alt="Jennie image"
            className="rounded-full w-1/4 h1-/4 p-2"
          />
          <h2 className="font-barlow font-bold font-600  text-md text-[#44444B] p-5 text-center">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </h2>
          <div className="flex flex-col items-center">
            <p className="font-fraunces font-bold font-700 text-lg text-[#252C34] pb-2">Jennie F.</p>
            <p className="font-barlow font-bold font-600  text-xs text-[#C7C6C4] ">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

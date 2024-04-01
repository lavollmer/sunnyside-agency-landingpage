import React from "react";

const ContactButton = ({ color = "black" }) => {
  return (
    <div>
      <button className={`${color} rounded-full`}>
        <p className=" text-black font-fraunces font-900 text-sm">CONTACT</p>
      </button>
    </div>
  );
};

export default ContactButton;

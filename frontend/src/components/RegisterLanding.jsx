import React from "react";
import bigpic from "../assets/bigpic.png";
import logo from "../assets/logo.png";

const RegisterLanding = () => {
  return (
    <div className="min-h-screen h-full ">
      <img src={logo} alt="logo" className=" w-[25%] h-[25%] ml-auto" />
      <img src={bigpic} alt="bigpic" className=" w-[60%] h-[60%] mx-auto" />
      <p className="text-center font-semibold text-xl pt-5">
        Ensuring safety with Technology
      </p>
    </div>
  );
};

export default RegisterLanding;

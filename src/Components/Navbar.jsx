import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="nav px-[4%] w-full  text-white py-4 absolute top-0 left-0 flex items-center justify-between z-10">
      <div>
        <h1 className="text-4xl">Fitnix</h1>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <ul className="flex items-center gap-8 p-2 px-4  rounded-md text-sm list-none bg-[#fff]">
          <li className="text-white p-2 px-4 cursor-pointer rounded-lg bg-black">Home</li>
          <li className="text-black cursor-pointer">About</li>
          <li className="text-black cursor-pointer">Program</li>
          <li className="text-black cursor-pointer">Pricing</li>
          <li className="text-black cursor-pointer">Testimonial</li>
        </ul>

        <button className="bg-white text-white p-2 px-4 text-sm  rounded-md">
          <div className="bg-black p-2 rounded-sm cursor-pointer">CLAIM FREE TRIAL</div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

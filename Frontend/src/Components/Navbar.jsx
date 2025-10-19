import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  // When menu is open → add blur to everything except navbar
  useEffect(() => {
    const mainContent = document.querySelector("main") || document.body;
    if (toggle) {
      mainContent.classList.add("blur-md", "transition-all", "duration-500");
    } else {
      mainContent.classList.remove("blur-md");
    }
  }, [toggle]);

  return (
    <nav className="nav px-[4%] w-full text-white py-4 absolute top-0 left-0 flex items-center justify-between z-50">
      {/* Logo */}
      <Link to="/" className="flex gap-2 items-center">
        <svg
          className="w-8 h-8 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
        </svg>
        <h1 className="text-4xl font-bold ">FitFlex</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="md:flex gap-6 hidden justify-center items-center">
        <ul className="flex items-center gap-8 p-2 px-4 rounded-md text-sm list-none bg-white/90">
          <li className="rounded-lg bg-black p-2 px-4 cursor-pointer hover:bg-gray-800 transition-colors">
            <ScrollLink
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className="text-white "
            >
              Home
            </ScrollLink>
          </li>
          <li className="rounded-lg p-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors">
            <ScrollLink
              to="about"
              smooth={true}
              offset={-50}
              duration={500}
              className="text-black block"
            >
              About
            </ScrollLink>
          </li>
          <li className="rounded-lg p-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors">
            <ScrollLink
              to="Program"
              smooth
              offset={-50}
              duration={500}
              className="text-black block"
            >
              Program
            </ScrollLink>
          </li>
          <li className="rounded-lg p-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors">
            <ScrollLink
              to="pricing"
              smooth
              offset={-50}
              duration={500}
              className="text-black block"
            >
              Pricing
            </ScrollLink>
          </li>
          <li className="rounded-lg p-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors">
            <ScrollLink
              to="testimonial"
              smooth
              offset={-50}
              duration={500}
              className="text-black block"
            >
              Testimonial
            </ScrollLink>
          </li>
        </ul>
        <ScrollLink
          to="Contact"
          className="bg-white p-2 px-4 text-sm rounded-md cursor-pointer"
          smooth={true}
          offset={-80}
          duration={500}
        >
          <div className="bg-black p-2 rounded-sm text-white hover:bg-gray-800 transition-colors">
            CLAIM FREE TRIAL
          </div>
        </ScrollLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggle(!toggle)}
        className="text-2xl cursor-pointer md:hidden z-50 transition duration-300"
      >
        {toggle ? (
          <X
            size={35}
            className="transition-transform duration-300 rotate-180"
          />
        ) : (
          <Menu
            size={35}
            className="transition-transform duration-300 rotate-0"
          />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-[70px] w-full bg-black/90 text-white 
        flex flex-col items-center justify-center py-16 gap-8 transition-all duration-500 ease-in-out 
        ${toggle ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        z-40`}
      >
        <ScrollLink
          to="about"
          smooth
          offset={-80}
          duration={500}
          className="text-lg cursor-pointer hover:text-yellow-400 transition"
          onClick={() => setToggle(false)}
        >
          About
        </ScrollLink>

        <ScrollLink
          to="Program"
          smooth
          offset={-80}
          duration={500}
          className="text-lg cursor-pointer hover:text-yellow-400 transition"
          onClick={() => setToggle(false)}
        >
          Program
        </ScrollLink>

        <ScrollLink
          to="pricing"
          smooth
          offset={-80}
          duration={500}
          className="text-lg cursor-pointer hover:text-yellow-400 transition"
          onClick={() => setToggle(false)}
        >
          Pricing
        </ScrollLink>

        <ScrollLink
          to="testimonial"
          smooth
          offset={-80}
          duration={500}
          className="text-lg cursor-pointer hover:text-yellow-400 transition"
          onClick={() => setToggle(false)}
        >
          Testimonial
        </ScrollLink>

        <ScrollLink
          to="contact"
          className="bg-white text-white p-2 px-4 text-sm rounded-md"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => setToggle(false)}
        >
          <div className="bg-black p-2 rounded-sm cursor-pointer">
            CLAIM FREE TRIAL
          </div>
        </ScrollLink>
      </div>
    </nav>
  );
}

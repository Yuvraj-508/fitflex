import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
return (
  <div
    className="hero relative px-[6%] flex flex-col justify-center items-start text-white min-h-screen bg-cover bg-center sm:bg-right"
  
  >
    {/* LEFT MAIN CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 mt-20 sm:mt-28 md:mt-32 max-w-full sm:max-w-[70%] lg:max-w-[55%] text-left"
    >
      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full w-fit text-xs sm:text-sm tracking-wide"
      >
        <Star size={12} stroke="#FFD900" /> FITNESS FOR EVERYONE
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-[32px] sm:text-[48px] md:text-[64px] mt-4 sm:mt-6 font-bold leading-tight text-left"
      >
        MORE THAN A GYM — IT'S A LIFESTYLE
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-[14px] sm:text-[17px] md:text-[19px] mt-4 sm:mt-6 max-w-[90%] sm:max-w-md text-gray-200"
      >
        Join a community that pushes limits and celebrates every victory — big or small.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mt-6 sm:mt-8"
      >
        <button className="bg-[#FFD900] cursor-pointer flex items-center gap-3 text-black text-[13px] sm:text-[14px] px-5 py-3 rounded-md tracking-widest">
          JOIN FITNIX NOW <ArrowRight size={15} />
        </button>

        <button className="relative group cursor-pointer py-3 flex items-center gap-3 text-[13px] sm:text-[14px] tracking-wider">
          VISIT US <ArrowRight size={15} />
          <span className="absolute bottom-0 left-0 w-4 h-[2px] bg-white group-hover:w-full transition-all"></span>
        </button>
      </motion.div>
    </motion.div>

    {/* BOTTOM RIGHT MINI CONTAINER */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-6 sm:bottom-10 right-1/2 sm:right-8 translate-x-1/2 sm:translate-x-0 w-[90%] sm:w-[300px]"
    >
      {/* Offer Box */}
      <div className="bg-white text-black px-5 py-4 rounded-lg shadow-lg text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold">SPECIAL OFFER 🎉</h3>
        <p className="text-sm mt-2 text-gray-600">
          Get <span className="font-bold">50% OFF</span> on your first 3 months!
        </p>
        <button className="mt-3 bg-[#FFD900] text-black text-sm px-4 py-2 rounded-md cursor-pointer w-full sm:w-auto">
          CLAIM NOW
        </button>
      </div>

      {/* Customer Data */}
      <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4">
        {/* Avatars */}
        <div className="flex -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user1"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white opacity-80"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user2"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white opacity-80"
          />
          <img
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="user3"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white opacity-80"
          />
        </div>

        <p className="text-[13px] sm:text-[14px] text-gray-300">
          16K+ Members enjoy our facilities
        </p>
      </div>
    </motion.div>

    {/* OPTIONAL: Background Overlay */}
  </div>
);



}

export default Hero;

 
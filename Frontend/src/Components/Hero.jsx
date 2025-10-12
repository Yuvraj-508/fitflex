import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero relative px-[4%] flex flex-col justify-center items-start text-white h-screen">

      {/* Left Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative top-35"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full w-fit text-sm tracking-wide"
        >
          <Star size={12} stroke="#FFD900" /> FITNESS FOR EVERYONE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[64px] mt-3 font-bold my-4 leading-[1.3] max-w-[60%]"
        >
          MORE THAN A GYM - IT'S A LIFESTYLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[20px] mt-8 max-w-sm text-gray-200"
        >
          Join a community that pushes limits and celebrates every victory — big or small.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-8 mt-7"
        >
          <button className="bg-[#FFD900] cursor-pointer flex items-center gap-3 text-black text-[14px] px-5 py-3 rounded-md tracking-widest">
            JOIN FITNIX NOW <ArrowRight size={15} />
          </button>
          <button className="relative group cursor-pointer py-3 flex items-center gap-3 text-[14px] tracking-wider">
            VISIT US <ArrowRight size={15}/>
            <span className="absolute bottom-0 left-0 w-4 h-[2px] bg-white group-hover:w-full transition-all"></span>
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Right Mini Container */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 right-8 w-[280px]"
      >
        {/* Offer Box */}
        <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">SPECIAL OFFER 🎉</h3>
          <p className="text-sm mt-2 text-gray-600">
            Get <span className="font-bold">50% OFF</span> on your first 3 months!
          </p>
          <button className="mt-3 bg-[#FFD900] text-black text-sm px-4 py-2 rounded-md cursor-pointer">
            CLAIM NOW
          </button>
        </div>

        {/* Customer Data */}
        <div className="flex items-center gap-10 mt-4">
          {/* Avatars */}
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user1"
              className="w-11 h-11 rounded-full border-2 border-white opacity-70"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="user2"
              className="w-11 h-11 rounded-full border-2 border-white opacity-70"
            />
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="user3"
              className="w-11 h-11 rounded-full border-2 border-white opacity-70"
            />
          </div>
          {/* Text */}
          <p className="text-[14px] text-gray-300">16K+ Members enjoy our facilities</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;

 
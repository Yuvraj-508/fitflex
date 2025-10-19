import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Users,
  Target,
  TrendingUp,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../../assets/p1.avif";
import img2 from "../../assets/p2.avif";
import img3 from "../../assets/p3.avif";
import img4 from "../../assets/p4.avif";

const Program = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const programs = [
    {
      id: "01",
      title: "TRANSFORMATION PROGRAMS",
      description:
        "Fitnix offers structured, time-bound programs backed by expert trainers, nutrition guidance, and weekly accountability.",
      features: [
        { icon: Target, text: "Goal-oriented training plans" },
        { icon: TrendingUp, text: "Before & After progress tracking" },
        { icon: MessageCircle, text: "24/7 chat with trainer support" },
      ],
      image: img1,
    },
    {
      id: "02",
      title: "PERSONAL TRAINING",
      description:
        "Sessions with certified trainers who push you safely toward your goals tailored for your body, pace, & lifestyle.",
      features: [
        { icon: Users, text: "One-on-one expert guidance" },
        { icon: Calendar, text: "Flexible scheduling options" },
        { icon: Dumbbell, text: "Customized workout routines" },
      ],
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    },
    {
      id: "03",
      title: "GROUP CLASSES",
      description:
        "Personalized meal plans and nutrition guidance designed to complement your training and accelerate your results.",
      features: [
        { icon: Target, text: "Custom meal planning" },
        { icon: TrendingUp, text: "Macro tracking & analysis" },
        { icon: MessageCircle, text: "Daily nutrition support" },
      ],
      image: img2,
    },
    {
      id: "04",
      title: "NUTRITION COACHING",
      description:
        "Personalized meal plans and nutrition guidance designed to complement your training and accelerate your results.",
      features: [
        { icon: Target, text: "Custom meal planning" },
        { icon: TrendingUp, text: "Macro tracking & analysis" },
        { icon: MessageCircle, text: "Daily nutrition support" },
      ],
      image: img3,
    },
    {
      id: "05",
      title: "ONLINE COACHING",
      description:
        "Personalized meal plans and nutrition guidance designed to complement your training and accelerate your results.",
      features: [
        { icon: Target, text: "Custom meal planning" },
        { icon: TrendingUp, text: "Macro tracking & analysis" },
        { icon: MessageCircle, text: "Daily nutrition support" },
      ],
      image: img4,
    },
  ];

  // Next/Prev slide functions
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % programs.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length);

  // Calculate style for 3D carousel
  const getCardStyle = (index) => {
    const diff = index - activeIndex;

    if (diff === 0) {
      return {
        transform: "translateX(0) translateZ(0) rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
      };
    } else if (diff === 1 || diff === -(programs.length - 1)) {
      return {
        transform: "translateX(70%) translateZ(-100px) rotateY(-20deg) scale(0.85)",
        opacity: 0.6,
        zIndex: 20,
      };
    } else if (diff === -1 || diff === programs.length - 1) {
      return {
        transform: "translateX(-70%) translateZ(-100px) rotateY(20deg) scale(0.85)",
        opacity: 0.6,
        zIndex: 20,
      };
    } else {
      return {
        transform: "translateX(0) translateZ(-200px) scale(0.7)",
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <div className="bg-black Program flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Dumbbell className="w-5 h-5 text-yellow-400" />
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
            Our Programs
          </p>
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-wide text-white">
          PROGRAMS THAT DELIVER REAL RESULTS
        </h1>
        <p className="text-gray-400 text-md md:text-lg max-w-md mx-auto">
          Personalized, trackable programs built to push limits and redefine your body.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl h-[550px] sm:h-[600px] md:h-[650px] flex items-center justify-center">
        <div className="relative w-full h-full" style={{ perspective: "1500px" }}>
          <div className="relative w-full h-full flex items-center justify-center">
            {programs.map((program, index) => {
              const isActive = index === activeIndex;
              const style = getCardStyle(index);

              return (
                <motion.div
                  key={program.id}
                  className="absolute w-[80vw] sm:w-80 md:w-96 h-[480px] sm:h-[520px] md:h-[580px] cursor-pointer rounded-2xl"
                  style={{ ...style, transformStyle: "preserve-3d" }}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.85, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Card Content */}
                  <div className="w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/20 flex flex-col">
                    {/* Number */}
                    <div className="flex justify-end p-5">
                      <span className={`text-5xl font-black transition-colors duration-500 ${isActive ? "text-yellow-400" : "text-white/30"}`}>
                        {program.id}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative mx-4 sm:mx-6 mt-2 rounded-xl overflow-hidden h-60 sm:h-64 md:h-72">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>

                    {/* Text */}
                    <div className="p-5 flex flex-col text-center flex-grow mt-2">
                      <h2 className="text-lg sm:text-xl font-black mb-2 text-white">
                        {program.title}
                      </h2>
                      <p className="text-xs hidden md:block  mb-4 text-gray-400">{program.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mt-auto">
                        {program.features.map((feature, idx) => {
                          const Icon = feature.icon;
                          return (
                            <div key={idx} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${isActive ? "bg-yellow-400" : "bg-gray-600"}`}></div>
                              <Icon className={`w-4 h-4 ${isActive ? "text-yellow-400" : "text-gray-600"}`} />
                              <span className={`text-xs ${isActive ? "text-white" : "text-gray-600"}`}>{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 bg-black/50 hover:bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center z-40"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 bg-black/50 hover:bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center z-40"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex gap-2 sm:gap-3 justify-center mt-4">
        {programs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-10 sm:w-12 bg-yellow-400" : "w-2 bg-white/30 hover:bg-yellow-400/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Program;


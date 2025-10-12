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
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/p1.avif";
import img2 from "../assets/p2.avif";
import img3 from "../assets/p3.avif";
import img4 from "../assets/p4.avif";

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

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
        transform:
          "translateX(320px) translateZ(-200px) rotateY(-25deg) scale(0.85)",
        opacity: 0.6,
        zIndex: 20,
      };
    } else if (diff === -1 || diff === programs.length - 1) {
      return {
        transform:
          "translateX(-320px) translateZ(-200px) rotateY(25deg) scale(0.85)",
        opacity: 0.6,
        zIndex: 20,
      };
    } else {
      return {
        transform: "translateX(0) translateZ(-400px) scale(0.7)",
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <div className="h-[180vh] bg-black relative overflow-hidden flex flex-col items-center justify-center p-8">
      <div className="relative text-center z-10 w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dumbbell className="w-5 h-5 text-yellow-400" />
            <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
              Our Programs
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-wide text-center text-white">
            PROGRAMS THAT DELIVER REAL RESULTS
          </h1>
          <p className="text-gray-400 text-md md:text-lg max-w-md mx-auto">
            Personalized, trackable programs built to push limits and redefine
            what your body can do.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center mb-12">
          <div
            className="relative w-full h-full"
            style={{ perspective: "2000px" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence>
                {programs.map((program, index) => {
                  const style = getCardStyle(index);
                  const isActive = index === activeIndex;

                  return (
                    <motion.div
                      key={program.id}
                      className="absolute w-96 h-[520px] cursor-pointer"
                      style={{ ...style, transformStyle: "preserve-3d" }}
                      onClick={() => setActiveIndex(index)}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: isActive ? 1 : 0.85,
                      }}
                      viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
                      transition={{ duration: 0.7 }}
                    >
                      <motion.div
                        className="w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/20 flex flex-col relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: isActive ? 0.3 : 0 }}
                      >
                        {/* Number at top right */}
                        <div className="flex items-start justify-end p-6 pb-0">
                          <span
                            className={`text-5xl font-black ${
                              isActive ? "text-yellow-400" : "text-white/30"
                            } transition-colors duration-500`}
                          >
                            {program.id}
                          </span>
                        </div>

                        {/* Image Section */}
                        <div className="relative h-60 overflow-hidden mx-6 mt-4 rounded-xl">
                          <motion.img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover object-top transition-all duration-500"
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{
                              scale: isActive ? 1 : 0.95,
                              opacity: isActive ? 1 : 0.4,
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>

                        {/* Text Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <motion.h2
                            className="text-xl font-black mb-3 tracking-tight"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: isActive ? 1 : 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                          >
                            {program.title}
                          </motion.h2>

                          <motion.p
                            className="text-xs mb-6 leading-relaxed"
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: isActive ? 1 : 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                          >
                            {program.description}
                          </motion.p>

                          {/* Features */}
                          <div className="space-y-3 mt-auto">
                            {program.features.map((feature, idx) => {
                              const Icon = feature.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  className="flex items-center gap-3"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{
                                    opacity: isActive ? 1 : 0.3,
                                    x: 0,
                                  }}
                                  transition={{
                                    duration: 0.7,
                                    delay: 0.4 + idx * 0.1,
                                  }}
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full ${
                                      isActive ? "bg-yellow-400" : "bg-gray-600"
                                    } transition-colors duration-500`}
                                  ></div>
                                  <Icon
                                    className={`w-4 h-4 ${
                                      isActive
                                        ? "text-yellow-400"
                                        : "text-gray-600"
                                    } transition-colors duration-500`}
                                  />
                                  <span
                                    className={`text-xs font-medium ${
                                      isActive ? "text-white" : "text-gray-600"
                                    } transition-colors duration-500`}
                                  >
                                    {feature.text}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-14 h-14 bg-black/50 hover:bg-yellow-400/20 border border-yellow-400/30 hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-400 transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-14 h-14 bg-black/50 hover:bg-yellow-400/20 border border-yellow-400/30 hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
          >
            <ChevronRight className="w-6 h-6 text-yellow-400 transition-colors" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-3 justify-center">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-12 bg-yellow-400"
                  : "w-2 bg-white/30 hover:bg-yellow-400/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;

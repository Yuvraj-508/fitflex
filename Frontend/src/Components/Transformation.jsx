import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import beforeImg1 from "../../assets/before.jpeg";
import afterImg1 from "../../assets/after.png";
import beforeImg2 from "../../assets/before2.jpeg"; // add your second image
import afterImg2 from "../../assets/after.png"; // add your second image

const data = [
  {
    name: "COURTNEY HENRY",
    age: 52,
    weeks: 33,
    beforeWeight: "99kg",
    afterWeight: "77kg",
    beforeFat: "35%",
    afterFat: "20%",
    beforeImg: beforeImg1,
    afterImg: afterImg1,
  },
  {
    name: "LESLIE ALEXANDER",
    age: 25,
    weeks: 36,
    beforeWeight: "85kg",
    afterWeight: "74kg",
    beforeFat: "35%",
    afterFat: "15%",
    beforeImg: beforeImg2,
    afterImg: afterImg2,
  },
];

const Transformation = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % data.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + data.length) % data.length);

  const current = data[index];

  return (
    <section className="bg-[#121212] text-white py-24 px-[4%] md:px-12 lg:px-20 mt-10 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div className="max-w-2xl">
          <p className="text-yellow-400 text-sm font-semibold uppercase mb-3">
            Before & After
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-15 mb-4">
            LET’S SEE OUR STUDENTS <br /> HAVE TRANSFORMED
          </h2>
          <p className="text-gray-400 text-md leading-relaxed">
            We build confidence, habits, and mindset. These are the real stories
            of people who <br /> started just like you — and now live stronger.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 relative -bottom-16">
          <button
            onClick={handlePrev}
            className="border-2 border-yellow-400 p-5 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="border-2 border-yellow-400 p-5 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid md:grid-cols-2 gap-18 items-center"
        >
          {/* Left - Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2 font-bold">{current.name}</h3>
              <p className="text-gray-400">Age: {current.age}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase text-gray-400 tracking-wider">
                {current.weeks} Weeks
              </p>

              <div className="grid grid-cols-3 text-sm md:text-base border-t border-gray-700 pt-4">
                <p className="text-gray-400">Weight</p>
                <p className="text-yellow-400 font-semibold">
                  {current.beforeWeight}
                </p>
                <p className="font-semibold">{current.afterWeight}</p>
              </div>

              <div className="grid grid-cols-3 text-sm md:text-base border-t border-gray-700 pt-4">
                <p className="text-gray-400">Body burn</p>
                <p className="text-yellow-400 font-semibold">
                  {current.beforeFat}
                </p>
                <p className="font-semibold">{current.afterFat}</p>
              </div>
            </div>
          </div>

          {/* Right - Images */}
          <div className="flex items-center justify-end gap-8">
            <motion.div
              className="relative w-52 md:w-64 lg:w-72"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img
                src={current.beforeImg}
                alt="Before"
                className="rounded-lg object-cover w-full h-full"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold uppercase tracking-wide">
                Before
              </p>
            </motion.div>

            <motion.div
              className="relative w-52 md:w-64 lg:w-72"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
            >
              <img
                src={current.afterImg}
                alt="After"
                className="rounded-lg object-cover w-full h-full"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold uppercase tracking-wide">
                After
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Transformation;



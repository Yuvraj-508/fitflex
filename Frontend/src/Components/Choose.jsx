import React from "react";
import { Dumbbell, Users, Utensils, Award } from "lucide-react";

export default function FitnessLanding() {
  return (
    <div className="px-[4%] mt-20 bg-black text-white py-16 md:py-24">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* LEFT COLUMN */}
    <div className="relative z-10">
      {/* Tagline */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-yellow-400">⭐</span>
        <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
          Why Choose Us
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
        WHY CHOOSE <span className="text-yellow-400">FITFLEX?</span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        Discover a fitness community that inspires, motivates, and supports you every step of the way. 
        Achieve your goals with expert guidance and world-class facilities.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-10 mb-8">
        <div>
          <div className="text-2xl sm:text-3xl font-bold mb-1">
            200<span className="text-yellow-400">+</span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">Fitness Equipment</p>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-bold mb-1">
            52<span className="text-yellow-400">+</span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">Fitness Trainers</p>
        </div>
      </div>

      {/* Button */}
      <button className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded font-bold text-sm sm:text-md hover:bg-yellow-500 transition">
        JOIN FITFLEX NOW
      </button>
    </div>

    {/* RIGHT COLUMN - Feature Cards */}
  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
  {/* COLUMN 1 */}
  <div className="flex flex-col gap-6 sm:gap-10">
    {/* Card 1 */}
    <div className="box bg-zinc-900 flex flex-col justify-between w-full h-auto sm:h-[260px] border border-zinc-800 rounded-lg p-6 hover:bg-zinc-800 transition">
      <div className="flex flex-col items-start gap-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <Dumbbell className="text-black" size={22} />
        </div>
        <h3 className="font-bold text-white text-lg">Youth-Focused Programs</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mt-4">
        Tailored fitness plans designed specifically for younger athletes and beginners.
      </p>
    </div>

    {/* Card 2 */}
    <div className="box bg-zinc-900 flex flex-col justify-between w-full h-auto sm:h-[260px] border border-zinc-800 rounded-lg p-6 hover:bg-zinc-800 transition">
      <div className="flex flex-col items-start gap-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <Award className="text-black" size={22} />
        </div>
        <h3 className="font-bold text-white text-lg">Certified Coaches Who Care</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mt-4">
        Expert trainers committed to your success and personal growth every step.
      </p>
    </div>
  </div>

  {/* COLUMN 2 */}
  <div className="flex flex-col gap-6 sm:gap-10 sm:translate-y-8">
    {/* Card 3 */}
    <div className="box bg-zinc-900 flex flex-col justify-between w-full h-auto sm:h-[260px] border border-zinc-800 rounded-lg p-6 hover:bg-zinc-800 transition">
      <div className="flex flex-col items-start gap-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <Users className="text-black" size={22} />
        </div>
        <h3 className="font-bold text-white text-lg">Flexible, No-Pressure Plans</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mt-4">
        Workout schedules that adapt to your lifestyle without stress or pressure.
      </p>
    </div>

    {/* Card 4 */}
    <div className="box bg-zinc-900 flex flex-col justify-between w-full h-auto sm:h-[260px] border border-zinc-800 rounded-lg p-6 hover:bg-zinc-800 transition">
      <div className="flex flex-col items-start gap-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <Utensils className="text-black" size={22} />
        </div>
        <h3 className="font-bold text-white text-lg">Real Results, Real Fast</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mt-4">
        Proven training methods that deliver measurable progress in record time.
      </p>
    </div>
  </div>
</div>

  </div>
</div>

  );
}

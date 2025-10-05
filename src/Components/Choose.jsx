import React from "react";
import { Dumbbell, Users, Utensils, Award } from "lucide-react";

export default function FitnessLanding() {
  return (
    <div className=" px-[4%] mt-30 bg-black text-white">
      {/* Hero Section */}
      <div className="  px-6 py-16">
        <div className="grid md:grid-cols-2  ">
          {/* Left Column */}
          <div className="relative z-10 top-30">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400 text-sm font-semibold">
                Why Choose Us
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-2 tracking-widest leading-snug">
              WHY CHOOSE FITNIX?
            </h1>

            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
              Discover a fitness community that inspires, motivates, and supports you at every step. Achieve your goals with expert guidance and top-notch facilities.
            </p>

            {/* Stats */}
            <div className="space-y-8 mb-5 flex  gap-10">
              <div>
                <div className="text-2xl font-bold mb-2">
                  200<span className="text-yellow-400">+</span>
                </div>
                <p className="text-gray-400">Fitness Equipment</p>
              </div>

              <div>
                <div className="text-2xl font-bold mb-2">
                  52<span className="text-yellow-400">+</span>
                </div>
                <p className="text-gray-400">Fitness Trainer</p>
              </div>
            </div>

            <button className="bg-yellow-400 text-black px-8 py-4 rounded font-bold text-md hover:bg-yellow-500 transition">
              JOIN FITNIX NOW
            </button>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-20 ">
            {/* Youth-Focused Programs */}
            <div className="flex flex-col  gap-18">
              <div className="bg-zinc-900  box flex items-start justify-center flex-col  w-[300px] h-[280px] border-zinc-800 rounded-lg  px-6 hover:bg-zinc-800 transition">
                <div className="flex flex-col items-start gap-5 mb-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="text-black" size={22} />
                  </div>
                  <h3 className="font-bold text-white text-lg pt-2">
                    Youth-Focused Programs
                  </h3>
                </div>
                <p className="text-gray-400  text-sm leading-relaxed">
                  Tailored fitness plans designed specifically for younger
                  athletes and beginners.
                </p>
              </div>

              {/* Certified Coaches Who Care */}
              <div className="bg-zinc-900 border box flex items-start justify-center flex-col  w-[300px] h-[280px] border-zinc-800 rounded-lg  px-6 hover:bg-zinc-800 transition">
                <div className="flex flex-col items-start gap-5 mb-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-black" size={22} />
                  </div>
                  <h3 className="font-bold text-white text-lg pt-2">
                    Certified Coaches Who Care
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expert trainers committed to your success and personal growth
                  every step.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-18   translate-y-25">
              {/* Flexible, No-Pressure Plans */}
              <div className="bg-zinc-900 border box flex items-start justify-center flex-col  w-[300px] h-[280px] border-zinc-800 rounded-lg  px-6 hover:bg-zinc-800 transition">
                <div className="flex flex-col items-start gap-5 mb-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-black" size={22} />
                  </div>
                  <h3 className="font-bold text-white text-lg pt-2">
                    Flexible, No-Pressure Plans
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Workout schedules that adapt to your lifestyle without the
                  stress or commitment anxiety.
                </p>
              </div>

              {/* Real Results, Real Fast */}
              <div className="bg-zinc-900 border box flex items-start justify-center flex-col  w-[300px] h-[280px] border-zinc-800 rounded-lg  px-6 hover:bg-zinc-800 transition">
                <div className="flex flex-col items-start gap-5 mb-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Utensils className="text-black" size={22} />
                  </div>
                  <h3 className="font-bold text-white text-lg pt-2">
                    Real Results, Real Fast
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Proven training methods that deliver measurable progress in
                  record time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards Section */}
     
      </div>
    </div>
  );
}

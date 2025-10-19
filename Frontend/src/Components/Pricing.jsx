import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPlan() {
  return (
    <div className="pricing bg-[#121212] text-white py-20">
  <div className="max-w-7xl mx-auto px-[4%]">
    
    {/* Header */}
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-yellow-400">⚡</span>
        <span className="text-yellow-400 text-sm font-semibold uppercase">Pricing Plan</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        CHOOSE YOUR PLAN
      </h1>

      <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto">
        Choose a plan that fits your goals, schedule, and lifestyle — we've got an option for you.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Starter Plan */}
      <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-2">STARTER PLAN</h2>
        <p className="text-gray-400 mb-8">Perfect for beginners starting their fitness journey.</p>
        
        <div className="mb-8">
          <span className="text-gray-400 text-2xl">₹</span>
          <span className="text-yellow-400 text-6xl font-bold">1500</span>
          <span className="text-gray-400 text-xl">/month</span>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>Gym access during off-peak hours</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>2 group fitness classes per month</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>One-time fitness assessment</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>Access to workout tracking app</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>Month-to-month billing, cancel anytime</span>
          </li>
        </ul>

        <button className="w-full bg-transparent border-2 border-zinc-700 py-4 rounded font-bold hover:bg-white hover:text-black transition">
          GET STARTED
        </button>
      </div>

      {/* Pro Plan */}
      <div className="bg-yellow-400 rounded-2xl p-8 text-black hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-2">PRO PLAN</h2>
        <p className="mb-8 text-gray-800">For regular gym-goers aiming to level up their fitness.</p>
        
        <div className="mb-8">
          <span className="text-xl">₹</span>
          <span className="text-6xl font-bold">4000</span>
          <span className="text-xl">/month</span>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <Check className="mt-1" size={20} />
            <span>Unlimited 24/7 gym access</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1" size={20} />
            <span>8 group fitness classes/month</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1" size={20} />
            <span>Personalized workout program</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1" size={20} />
            <span>Progress tracking & analytics</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1" size={20} />
            <span>Community group support</span>
          </li>
        </ul>

        <button className="w-full bg-black text-white py-4 rounded font-bold hover:bg-zinc-800 transition">
          GET STARTED
        </button>
      </div>

      {/* Elite Membership */}
      <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-2">ELITE MEMBERSHIP</h2>
        <p className="text-gray-400 mb-8">For those committed to total transformation.</p>
        
        <div className="mb-8">
          <span className="text-gray-400 text-2xl">₹</span>
          <span className="text-yellow-400 text-6xl font-bold">7000</span>
          <span className="text-gray-400 text-xl">/month</span>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>Everything in Pro Plan</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>2 personal training sessions/month</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>Nutrition planning & coaching</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-yellow-400 mt-1" size={20} />
            <span>Premium customer support</span>
          </li>
        </ul>

        <button className="w-full bg-transparent border-2 border-zinc-700 py-4 rounded font-bold hover:bg-white hover:text-black transition">
          GET STARTED
        </button>
      </div>
    </div>
  </div>
</div>

  );
}
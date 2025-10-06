import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPlan() {
  return (
    <div className=" mt-25 text-white" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto px-[4%] py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-yellow-400">⚡</span>
            <span className="text-yellow-400 text-sm font-semibold">Pricing Plan</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            CHOOSE YOUR PLAN
          </h1>
          
          <p className="text-gray-400 text-md max-w-md text-center  mx-auto">
            Choose a plan that fits your goals, schedule, and lifestyle we've got an option for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold mb-3">STARTER PLAN</h2>
            <p className="text-gray-400 mb-8">A simple, affordable entry into fitness.</p>
            
            <div className="mb-8">
              <span className="text-gray-400 text-xl">$</span>
              <span className="text-yellow-400 text-6xl font-bold">29</span>
              <span className="text-gray-400 text-xl">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Gym access during off-peak hours</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">2 group fitness classes per month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">One-time fitness assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Access to workout tracking app</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Community group support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Month-to-month billing, cancel anytime</span>
              </li>
            </ul>

            <button className="w-full bg-transparent border-2 border-zinc-700 text-white py-4 rounded font-bold hover:bg-white hover:text-black transition">
              GET STARTED
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-yellow-400 rounded-lg p-8 text-black">
            <h2 className="text-2xl font-bold mb-3">PRO PLAN</h2>
            <p className="text-black mb-8">For regular gym-goers aiming to level up</p>
            
            <div className="mb-8">
              <span className="text-xl">$</span>
              <span className="text-6xl font-bold">53</span>
              <span className="text-xl">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">Unlimited 24/7 gym access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">8 group fitness classes/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">Personalized workout program</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">Progress tracking & analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">Community group support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">Month-to-month billing, cancel anytime</span>
              </li>
            </ul>

            <button className="w-full bg-black text-white py-4 rounded font-bold hover:bg-zinc-800 transition">
              GET STARTED
            </button>
          </div>

          {/* Elite Membership */}
          <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold mb-3">ELITE MEMBERSHIP</h2>
            <p className="text-gray-400 mb-8">All-in access for serious transformation</p>
            
            <div className="mb-8">
              <span className="text-gray-400 text-xl">$</span>
              <span className="text-yellow-400 text-6xl font-bold">99</span>
              <span className="text-gray-400 text-xl">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Everything in Pro Plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">2 personal training sessions/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Nutrition planning & coaching</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Access to workout tracking app</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Community group support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Premium customer support</span>
              </li>
            </ul>

            <button className="w-full bg-transparent border-2 border-zinc-700 text-white py-4 rounded font-bold hover:bg-white hover:text-black transition">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
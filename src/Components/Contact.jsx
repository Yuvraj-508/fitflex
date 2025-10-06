import React, { useState } from 'react';
import img from '../assets/contact.webp';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: ''
  });

  const programs = [
    'Transformation Programs',
    'Personal Training',
    'Group Classes',
    'Nutrition Coaching',
    'Online Coaching'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className=" bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-25 items-center">
          {/* Left Column - Form */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400">⚡</span>
              <span className="text-yellow-400 text-sm font-semibold uppercase">Contact Us</span>
            </div>

            <h1 className="text-5xl font-bold mb-5 leading-tight">
              LET'S SCHEDULE YOUR<br />FIRST SESSION
            </h1>

            <p className="text-zinc-400 text-lg mb-8">
              Got questions or ready to begin your fitness journey with Fitnix?<br />
              Take the first step toward a stronger, healthier you.
            </p>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded px-6 py-3 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              {/* Phone and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded px-6 py-3 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded px-6 py-3 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              {/* Program Select */}
              <div>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded px-6 py-3 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5rem'
                  }}
                >
                  <option value="" className="bg-zinc-900 text-zinc-500">Select Programs --</option>
                  {programs.map((program) => (
                    <option key={program} value={program} className="bg-zinc-900 text-white">
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border border-zinc-800 rounded px-6 py-3 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-yellow-400 text-black px-10 py-3 rounded font-bold text-lg hover:bg-yellow-500 transition"
              >
                SUBMIT NOW
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-[550px] rounded-lg overflow-hidden">
            <img
             src ={img}
              alt="Fitness Training"
              className="w-full h-full object-cover object-top-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
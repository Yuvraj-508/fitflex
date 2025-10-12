import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Roberts",
      role: "Training Specialist, USA",
      content:
        "Reshape has transformed my fitness journey, pushing me beyond limits I never imagined. With expert guidance and motivation, I'm achieving lasting results I once thought impossible.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast, UK",
      content:
        "The trainers at Reshape genuinely care about your progress. Their personalized approach helped me lose 30 pounds and gain confidence I never knew I had.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Professional Athlete, Canada",
      content:
        "As an athlete, I needed a gym that could keep up with my training demands. Reshape exceeded all expectations with their state-of-the-art equipment and expert coaching staff.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Emily Martinez",
      role: "Yoga Instructor, Australia",
      content:
        "The community at Reshape is unlike any other gym. Everyone supports each other, and the variety of classes keeps me motivated and excited to work out every day.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Business Executive, USA",
      content:
        "With my busy schedule, I needed flexible gym hours and efficient workouts. Reshape's 24/7 access and personalized training programs fit perfectly into my lifestyle.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Nutritionist, Germany",
      content:
        "The holistic approach to fitness and nutrition at Reshape has helped me transform not just my body, but my entire lifestyle. The results speak for themselves!",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="mt-15 bg-black text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold uppercase mb-3">
            Testimonials
          </p>
          <div className="flex items-center justify-center mt-5 mb-8">
            <Star className="text-yellow-400 animate-bounce w-8 h-8 mr-4" />
            <h2 className="text-6xl font-bold text-center">
              Voice of our members
            </h2>
            <Star className="text-yellow-400 animate-bounce w-8 h-8 ml-4" />
          </div>

          {/* Animated content */}
          <div className="mt-10 min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-xl text-gray-300 max-w-3xl font-bold mx-auto leading-relaxed"
              >
                {testimonials[activeTestimonial].content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Avatar Navigation */}
        <div className="flex justify-center items-center gap-8 mb-20 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer transition-all duration-300 ${
                index === activeTestimonial
                  ? "scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {index === activeTestimonial ? (
                <motion.div
                  layout
                  className="flex items-center gap-5 rounded-full p-2 border-2 border-yellow-400 bg-zinc-900"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
  <div className="testimonial mt-20 bg-black text-white py-20 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-yellow-400 text-xs sm:text-sm font-semibold uppercase mb-3 tracking-wide">
        Testimonials
      </p>

      <div className="flex items-center justify-center mt-4 mb-6 flex-wrap gap-2">
        <Star className="text-yellow-400 animate-bounce w-6 h-6 sm:w-8 sm:h-8" />
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center">
          Voice of our members
        </h2>
        <Star className="text-yellow-400 animate-bounce w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      {/* Animated content */}
      <div className="mt-8 min-h-[100px] sm:min-h-[120px] px-2">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl font-medium sm:font-semibold mx-auto leading-relaxed text-center"
          >
            {testimonials[activeTestimonial].content}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>

    {/* Avatar Navigation */}
    <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-16 flex-wrap px-4">
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
              className="flex items-center gap-3 sm:gap-5 rounded-full p-2 sm:p-3 border-2 border-yellow-400 bg-zinc-900"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div className="text-left hidden sm:block">
                <div className="font-bold text-white text-sm sm:text-base md:text-lg">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-zinc-400">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ) : (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-yellow-400"
            />
          )}
        </motion.div>
      ))}
    </div>
  </div>
</div>

  );
}

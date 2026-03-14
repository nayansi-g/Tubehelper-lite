"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Owner, Spice Garden Restaurant · Austin, TX",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: `"TubeHelper Lite built our website and set up WhatsApp automation. Our reservation inquiries went up by 60% in the first month alone. The AI handles all the initial questions — we just show up!"`,
      badge: "+60% reservations"
    },
    {
      name: "Daniel Cruz",
      role: "Fitness Studio Owner · Miami, FL",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: `"The AI voice agent answers calls 24/7 and books classes automatically. We never miss leads anymore."`,
      badge: "+45% leads"
    },
    {
      name: "Sarah Kim",
      role: "Dental Clinic Manager · San Diego, CA",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: `"Our clinic now gets consistent appointment bookings through automated messages and SEO."`,
      badge: "+70% bookings"
    }
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const testimonial = testimonials[index];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
          CLIENT STORIES
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Real Businesses.{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Real Results.
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Hear from local business owners who transformed their online presence with TubeHelper Lite.
        </p>


        {/* Testimonial Card */}
        <div className="relative mx-auto max-w-3xl mt-14">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-md p-8 text-left"
            >

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Badge */}
              <div className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">
                {testimonial.badge}
              </div>

              {/* Quote */}
              <Quote className="absolute right-10 top-10 text-purple-100" size={30} />

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                {testimonial.text}
              </p>

              {/* Client */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={testimonial.image}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>


          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">

            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-purple-600"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
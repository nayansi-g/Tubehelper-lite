"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  Utensils,
  HeartPulse,
  Dumbbell,
  Scissors,
  Home,
  Store,
  Scale,
  Smile,
  Building2,
  GraduationCap,
  Globe,
  Zap,
  Star
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { name: "Restaurants", icon: Utensils },
    { name: "Clinics", icon: HeartPulse },
    { name: "Gyms", icon: Dumbbell },
    { name: "Salons", icon: Scissors },
    { name: "Real Estate", icon: Home },
    { name: "Local Shops", icon: Store },
    { name: "Law Firms", icon: Scale },
    { name: "Dentists", icon: Smile },
    { name: "Hotels", icon: Building2 },
    { name: "Tutors", icon: GraduationCap }
  ];

  const services = [
    "Website Design",
    "AI Voice Agent",
    "WhatsApp Automation",
    "SEO Optimization",
    "Google Business",
    "Social Media Growth",
    "Lead Generation",
    "Business Automation"
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Top Badge */}
        <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
          INDUSTRIES WE SERVE
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-tight">
          Helping Businesses Build a{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Strong Online Presence
          </span>
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          From restaurants to clinics, we help local businesses across all industries
          attract more customers and automate their growth.
        </p>

        {/* Industry Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm"
              >
                <Icon size={16} className="text-purple-600" />
                {item.name}
              </div>
            );
          })}
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden mt-14">
          <motion.div
            className="flex gap-8 text-white text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 py-4 px-8 rounded-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...services, ...services].map((service, i) => (
              <div key={i} className="flex items-center gap-3 whitespace-nowrap ">
                {service}
                <span className="text-purple-200">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <StatCard icon={Store} number={200} suffix="+" text="Businesses Supported" />
          <StatCard icon={Globe} number={180} suffix="+" text="Websites Built" />
          <StatCard icon={Zap} number={95} suffix="+" text="Automation Systems Deployed" />
          <StatCard icon={Star} number={98} suffix="%" text="Client Satisfaction Rate" />

        </div>

      </div>
    </section>
  );
}

function StatCard({ icon: Icon, number, suffix, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-3xl shadow-md text-center"
    >
      <div className="flex justify-center mb-5">
        <div className="p-4 rounded-xl bg-purple-100">
          <Icon className="text-purple-600" size={22} />
        </div>
      </div>

      <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        <CountUp end={number} duration={2} suffix={suffix} />
      </h3>

      <p className="text-gray-500 mt-2 text-sm">{text}</p>
    </motion.div>
  );
}
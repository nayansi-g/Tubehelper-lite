"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Reveal from "./Reveal";
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
  Star,
  CircleSmall,
} from "lucide-react";

const INDUSTRIES = [
  { name: "Restaurants", icon: Utensils },
  { name: "Clinics", icon: HeartPulse },
  { name: "Gyms", icon: Dumbbell },
  { name: "Salons", icon: Scissors },
  { name: "Real Estate", icon: Home },
  { name: "Local Shops", icon: Store },
  { name: "Law Firms", icon: Scale },
  { name: "Dentists", icon: Smile },
  { name: "Hotels", icon: Building2 },
  { name: "Tutors", icon: GraduationCap },
];

const SERVICES = [
  "Website Design",
  "AI Voice Agent",
  "WhatsApp Automation",
  "SEO Optimization",
  "Google Business",
  "Social Media Growth",
  "Lead Generation",
  "Business Automation",
];

const STATS = [
  { icon: Store, number: 200, suffix: "+", text: "Businesses Supported" },
  { icon: Globe, number: 180, suffix: "+", text: "Websites Built" },
  { icon: Zap, number: 95, suffix: "+", text: "Automation Systems Deployed" },
  { icon: Star, number: 98, suffix: "%", text: "Client Satisfaction Rate" },
];

export default function IndustriesSection() {
  const marqueeItems = [...SERVICES, ...SERVICES];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <div>
            <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-indigo-700 border-indigo-200 bg-indigo-50">
              INDUSTRIES WE SERVE
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-tight">
              Helping Businesses Build a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text">
                Strong Online Presence
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From restaurants to clinics, we help local businesses across all industries
              attract more customers and automate their growth.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {INDUSTRIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.name} delay={i * 0.02}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm">
                  <Icon size={16} className="text-indigo-600" />
                  {item.name}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="relative overflow-hidden mt-12 rounded-full border border-indigo-200 bg-gradient-to-r from-indigo-600 to-sky-500">
            <motion.div
              className="flex w-max items-center gap-8 px-8 py-4 text-white text-sm font-semibold"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {marqueeItems.map((service, i) => (
                <span key={`${service}-${i}`} className="flex items-center gap-1 whitespace-nowrap">
                  <CircleSmall className="w-1 h-1 bg-white rounded-full" />{service}
                  {/* <span className="text-white/60">�</span> */}
                </span>
              ))}
            </motion.div>
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50" /> */}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {STATS.map((stat, index) => (
            <Reveal key={stat.text} delay={index * 0.05}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, number, suffix, text }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-md text-center">
      <div className="flex justify-center mb-5">
        <div className="p-4 rounded-xl bg-indigo-100">
          <Icon className="text-indigo-600" size={22} />
        </div>
      </div>

      <h3 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
        <CountUp end={number} duration={2} suffix={suffix} />
      </h3>

      <p className="text-gray-500 mt-2 text-sm">{text}</p>
    </div>
  );
}

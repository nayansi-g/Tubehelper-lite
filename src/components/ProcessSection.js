"use client";

import Reveal from "./Reveal";
import { Calendar, Wrench, Rocket, CircleCheck } from "lucide-react";

const STEPS = [
  {
    icon: Calendar,
    title: "Book a Demo",
    desc: "Schedule a free 30-minute discovery call. We'll learn about your business, goals, and the challenges you're facing online.",
    badge: "Free - No commitment - 30 minutes",
    color: "from-indigo-500 to-sky-500",
  },
  {
    icon: Wrench,
    title: "We Build Your System",
    desc: "Our team builds your custom website, sets up AI automation tools, and configures your marketing systems from scratch.",
    badge: "Done-for-you - 7-14 day delivery",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Your Business Grows",
    desc: "Watch your business start getting more calls, leads, and customers -- all through automated systems that run 24/7.",
    badge: "Measurable results - Ongoing support",
    color: "from-emerald-500 to-lime-500",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#EEF2FF]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <div>
            <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-indigo-700 border-indigo-200 bg-indigo-50">
              HOW IT WORKS
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Simple Process.{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text">
                Powerful Results.
              </span>
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Getting started is easy. Three steps from zero to a fully automated
              digital growth machine.
            </p>
          </div>
        </Reveal>

        <div className="relative flex justify-between items-center mt-16 max-w-3xl mx-auto">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-indigo-500 to-emerald-400"></div>

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-lg bg-gradient-to-r ${step.color}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="absolute -top-2 -right-2 text-xs bg-white border border-gray-100 rounded-full w-6 h-6 flex items-center justify-center shadow">
                    0{i + 1}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg">{step.title}</h3>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-5 inline-block px-4 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
                  <span className="flex gap-1 items-center">
                    <CircleCheck className="w-3 h-3 bg-indigo-500 text-white rounded-full" />
                    {step.badge}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12">
            <a href="/#BookDemo"><button className="px-8 cursor-pointer py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-sky-600 shadow-lg hover:shadow-xl transition">
              <span className="flex gap-1 items-center justify-center">
                <Calendar className="w-4 h-4" /> Start With a Free Demo
              </span>
            </button></a>

            <p className="text-gray-400 text-sm mt-3">
              No contracts. No setup fees. Just results.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

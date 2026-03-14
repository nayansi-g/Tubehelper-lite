"use client";

import { Calendar, Wrench, Rocket, CircleCheck } from "lucide-react";

export default function ProcessSection() {

  const steps = [
    {
      icon: Calendar,
      title: "Book a Demo",
      desc: "Schedule a free 30-minute discovery call. We'll learn about your business, goals, and the challenges you're facing online.",
      badge: "Free • No commitment • 30 minutes",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Wrench,
      title: "We Build Your System",
      desc: "Our team builds your custom website, sets up AI automation tools, and configures your marketing systems from scratch.",
      badge: "Done-for-you • 7-14 day delivery",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Rocket,
      title: "Your Business Grows",
      desc: "Watch your business start getting more calls, leads, and customers — all through automated systems that run 24/7.",
      badge: "Measurable results • Ongoing support",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-[#ECE8FE]">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
          HOW IT WORKS
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Simple Process.{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Powerful Results.
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Getting started is easy. Three steps from zero to a fully automated
          digital growth machine.
        </p>


        {/* Icons Row */}
        <div className="relative flex justify-between items-center mt-16 max-w-3xl mx-auto">

          {/* line */}
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-purple-500 to-green-400"></div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative z-10 flex flex-col items-center">

                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-lg bg-gradient-to-r ${step.color}`}
                >
                  <Icon size={22} />
                </div>

                <div className="absolute -top-2 -right-2 text-xs bg-white border border-gray-100 rounded-full w-6 h-6 flex items-center justify-center shadow">
                  0{i + 1}
                </div>

              </div>
            );
          })}

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
              >

                <h3 className="font-semibold text-lg">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-5 inline-block  px-4 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                <span className="flex gap-1 items-center">  <CircleCheck className="w-3 h-3 bg-purple-500 text-white rounded-full" />{step.badge}</span>
                </div>

              </div>
            );
          })}

        </div>


        {/* CTA */}
        <div className="mt-12">

          <button className="px-8 py-3 rounded-xl  text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition">
           <span className="flex gap-1 items-center justiify-center"><Calendar className="w-4 h-4"/> Start With a Free Demo</span>
          </button>

          <p className="text-gray-400 text-sm mt-3">
            No contracts. No setup fees. Just results.
          </p>

        </div>

      </div>

    </section>
  );
}
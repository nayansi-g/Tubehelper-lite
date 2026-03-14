"use client";

import { Rocket, Calendar, ArrowRight, CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">

      {/* radial circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] border border-white/20 rounded-full"></div>
        <div className="absolute w-[650px] h-[650px] border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/20 backdrop-blur">
          <Rocket size={16} />
          Start Growing Today
        </div>

        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
          Ready To Grow Your <br /> Business Online?
        </h2>

        {/* description */}
        <p className="mt-4 text-white/80 text-md md:text-lg max-w-xl mx-auto">
          Let TubeHelper Lite create the systems that help your business
          attract and convert more customers — on autopilot.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

         <a href="/#Contact"><button className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition">
            <Calendar size={18} />
            Book a Free Demo
          </button></a> 

          <a className="/services"><button className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition">
            View Our Services
            <ArrowRight size={18} />
          </button></a>

        </div>

        {/* trust points */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm text-white/80">

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-400" />
            No setup fees
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-400" />
            No long-term contracts
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-400" />
            Results in 7–14 days
          </div>

        </div>

      </div>
    </section>
  );
}
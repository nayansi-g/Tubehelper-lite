"use client";

import Link from "next/link";
import { Rocket, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] border border-white/20 rounded-full"></div>
        <div className="absolute w-[650px] h-[650px] border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/20 backdrop-blur">
            <Rocket size={16} />
            Start Growing Today
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
            Ready To Grow Your <br /> Business Online?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-white/80 text-md md:text-lg max-w-xl mx-auto">
            Let TubeHelper Lite create the systems that help your business
            attract and convert more customers -- on autopilot.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/#Contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <Calendar size={18} />
              Book a Free Demo
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition"
            >
              View Our Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-300" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-300" />
              No long-term contracts
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-300" />
              Results in 7-14 days
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

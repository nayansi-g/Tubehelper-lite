"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { CheckCircle } from "lucide-react";

const CASE_STUDY = {
  title: "Case Study: Riverside Dental",
  subtitle: "From low visibility to fully booked in 30 days",
  description:
    "We rebuilt their website, set up AI call handling, and launched a local SEO playbook. The result was immediate lead flow and a predictable booking pipeline.",
  image: "/about1.jpg",
  metrics: [
    { value: "+182%", label: "Website traffic" },
    { value: "+63%", label: "Phone call volume" },
    { value: "3.1x", label: "Lead conversion rate" },
  ],
  bullets: [
    "New conversion-focused website in 10 days",
    "AI agent handling 90% of inbound calls",
    "SEO + Google profile optimization",
  ],
};

export default function CaseStudySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
              {CASE_STUDY.title}
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              {CASE_STUDY.subtitle}
            </h2>
            <p className="mt-4 text-slate-600">{CASE_STUDY.description}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {CASE_STUDY.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <p className="text-xl font-bold text-slate-900">{metric.value}</p>
                  <p className="text-xs text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {CASE_STUDY.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle size={16} className="text-emerald-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={CASE_STUDY.image}
                alt="Case study preview"
                width={680}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-xs text-slate-500">Avg booking speed</p>
              <p className="text-lg font-bold text-slate-900">5.2 days</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

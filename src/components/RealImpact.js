"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Building2,
  Clock3,
  Globe,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const stats = [
  {
    id: 1,
    number: 200,
    suffix: "+",
    title: "Local Businesses Helped",
    description: "Across restaurants, clinics, salons, gyms, and more",
    icon: Building2,
  },
  {
    id: 2,
    number: 180,
    suffix: "+",
    title: "Websites Delivered",
    description: "Each built to convert visitors into customers",
    icon: Globe,
  },
  {
    id: 3,
    number: 95,
    suffix: "+",
    title: "Automation Systems",
    description: "AI voice agents, WhatsApp bots, and more",
    icon: Zap,
  },
  {
    id: 4,
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Based on post-project surveys",
    icon: Sparkles,
  },
  {
    id: 5,
    number: 14,
    suffix: " days",
    title: "Avg. Delivery Time",
    description: "From kickoff to live website or system",
    icon: Clock3,
  },
  {
    id: 6,
    number: 3,
    suffix: "x",
    title: "Avg. Lead Increase",
    description: "Reported by clients in the first 90 days",
    icon: TrendingUp,
  },
];

function CountUp({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-white/15 bg-white/[0.08] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-2xl" />

      <div className="relative z-10">
        <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white/12 text-white">
          <Icon size={18} strokeWidth={2} />
        </div>

        <h3 className="mb-3 text-4xl font-extrabold tracking-tight text-[#4b32f0] sm:text-5xl">
          <CountUp end={item.number} suffix={item.suffix} />
        </h3>

        <h4 className="mb-2 text-base font-semibold text-white sm:text-lg">
          {item.title}
        </h4>

        <p className="text-sm leading-6 text-white/70">{item.description}</p>
      </div>
    </div>
  );
}

export default function RealImpactSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#6238F6] via-[#4C46F5] to-[#2D63FF] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%)]" />

      <div className="absolute left-1/2 top-[130px] h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-[175px] h-[460px] w-[460px] -translate-x-1/2 rounded-full border border-white/8" />
      <div className="absolute left-1/2 top-[120px] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex text-bold items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
            <BarChart3 size={14} />
            <span className="text-bold">By The Numbers</span>
          </div>
        </div>

        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="text-[24px] font-extrabold tracking-tight text-white sm:text-[34px] lg:text-[44px]">
            Real Impact for Real Businesses
          </h2>

          <p className="mx-auto mt-2 max-w-2xl  leading-7 text-white/75 text-md">
            Numbers that reflect the trust local businesses have placed in us
            and the results we&apos;ve delivered together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
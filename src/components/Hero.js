"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Zap,
  MessageCircle,
  Star,
  TrendingUp,
  Users,
  User,
} from "lucide-react";
import Reveal from "./Reveal";

const BARS = [
  30, 40, 25, 60, 50, 75, 60, 80, 70, 85, 65, 90, 70, 95, 80, 100,
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal>
          <div>
            <div className="inline-block mb-4 px-4 py-1 text-[11px] sm:text-xs font-bold tracking-widest border rounded-full text-indigo-700 border-indigo-200 bg-indigo-50">
              AI-POWERED BUSINESS GROWTH PLATFORM
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
              Turn Your <br />
              Business Into <br />
              an{" "}
              <span className="bg-gradient-to-r from-indigo-700 to-sky-600 bg-clip-text text-transparent">
                Automated Growth
              </span>{" "}
              Machine
            </h1>

            <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-gray-600">
              TubeHelper Lite helps local businesses attract more customers using
              professional websites, AI automation, and smart marketing systems --
              all in one place.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#BookDemo"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg w-full sm:w-auto"
              >
                <Calendar size={18} />
                Book a Demo
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-center gap-2 rounded-xl border border-indigo-200 px-6 py-3 font-semibold text-indigo-800 hover:bg-indigo-50 w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <User
                  alt="Client avatar 1"
                  className="h-7 w-7 bg-black text-white rounded-full border"
                />
                <User
                  // src="/avatar2.jpg"
                  alt="Client avatar 2"
                  className="h-7 w-7 bg-black text-white rounded-full border"
                />
                <User
                  // src="/avatar3.jpg"
                  alt="Client avatar 3"
                  className="h-7 w-7 bg-black text-white rounded-full border"
                />
              </div>

              <div className="text-xs sm:text-sm text-gray-600">
                5-star rated by{" "}<br/>
                <span className="font-semibold text-gray-800">
                  200+ local businesses
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="rounded-3xl bg-white p-4 sm:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.2)] shadow-indigo-200">
              <p className="text-xs font-semibold text-gray-400">
                BUSINESS DASHBOARD
              </p>

              <h3 className="mt-1 text-sm sm:text-base font-semibold text-gray-800">
                Riverside Dental Clinic
              </h3>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
                <div className="rounded-xl shadow-sm p-2 sm:p-3">
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Monthly Visitors
                  </p>
                  <p className="text-lg sm:text-xl font-bold">3,847</p>
                  <p className="text-[10px] text-emerald-500 font-semibold">+23%</p>
                </div>

                <div className="rounded-xl shadow-sm p-2 sm:p-3">
                  <p className="text-[10px] sm:text-xs text-gray-400">New Leads</p>
                  <p className="text-lg sm:text-xl font-bold">142</p>
                  <p className="text-[10px] text-emerald-500 font-semibold">+18%</p>
                </div>

                <div className="rounded-xl shadow-sm p-2 sm:p-3">
                  <p className="text-[10px] sm:text-xs text-gray-400">Calls Handled</p>
                  <p className="text-lg sm:text-xl font-bold">289</p>
                  <p className="text-[10px] text-emerald-500 font-semibold">Auto</p>
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-gray-200 p-3 sm:p-4">
                <div className="flex items-end justify-between h-14 sm:h-20">
                  {BARS.map((height, i) => (
                    <div
                      key={i}
                      className={`w-3 sm:w-4 rounded-t-sm ${
                        i >= 9
                          ? "bg-gradient-to-t from-indigo-600 to-sky-400"
                          : "bg-indigo-200"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <p className="mt-2 text-[10px] sm:text-xs text-gray-500">
                  Website Traffic -- Last 12 Months
                </p>
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-indigo-100">
                    <Zap className="h-4 w-4 text-indigo-600" />
                  </div>
                  <p className="text-xs text-gray-600">AI answered 3 calls</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-sky-100">
                    <MessageCircle className="h-4 w-4 text-sky-600" />
                  </div>
                  <p className="text-xs text-gray-600">WhatsApp: New booking</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-amber-100">
                    <Star className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="text-xs text-gray-600">New 5-star review</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 right-0 rounded-xl bg-white px-5 py-2 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white mb-3">
                <TrendingUp size={15} />
              </div>
              <p className="text-xs text-gray-400">Revenue Growth</p>
              <p className="text-lg font-bold text-gray-900">+147%</p>
              <p className="text-[10px] text-gray-400">vs last quarter</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-28 -left-2 md:-left-10 rounded-xl bg-white px-5 py-2 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-600 text-white mb-3">
                <Zap size={15} />
              </div>
              <p className="text-xs text-gray-400">AI Responses</p>
              <p className="text-lg font-bold text-gray-900">98.7%</p>
              <p className="text-[10px] text-gray-400">auto-handled</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-16 -right-10 rounded-xl bg-white px-5 py-2 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-600 text-white mb-3">
                <Users size={15} />
              </div>
              <p className="text-xs text-gray-400">New Leads</p>
              <p className="text-lg font-bold text-gray-900">2,340</p>
              <p className="text-[10px] text-gray-400">this month</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

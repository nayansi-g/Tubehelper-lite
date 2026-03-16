"use client";

import Reveal from "./Reveal";
import { Globe, Phone, MessageCircle, MapPin, Search, Megaphone } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Creation",
    desc: "Modern, professional websites designed to convert visitors into customers. Mobile-first, fast-loading, and built to rank.",
    tags: ["Landing Pages", "E-Commerce", "Booking Sites"],
    color: "from-indigo-500 to-sky-500",
  },
  {
    icon: Phone,
    title: "AI Voice Agent",
    desc: "AI-powered receptionist that answers calls and manages customer inquiries automatically -- 24/7, no staff needed.",
    tags: ["24/7 Coverage", "Call Handling", "Appointment Booking"],
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    desc: "Automated WhatsApp responses that help businesses engage customers instantly -- from inquiries to follow-ups.",
    tags: ["Auto Replies", "Lead Capture", "Order Updates"],
    color: "from-emerald-500 to-lime-500",
  },
  {
    icon: MapPin,
    title: "Google Business Makeover",
    desc: "Optimize your Google Business listing to improve visibility on Search and Maps and attract local customers.",
    tags: ["Local SEO", "Reviews", "Maps Visibility"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Improve search rankings and drive organic traffic to your business through proven on-page and off-page strategies.",
    tags: ["Keyword Research", "On-Page SEO", "Link Building"],
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    desc: "Grow brand presence and connect with customers through strategic, consistent social media content and management.",
    tags: ["Content Creation", "Scheduling", "Analytics"],
    color: "from-cyan-500 to-blue-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <div>
            <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-indigo-700 border-indigo-200 bg-indigo-50">
              WHAT WE DO
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-tight">
              Everything Your Business Needs to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text">
                Grow Online
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl text-md md:text-lg mx-auto mt-4">
              Six powerful services, one unified growth system. We handle the digital
              side so you can focus on running your business.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="p-6 text-left rounded-3xl border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl text-white bg-gradient-to-r ${service.color}`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold mt-6 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm font-medium text-indigo-600 hover:underline cursor-pointer">
                    Learn more 
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-14">
           <a href="/services"> <button className="px-8 py-3 cursor-pointer rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-sky-600 shadow-lg hover:shadow-xl transition">
              View All Services 
            </button></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

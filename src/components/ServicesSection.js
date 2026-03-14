"use client";

import {
  Globe,
  Phone,
  MessageCircle,
  MapPin,
  Search,
  Megaphone
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      desc: "Modern, professional websites designed to convert visitors into customers. Mobile-first, fast-loading, and built to rank.",
      tags: ["Landing Pages", "E-Commerce", "Booking Sites"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      desc: "AI-powered receptionist that answers calls and manages customer inquiries automatically — 24/7, no staff needed.",
      tags: ["24/7 Coverage", "Call Handling", "Appointment Booking"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      desc: "Automated WhatsApp responses that help businesses engage customers instantly — from inquiries to follow-ups.",
      tags: ["Auto Replies", "Lead Capture", "Order Updates"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Google Business Makeover",
      desc: "Optimize your Google Business listing to improve visibility on Google Search and Maps and attract local customers.",
      tags: ["Local SEO", "Reviews", "Maps Visibility"],
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      desc: "Improve search rankings and drive organic traffic to your business through proven on-page and off-page strategies.",
      tags: ["Keyword Research", "On-Page SEO", "Link Building"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      desc: "Grow brand presence and connect with customers through strategic, consistent social media content and management.",
      tags: ["Content Creation", "Scheduling", "Analytics"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">

        {/* Badge */}
        <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
          WHAT WE DO
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-tight">
          Everything Your Business Needs to{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Grow Online
          </span>
        </h2>

        <p className="text-gray-500 max-w-2xl text-md md:text-lg mx-auto mt-4">
          Six powerful services, one unified growth system. We handle the digital
          side so you can focus on running your business.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="p-4 text-left rounded-3xl hover:text-puple-600  border border-gray-200 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-purple-200 transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl text-white bg-gradient-to-r ${service.color}`}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg  font-semibold mt-6 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="mt-6 text-sm font-medium text-purple-600 hover:underline cursor-pointer">
                  Learn more →
                </div>
              </div>
            );
          })}

        </div>

        {/* Button */}
        <div className="mt-14">
          <button className="px-8 py-3  cursor-pointer rounded-xl text-white font-medium bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition">
            View All Services →
          </button>
        </div>

      </div>
    </section>
  );
}
"use client";

import Reveal from "./Reveal";
import { Mail, MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "EMAIL US",
    text: "hello@tubehelperlite.com",
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    icon: MessageCircle,
    title: "WHATSAPP",
    text: "Chat with us on WhatsApp",
    color: "text-emerald-600 bg-emerald-100",
  },
  {
    icon: Calendar,
    title: "BOOK A DEMO",
    text: "Schedule a free 30-min call",
    color: "text-sky-600 bg-sky-100",
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#F8F7FF]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <div>
            <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-indigo-700 border-indigo-200 bg-indigo-50">
              GET IN TOUCH
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900">
              Let&apos;s Grow{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text">
                Your Business
              </span>
            </h2>

            <p className="text-gray-600 mt-4 max-w-lg">
              Ready to take your local business to the next level? Fill out the form
              and we&apos;ll get back to you within 24 hours to discuss your growth goals.
            </p>

            <div className="mt-10 space-y-5">
              {CONTACT_METHODS.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <ContactCard {...item} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-100 to-sky-100 flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md px-3 bg-indigo-600 text-white">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="font-semibold">We respond within 24 hours</p>
                  <p className="text-sm text-gray-600">
                    Our team is ready to help your business grow. Don&apos;t hesitate to
                    reach out -- every great partnership starts with a conversation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <form className="space-y-6">
              <FormField label="YOUR NAME *" placeholder="John Smith" />
              <FormField label="EMAIL ADDRESS *" placeholder="john@yourbusiness.com" />
              <FormField label="BUSINESS NAME *" placeholder="Sunrise Coffee Shop" />

              <div>
                <label className="text-xs font-semibold text-gray-600">
                  SERVICE INTERESTED IN
                </label>
                <select className="mt-2 w-full border rounded-lg p-3 text-sm">
                  <option>Select a service...</option>
                  <option>Website Development</option>
                  <option>AI Voice Agent</option>
                  <option>WhatsApp Automation</option>
                  <option>SEO Optimization</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600">MESSAGE</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your business..."
                  className="mt-2 w-full border rounded-lg p-3 text-sm"
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-sky-600 shadow-lg hover:shadow-xl transition">
                <Calendar size={18} />
                Book a Demo
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, text, color }) {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${color}`}>
          <Icon size={18} />
        </div>

        <div>
          <p className="text-xs font-bold text-gray-500">{title}</p>
          <p className="font-medium text-sm text-gray-800">{text}</p>
        </div>
      </div>

      <ArrowRight size={18} className="text-gray-400" />
    </div>
  );
}

function FormField({ label, placeholder }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-600">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full border rounded-lg p-3 text-sm"
      />
    </div>
  );
}

"use client";

import {
  Mail,
  MessageCircle,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#F8F7FF]">

      <div className="max-w-7xl mx-auto px-6 md:px-10  grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* badge */}
          <div className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
            GET IN TOUCH
          </div>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900">
            Let's Grow{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Your Business
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-lg">
            Ready to take your local business to the next level? Fill out the form
            and we'll get back to you within 24 hours to discuss your growth goals.
          </p>

          {/* CONTACT CARDS */}
          <div className="mt-10 space-y-5">

            <ContactCard
              icon={Mail}
              title="EMAIL US"
              text="hello@tubehelperlite.com"
              color="text-purple-600 bg-purple-100"
            />

            <ContactCard
              icon={MessageCircle}
              title="WHATSAPP"
              text="Chat with us on WhatsApp"
              color="text-green-600 bg-green-100"
            />

            <ContactCard
              icon={Calendar}
              title="BOOK A DEMO"
              text="Schedule a free 30-min call"
              color="text-blue-600 bg-blue-100"
            />

          </div>

          {/* Bottom Info Box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100 flex gap-4">

            <div className="w-10 h-10 flex items-center justify-center rounded-md px-3 bg-purple-600 text-white">
              <Sparkles size={18} />
            </div>

            <div>
              <p className="font-semibold">We respond within 24 hours</p>
              <p className="text-sm text-gray-600">
                Our team is ready to help your business grow.
                Don't hesitate to reach out — every great partnership
                starts with a conversation.
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <form className="space-y-6">

            <FormField label="YOUR NAME *" placeholder="John Smith" />

            <FormField label="EMAIL ADDRESS *" placeholder="john@yourbusiness.com" />

            <FormField label="BUSINESS NAME *" placeholder="Sunrise Coffee Shop" />

            {/* Select */}
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

            {/* Message */}
            <div>
              <label className="text-xs font-semibold text-gray-600">
                MESSAGE
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your business..."
                className="mt-2 w-full border rounded-lg p-3 text-sm"
              />
            </div>

            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition">
              <Calendar size={18} />
              Book a Demo
            </button>

            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree to our Privacy Policy.
            </p>

          </form>

        </div>

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
          <p className="font-medium text-sm font-semibold text-gray-800">{text}</p>
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
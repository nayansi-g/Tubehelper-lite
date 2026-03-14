"use client";
import { Zap, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <>
    <section className="w-full py-16 bg-[#f6f7fb] flex  justify-center">
      <div className="max-w-5xl text-center px-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
          <Zap size={16} />
          OUR SERVICES
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Dominate
          </span>{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Locally
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
          Six powerful digital growth services designed specifically for local
          businesses. From your first website to full AI automation — we handle
          it all.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
            <Zap size={18} />
            Explore Services
          </button>

          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-purple-200 text-purple-600 font-semibold hover:bg-purple-50 transition">
            Get a Free Quote
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
    <WebsiteCreationSection />
      <AIVoiceAgentSection />
      <WhatsappAutomationSection />
      <GoogleBusinessSection />
      <MarketingSections />
      </>
  );
}


import { Check, Globe, Calendar } from "lucide-react";
import Image from "next/image";

function WebsiteCreationSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
            <Globe size={16} className="mr-2" />
            Website Creation
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Your 24/7 Digital Storefront
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-xl">
            We design and build modern, high-converting websites that represent
            your brand professionally and turn visitors into paying customers.
            Every site we build is mobile-first, fast-loading, and optimized for
            search engines from day one.
          </p>

          {/* Feature List */}
          <ul className="space-y-2 mb-10">
            {[
              "Custom design tailored to your brand and industry",
              "Mobile-first, responsive across all screen sizes",
              "SEO-ready structure from the ground up",
              "Integrated contact forms and booking systems",
              "Google Analytics and performance tracking",
              "Delivered in 7–10 business days",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white">
                  <Check size={14} />
                </span>
                <p className="text-xs md:text-sm">{item}</p>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-10">

            <div className="bg-white border border-purple-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-purple-600 font-bold text-lg">+143%</p>
              <p className="text-sm text-gray-500">Avg Traffic Increase</p>
            </div>

            <div className="bg-white border border-purple-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-purple-600 font-bold text-lg">3.8x</p>
              <p className="text-sm text-gray-500">Lead Conversion Rate</p>
            </div>

            <div className="bg-white border border-purple-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-purple-600 font-bold text-lg">7–10 days</p>
              <p className="text-sm text-gray-500">Delivery Time</p>
            </div>

          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
            <Calendar size={18} />
            Get Started with Website Creation
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Service1.jpg"
              alt="website preview"
              width={700}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <div className="bg-purple-500 text-white rounded-full p-2">
              <Globe size={16} />
            </div>
            <div>
              <p className="text-purple-600 font-semibold">+143%</p>
              <p className="text-xs text-gray-500">Avg Traffic Increase</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Divider */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-dashed border-gray-300"></div>
    </section>
  );
}

import { Phone } from "lucide-react";


 function AIVoiceAgentSection() {
  return (
    <section className="w-full  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Service2.jpg"
              alt="AI Voice Dashboard"
              width={700}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Floating Stat */}
          <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <div className="bg-purple-500 text-white rounded-full p-2">
              <Phone size={16} />
            </div>
            <div>
              <p className="text-purple-600 font-semibold">98.7%</p>
              <p className="text-xs text-gray-500">Calls Auto-Handled</p>
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
            <Phone size={16} className="mr-2"/>
            AI Voice Agent
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Never Miss a Call Again
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-xl">
            Our AI Voice Agent acts as your always-on receptionist — answering
            calls, providing information, booking appointments, and routing
            complex queries to your team. It handles hundreds of calls
            simultaneously without a single missed opportunity.
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-10">
            {[
              "24/7 call answering — even on holidays and weekends",
              "Appointment booking and calendar integration",
              "Natural-sounding conversational AI",
              "Custom scripts tailored to your business",
              "Call transcripts and analytics dashboard",
              "Seamless handoff to human staff when needed",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white">
                  <Check size={12}/>
                </span>
                <p className="text-xs md:text-sm">{item}</p>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex flex-wrap gap-2 mb-10">

            <div className="bg-white border border-purple-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-purple-600 font-bold text-lg">98.7%</p>
              <p className="text-sm text-gray-500">Calls Auto-Handled</p>
            </div>

            <div className="bg-white border border-purple-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-purple-600 font-bold text-lg">&lt; 2 sec</p>
              <p className="text-sm text-gray-500">Avg Response Time</p>
            </div>

            <div className="bg-white border border-purple-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-purple-600 font-bold text-lg">-94%</p>
              <p className="text-sm text-gray-500">Missed Calls Reduced</p>
            </div>

          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
            <Calendar size={18}/>
            Get Started with AI Voice Agent
          </button>

        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-dashed border-gray-300"></div>
    </section>
  );
}

import { MessageCircle } from "lucide-react";


 function WhatsappAutomationSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
            <MessageCircle size={16} className="mr-2" />
            WhatsApp Automation
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Engage Customers Where <br/> They Already Are
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-xl">
            With over 2 billion users on WhatsApp, your customers expect to reach
            you there. Our automation system handles inquiries, sends follow-ups,
            shares menus or catalogues, and nurtures leads — all automatically.
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-10">
            {[
              "Automated welcome messages and quick replies",
              "Lead capture and qualification flows",
              "Order confirmations and appointment reminders",
              "Promotional broadcasts and campaigns",
              "Customer support automation",
              "Seamless integration with your existing CRM",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white">
                  <Check size={14}/>
                </span>
               <p className="text-xs md:text-sm"> {item}</p>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-10">

            <div className="bg-white border border-green-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-green-600 font-bold text-lg">94%</p>
              <p className="text-sm text-gray-500">Response Rate</p>
            </div>

            <div className="bg-white border border-green-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-green-600 font-bold text-lg">Instant</p>
              <p className="text-sm text-gray-500">Lead Response Time</p>
            </div>

            <div className="bg-white border border-green-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-green-600 font-bold text-lg">+210%</p>
              <p className="text-sm text-gray-500">Customer Engagement</p>
            </div>

          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
            <Calendar size={18}/>
            Get Started with WhatsApp Automation
          </button>

        </div>


        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Service3.jpg"
              alt="WhatsApp Automation Dashboard"
              width={700}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Floating Stat */}
          <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <div className="bg-green-500 text-white rounded-full p-2">
              <MessageCircle size={16}/>
            </div>
            <div>
              <p className="text-green-600 font-semibold">94%</p>
              <p className="text-xs text-gray-500">Response Rate</p>
            </div>
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-dashed border-gray-300"></div>
    </section>
  );
}

import {MapPin } from "lucide-react";


 function GoogleBusinessSection() {
  return (
    <section className="w-full  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Service4.jpg"
              alt="Google Business Profile"
              width={700}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Floating Stat */}
          <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <div className="bg-orange-500 text-white rounded-full p-2">
              <MapPin size={16}/>
            </div>
            <div>
              <p className="text-orange-600 font-semibold">+280%</p>
              <p className="text-xs text-gray-500">Map Visibility</p>
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
            <MapPin size={16} className="mr-2"/>
            Google Business Profile Makeover
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Be Found First on Google Maps
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-xl">
            When locals search for your type of business, you need to appear at
            the top. We completely optimize your Google Business Profile — from
            photos and categories to review strategy and posts — so you dominate
            local search results.
          </p>

          {/* Feature List */}
          <ul className="space-y-2 mb-10">
            {[
              "Complete profile audit and optimization",
              "High-quality photo curation and upload",
              "Review generation and response strategy",
              "Weekly Google Posts for fresh content signals",
              "Keyword optimization for local searches",
              "Monthly performance reporting",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white">
                  <Check size={14}/>
                </span>
                <p className="text-xs md:text-sm">{item}</p>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-10">

            <div className="bg-white border border-orange-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-orange-600 font-bold text-lg">+280%</p>
              <p className="text-sm text-gray-500">Map Visibility Increase</p>
            </div>

            <div className="bg-white border border-orange-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-orange-600 font-bold text-lg">3.5x</p>
              <p className="text-sm text-gray-500">Profile Views</p>
            </div>

            <div className="bg-white border border-orange-100 px-6 py-4 rounded-xl shadow-sm">
              <p className="text-orange-600 font-bold text-lg">+190%</p>
              <p className="text-sm text-gray-500">Direction Requests</p>
            </div>

          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
            <Calendar size={18}/>
            Get Started with Google Business Profile Makeover
          </button>

        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-dashed border-gray-300"></div>
    </section>
  );
}


import {
  BarChart3,
  Megaphone,
  Users,
  TrendingUp,
  Sparkles
} from "lucide-react";

 function MarketingSections() {
  return (
    <div className=" space-y-28">

      {/* SECTION 1 */}
      {/* SECTION 1 */}

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16  grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

  <div>
    <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
      SEO Optimization
    </span>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4 text-slate-900 leading-tight">
      Rank Higher. Get Found Organically.
    </h2>

    <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
      We implement comprehensive SEO strategies that move your website up
      the search rankings — bringing consistent, high-intent organic
      traffic without ongoing ad spend.
    </p>

    <ul className="mt-6 space-y-3">
      {[
        "Full technical SEO audit and fixes",
        "Keyword research and competitive analysis",
        "On-page optimization for all key pages",
        "Local SEO for geo-targeted traffic",
        "Content strategy and blog planning",
        "Monthly rank tracking and reporting"
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500 text-white mt-0.5">
            <Check size={14}/>
          </span>
          <p className="text-xs sm:text-sm">{item}</p>
        </li>
      ))}
    </ul>

    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
      <StatCard title="Top 5" subtitle="Avg Ranking Position" />
      <StatCard title="+320%" subtitle="Organic Traffic Growth" />
      <StatCard title="60-90 days" subtitle="Time to Results" />
    </div>

    <button className="w-full sm:w-auto mt-8 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
      Get Started with SEO Optimization
    </button>
  </div>

  <div className="relative order-first lg:order-last">
    <Image
      src="/Service5.jpg"
      width={520}
      height={360}
      alt="SEO dashboard"
      className="rounded-xl shadow-xl w-full h-auto"
    />
  </div>

  

</section>

<div className="max-w-7xl mx-auto mt-20 border-t border-dashed border-gray-300"></div>



{/* SECTION 2 */}

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

  <div>
    <Image
      src="/Service6.jpg"
      width={520}
      height={360}
      alt="Social media marketing"
      className="rounded-xl shadow-lg w-full h-auto"
    />
  </div>

  <div>
    <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
      Social Media Management
    </span>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4 text-slate-900 leading-tight">
      Build a Brand People Trust and Follow
    </h2>

    <p className="text-slate-600 mt-3 text-sm sm:text-base">
      Consistent, strategic social media presence builds trust, drives
      traffic, and keeps your business top-of-mind.
    </p>

    <ul className="mt-6 space-y-3">
      {[
        "Custom content creation",
        "Consistent posting schedule",
        "Hashtag research and strategy",
        "Community management",
        "Monthly analytics reporting",
        "Platform-specific strategy"
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500 text-white mt-0.5">
            <Check size={14}/>
          </span>
          <p className="text-xs sm:text-sm">{item}</p>
        </li>
      ))}
    </ul>

    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
      <StatCard title="+180%" subtitle="Follower Growth" />
      <StatCard title="4.2%" subtitle="Engagement Rate" />
      <StatCard title="+250%" subtitle="Brand Reach" />
    </div>

    <button className="w-full sm:w-auto mt-8 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
      Get Started with Social Media Management
    </button>
  </div>

</section>

      {/* SECTION 3 CTA */}

      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-20 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <span className="inline-block font-bold mb-1 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
            READY TO START?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-5 text-slate-900">
            Not Sure Which Service Is{" "}
            <span className="text-indigo-600">Right for You?</span>
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-md md:text-lg text-slate-500">
            Book a free 30-minute discovery call. We'll analyze your business,
            identify the biggest growth opportunities.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a href="/#BookDemo"><button className="cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <Calendar size={18} /> Book a Free Discovery Call
            </button></a>

           <a href="/about"> <button className=" cursor-pointer border border-gray-400 px-6 py-3 rounded-lg">
              Learn About Us
            </button></a>
          </div>

          <div className="flex justify-center gap-8 text-sm text-slate-600 mt-6">
            <span>✔ Free consultation</span>
            <span>✔ No commitment</span>
            <span>✔ Results guaranteed</span>
          </div>

        </div>
      </section>
    </div>
  );
}

function StatCard({ title, subtitle }) {
  return (
    <div className="border border border-gray-200 rounded-xl px-6 py-4 text-center bg-white shadow-sm">
      <p className="font-bold text-lg text-indigo-600">{title}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
  );
}

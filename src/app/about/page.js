"use client";

import Image from "next/image";
import { Zap, ShieldCheck, Heart, Rocket, Building2Icon } from "lucide-react";

export default function about() {
  return (
  <>
    <section className="bg-[#f6f7fb] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 ">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
            OUR STORY
          </span>

          {/* Heading */}
          <h2 className="text-5xl font-extrabold  leading-tight text-slate-900">
            Helping Local <br />
            Businesses{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Grow Digitally
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-slate-500 text-md md:text-lg mt-4 leading-relaxed">
            TubeHelper Lite was built with one mission: to make cutting-edge
            digital tools accessible and actionable for every local business —
            regardless of size, budget, or technical knowledge.
          </p>

          <p className="text-slate-500 text-md mt-4 leading-relaxed">
            We combine professional web design, AI automation, and proven
            marketing strategies into a simple, done-for-you system that
            delivers real, measurable results.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">

            <FeatureCard
              icon={<Zap size={18} />}
              title="Speed"
              desc="Results in 7–14 days"
            />

            <FeatureCard
              icon={<ShieldCheck size={18} />}
              title="Transparency"
              desc="Clear reporting always"
            />

            <FeatureCard
              icon={<Heart size={18} />}
              title="Care"
              desc="We treat you like a partner"
            />

            <FeatureCard
              icon={<Rocket size={18} />}
              title="Growth"
              desc="Measurable outcomes"
            />

          </div>

        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">

          {/* Bottom image */}
          <div className="absolute bottom-0 left-11 w-[260px] h-[250px] rounded-2xl overflow-hidden ">
            <Image
              src="/about2.jpg"
              width={260}
              height={260}
              alt="working woman"
              className="object-cover"
            />
          </div>

          {/* Top image */}
          <div className="ml-40 w-[300px] h-[390px] rounded-3xl  overflow-hidden ">
            <Image
              src="/about1.jpg"
              width={300}
              height={320}
              alt="team meeting"
              className="object-cover"
            />

            {/* Small badge */}
            <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 bottom-50 right-4">
              <div className="bg-purple-500 text-white p-2 rounded-md">
                <Building2Icon />
              </div>
              <div className="text-sm">
                <p className="font-semibold">200+ Businesses</p>
                <p className="text-gray-500 text-xs">Helped to grow online</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    <MissionSection />
    <RealImpactSection />
    <TeamSection />
    <CTASection />
    </>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-3">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}



import { Building2, BarChart3, Users } from "lucide-react";

 function MissionSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
          OUR MISSION
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Why We Built{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            TubeHelper Lite
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-500 mt-4 leading-relaxed">
          Too many talented local business owners are invisible online — not
          because they lack a great product or service, but because they don't
          have the right digital systems in place. We built TubeHelper Lite to
          fix that.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <MissionCard
            icon={<Building2 size={22} />}
            color="from-purple-500 to-indigo-500"
            title="Built for Local Businesses"
            desc="We understand that local businesses have unique needs, tight budgets, and limited time. Everything we build is designed specifically to address those realities — no bloated enterprise solutions, just what works."
          />

          <MissionCard
            icon={<Zap size={22} />}
            color="from-blue-500 to-indigo-500"
            title="Automation First"
            desc="Manual work doesn't scale. We build systems that run on autopilot — answering calls, following up with leads, posting on social media — so you can focus on what you do best: running your business."
          />

          <MissionCard
            icon={<BarChart3 size={22} />}
            color="from-teal-500 to-green-500"
            title="Results You Can Measure"
            desc="We don't deal in vague promises. Every service we offer comes with clear metrics, regular reporting, and a direct line to see how your investment is performing."
          />

          <MissionCard
            icon={<Users size={22} />}
            color="from-orange-500 to-pink-500"
            title="Partnership, Not Just a Vendor"
            desc="When you work with TubeHelper Lite, you get a dedicated team that genuinely cares about your success. We're invested in your growth because your results are our reputation."
          />

        </div>
      </div>
    </section>
  );
}


function MissionCard({ icon, title, desc, color }) {
  return (
    <div className="bg-[#f6f7fb] rounded-2xl text-start p-8 shadow-md hover:shadow-lg transition">

      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl text-white bg-gradient-to-r ${color}`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold mt-3 text-slate-900">{title}</h3>

      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
        {desc}
      </p>

    </div>
  );
}




import { Lightbulb, TrendingUp } from "lucide-react";
import RealImpactSection from "../../components/RealImpact";

 function TeamSection() {
  return (
    <section className="bg-[#f6f7fb] py-24 px-6 md:px-10">

      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-purple-700 border-purple-200 bg-purple-50">
          THE TEAM
        </span>

        {/* Heading */}
        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
          People Who{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Drive Your Growth
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-600 mt-4">
          A tight-knit team of digital specialists who are passionate about
          helping local businesses succeed online.
        </p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <TeamCard
            img="/team1.jpg"
            name="Marcus Reid"
            role="Founder & Lead Strategist"
            desc="10+ years helping local businesses grow digitally."
            tag="Growth Strategy"
          />

          <TeamCard
            img="/team2.jpg"
            name="Priya Nair"
            role="Head of Web Design"
            desc="Award-winning designer passionate about high converting websites."
            tag="UI/UX Design"
          />

          <TeamCard
            img="/team3.jpg"
            name="David Chen"
            role="AI Automation Lead"
            desc="Builds AI voice agents and WhatsApp bots for local businesses."
            tag="AI Systems"
          />

          <TeamCard
            img="/team4.jpg"
            name="Aisha Johnson"
            role="SEO & Content Strategist"
            desc="Helped 100+ businesses rank higher in search engines."
            tag="SEO & Content"
          />

        </div>


        {/* Core Values */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl mt-24 py-16 px-6 md:px-10">

          <h3 className="text-3xl font-extrabold">
            Our Core{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Values
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <ValueCard
              icon={<Lightbulb />}
              title="Simplicity"
              desc="We make complex technology simple and accessible for every business owner."
            />

            <ValueCard
              icon={<ShieldCheck />}
              title="Integrity"
              desc="We're honest about timelines, results, and what's realistically achievable."
            />

            <ValueCard
              icon={<TrendingUp />}
              title="Continuous Growth"
              desc="We stay ahead of digital trends so our clients always have a competitive edge."
            />

          </div>

        </div>

      </div>
    </section>
  );
}


function TeamCard({ img, name, role, desc, tag }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">

      <div className="flex justify-center">
        <Image
          src={img}
          width={70}
          height={70}
          alt={name}
          className="rounded-xl object-cover"
        />
      </div>

      <h4 className="font-semibold text-lg mt-4">{name}</h4>

      <p className="text-purple-600 text-sm">{role}</p>

      <p className="text-gray-500 text-sm mt-3">{desc}</p>

      <span className="inline-block mt-4 text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
        {tag}
      </span>

    </div>
  );
}


function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md text-center">

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-xl mx-auto">
        {icon}
      </div>

      <h4 className="font-semibold mt-4">{title}</h4>

      <p className="text-gray-500 text-sm mt-2">{desc}</p>

    </div>
  );
}

import { ArrowRight, Calendar, Briefcase } from "lucide-react";
import Link from "next/link";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#6238F6] via-[#4C46F5] to-[#2D63FF] py-24 px-6">
      
      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm text-white border border-white/20 rounded-full bg-white/10 backdrop-blur">
          <Briefcase size={14} />
          <span>Let's Work Together</span>
        </div>

        {/* heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Ready to Join 200+ <br />
          Businesses Growing with <br />
          TubeHelper Lite?
        </h2>

        {/* description */}
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Let's have a conversation about your business goals. Book a free
          discovery call and we'll show you exactly how we can help you grow.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

          {/* button 1 */}
          <Link
            href="/#BookDemo"
            className="flex items-center gap-2 bg-white text-[#5B3CF6] font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <Calendar size={18} />
            Book a Free Demo
          </Link>

          {/* button 2 */}
          <Link
            href="/services"
            className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            View Our Services
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
}
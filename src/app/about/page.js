"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Building2Icon,
  Calendar,
  CheckCircle2,
  Heart,
  Lightbulb,
  MessageSquareQuote,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import RealImpactSection from "../../components/RealImpact";

const STORY_FEATURES = [
  { icon: <Zap size={18} />, title: "Speed", desc: "Results in 7-14 days" },
  { icon: <ShieldCheck size={18} />, title: "Transparency", desc: "Clear reporting always" },
  { icon: <Heart size={18} />, title: "Care", desc: "We treat you like a partner" },
  { icon: <Rocket size={18} />, title: "Growth", desc: "Measurable outcomes" },
];

const MISSION_CARDS = [
  {
    icon: <Building2 size={22} />,
    color: "from-indigo-500 to-sky-500",
    title: "Built for Local Businesses",
    desc:
      "We understand that local businesses have unique needs, tight budgets, and limited time. Everything we build is designed specifically to address those realities -- no bloated enterprise solutions, just what works.",
  },
  {
    icon: <Zap size={22} />,
    color: "from-sky-500 to-cyan-500",
    title: "Automation First",
    desc:
      "Manual work doesn't scale. We build systems that run on autopilot -- answering calls, following up with leads, posting on social media -- so you can focus on what you do best: running your business.",
  },
  {
    icon: <BarChart3 size={22} />,
    color: "from-emerald-500 to-lime-500",
    title: "Results You Can Measure",
    desc:
      "We don't deal in vague promises. Every service we offer comes with clear metrics, regular reporting, and a direct line to see how your investment is performing.",
  },
  {
    icon: <Users size={22} />,
    color: "from-amber-500 to-rose-500",
    title: "Partnership, Not Just a Vendor",
    desc:
      "When you work with TubeHelper Lite, you get a dedicated team that genuinely cares about your success. We're invested in your growth because your results are our reputation.",
  },
];

const TEAM_MEMBERS = [
  {
    // img: "/team1.jpg",
    name: "Marcus Reid",
    role: "Founder & Lead Strategist",
    desc: "10+ years helping local businesses grow digitally.",
    tag: "Growth Strategy",
  },
  {
    // img: "/team2.jpg",
    name: "Priya Nair",
    role: "Head of Web Design",
    desc: "Award-winning designer passionate about high converting websites.",
    tag: "UI/UX Design",
  },
  {
    // img: "/team3.jpg",
    name: "David Chen",
    role: "AI Automation Lead",
    desc: "Builds AI voice agents and WhatsApp bots for local businesses.",
    tag: "AI Systems",
  },
  {
    // img: "/team4.jpg",
    name: "Aisha Johnson",
    role: "SEO & Content Strategist",
    desc: "Helped 100+ businesses rank higher in search engines.",
    tag: "SEO & Content",
  },
];

const VALUES = [
  {
    icon: <Lightbulb />,
    title: "Simplicity",
    desc: "We make complex technology simple and accessible for every business owner.",
  },
  {
    icon: <ShieldCheck />,
    title: "Integrity",
    desc: "We're honest about timelines, results, and what's realistically achievable.",
  },
  {
    icon: <TrendingUp />,
    title: "Continuous Growth",
    desc: "We stay ahead of digital trends so our clients always have a competitive edge.",
  },
];

const STATS = [
  { value: "200+", label: "Local businesses supported" },
  { value: "98%", label: "Client retention rate" },
  { value: "3.2x", label: "Average lead lift" },
  { value: "7-14d", label: "Typical launch window" },
];

const PROCESS_STEPS = [
  {
    title: "Discovery + Audit",
    desc: "We map your goals, current funnel, and quick wins.",
  },
  {
    title: "Build + Automate",
    desc: "We design your site, set up automations, and connect analytics.",
  },
  {
    title: "Launch + Optimize",
    desc: "We go live, track results, and iterate based on real data.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Within two weeks, our calls doubled and we finally had a system that followed up with leads.",
    name: "Alyssa G.",
    role: "Owner, Brightview Dental",
  },
  {
    quote:
      "Their team made everything simple. We went from invisible to booked out on weekdays.",
    name: "Carlos M.",
    role: "Founder, Riverside Auto",
  },
  {
    quote:
      "The reporting is so clear. We know exactly what's working and where to invest next.",
    name: "Nisha P.",
    role: "Manager, Bloom Wellness",
  },
];

const FAQS = [
  {
    q: "How fast can we launch?",
    a: "Most clients go live within 7-14 days, depending on content readiness.",
  },
  {
    q: "Do you handle everything for us?",
    a: "Yes. We design, build, automate, and track results end-to-end.",
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in local services like dental, home services, fitness, and clinics.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No long-term lock-ins. We earn your business by performance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f6f7fb] py-16 sm:py-20 lg:py-24 px-6 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(125,211,252,0.35),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(167,243,208,0.35),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionBadge>OUR STORY</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Helping Local <br />
              Businesses{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
                Grow Digitally
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
              TubeHelper Lite was built with one mission: to make cutting-edge
              digital tools accessible and actionable for every local business --
              regardless of size, budget, or technical knowledge.
            </p>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              We combine professional web design, AI automation, and proven
              marketing strategies into a simple, done-for-you system that
              delivers real, measurable results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {STORY_FEATURES.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="absolute -bottom-20 -left-6 sm:left-10 w-[180px] sm:w-[220px] lg:w-[260px] h-[200px] sm:h-[230px] lg:h-[250px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about2.jpg"
                width={260}
                height={250}
                alt="working woman"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative ml-16 sm:ml-28 lg:ml-40 w-[220px] sm:w-[260px] lg:w-[300px] h-[300px] sm:h-[340px] lg:h-[390px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about1.jpg"
                width={300}
                height={390}
                alt="team meeting"
                className="object-cover w-full h-full"
              />

              <div className="absolute bg-white shadow-lg rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 bottom-4 right-4">
                <div className="bg-indigo-600 text-white p-2 rounded-md">
                  <Building2Icon size={18} />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold">200+ Businesses</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs">
                    Helped to grow online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <StatsSection /> */}
      <MissionSection />
      <ProcessSection />
      <RealImpactSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

function SectionBadge({ children }) {
  return (
    <span className="inline-block font-bold mb-6 px-5 py-1 text-xs tracking-widest border rounded-full text-indigo-700 border-indigo-200 bg-indigo-50">
      {children}
    </span>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-3">
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function MissionSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <SectionBadge>OUR MISSION</SectionBadge>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Why We Built{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
            TubeHelper Lite
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 mt-4 leading-relaxed">
          Too many talented local business owners are invisible online -- not
          because they lack a great product or service, but because they don't
          have the right digital systems in place. We built TubeHelper Lite to
          fix that.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {MISSION_CARDS.map((card) => (
            <MissionCard key={card.title} {...card} />
          ))}
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

      <p className="text-slate-600 text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function TeamSection() {
  return (
    <section className="bg-[#f6f7fb] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <SectionBadge>THE TEAM</SectionBadge>
        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
          People Who{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Drive Your Growth
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-600 mt-4">
          A tight-knit team of digital specialists who are passionate about
          helping local businesses succeed online.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-100 to-emerald-100 rounded-3xl mt-24 py-16 px-6 md:px-10">
          <h3 className="text-3xl font-extrabold">
            Our Core{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Values
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {VALUES.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ img, name, role, desc, tag }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
      <div className="flex justify-center ">
        <User className="border border-gray-300 rounded-full p-2 w-10 h-10" />
      </div>

      <h4 className="font-semibold text-lg mt-4">{name}</h4>

      <p className="text-indigo-600 text-sm">{role}</p>

      <p className="text-gray-500 text-sm mt-3">{desc}</p>

      <span className="inline-block mt-4 text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
        {tag}
      </span>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md text-center">
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white w-12 h-12 flex items-center justify-center rounded-xl mx-auto">
        {icon}
      </div>

      <h4 className="font-semibold mt-4">{title}</h4>

      <p className="text-gray-500 text-sm mt-2">{desc}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
          >
            <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#f6f7fb] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <SectionBadge>OUR PROCESS</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              A simple, repeatable system that scales
            </h2>
            <p className="text-slate-600 mt-3 max-w-2xl">
              Every step is designed to be fast, measurable, and easy to manage.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-indigo-700 font-semibold">
            <Sparkles size={16} />
            Proven playbooks for local growth
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-8 shadow-md border border-slate-200"
            >
              <p className="text-sm font-semibold text-indigo-600">Step {index + 1}</p>
              <h3 className="text-xl font-semibold mt-3">{step.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <SectionBadge>CLIENT VOICES</SectionBadge>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Real stories from real local businesses
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          We measure success in booked calendars and growing customer lists.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-gradient-to-br from-white to-slate-50"
            >
              <div className="flex items-center gap-2 text-indigo-600">
                <MessageSquareQuote size={18} />
                <span className="text-sm font-semibold">Testimonial</span>
              </div>
              <p className="text-slate-700 mt-4">{item.quote}</p>
              <p className="font-semibold mt-6">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-[#f6f7fb] py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionBadge>FAQ</SectionBadge>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Questions we get most often
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {FAQS.map((item) => (
            <div
              key={item.q}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                <div>
                  <p className="font-semibold text-slate-900">{item.q}</p>
                  <p className="text-slate-600 text-sm mt-2">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm text-white border border-white/20 rounded-full bg-white/10 backdrop-blur">
          <Briefcase size={14} />
          <span>Let's Work Together</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Ready to Join 200+ <br />
          Businesses Growing with <br />
          TubeHelper Lite?
        </h2>

        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Let's have a conversation about your business goals. Book a free
          discovery call and we'll show you exactly how we can help you grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/#BookDemo"
            className="flex items-center gap-2 bg-white text-[#1E3A8A] font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <Calendar size={18} />
            Book a Free Demo
          </Link>

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

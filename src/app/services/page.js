"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  Globe,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Reveal from "../../components/Reveal";

const SERVICES = [
  {
    id: "website",
    badge: "Website Creation",
    icon: Globe,
    title: "Your 24/7 Digital Storefront",
    description:
      "We design and build modern, high-converting websites that represent your brand professionally and turn visitors into paying customers. Every site we build is mobile-first, fast-loading, and optimized for search engines from day one.",
    features: [
      "Custom design tailored to your brand and industry",
      "Mobile-first, responsive across all screen sizes",
      "SEO-ready structure from the ground up",
      "Integrated contact forms and booking systems",
      "Google Analytics and performance tracking",
      "Delivered in 7-10 business days",
    ],
    stats: [
      { value: "+143%", label: "Avg Traffic Increase" },
      { value: "3.8x", label: "Lead Conversion Rate" },
      { value: "7-10 days", label: "Delivery Time" },
    ],
    image: "/Service1.jpg",
    accent: "purple",
    cta: "Get Started with Website Creation",
  },
  {
    id: "voice",
    badge: "AI Voice Agent",
    icon: Phone,
    title: "Never Miss a Call Again",
    description:
      "Our AI Voice Agent acts as your always-on receptionist -- answering calls, providing information, booking appointments, and routing complex queries to your team. It handles hundreds of calls simultaneously without a single missed opportunity.",
    features: [
      "24/7 call answering -- even on holidays and weekends",
      "Appointment booking and calendar integration",
      "Natural-sounding conversational AI",
      "Custom scripts tailored to your business",
      "Call transcripts and analytics dashboard",
      "Seamless handoff to human staff when needed",
    ],
    stats: [
      { value: "98.7%", label: "Calls Auto-Handled" },
      { value: "< 2 sec", label: "Avg Response Time" },
      { value: "-94%", label: "Missed Calls Reduced" },
    ],
    image: "/Service2.jpg",
    accent: "indigo",
    reverse: true,
    cta: "Get Started with AI Voice Agent",
  },
  {
    id: "whatsapp",
    badge: "WhatsApp Automation",
    icon: MessageCircle,
    title: "Engage Customers Where They Already Are",
    description:
      "With over 2 billion users on WhatsApp, your customers expect to reach you there. Our automation system handles inquiries, sends follow-ups, shares menus or catalogues, and nurtures leads -- all automatically.",
    features: [
      "Automated welcome messages and quick replies",
      "Lead capture and qualification flows",
      "Order confirmations and appointment reminders",
      "Promotional broadcasts and campaigns",
      "Customer support automation",
      "Seamless integration with your existing CRM",
    ],
    stats: [
      { value: "94%", label: "Response Rate" },
      { value: "Instant", label: "Lead Response Time" },
      { value: "+210%", label: "Customer Engagement" },
    ],
    image: "/Service3.jpg",
    accent: "emerald",
    cta: "Get Started with WhatsApp Automation",
  },
  {
    id: "google",
    badge: "Google Business Profile",
    icon: MapPin,
    title: "Be Found First on Google Maps",
    description:
      "When locals search for your type of business, you need to appear at the top. We completely optimize your Google Business Profile -- from photos and categories to review strategy and posts -- so you dominate local search results.",
    features: [
      "Complete profile audit and optimization",
      "High-quality photo curation and upload",
      "Review generation and response strategy",
      "Weekly Google Posts for fresh content signals",
      "Keyword optimization for local searches",
      "Monthly performance reporting",
    ],
    stats: [
      { value: "+280%", label: "Map Visibility Increase" },
      { value: "3.5x", label: "Profile Views" },
      { value: "+190%", label: "Direction Requests" },
    ],
    image: "/Service4.jpg",
    accent: "orange",
    reverse: true,
    cta: "Get Started with Google Business Profile",
  },
];

const MARKETING = [
  {
    badge: "SEO Optimization",
    title: "Rank Higher. Get Found Organically.",
    description:
      "We implement comprehensive SEO strategies that move your website up the search rankings -- bringing consistent, high-intent organic traffic without ongoing ad spend.",
    icon: TrendingUp,
    image: "/Service5.jpg",
    accent: "rose",
    features: [
      "Full technical SEO audit and fixes",
      "Keyword research and competitive analysis",
      "On-page optimization for all key pages",
      "Local SEO for geo-targeted traffic",
      "Content strategy and blog planning",
      "Monthly rank tracking and reporting",
    ],
    stats: [
      { value: "Top 5", label: "Avg Ranking Position" },
      { value: "+320%", label: "Organic Traffic Growth" },
      { value: "60-90 days", label: "Time to Results" },
    ],
    cta: "Get Started with SEO Optimization",
  },
  {
    badge: "Social Media Management",
    title: "Build a Brand People Trust and Follow",
    description:
      "Consistent, strategic social media presence builds trust, drives traffic, and keeps your business top-of-mind.",
    icon: Users,
    image: "/Service6.jpg",
    accent: "cyan",
    reverse: true,
    features: [
      "Custom content creation",
      "Consistent posting schedule",
      "Hashtag research and strategy",
      "Community management",
      "Monthly analytics reporting",
      "Platform-specific strategy",
    ],
    stats: [
      { value: "+180%", label: "Follower Growth" },
      { value: "4.2%", label: "Engagement Rate" },
      { value: "+250%", label: "Brand Reach" },
    ],
    cta: "Get Started with Social Media Management",
  },
];

const BUNDLES = [
  {
    title: "Launch Kit",
    price: "Starter",
    desc: "Perfect for new local businesses that need a fast, credible digital presence.",
    items: [
      "High-converting website",
      "Google Business Profile optimization",
      "Basic SEO setup",
      "Lead capture & booking",
    ],
  },
  {
    title: "Growth Kit",
    price: "Most Popular",
    desc: "Everything in Launch + automation and content systems to accelerate leads.",
    items: [
      "AI Voice Agent",
      "WhatsApp automation",
      "Monthly analytics report",
      "Social content calendar",
    ],
    highlight: true,
  },
  {
    title: "Scale Kit",
    price: "Advanced",
    desc: "Full-stack growth engine for teams that want predictable demand.",
    items: [
      "All services included",
      "Dedicated strategist",
      "Weekly optimization sprints",
      "Priority support",
    ],
  },
];

const FAQS = [
  {
    q: "How do I choose the right services?",
    a: "We start with a quick audit to see which services will move the needle fastest for your business.",
  },
  {
    q: "Can I start with one service and add more later?",
    a: "Absolutely. Most clients start with web or Google profile, then add automation and marketing as they grow.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer monthly optimization and reporting so your results keep improving.",
  },
  {
    q: "How long does setup take?",
    a: "Most services are live in 7-14 days, depending on content readiness and complexity.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#f6f7fb] py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.25),transparent_40%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-200 text-indigo-700 text-sm font-semibold">
              <Zap size={16} />
              OUR SERVICES
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
                Dominate
              </span>{" "}
              Locally
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
              Six powerful digital growth services designed specifically for local
              businesses. From your first website to full AI automation -- we handle
              it all.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                <Zap size={18} />
                Explore Services
              </Link>

              <Link
                href="/#BookDemo"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
              >
                Get a Free Demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((service, index) => (
        <ServiceSection
          key={service.id}
          data={service}
          index={index}
        />
      ))}

      <section className="bg-[#f6f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <Badge icon={Megaphone} text="Marketing Growth" accent="rose" />
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                  Multi-channel campaigns that keep your pipeline full
                </h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  We align SEO, social, and content so your brand stays visible even when
                  ads are off.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-indigo-700 font-semibold">
                <Sparkles size={16} />
                Always-on growth systems
              </div>
            </div>
          </Reveal>

          <div className="mt-12 space-y-20">
            {MARKETING.map((item, index) => (
              <MarketingSection key={item.badge} data={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <Badge icon={BarChart3} text="Bundles" accent="indigo" centered />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Choose the growth kit that fits your stage
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Flexible bundles so you can start lean and scale up as results kick in.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BUNDLES.map((bundle, index) => (
              <Reveal key={bundle.title} delay={index * 0.05}>
                <div
                  className={`rounded-2xl border p-8 text-left shadow-sm ${
                    bundle.highlight
                      ? "border-indigo-400 bg-indigo-50/70"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="text-sm font-semibold text-indigo-600">{bundle.price}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{bundle.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{bundle.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {bundle.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="mt-1 text-emerald-500" size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Badge icon={Sparkles} text="FAQ" accent="sky" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Questions we get from business owners
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FAQS.map((item, index) => (
              <Reveal key={item.q} delay={index * 0.04}>
                <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                  <p className="font-semibold text-slate-900">{item.q}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <Calendar size={14} />
              Ready to start?
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Book a free discovery call and get a custom growth plan
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-white/80">
              We will analyze your current funnel and show you the fastest path to more leads.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#BookDemo"
                className="flex items-center justify-center gap-2 rounded-xl bg-white text-[#1E3A8A] px-6 py-3 font-semibold shadow-lg hover:scale-105 transition"
              >
                <Calendar size={18} />
                Book a Free Discovery Call
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Learn About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Badge({ icon: Icon, text, accent = "indigo", centered = false }) {
  const accentMap = {
    indigo: "bg-indigo-100 text-indigo-700",
    purple: "bg-purple-100 text-purple-700",
    emerald: "bg-emerald-100 text-emerald-700",
    orange: "bg-orange-100 text-orange-700",
    rose: "bg-rose-100 text-rose-700",
    cyan: "bg-cyan-100 text-cyan-700",
    sky: "bg-sky-100 text-sky-700",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${
        accentMap[accent] || accentMap.indigo
      } ${centered ? "mx-auto" : ""}`}
    >
      {Icon ? <Icon size={16} /> : null}
      {text}
    </div>
  );
}

function ServiceSection({ data, index }) {
  const Icon = data.icon;
  const accentMap = {
    purple: "bg-purple-100 text-purple-700",
    indigo: "bg-indigo-100 text-indigo-700",
    emerald: "bg-emerald-100 text-emerald-700",
    orange: "bg-orange-100 text-orange-700",
  };
  const borderMap = {
    purple: "border-purple-100",
    indigo: "border-indigo-100",
    emerald: "border-emerald-100",
    orange: "border-orange-100",
  };

  return (
    <section className="bg-gray-50 py-10">
      <div
        className={`mx-auto max-w-7xl px-6 md:px-10 grid gap-14 items-center lg:grid-cols-2 ${
          data.reverse ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        <Reveal>
          <div className={data.reverse ? "lg:col-start-2" : ""}>
            <div
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
                accentMap[data.accent]
              }`}
            >
              <Icon size={16} className="mr-2" />
              {data.badge}
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              {data.title}
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">{data.description}</p>

            <ul className="space-y-2 mb-10">
              {data.features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span
                    className={`flex items-center justify-center w-5 h-5 rounded-full text-white ${
                      data.accent === "emerald"
                        ? "bg-emerald-500"
                        : data.accent === "orange"
                          ? "bg-orange-500"
                          : "bg-indigo-500"
                    }`}
                  >
                    <Check size={14} />
                  </span>
                  <p className="text-xs md:text-sm">{item}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-10">
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`bg-white border px-6 py-4 rounded-xl shadow-sm ${
                    borderMap[data.accent]
                  }`}
                >
                  <p className="text-indigo-600 font-bold text-lg">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#BookDemo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <Calendar size={18} />
              {data.cta}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={data.reverse ? "lg:col-start-1" : ""}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="bg-indigo-500 text-white rounded-full p-2">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-indigo-600 font-semibold">{data.stats[0].value}</p>
                  <p className="text-xs text-gray-500">{data.stats[0].label}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      {index < SERVICES.length - 1 ? (
        <div className="mx-auto max-w-7xl mt-20 border-t border-dashed border-gray-300"></div>
      ) : null}
    </section>
  );
}

function MarketingSection({ data }) {
  const Icon = data.icon;
  const accentMap = {
    rose: "bg-rose-100 text-rose-700",
    cyan: "bg-cyan-100 text-cyan-700",
  };

  return (
    <div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
        data.reverse ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      <Reveal>
        <div className={data.reverse ? "lg:col-start-2" : ""}>
          <span
            className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full ${
              accentMap[data.accent]
            }`}
          >
            <Icon size={14} />
            {data.badge}
          </span>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4 text-slate-900 leading-tight">
            {data.title}
          </h3>

          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            {data.description}
          </p>

          <ul className="mt-6 space-y-3">
            {data.features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500 text-white mt-0.5">
                  <Check size={14} />
                </span>
                <p className="text-xs sm:text-sm">{item}</p>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
            {data.stats.map((stat) => (
              <StatCard key={stat.label} title={stat.value} subtitle={stat.label} />
            ))}
          </div>

          <Link
            href="/#BookDemo"
            className="inline-flex mt-8 bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
          >
            {data.cta}
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className={data.reverse ? "lg:col-start-1" : ""}>
          <Image
            src={data.image}
            width={520}
            height={360}
            alt={data.title}
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>
      </Reveal>
    </div>
  );
}

function StatCard({ title, subtitle }) {
  return (
    <div className="border border-gray-200 rounded-xl px-6 py-4 text-center bg-white shadow-sm">
      <p className="font-bold text-lg text-indigo-600">{title}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
  );
}

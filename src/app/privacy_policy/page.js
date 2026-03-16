"use client";

import { ShieldCheck, Lock, Mail, Database, Eye, FileText } from "lucide-react";
import Reveal from "../../components/Reveal";

const siteUrl = "https://www.tubehelperlite.xyz";

export const metadata = {
  title: "Privacy Policy | TubeHelper Lite",
  description:
    "Read the Privacy Policy for TubeHelper Lite to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy_policy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TubeHelper Lite Privacy Policy",
  url: `${siteUrl}/privacy_policy`,
  description:
    "Read the Privacy Policy for TubeHelper Lite to understand how we collect, use, and protect your information.",
};

const SUMMARY = [
  {
    title: "We collect only what we need",
    desc: "Contact details, service inquiries, and basic usage data to improve your experience.",
    icon: Database,
  },
  {
    title: "We never sell your data",
    desc: "We share information only with trusted vendors that help us deliver services.",
    icon: ShieldCheck,
  },
  {
    title: "You are in control",
    desc: "Request access, correction, or deletion of your data at any time.",
    icon: Eye,
  },
];

const SECTIONS = [
  {
    title: "Introduction",
    paragraphs: [
      "TubeHelper Lite (\"we,\" \"our,\" or \"us\") values your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, submit forms, request services, or otherwise interact with us.",
      "By using our website, you agree to the practices described in this Privacy Policy.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: ["We may collect the following categories of information:"],
    list: [
      "Personal information: name, email, phone, business name, and details you submit through forms.",
      "Usage data: browser type, IP address, device information, referral source, pages visited, and time on site.",
      "Communication data: messages, inquiries, or support requests you send to us.",
    ],
  },
  {
    title: "How We Collect Information",
    paragraphs: ["We collect information when you:"],
    list: [
      "Fill out a form on our website",
      "Book a demo, call, or consultation",
      "Contact us by email, phone, or other channels",
      "Browse or interact with our website",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: ["We may use your information to:"],
    list: [
      "Respond to inquiries and provide support",
      "Schedule consultations or demos",
      "Deliver and improve our services",
      "Analyze website performance and user behavior",
      "Send service updates or marketing communications",
      "Maintain security and prevent misuse",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "We may use cookies, analytics tools, and similar technologies to enhance your browsing experience, understand website traffic, and improve our services. You can control cookies through your browser settings, though disabling them may affect certain site features.",
    ],
  },
  {
    title: "Sharing of Information",
    paragraphs: ["We do not sell your personal information. We may share information with:"],
    list: [
      "Trusted service providers that help us operate our website or business",
      "Analytics, hosting, CRM, or communication platforms",
      "Legal authorities when required by law or to protect our rights",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have rights regarding your personal information, including the right to request access, correction, deletion, or restriction of your data. To make such a request, contact us using the details provided below.",
    ],
  },
  {
    title: "Third-Party Services and Links",
    paragraphs: [
      "Our website may contain links to third-party websites or use third-party tools. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies separately.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-gray-200 bg-gradient-to-b from-[#eef2ff] to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              <FileText size={16} />
              Privacy Policy
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Your privacy, clearly explained
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              This Privacy Policy explains how TubeHelper Lite collects, uses,
              stores, and protects your personal information when you use our
              website and services.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {SUMMARY.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <div className="space-y-10">
            {SECTIONS.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.03}>
                <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Lock size={14} className="mt-1 text-indigo-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-600" />
                <h3 className="text-xl font-semibold text-slate-900">Contact Us</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                If you have any questions about this Privacy Policy or how your information is
                handled, contact us through your website contact page or official business email.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

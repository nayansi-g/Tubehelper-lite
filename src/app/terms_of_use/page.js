import { AlertTriangle, FileText, Gavel, HelpCircle, ShieldCheck } from "lucide-react";
import Reveal from "../../components/Reveal";

const siteUrl = "https://www.tubehelperlite.xyz";

export const metadata = {
  title: "Terms of Use | TubeHelper Lite",
  description:
    "Read the Terms of Use for TubeHelper Lite to understand the rules, conditions, and limitations for using our website and services.",
  alternates: {
    canonical: "/terms_of_use",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TubeHelper Lite Terms of Use",
  url: `${siteUrl}/terms_of_use`,
  description:
    "Read the Terms of Use for TubeHelper Lite to understand the rules, conditions, and limitations for using our website and services.",
};

const HIGHLIGHTS = [
  {
    title: "Use the site responsibly",
    desc: "No misuse, scraping, or illegal activities.",
    icon: ShieldCheck,
  },
  {
    title: "Content is protected",
    desc: "All materials are owned or licensed by TubeHelper Lite.",
    icon: Gavel,
  },
  {
    title: "No guaranteed results",
    desc: "Outcomes can vary by business and market conditions.",
    icon: AlertTriangle,
  },
];

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with these terms, please do not use this website.",
    ],
  },
  {
    title: "About the Website",
    paragraphs: [
      "TubeHelper Lite provides information about digital services, websites, automations, business growth solutions, and related offerings. Content on this website is provided for general informational and business inquiry purposes.",
    ],
  },
  {
    title: "Permitted Use",
    paragraphs: ["You agree to use the website only for lawful purposes. You must not:"],
    list: [
      "Use the website in any way that violates applicable laws",
      "Attempt to gain unauthorized access to systems or data",
      "Disrupt, damage, or interfere with the website or its security",
      "Copy, scrape, or misuse website content without permission",
      "Submit false, misleading, or harmful information",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, graphics, branding, logos, images, layouts, and other materials, is owned by or licensed to TubeHelper Lite unless otherwise stated. You may not reproduce, distribute, modify, or use our content without prior written permission.",
    ],
  },
  {
    title: "No Guarantee of Results",
    paragraphs: [
      "While we may describe potential business, marketing, development, or automation outcomes, we do not guarantee any specific results, revenue, growth, or performance from using our services or website.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "This website may include links to third-party websites, platforms, or tools. We provide these links for convenience only and do not control or endorse third-party content, services, or policies.",
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "This website and its content are provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied. We do not warrant that the website will be uninterrupted, error-free, secure, or free of viruses or harmful components.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, TubeHelper Lite shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of, or inability to use, this website or its content.",
    ],
  },
  {
    title: "Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless TubeHelper Lite and its owners, affiliates, team members, and service providers from any claims, liabilities, damages, losses, or expenses arising from your misuse of the website or violation of these Terms.",
    ],
  },
  {
    title: "Changes to the Website or Terms",
    paragraphs: [
      "We may update, modify, suspend, or discontinue any part of this website at any time without prior notice. We may also revise these Terms of Use from time to time. Continued use of the website after changes are posted means you accept the revised terms.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms of Use shall be governed by and interpreted in accordance with the laws applicable in your operating jurisdiction, unless otherwise required by law.",
    ],
  },
];

export default function TermsOfUsePage() {
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
              Terms of Use
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Clear rules for using TubeHelper Lite
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              These Terms of Use govern your access to and use of the TubeHelper
              Lite website and related services.
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
            {HIGHLIGHTS.map((item, index) => (
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
                          <ShieldCheck size={14} className="mt-1 text-indigo-500" />
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
                <HelpCircle className="text-indigo-600" />
                <h3 className="text-xl font-semibold text-slate-900">Need help?</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                If you have any questions about these Terms of Use, please contact us through
                your website contact page or official business email.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

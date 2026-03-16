"use client";

import Reveal from "./Reveal";

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
    q: "Is there a long-term contract?",
    a: "No long-term lock-ins. We earn your business by performance.",
  },
  {
    q: "Which service should I start with?",
    a: "We recommend a quick audit call so we can prioritize what delivers results fastest.",
  },
];

export default function HomeFaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="bg-[#f6f7fb] py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Answers to common questions
            </h2>
            <p className="mt-3 text-slate-600">
              Get clarity before you start. We keep everything transparent and simple.
            </p>
          </div>
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
  );
}

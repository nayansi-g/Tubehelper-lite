"use client";

import Reveal from "./Reveal";

const PARTNERS = [
  "LocalHub",
  "ClinicPro",
  "BrightLeaf",
  "MetroFit",
  "HomeAxis",
  "DentaCare",
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Trusted By Local Teams
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {PARTNERS.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

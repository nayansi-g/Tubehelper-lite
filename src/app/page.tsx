// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
// import TrustStrip from "@/components/TrustStrip";
import IndustriesSection from "@/components/Industries";
import ServicesSection from "@/components/ServicesSection";
import CaseStudySection from "@/components/CaseStudySection";
import ProcessSection from "@/components/ProcessSection";
import Testimonals from "@/components/Testimonals";
import HomeFaqSection from "@/components/HomeFaqSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

const siteUrl = "https://www.tubehelperlite.xyz";

export const metadata: Metadata = {
  title: "Home",
  description:
    "TubeHelper Lite helps local businesses grow with AI-powered websites, automation, and marketing systems.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TubeHelper Lite - Home",
  url: `${siteUrl}/`,
  description:
    "TubeHelper Lite helps local businesses grow with AI-powered websites, automation, and marketing systems.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      {/* <TrustStrip /> */}
      <IndustriesSection />
      <ServicesSection />
      <CaseStudySection />
      <ProcessSection />
      <Testimonals />
      <HomeFaqSection />

      <section id="BookDemo">
        <CTASection />
      </section>
      <section id="Contact">
        <ContactSection />
      </section>
    </main>
  );
}

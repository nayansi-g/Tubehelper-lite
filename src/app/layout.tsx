import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.tubehelperlite.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TubeHelper Lite",
    template: "%s | TubeHelper Lite",
  },
  description:
    "AI-powered websites, automation, and growth systems for local businesses.",
  applicationName: "TubeHelper Lite",
  keywords: [
    "local business marketing",
    "AI automation",
    "website design",
    "SEO optimization",
    "WhatsApp automation",
    "Google Business Profile",
    "lead generation",
  ],
  authors: [{ name: "TubeHelper Lite" }],
  creator: "TubeHelper Lite",
  publisher: "TubeHelper Lite",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "TubeHelper Lite",
    description:
      "AI-powered websites, automation, and growth systems for local businesses.",
    siteName: "TubeHelper Lite",
  },
  twitter: {
    card: "summary_large_image",
    title: "TubeHelper Lite",
    description:
      "AI-powered websites, automation, and growth systems for local businesses.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "TubeHelper Lite",
      url: siteUrl,
      logo: `${siteUrl}/logo-sample.svg`,
      description:
        "AI-powered websites, automation, and growth systems for local businesses.",
    },
    {
      "@type": "WebSite",
      name: "TubeHelper Lite",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

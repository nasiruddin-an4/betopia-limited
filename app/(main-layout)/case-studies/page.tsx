import Hero from "./Hero";
import FeaturedWork from "./FeaturedWork";
import OurCapabilities from "./OurCapabilities";
import CTA from "./CTA";

import type { Metadata } from "next";

/*  SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Client Success Stories & Case Studies | Enterprise Digital Transformation | Betopia Limited",

  description:
    "Explore Betopia Limited’s client success stories and case studies across cloud, AI, cybersecurity, and enterprise solutions—delivering measurable results, innovation, and business impact worldwide.",

  keywords: [
    "client success stories",
    "enterprise case studies",
    "digital transformation case studies",
    "cloud AI cybersecurity projects",
    "technology consulting case studies",
    "client portfolio IT services",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/case-studies",
  },

  openGraph: {
    title:
      "Client Success Stories & Case Studies | Enterprise Digital Transformation | Betopia Limited",
    description:
      "Explore Betopia Limited’s client success stories and case studies across cloud, AI, cybersecurity, and enterprise solutions—delivering measurable results, innovation, and business impact worldwide.",
    url: "https://betopialimited.com/case-studies",
    siteName: "Betopia Limited",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <OurCapabilities />
      {/* <WhatOurClientsSay/> */}
      <CTA />
    </div>
  );
}

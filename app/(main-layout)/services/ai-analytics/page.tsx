import React from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhyBetopia from "./WhyBetopia";

import type { Metadata } from "next";
import ServiceCTA from "@/components/shared/services/ServiceCTA";
import ProvenMethodology from "./ProvenMethodology";

/* ✅ SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Data, AI & Analytics Engineering for Enterprises | Predictive & Real-Time Insights | Betopia Limited",

  description:
    "Enterprise data, AI, and analytics engineering services delivering AI-powered applications, predictive insights, real-time dashboards, and secure integrations with Snowflake, Databricks, and Microsoft Fabric by Betopia Limited.",

  keywords: [
    "data and AI engineering services",
    "enterprise AI analytics",
    "predictive analytics solutions",
    "real time analytics dashboards",
    "AI powered enterprise applications",
    "data platform integration services",
    "Snowflake Databricks Microsoft Fabric",
    "regulated industry AI solutions",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/services/ai-analytics",
  },

  openGraph: {
    title:
      "Data, AI & Analytics Engineering for Enterprises | Predictive & Real-Time Insights | Betopia Limited",
    description:
      "Enterprise data, AI, and analytics engineering services delivering AI-powered applications, predictive insights, real-time dashboards, and secure integrations with Snowflake, Databricks, and Microsoft Fabric by Betopia Limited.",
    url: "https://betopialimited.com/services/ai-analytics",
    siteName: "Betopia Limited",
    type: "website",
  },
};
export default function page() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <WhyBetopia />
      <ProvenMethodology />
      {/* <ClientValueStory /> */}
      <ServiceCTA
        title="Make Data Your Competitive Advantage."
        subtitle="AI works best when data works first."
        description="Partner with Betopia Limited to turn your data into a strategic asset—securely, intelligently, and at scale."
      />
    </div>
  );
}

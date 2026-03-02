import React from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhyBetopia from "./WhyBetopia";
import type { Metadata } from "next";
import ProvenMethodology from "./ProvenMethodology";
import ServiceCTA from "@/components/shared/services/ServiceCTA";

/* ✅ SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Cloud Modernization & Managed Services for Enterprises | Multi-Cloud & FinOps | Betopia Limited",

  description:
    "Enterprise cloud modernization and managed services including cloud-native rebuilds, legacy refactoring, multi-cloud deployment, FinOps optimization, and 24×7 operations delivered by Betopia Limited.",

  keywords: [
    "cloud modernization services",
    "enterprise cloud modernization",
    "cloud native application development",
    "legacy application refactoring",
    "multi cloud managed services",
    "FinOps optimization services",
    "cloud managed operations",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/services/cloud-modernization",
  },

  openGraph: {
    title:
      "Cloud Modernization & Managed Services for Enterprises | Multi-Cloud & FinOps | Betopia Limited",
    description:
      "Enterprise cloud modernization and managed services including cloud-native rebuilds, legacy refactoring, multi-cloud deployment, FinOps optimization, and 24×7 operations delivered by Betopia Limited.",
    url: "https://betopialimited.com/services/cloud-modernization",
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
        title="Transform Your Cloud. Transform Your Business."
        subtitle="Modern infrastructure isn’t optional. It’s decisive."
        description="Partner with Betopia Limited to modernize your cloud environment with confidence, security, and measurable business value."
      />
    </div>
  );
}

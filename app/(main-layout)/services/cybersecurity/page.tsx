import React from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhyBetopia from "./WhyBetopia";
import ClientValueStory from "./ClientValueStory";
import CTA from "./CTA";

import type { Metadata } from "next";
import ServiceCTA from "@/components/shared/services/ServiceCTA";
import ProvenMethodology from "./ProvenMethodology";

/* ✅ SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "End-to-end enterprise cybersecurity and compliance solutions including secure-by-design development, compliance automation (HIPAA, FedRAMP, PCI DSS), SOC, MDR, and incident response delivered by Betopia Limited.",

  description:
    "End-to-end enterprise cybersecurity and compliance solutions including secure-by-design development, compliance automation (HIPAA, FedRAMP, PCI DSS), SOC, MDR, and incident response delivered by Betopia Limited.",

  keywords: [
    "cybersecurity and compliance solutions",
    "enterprise cybersecurity services",
    "compliance automation services",
    "HIPAA FedRAMP PCI DSS compliance",
    "SOC and MDR services",
    "secure by design development",
    "incident response services",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/services/cybersecurity",
  },

  openGraph: {
    title:
      "End-to-end enterprise cybersecurity and compliance solutions including secure-by-design development, compliance automation (HIPAA, FedRAMP, PCI DSS), SOC, MDR, and incident response delivered by Betopia Limited.",
    description:
      "End-to-end enterprise cybersecurity and compliance solutions including secure-by-design development, compliance automation (HIPAA, FedRAMP, PCI DSS), SOC, MDR, and incident response delivered by Betopia Limited.",
    url: "https://betopialimited.com/services/cybersecurity",
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
      <ProvenMethodology/>
      {/* <ClientValueStory /> */}
      <ServiceCTA
        title="Secure Today. Resilient Tomorrow."
        subtitle="Because trust is built on security."
        description="Partner with Betopia Limited to protect your business with confidence, compliance, and continuous resilience."
      />
    </div>
  );
}

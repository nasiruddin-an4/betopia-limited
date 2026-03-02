import ServiceCTA from "@/components/shared/services/ServiceCTA";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhyBetopia from "./WhyBetopia";

import type { Metadata } from "next";
import ProvenMethodology from "./ProvenMethodology";

/* ✅ SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Enterprise Resource Augmentation Services | On-Demand IT Talent | Betopia Limited",

  description:
    "Enterprise-grade resource augmentation services providing certified cloud, AI, security, and software professionals embedded into programs to accelerate delivery, reduce risk, and optimize costs by Betopia Limited.",

  keywords: [
    "resource augmentation services",
    "enterprise IT staff augmentation",
    "on demand IT talent",
    "cloud AI security professionals",
    "global delivery teams",
    "embedded development teams",
    "offshore resource augmentation",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/services/resource-augmentation",
  },

  openGraph: {
    title:
      "Enterprise Resource Augmentation Services | On-Demand IT Talent | Betopia Limited",
    description:
      "Enterprise-grade resource augmentation services providing certified cloud, AI, security, and software professionals embedded into programs to accelerate delivery, reduce risk, and optimize costs by Betopia Limited.",
    url: "https://betopialimited.com/services/resource-augmentation",
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
      {/* <ClientValueStory/> */}
      <ServiceCTA
        title="Scale Your Teams. Accelerate Delivery."
        subtitle="Right skills. Right time. Real results."
        description="Partner with Betopia Limited to scale your teams with confidence, flexibility, and measurable impact."
      />
    </div>
  );
}

import BetopiaHRM from "./BetopiaHRM";
import BuiltFor from "./BuiltFor";
import CTA from "./CTA";
import EnterpriseOperations from "./EnterpriseOperations";
import Hero from "./Hero";
import ModularSection from "./ModularSection";
import ReadyFor from "./ReadyFor";
import WhyChooseBetopiaERP from "./WhyChooseBetopiaERP";

import type { Metadata } from "next";

/* SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Betopia HRM | Intelligent Workforce & HR Management Platform | Betopia Limited",

  description:
    "Betopia HRM is a centralized, secure, and scalable HR management platform that automates HR operations, attendance, leave, shifts, and delivers real-time workforce insights for modern organizations.",

  keywords: [
    "Betopia HRM",
    "HRM software",
    "human resource management system",
    "workforce management platform",
    "attendance and leave management software",
    "HR automation platform",
    "employee information management system",
    "enterprise HR software",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/product/hrm-product",
  },

  openGraph: {
    title:
      "Betopia HRM | Intelligent Workforce & HR Management Platform | Betopia Limited",
    description:
      "Betopia HRM is a centralized, secure, and scalable HR management platform that automates HR operations, attendance, leave, shifts, and delivers real-time workforce insights for modern organizations.",
    url: "https://betopialimited.com/product/hrm-product",
    siteName: "Betopia Limited",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <Hero />
      <BetopiaHRM />
      <WhyChooseBetopiaERP />
      <EnterpriseOperations />
      <BuiltFor />
      <ModularSection />
      {/* <CorePlatform /> */}
      {/* <WhyChooseBetopiaHRM /> */}
      <ReadyFor />
      {/* <IdealFor /> */}
      <CTA />
      {/* <WhatOurCustomersSay /> */}
      {/* <HrmCTA /> */}
      {/* <Product2Hero />
            <HumanResource />
            <ComprehensiveFeatures />
            <AdvanceFeatures />
            <WhyBetopia />
            <TrustedBy />
            <FAQSection
                imageSrc="/service/faq.png"
                faqs={servicefaqData}
            />
            <Product2CTA /> */}
    </div>
  );
}

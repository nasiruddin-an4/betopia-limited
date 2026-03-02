import CountTrust from "./CountTrust";
import OurPlatform from "./OurPlatform";
import WhyChooseBetopia from "./WhyChooseBetopia";
import IdealFor from "./IdealFor";
import CTA from "./CTA";
import type { Metadata } from "next";
import VotingHero from "./VotingHero";
import SecureVoting from "./SecureVoting";
import SecurityTrustCapabilities from "./SecurityTrustCapabilities";
import DeploymentSection from "./DeploymentSection";

/*  SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Count Trust | Secure & Transparent Voting Platform for Enterprises | Betopia Limited",

  description:
    "Count Trust is a secure, auditable, and hybrid SaaS voting platform delivering encrypted, verifiable, and compliant elections with real-time results and full governance control.",

  keywords: [
    "Count Trust",
    "secure voting platform",
    "enterprise voting system",
    "online voting software",
    "hybrid voting platform",
    "electronic voting system",
    "governance and election management software",
    "auditable voting solution",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/product/voting-count-trust",
  },

  openGraph: {
    title:
      "Count Trust | Secure & Transparent Voting Platform for Enterprises | Betopia Limited",
    description:
      "Count Trust is a secure, auditable, and hybrid SaaS voting platform delivering encrypted, verifiable, and compliant elections with real-time results and full governance control.",
    url: "https://betopialimited.com/product/voting-count-trust",
    siteName: "Betopia Limited",
    type: "website",
  },
};
export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <VotingHero />
      <CountTrust />
      <IdealFor />
      <OurPlatform />
      <SecureVoting />
      <SecurityTrustCapabilities />
      <DeploymentSection />
      <WhyChooseBetopia />
      {/* <WhatOurCustomersSay /> */}
      <CTA />
    </div>
  );
}

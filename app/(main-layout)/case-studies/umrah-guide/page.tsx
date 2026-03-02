import React from "react";
import Hero from "./Hero";
import Details from "./Details";
import type { Metadata } from "next";

/*  SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Case Study: AI-Powered Pilgrimage Assistance App | Umrah Guide & Connection | Betopia Limited",

  description:
    "Learn how Betopia Limited designed and developed Umrah Guide & Connection, an AI-powered mobile application delivering personalized guidance, booking support, and seamless user experience for pilgrims during Umrah and Hajj.",

  keywords: [
    "AI pilgrimage app case study",
    "Umrah guide mobile app",
    "AI powered travel app case study",
    "religious travel application",
    "UX UI mobile app case study",
    "AI assistant mobile app",
    "location based service app",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/case-studies/umrah-guide",
  },

  openGraph: {
    title:
      "Case Study: AI-Powered Pilgrimage Assistance App | Umrah Guide & Connection | Betopia Limited",
    description:
      "Learn how Betopia Limited designed and developed Umrah Guide & Connection, an AI-powered mobile application delivering personalized guidance, booking support, and seamless user experience for pilgrims during Umrah and Hajj.",
    url: "https://betopialimited.com/case-studies/umrah-guide",
    siteName: "Betopia Limited",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <Hero />
      <Details />
    </div>
  );
}

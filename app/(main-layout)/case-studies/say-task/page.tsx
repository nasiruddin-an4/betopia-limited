import React from "react";
import Hero from "./Hero";
import Details from "./Details";
import type { Metadata } from "next";

/* SEO META INFORMATION */
export const metadata: Metadata = {
  title: "Case Study: AI-Powered Nutrition App | Nutri AI | Betopia Limited",

  description:
    "Discover how Betopia Limited designed and developed Nutri AI, an AI-powered nutrition coaching mobile app delivering personalized meal planning, calorie tracking, and real-time dietary insights through intuitive UX and intelligent automation.",

  keywords: [
    "AI nutrition app case study",
    "AI powered health app",
    "nutrition coaching mobile app",
    "personalized diet app case study",
    " AI healthcare application",
    "UX UI mobile app case study",
    "AI lifestyle app development",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/case-studies/nutri-ai",
  },

  openGraph: {
    title: "Case Study: AI-Powered Nutrition App | Nutri AI | Betopia Limited",
    description:
      "Discover how Betopia Limited designed and developed Nutri AI, an AI-powered nutrition coaching mobile app delivering personalized meal planning, calorie tracking, and real-time dietary insights through intuitive UX and intelligent automation.",
    url: "https://betopialimited.com/case-studies/nutri-ai",
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

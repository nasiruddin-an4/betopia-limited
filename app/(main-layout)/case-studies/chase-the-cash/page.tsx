import Hero from "./Hero";
import Details from "./Details";
import type { Metadata } from "next";

/* SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Case Study: AI-Powered Gamified Mobile App | CHASE THE CASH SA | Betopia Limited",

  description:
    "Explore how Betopia Limited designed and developed CHASE THE CASH SA, an AI-powered, gamified mobile application using real-time location tracking, QR scanning, and interactive challenges to deliver an engaging treasure hunt experience.",

  keywords: [
    "AI mobile app case study",
    "gamified application development",
    "location based mobile app case study",
    "AI powered mobile app",
    "QR code based application",
    "UX UI mobile app case study",
    "digital product design case study",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/case-studies/chase-the-cash",
  },

  openGraph: {
    title:
      "Case Study: AI-Powered Gamified Mobile App | CHASE THE CASH SA | Betopia Limited",
    description:
      "Explore how Betopia Limited designed and developed CHASE THE CASH SA, an AI-powered, gamified mobile application using real-time location tracking, QR scanning, and interactive challenges to deliver an engaging treasure hunt experience.",
    url: "https://betopialimited.com/case-studies/chase-the-cash",
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

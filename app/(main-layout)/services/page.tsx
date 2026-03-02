import ServiceMain from "@/components/pages/service/ServiceMain";
import React from "react";
import type { Metadata } from "next";

/* ✅ SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Enterprise Technology Services | AI, Cloud & Cybersecurity | Betopia Limited",

  description:
    "Enterprise technology services delivering AI & analytics, cloud transformation, cybersecurity, and resource augmentation to accelerate innovation, strengthen security, and drive measurable business outcomes by Betopia Limited.",

  keywords: [
    "enterprise technology services",
    "IT services for enterprises",
    "AI and analytics services",
    "cloud services enterprise",
    "cybersecurity services",
    "resource augmentation services",
    "digital transformation services",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/services",
  },

  openGraph: {
    title:
      "Enterprise Technology Services | AI, Cloud & Cybersecurity | Betopia Limited",
    description:
      "Enterprise technology services delivering AI & analytics, cloud transformation, cybersecurity, and resource augmentation to accelerate innovation, strengthen security, and drive measurable business outcomes by Betopia Limited.",
    url: "https://betopialimited.com/services",
    siteName: "Betopia Limited",
    type: "website",
  },
};
const page = () => {
  return (
    <div>
      <ServiceMain />
    </div>
  );
};

export default page;

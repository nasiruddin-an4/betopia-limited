import AboutMain from "@/components/pages/about/AboutMain";
import type { Metadata } from "next";

/*  SEO META INFORMATION */
export const metadata: Metadata = {
  title: "About Betopia Limited | Global Enterprise Technology Company",

  description:
    "Betopia Limited is a global enterprise technology company delivering secure, cloud-ready, and AI-powered platforms. Headquartered in Bangladesh with global delivery hubs, Betopia helps enterprises modernize, scale, and innovate with confidence.",

  keywords: [
    "Betopia Limited, about Betopia",
    " global technology company",
    "enterprise technology leader",
    "cloud AI cybersecurity company",
    "digital transformation partner",
    "IT services Bangladesh",
    "global delivery technology firm",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/about",
  },

  openGraph: {
    title: "About Betopia Limited | Global Enterprise Technology Company",
    description:
      "Betopia Limited is a global enterprise technology company delivering secure, cloud-ready, and AI-powered platforms. Headquartered in Bangladesh with global delivery hubs, Betopia helps enterprises modernize, scale, and innovate with confidence.",
    url: "https://betopialimited.com/about",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <AboutMain />
    </div>
  );
};

export default page;

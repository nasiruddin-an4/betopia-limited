import HRMSoftware from "@/components/pages/product/HRMSoftware";
import ModernBusinesses from "@/components/pages/product/ModernBusinesses";
import ProductCTA from "@/components/pages/product/ProductCTA";
import ProductHero from "@/components/pages/product/ProductHero";
import UnlimitedPossibilities from "@/components/pages/product/UnlimitedPossibilities";
import WhyChooseBetopia from "@/components/pages/product/WhyChooseBetopia";
import type { Metadata } from "next";

/*  SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Enterprise Business Software Products | AI-Driven Product Ecosystem | Betopia Limited",

  description:
    "An intelligent ecosystem of enterprise software products including HRM, ERP, voting, and AI-powered platforms designed to automate operations, enhance collaboration, and drive scalable business growth by Betopia Limited.",

  keywords: [
    "enterprise software products",
    "business automation software",
    "AI driven business platforms",
    "HRM ERP software ecosystem",
    "enterprise SaaS products",
    "workforce and business management software",
    "AI powered business tools",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/product",
  },

  openGraph: {
    title:
      "Enterprise Business Software Products | AI-Driven Product Ecosystem | Betopia Limited",
    description:
      "An intelligent ecosystem of enterprise software products including HRM, ERP, voting, and AI-powered platforms designed to automate operations, enhance collaboration, and drive scalable business growth by Betopia Limited.",
    url: "https://betopialimited.com/product",
    siteName: "Betopia Limited",
    type: "website",
  },
};
export default function page() {
  return (
    <div>
      <ProductHero />
      <UnlimitedPossibilities />
      <ModernBusinesses />
      <HRMSoftware />
      <WhyChooseBetopia />
      {/* <TrustedBy /> */}
      <ProductCTA />
    </div>
  );
}

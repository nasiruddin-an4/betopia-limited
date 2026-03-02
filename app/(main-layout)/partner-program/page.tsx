import ApplyForm from "@/components/pages/partner-program/ApplyForm";
import Benefits from "@/components/pages/partner-program/Benefits";
import CTA from "@/components/pages/partner-program/CTA";
import FAQSection from "@/components/pages/partner-program/FAQSection";
import Features from "@/components/pages/partner-program/Features";
import Hero from "@/components/pages/partner-program/Hero";
import HowItWorks from "@/components/pages/partner-program/HowItWorks";
import Offerings from "@/components/pages/partner-program/Offerings";
import Partners from "@/components/pages/partner-program/Partners";
import RevenueStructure from "@/components/pages/partner-program/RevenueStructure";
import Testimonial from "@/components/pages/partner-program/Testimonial";
import type { Metadata } from "next";

/* ✅ SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Global Technology Partnership Program | Sales & White-Label Partners | Betopia Limited",

  description:
    "The Betopia Partnership Program enables global sales and white-label partners to deliver enterprise cloud, AI, cybersecurity, and proprietary platforms while earning recurring revenue and expanding market reach with Betopia Limited.",

  keywords: [
    "technology partnership program",
    "IT sales partner program",
    "white label IT partnership",
    "global technology partner network",
    "enterprise solutions partner",
    "cloud AI cybersecurity partner",
    "SaaS reseller program",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/partner-program",
  },

  openGraph: {
    title:
      "Global Technology Partnership Program | Sales & White-Label Partners | Betopia Limited",
    description:
      "The Betopia Partnership Program enables global sales and white-label partners to deliver enterprise cloud, AI, cybersecurity, and proprietary platforms while earning recurring revenue and expanding market reach with Betopia Limited.",
    url: "https://betopialimited.com/partner-program",
    siteName: "Betopia Limited",
    type: "website",
  },
};
const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Offerings />
      <Partners />
      <RevenueStructure />
      <HowItWorks />
      <Testimonial />
      <FAQSection />
      <CTA />
    </div>
  );
};

export default page;
// const page = () => {
//   return (
//     <div>
//       <PartnerHero />
//       {/* <WhyPartner /> */}
//       {/* <PartnershipTypes /> */}
//       {/* <PartnerProcess /> */}
//       <PartnerSuccessStories />
//       <BetopiaPartnership/>
//       <WhoPartner />
//       <PartnershipPlans/>
//       <HowItWorks/>
//       <PartnershipBenefits />
//       <PartnerTestimonials/>
//       <FAQSection imageSrc="/service/faq.png" faqs={partnerfaqData} />
//       <PartnerForm />
//       <Brand />
//       {/* <PartnerCTA /> */}
//       <CTA/>
//     </div>
//   );
// };

// export default page;

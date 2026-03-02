import HighlyEffective from "@/components/pages/solution/common/HighlyEffective";
import SolutionAbout from "@/components/pages/solution/common/SolutionAbout";
import InfrastructureBanner from "@/components/pages/solution/dcim-network/infrastructure-management/InfrastructureBanner";
import {
  infrastructureSolutions,
  InfrastructurewhyBetopiaContent,
} from "@/data/solution";
import WhyBetopia from "@/components/pages/solution/common/WhyBetopia";
import CTA from "@/components/pages/solution/common/CTA";
import ClientValueStory from "@/components/pages/solution/common/ClientValueStory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Infrastructure Management Solutions for Enterprises | Betopia Limited",

  description:
    "Enterprise-grade backup, disaster recovery, monitoring, and infrastructure management solutions designed to maximize uptime, resilience, and operational efficiency by Betopia Limited.",
 
  keywords: [
    "infrastructure management solutions",
    "enterprise infrastructure services",
    "backup and disaster recovery solutions",
    "BCDR services",
    "infrastructure monitoring solutions",
    "hybrid infrastructure management",
    "IT operations management",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/dcim-network/infrastructure-management",
  },

  openGraph: {
    title:
      "Infrastructure Management Solutions for Enterprises | Betopia Limited",
    description:
      "Enterprise-grade backup, disaster recovery, monitoring, and infrastructure management solutions designed to maximize uptime, resilience, and operational efficiency by Betopia Limited.",
    url: "https://betopialimited.com/solution/dcim-network/infrastructure-management",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <InfrastructureBanner />
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Infrastructure Management <br /> Solutions
          </>
        }
        description="We deliver comprehensive infrastructure management solutions that help organizations maintain availability, performance, and resilience across on-premises, cloud, and hybrid environments"
        imageSrc="/solution/dcim/infrastructure/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={infrastructureSolutions}
      />
      <WhyBetopia content={InfrastructurewhyBetopiaContent} />
      <ClientValueStory title="We don’t just monitor systems — we actively manage and optimize infrastructure to prevent downtime, protect data, and keep business operations running without disruption" />
      <CTA title="Ready to modernize your data platforms and unlock business insights?" />
    </div>
  );
};

export default page;

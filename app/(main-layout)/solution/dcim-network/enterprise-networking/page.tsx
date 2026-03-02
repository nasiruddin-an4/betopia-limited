import ClientValueStory from "@/components/pages/solution/common/ClientValueStory";
import CTA from "@/components/pages/solution/common/CTA";
import HighlyEffective from "@/components/pages/solution/common/HighlyEffective";
import SolutionAbout from "@/components/pages/solution/common/SolutionAbout";
import WhyBetopia from "@/components/pages/solution/common/WhyBetopia";
import EnterpriseNetworkingBanner from "@/components/pages/solution/dcim-network/enterprise-networking/EnterpriseNetworkingBanner";
import {
  enterpriseSolutions,
  EnterprisewhyBetopiaContent,
} from "@/data/solution";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Enterprise Networking Solutions | Secure LAN, WAN & SD-WAN | Betopia Limited",

  description:
    "Enterprise-grade LAN, WAN, wireless, SD-WAN, SASE, and secure networking solutions designed for performance, visibility, and always-on connectivity by Betopia Limited.",
  

  keywords: [
    "enterprise networking solutions",
    "LAN WAN solutions",
    "SD-WAN services",
    "secure enterprise networks",
    "network security and access control",
    "SASE solutions",
    "data center networking",
    "network monitoring solutions",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/dcim-network/enterprise-networking",
  },

  openGraph: {
    title:
      "Enterprise Networking Solutions | Secure LAN, WAN & SD-WAN | Betopia Limited",
    description:
      "Enterprise-grade LAN, WAN, wireless, SD-WAN, SASE, and secure networking solutions designed for performance, visibility, and always-on connectivity by Betopia Limited.",
    url: "https://betopialimited.com/solution/dcim-network/enterprise-networking",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <EnterpriseNetworkingBanner />
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Enterprise Networking <br /> Solutions
          </>
        }
        description="We design, deploy, and manage enterprise-grade networking architectures that ensure secure, high-performance connectivity across offices, data centers, branches, and remote users."
        imageSrc="/solution/dcim/enterprise/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={enterpriseSolutions}
      />
      <WhyBetopia content={EnterprisewhyBetopiaContent} />
      <ClientValueStory title="We don’t just connect networks — we design intelligent, secure connectivity that keeps enterprises always online, protects users and data, and scales as the business grows" />
      <CTA title="Ready to unlock the power of AI for your business?" />
    </div>
  );
};

export default page;

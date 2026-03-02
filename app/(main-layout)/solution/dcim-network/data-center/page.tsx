import HighlyEffective from "@/components/pages/solution/common/HighlyEffective";
import { dataCenterSolutions, whyBetopiaContent } from "@/data/solution";
import ClientValueStory from "@/components/pages/solution/common/ClientValueStory";
import SolutionAbout from "../../../../../components/pages/solution/common/SolutionAbout";
import DataCenterBanner from "@/components/pages/solution/dcim-network/data-center/DataCenterBanner";
import WhyBetopia from "@/components/pages/solution/common/WhyBetopia";
import CTA from "@/components/pages/solution/common/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Data Center & Virtualization Solutions for Enterprises | Betopia Limited",

  description:
    "Enterprise-grade data center, virtualization, container, and hyperconverged infrastructure solutions designed for high availability, performance, and scalable growth by Betopia Limited.",

  keywords: [
    "data center solutions",
    "enterprise data center services",
    "virtualization solutions",
    "server infrastructure services",
    "storage solutions enterprise",
    "containerization solutions",
    "hyperconverged infrastructure",
    "private cloud infrastructure",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/dcim-network/data-center",
  },

  openGraph: {
    title:
      "Data Center & Virtualization Solutions for Enterprises | Betopia Limited",
    description:
      "Enterprise-grade data center, virtualization, container, and hyperconverged infrastructure solutions designed for high availability, performance, and scalable growth by Betopia Limited.",
    url: "https://betopialimited.com/solution/dcim-network/data-center",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <DataCenterBanner />
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Data Center & <br /> Virtualization Solution
          </>
        }
        description="We design, deploy, modernize, and manage end-to-end data center and virtualization environments that support mission-critical enterprise workloads with high availability, security, and scalability."
        imageSrc="/solution/dcim/data/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={dataCenterSolutions}
      />
      <WhyBetopia content={whyBetopiaContent} />
      <ClientValueStory title="We don’t just deploy infrastructure — we engineer data center foundations that deliver high availability, operational efficiency, and the flexibility to evolve with your business." />
      <CTA title="Ready to modernize your data center and virtualization environment?" />
    </div>
  );
};

export default page;

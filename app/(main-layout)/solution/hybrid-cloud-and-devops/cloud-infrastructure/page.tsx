import ClientValueStory from "@/components/pages/solution/common/ClientValueStory";
import CTA from "@/components/pages/solution/common/CTA";
import HighlyEffective from "@/components/pages/solution/common/HighlyEffective";
import SolutionAbout from "@/components/pages/solution/common/SolutionAbout";
import WhyBetopia from "@/components/pages/solution/common/WhyBetopia";
import CloudInfrastructureHero from "@/components/pages/solution/hybrid-cloud-and-devops/cloud-infrastructure/CloudInfrastructureHero";
import {
  CloudinfrastructureSolutions,
  CloudinfrastructurewhyBetopia,
} from "@/data/solution";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud Infrastructure Solutions for Enterprises | Secure & Scalable Cloud | Betopia Limited",

  description:
    "Enterprise-grade cloud infrastructure solutions covering compute, storage, networking, databases, backup, and performance management across public, private, and hybrid cloud environments by Betopia Limited.",
  
  keywords: [
    "cloud infrastructure solutions",
    "enterprise cloud infrastructure",
    "cloud compute and storage services",
    "hybrid cloud solutions",
    "multi-cloud infrastructure services",
    "loud backup and disaster recovery",
    "cloud monitoring and performance management",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/hybrid-cloud-and-devops/cloud-infrastructure",
  },

  openGraph: {
    title:
      "Cloud Infrastructure Solutions for Enterprises | Secure & Scalable Cloud | Betopia Limited",
    description:
      "Enterprise-grade cloud infrastructure solutions covering compute, storage, networking, databases, backup, and performance management across public, private, and hybrid cloud environments by Betopia Limited.",
    url: "https://betopialimited.com/solution/hybrid-cloud-and-devops/cloud-infrastructure",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <CloudInfrastructureHero />
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Cloud Infrastructure <br />
            Solutions
          </>
        }
        description="We design, deploy, and manage end-to-end cloud infrastructure environments that support enterprise workloads across public cloud, private cloud, and hybrid architectures—ensuring performance, resilience, and cost efficiency."
        imageSrc="/solution/hybrid/infrastructure/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={CloudinfrastructureSolutions}
      />
      <WhyBetopia content={CloudinfrastructurewhyBetopia} />
      <ClientValueStory title="We don’t just provision cloud resources — we architect cloud infrastructure that scales seamlessly, performs reliably, and supports business continuity without compromise." />
      <CTA title="Ready to build or modernize your cloud infrastructure with confidence?" />
    </div>
  );
};

export default page;

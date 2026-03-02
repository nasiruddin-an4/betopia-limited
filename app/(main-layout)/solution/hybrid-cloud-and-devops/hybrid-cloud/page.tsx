import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA'
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import HybridCloudHero from '@/components/pages/solution/hybrid-cloud-and-devops/HybridCloudHero'
import { HybridCloudSolutions, HybridCloudwhyBetopia } from '@/data/solution'
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hybrid Cloud Solutions for Enterprises | Secure & Scalable Hybrid Cloud | Betopia Limited",

  description:"Secure, scalable hybrid cloud solutions integrating on-premises infrastructure with public cloud platforms to deliver flexibility, performance, and business continuity by Betopia Limited.",

  keywords: [
    "hybrid cloud solutions",
    "enterprise hybrid cloud",
    "hybrid cloud architecture",
    "on-premises and cloud integration",
    "hybrid cloud infrastructure services",
    "hybrid cloud networking",
    "hybrid backup and disaster recovery",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/hybrid-cloud-and-devops/hybrid-cloud",
  },

  openGraph: {
    title:
      "Hybrid Cloud Solutions for Enterprises | Secure & Scalable Hybrid Cloud | Betopia Limited",
    description:
"Secure, scalable hybrid cloud solutions integrating on-premises infrastructure with public cloud platforms to deliver flexibility, performance, and business continuity by Betopia Limited.",
    url: "https://betopialimited.com/solution/hybrid-cloud-and-devops/hybrid-cloud",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <HybridCloudHero/>
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Hybrid Cloud Solutions 
          </>
        }
        description="We design and implement hybrid cloud architectures that seamlessly connect on-premises systems with cloud platforms, enabling workload portability, resilience, and optimized performance."
        imageSrc="/solution/hybrid/infrastructure/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={HybridCloudSolutions}
      />
      <WhyBetopia content={HybridCloudwhyBetopia} />
      <ClientValueStory title="We don’t force enterprises to choose between on-prem or cloud — we design hybrid environments that deliver the best of both worlds with security, performance, and control." />
      <CTA title="Ready to build a secure and scalable hybrid cloud environment?" />
    </div>
  )
}

export default page

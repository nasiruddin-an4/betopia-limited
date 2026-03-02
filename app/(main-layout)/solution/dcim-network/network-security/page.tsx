import ClientValueStory from "@/components/pages/solution/common/ClientValueStory"
import CTA from "@/components/pages/solution/common/CTA"
import HighlyEffective from "@/components/pages/solution/common/HighlyEffective"
import SolutionAbout from "@/components/pages/solution/common/SolutionAbout"
import WhyBetopia from "@/components/pages/solution/common/WhyBetopia"
import NetworkBanner from "@/components/pages/solution/dcim-network/network-security/NetworkBanner"
import { networkSolutions, NetworkwhyBetopiaContent } from "@/data/solution"
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Network Security Solutions for Enterprises | Zero Trust & Cloud Security | Betopia Limited",

  description:
    "Enterprise-grade network security solutions including NGFW, ZTNA, WAF, DDoS protection, API security, and Zero Trust architectures for on-prem, cloud, and hybrid environments by Betopia Limited.",
  
  keywords: [
    "network security solutions",
    "enterprise network security",
    "Zero Trust network access",
    "NGFW solutions",
    "WAF and API security",
    "DDoS protection services",
    "cloud network security",
    "secure SD-WAN",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/dcim-network/network-security",
  },

  openGraph: {
    title:
      "Network Security Solutions for Enterprises | Zero Trust & Cloud Security | Betopia Limited",
    description:
      "Enterprise-grade network security solutions including NGFW, ZTNA, WAF, DDoS protection, API security, and Zero Trust architectures for on-prem, cloud, and hybrid environments by Betopia Limited.",
    url: "https://betopialimited.com/solution/dcim-network/network-security",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
     <div>
          <NetworkBanner/>
             <SolutionAbout
            badgeText="What We Do"
            title={
              <>
                Network Security<br /> Solutions
              </>
            }
            description="We design and implement comprehensive network security architectures that protect enterprises from modern cyber threats while enabling secure access, visibility, and performance across all network layers."
            imageSrc="/solution/dcim/network/about.png"
          />
          <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={networkSolutions}
      />
      <WhyBetopia content={NetworkwhyBetopiaContent} />
      <ClientValueStory title="We don’t just deploy security tools — we design network security architectures that prevent breaches, protect access, and keep enterprises operating securely without slowing the business." />
      <CTA title="Ready to secure your enterprise network from edge to cloud?" />
        </div>
  )
}

export default page

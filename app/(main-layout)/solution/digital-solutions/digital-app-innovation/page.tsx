import React from 'react'
import Hero from './Hero'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout' 
import { digitalAppInnovation, digitalAppInnovationwhyBetopiaContent } from '@/data/solution'
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA'
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digital & Application Innovation Solutions for Enterprises | Automation & DevOps | Betopia Limited",

  description:
    "End-to-end digital and application innovation solutions covering intelligent automation, application modernization, DevOps, low-code platforms, and scalable digital experiences for enterprises by Betopia Limited.",

  keywords: [
    "digital innovation solutions",
    "enterprise application development",
    "application modernization services",
    "intelligent automation solutions",
    "DevOps and CI/CD services",
    "low-code application development",
    "digital experience platforms DXP",
    "RPA automation services",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/digital-solutions/digital-app-innovation",
  },

  openGraph: {
    title:
      "Digital & Application Innovation Solutions for Enterprises | Automation & DevOps | Betopia Limited",
    description:
      "End-to-end digital and application innovation solutions covering intelligent automation, application modernization, DevOps, low-code platforms, and scalable digital experiences for enterprises by Betopia Limited.",
    url: "https://betopialimited.com/solution/digital-solutions/digital-app-innovation",
    siteName: "Betopia Limited",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
        <Hero/>
        <SolutionAbout
        badgeText="What We Do"
        title={
          <>
          Digital & App Innovation <br /> Solutions
          </>
        }
        description="We help organizations design, build, modernize, and optimize digital applications by combining modern development platforms, automation, DevOps, and experience-driven design—accelerating innovation while ensuring security, scalability, and performance."
        imageSrc="/solution/Digital App Innovation Solutions.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just build applications — we enable digital innovation by modernizing platforms, automating processes, and delivering experiences that scale with the business.”" />
            <CTA title="Ready to accelerate your digital and application innovation journey?" />
    </div>
  )
}

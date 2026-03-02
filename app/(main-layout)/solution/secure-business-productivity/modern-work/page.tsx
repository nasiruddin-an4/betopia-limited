import React from 'react'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout' 
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA'
import Hero from './Hero'
import { ModernWork, ModernWorkwhyBetopiaContent } from '@/data/solution'
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "Digital & Application Innovation Solutions for Enterprises | Automation & DevOps | Betopia Limited",

//   description:
//     "End-to-end digital and application innovation solutions covering intelligent automation, application modernization, DevOps, low-code platforms, and scalable digital experiences for enterprises by Betopia Limited.",

//   keywords: [
//     "digital innovation solutions",
//     "enterprise application development",
//     "application modernization services",
//     "intelligent automation solutions",
//     "DevOps and CI/CD services",
//     "low-code application development",
//     "digital experience platforms DXP",
//     "RPA automation services",
//     "Betopia Limited",
//   ],

//   robots: {
//     index: true,
//     follow: true,
//   },

//   alternates: {
//     canonical: "https://betopialimited.com/solution/digital-solutions/digital-app-innovation",
//   },

//   openGraph: {
//     title:
//       "Digital & Application Innovation Solutions for Enterprises | Automation & DevOps | Betopia Limited",
//     description:
//       "End-to-end digital and application innovation solutions covering intelligent automation, application modernization, DevOps, low-code platforms, and scalable digital experiences for enterprises by Betopia Limited.",
//     url: "https://betopialimited.com/solution/digital-solutions/digital-app-innovation",
//     siteName: "Betopia Limited",
//     type: "website",
//   },
// };

export default function page() {
  return (
    <div>
        <Hero/>
        <SolutionAbout
        badgeText="What We Do"
        title={
          <>
          Modern Work Solutions
          </>
        }
        description="Empower your organization with the tools, platforms, and experiences that drive productivity, collaboration, and engagement—anytime, anywhere. Our Modern Work Solutions help your teams work smarter, stay connected, and thrive in today’s hybrid work environment."
        imageSrc="/solution/secure/modern-work/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={ModernWork}
      />

      <WhyBetopia content={ModernWorkwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just deploy infrastructure — we engineer data center foundations that deliver high availability, operational efficiency, and the flexibility to evolve with your business.”" />
            <CTA title="Ready to modernize your data center and virtualization environment?" />
    </div>
  )
}

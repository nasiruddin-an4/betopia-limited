import React from 'react'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout' 
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA'
import Hero from './Hero'
import { EndPointSecurity, EndPointSecuritywhyBetopiaContent } from '@/data/solution'
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
          Endpoint Security Solutions
          </>
        }
        description="Endpoints remain one of the most targeted attack surfaces in modern enterprises. Our Endpoint Security Solutions provide layered, intelligent protection across desktops, laptops, and mobile devices—helping organizations prevent, detect, and respond to threats in real time. By combining advanced threat protection, continuous monitoring, and policy-driven controls, we enable a strong security posture without compromising user productivity or business agility."
        imageSrc="/solution/secure/end-point-security/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={EndPointSecurity}
      />

      <WhyBetopia content={EndPointSecuritywhyBetopiaContent} />
      <ClientValueStory title="We don’t just monitor systems — we actively manage and optimize infrastructure to prevent downtime, protect data, and keep business operations running without disruption" />
            <CTA title="Ready to modernize your data platforms and unlock business insights?" />
    </div>
  )
}

import React from 'react'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout' 
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA'
import Hero from './Hero'
import { Endpoint, EndpointwhyBetopiaContent } from '@/data/solution'
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
         Endpoint Solutions
          </>
        }
        description="In a rapidly evolving digital workplace, endpoints are no longer just devices, they are the gateway to your business. Our Endpoint Solutions help organizations take full control of desktops, laptops, and mobile devices while delivering a secure, seamless, and productive user experience. By combining intelligent management, proactive monitoring, and enterprise-grade security, we enable you to reduce risk, lower operational costs, and confidently support a hybrid workforce."
        imageSrc="/solution/secure/endpoint/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={Endpoint}
      />

      <WhyBetopia content={EndpointwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just deploy security tools — we design network security architectures that prevent breaches, protect access, and keep enterprises operating securely without slowing the business.”" />
            <CTA title="Ready to secure your enterprise network from edge to cloud?" />
    </div>
  )
}

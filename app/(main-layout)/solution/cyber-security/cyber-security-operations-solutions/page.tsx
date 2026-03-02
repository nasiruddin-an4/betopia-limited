import React from 'react'
import Hero from './Hero'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout'  
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA'
import { WhyBetopiaContent } from "@/types/solution";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cyber Security Operations & SOC Solutions | SIEM, SOAR & XDR | Betopia Limited",

  description:
    "Advanced cyber security operations and SOC solutions delivering continuous monitoring, SIEM, SOAR, XDR, AI-driven threat detection, and rapid incident response across enterprise environments by Betopia Limited.",

  keywords: [
    "cyber security operations solutions",
    "SOC services enterprise",
    "SIEM SOAR XDR solutions",
    "security operations center services",
    "AI SOC solutions",
    "threat detection and response services",
    "attack surface management ASM",
    "digital risk management",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/cyber-security/cyber-security-operations-solutions",
  },

  openGraph: {
    title:
      "Cyber Security Operations & SOC Solutions | SIEM, SOAR & XDR | Betopia Limited",
    description:
      "Advanced cyber security operations and SOC solutions delivering continuous monitoring, SIEM, SOAR, XDR, AI-driven threat detection, and rapid incident response across enterprise environments by Betopia Limited.",
    url: "https://betopialimited.com/solution/cyber-security/cyber-security-operations-solutions",
    siteName: "Betopia Limited",
    type: "website",
  },
};
export const digitalAppInnovationwhyBetopiaContent: WhyBetopiaContent = {
  heading: "Why",
  highlight: "Betopia",
  image: "/home_square_why_betopia.jpg",

  items: [
    {
      title: "Enterprise SOC Design & Cyber Defense Expertise",
      description:
        "Deep expertise in AI, cloud, and security convergence",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 12L11 14L15 10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Integrated SIEM, SOAR, XDR & AI Security Stack",
      description: "Coverage across AI models, data, infrastructure, and governance",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 18V5" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.598 6.50013C17.8281 6.10162 17.9635 5.65551 17.9936 5.19633C18.0237 4.73714 17.9478 4.27718 17.7717 3.85203C17.5956 3.42687 17.324 3.04793 16.9781 2.74451C16.6321 2.44109 16.221 2.22133 15.7765 2.10223C15.332 1.98312 14.866 1.96787 14.4147 2.05765C13.9634 2.14743 13.5387 2.33983 13.1737 2.61998C12.8086 2.90012 12.5129 3.2605 12.3093 3.67322C12.1058 4.08595 12 4.53996 12 5.00013C12 4.53996 11.8942 4.08595 11.6907 3.67322C11.4871 3.2605 11.1914 2.90012 10.8263 2.61998C10.4613 2.33983 10.0366 2.14743 9.5853 2.05765C9.13396 1.96787 8.66803 1.98312 8.22353 2.10223C7.77904 2.22133 7.3679 2.44109 7.02193 2.74451C6.67596 3.04793 6.40442 3.42687 6.22833 3.85203C6.05224 4.27718 5.97632 4.73714 6.00643 5.19633C6.03655 5.65551 6.17189 6.10162 6.402 6.50013" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.9971 5.125C18.5849 5.27614 19.1306 5.55905 19.5928 5.95231C20.0551 6.34557 20.4218 6.83887 20.6652 7.39485C20.9086 7.95082 21.0223 8.55489 20.9977 9.16131C20.9731 9.76773 20.8108 10.3606 20.5231 10.895" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18 17.9992C18.8805 17.9991 19.7364 17.7086 20.4349 17.1725C21.1335 16.6365 21.6356 15.8849 21.8635 15.0344C22.0914 14.1839 22.0323 13.282 21.6954 12.4685C21.3585 11.655 20.7625 10.9754 20 10.5352" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.967 17.4844C20.0371 18.0266 19.9953 18.5775 19.8441 19.1029C19.693 19.6283 19.4357 20.1172 19.0882 20.5393C18.7407 20.9614 18.3104 21.3078 17.8238 21.5571C17.3372 21.8064 16.8046 21.9533 16.259 21.9887C15.7134 22.0241 15.1664 21.9473 14.6516 21.763C14.1369 21.5787 13.6654 21.2908 13.2662 20.9171C12.8671 20.5435 12.5488 20.0919 12.331 19.5904C12.1132 19.0889 12.0006 18.5481 12 18.0014C11.9994 18.5481 11.8867 19.0889 11.669 19.5904C11.4512 20.0919 11.1329 20.5435 10.7338 20.9171C10.3346 21.2908 9.86313 21.5787 9.34838 21.763C8.83364 21.9473 8.28657 22.0241 7.74097 21.9887C7.19537 21.9533 6.66283 21.8064 6.17622 21.5571C5.68961 21.3078 5.25927 20.9614 4.91178 20.5393C4.56429 20.1172 4.30703 19.6283 4.15589 19.1029C4.00474 18.5775 3.96291 18.0266 4.033 17.4844" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.99983 17.9992C5.11932 17.9991 4.26343 17.7086 3.56489 17.1725C2.86635 16.6365 2.3642 15.8849 2.1363 15.0344C1.90841 14.1839 1.96751 13.282 2.30444 12.4685C2.64137 11.655 3.23731 10.9754 3.99983 10.5352" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.00293 5.125C5.41513 5.27614 4.86943 5.55905 4.40716 5.95231C3.94489 6.34557 3.57817 6.83887 3.33477 7.39485C3.09138 7.95082 2.97769 8.55489 3.00232 9.16131C3.02695 9.76773 3.18925 10.3606 3.47693 10.895" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "24×7 Security Monitoring Operations",
      description:
        "Secure-by-design AI architectures aligned with enterprise and regulatory requirements",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5 3L2 6" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22 6L19 3" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.38 18.6992L4 20.9992" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.6396 18.6719L19.9996 21.0019" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 13L11 15L15 11" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Continuous Improvement Against Evolving Threats",
      description:
        "Proven experience supporting enterprise, industrial, and cloud-scale AI adoption",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.516 3.00947 16.931 3.99122 18.74 5.74L21 8" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 3V8H16" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.48395 20.9905 7.06897 20.0088 5.26 18.26L3 16" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 16H3V21" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "Security Information & Event Management (SIEM) Solutions",
    description:
      "We centralize and correlate security data to improve threat visibility.",
    image: "/solution/cyber-security/cyber-security-operations-solutions/1.png",
    points: [
      "Centralized log collection and correlation across environments",
      "Real-time threat detection and alerting",
      "Compliance reporting and audit readiness",
    ],
  },
  {
    title: "Security Orchestration, Automation & Response (SOAR) Solutions",
    description:
      "We automate security operations to reduce response time and analyst workload.",
    image: "/solution/cyber-security/cyber-security-operations-solutions/2.png",
    points: [
      "Automated incident response workflows",
      "Playbook-driven remediation and containment actions",
      "Reduced Mean Time to Respond (MTTR)",
    ],
  },
  {
    title: "Extended Detection & Response (XDR) Solutions",
    description:
      "We provide unified detection and response across the security stack.",
    image: "/solution/cyber-security/cyber-security-operations-solutions/3.png",
    points: [
      "Unified threat detection across endpoints, network, and cloud",
      "Advanced analytics and event correlation",
      "Faster investigation and threat containment",
    ],
  }, 
  {
    title: "Continuous Threat Exposure Management (CTEM) Solutions",
    description:
      "We continuously assess and reduce enterprise security exposure.",
    image: "/solution/cyber-security/cyber-security-operations-solutions/4.png",
    points: [
      "Continuous attack surface and exposure assessment",
      "Risk-based vulnerability prioritization",
      "Proactive reduction of exploitable weaknesses",
    ],
  },
  {
    title: "Breach & Attack Simulation (BAS) Solutions",
    description:
      "We validate security effectiveness through real-world attack simulations.",
    image: "/solution/cyber-security/cyber-security-operations-solutions/5.png",
    points: [
      "Adversary emulation and control validation",
      "Security readiness and resilience testing",
      "Identification of gaps in defensive controls",
    ],
  }, 
  {
    title: "Attack Surface Management (ASM) Solutions",
    description:
      "We discover and monitor all exposed enterprise assets.",
    image: "/solution/cyber-security/cyber-security-operations-solutions/6.png",
    points: [
      "External and internal asset discovery",
      "Exposure and misconfiguration monitoring",
      "Risk scoring and prioritization",
    ],
  },
  {
    title: "Digital Risk Management Solutions",
    description:
      "We protect organizations from external digital threats",
    image: "/solution/cyber-security/cyber-security-operations-solutions/7.png",
    points: [
      "Brand, domain, and threat intelligence monitoring",
      "Visibility into third-party and supply-chain risks",
      "Fraud, impersonation, and abuse detection",
    ],
  }, 
  {
    title: "AI SOC Solutions",
    description:
      "We enhance SOC operations using artificial intelligence.",
    image: "/solution/cyber-security/cyber-security-operations-solutions/8.png",
    points: [
      "AI-driven threat detection and event triage",
      "Automated alert prioritization",
      "24×7 SOC monitoring and operations support",
    ],
  },  
];

export default function page() {
  return (
    <div>
        <Hero/>
        <SolutionAbout
        badgeText="What We Do"
        title={
          <>
     Cyber Security Operations Solutions
          </>
        }
        description="We design and operate modern Security Operations Center (SOC) capabilities that help enterprises detect threats early, respond faster, and continuously improve their security posture using intelligence, automation, and AI-driven operations."
        imageSrc="/solution/cyber-security/data-security-solutions/Data Security Solutions.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just monitor alerts — we operate intelligent security operations that detect threats early, respond rapidly, and continuously strengthen cyber defenses.”" />
            <CTA title="Ready to modernize your cyber security operations and SOC capabilities?" />
    </div>
  )
}
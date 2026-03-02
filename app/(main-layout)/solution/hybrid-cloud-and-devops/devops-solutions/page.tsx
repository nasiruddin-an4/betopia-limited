import React from 'react'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout'  
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA' 
import Hero from './Hero'
import { WhyBetopiaContent } from "@/types/solution";
// import { Metadata } from 'next' 

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


 
export const digitalAppInnovationwhyBetopiaContent: WhyBetopiaContent = {
  heading: "Why",
  highlight: "Betopia",
  image: "/home_square_why_betopia.jpg",

  items: [
    {
      title: "End-to-End DevOps Expertise",
      description:
        "Years of experience delivering complete DevOps lifecycles, from development to deployment.",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 3V8H8" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.516 20.9905 16.931 20.0088 18.74 18.26L21 16" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 16H21V21" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Vendor-Neutral & Tool-Agnostic",
      description: "Flexible solutions that work with any tech stack or vendor.",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 13.0039C10.4295 13.578 10.9774 14.0531 11.6066 14.3968C12.2357 14.7406 12.9315 14.945 13.6467 14.9962C14.3618 15.0474 15.0796 14.9442 15.7513 14.6937C16.4231 14.4431 17.0331 14.0509 17.54 13.5439L20.54 10.5439C21.4508 9.60086 21.9548 8.33785 21.9434 7.02687C21.932 5.71588 21.4061 4.46182 20.4791 3.53478C19.5521 2.60774 18.298 2.08189 16.987 2.0705C15.676 2.05911 14.413 2.56308 13.47 3.47387L11.75 5.18387" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.9982 10.9973C13.5688 10.4232 13.0209 9.94811 12.3917 9.60436C11.7625 9.2606 11.0667 9.05618 10.3516 9.00496C9.63645 8.95374 8.91866 9.05693 8.2469 9.30751C7.57514 9.5581 6.96513 9.95023 6.45825 10.4573L3.45825 13.4573C2.54746 14.4003 2.04348 15.6633 2.05488 16.9743C2.06627 18.2853 2.59211 19.5393 3.51915 20.4664C4.44619 21.3934 5.70026 21.9193 7.01124 21.9307C8.32222 21.9421 9.58524 21.4381 10.5282 20.5273L12.2382 18.8173" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Security-First DevOps Design",
      description:
        "Security integrated into every stage of the DevOps process.",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 12L11 14L15 10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Scalable & Future-Ready Architectures",
      description:
        "Systems built to grow and adapt with your business.",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17.4982 19H8.99821C7.70007 18.9997 6.4276 18.6384 5.32298 17.9565C4.21837 17.2746 3.32513 16.2989 2.74308 15.1386C2.16103 13.9783 1.9131 12.679 2.027 11.3858C2.1409 10.0927 2.61214 8.85671 3.38805 7.81598C4.16397 6.77526 5.214 5.97079 6.42081 5.49249C7.62761 5.01418 8.94365 4.88087 10.2219 5.10747C11.5001 5.33406 12.6901 5.91162 13.6589 6.77561C14.6278 7.6396 15.3373 8.75598 15.7082 10H17.4982C18.6917 10 19.8363 10.4741 20.6802 11.318C21.5241 12.1619 21.9982 13.3065 21.9982 14.5C21.9982 15.6935 21.5241 16.8381 20.6802 17.682C19.8363 18.5259 18.6917 19 17.4982 19Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "CI/CD (Continuous Integration & Continuous Deployment) Solutions",
    description:
      "Streamline CI/CD workflows for consistent, secure, and error-free application delivery at scale.",
    image: "/solution/hybrid/devops/e4.png",
    points: [
      "Faster time‑to‑market",
      "Improved code quality and consistency",
      "Reduced manual intervention and deployment risks",
    ],
  },
  {
    title: "Infrastructure as Code (IaC) Solutions",
    description:
      "Provision and manage infrastructure through code for standardized, version-controlled, and rapidly deployable environments eliminating configuration drift.",
    image: "/solution/hybrid/devops/4.png",
    points: [
      "Consistent environments",
      "Faster provisioning and recovery",
      "Improved governance and auditability",
    ],
  },
  {
    title: "Configuration Management Solutions",
    description:
      "Automate configuration and patch management to ensure system consistency, compliance, and stable environments with reduced operational overhead.",
    image: "/solution/hybrid/devops/2.png",
    points: [
      " Standardized system configurations",
      "Reduced operational errors",
      "Enhanced compliance readiness",
    ],
  }, 
  {
    title: "Containerization & Orchestration Solutions",
    description:
      "Modernize applications with containers and orchestration for scalable, portable, and highly available systems.",
    image: "/solution/hybrid/devops/3.png",
    points: [
      "Cloud‑ready and portable applications",
      "Scalable microservices architectures",
      "Faster deployments and rollbacks",
    ],
  },
  {
    title: "Cloud DevOps Solutions",
    description:
      "Enable DevOps practices optimized for cloud and hybrid environments. We help organizations leverage cloud‑native automation, scalability, and cost optimization.",
    image: "/solution/hybrid/devops/e5.png",
    points: [
      "Cloud‑native CI/CD pipelines",
      "Optimized resource utilization",
      "Secure and scalable operations",
    ],
  }, 
  {
    title: "Monitoring, Logging & Observability Solutions",
    description:
      "Gain end‑to‑end visibility into applications and infrastructure. Our observability solutions help proactively detect issues and reduce downtime.",
    image: "/solution/hybrid/devops/e6.png",
    points: [
      "Real‑time system visibility",
      "Faster root‑cause analysis",
      "Improved uptime and reliability",
    ],
  },
  {
    title: "DevSecOps & Security Automation",
    description:
      "Embed security throughout the DevOps lifecycle with automated security checks, vulnerability scanning, and compliance enforcement.",
    image: "/solution/hybrid/devops/e7.png",
    points: [
      "Shift‑left security practices",
      "Reduced security risks",
      "Improved compliance and governance",
    ],
  }, 
  {
    title: "Release & Deployment Management Solutions",
    description:
      "Plan, control, and manage application releases with structured governance and automation to minimize deployment risks.",
    image: "/solution/hybrid/devops/e88.png",
    points: [
      "Predictable and controlled releases",
      "Rollback readiness",
      "Reduced service disruption",
    ],
  },
  {
    title: "Collaboration & Agile DevOps Solutions",
    description:
      "Enable seamless collaboration between development, operations, and business teams using agile workflows and DevOps best practices.",
    image: "/solution/hybrid/devops/e9.png",
    points: [
      "Improved team alignment",
      "Faster feedback loops",
      "Increased productivity",
    ],
  }, 
  {
    title: "Backup, DR & Resilience Solutions",
    description:
      "Design resilient DevOps environments with integrated backup and disaster recovery strategies to ensure business continuity.",
    image: "/solution/hybrid/devops/e10.png",
    points: [
      "Rapid recovery from failures",
      "Reduced downtime",
      "High availability architectures",
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
         DevOps Solutions
          </>
        }
        description="In today’s fast-paced digital economy, organizations must deliver software faster without compromising security, quality, or stability. Our DevOps Solutions & Services help enterprises modernize application delivery by automating processes, improving collaboration, and embedding security across the entire software lifecycle. We enable organizations to build, deploy, secure, and operate applications with speed, confidence, and resilience across cloud, hybrid, and on‑premises environments."
        imageSrc="/solution/hybrid/devops/1.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just deploy infrastructure — we engineer data center foundations that deliver high availability, operational efficiency, and the flexibility to evolve with your business.”" />
            <CTA title="Ready to transform your software delivery with DevOps?" />
    </div>
  )
}

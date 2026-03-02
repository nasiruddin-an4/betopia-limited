import React from 'react'
import Hero from './Hero'
import SolutionAbout from '@/components/pages/solution/common/SolutionAbout'  
import HighlyEffective from '@/components/pages/solution/common/HighlyEffective'
import WhyBetopia from '@/components/pages/solution/common/WhyBetopia'
import ClientValueStory from '@/components/pages/solution/common/ClientValueStory'
import CTA from '@/components/pages/solution/common/CTA'
import { WhyBetopiaContent } from "@/types/solution";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    "Application Security Solutions for Enterprises | DevSecOps & API Security | Betopia Limited",

  description:
    "End-to-end application security solutions including SAST, DAST, SCA, RASP, API security, and CNAPP to protect applications from code to runtime across cloud and enterprise environments by Betopia Limited.",

  keywords: [
    "application security solutions",
    "enterprise application security",
    "SAST DAST SCA services",
    "API security solutions",
    "runtime application self protection RASP",
    "cloud native application protection CNAP",
    "DevSecOps security services",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/cyber-security/application-security-solutions",
  },

  openGraph: {
    title:
      "Application Security Solutions for Enterprises | DevSecOps & API Security | Betopia Limited",
    description:
      "End-to-end application security solutions including SAST, DAST, SCA, RASP, API security, and CNAPP to protect applications from code to runtime across cloud and enterprise environments by Betopia Limited.",
    url: "https://betopialimited.com/solution/cyber-security/application-security-solutions",
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
      title: "Enterprise & Cloud-Native Application Security",
      description:
        "Deep expertise in enterprise and cloud-native application security",
      icon: (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Security-by-Design Across Application Lifecycle",
      description: "Security-by-design approach across the application lifecycle",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Protection for Web, API, and Cloud-Native Apps",
      description:
        "Experience securing web, API-driven, and cloud-native applications",
      icon: (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17.4982 19H8.99821C7.70007 18.9997 6.4276 18.6384 5.32298 17.9565C4.21837 17.2746 3.32513 16.2989 2.74308 15.1386C2.16103 13.9783 1.9131 12.679 2.027 11.3858C2.1409 10.0927 2.61214 8.85671 3.38805 7.81598C4.16397 6.77526 5.214 5.97079 6.42081 5.49249C7.62761 5.01418 8.94365 4.88087 10.2219 5.10747C11.5001 5.33406 12.6901 5.91162 13.6589 6.77561C14.6278 7.6396 15.3373 8.75598 15.7082 10H17.4982C18.6917 10 19.8363 10.4741 20.6802 11.318C21.5241 12.1619 21.9982 13.3065 21.9982 14.5C21.9982 15.6935 21.5241 16.8381 20.6802 17.682C19.8363 18.5259 18.6917 19 17.4982 19Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "DevSecOps & Modern Development Alignment",
      description:
        "Alignment with DevSecOps and modern development practices",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 12L11 14L15 10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "Static Application Security Testing (SAST)",
    description:
      "We identify vulnerabilities early in the development lifecycle by analyzing application source code.",
    image: "/solution/cyber-security/application-security-solutions/1.png",
    points: [
      "Source code vulnerability detection",
      "Early risk identification during the SDLC",
      "Developer-friendly remediation guidance",
    ],
  },
  {
    title: "Dynamic Application Security Testing (DAST)",
    description:
      "We test applications in runtime to uncover real-world security weaknesses.",
    image: "/solution/cyber-security/application-security-solutions/2.png",
    points: [
      "Runtime vulnerability testing of live applications",
      "Black-box security assessments",
      "Web application risk discovery",
    ],
  },
  {
    title: "Software Composition Analysis (SCA)",
    description:
      "We secure open-source components and application dependencies.",
    image: "/solution/cyber-security/application-security-solutions/3.png",
    points: [
      "Open-source dependency discovery and scanning",
      "License and vulnerability management",
      "Supply-chain risk reduction",
    ],
  },
    {
    title: "Runtime Application Self-Protection (RASP)",
    description:
      "We provide real-time protection from within the application itself.",
    image: "/solution/cyber-security/application-security-solutions/4.png",
    points: [
      "In-application attack detection",
      "Real-time threat blocking",
      "Low false positives with contextual awareness",
    ],
  }, 
    {
    title: "API Security Solutions",
    description:
      "We secure open-source components and application dependencies.",
    image: "/solution/cyber-security/application-security-solutions/5.png",
    points: [
      "Open-source dependency discovery and scanning",
      "License and vulnerability management",
      "Supply-chain risk reduction",
    ],
  }, 
    {
    title: "Cloud-Native Application Protection Platforms (CNAPP)",
    description:
      "We deliver unified security for cloud-native applications and workloads.",
    image: "/solution/cyber-security/application-security-solutions/6.png",
    points: [
      "End-to-end cloud workload protection",
      "Coverage across CSPM, CWPP, and CIEM",
      "Risk prioritization and contextual visibility",
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
         Application Security <br /> Solutions
          </>
        }
        description="We design and implement comprehensive application security architectures that embed security into every stage of the application lifecycle, helping organizations prevent vulnerabilities, secure APIs, and protect applications in production environments."
        imageSrc="/solution/cyber-security/data-security-solutions/Data Security Solutions.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="We don’t just scan applications — we embed security into the development and runtime environments to protect applications without slowing innovation.”" />
            <CTA title="Ready to secure your applications from development to production?" />
    </div>
  )
}
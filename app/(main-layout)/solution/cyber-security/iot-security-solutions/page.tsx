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
    "IoT Security Solutions for Enterprises | IT, OT & IIoT Protection | Betopia Limited",

  description:
    "Comprehensive IoT security solutions protecting connected devices, networks, data, cloud platforms, and industrial systems with Zero Trust, threat detection, and resilience by Betopia Limited.",

  keywords: [
    "IoT security solutions",
    "enterprise IoT security",
    "industrial IoT security IIoT",
    "OT security solutions",
    "IoT device and network security",
    "IoT threat detection and response",
    "Zero Trust IoT security",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/cyber-security/iot-security-solutions",
  },

  openGraph: {
    title:
      "IoT Security Solutions for Enterprises | IT, OT & IIoT Protection | Betopia Limited",
    description:
      "Comprehensive IoT security solutions protecting connected devices, networks, data, cloud platforms, and industrial systems with Zero Trust, threat detection, and resilience by Betopia Limited.",
    url: "https://betopialimited.com/solution/cyber-security/iot-security-solutions",
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
      title: "Enterprise, Cloud & Industrial IoT Security",
      description:
        "Proven expertise in enterprise, cloud, and industrial IoT security",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Coverage Across IT, OT & IIoT Environments",
      description: "Coverage across IT, OT, and IIoT environments",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Zero Trust–Aligned IoT Security Architecture",
      description:
        "Zero Trust–aligned IoT security architecture",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 12L11 14L15 10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Securing Large-Scale Mission-Critical IoT Deployments",
      description:
        "Experience securing large-scale, mission-critical IoT deployments",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.9982 11.0012C13.5688 10.4271 13.0209 9.95202 12.3917 9.60826C11.7625 9.2645 11.0667 9.06009 10.3516 9.00887C9.63645 8.95765 8.91866 9.06083 8.2469 9.31142C7.57514 9.56201 6.96513 9.95413 6.45825 10.4612L3.45825 13.4612C2.54746 14.4042 2.04348 15.6672 2.05488 16.9782C2.06627 18.2892 2.59211 19.5433 3.51915 20.4703C4.44619 21.3973 5.70026 21.9232 7.01124 21.9346C8.32222 21.946 9.58524 21.442 10.5282 20.5312L12.2382 18.8212" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "IoT Device Security",
    description:
      "We secure connected devices throughout their entire lifecycle.",
    image: "/solution/cyber-security/iot-security-solutions/1.png",
    points: [
      "Automated device discovery and profiling",
      "Firmware protection and secure lifecycle management",
      "Threat prevention for compromised or rogue devices",
    ],
  },
  {
    title: "IoT Network Security",
    description:
      "We protect IoT communications and prevent lateral movement.",
    image: "/solution/cyber-security/iot-security-solutions/2.png",
    points: [
      "Network segmentation and continuous traffic monitoring",
      "Anomaly detection for abnormal device behavior",
      "Protocol-aware inspection for IoT communications",
    ],
  },
  {
    title: "IoT Identity & Access Security",
    description:
      "We ensure only trusted devices and users can access IoT systems.",
    image: "/solution/cyber-security/iot-security-solutions/3.png",
    points: [
      "Device identity management and authentication",
      "Secure authorization and access enforcement",
      "Least-privilege access control",
    ],
  }, 
  {
    title: "IoT Data Security",
    description:
      "We protect data generated and transmitted by IoT systems.",
    image: "/solution/cyber-security/iot-security-solutions/4.png",
    points: [
      "Encryption and data integrity enforcement",
      "Secure data transmission across networks",
      "Privacy protection for sensitive IoT data",
    ],
  },
  {
    title: "IoT Cloud Security",
    description:
      "We ensure only trusted devices and users can access IoT systems.",
    image: "/solution/cyber-security/iot-security-solutions/5.png",
    points: [
      "Device identity management and authentication",
      "Secure authorization and access enforcement",
      "Least-privilege access control",
    ],
  }, 
  {
    title: "IoT Application Security",
    description:
      "We secure applications that manage and process IoT data.",
    image: "/solution/cyber-security/iot-security-solutions/6.png",
    points: [
      "Application-layer protection for IoT systems",
      "Vulnerability identification and remediation",
      "Secure APIs for IoT communication",
    ],
  },
  {
    title: "OT / IIoT Security (Industrial IoT)",
    description:
      "We ensure only trusted devices and users can access IoT systems.",
    image: "/solution/cyber-security/iot-security-solutions/7.png",
    points: [
      "Behavioral analytics for connected devices",
      "Proactive threat hunting",
      "Automated response and containment",
    ],
  }, 
  {
    title: "IoT Risk & Compliance",
    description:
      "We help organizations manage IoT risk and regulatory requirements.",
    image: "/solution/cyber-security/iot-security-solutions/8.png",
    points: [
      "IoT risk assessment and reporting",
      "Alignment with industry standards and frameworks",
      "Continuous compliance monitoring",
    ],
  },
  {
    title: "IoT Security Operations (IoT-SOC)",
    description:
      "We provide centralized monitoring and response for IoT environments.",
    image: "/solution/cyber-security/iot-security-solutions/9.png",
    points: [
      "Centralized security monitoring for IoT assets",
      "Incident detection, investigation, and response",
      "24×7 visibility into IoT security posture",
    ],
  }, 
  {
    title: "IoT Threat Detection & Response",
    description:
      "We detect and respond to IoT-specific threats in real time.",
    image: "/solution/cyber-security/iot-security-solutions/10.png",
    points: [
      "Behavioral analytics for connected devices",
      "Proactive threat hunting",
      "Automated response and containment",
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
     IoT Security Solutions
          </>
        }
        description="We design and implement end-to-end IoT security architectures that protect connected devices, industrial systems, and IoT platforms from emerging cyber threats—while maintaining operational continuity and compliance."
        imageSrc="/solution/cyber-security/data-security-solutions/11.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just secure devices — we protect the entire IoT ecosystem, ensuring visibility, control, and resilience without disrupting operations.”" />
            <CTA title="Ready to secure your IoT and industrial environments?" />
    </div>
  )
}
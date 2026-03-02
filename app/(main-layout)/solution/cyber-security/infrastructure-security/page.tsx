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
    "Infrastructure Security Solutions for Enterprises | Cloud & Workload Security | Betopia Limited",

  description:
    "Comprehensive infrastructure security solutions protecting virtualized, containerized, server, and cloud environments with Zero Trust, resilience, and continuous threat prevention by Betopia Limited.",

  keywords: [
    "infrastructure security solutions",
    "enterprise infrastructure security",
    "cloud infrastructure security",
    "container and Kubernetes security",
    "virtual machine security",
    "CSPM services",
    "ransomware protection solutions",
    "Zero Trust infrastructure security",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/cyber-security/infrastructure-security",
  },

  openGraph: {
    title:
      "Infrastructure Security Solutions for Enterprises | Cloud & Workload Security | Betopia Limited",
    description:
      "Comprehensive infrastructure security solutions protecting virtualized, containerized, server, and cloud environments with Zero Trust, resilience, and continuous threat prevention by Betopia Limited.",
    url: "https://betopialimited.com/solution/cyber-security/infrastructure-security",
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
      title: "Enterprise Infrastructure & Cloud Security Expertise",
      description:
        "Proven expertise in enterprise infrastructure and cloud security",
      icon: (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Secure-by-Design & Compliance-Driven Architecture",
      description: "Secure-by-design architectures aligned with Zero Trust and ISO 27001 standards",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 9V10.258" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 3V8.46" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 9.118V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H10.75" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22 17.4991C22 19.9981 20.25 21.2481 18.17 21.9731C18.0611 22.01 17.9428 22.0082 17.835 21.9681C15.75 21.2481 14 19.9981 14 17.4981V13.9991C14.0003 13.8666 14.0531 13.7397 14.1468 13.6462C14.2405 13.5526 14.3676 13.5001 14.5 13.5001C15.5 13.5001 16.75 12.9001 17.62 12.1401C17.7271 12.0522 17.8613 12.0041 17.9998 12.0039C18.1384 12.0037 18.2727 12.0515 18.38 12.1391C19.255 12.9041 20.5 13.4991 21.5 13.4991C21.6326 13.4991 21.7598 13.5518 21.8536 13.6455C21.9473 13.7393 22 13.8665 22 13.9991V17.4991Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 15H10" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 9H15.142" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 15V21" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 3V9" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Protection for Virtualized & Cloud-Native Environments",
      description:
        "Experience securing virtualized, containerized, and cloud-native workloads",
      icon: (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17 15L11.5 20.5L9 18" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.99832 17.7434C4.08122 17.1044 3.33046 16.2551 2.80887 15.2665C2.28728 14.2779 2.01001 13.1788 2.00027 12.061C1.99052 10.9433 2.24858 9.83951 2.75285 8.84197C3.25713 7.84442 3.99296 6.98214 4.89878 6.32726C5.80461 5.67238 6.85409 5.24393 7.95943 5.07778C9.06477 4.91162 10.1938 5.01257 11.2522 5.3722C12.3105 5.73182 13.2673 6.33966 14.0426 7.14486C14.8178 7.95006 15.389 8.92921 15.7083 10.0004H17.4983C18.5595 10.0008 19.5864 10.3763 20.3977 11.0604C21.2089 11.7446 21.7522 12.6935 21.9317 13.7394C22.1112 14.7853 21.9152 15.861 21.3785 16.7765C20.8417 17.6919 19.9987 18.3882 18.9983 18.7424" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Proactive, Resilient Security Strategy",
      description:
        "Proactive security approach focused on prevention, detection, and resilience",
      icon: (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.0683 4.92883C17.5112 3.37004 15.4828 2.36914 13.2984 2.08162C11.114 1.7941 8.89572 2.23606 6.98828 3.33883" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 6H4.01" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.2884 9.62156C1.91349 11.1486 1.90398 12.7426 2.26062 14.274C2.61727 15.8054 3.33003 17.2312 4.34103 18.4355C5.35203 19.6398 6.63278 20.5887 8.0793 21.2052C9.52581 21.8217 11.0973 22.0884 12.6662 21.9836C14.2352 21.8789 15.7573 21.4056 17.109 20.6023C18.4607 19.7989 19.6039 18.6882 20.4458 17.3601C21.2877 16.0321 21.8046 14.5243 21.9545 12.959C22.1043 11.3938 21.883 9.81522 21.3084 8.35156" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.2393 7.76187C15.6638 7.18304 14.9763 6.72771 14.2188 6.42374C13.4612 6.11978 12.6496 5.97358 11.8337 5.99408C11.0177 6.01458 10.2145 6.20136 9.47318 6.54298C8.73187 6.8846 8.06806 7.37388 7.52237 7.98089C6.97668 8.5879 6.56057 9.29986 6.29952 10.0732C6.03847 10.8466 5.93795 11.6651 6.00413 12.4786C6.0703 13.2922 6.30177 14.0837 6.68438 14.8047C7.06699 15.5257 7.59269 16.161 8.22931 16.6719" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 18H12.01" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.9895 11.6602C18.0439 12.6115 17.8709 13.5622 17.4849 14.4334C17.0988 15.3046 16.5108 16.0714 15.7695 16.6702" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.4102 10.5897L19.0702 4.92969" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "Virtual Infrastructure Security (VM Security)",
    description:
      "We secure virtualized environments against internal and external threats.",
    image: "/solution/cyber-security/infrastructure-security/1.png",
    points: [
      "Protection for virtual machines and hypervisors",
      "East–west traffic inspection and visibility",
      "Policy-based workload isolation",
    ],
  },
  {
    title: "Container & Kubernetes Security",
    description:
      "We protect containerized workloads across the full application lifecycle.",
    image: "/solution/cyber-security/infrastructure-security/2.png",
    points: [
      "Container image scanning and runtime protection",
      "Kubernetes posture management and policy enforcement",
      "Cluster visibility and threat detection",
    ],
  },
  {
    title: "Server & Operating System Security",
    description:
      "We harden and protect enterprise server environments.",
    image: "/solution/cyber-security/infrastructure-security/3.png",
    points: [
      "Operating system hardening and patch management",
      "Endpoint protection and behavioral monitoring",
      "Privilege escalation and process control",
    ],
  },
    {
    title: "Cloud Infrastructure Security",
    description:
      "We secure cloud environments with continuous posture management and governance.",
    image: "/solution/cyber-security/infrastructure-security/4.png",
    points: [
      "Cloud Security Posture Management (CSPM)",
      "Misconfiguration detection and risk assessment",
      "Multi-cloud visibility and governance",
    ],
  },
    {
    title: "Backup, Resilience & Ransomware Protection",
    description:
      "We ensure infrastructure resilience against ransomware and system failures.",
    image: "/solution/cyber-security/infrastructure-security/5.png",
    points: [
      "Immutable and secure backup architecture",
      "Ransomware detection and rapid recovery",
      "Business continuity enablement",
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
          Infrastructure Security <br /> Solutions
          </>
        }
        description="We design and implement end-to-end infrastructure security architectures that protect enterprise workloads across data centers, cloud platforms, and hybrid environments—ensuring visibility, control, and resilience"
        imageSrc="/solution/cyber-security/infrastructure-security/6.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just secure infrastructure components — we protect the foundation your business runs on, ensuring resilience, visibility, and security without compromising performance.”" />
            <CTA title="Ready to strengthen your infrastructure security posture?" />
    </div>
  )
}
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
    "Data Security Solutions for Enterprises | DLP, Encryption & Governance | Betopia Limited",

  description:
    "End-to-end enterprise data security solutions including data discovery, DLP, encryption, database security, governance, and ransomware protection across cloud, hybrid, and on-prem environments by Betopia Limited.",

  keywords: [
    "data security solutions",
    "enterprise data security",
    "data loss prevention DLP",
    "data encryption and key management",
    "database security services",
    "data governance solutions",
    "DSPM services",
    "ransomware protection for data",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/cyber-security/data-security-solutions",
  },

  openGraph: {
    title:
      "Data Security Solutions for Enterprises | DLP, Encryption & Governance | Betopia Limited",
    description:
      "End-to-end enterprise data security solutions including data discovery, DLP, encryption, database security, governance, and ransomware protection across cloud, hybrid, and on-prem environments by Betopia Limited.",
    url: "https://betopialimited.com/solution/cyber-security/data-security-solutions",
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
      title: "Expertise in Data Protection & Governance",
      description:
        "Deep expertise in enterprise data protection and governance",
      icon: (
   <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M31.4129 30.7266C30.8568 33.3564 29.5806 35.78 27.7269 37.7266C25.1591 35.0304 23.7269 31.4498 23.7269 27.7266C23.7269 24.0033 25.1591 20.4227 27.7269 17.7266C25.8788 17.727 24.0669 18.2397 22.4925 19.2075C20.9181 20.1754 19.6426 21.5607 18.8078 23.2095C17.973 24.8583 17.6115 26.7063 17.7633 28.5482C17.9151 30.39 18.5744 32.1538 19.668 33.6437C20.7616 35.1336 22.2466 36.2912 23.9583 36.9882C25.67 37.6852 27.5413 37.8942 29.3646 37.592C31.1878 37.2898 32.8917 36.4883 34.287 35.2764C35.6823 34.0644 36.7144 32.4896 37.2689 30.7266" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7256 27.7266H26.2256" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35.7256 21.7266V19.7266C35.7256 19.1961 35.5149 18.6874 35.1398 18.3123C34.7647 17.9373 34.256 17.7266 33.7256 17.7266C33.1952 17.7266 32.6864 17.9373 32.3114 18.3123C31.9363 18.6874 31.7256 19.1961 31.7256 19.7266V21.7266" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.7256 21.7266H30.7256C30.1733 21.7266 29.7256 22.1743 29.7256 22.7266V25.7266C29.7256 26.2788 30.1733 26.7266 30.7256 26.7266H36.7256C37.2779 26.7266 37.7256 26.2788 37.7256 25.7266V22.7266C37.7256 22.1743 37.2779 21.7266 36.7256 21.7266Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      title: "Comprehensive Multi-Environment Coverage",
      description: "Coverage across databases, cloud, big data, and hybrid environments",
      icon: (
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M33.2238 34.7266H24.7238C23.4257 34.7262 22.1532 34.3649 21.0486 33.683C19.944 33.0011 19.0507 32.0255 18.4687 30.8652C17.8866 29.7048 17.6387 28.4055 17.7526 27.1124C17.8665 25.8193 18.3377 24.5833 19.1136 23.5425C19.8896 22.5018 20.9396 21.6974 22.1464 21.219C23.3532 20.7407 24.6692 20.6074 25.9474 20.834C27.2257 21.0606 28.4157 21.6382 29.3845 22.5022C30.3534 23.3662 31.0629 24.4825 31.4338 25.7266H33.2238C34.4173 25.7266 35.5619 26.2007 36.4058 27.0446C37.2497 27.8885 37.7238 29.0331 37.7238 30.2266C37.7238 31.42 37.2497 32.5646 36.4058 33.4085C35.5619 34.2525 34.4173 34.7266 33.2238 34.7266Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      title: "ISO 27001 Compliant Secure-by-Design",
      description:
        "Secure-by-design data security aligned with ISO 27001 and compliance frameworks",
      icon: (
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M35.7256 28.727C35.7256 33.727 32.2256 36.227 28.0656 37.677C27.8477 37.7508 27.6111 37.7473 27.3956 37.667C23.2256 36.227 19.7256 33.727 19.7256 28.727V21.727C19.7256 21.4618 19.8309 21.2074 20.0185 21.0199C20.206 20.8324 20.4604 20.727 20.7256 20.727C22.7256 20.727 25.2256 19.527 26.9656 18.007C27.1774 17.826 27.4469 17.7266 27.7256 17.7266C28.0042 17.7266 28.2737 17.826 28.4856 18.007C30.2356 19.537 32.7256 20.727 34.7256 20.727C34.9908 20.727 35.2452 20.8324 35.4327 21.0199C35.6202 21.2074 35.7256 21.4618 35.7256 21.727V28.727Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.7256 27.7266L26.7256 29.7266L30.7256 25.7266" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      title: "Trusted Protection for Sensitive Data",
      description:
        "Proven experience protecting sensitive and regulated data",
      icon: (
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M26.3756 37.7266H33.7256C34.256 37.7266 34.7647 37.5159 35.1398 37.1408C35.5149 36.7657 35.7256 36.257 35.7256 35.7266V23.7266C35.7264 23.4097 35.6644 23.0958 35.5432 22.803C35.422 22.5102 35.2441 22.2442 35.0196 22.0206L31.4316 18.4326C31.2079 18.2081 30.942 18.0301 30.6492 17.909C30.3564 17.7878 30.0425 17.7258 29.7256 17.7266H21.7256C21.1952 17.7266 20.6864 17.9373 20.3114 18.3124C19.9363 18.6874 19.7256 19.1961 19.7256 19.7266V29.8266" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.7256 17.7266V22.7266C29.7256 22.9918 29.8309 23.2461 30.0185 23.4337C30.206 23.6212 30.4604 23.7266 30.7256 23.7266H35.7256" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.7256 30.7266L26.7256 31.7266" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.7255 29.7266L22.1395 34.3126" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.7256 37.7266C21.8302 37.7266 22.7256 36.8311 22.7256 35.7266C22.7256 34.622 21.8302 33.7266 20.7256 33.7266C19.621 33.7266 18.7256 34.622 18.7256 35.7266C18.7256 36.8311 19.621 37.7266 20.7256 37.7266Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "Data Classification & Data Discovery",
    description:
      "We help organizations gain full visibility into sensitive data across environments.",
    image: "/solution/cyber-security/data-security-solutions/1.png",
    points: [
      "Sensitive data discovery across on-prem, cloud, and hybrid systems",
      "Automated data classification and tagging",
      "Enterprise data visibility and inventory creation",
    ],
  },
  {
    title: "Data Loss Prevention (DLP) Solutions",
    description:
      "We prevent unauthorized data movement and leakage.",
    image: "/solution/cyber-security/data-security-solutions/2.png",
    points: [
      "Policy-based data movement and usage control",
      "Endpoint, network, and cloud DLP coverage",
      "Insider threat and accidental data exposure reduction",
    ],
  },
  {
    title: "Data Encryption & Key Management",
    description:
      "We secure data with strong cryptographic controls.",
    image: "/solution/cyber-security/data-security-solutions/3.png",
    points: [
      "Encryption of data at rest and in transit",
      "Centralized encryption key lifecycle management",
      "Hardware Security Module (HSM) and BYOK support",
    ],
  },
    {
    title: "Database Activity Monitoring (DAM)",
    description:
      "We provide real-time visibility into database behavior and access.",
    image: "/solution/cyber-security/data-security-solutions/4.png",
    points: [
      "Continuous monitoring of database activities",
      "Threat, anomaly, and suspicious behavior detection",
      "Audit logging and compliance reporting",
    ],
  },
    {
    title: "Data Masking & Tokenization",
    description:
      "We reduce data exposure risk while enabling safe usage.",
    image: "/solution/cyber-security/data-security-solutions/5.png",
    points: [
      "Obfuscation of sensitive data elements",
      "Protection of non-production and test environments",
      "Compliance-ready data masking strategies",
    ],
  },
    {
    title: "Database Vulnerability Assessment & Hardening",
    description:
      "We identify and remediate database security weaknesses.",
    image: "/solution/cyber-security/data-security-solutions/6.png",
    points: [
      "Configuration and patch risk assessment",
      "Database security baseline enforcement",
      "Vulnerability remediation guidance",
    ],
  },
    {
    title: "Data Governance Solutions",
    description:
      "We establish trust and control over enterprise data.",
    image: "/solution/cyber-security/data-security-solutions/7.png",
    points: [
      "Policy-driven data governance frameworks",
      "Data ownership and stewardship models",
      "Compliance and data lifecycle management",
    ],
  },
    {
    title: "Cloud-Native Database Security (DBaaS Protection)",
    description:
      "We secure managed cloud database services.",
    image: "/solution/cyber-security/data-security-solutions/8.png",
    points: [
      "Security controls for cloud-native and managed databases",
      "Threat detection for DBaaS platforms",
      "Cloud-native visibility into database activities",
    ],
  },
    {
    title: "Data Access Governance (DAG)",
    description:
      "We enforce least-privilege access to sensitive data.",
    image: "/solution/cyber-security/data-security-solutions/9.png",
    points: [
      "Fine-grained data access control",
      "Entitlement visibility across users and roles",
      "Risk-based access decisioning",
    ],
  },
    {
    title: "Database Firewall  Database Access Firewall",
    description:
      "We protect databases from unauthorized access and attacks.",
    image: "/solution/cyber-security/data-security-solutions/10.png",
    points: [
      "SQL injection and database abuse prevention",
      "Policy-based database access control",
      "Inline and out-of-band firewall deployment options",
    ],
  },
    {
    title: "Data Security Posture Management (DSPM)",
    description:
      "We continuously assess and improve data security posture.",
    image: "/solution/cyber-security/data-security-solutions/11.png",
    points: [
      "Exposure analysis across structured and unstructured data stores",
      "Risk prioritization and remediation guidance",
      "Continuous posture assessment",
    ],
  },
    {
    title: "Big Data & NoSQL Database Security",
    description:
      "We protect distributed and high-volume data platforms.",
    image: "/solution/cyber-security/data-security-solutions/12.png",
    points: [
      "Security for big data and NoSQL environments",
      "Access control and activity monitoring",
      "Encryption and governance enforcement",
    ],
  },
    {
    title: "Backup Security & Ransomware Protection for Data",
    description:
      "We safeguard backups against ransomware and data loss.",
    image: "/solution/cyber-security/data-security-solutions/13.png",
    points: [
      "Secure backup repositories",
      "Malware scanning of backup data",
      "Immutable and air-gapped storage",
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
          Data Security Solutions
          </>
        }
        description="We design and implement comprehensive data security architectures that protect sensitive information throughout its lifecycle  from discovery and classification to access control, encryption, monitoring, and recovery."
        imageSrc="/solution/cyber-security/data-security-solutions/Data Security Solutions.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just protect data stores — we secure the entire data lifecycle, ensuring visibility, governance, and resilience against breaches and ransomware.”" />
            <CTA title="Ready to strengthen your data security and governance strategy?" />
    </div>
  )
}
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
    "Email Security Solutions for Enterprises | Phishing & Data Protection | Betopia Limited",

  description:
    "Advanced enterprise email security solutions protecting against phishing, malware, data leakage, and compliance risks through secure email gateways, encryption, and archiving by Betopia Limited.",

  keywords: [
    "email security solutions",
    "enterprise email security",
    "phishing protection services",
    "secure email gateway solutions",
    "email encryption services",
    "email archiving and compliance",
    "business email compromise protection",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/cyber-security/email-security-solutions",
  },

  openGraph: {
    title:
      "Email Security Solutions for Enterprises | Phishing & Data Protection | Betopia Limited",
    description:
      "Advanced enterprise email security solutions protecting against phishing, malware, data leakage, and compliance risks through secure email gateways, encryption, and archiving by Betopia Limited.",
    url: "https://betopialimited.com/solution/cyber-security/email-security-solutions",
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
      title: "Enterprise Email Threat Protection & Data Security",
      description:
        "Proven expertise in enterprise email threat protection and data security",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Defense Against Phishing, Ransomware & BEC",
      description: "Defense against modern threats including phishing, ransomware, and business email compromise (BEC)",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Compliance-Ready Implementations",
      description:
        "Compliance-ready implementations aligned with industry and regulatory standards",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 12L11 14L15 10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Seamless Email Platform Integration",
      description:
        "Seamless integration with existing enterprise email platforms",
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
    title: "Secure Email Gateway Solutions",
    description:
      "We prevent email-based attacks before they reach users’ inboxes.",
    image: "/solution/cyber-security/email-security-solutions/1.png",
    points: [
      "Protection against phishing, malware, ransomware, and malicious attachments",
      "Advanced spam, spoofing, and impersonation defense",
      "Policy-based email filtering and threat control",
    ],
  },
  {
    title: "Email Archiving Solutions",
    description:
      "We ensure secure, compliant, and searchable email retention.",
    image: "/solution/cyber-security/email-security-solutions/2.png",
    points: [
      "Secure email archiving and long-term retention",
      "Discovery readiness for legal and audit requirements",
      "Support for regulatory and compliance obligations",
    ],
  },
  {
    title: "Email Encryption Solutions",
    description:
      "We protect sensitive email communications through strong encryption.",
    image: "/solution/cyber-security/email-security-solutions/3.png",
    points: [
      "End-to-end email encryption for internal and external communication",
      "Data privacy assurance for sensitive and confidential information",
      "Alignment with regulatory and compliance standards",
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
      Email Security Solutions
          </>
        }
        description="We design and deploy comprehensive email security architectures that protect organizations from email-borne threats, safeguard sensitive information, and ensure regulatory compliance across internal and external communications."
        imageSrc="/solution/cyber-security/data-security-solutions/Data Security Solutions.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just filter emails — we protect communication channels, prevent data loss, and reduce human-centric security risks without disrupting productivity.”" />
            <CTA title="Ready to secure your enterprise email environment?" />
    </div>
  )
}
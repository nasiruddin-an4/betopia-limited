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
    "Identity Security Solutions for Enterprises | IAM, PAM & Zero Trust | Betopia Limited",

  description:
    "Enterprise identity security solutions covering IAM, SSO, PAM, IGA, and identity threat detection to secure access, reduce insider risk, and enforce Zero Trust across hybrid environments by Betopia Limited.",

  keywords: [
    "identity security solutions",
    "enterprise IAM solutions",
    "privileged access management PAM",
    "identity governance and administration IGA",
    "identity threat detection and response ITDR",
    "Zero Trust identity security",
    "access management solutions",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/cyber-security/identity-security-solutions",
  },

  openGraph: {
    title:
      "Identity Security Solutions for Enterprises | IAM, PAM & Zero Trust | Betopia Limited",
    description:
      "Enterprise identity security solutions covering IAM, SSO, PAM, IGA, and identity threat detection to secure access, reduce insider risk, and enforce Zero Trust across hybrid environments by Betopia Limited.",
    url: "https://betopialimited.com/solution/cyber-security/identity-security-solutions",
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
      title: "Enterprise Identity & Access Expertise",
      description:
        "Proven expertise in enterprise identity and access security",
      icon: (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M27.7256 32.7266C28.2779 32.7266 28.7256 32.2788 28.7256 31.7266C28.7256 31.1743 28.2779 30.7266 27.7256 30.7266C27.1734 30.7266 26.7256 31.1743 26.7256 31.7266C26.7256 32.2788 27.1734 32.7266 27.7256 32.7266Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.7256 25.7266H20.7256C19.6211 25.7266 18.7256 26.622 18.7256 27.7266V35.7266C18.7256 36.8311 19.6211 37.7266 20.7256 37.7266H34.7256C35.8302 37.7266 36.7256 36.8311 36.7256 35.7266V27.7266C36.7256 26.622 35.8302 25.7266 34.7256 25.7266Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.7256 25.7266V22.7266C22.7256 21.4005 23.2524 20.1287 24.1901 19.191C25.1278 18.2533 26.3996 17.7266 27.7256 17.7266C29.0517 17.7266 30.3235 18.2533 31.2612 19.191C32.1989 20.1287 32.7256 21.4005 32.7256 22.7266V25.7266" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      title: "Zero Trust–Aligned Identity Architecture",
      description: "Zero Trust–aligned identity architectures",
      icon: (
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M35.7256 28.727C35.7256 33.727 32.2256 36.227 28.0656 37.677C27.8478 37.7508 27.6112 37.7473 27.3956 37.667C23.2256 36.227 19.7256 33.727 19.7256 28.727V21.727C19.7256 21.4618 19.831 21.2074 20.0185 21.0199C20.2061 20.8324 20.4604 20.727 20.7256 20.727C22.7256 20.727 25.2256 19.527 26.9656 18.007C27.1775 17.826 27.447 17.7266 27.7256 17.7266C28.0043 17.7266 28.2738 17.826 28.4856 18.007C30.2356 19.537 32.7256 20.727 34.7256 20.727C34.9909 20.727 35.2452 20.8324 35.4328 21.0199C35.6203 21.2074 35.7256 21.4618 35.7256 21.727V28.727Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      title: "Secure Cloud, On-Premises & Hybrid Identities",
      description:
        "Experience securing cloud, on-premises, and hybrid identities",
      icon: (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M33.2239 34.7266H24.7239C23.4257 34.7262 22.1532 34.3649 21.0486 33.683C19.944 33.0011 19.0508 32.0255 18.4687 30.8652C17.8867 29.7048 17.6387 28.4055 17.7526 27.1124C17.8665 25.8193 18.3378 24.5833 19.1137 23.5425C19.8896 22.5018 20.9396 21.6974 22.1465 21.219C23.3533 20.7407 24.6693 20.6074 25.9475 20.834C27.2257 21.0606 28.4157 21.6382 29.3846 22.5022C30.3534 23.3662 31.063 24.4825 31.4339 25.7266H33.2239C34.4173 25.7266 35.5619 26.2007 36.4058 27.0446C37.2497 27.8885 37.7239 29.0331 37.7239 30.2266C37.7239 31.42 37.2497 32.5646 36.4058 33.4085C35.5619 34.2525 34.4173 34.7266 33.2239 34.7266Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      title: "Compliance-Ready Implementations",
      description:
        "Proactive security approach focused on prevention, detection, and resilience",
      icon: (
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M35.7256 28.727C35.7256 33.727 32.2256 36.227 28.0656 37.677C27.8478 37.7508 27.6112 37.7473 27.3956 37.667C23.2256 36.227 19.7256 33.727 19.7256 28.727V21.727C19.7256 21.4618 19.831 21.2074 20.0185 21.0199C20.2061 20.8324 20.4604 20.727 20.7256 20.727C22.7256 20.727 25.2256 19.527 26.9656 18.007C27.1775 17.826 27.447 17.7266 27.7256 17.7266C28.0043 17.7266 28.2738 17.826 28.4856 18.007C30.2356 19.537 32.7256 20.727 34.7256 20.727C34.9909 20.727 35.2452 20.8324 35.4328 21.0199C35.6203 21.2074 35.7256 21.4618 35.7256 21.727V28.727Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.7256 27.7266L26.7256 29.7266L30.7256 25.7266" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "Access Management (IAM) & Single Sign-On",
    description:
      "We centralize identity and access control across enterprise systems.",
    image: "/solution/cyber-security/identity-security-solutions/1.png",
    points: [
      "Centralized identity management across applications and platforms",
      "Seamless, secure authentication experiences",
      "Policy-based access control and role enforcement",
    ],
  },
  {
    title: "Privileged Access Management (PAM)",
    description:
      "We secure and monitor privileged accounts and administrative access.",
    image: "/solution/cyber-security/identity-security-solutions/2.png",
    points: [
      "Secure vaulting of privileged credentials",
      "Session monitoring, recording, and auditing",
      "Just-in-time privileged access enforcement",
    ],
  },
  {
    title: "Identity Governance & Administration (IGA)",
    description:
      "We govern identity lifecycles and access entitlements.",
    image: "/solution/cyber-security/identity-security-solutions/3.png",
    points: [
      "User identity lifecycle management (joiner, mover, leaver)",
      "Role, access, and entitlement governance",
      "Automated access certification and reviews",
    ],
  },
    {
    title: "Identity Threat Detection & Response (ITDR)",
    description:
      "We detect and respond to identity-based attacks in real time.",
    image: "/solution/cyber-security/identity-security-solutions/4.png",
    points: [
      "Identity-focused threat detection and analytics",
      "Monitoring of credential abuse and suspicious behavior",
      "Rapid containment and incident response",
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
          Identity Security Solutions
          </>
        }
        description="We design and implement identity-centric security architectures that ensure the right users have the right access at the right time—while preventing credential abuse, insider threats, and identity-based attacks."
        imageSrc="/solution/cyber-security/data-security-solutions/Data Security Solutions.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just manage identities — we secure access, reduce risk, and ensure trust across every user, system, and application.”" />
            <CTA title="Ready to strengthen your identity security and access control?" />
    </div>
  )
}
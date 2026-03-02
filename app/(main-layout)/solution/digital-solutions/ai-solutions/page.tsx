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
    "AI Solutions for Enterprises | Intelligent Automation & Analytics | Betopia Limited",

  description:
    "End-to-end enterprise AI solutions delivering predictive analytics, generative AI, intelligent automation, and responsible AI adoption to drive measurable business outcomes by Betopia Limited.",

  keywords: [
    "AI solutions",
    "enterprise AI services",
    "machine learning and predictive analytics",
    "generative AI solutions",
    "conversational AI and NLP",
    "computer vision analytics",
    "AI-powered business intelligence",
    "responsible AI adoption",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/digital-solutions/ai-solutions",
  },

  openGraph: {
    title:
      "AI Solutions for Enterprises | Intelligent Automation & Analytics | Betopia Limited",
    description:
      "End-to-end enterprise AI solutions delivering predictive analytics, generative AI, intelligent automation, and responsible AI adoption to drive measurable business outcomes by Betopia Limited.",
    url: "https://betopialimited.com/solution/digital-solutions/ai-solutions",
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
      title: "Enterprise AI Strategy, Development & Deployment",
      description:
        "Proven expertise in enterprise data platforms and analytics",
      icon: (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.8518 14.7734L10.4688 15.6964" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.8518 9.22769L10.4688 8.30469" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.1484 14.7734L13.5304 15.6974" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.5314 8.30469L13.1484 9.22769" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.7715 10.8518L15.6945 10.4688" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.7715 13.1484L15.6945 13.5314" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.5975 6.4988C17.8277 6.10029 17.963 5.65419 17.9931 5.195C18.0232 4.73581 17.9473 4.27585 17.7712 3.8507C17.5951 3.42554 17.3236 3.0466 16.9776 2.74318C16.6316 2.43976 16.2205 2.22 15.776 2.1009C15.3315 1.98179 14.8656 1.96654 14.4143 2.05632C13.9629 2.1461 13.5383 2.3385 13.1732 2.61865C12.8081 2.89879 12.5124 3.25917 12.3089 3.67189C12.1054 4.08462 11.9995 4.53863 11.9995 4.9988C12.0001 4.3326 11.779 3.68514 11.3709 3.15854C10.9628 2.63193 10.3911 2.25613 9.74584 2.0904C9.10058 1.92467 8.41851 1.97844 7.80718 2.24323C7.19586 2.50802 6.69006 2.96876 6.36955 3.5528C6.10572 4.03304 5.97845 4.57636 6.00155 5.1238C5.4137 5.27502 4.86797 5.55804 4.40571 5.95142C3.94344 6.3448 3.57677 6.83822 3.33346 7.39431C3.09015 7.9504 2.97659 8.55457 3.00138 9.16106C3.02618 9.76754 3.18867 10.3604 3.47655 10.8948" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.998 5.125C18.5859 5.27622 19.1316 5.55923 19.5939 5.95261C20.0562 6.34599 20.4228 6.83942 20.6661 7.39551C20.9094 7.9516 21.023 8.55577 20.9982 9.16225C20.9734 9.76874 20.8109 10.3616 20.523 10.896" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.5059 10.293C20.365 10.6419 21.0763 11.2786 21.5179 12.094C21.9596 12.9094 22.1042 13.853 21.927 14.7632C21.7498 15.6735 21.2619 16.4939 20.5466 17.0842C19.8313 17.6744 18.9332 17.9978 18.0059 17.999" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.03203 17.4844C3.91165 18.4021 4.11325 19.3332 4.60248 20.1189C5.09171 20.9046 5.83829 21.4963 6.71496 21.7933C7.59163 22.0902 8.54414 22.0738 9.41013 21.7471C10.2761 21.4203 11.002 20.8034 11.464 20.0014C11.644 19.6904 12.356 19.6904 12.536 20.0014C12.9981 20.8032 13.7238 21.4201 14.5897 21.7468C15.4556 22.0735 16.4079 22.0899 17.2845 21.7931C18.161 21.4964 18.9076 20.9048 19.3969 20.1194C19.8863 19.3339 20.0881 18.403 19.968 17.4854" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.50028 10.2891C3.63917 10.6368 2.92589 11.2733 2.48277 12.0895C2.03965 12.9056 1.89432 13.8505 2.07169 14.762C2.24906 15.6736 2.73809 16.4951 3.45489 17.0855C4.1717 17.676 5.07161 17.9986 6.00028 17.9981" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.00195 5.125C6.02234 5.6089 6.15958 6.08068 6.40195 6.5" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.22769 10.8518L8.30469 10.4688" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.22769 13.1484L8.30469 13.5314" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "End-to-End AI Coverage: Data, Models & Applications",
      description: "End-to-end coverage from databases to AI-driven insights",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 5V19C3 19.7956 3.94821 20.5587 5.63604 21.1213C7.32387 21.6839 9.61305 22 12 22C14.3869 22 16.6761 21.6839 18.364 21.1213C20.0518 20.5587 21 19.7956 21 19V5" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "Responsible, Secure & Scalable AI Adoption",
      description:
        "Secure, compliant data architectures aligned with enterprise standards",
      icon: (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 12L11 14L15 10" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "AI Solutions Across Business, Security, IoT & HR",
      description:
        "Experience supporting real-time, large-scale, and AI-enabled analytics",
      icon: (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 12H22" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
  ],
};

export const digitalAppInnovation = [
  {
    title: "Machine Learning & Predictive Analytics",
    description:
      "We help organizations anticipate outcomes and optimize decisions using data-driven models.",
    image: "/solution/ai-solutions/1.png",
    points: [
      "Predictive models for business forecasting",
      "Pattern recognition and trend analysis",
      "Data-driven decision-making",
    ],
  },
  {
    title: "Natural Language Processing (NLP) & Conversational AI",
    description:
      "We enable intelligent, human-like interactions across channels.",
    image: "/solution/ai-solutions/2.png",
    points: [
      "AI chatbots and virtual assistants",
      "Text and speech processing capabilities",
      "Enhanced customer and employee interactions",
    ],
  },
  {
    title: "Computer Vision & Image  Video Analytics",
    description:
      "We extract actionable insights from visual data.",
    image: "/solution/ai-solutions/3.png",
    points: [
      "Image and video recognition solutions",
      "Object detection and visual pattern analysis",
      "Automation of inspection and monitoring tasks",
    ],
  },
    {
    title: "Generative AI",
    description:
      "We accelerate creativity and productivity using generative intelligence.",
    image: "/solution/ai-solutions/4.png",
    points: [
      "AI-driven content, design, and code generation",
      "Automation of creative and knowledge-based tasks",
      "Improved workforce productivity and innovation",
    ],
  },
    {
    title: "AI-Powered Analytics & Business Intelligence",
    description:
      "We enhance analytics platforms with AI-driven intelligence.",
    image: "/solution/ai-solutions/5.png",
    points: [
      "Advanced AI-powered insights and recommendations",
      "Automated analytics and reporting",
      "Improved strategic planning and forecasting",
    ],
  },
    {
    title: "AI for Security & Compliance",
    description:
      "We strengthen security and governance using AI-driven detection and automation.",
    image: "/solution/ai-solutions/6.png",
    points: [
      "Threat detection using machine learning models",
      "Risk analysis and compliance monitoring",
      "Automated response to security incidents",
    ],
  },
    {
    title: "AI for IoT & Edge",
    description:
      "We enable real-time intelligence at the edge.",
    image: "/solution/ai-solutions/7.png",
    points: [
      "AI processing at the edge and near devices",
      "Real-time insights from IoT data streams",
      "Reduced latency and optimized bandwidth usage",
    ],
  },
    {
    title: "AI for Employee Experience & HR",
    description:
      "We improve workforce engagement and operational efficiency using AI.",
    image: "/solution/ai-solutions/8.png",
    points: [
      "AI-driven talent and workforce analytics",
      "Employee engagement and experience optimization",
      "Automation of HR processes",
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
          AI Solutions
          </>
        }
        description="We design, build, and deploy enterprise-ready AI solutions that integrate seamlessly with business systems—enabling predictive insights, automation, enhanced experiences, and smarter operations while ensuring security, scalability, and responsible AI adoption."
        imageSrc="/solution/database-business/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just implement AI — we help organizations turn intelligence into measurable business outcomes through responsible, scalable, and impactful AI solutions.”" />
            <CTA title="Ready to unlock the power of AI for your business?" />
    </div>
  )
}
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
    "Database & Business Analytics Solutions for Enterprises | Data & AI Insights | Betopia Limited",

  description:
    "Enterprise-grade database, data platform, and business analytics solutions delivering real-time insights, AI-powered intelligence, and secure, scalable data management across cloud and hybrid environments by Betopia Limited.",

  keywords: [
    "database and business analytics solutions",
    "enterprise database services",
    "cloud databases and data platforms",
    "data warehousing solutions",
    "business intelligence and analytics",
    "real-time analytics services",
    "AI-powered analytics solutions",
    "data governance and compliance",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution/digital-solutions/batabase-business-analytics",
  },

  openGraph: {
    title:
      "Database & Business Analytics Solutions for Enterprises | Data & AI Insights | Betopia Limited",
    description:
      "Enterprise-grade database, data platform, and business analytics solutions delivering real-time insights, AI-powered intelligence, and secure, scalable data management across cloud and hybrid environments by Betopia Limited.",
    url: "https://betopialimited.com/solution/digital-solutions/batabase-business-analytics",
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
      title: "Enterprise Data Platforms & Analytics Expertise",
      description:
        "Proven expertise in enterprise data platforms and analytics",
      icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13 17V9" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18 17V14" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 17V5" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
    {
      title: "End-to-End Data & AI Insight Coverage",
      description: "End-to-end coverage from databases to AI-driven insights",
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
      title: "Secure & Compliant Data Architectures",
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
      title: "Real-Time, Large-Scale & AI-Enabled Analytics",
      description:
        "Experience supporting real-time, large-scale, and AI-enabled analytics",
      icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 5V19C3 19.7956 3.94821 20.5587 5.63604 21.1213C7.32387 21.6839 9.61305 22 12 22C14.3869 22 16.6761 21.6839 18.364 21.1213C20.0518 20.5587 21 19.7956 21 19V5" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
    },
  ],
};
export const businessapplicationwhyBetopiaContent: WhyBetopiaContent = {
  heading: "Why",
  highlight: "Betopia",
  image: "/solution/business-application/why.png",

  items: [
    {
      title: "Multi-platform Expertise",
      description:
        "Deep knowledge across Microsoft, SAP, Oracle, and Salesforce ecosystems",
      icon: (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M27.7256 37.7266C33.2484 37.7266 37.7256 33.2494 37.7256 27.7266C37.7256 22.2037 33.2484 17.7266 27.7256 17.7266C22.2027 17.7266 17.7256 22.2037 17.7256 27.7266C17.7256 33.2494 22.2027 37.7266 27.7256 37.7266Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.7256 17.7266C25.1578 20.4227 23.7256 24.0033 23.7256 27.7266C23.7256 31.4498 25.1578 35.0304 27.7256 37.7266C30.2934 35.0304 31.7256 31.4498 31.7256 27.7266C31.7256 24.0033 30.2934 20.4227 27.7256 17.7266Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7256 27.7266H37.7256" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      ),
    },
    {
      title: "Vendor-neutral Advisory",
      description: "Unbiased solution design focused on your business needs, not vendor preferences",
      icon: (
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M35.7256 28.727C35.7256 33.727 32.2256 36.227 28.0656 37.677C27.8477 37.7508 27.6111 37.7473 27.3956 37.667C23.2256 36.227 19.7256 33.727 19.7256 28.727V21.727C19.7256 21.4618 19.8309 21.2074 20.0185 21.0199C20.206 20.8324 20.4604 20.727 20.7256 20.727C22.7256 20.727 25.2256 19.527 26.9656 18.007C27.1774 17.826 27.4469 17.7266 27.7256 17.7266C28.0042 17.7266 28.2737 17.826 28.4856 18.007C30.2356 19.537 32.7256 20.727 34.7256 20.727C34.9908 20.727 35.2452 20.8324 35.4327 21.0199C35.6202 21.2074 35.7256 21.4618 35.7256 21.727V28.727Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      ),
    },
    {
      title: "End-to-end Delivery",
      description:
        "Complete lifecycle support from consulting to implementation and ongoing maintenance",
      icon: (
 <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M25.3969 19.8608C25.452 19.2811 25.7212 18.7428 26.152 18.351C26.5828 17.9593 27.1441 17.7422 27.7264 17.7422C28.3087 17.7422 28.87 17.9593 29.3008 18.351C29.7316 18.7428 30.0008 19.2811 30.0559 19.8608C30.089 20.2352 30.2119 20.5962 30.414 20.9131C30.6162 21.23 30.8917 21.4936 31.2174 21.6814C31.543 21.8693 31.909 21.976 32.2846 21.9924C32.6601 22.0088 33.0341 21.9345 33.3749 21.7758C33.904 21.5355 34.5036 21.5008 35.0569 21.6782C35.6102 21.8557 36.0777 22.2327 36.3684 22.7359C36.6591 23.239 36.7522 23.8323 36.6295 24.4003C36.5069 24.9683 36.1773 25.4704 35.7049 25.8088C35.3973 26.0246 35.1462 26.3114 34.9728 26.6448C34.7994 26.9782 34.7089 27.3485 34.7089 27.7243C34.7089 28.1001 34.7994 28.4703 34.9728 28.8037C35.1462 29.1372 35.3973 29.4239 35.7049 29.6398C36.1773 29.9781 36.5069 30.4802 36.6295 31.0482C36.7522 31.6162 36.6591 32.2095 36.3684 32.7127C36.0777 33.2158 35.6102 33.5928 35.0569 33.7703C34.5036 33.9477 33.904 33.913 33.3749 33.6728C33.0341 33.514 32.6601 33.4397 32.2846 33.4561C31.909 33.4726 31.543 33.5792 31.2174 33.7671C30.8917 33.955 30.6162 34.2185 30.414 34.5354C30.2119 34.8523 30.089 35.2133 30.0559 35.5878C30.0008 36.1674 29.7316 36.7057 29.3008 37.0975C28.87 37.4892 28.3087 37.7063 27.7264 37.7063C27.1441 37.7063 26.5828 37.4892 26.152 37.0975C25.7212 36.7057 25.452 36.1674 25.3969 35.5878C25.3638 35.2132 25.241 34.8521 25.0388 34.535C24.8365 34.218 24.5609 33.9544 24.2351 33.7665C23.9094 33.5786 23.5432 33.472 23.1675 33.4557C22.7918 33.4393 22.4177 33.5138 22.0769 33.6728C21.5478 33.913 20.9482 33.9477 20.3949 33.7703C19.8416 33.5928 19.3741 33.2158 19.0834 32.7127C18.7927 32.2095 18.6996 31.6162 18.8223 31.0482C18.9449 30.4802 19.2745 29.9781 19.7469 29.6398C20.0545 29.4239 20.3056 29.1372 20.479 28.8037C20.6523 28.4703 20.7428 28.1001 20.7428 27.7243C20.7428 27.3485 20.6523 26.9782 20.479 26.6448C20.3056 26.3114 20.0545 26.0246 19.7469 25.8088C19.2752 25.4702 18.9461 24.9684 18.8238 24.4007C18.7014 23.8331 18.7945 23.2403 19.0849 22.7375C19.3753 22.2346 19.8422 21.8577 20.395 21.68C20.9478 21.5023 21.5469 21.5364 22.0759 21.7758C22.4166 21.9345 22.7906 22.0088 23.1662 21.9924C23.5417 21.976 23.9078 21.8693 24.2334 21.6814C24.559 21.4936 24.8346 21.23 25.0368 20.9131C25.2389 20.5962 25.3618 20.2352 25.3949 19.8608" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.7256 30.7266C29.3824 30.7266 30.7256 29.3834 30.7256 27.7266C30.7256 26.0697 29.3824 24.7266 27.7256 24.7266C26.0687 24.7266 24.7256 26.0697 24.7256 27.7266C24.7256 29.3834 26.0687 30.7266 27.7256 30.7266Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      title: "Industry-focused Solutions",
      description:
        "Best practices and proven methodologies tailored to your sector",
      icon: (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M31.2023 28.6172L32.7173 37.1432C32.7343 37.2436 32.7202 37.3468 32.677 37.4389C32.6337 37.5311 32.5633 37.6079 32.4753 37.659C32.3872 37.7101 32.2856 37.7331 32.1841 37.7249C32.0827 37.7167 31.9861 37.6777 31.9073 37.6132L28.3273 34.9262C28.1545 34.7971 27.9446 34.7273 27.7288 34.7273C27.5131 34.7273 27.3032 34.7971 27.1303 34.9262L23.5443 37.6122C23.4657 37.6766 23.3692 37.7155 23.2678 37.7237C23.1665 37.7319 23.065 37.709 22.977 37.6581C22.889 37.6071 22.8186 37.5305 22.7753 37.4385C22.7319 37.3465 22.7176 37.2435 22.7343 37.1432L24.2483 28.6172" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.7256 29.7266C31.0393 29.7266 33.7256 27.0403 33.7256 23.7266C33.7256 20.4129 31.0393 17.7266 27.7256 17.7266C24.4119 17.7266 21.7256 20.4129 21.7256 23.7266C21.7256 27.0403 24.4119 29.7266 27.7256 29.7266Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      ),
    },
     {
      title: "Future-ready Architecture",
      description:
        "Scalable, secure systems designed for long-term business value",
      icon: (
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z" fill="#FFEDD4"/>
<path d="M35.7256 28.727C35.7256 33.727 32.2256 36.227 28.0656 37.677C27.8477 37.7508 27.6111 37.7473 27.3956 37.667C23.2256 36.227 19.7256 33.727 19.7256 28.727V21.727C19.7256 21.4618 19.8309 21.2074 20.0185 21.0199C20.206 20.8324 20.4604 20.727 20.7256 20.727C22.7256 20.727 25.2256 19.527 26.9656 18.007C27.1774 17.826 27.4469 17.7266 27.7256 17.7266C28.0042 17.7266 28.2737 17.826 28.4856 18.007C30.2356 19.537 32.7256 20.727 34.7256 20.727C34.9908 20.727 35.2452 20.8324 35.4327 21.0199C35.6202 21.2074 35.7256 21.4618 35.7256 21.727V28.727Z" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.7256 27.7266L26.7256 29.7266L30.7256 25.7266" stroke="#F59500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      ),
    },
  ],
};
export const digitalAppInnovation = [
  {
    title: "Relational Database Management Systems (RDBMS)",
    description:
      "We deliver reliable, high-performance database platforms for structured enterprise data.",
    image: "/solution/database-business/1.png",
    points: [
      "Enterprise-grade structured data management",
      "High availability and performance optimization",
      "Transaction consistency and reliability",
    ],
  },
  {
    title: "NoSQL Databases",
    description:
      "We support modern applications with scalable, flexible data platforms.",
    image: "/solution/database-business/2.png",
    points: [
      "Databases for unstructured and semi-structured data",
      "High-performance read/write operations",
      "Flexible schema design for evolving data models",
    ],
  },
  {
    title: "Cloud Databases",
    description:
      "We enable scalable, managed database services in the cloud.",
    image: "/solution/database-business/3.png",
    points: [
      "Fully managed, cloud-native database services",
      "Elastic scalability and high availability",
      "Reduced infrastructure and operational overhead",
    ],
  },
    {
    title: "Data Warehousing Solutions",
    description:
      "We centralize enterprise data for analytics and reporting.",
    image: "/solution/database-business/4.png",
    points: [
      "Centralized data storage for analytics workloads",
      "Optimized query performance",
      "Historical data analysis and trend insights",
    ],
  },
    {
    title: "Data Lake & Big Data Platforms",
    description:
      "We enable large-scale data processing and advanced analytics.",
    image: "/solution/database-business/5.png",
    points: [
      "Storage and processing of massive data volumes",
      "Support for structured, semi-structured, and unstructured data",
      "Enablement of data science and advanced analytics",
    ],
  },
    {
    title: "Business Intelligence & Analytics Tools",
    description:
      "We transform raw data into meaningful business insights.",
    image: "/solution/database-business/6.png",
    points: [
      "Interactive dashboards and enterprise reporting",
      "Advanced data visualization and insights",
      "Improved business decision-making",
    ],
  },
    {
    title: "Data Integration & ETL  ELT Platforms",
    description:
      "We ensure seamless data flow across systems.",
    image: "/solution/database-business/7.png",
    points: [
      "Data extraction, transformation, and loading (ETL / ELT)",
      "Integration across multiple data sources",
      "Improved data quality and consistency",
    ],
  },
    {
    title: "Real-Time & Streaming Analytics",
    description:
      "We enable instant insights from live data.",
    image: "/solution/database-business/8.png",
    points: [
      "Real-time data ingestion and processing",
      "Immediate insights from streaming data sources",
      "Event-driven analytics",
    ],
  },
    {
    title: "Data Governance, Security & Compliance",
    description:
      "We ensure data is trusted, governed, and compliant..",
    image: "/solution/database-business/9.png",
    points: [
      "Data access control and governance frameworks",
      "Regulatory compliance and audit readiness",
      "Data quality and integrity management",
    ],
  },
    {
    title: "AI-Powered Analytics & Business Intelligence",
    description:
      "We deliver smarter insights using AI.",
    image: "/solution/database-business/10.png",
    points: [
      "AI-driven insights and recommendations",
      "Automated pattern and anomaly detection",
      "Improved forecasting and planning",
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
          Database & Business <br /> Analytics Solutions
          </>
        }
        description="We design, modernize, and manage end-to-end data platforms—from core databases and data lakes to advanced analytics and AI-powered intelligence—enabling enterprises to extract maximum value from their data securely and efficiently."
        imageSrc="/solution/database-business/about.png"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={digitalAppInnovation}
      />

      <WhyBetopia content={digitalAppInnovationwhyBetopiaContent} />
      <ClientValueStory title="“We don’t just manage data — we turn it into intelligence that drives better decisions, faster responses, and measurable business outcomes.”" />
            <CTA title="Ready to modernize your data platforms and unlock business insights?" />
    </div>
  )
}
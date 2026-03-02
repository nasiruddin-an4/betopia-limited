import ClientValueStory from "../services/resource-augmentation/ClientValueStory";
import CTA from "../services/resource-augmentation/CTA";
import Hero from "../services/resource-augmentation/Hero";
import WhatWeDo from "../services/resource-augmentation/WhatWeDo";
import WhyBetopia from "../services/resource-augmentation/WhyBetopia";

 import type { Metadata } from "next";
 
 /* ✅ SEO META INFORMATION */
 export const metadata: Metadata = {
   title:
     "Enterprise Resource Augmentation Services | On-Demand IT Talent | Betopia Limited",
 
   description:
     "Enterprise-grade resource augmentation services providing certified cloud, AI, security, and software professionals embedded into programs to accelerate delivery, reduce risk, and optimize costs by Betopia Limited.",
 
   keywords: [
     'resource augmentation services', 'enterprise IT staff augmentation', 'on demand IT talent', 'cloud AI security professionals', 'global delivery teams', 'embedded development teams', 'offshore resource augmentation', 'Betopia Limited'
   ],
 
   robots: {
     index: true,
     follow: true,
   },
 
   alternates: {
     canonical: "https://betopialimited.com/services/resource-augmentation",
   },
 
   openGraph: {
     title:
       "Enterprise Resource Augmentation Services | On-Demand IT Talent | Betopia Limited",
     description:
       "Enterprise-grade resource augmentation services providing certified cloud, AI, security, and software professionals embedded into programs to accelerate delivery, reduce risk, and optimize costs by Betopia Limited.",
     url: "https://betopialimited.com/services/resource-augmentation",
     siteName: "Betopia Limited",
     type: "website",
   },
 };

export default function page() {
  return (
    <div>
        <Hero/>
        <WhatWeDo/>
        <WhyBetopia/>
        <ClientValueStory/>
        <CTA/>
    </div>
  )
}

// import AugmentationHero from '@/components/pages/team-augmentation/AugmentationHero'
// import CompaniesChooseUs from '@/components/pages/team-augmentation/CompaniesChooseUs'
// import HowItWork from '@/components/pages/team-augmentation/HowItWork'
// import LookingToHire from '@/components/pages/team-augmentation/LookingToHire'
// import OurEngagementModel from '@/components/pages/team-augmentation/OurEngagementModel'
// import OurOffer from '@/components/pages/team-augmentation/OurOffer'
// import OurServices from '@/components/pages/team-augmentation/OurServices'
// import TechStacksWeMaster from '@/components/pages/team-augmentation/TechStacksWeMaster'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <AugmentationHero/>
//       <OurOffer/>
//       <OurServices/>
//       <OurEngagementModel/>
//       <CompaniesChooseUs/>
//       <HowItWork/>
//       <TechStacksWeMaster/>
//       <LookingToHire/>
//     </div>
//   )
// }

// export default page
import Hero from "./Hero";
import WhyChooseBetopiaHRM from "./WhyChooseBetopiaHRM";
import BetopiaERP from "./BetopiaERP";
import type { Metadata } from "next";
import EnterpriseOperations from "./EnterpriseOperations";
import ReadyFor from "./ReadyFor";
import CTA from "./CTA";
import ModularSection from "./ModularSection";
import BuiltFor from "./BuiltFor";
import DeploymentChoice from "./DeploymentChoice";

/*  SEO META INFORMATION */
export const metadata: Metadata = {
  title:
    "Betopia ERP Management System | All-in-One Enterprise ERP Platform | Betopia Limited",

  description:
    "Betopia ERP is a unified, cloud-based enterprise resource planning system that streamlines sales, inventory, finance, HR, manufacturing, and projects with real-time insights and scalable automation.",

  keywords: [
    "Betopia ERP",
    "ERP management system",
    "enterprise ERP software",
    "cloud ERP platform",
    "Odoo ERP solution",
    "business process automation software",
    "sales inventory accounting HR ERP",
    "manufacturing and project management ERP",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/product/erp-product",
  },

  openGraph: {
    title:
      "Betopia ERP Management System | All-in-One Enterprise ERP Platform | Betopia Limited",
    description:
      "Betopia ERP is a unified, cloud-based enterprise resource planning system that streamlines sales, inventory, finance, HR, manufacturing, and projects with real-time insights and scalable automation.",
    url: "https://betopialimited.com/product/erp-product",
    siteName: "Betopia Limited",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <Hero />
      <BetopiaERP />
      <WhyChooseBetopiaHRM />
      <EnterpriseOperations />
      <BuiltFor />
      <DeploymentChoice />
      <ModularSection />
      {/* <CorePlatform /> */}
      {/* <OdooSection /> */}
      <ReadyFor />
      <CTA />
      {/* <IdealFor /> */}
      {/* <WhatOurCustomersSay /> */}
      {/* <ErpCTA /> */}
    </div>
  );
}

// import Image from 'next/image'
// import Link from 'next/link'
// import TrustedBy from '@/components/pages/product2/TrustedBy';
// import WhyBetopia from '@/components/pages/product2/WhyBetopia';
// import FAQSection from '@/components/shared/FAQSection'
// import { servicefaqData } from "@/data/service";
// import React, { ReactNode } from 'react'

// type FeatureCardProps = {
//     bg: string
//     icon: React.ReactNode
//     title: string
//     description: string
// }

// interface OfferCardProps {
//     icon: ReactNode;
//     title: string;
//     description: string;
// }
// const offersData = [
//     {
//         title: "Cloud Services",
//         description: "Betopia Limited's Cloud Modernization & Managed Services empower businesses with tailored cloud solutions, optimizing performance, security",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
//                 <path d="M18.4842 33.8871C26.9911 33.8871 33.8873 26.9909 33.8873 18.4839C33.8873 9.97703 26.9911 3.08081 18.4842 3.08081C9.97727 3.08081 3.08105 9.97703 3.08105 18.4839C3.08105 26.9909 9.97727 33.8871 18.4842 33.8871Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M18.4841 27.7257C23.5882 27.7257 27.7259 23.588 27.7259 18.4838C27.7259 13.3797 23.5882 9.24194 18.4841 9.24194C13.3799 9.24194 9.24219 13.3797 9.24219 18.4838C9.24219 23.588 13.3799 27.7257 18.4841 27.7257Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M18.4839 21.5643C20.1853 21.5643 21.5646 20.1851 21.5646 18.4837C21.5646 16.7823 20.1853 15.4031 18.4839 15.4031C16.7826 15.4031 15.4033 16.7823 15.4033 18.4837C15.4033 20.1851 16.7826 21.5643 18.4839 21.5643Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         title: "Cybersecurity Services",
//         description: "Betopia Limited's Cybersecurity & Compliance Solutions ensure robust digital protection and regulatory adherence for businesses.",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
//                 <path d="M30.8061 20.024C30.8061 27.7255 25.415 31.5763 19.0073 33.8098C18.6718 33.9235 18.3073 33.918 17.9753 33.7944C11.5522 31.5763 6.16113 27.7255 6.16113 20.024V9.24178C6.16113 8.83326 6.32342 8.44148 6.61228 8.15261C6.90114 7.86375 7.29293 7.70147 7.70145 7.70147C10.7821 7.70147 14.6329 5.85309 17.313 3.51181C17.6393 3.23302 18.0544 3.07983 18.4836 3.07983C18.9128 3.07983 19.328 3.23302 19.6543 3.51181C22.3498 5.86849 26.1852 7.70147 29.2658 7.70147C29.6743 7.70147 30.0661 7.86375 30.355 8.15261C30.6439 8.44148 30.8061 8.83326 30.8061 9.24178V20.024Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         title: "AI Services",
//         description: "Betopia Limited's Data, AI & Analytics Engineering services empower businesses by transforming raw data into actionable insights",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
//                 <path d="M6.1608 21.5647C5.86932 21.5657 5.58354 21.4839 5.33666 21.329C5.08978 21.174 4.89194 20.9522 4.76612 20.6892C4.6403 20.4263 4.59167 20.1331 4.62588 19.8436C4.66008 19.5541 4.77572 19.2803 4.95936 19.054L20.2085 3.34277C20.3228 3.21074 20.4787 3.12151 20.6505 3.08975C20.8223 3.05798 20.9998 3.08556 21.1538 3.16795C21.3078 3.25034 21.4293 3.38266 21.4982 3.54318C21.5671 3.70369 21.5795 3.88288 21.5331 4.05131L18.5757 13.324C18.4885 13.5574 18.4592 13.8085 18.4904 14.0557C18.5215 14.3029 18.6122 14.5388 18.7545 14.7433C18.8969 14.9478 19.0868 15.1146 19.3078 15.2296C19.5288 15.3446 19.7745 15.4042 20.0236 15.4034H30.8058C31.0973 15.4024 31.3831 15.4842 31.6299 15.6391C31.8768 15.7941 32.0747 16.0159 32.2005 16.2788C32.3263 16.5418 32.3749 16.835 32.3407 17.1245C32.3065 17.4139 32.1909 17.6878 32.0073 17.9141L16.7582 33.6253C16.6438 33.7574 16.4879 33.8466 16.3161 33.8783C16.1443 33.9101 15.9669 33.8825 15.8128 33.8001C15.6588 33.7177 15.5373 33.5854 15.4684 33.4249C15.3995 33.2644 15.3872 33.0852 15.4335 32.9168L18.3909 23.6441C18.4781 23.4107 18.5074 23.1596 18.4762 22.9124C18.4451 22.6652 18.3544 22.4293 18.2121 22.2248C18.0697 22.0203 17.8798 21.8535 17.6588 21.7385C17.4378 21.6235 17.1921 21.5639 16.943 21.5647H6.1608Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
// ];

// const OfferCard: React.FC<OfferCardProps> = ({
//     icon,
//     title,
//     description,
// }) => {
//     return (
//         <div className="p-9 bg-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-105">
//             <div className="p-4 bg-[#FF9500] rounded-xl w-full flex items-center gap-3 ">
//                 {icon}
//                 <h5 className="text-base md:text-xl font-normal  text-[#ffffff] ">
//                     {title}
//                 </h5>
//             </div>
//             <p className="text-xs md:text-sm lg:text-base font-normal  text-[#45556C] mt-10">
//                 {description}
//             </p>
//         </div>
//     );
// };

// export const features = [
//     {
//         bg: "bg-[#2B7FFF1A]",
//         title: "Unified Operations",
//         description:
//             "Seamlessly integrates finance, HR, supply chain, and other core functions into one cohesive system",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <path d="M18.4838 24.2599V21.9494C18.4838 20.7239 17.997 19.5485 17.1304 18.6819C16.2638 17.8153 15.0884 17.3285 13.8629 17.3285H6.93149C5.70594 17.3285 4.53058 17.8153 3.66399 18.6819C2.79739 19.5485 2.31055 20.7239 2.31055 21.9494V24.2599" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M18.4834 3.61365C19.4743 3.87054 20.3519 4.44919 20.9783 5.25877C21.6048 6.06836 21.9447 7.06305 21.9447 8.08672C21.9447 9.11038 21.6048 10.1051 20.9783 10.9147C20.3519 11.7242 19.4743 12.3029 18.4834 12.5598" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M25.4149 24.26V21.9495C25.4142 20.9257 25.0734 19.9311 24.4461 19.1219C23.8188 18.3127 22.9406 17.7347 21.9492 17.4788" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M10.3973 12.7076C12.9494 12.7076 15.0182 10.6387 15.0182 8.08664C15.0182 5.53456 12.9494 3.4657 10.3973 3.4657C7.84523 3.4657 5.77637 5.53456 5.77637 8.08664C5.77637 10.6387 7.84523 12.7076 10.3973 12.7076Z" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         bg: "bg-[#00C9501A]",
//         title: "Real-Time Insights",
//         description:
//             "Provides actionable analytics and dashboards that empower faster, smarter decisions.",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <path d="M9.24219 2.31042V6.93136" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M18.4834 2.31042V6.93136" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M21.9496 4.62097H5.77629C4.50025 4.62097 3.46582 5.6554 3.46582 6.93144V23.1047C3.46582 24.3808 4.50025 25.4152 5.77629 25.4152H21.9496C23.2256 25.4152 24.26 24.3808 24.26 23.1047V6.93144C24.26 5.6554 23.2256 4.62097 21.9496 4.62097Z" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M3.46582 11.5524H24.26" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         bg: "bg-[#FAF5FF]",
//         title: "Enhanced Productivity",
//         description:
//             "Automates daily workflows, reduces manual errors, and saves valuable time",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <path d="M17.3287 2.31042H6.93156C6.31879 2.31042 5.73111 2.55385 5.29781 2.98715C4.86452 3.42044 4.62109 4.00812 4.62109 4.62089V23.1046C4.62109 23.7174 4.86452 24.3051 5.29781 24.7384C5.73111 25.1717 6.31879 25.4151 6.93156 25.4151H20.7944C21.4072 25.4151 21.9948 25.1717 22.4281 24.7384C22.8614 24.3051 23.1048 23.7174 23.1048 23.1046V8.0866L17.3287 2.31042Z" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M16.1729 2.31042V6.93136C16.1729 7.54414 16.4163 8.13182 16.8496 8.56511C17.2829 8.99841 17.8705 9.24183 18.4833 9.24183H23.1043" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M11.5527 10.3971H9.24219" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M18.4841 15.0181H9.24219" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M18.4841 19.639H9.24219" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         bg: "bg-[#FF69001A]",
//         title: "Scalable Growth",
//         description:
//             "Adapts to organizations of any size with flexible, future-ready capabilities.",
//         icon: (
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <path
//                     d="M14 2v24M20 6H11a4 4 0 000 8h6a4 4 0 010 8H6"
//                     stroke="#FF6900"
//                     strokeWidth="2.3"
//                     strokeLinecap="round"
//                 />
//             </svg>
//         ),
//     },
// ];

// const FeatureCard = ({ bg, icon, title, description }: FeatureCardProps) => {
//     return (
//         <div className={`p-9 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 ${bg}`}>
//             <div className="p-3 rounded-xl w-full bg-[#ffffff] flex items-center gap-3">
//                 {icon}
//                 <h5 className="text-base md:text-xl font-normal  text-[#0F172B]">
//                     {title}
//                 </h5>
//             </div>

//             <p className="mt-10 text-xs md:text-sm lg:text-base  text-[#45556C]">
//                 {description}
//             </p>
//         </div>
//     )
// }

// export default function page() {
//     return (
//         <div>
//             {/* hero section */}
//             <div className="relative w-full h-[663px] overflow-hidden">
//                 {/* Background video */}
//                 <video
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                     src="/videos/hero/team_augmentation_hero.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 />

//                 {/* Overlay */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//                     <h6 className='text-xs md:text-sm lg:text-base mb-4  px-5 py-2 rounded-3xl bg-[#FF690033] border border-[#70491d]'>
//                         Betopia
//                     </h6>

//                     <h1
//                         className=" font-normal text-white
//           text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[83px] leading-24"
//                     >
//                         Elevate Your <br /><span className='text-[#FF9500]'> Business Operations </span>
//                     </h1>

//                     <p
//                         className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-[1100px] px-2 sm:px-4"
//                     >Comprehensive Suite of Solutions for Smarter, Faster Business Management.
//                     </p>

//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
//                         <Link href='/contact'>
//                             <button
//                                 className="bg-[#FF9500]   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//                             >Start Free Trial
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
//                                     <path d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </Link>
//                     </div>

//                 </div>
//             </div>

//             {/* second section */}
//             <div className='bg-[#FFF7ED]'>
//                 <div className='max-w-[1480px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-20'>
//                     <div>
//                         <h1
//                             className=" font-normal text-balck
//           text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
//                         >Betopia ERP
//                         </h1>
//                         <p
//                             className="mt-2 text-base sm:text-lg md:text-xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0"
//                         >
//                             Betopia ERP unifies all core business functions for seamless operations. Collaborate with Discuss & To Do, manage procurement with Purchase & Requisition, streamline workflows via Calendar & Operation, and handle clients and sales through Contacts, CRM, and Sales.
//                         </p>
//                         <Link href=''>
//                             <button
//                                 className="bg-[#FF9500] mt-8 text-white   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//                             >Learn More
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
//                                     <path d="M3.85156 9.2417H14.6338" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M9.24219 3.85059L14.6333 9.24168L9.24219 14.6328" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </Link>
//                     </div>
//                     <Image src='/human_resource_side.png' alt='human_resource_side' width={711} height={462} />
//                 </div>
//             </div>

//             {/* third section */}
//             <div className="bg-[#fffefd]">

//                 <div className='max-w-[1480px] mx-auto py-20'>
//                     <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Our Comprehensive <span className='text-[#FF9500]'>Features</span> </h3>
//                     <p
//                         className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
//                     >
//                         Everything you need to manage your workforce efficiently in one integrated platform
//                     </p>

//                     {/*  */}

//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20'>
//                         {features.map((item, index) => (
//                             <FeatureCard
//                                 key={index}
//                                 bg={item.bg}
//                                 icon={item.icon}
//                                 title={item.title}
//                                 description={item.description}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* fouth section */}
//             <div className="bg-[#f5faff]">

//                 <div className='max-w-[1480px] mx-auto py-20'>
//                     <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>In Case You  <span className='text-[#FF9500]'>Missed It… </span> </h3>
//                     <p
//                         className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
//                     >
//                         Here’s a quick look at the services that make our products even more powerful.

//                     </p>
//                     {/*  */}
//                     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10'>
//                         {offersData.map((offer, index) => (
//                             <OfferCard key={index} {...offer} />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <WhyBetopia />
//             <TrustedBy />
//             <FAQSection
//                 imageSrc="/service/faq.png"
//                 faqs={servicefaqData}
//             />
//         </div>
//     )
// }

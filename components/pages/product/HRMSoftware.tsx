"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Container from "@/components/layout/Container";

interface ProductSlideCardProps {
  badge?: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

function ProductSlideCard({
  badge,
  title,
  highlight,
  description,
  features,
  image,
  link,
}: ProductSlideCardProps) {
  return (
    <div className="bg-[#EFF6FF]">
      <Container>
      <div className="py-10 lg:py-20 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-20  lg:h-[700px]">
        {/* Left */}
        <div>
          {badge && (
            <h6 className="w-fit text-xs md:text-sm lg:text-base text-white mb-4  px-5 py-2 rounded-3xl bg-[#FF9500]">
              {badge}
            </h6>
          )}

          <h1 className=" font-normal text-black text-2xl sm:text-4xl  lg:text-[52px]">
            {title} <span className="text-[#FF9500]">{highlight}</span>
          </h1>

          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-[#45556C] max-w-[1100px]">
            {description}
          </p>

          <div className="mt-6 space-y-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm lg:text-2xl text-[#314158]"
              >
                <Image
                  src="/icons/active_orange.png"
                  alt="icon"
                  width={23}
                  height={23}
                />
                {item}
              </div>
            ))}
          </div>

          <Link href={link}>
            <button className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 cursor-pointer text-white flex items-center gap-4 rounded-xl px-6 py-4 text-sm md:text-base">
              Learn More
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="white"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Right */}
        <Image src={image} alt="product" width={711} height={462} />
      </div>
      </Container>
    </div>
  );
}

const products = [
  {
    badge: "Most Popular",
    title: "Betopia",
    highlight: "HRM Software",
    description:
      "Transform your HR operations with our comprehensive human resource management system.",
    features: [
      "Employee Database & Profile Management",
      "Payroll Processing & Tax Calculations",
      "Attendance & Leave Management",
      "Performance Reviews & Goal Tracking",
      "Recruitment & Onboarding Workflows",
      "Training & Development Programs",
    ],
    image: "/product/hrm.jpg",
    link: "/product/hrm-product",
  },
  {
    badge: "Most Popular",
    title: "Betopia",
    highlight: "ERP",
    description:
      "Betopia ERP is a fully integrated enterprise resource planning (ERP) solution built on the powerful Odoo framework.",
    features: [
      "Real-time data synchronization across all modules",
      "Customizable workflows and business reports",
      "Mobile-friendly interface for anytime, anywhere access",
      "Industry-leading security and compliance",
    ],
    image: "/product/erp-info.png",
    link: "/product/erp-product",
  },
  {
    badge: "Most Popular",
    title: "Betopia",
    highlight: "Count Trust",
    description:
      "Count Trust is a secure, enterprise-grade voting platform that enables organizations to conduct elections with complete confidence.",
    features: [
      "Smart Registration & Verification",
      "Role Based Dashboards",
      "Secure and Transparent Voting",
      "Integrated Payment & Membership",
      "Live Results & Reporting",
      "Branding & Customization",
    ],
    image: "/product/count_t.jpg",
    link: "/product/voting-count-trust",
  },
  // future product add korlei slide hobe
];

export default function ProductSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductSlideCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute z-10 right-4 md:right-8 xl:right-40 top-4 flex gap-4">
        <button 
        className="group custom-prev border border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
        </button>
        <button 
        className="group custom-next border border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}

// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export default function HRMSoftware() {
//     return (
//         <div className='bg-[#EFF6FF]'>
//             <div className='max-w-[1480px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-20 px-3 xl:px-0'>
//                 <div>
//                     <h6 className='w-fit text-xs md:text-sm lg:text-base text-[#ffffff] mb-4  px-5 py-2 rounded-3xl bg-[#FF9500]'>
//                         Most Popular
//                     </h6>
//                     <h1
//                         className=" font-normal text-balck
//           text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
//                     >
//                         Betopia <span className='text-[#FF9500]'>HRM Software</span>
//                     </h1>
//                     <p
//                         className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0"
//                     >
//                         Transform your HR operations with our comprehensive human resource management system. From recruitment to retirement, manage your entire employee lifecycle with ease.
//                     </p>

//                     <div className='mt-6 space-y-3'>
//                         <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
//                             <Image src="/icons/active_orange.png" alt="icon" width={23} height={23} /> Employee Database & Profile Management
//                         </div>
//                         <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
//                             <Image src="/icons/active_orange.png" alt="icon" width={23} height={23} /> Payroll Processing & Tax Calculations
//                         </div>
//                         <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
//                             <Image src="/icons/active_orange.png" alt="icon" width={23} height={23} /> Attendance & Leave Management
//                         </div>
//                         <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
//                             <Image src="/icons/active_orange.png" alt="icon" width={23} height={23} /> Performance Reviews & Goal Tracking
//                         </div>
//                         <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
//                             <Image src="/icons/active_orange.png" alt="icon" width={23} height={23} />Recruitment & Onboarding Workflows
//                         </div>
//                         <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
//                             <Image src="/icons/active_orange.png" alt="icon" width={23} height={23} /> Training & Development Programs
//                         </div>
//                     </div>
//                     <Link href='/product/hrm-product'>
//                         <button
//                             className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//                         >Learn More About HRM
//                             <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
//                                 <path d="M3.85156 9.2417H14.6338" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M9.24219 3.85059L14.6333 9.24168L9.24219 14.6328" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </Link>
//                 </div>
//                 <Image src='/product/hrm_software.png' alt='hrm_software' width={711} height={462} />
//             </div>
//         </div>
//     )
// }

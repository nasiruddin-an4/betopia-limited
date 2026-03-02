"use client";

import Container from "@/components/layout/Container";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import React from "react";
import { BiBarChart, BiGlobe, BiShield } from "react-icons/bi";
import { CgSmartphone } from "react-icons/cg";
import { FiZap } from "react-icons/fi";

export const benefitsData = [
  {
    bg: "bg-[#FF69001A]",
    title: "Powerful & Affordable",
    description:
      "Enterprise-grade features at a price that works for businesses of all sizes.",
    iconColor: "#FF6900",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M4.66674 16.3334C4.44596 16.3341 4.22951 16.2722 4.04252 16.1548C3.85553 16.0375 3.70568 15.8694 3.61038 15.6703C3.51508 15.4711 3.47825 15.249 3.50416 15.0298C3.53006 14.8105 3.61765 14.6031 3.75674 14.4317L15.3067 2.53169C15.3934 2.43169 15.5114 2.36411 15.6416 2.34005C15.7717 2.31599 15.9061 2.33688 16.0228 2.39928C16.1394 2.46169 16.2314 2.56191 16.2836 2.68349C16.3358 2.80507 16.3452 2.94078 16.3101 3.06836L14.0701 10.0917C14.004 10.2685 13.9818 10.4586 14.0054 10.6459C14.029 10.8331 14.0977 11.0118 14.2055 11.1667C14.3133 11.3216 14.4571 11.448 14.6246 11.535C14.792 11.6221 14.978 11.6673 15.1667 11.6667H23.3334C23.5542 11.6659 23.7706 11.7278 23.9576 11.8452C24.1446 11.9626 24.2945 12.1306 24.3898 12.3298C24.4851 12.5289 24.5219 12.751 24.496 12.9703C24.4701 13.1895 24.3825 13.3969 24.2434 13.5684L12.6934 25.4684C12.6068 25.5684 12.4887 25.6359 12.3586 25.66C12.2285 25.6841 12.0941 25.6632 11.9774 25.6008C11.8607 25.5384 11.7687 25.4381 11.7165 25.3166C11.6643 25.195 11.655 25.0593 11.6901 24.9317L13.9301 17.9084C13.9961 17.7316 14.0183 17.5414 13.9947 17.3542C13.9711 17.167 13.9025 16.9882 13.7946 16.8334C13.6868 16.6785 13.543 16.5521 13.3756 16.465C13.2082 16.3779 13.0221 16.3327 12.8334 16.3334H4.66674Z"
          stroke="#FF6900"
          strokeWidth="2.31022"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    bg: "bg-[#2B7FFF1A]",
    title: "Solid Integration",
    description: "Seamlessly connect with your existing tools and workflows.",
    iconColor: "#2B7FFF",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M23.1028 15.0164C23.1028 20.792 19.06 23.6797 14.2547 25.3547C14.0031 25.4399 13.7298 25.4358 13.4808 25.3431C8.66398 23.6797 4.62109 20.792 4.62109 15.0164V6.93065C4.62109 6.6243 4.74279 6.33049 4.95942 6.11386C5.17604 5.89724 5.46985 5.77554 5.7762 5.77554C8.08642 5.77554 10.9742 4.38941 12.9841 2.63364C13.2288 2.42457 13.5401 2.30969 13.862 2.30969C14.1838 2.30969 14.4951 2.42457 14.7399 2.63364C16.7613 4.40096 19.6375 5.77554 21.9477 5.77554C22.2541 5.77554 22.5479 5.89724 22.7645 6.11386C22.9812 6.33049 23.1028 6.6243 23.1028 6.93065V15.0164Z"
          stroke="#2B7FFF"
          strokeWidth="2.31022"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    bg: "bg-[#00C9501A]",
    title: "Business Connectivity",
    description:
      "Keep your team connected and collaborative across all platforms.",
    iconColor: "#2DB67C",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M18.4821 24.2573V21.9471C18.4821 20.7217 17.9953 19.5465 17.1288 18.68C16.2623 17.8135 15.0871 17.3267 13.8616 17.3267H6.93099C5.70557 17.3267 4.53034 17.8135 3.66384 18.68C2.79734 19.5465 2.31055 20.7217 2.31055 21.9471V24.2573"
          stroke="#2DB67C"
          strokeWidth="2.31022"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.4814 3.61328C19.4722 3.87014 20.3497 4.44873 20.9761 5.25823C21.6025 6.06773 21.9424 7.06231 21.9424 8.08587C21.9424 9.10942 21.6025 10.104 20.9761 10.9135C20.3497 11.723 19.4722 12.3016 18.4814 12.5584"
          stroke="#2DB67C"
          strokeWidth="2.31022"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.4126 24.2573V21.9471C25.4118 20.9233 25.0711 19.9288 24.4439 19.1197C23.8167 18.3106 22.9385 17.7327 21.9473 17.4768"
          stroke="#2DB67C"
          strokeWidth="2.31022"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3958 12.7062C12.9476 12.7062 15.0163 10.6376 15.0163 8.08577C15.0163 5.53397 12.9476 3.46533 10.3958 3.46533C7.84403 3.46533 5.77539 5.53397 5.77539 8.08577C5.77539 10.6376 7.84403 12.7062 10.3958 12.7062Z"
          stroke="#2DB67C"
          strokeWidth="2.31022"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

interface BenefitCardProps {
  bg: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ bg, title,  icon }: BenefitCardProps) => {
  return (
    <div
      className={`md:p-9 p-5 rounded-2xl border-2 hover:shadow-xl shadow-[#ffcd8d] border-gray-200 ${bg}`}
    >
      <div className="p-3 rounded-xl w-full bg-white flex items-center gap-3">
        {icon}
        <h5 className="text-xl xl:text-[30px]  text-[#0F172B]">{title}</h5>
      </div>
      <PageSubtitle
        text="Let's discuss how our AI, cloud, and security services can drive your digital transformation"
        className="mt-6 md:mt-10 text-[#45556C]"
      />
    </div>
  );
};

export default function UnlimitedPossibilities() {
  return (
    <div className="bg-[#fffefd]">
      <Container>
        <div className="py-10 lg:py-20 ">
          {/* <HeadingOne
            title="One Platform,"
            highlight="Unlimited Possibilities."
            center={true}
            className=""
          /> */}
           <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
         One Platform, <span className="text-[#FF9500]">Unlimited Possibilities.</span>
        </h2>

        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-16"></div>
          {/* <PageSubtitle
            text="Betopia Limited builds next-generation digital tools for business automation, workforce management, partner collaboration, and AI-driven sales. From HRM to ERP and AI-powered agents every Betopia product works seamlessly together to drive your success."
            className=" text-center text-[#45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
          /> */}

          {/*  */}

          <div className="hidden lg:flex items-center justify-center p-8">
            <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
              {/* Center Video Container */}
              <div className="relative z-10">
                <div className="w-[485px] h-[485px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <video
                    className="w-full h-full object-cover"
                    src="/videos/prodact.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </div>

                {/* Rotating Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="animate-spin-slow">
                    <h1
                      className="text-6xl font-bold fonot-roboto text-white drop-shadow-lg"
                      style={{
                        textShadow:
                          "0 0 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      Betopia
                    </h1>
                    <p
                      className="text-base text-white/90 text-center mt-1"
                      style={{
                        textShadow: "0 0 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      Product Ecosystem
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 1 - Mobile (Top) */}
              <div className="absolute top-0 right-1/4 transform translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 w-32 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
                  <CgSmartphone className="w-6 h-6 text-pink-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Mobile
                </span>
              </div>

              {/* Card 2 - Integration (Left) */}
              <div className="absolute left-30 top-1/4 bg-white rounded-2xl shadow-2xl p-6 w-32 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <BiGlobe className="w-6 h-6 text-emerald-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Integration
                </span>
              </div>

              {/* Card 3 - Analytics (Bottom Left) */}
              <div className="absolute bottom-0 left-1/5 bg-white rounded-2xl shadow-2xl p-6 w-32 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <BiBarChart className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Analytics
                </span>
              </div>

              {/* Card 4 - Security (Bottom Right) */}
              <div className="absolute bottom-0 right-1/5 bg-white rounded-2xl shadow-2xl p-6 w-32 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <BiShield className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Security
                </span>
              </div>

              {/* Card 5 - Automation (Right) */}
              <div className="absolute right-16 top-1/3 bg-white rounded-2xl shadow-2xl p-6 w-32 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                  <FiZap className="w-6 h-6 text-[#FF9500]" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Automation
                </span>
              </div>
            </div>

            <style jsx>{`
              @keyframes spin-slow {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
              }
            `}</style>
          </div>

          {/*  */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-6 lg:mt-20 ">
            {benefitsData.map((item, index) => (
              <BenefitCard key={index} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

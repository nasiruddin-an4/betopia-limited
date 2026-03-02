import Container from "@/components/layout/Container";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ModernBusinessCardProps {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  link?: string;
}

export interface ModernBusiness {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  link?: string;
}

export const modernBusinessesData: ModernBusiness[] = [
  {
    badge: "Most Popular",
    badgeColor: "#FF6900",
    title: "Betopia - HRM Software",
    link: "/product/hrm-product",
    description: "Smart HR management system for modern organizations.",
  },
  {
    badge: "New",
    badgeColor: "#2DB67C",
    title: "Betopia ERP",
    link: "/product/erp-product",
    description:
      "All-in-one enterprise resource planning platform for efficiency and growth.",
  },
  {
    badge: "Popular",
    badgeColor: "#FF9500",
    title: "Betopia Voting App",
    link: "/product/voting-count-trust",
    description:
      "Secure and transparent digital voting solution for organizations and communities.",
  },
  {
    badge: "Essential",
    badgeColor: "#F6339A",
    title: "Betopia Agentic AI",
    link: "https://agenticai.betopialimited.com/",
    description:
      "AI-powered agent that automates sales, negotiation, and customer engagement.",
  },
  {
    badge: "Essential",
    badgeColor: "#F6339A",
    title: "Talkora AI",
    link: "https://talkoraai.com/",
    description:
      "AI that answers, understands, and manages your business calls 24/7. Never miss an opportunity with intelligent call handling.",
  },
];

const ModernBusinessCard: React.FC<ModernBusinessCardProps> = ({
  badge,
  badgeColor,
  title,
  description,
  link,
}) => {
  return (
    <div className="relative p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-105">
      <Image
        className="absolute top-0 right-0"
        src="/one_fourth_shadow.png"
        alt="shadow"
        width={147}
        height={147}
      />

      <div className="flex items-center justify-between">
        <p
          className="text-xs lg:text-sm text-white font-normal  w-fit px-3 py-1 rounded-2xl"
          style={{ backgroundColor: badgeColor }}
        >
          {badge}
        </p>

         {link && (
          <Link href={link} className="cursor-pointer z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                d="M4.81348 11.551H18.2898"
                stroke="#90A1B9"
                strokeWidth="1.92518"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5508 4.81299L18.2889 11.5511L11.5508 18.2893"
                stroke="#90A1B9"
                strokeWidth="1.92518"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>

      <h5 className="text-xl xl:text-[30px] text-[#0F172B] my-7">
        {title}
      </h5>
 <PageSubtitle
          text={description}
          className="text-[#45556C]"
        />

    </div>
  );
};

export default function ModernBusinesses() {
  return (
    <div className="bg-[#fffefd]">
      <Container>

      <div className="pb-10 lg:pb-20 ">
            {/* <HeadingOne
            title="All-in-One Ecosystem for"
            highlight="Modern Businesses"
            center={true}
            className=""
          /> */}
 <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
          All-in-One Ecosystem for <span className="text-[#FF9500]">Modern Businesses</span>
        </h2>

        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-16"></div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {modernBusinessesData.map((item, index) => (
            <ModernBusinessCard key={index} {...item} />
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
}

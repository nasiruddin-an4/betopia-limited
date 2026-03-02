"use client";
import Link from "next/link";
import React from "react"; 
import { BiGlobe, BiShieldAlt } from "react-icons/bi";
import { GoZap } from "react-icons/go";

const fadeIn = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const fadeRight = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PartnershipProgram() {
  return (
    <div className="pt-16 max-w-[1660px] mx-auto px-4 lg:px-4">
      <div className="flex items-center justify-between ">
        <div className=" ">
          {/* Title */}
          <h2 className="text-2xl  lg:text-4xl font-bold text-[#45556C] mb-4">
            Partnership Program
          </h2>
          <div className="w-20 h-1 bg-[#FF9500]  mb-6"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
        <div 
          className="relative  h-[409px]"
        >
          {/* 1st */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            src="/videos/home/white-label.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
            <h4
              className=" font-semibold text-white 
          text-2xl md:text-3xl lg:text-[52px] leading-24"
            >
              White-Label Partnership
            </h4>

            <p className="mt-1 text-base md:text-xl lg:text-2xl font-normal  text-[#ffffff] max-w-[1100px] px-2 sm:px-4">
              Rebrand and resell Betopia&apos;s enterprise solutions as your own
            </p>

            <Link
              href="https://white-label.betopialimited.com" target="_blank"
              className="text-2xl text-[#FF9500] font-normal flex items-center justify-center gap-2 mt-3"
            >
              Explore Partnership
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M7.3085 17.541H27.7719"
                  stroke="#FF9500"
                  strokeWidth="2.92334"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5412 7.30469L27.7729 17.5364L17.5412 27.7681"
                  stroke="#FF9500"
                  strokeWidth="2.92334"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* 2nd */}

        <div 
          className="relative  h-[409px]"
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            src="/videos/home/co-banded.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
            <h4
              className=" font-semibold text-white 
          text-2xl md:text-3xl lg:text-[52px] leading-24"
            >
              Co-Branded Partnership
            </h4>

            <p className="mt-1 text-base md:text-xl lg:text-2xl font-normal  text-[#ffffff] max-w-[1100px] px-2 sm:px-4">
              Joint market solutions combining both brands for mutual growth
            </p>

            <Link
              href="https://co-branded.betopialimited.com" target="_blank"
              className="text-2xl text-[#FF9500] font-normal flex items-center justify-center gap-2 mt-3"
            >
              Explore Partnership
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M7.3085 17.541H27.7719"
                  stroke="#FF9500"
                  strokeWidth="2.92334"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5412 7.30469L27.7729 17.5364L17.5412 27.7681"
                  stroke="#FF9500"
                  strokeWidth="2.92334"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

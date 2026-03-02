"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs"; 

const fadeleft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const OptionalProductSection = () => {
  return (
    <div className="min-h-screen py-12 px-8 lg:px-0 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-20">
        <div 
        >
          <h2 className="text-2xl lg:text-[42px] font-medium text-black">
            Unified Business Intelligence & <br />
            <span className="text-[#FF9500]">Management Solutions</span>
          </h2>
        </div>
        <div 
        >
          <p className="text-xl lg:text-2xl text-[#1F1F1F] text-justify font-normal">
            Betopia Limited builds secure, cloud-native, and AI-ready enterprise
            platforms designed to solve real business challenges. Our products
            are trusted by organizations across industries to automate
            operations, ensure compliance, and enable data-driven growth.
          </p>
        </div>
      </div>
      <div className="">
        {/* Main container - flex column for two rows */}
        <div className="relative flex flex-col h-[1080px] md:h-[1200px] lg:h-[620px]">
          {/* Top Row: Card 1 & Card 2 */}
          <div className="relative flex-1">
            {/* 1. Top Left - Voting */}
            <div 
            >
              <div className="absolute top-0 left-0 w-[780px] lg:w-[820px] h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/product/hrm-2.png"
                  alt="Voting System Dashboard"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"> */}
                  <div className="absolute bottom-10 left-10">
                    <h2 className="text-black bg-white/30 px-10 py-5 rounded-2xl text-3xl lg:text-4xl font-bold">
                      Voting & Election Management System
                    </h2>
                  {/* </div> */}
                </div>
              </div>
            </div>

            {/* 2. Top Right - ERP */}
            <div 
            >
              <div className="absolute top-0 right-0 w-[550px] lg:w-[600px] h-[550px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/product/image 36 (2).png"
                  alt="ERP Dashboard"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"> */}
                  <div className="absolute bottom-10 left-10">
                    <h2 className="text-black bg-white/30 px-10 py-5 rounded-2xl text-3xl lg:text-4xl font-bold">
                      ERP Management System
                    </h2>
                  {/* </div> */}
                </div>
              </div>
            </div>

            {/* Center Button - এখন bottom row-এর relative parent-এ আছে → ৪টা কার্ড perfectly center করে রাখবে */}
            <button className="absolute z-20 -bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF9500] hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-[#FF9500]/50 transition-all duration-300 flex items-center gap-3 group">
              Explore More
              <BsArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
        {/* Bottom Row: Card 3 & Card 4 + Center Button */}
        <div className="relative flex  gap-5 -mt-20">
          {/* 3. Bottom Left - HR */}
          <div 
          >
            <div className=" relative w-[550px] lg:w-[600px] h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/product/image 37 (1).png"
                alt="HR Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-5">
                <h2 className="text-black bg-white/30 px-5 py-5 rounded-2xl text-3xl lg:text-4xl font-bold">
                  Smarter HR, Simpler workflows
                </h2>
              </div>
            </div>
          </div>

          {/* 4. Bottom Right - Voting */}
          <div 
          >
            <div className="mt-20 relative w-[780px] lg:w-[820px] h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/product/MacBook.png"
                alt="Voting System Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10">
                <h2 className="text-white bg-white/30 px-5 py-5 rounded-2xl text-3xl lg:text-4xl font-bold">
                  Voting & Election Management System
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalProductSection;

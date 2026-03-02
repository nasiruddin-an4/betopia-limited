"use client";
import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Link from "next/link";
import React from "react";

export default function ProductCTA() {
  return (
    <div className="bg-linear-to-r from-[#FF9500] to-[#F54900]">
         <Container>
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
         Ready to Transform Your Business?
        </h2>
        <PageSubtitle
          text=" Join thousands of businesses already using Betopia&apos;s
            intelligent product ecosystem. Start your free trial today and
            experience the difference."
          className="mt-6 md:mt-7 text-[#FFFFFFE5] max-w-[700px] mx-auto text-center"
        />
   <div className="flex flex-col sm:flex-row items-center justify-center 2xl:justify-start gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
            {/* <Link href="">
              <button className="bg-[#ffffff]   text-[#F54900] cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
                Submit Your Resume
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#F54900"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </button>
            </Link> */}
            <Link href="/contact">
              <button className="hover:bg-[#ffffff] bg-white text-[#FF9500]  cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
                Contact HR Team
              </button>
            </Link>
          </div>
      </div>
      </Container>
   
    </div>
  );
}

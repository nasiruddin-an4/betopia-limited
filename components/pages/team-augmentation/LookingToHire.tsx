import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LookingToHire() {
  return (
    <div className="bg-[#FFF7ED]">
      <div className="max-w-[1480px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h6 className="w-fit text-xs md:text-sm lg:text-base text-[#FF9500] mb-4  px-5 py-2 rounded-3xl bg-[#FFD6A8] border border-[#FF9500]">
            🚀 GET STARTED TODAY
          </h6>
          <h1
            className=" font-normal text-balck 
          text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
          >
            Looking to Hire <br />{" "}
            <span className="text-[#FF9500]">Top Developers?</span>
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0">
            Connect with us today and get matched with world-class software
            engineers who can help you build exceptional products.{" "}
          </p>
          <Link href="/contact">
            <button className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
              Schedule a Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M3.85156 9.2417H14.6338"
                  stroke="white"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.24219 3.85059L14.6333 9.24168L9.24219 14.6328"
                  stroke="white"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <Image
          src="/team-augmentation/hiring.png"
          alt="hiring"
          width={711}
          height={474}
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function BuildTheFuture() {
  return (
    <div className="pb-10">
      <div className="relative w-11/12 px-4 rounded-3xl max-w-[1440px] mx-auto h-[500px] overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/life.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
          <h6 className="text-xs md:text-sm lg:text-base mb-4  px-5 py-2 rounded-3xl bg-[#FF690033] border border-[#FF9500]">
            Join Our Team
          </h6>

          <h1
            className=" font-normal text-white 
          text-2xl md:text-5xl lg:text-[52px] lg:leading-16"
          >
            Build the future with <br />
            <span className="text-[#FF9500]">Betopia</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-[800px] px-2 sm:px-4">
            Join a team of passionate innovators creating the next generation of
            infrastructure solutions. Your journey to limitless growth starts
            here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8">
            <Link href="/contact">
              <button className="bg-linear-to-r from-[#FF9500] to-[#F54900]  cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                >
                  <path
                    d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523"
                    stroke="white"
                    strokeWidth="1.54031"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
            {/* <Link href='/contact'>
                        <button
                            className="hover:bg-[#FF9500] bg-white text-[#FF9500] hover:text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

                        >
                           Get in Touch
                        </button>
                    </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'
import { FiUsers } from 'react-icons/fi';

export default function HeroSection() {
    return (
        <div className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/augmentation/augmentation.mp4"
                autoPlay
                loop
                muted
                playsInline
            />


            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col mt-18 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#FFFFFF4D] bg-[#FFFFFF33] text-white ">
                    <FiUsers className="w-5 h-5 text-white" strokeWidth={1.5} />
                    <span className="md:text-lg font-semibold tracking-wide">
                    Resource Augmentation Services
                    </span>
                </button>
                <h1 className=' font-semibold text-white mt-4
                    text-2xl sm:text-4xl md:text-5xl lg:text-[64px] md:leading-15'>
                    Scale Your Enterprise Teams <br/>
                    <span className=" font-semibold text-[#FF9500] text-2xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[64px] ">
                        Instantly with Betopia
                    </span>
                </h1>

                <p className="mt-4 sm:mt-6 text-lg md:text-2xl text-[#CAD5E2] max-w-[1000px] px-2 sm:px-4">
                    Access certified, enterprise-ready talent in Cloud, AI, Cybersecurity, and Software <br/> Development—embedded directly into your projects for fast, measurable results.
                </p>

                <div className="mt-8 flex justify-center mb-6">

                    <button
                     onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="
                        inline-flex items-center gap-2
                        rounded-md px-14 py-4
                         font-semibold text-[#FF9500]
                        bg-white
                        shadow-lg transition-all duration-300
                        hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer
                        "
                    >
                        Request Talent Now
                        <span>    <svg
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
              </svg></span>
                    </button>

                </div>
            </div>
        </div>
    )
}

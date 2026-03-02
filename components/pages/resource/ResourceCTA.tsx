"use client"
import { FaArrowRight } from "react-icons/fa";

export default function ResourceCTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <div className="py-10 md:py-23.25 flex flex-col items-center px-4 md:px-0">
        <h2 className="text-white text-2xl md:text-[36px] font-semibold text-center md:text-4xl lg:text-[56px]">
         Accelerate Your Projects with <br /> Enterprise-Grade Talent
        </h2>

        <p className="mt-6 text-white text-lg md:text-2xl max-w-[700px] mx-auto text-center">
        Don&apos;t let talent gaps slow down your innovation. Get certified professionals deployed in weeks, not months.
        </p>

          <button
           onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-9.25 inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-[10px] cursor-pointer
             transition"
          >
            Request Your Dedicated Team Today
            <span className="text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#FF9500"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

      </div>
    </section>
  );
}

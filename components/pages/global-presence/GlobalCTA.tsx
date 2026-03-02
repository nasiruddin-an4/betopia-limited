import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const GlobalCTA = () => {
  return (
   <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4">
      <div className="py-10 lg:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-[28px] md:text-4xl lg:text-[52px] text-center font-bold ">
     Partner with BETOPIA Limited
        </h2>

        <p className="mt-6 md:mt-7 text-[#FFFFFFE5] text-lg md:text-xl xl:text-2xl lg:w-[50%] mx-auto text-center px-4">
      Whether expanding into new markets or strengthening existing operations, BETOPIA Limited is ready to support growth with a globally connected delivery model and trusted partnerships.
        </p>
        <Link href="/meeting-scheduler">
          <button
            className="mt-9.25 inline-flex cursor-pointer  items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl cursor-pointer
             transition"
          >
          Book a Consultation
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
        </Link>
      </div>
    </section>
  )
}

export default GlobalCTA

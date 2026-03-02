"use client";

import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { LuRocket } from "react-icons/lu";

export default function ResourceForm() {
  return (
    <section
      id="request-form"
      className="relative flex items-center justify-center py-10 md:py-20 px-4 overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/partner/form.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-[963px] w-full text-white">
        <div className="w-[168px] mx-auto mb-3 rounded-full bg-[#FFFFFF33] px-4 py-1  font-semibold text-white">
          Get Started Today
        </div>
        {/* Title */}
        <UnderlineSectionTitle
          title="Ready to Scale Your Enterprise Teams?"
          wrapperClassName="mb-[18px] md:mb-[37px] text-center text-white"
        />
        <p className="text-white/80 text-center text-lg md:text-2xl mb-[55px]">
          Fill out the form below and our team will contact you within 24 hours
        </p>
        {/* Form Card */}
        <div className="mt-12 rounded-2xl border-[1.16px] border-[#FFFFFF33] bg-[#FFFFFF1A] backdrop-blur-xl p-6 md:p-[38px] ">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className=" text-white text-lg md:text-2xl">Name *</label>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            {/* Company */}
            <div>
              <label className=" text-white text-lg md:text-2xl">
                Company *
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            {/* Email */}
            <div>
              <label className=" text-white text-lg md:text-2xl">Email *</label>
              <input
                type="email"
                placeholder="your.email@company.com"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className=" text-white text-lg md:text-2xl">Phone *</label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>
            {/* Resource Person */}
            <div>
              <label className=" text-white text-lg md:text-2xl">
                Resource Person *
              </label>

              <input
                type="number"
                  min="1"
                placeholder="How many resource person you need"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>
            {/* timeline  */}
            <div>
              <label className=" text-white text-lg md:text-2xl">
                Timeline*
              </label>
              <input
                type="tel"
                placeholder="How many days or months (e.g. 6 month)"
                className="mt-2 w-full  rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>
            {/* Comments */}
            <div className="md:col-span-2">
              <label className=" text-white text-lg md:text-2xl">
                Team Requirements *
              </label>
              <textarea
                rows={4}
                placeholder="Talent that you want (e.g. Full-stack, Frontend)"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-lg  text-white placeholder-gray-400 focus:outline-none
                focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center  md:col-span-2">
              <button
                className="w-full md:w-[434px] flex items-center justify-center gap-3 font-semibold text-lg 
    bg-linear-to-r from-[#FF9500] to-[#F54900] cursor-pointer
    px-4 py-2 md:py-4 md:px-6 rounded-[10px]"
              >
                Get My Team Now <LuRocket />
              </button>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-[19px] mt-4 w-full md:col-span-2">
              <button 
                className="w-full flex items-center justify-center gap-3 font-bold lg:text-[21px]
    bg-linear-to-r from-[#FF9500] to-[#FF8000]
    px-4 py-2 md:py-4 md:px-6 rounded-[10px]"
              >
                Apply Now & Start Earning <svg
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
              </button>

              <Link
                href="/meeting-scheduler"
                className="w-full flex items-center justify-center gap-3 font-bold lg:text-[21px]
    bg-white/10 border-[2.31px] border-white/20
    px-4 py-2 md:py-4 md:px-6 rounded-[10px]"
              >
                <FiPhone /> Schedule a 1:1 Consultation
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
}

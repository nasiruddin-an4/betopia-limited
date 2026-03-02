"use client";

import Container from "@/components/layout/Container";
import { BiCloudDownload } from "react-icons/bi";

export default function ContactPage() {
  return (
    <section className=" bg-white py-10 md:py-30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-[95px] overflow-hidden ">
          {/* Left */}
          <div className="relative hidden lg:block h-[1394px] w-[730.97px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/contact.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right */}
          <div className="bg-white md:px-20 md:flex flex-col justify-center">
            <h2
              className="w-[105px] text-xs md:text-base font-medium text-[#1AA37A] bg-[#E9FBF6] px-2.5 py-[5px] 
          rounded-[5px] "
            >
              Contact us
            </h2>

            <h1 className="text-3xl md:text-[56px] leading-[78px] font-bold text-[#070A0E] py-4">
              Become a Partner
            </h1>

            <p className="text-[#4A4C4F] text-sm md:text-[21px] mb-[38px]">
             Our clients achieve the best outcomes when our team works as a dedicated, long-term technology partner, fully aligned with their business goals.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-[30px]">
                <label className="text-xs md:text-base text-[#070A0E]">
                  First name <span className="text-[#BE2F33]">*</span>
                </label>
                <input
                  placeholder="Enter your first name"
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB]  px-[17px] py-[15px] text-sm focus:border-[#1DB487] 
                outline-none"
                />
              </div>

              <div className="mb-[30px]">
                <label className="text-xs md:text-base text-[#070A0E]">
                  Last name <span className="text-[#BE2F33]">*</span>
                </label>
                <input
                  placeholder="Enter your last name"
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB]  px-[17px] py-[15px] text-sm focus:border-[#1DB487] 
                outline-none"
                />
              </div>

              <div className="mb-[30px]">
                <label className="text-xs md:text-base text-[#070A0E]">
                  Business email <span className="text-[#BE2F33]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your business email address"
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB]  px-[17px] py-[15px] text-sm focus:border-[#1DB487] 
                outline-none"
                />
              </div>

              <div className="mb-[30px]">
                <label className="text-xs md:text-base text-[#070A0E]">
                  Job title <span className="text-[#BE2F33]">*</span>
                </label>
                <input
                  placeholder=" Enter your job title"
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB]  px-[17px] py-[15px] text-sm focus:border-[#1DB487] 
                outline-none"
                />
              </div>

              <div className="mb-[30px]">
                <label className="text-xs md:text-base text-[#070A0E]">
                  Company name <span className="text-[#BE2F33]">*</span>
                </label>
                <input
                  placeholder=" Enter your company name"
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB]  px-[17px] py-[15px] text-sm focus:border-[#1DB487] 
                outline-none"
                />
              </div>

              <div className="mb-[30px]">
                <label className="text-xs md:text-base text-[#070A0E]">
                  Your website <span className="text-[#BE2F33]">*</span>
                </label>
                <input
                  placeholder=" Enter your website URL"
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB]  px-[17px] py-[15px] text-sm focus:border-[#1DB487] 
                outline-none"
                />
              </div>

              <div className="md:col-span-2 mb-[30px] ">
              <label className="text-xs md:text-base text-[#070A0E]">
               How did you hear about us?
              </label>
                <select
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB]  px-[17px] py-[15px] text-sm focus:border-[#1DB487] 
                outline-none"
                >
                  <option>Select an option</option>
                </select>
              </div>
              <div className="mb-[30px] w-full relative md:col-span-2 ">
                 <label className="text-xs md:text-base text-[#070A0E]">
               Attachment (Optional)
              </label>
                <input
                  placeholder=" Upload a file (RFP, requirements, or documents)"
                  className="mt-2.5 w-full border-[1.17px] border-[#DADADB] px-[17px] pr-12 py-[15px] text-sm
      focus:border-[#1DB487] outline-none"
                />

                <BiCloudDownload
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#DADADB] text-xl pointer-events-none"
                />
              </div>
              <div className="md:col-span-2 mb-[30px]">
                <label className="text-xs md:text-base text-[#070A0E] ">
                Message
              </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your project, requirements, or objectives"
                  className="mt-2.5 w-full md:h-[180px] border-[1.17px] border-[#DADADB] px-[17px] pr-12 py-[15px] text-sm
      focus:border-[#1DB487] outline-none"
                />
              </div>

              <div className="md:col-span-2 flex items-center gap-2 text-xs md:text-base mb-[30px]">
                <input type="checkbox" className="accent-[#1DB487]" />
                <span>
                  I agree to the{" "}
                  <a className="text-[#1DB487] ">Privacy Policy</a>
                </span>
              </div>

              <div className="md:col-span-2">
                <button className="w-full h-[58px] bg-linear-to-r from-[#FF9500] to-[#F54900] text-white py-3 text-semibols text-sm md:text-lg transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

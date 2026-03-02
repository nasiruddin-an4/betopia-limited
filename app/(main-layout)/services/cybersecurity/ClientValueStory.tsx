import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import React from "react";

export default function ClientValueStory() {
  return (
    <div className="bg-[#00D4921A] relative py-10">
      <Image
        src="/service/green_shade_2.png"
        alt="top_right_shade"
        width={531}
        height={531}
        className="absolute top-0 right-0 rounded-t-lg"
      />
      <Image
        src="/service/green_shade_1.png"
        alt="top_right_shade"
        width={531}
        height={531}
        className="absolute bottom-0 left-0 rounded-t-lg"
      />
      <h2 className="text-[28px] md:text-[32px] lg:text-[52px] text-center font-bold text-[#45556C] mb-4">
        Client Value Story
      </h2>
      <div className="w-20 h-1 bg-[#9810FA] mx-auto  mb-8 md:mb-10"></div>
      <div className="w-[88vw] md:max-w-[1182px] mx-auto bg-white rounded-lg p-5 md:p-[75px] shadow-xl relative">
        <div className="w-[55px] h-[55px] bg-linear-to-r from-[#2B7FFF]  to-[#AD46FF] rounded-2xl absolute -top-4 -left-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <path
              d="M24.6451 4.62085C23.828 4.62085 23.0445 4.94541 22.4667 5.52314C21.889 6.10087 21.5645 6.88444 21.5645 7.70148V16.9434C21.5645 17.7604 21.889 18.544 22.4667 19.1217C23.0445 19.6994 23.828 20.024 24.6451 20.024C25.0536 20.024 25.4454 20.1863 25.7342 20.4751C26.0231 20.764 26.1854 21.1558 26.1854 21.5643V23.1046C26.1854 23.9216 25.8608 24.7052 25.2831 25.2829C24.7054 25.8607 23.9218 26.1852 23.1048 26.1852C22.6962 26.1852 22.3045 26.3475 22.0156 26.6364C21.7267 26.9252 21.5645 27.317 21.5645 27.7255V30.8062C21.5645 31.2147 21.7267 31.6065 22.0156 31.8953C22.3045 32.1842 22.6962 32.3465 23.1048 32.3465C25.5559 32.3465 27.9066 31.3728 29.6398 29.6396C31.3729 27.9064 32.3466 25.5557 32.3466 23.1046V7.70148C32.3466 6.88444 32.0221 6.10087 31.4443 5.52314C30.8666 4.94541 30.083 4.62085 29.266 4.62085H24.6451Z"
              stroke="white"
              strokeWidth="3.08063"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.70172 4.62085C6.88469 4.62085 6.10112 4.94541 5.52339 5.52314C4.94566 6.10087 4.62109 6.88444 4.62109 7.70148V16.9434C4.62109 17.7604 4.94566 18.544 5.52339 19.1217C6.10112 19.6994 6.88469 20.024 7.70172 20.024C8.11024 20.024 8.50202 20.1863 8.79088 20.4751C9.07975 20.764 9.24203 21.1558 9.24203 21.5643V23.1046C9.24203 23.9216 8.91747 24.7052 8.33974 25.2829C7.76201 25.8607 6.97844 26.1852 6.16141 26.1852C5.75289 26.1852 5.36111 26.3475 5.07224 26.6364C4.78338 26.9252 4.62109 27.317 4.62109 27.7255V30.8062C4.62109 31.2147 4.78338 31.6065 5.07224 31.8953C5.36111 32.1842 5.75289 32.3465 6.16141 32.3465C8.6125 32.3465 10.9632 31.3728 12.6964 29.6396C14.4296 27.9064 15.4033 25.5557 15.4033 23.1046V7.70148C15.4033 6.88444 15.0787 6.10087 14.501 5.52314C13.9233 4.94541 13.1397 4.62085 12.3227 4.62085H7.70172Z"
              stroke="white"
              strokeWidth="3.08063"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Image
          src="/service/top_right_shade.png"
          alt="top_right_shade"
          width={147}
          height={147}
          className="absolute top-0 right-0 rounded-t-lg"
        />
        <h3 className="text-xl xl:text-[36px] font-bold z-10 mt-5">
          “Our code and systems are secure from day one, meeting the toughest
          compliance standards, protecting your data, customers, and
          reputation.”
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10 pb-12 border-b-[1px] border-gray-200">
          {/*  */}
          <div className="p-7 space-y-3 bg-[#F9FAFB] rounded-xl border-[1px] border-[#F3F4F6]">
            <div className="w-[55px] h-[55px] bg-linear-to-r from-[#00C950]  to-[#00BC7D] rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M23.1048 15.0167C23.1048 20.7929 19.0615 23.681 14.2558 25.356C14.0041 25.4413 13.7307 25.4372 13.4817 25.3445C8.66442 23.681 4.62109 20.7929 4.62109 15.0167V6.93005C4.62109 6.62366 4.74281 6.32983 4.95945 6.11318C5.1761 5.89653 5.46994 5.77482 5.77633 5.77482C8.0868 5.77482 10.9749 4.38854 12.985 2.63258C13.2297 2.42348 13.5411 2.30859 13.863 2.30859C14.1849 2.30859 14.4962 2.42348 14.7409 2.63258C16.7626 4.40009 19.6391 5.77482 21.9496 5.77482C22.256 5.77482 22.5498 5.89653 22.7665 6.11318C22.9831 6.32983 23.1048 6.62366 23.1048 6.93005V15.0167Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              Compliance Ready
            </h6>
              <PageSubtitle
              text="Automated regulatory frameworks"
              className=" text-[#4A5565]"
            />

          </div>
          {/*  */}
          <div className="p-7 space-y-3 bg-[#F9FAFB] rounded-xl border-[1px] border-[#F3F4F6]">
            <div className="w-[55px] h-[55px] bg-linear-to-r from-[#00BC7D]  to-[#2B7FFF] rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M17.3287 2.30859H6.93156C6.31879 2.30859 5.73111 2.55202 5.29781 2.98531C4.86452 3.41861 4.62109 4.00629 4.62109 4.61906V23.1028C4.62109 23.7156 4.86452 24.3033 5.29781 24.7366C5.73111 25.1699 6.31879 25.4133 6.93156 25.4133H20.7944C21.4072 25.4133 21.9948 25.1699 22.4281 24.7366C22.8614 24.3033 23.1048 23.7156 23.1048 23.1028V8.08477L17.3287 2.30859Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1738 2.30859V6.92953C16.1738 7.54231 16.4173 8.12998 16.8505 8.56328C17.2838 8.99658 17.8715 9.24 18.4843 9.24H23.1052"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3965 17.33L12.707 19.6405L17.3279 15.0195"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              Scale on Demand
            </h6>
              <PageSubtitle
              text="Auto-scaling for peak efficiency"
              className=" text-[#4A5565]"
            />

          </div>
          {/*  */}
          <div className="p-7 space-y-3 bg-[#F9FAFB] rounded-xl border-[1px] border-[#F3F4F6]">
            <div className="w-[55px] h-[55px] bg-linear-to-r from-[#2B7FFF]  to-[#AD46FF] rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M2.38276 14.2653C2.28648 14.0059 2.28648 13.7206 2.38276 13.4613C3.32046 11.1876 4.91216 9.24354 6.95606 7.87558C8.99997 6.50761 11.404 5.77734 13.8635 5.77734C16.3229 5.77734 18.727 6.50761 20.7709 7.87558C22.8148 9.24354 24.4065 11.1876 25.3442 13.4613C25.4405 13.7206 25.4405 14.0059 25.3442 14.2653C24.4065 16.539 22.8148 18.483 20.7709 19.851C18.727 21.2189 16.3229 21.9492 13.8635 21.9492C11.404 21.9492 8.99997 21.2189 6.95606 19.851C4.91216 18.483 3.32046 16.539 2.38276 14.2653Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8622 17.3298C15.7762 17.3298 17.3279 15.7782 17.3279 13.8641C17.3279 11.9501 15.7762 10.3984 13.8622 10.3984C11.9481 10.3984 10.3965 11.9501 10.3965 13.8641C10.3965 15.7782 11.9481 17.3298 13.8622 17.3298Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              24/7 Monitoring
            </h6>
              <PageSubtitle
              text="Real-time threat detection"
              className=" text-[#4A5565]"
            />

          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#00A63E]  to-[#009966] bg-clip-text text-transparent text-center font-bold text-[28px] md:text-[32px] lg:text-[52px]">
              99.99%
            </h1>
             <PageSubtitle
              text="Uptime Security"
              className="text-[#4A5565] font-bold"
            />

          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#00A63E]  to-[#009966] bg-clip-text text-transparent text-center font-bold text-[28px] md:text-[32px] lg:text-[52px]">
              100%
            </h1>
             <PageSubtitle
              text="Compliance Rate"
              className="text-[#4A5565] font-bold"
            />
 
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#00A63E]  to-[#009966] bg-clip-text text-transparent text-center font-bold text-[28px] md:text-[32px] lg:text-[52px]">
              {"<5min"}
            </h1>
             <PageSubtitle
              text="Threat Response"
              className="text-[#4A5565] font-bold"
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}

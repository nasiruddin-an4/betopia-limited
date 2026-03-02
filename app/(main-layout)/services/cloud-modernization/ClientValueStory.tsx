import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import React from "react";

export default function ClientValueStory() {
  return (
    <div className="bg-white relative py-10 lg:py-20">
      <Image
        src="/service/blue_shade.png"
        alt="top_right_shade"
        width={531}
        height={531}
        className="absolute top-0 right-0 rounded-t-lg"
      />
      <Image
        src="/service/pink_shade.png"
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
          &quot;We don&apos;t just migrate workloads — we rebuild applications
          to <br /> run faster, scale on demand, and integrate cleanly into your{" "}
          <br /> cloud ecosystem.&quot;
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10 pb-12 border-b-[1px] border-gray-200">
          {/*  */}
          <div className="p-7 space-y-3 bg-[#F9FAFB] rounded-xl border-[1px] border-[#F3F4F6]">
            <div className="w-[55px] h-[55px] bg-linear-to-r from-[#2B7FFF]  to-[#00B8DB] rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M4.6206 16.1725C4.40199 16.1732 4.18765 16.1119 4.0025 15.9957C3.81734 15.8795 3.66896 15.7131 3.57459 15.5159C3.48023 15.3187 3.44375 15.0988 3.46941 14.8817C3.49506 14.6646 3.58179 14.4592 3.71952 14.2894L15.1563 2.50604C15.2421 2.40701 15.359 2.3401 15.4879 2.31627C15.6167 2.29245 15.7498 2.31313 15.8653 2.37492C15.9809 2.43672 16.072 2.53596 16.1237 2.65634C16.1754 2.77673 16.1846 2.91112 16.1498 3.03745L13.9318 9.99196C13.8664 10.167 13.8444 10.3553 13.8678 10.5407C13.8911 10.7261 13.9591 10.9031 14.0659 11.0564C14.1727 11.2098 14.3151 11.3349 14.4808 11.4212C14.6466 11.5074 14.8308 11.5521 15.0177 11.5515H23.1044C23.323 11.5508 23.5373 11.6121 23.7225 11.7283C23.9076 11.8445 24.056 12.0109 24.1504 12.2081C24.2447 12.4053 24.2812 12.6252 24.2555 12.8423C24.2299 13.0594 24.1432 13.2648 24.0054 13.4346L12.5686 25.2179C12.4828 25.317 12.3659 25.3839 12.2371 25.4077C12.1082 25.4315 11.9751 25.4109 11.8596 25.3491C11.7441 25.2873 11.653 25.188 11.6013 25.0676C11.5496 24.9473 11.5404 24.8129 11.5751 24.6865L13.7932 17.732C13.8586 17.557 13.8805 17.3687 13.8572 17.1833C13.8338 16.9979 13.7658 16.8209 13.6591 16.6676C13.5523 16.5142 13.4099 16.3891 13.2441 16.3028C13.0783 16.2166 12.8941 16.1719 12.7072 16.1725H4.6206Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              Run Faster
            </h6>
            <PageSubtitle
              text="Performance-optimized architecture"
              className=" text-[#4A5565]"
            />
          </div>
          {/*  */}
          <div className="p-7 space-y-3 bg-[#F9FAFB] rounded-xl border-[1px] border-[#F3F4F6]">
            <div className="w-[55px] h-[55px] bg-linear-to-r from-[#AD46FF]  to-[#F6339A] rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M25.4152 8.08594L15.5957 17.9054L9.81957 12.1293L2.31055 19.6383"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4839 8.08594H25.4153V15.0173"
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
            <div className="w-[55px] h-[55px] bg-linear-to-r from-[#F6339A]  to-[#FF6900] rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M20.2166 21.9487H10.3971C8.89742 21.9483 7.42741 21.5309 6.15133 20.7432C4.87524 19.9554 3.84333 18.8283 3.17093 17.4879C2.49853 16.1474 2.21211 14.6464 2.34369 13.1525C2.47527 11.6586 3.01966 10.2308 3.91603 9.02851C4.8124 7.82623 6.02543 6.89689 7.41957 6.34433C8.81371 5.79177 10.334 5.63777 11.8107 5.89954C13.2873 6.1613 14.6621 6.82852 15.7813 7.82663C16.9006 8.82474 17.7202 10.1144 18.1487 11.5516H20.2166C21.5953 11.5516 22.9176 12.0993 23.8925 13.0742C24.8674 14.0491 25.4151 15.3714 25.4151 16.7501C25.4151 18.1289 24.8674 19.4511 23.8925 20.4261C22.9176 21.401 21.5953 21.9487 20.2166 21.9487Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              Clean Integration
            </h6>
            <PageSubtitle
              text=" Seamless cloud ecosystem sync"
              className=" text-[#4A5565]"
            />
          </div>
        </div>

        {/*  */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#155DFC]  to-[#9810FA] bg-clip-text text-transparent text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
              3x
            </h1>
            <PageSubtitle
              text="Performance Boost"
              className="text-[#4A5565] font-bold"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#155DFC]  to-[#9810FA] bg-clip-text text-transparent text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
              50%
            </h1>
            <PageSubtitle
              text="Cost Reduction"
              className="text-[#4A5565] font-bold"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#155DFC]  to-[#9810FA] bg-clip-text text-transparent text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
              99.9%
            </h1>
            <PageSubtitle
              text=" Uptime SLA"
              className="text-[#4A5565] font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

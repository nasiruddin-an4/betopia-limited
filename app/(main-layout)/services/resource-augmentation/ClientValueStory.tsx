import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import React from "react";

export default function ClientValueStory() {
  return (
    <div className="bg-[#C27AFF1A] relative py-10">
      <Image
        src="/service/pink_shade2.png"
        alt="top_right_shade"
        width={531}
        height={531}
        className="absolute top-0 right-0 rounded-t-lg"
      />
      <Image
        src="/service/pink_shade1.png"
        alt="top_right_shade"
        width={531}
        height={531}
        className="absolute bottom-0 left-0 rounded-t-lg"
      />
      <h2 className="text-[28px] md:text-[32px] lg:text-[52px] text-center font-bold text-[#45556C]  mb-4">
        Client Value Story
      </h2>
      <div className="w-20 h-1 bg-[#9810FA] mx-auto mb-8 lg:mb-10"></div>
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
          “We provide enterprise-grade professionals embedded in your programs,
          ensuring success without increasing internal hiring complexity.”
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10 pb-12 border-b-[1px] border-gray-200">
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
                  d="M13.8459 5.76917C13.8473 5.30759 13.7563 4.8504 13.5784 4.42449C13.4005 3.99858 13.1392 3.61255 12.8099 3.28909C12.4806 2.96564 12.09 2.7113 11.661 2.54103C11.2319 2.37077 10.7732 2.28801 10.3117 2.29763C9.85023 2.30725 9.39533 2.40905 8.97377 2.59704C8.55221 2.78504 8.1725 3.05544 7.85697 3.39233C7.54144 3.72922 7.29647 4.12581 7.13645 4.55877C6.97644 4.99172 6.90461 5.4523 6.92521 5.91342C6.24687 6.08784 5.61711 6.41433 5.08364 6.86817C4.55016 7.322 4.12696 7.89129 3.84607 8.5329C3.56518 9.17451 3.43398 9.87163 3.46241 10.5715C3.49083 11.2713 3.67813 11.9555 4.01012 12.5722C3.42639 13.0464 2.96737 13.6561 2.67299 14.3482C2.37861 15.0402 2.25779 15.7938 2.32104 16.5432C2.38429 17.2926 2.62969 18.0152 3.0359 18.6482C3.4421 19.2811 3.99681 19.8053 4.65176 20.1749C4.57089 20.8007 4.61915 21.4364 4.79358 22.0428C4.96801 22.6491 5.2649 23.2133 5.66591 23.7005C6.06692 24.1876 6.56354 24.5874 7.12511 24.875C7.68667 25.1627 8.30125 25.3322 8.93088 25.3731C9.56052 25.4139 10.1919 25.3253 10.7859 25.1126C11.3799 24.8999 11.924 24.5677 12.3847 24.1365C12.8453 23.7052 13.2126 23.1842 13.4639 22.6054C13.7152 22.0267 13.8453 21.4025 13.8459 20.7716V5.76917Z"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8477 5.76917C13.8463 5.30759 13.9373 4.8504 14.1152 4.42449C14.2931 3.99858 14.5544 3.61255 14.8837 3.28909C15.213 2.96564 15.6036 2.7113 16.0326 2.54103C16.4617 2.37077 16.9204 2.28801 17.3819 2.29763C17.8434 2.30725 18.2983 2.40905 18.7198 2.59704C19.1414 2.78504 19.5211 3.05544 19.8366 3.39233C20.1522 3.72922 20.3971 4.12581 20.5572 4.55877C20.7172 4.99172 20.789 5.4523 20.7684 5.91342C21.4467 6.08784 22.0765 6.41433 22.61 6.86817C23.1434 7.322 23.5666 7.89129 23.8475 8.5329C24.1284 9.17451 24.2596 9.87163 24.2312 10.5715C24.2028 11.2713 24.0155 11.9555 23.6835 12.5722C24.2672 13.0464 24.7262 13.6561 25.0206 14.3482C25.315 15.0402 25.4358 15.7938 25.3726 16.5432C25.3093 17.2926 25.0639 18.0152 24.6577 18.6482C24.2515 19.2811 23.6968 19.8053 23.0418 20.1749C23.1227 20.8007 23.0745 21.4364 22.9 22.0428C22.7256 22.6491 22.4287 23.2133 22.0277 23.7005C21.6267 24.1876 21.1301 24.5874 20.5685 24.875C20.0069 25.1627 19.3924 25.3322 18.7627 25.3731C18.1331 25.4139 17.5017 25.3253 16.9077 25.1126C16.3137 24.8999 15.7696 24.5677 15.309 24.1365C14.8483 23.7052 14.481 23.1842 14.2297 22.6054C13.9784 22.0267 13.8483 21.4025 13.8477 20.7716V5.76917Z"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.3109 15.0028C16.342 14.662 15.496 14.0415 14.8797 13.2199C14.2635 12.3982 13.9047 11.4123 13.8488 10.3867C13.7929 11.4123 13.4341 12.3982 12.8179 13.2199C12.2016 14.0415 11.3556 14.662 10.3867 15.0028"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.3086 7.50086C20.5879 7.01684 20.7459 6.4724 20.7691 5.91406"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.92578 5.91406C6.9486 6.47231 7.10619 7.01673 7.38509 7.50086"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.01172 12.5742C4.22284 12.4022 4.44875 12.2493 4.68683 12.1172"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.0098 12.1172C23.2478 12.2493 23.4738 12.4022 23.6849 12.5742"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.92232 20.7713C6.127 20.7716 5.34507 20.5665 4.65234 20.1758"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.0434 20.1758C22.3507 20.5665 21.5688 20.7716 20.7734 20.7713"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              Predictive Models
            </h6>
            <PageSubtitle
              text="AI-powered forecasting"
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
                  d="M25.3892 13.8489H22.5272C22.0229 13.8478 21.5321 14.012 21.1298 14.3163C20.7276 14.6205 20.4361 15.0482 20.2999 15.5338L17.588 25.1815C17.5705 25.2414 17.534 25.2941 17.4841 25.3315C17.4342 25.369 17.3734 25.3892 17.311 25.3892C17.2486 25.3892 17.1878 25.369 17.1379 25.3315C17.088 25.2941 17.0515 25.2414 17.034 25.1815L10.6638 2.51632C10.6463 2.45639 10.6099 2.40375 10.5599 2.3663C10.51 2.32884 10.4492 2.30859 10.3868 2.30859C10.3244 2.30859 10.2636 2.32884 10.2137 2.3663C10.1638 2.40375 10.1273 2.45639 10.1098 2.51632L7.39787 12.164C7.26223 12.6477 6.97247 13.074 6.57258 13.3781C6.17269 13.6822 5.6845 13.8475 5.18213 13.8489H2.30859"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              Real-Time Insights
            </h6>
            <PageSubtitle
              text="Live analytics dashboards"
              className=" text-[#4A5565]"
            />
          </div>
          {/*  */}
          <div className="p-7 space-y-3 bg-[#F9FAFB] rounded-xl border-[1px] border-[#F3F4F6]">
            <div className="w-[55px] h-[55px] bg-linear-to-r from-[#FF6900]  to-[#FB2C36] rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M4.61695 16.1561C4.39857 16.1568 4.18446 16.0956 3.99949 15.9795C3.81453 15.8634 3.6663 15.6972 3.57203 15.5002C3.47777 15.3032 3.44133 15.0835 3.46696 14.8666C3.49259 14.6497 3.57922 14.4446 3.71681 14.275L15.1417 2.50388C15.2274 2.40496 15.3442 2.33811 15.4729 2.31431C15.6016 2.29051 15.7346 2.31117 15.85 2.3729C15.9654 2.43463 16.0564 2.53376 16.108 2.65403C16.1597 2.77429 16.1689 2.90854 16.1342 3.03473L13.9184 9.982C13.8531 10.1569 13.8312 10.345 13.8545 10.5302C13.8778 10.7154 13.9457 10.8922 14.0524 11.0454C14.1591 11.1985 14.3013 11.3236 14.4669 11.4097C14.6325 11.4959 14.8166 11.5406 15.0032 11.5399H23.0815C23.2998 11.5392 23.5139 11.6004 23.6989 11.7165C23.8839 11.8326 24.0321 11.9988 24.1264 12.1958C24.2206 12.3928 24.2571 12.6125 24.2314 12.8294C24.2058 13.0463 24.1192 13.2514 23.9816 13.421L12.5567 25.1921C12.471 25.2911 12.3542 25.3579 12.2255 25.3817C12.0968 25.4055 11.9638 25.3848 11.8484 25.3231C11.733 25.2614 11.642 25.1622 11.5904 25.042C11.5387 24.9217 11.5295 24.7875 11.5642 24.6613L13.78 17.714C13.8453 17.5391 13.8672 17.351 13.8439 17.1658C13.8206 16.9806 13.7527 16.8038 13.646 16.6507C13.5393 16.4975 13.3971 16.3724 13.2315 16.2863C13.0659 16.2001 12.8818 16.1555 12.6952 16.1561H4.61695Z"
                  stroke="white"
                  strokeWidth="2.30806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="text-xl xl:text-[30px] text-[#101828] font-bold">
              Intelligent Automation
            </h6>
            <PageSubtitle
              text="Smart process optimization"
              className=" text-[#4A5565]"
            />
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#9810FA]  to-[#E60076] bg-clip-text text-transparent text-center font-bold text-[28px] md:text-[32px] lg:text-[52px]">
              95%
            </h1>
            <PageSubtitle
              text="Prediction Accuracy"
              className="text-[#4A5565] font-bold"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#9810FA]  to-[#E60076] bg-clip-text text-transparent text-center font-bold text-[28px] md:text-[32px] lg:text-[52px]">
              60%
            </h1>
            <PageSubtitle
              text=" Cost Savings"
              className="text-[#4A5565] font-bold"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="bg-linear-to-r from-[#9810FA]  to-[#E60076] bg-clip-text text-transparent text-center font-bold text-[28px] md:text-[32px] lg:text-[52px]">
              10x
            </h1>
            <PageSubtitle
              text="Faster Insights"
              className="text-[#4A5565] font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

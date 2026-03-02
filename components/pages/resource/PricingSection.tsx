import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="pt-10 md:pt-20 bg-white">
      <div className="max-w-[1406px] mx-auto px-4 md:px-0 text-center">
        {/* Header */}
        <div className="text-center">
          <div className="w-[155px] mx-auto mb-3 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-1  font-semibold text-white">
            Flexible Options
          </div>

          <UnderlineSectionTitle
            title="Pricing & Engagement Options"
            wrapperClassName="mb-[4px] md:mb-[55px] text-center text-[#101828]"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[60px]">
          {/* Short Term */}
          <div className="rounded-[19px] shadow-xl md:shadow-2xl transition hover:scale-[1.02]  p-6 text-left">
            <div className=" mb-4">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z"
                  fill="url(#paint0_linear_1639_7265)"
                />
                <path
                  d="M36.9656 52.3727C45.4725 52.3727 52.3688 45.4764 52.3688 36.9695C52.3688 28.4626 45.4725 21.5664 36.9656 21.5664C28.4587 21.5664 21.5625 28.4626 21.5625 36.9695C21.5625 45.4764 28.4587 52.3727 36.9656 52.3727Z"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.9688 27.7266V36.9684L43.13 40.0491"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1639_7265"
                    x1="0"
                    y1="0"
                    x2="73.935"
                    y2="73.935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9500" />
                    <stop offset="1" stopColor="#F54900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className="font-semibold md:text-[28px]">Short-Term</h3>
            <p className="text-lg md:text-2xl text-[#FF9500] my-4 font-semibold">
              3–6 months
            </p>
            <p className="text-lg md:text-2xl text-[#4A5565] mb-4">
              Ideal for pilot projects or skill gaps.
            </p>

            <ul className="space-y-2 text-lg md:text-2xl text-[#364153] mb-6">
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                Quick deployment
              </li>
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                Flexible scaling
              </li>
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                Trial-friendly
              </li>
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                No long-term commitment
              </li>
            </ul>
            <Link href="#">
              <button className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900] text-white py-3 rounded-2xl font-semibold  transition">
                Request Custom Quote
              </button>
            </Link>
          </div>

       <div className="rounded-[19px] shadow-xl md:shadow-2xl transition hover:scale-[1.02]  p-6 text-left text-white bg-linear-to-b from-[#FF9500] to-[#F54900]">
            <span className=" bg-[#FFFFFF33] text-white  font-semibold px-3 py-1 rounded-full ">
              Most Popular
            </span>

            <div className="my-4">
              <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z" fill="white" fill-opacity="0.2"/>
<path d="M52.3688 29.2656L39.2761 42.3583L31.5745 34.6567L21.5625 44.6688" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M43.125 29.2656H52.3669V38.5075" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </div>

    <h3 className="font-semibold text-xl md:text-[28px]">Long-Term</h3>
            <p className="text-lg md:text-2xl text-white my-4 font-semibold">
             6–12 months+
            </p>
            <p className="text-lg md:text-2xl text-white mb-4">
            Dedicated teams for large enterprise initiatives.
            </p>

               <ul className="space-y-2 text-lg md:text-2xl text-white mb-6">
              <li className="flex items-center gap-1"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.66406 11.5504L10.5895 13.4758L14.4402 9.625" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> Deep integration</li>
              <li className="flex items-center gap-1"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.66406 11.5504L10.5895 13.4758L14.4402 9.625" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span>  Dedicated Success Manager</li>
              <li className="flex items-center gap-1"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.66406 11.5504L10.5895 13.4758L14.4402 9.625" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span>  Priority support</li>
              <li className="flex items-center gap-1"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.66406 11.5504L10.5895 13.4758L14.4402 9.625" stroke="white" strokeWidth="1.92539" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span>  Strategic partnership</li>
            </ul>

             <Link href="#">
              <button className="w-full  text-[#FF9500]  bg-white py-3 rounded-2xl font-semibold  transition">
                Request Custom Quote
              </button>
            </Link>
          </div>


 <div className="rounded-[19px] shadow-xl md:shadow-2xl transition hover:scale-[1.02]  p-6 text-left">
            <div className=" mb-4">
              <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z" fill="url(#paint0_linear_1639_7343)"/>
<path d="M37.3069 21.5664H36.6292C35.8121 21.5664 35.0286 21.891 34.4508 22.4687C33.8731 23.0464 33.5485 23.83 33.5485 24.647V24.9243C33.548 25.4645 33.4054 25.9951 33.135 26.4628C32.8647 26.9305 32.4761 27.3189 32.0082 27.589L31.3459 27.9741C30.8776 28.2445 30.3463 28.3868 29.8056 28.3868C29.2648 28.3868 28.7336 28.2445 28.2653 27.9741L28.0342 27.8509C27.3273 27.4431 26.4875 27.3325 25.6991 27.5433C24.9107 27.7541 24.2382 28.2691 23.8292 28.9753L23.4903 29.5606C23.0825 30.2675 22.9719 31.1074 23.1827 31.8957C23.3935 32.6841 23.9085 33.3567 24.6147 33.7657L24.8458 33.9197C25.3114 34.1885 25.6985 34.5745 25.9687 35.0393C26.2389 35.504 26.3828 36.0314 26.3861 36.5691V37.3546C26.3882 37.8975 26.2469 38.4312 25.9764 38.9019C25.7059 39.3725 25.3159 39.7633 24.8458 40.0348L24.6147 40.1734C23.9085 40.5824 23.3935 41.2549 23.1827 42.0433C22.9719 42.8317 23.0825 43.6715 23.4903 44.3784L23.8292 44.9638C24.2382 45.6699 24.9107 46.185 25.6991 46.3958C26.4875 46.6066 27.3273 46.496 28.0342 46.0882L28.2653 45.965C28.7336 45.6946 29.2648 45.5522 29.8056 45.5522C30.3463 45.5522 30.8776 45.6946 31.3459 45.965L32.0082 46.35C32.4761 46.6202 32.8647 47.0085 33.135 47.4763C33.4054 47.944 33.548 48.4746 33.5485 49.0148V49.292C33.5485 50.1091 33.8731 50.8926 34.4508 51.4704C35.0286 52.0481 35.8121 52.3727 36.6292 52.3727H37.3069C38.1239 52.3727 38.9075 52.0481 39.4852 51.4704C40.063 50.8926 40.3875 50.1091 40.3875 49.292V49.0148C40.3881 48.4746 40.5307 47.944 40.801 47.4763C41.0714 47.0085 41.46 46.6202 41.9278 46.35L42.5902 45.965C43.0585 45.6946 43.5897 45.5522 44.1305 45.5522C44.6712 45.5522 45.2025 45.6946 45.6708 45.965L45.9018 46.0882C46.6087 46.496 47.4486 46.6066 48.2369 46.3958C49.0253 46.185 49.6979 45.6699 50.1069 44.9638L50.4458 44.363C50.8535 43.6561 50.9642 42.8163 50.7533 42.0279C50.5425 41.2395 50.0275 40.567 49.3213 40.158L49.0903 40.0348C48.6202 39.7633 48.2301 39.3725 47.9596 38.9019C47.6891 38.4312 47.5478 37.8975 47.55 37.3546V36.5845C47.5478 36.0416 47.6891 35.5079 47.9596 35.0372C48.2301 34.5665 48.6202 34.1757 49.0903 33.9043L49.3213 33.7657C50.0275 33.3567 50.5425 32.6841 50.7533 31.8957C50.9642 31.1074 50.8535 30.2675 50.4458 29.5606L50.1069 28.9753C49.6979 28.2691 49.0253 27.7541 48.2369 27.5433C47.4486 27.3325 46.6087 27.4431 45.9018 27.8509L45.6708 27.9741C45.2025 28.2445 44.6712 28.3868 44.1305 28.3868C43.5897 28.3868 43.0585 28.2445 42.5902 27.9741L41.9278 27.589C41.46 27.3189 41.0714 26.9305 40.801 26.4628C40.5307 25.9951 40.3881 25.4645 40.3875 24.9243V24.647C40.3875 23.83 40.063 23.0464 39.4852 22.4687C38.9075 21.891 38.1239 21.5664 37.3069 21.5664Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.9647 41.5895C39.5168 41.5895 41.5856 39.5207 41.5856 36.9686C41.5856 34.4165 39.5168 32.3477 36.9647 32.3477C34.4126 32.3477 32.3438 34.4165 32.3438 36.9686C32.3438 39.5207 34.4126 41.5895 36.9647 41.5895Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1639_7343" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF9500"/>
<stop offset="1" stopColor="#F54900"/>
</linearGradient>
</defs>
</svg>

            </div>
    <h3 className="font-semibold text-xl md:text-2xl">Custom Bundles</h3>
            <p className="text-lg md:text-2xl text-[#FF9500] my-4">
              Tailored
            </p>
            <p className="text-lg md:text-2xl text-[#4A5565] mb-4">
              Based on team size, skill set, and project complexity.
            </p>

    <ul className="space-y-2 text-lg md:text-2xl text-[#364153] mb-6">
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
               Fully customizable
              </li>
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                Mixed skill sets
              </li>
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                Hybrid engagement
              </li>
              <li className="flex items-center gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5566 21.1797C16.8735 21.1797 21.1836 16.8696 21.1836 11.5527C21.1836 6.23592 16.8735 1.92578 11.5566 1.92578C6.23982 1.92578 1.92969 6.23592 1.92969 11.5527C1.92969 16.8696 6.23982 21.1797 11.5566 21.1797Z"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 11.5504L10.5973 13.4758L14.448 9.625"
                      stroke="#FF9500"
                      strokeWidth="1.92539"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
              Enterprise pricing
              </li>
            </ul>
            <Link href="#">
              <button className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900] text-white py-3 rounded-2xl font-semibold  transition">
                Request Custom Quote
              </button>
            </Link>



          </div>
        </div>
      </div>
    </section>
  );
}

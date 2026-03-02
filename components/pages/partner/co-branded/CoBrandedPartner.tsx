import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface PartnerBenefit {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const CoBrandedPartner = () => {
  const benefits: PartnerBenefit[] = [
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 28 28" fill="none">
          <path
            d="M0 13.8693C0 6.20952 6.20952 0 13.8693 0C21.5292 0 27.7387 6.20952 27.7387 13.8693C27.7387 21.5292 21.5292 27.7387 13.8693 27.7387C6.20952 27.7387 0 21.5292 0 13.8693Z"
            fill="#FFEDD4"
          />
          <path
            d="M13.8732 21.5744C18.1286 21.5744 21.5784 18.1247 21.5784 13.8693C21.5784 9.61379 18.1286 6.16406 13.8732 6.16406C9.6177 6.16406 6.16797 9.61379 6.16797 13.8693C6.16797 18.1247 9.6177 21.5744 13.8732 21.5744Z"
            stroke="#FF9500"
            strokeWidth="1.54104"
          />
          <path
            d="M11.5625 13.8731L13.1035 15.4141L16.1856 12.332"
            stroke="#FF9500"
            strokeWidth="1.54104"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Brand Use",
      description: "Uses Betopia branding and collateral",
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 28 28" fill="none">
          <path
            d="M0 13.8693C0 6.20952 6.20952 0 13.8693 0C21.5292 0 27.7387 6.20952 27.7387 13.8693C27.7387 21.5292 21.5292 27.7387 13.8693 27.7387C6.20952 27.7387 0 21.5292 0 13.8693Z"
            fill="#FFEDD4"
          />
          <path
            d="M13.8732 21.5744C18.1286 21.5744 21.5784 18.1247 21.5784 13.8693C21.5784 9.61379 18.1286 6.16406 13.8732 6.16406C9.6177 6.16406 6.16797 9.61379 6.16797 13.8693C6.16797 18.1247 9.6177 21.5744 13.8732 21.5744Z"
            stroke="#FF9500"
            strokeWidth="1.54104"
          />
          <path
            d="M11.5625 13.8731L13.1035 15.4141L16.1856 12.332"
            stroke="#FF9500"
            strokeWidth="1.54104"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Support Provided",
      description:
        "Training, Partner Success Manager, Sales enablement, Co-branded marketing",
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 28 28" fill="none">
          <path
            d="M0 13.8693C0 6.20952 6.20952 0 13.8693 0C21.5292 0 27.7387 6.20952 27.7387 13.8693C27.7387 21.5292 21.5292 27.7387 13.8693 27.7387C6.20952 27.7387 0 21.5292 0 13.8693Z"
            fill="#FFEDD4"
          />
          <path
            d="M13.8732 21.5744C18.1286 21.5744 21.5784 18.1247 21.5784 13.8693C21.5784 9.61379 18.1286 6.16406 13.8732 6.16406C9.6177 6.16406 6.16797 9.61379 6.16797 13.8693C6.16797 18.1247 9.6177 21.5744 13.8732 21.5744Z"
            stroke="#FF9500"
            strokeWidth="1.54104"
          />
          <path
            d="M11.5625 13.8731L13.1035 15.4141L16.1856 12.332"
            stroke="#FF9500"
            strokeWidth="1.54104"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Revenue Sharing",
    },
    {
      icon: (
        <svg width="38" height="38" viewBox="0 0 28 28" fill="none">
          <path
            d="M0 13.8693C0 6.20952 6.20952 0 13.8693 0C21.5292 0 27.7387 6.20952 27.7387 13.8693C27.7387 21.5292 21.5292 27.7387 13.8693 27.7387C6.20952 27.7387 0 21.5292 0 13.8693Z"
            fill="#FFEDD4"
          />
          <path
            d="M13.8732 21.5744C18.1286 21.5744 21.5784 18.1247 21.5784 13.8693C21.5784 9.61379 18.1286 6.16406 13.8732 6.16406C9.6177 6.16406 6.16797 9.61379 6.16797 13.8693C6.16797 18.1247 9.6177 21.5744 13.8732 21.5744Z"
            stroke="#FF9500"
            strokeWidth="1.54104"
          />
          <path
            d="M11.5625 13.8731L13.1035 15.4141L16.1856 12.332"
            stroke="#FF9500"
            strokeWidth="1.54104"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Partnership Fee",
    },
  ];

  return (
    <section className="bg-linear-to-b from-[#FFF7ED] to-[#FFFFFF] pt-10">
      <div className="max-w-[1404px] w-11/12 mx-auto px-4">
        <div className="text-center">
          <h3 className="bg-linear-to-r from-[#FF9500] to-[#F54900] p-1 rounded-full text-white w-[200px] mx-auto mb-4">
            Partnership Options
          </h3>
          <h2 className="text-2xl md:text-[52px] font-bold text-[#414042]">
            Partner <span className="text-[#FF9500]"> Offerings </span>
          </h2>
          <span className="block mx-auto mt-[21px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
        </div>

        <p className="text-[#4A5565] text-center text-lg md:text-xl lg:text-2xl px-4 md:px-0 my-8">
          Choose the partnership model that best fits your business goals
        </p>

        {/* GRID — equal height columns */}
        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* Left image card */}
          <div className="overflow-hidden relative h-full">
            <div className="absolute top-6 left-8 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 z-10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8926 14.8984L19.6437 24.7526C19.6633 24.8686 19.647 24.9879 19.597 25.0944C19.547 25.201 19.4657 25.2897 19.3639 25.3488C19.2621 25.4078 19.1447 25.4344 19.0274 25.4249C18.9101 25.4155 18.7985 25.3704 18.7075 25.2958L14.5698 22.1902C14.37 22.041 14.1274 21.9604 13.8781 21.9604C13.6287 21.9604 13.3861 22.041 13.1863 22.1902L9.04169 25.2947C8.95076 25.3691 8.83927 25.4141 8.72212 25.4236C8.60496 25.4331 8.4877 25.4066 8.38598 25.3477C8.28426 25.2888 8.20292 25.2003 8.15281 25.0939C8.1027 24.9876 8.0862 24.8686 8.10551 24.7526L9.85536 14.8984"
                  stroke="#FF9500"
                  strokeWidth="2.31156"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8722 16.1818C17.7021 16.1818 20.8068 13.0771 20.8068 9.24717C20.8068 5.41726 17.7021 2.3125 13.8722 2.3125C10.0423 2.3125 6.9375 5.41726 6.9375 9.24717C6.9375 13.0771 10.0423 16.1818 13.8722 16.1818Z"
                  stroke="#FF9500"
                  strokeWidth="2.31156"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="font-semibold text-[#101828]">
                Co-Branded Partner
              </span>
            </div>

            {/* Left image card */}
            <div className="relative h-full rounded-3xl overflow-hidden px-4 lg:px-0">
              <Image
                src="/partner/co-branded/p.svg"
                alt="White label"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Right content card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col mx-4 md:mx-0">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <svg
                  width="74"
                  height="74"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 18.4925C0 8.27937 8.27936 0 18.4925 0H55.4774C65.6905 0 73.9698 8.27936 73.9698 18.4925V55.4774C73.9698 65.6905 65.6905 73.9698 55.4774 73.9698H18.4925C8.27937 73.9698 0 65.6905 0 55.4774V18.4925Z"
                    fill="url(#paint0_linear_2578_10340)"
                  />
                  <path
                    d="M42.3412 38.3555L44.6759 51.4944C44.7021 51.6491 44.6804 51.8081 44.6137 51.9501C44.547 52.0922 44.4386 52.2105 44.3029 52.2892C44.1672 52.368 44.0106 52.4034 43.8542 52.3908C43.6978 52.3782 43.549 52.3181 43.4277 52.2187L37.9108 48.0779C37.6444 47.8789 37.3209 47.7714 36.9884 47.7714C36.656 47.7714 36.3325 47.8789 36.0661 48.0779L30.54 52.2171C30.4187 52.3164 30.2701 52.3764 30.1139 52.389C29.9577 52.4016 29.8013 52.3663 29.6657 52.2878C29.5301 52.2093 29.4216 52.0912 29.3548 51.9495C29.288 51.8077 29.266 51.649 29.2917 51.4944L31.6249 38.3555"
                    stroke="white"
                    strokeWidth="3.08208"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.9845 40.0667C42.0911 40.0667 46.2307 35.927 46.2307 30.8204C46.2307 25.7139 42.0911 21.5742 36.9845 21.5742C31.878 21.5742 27.7383 25.7139 27.7383 30.8204C27.7383 35.927 31.878 40.0667 36.9845 40.0667Z"
                    stroke="white"
                    strokeWidth="3.08208"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2578_10340"
                      x1="0"
                      y1="0"
                      x2="73.9698"
                      y2="73.9698"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF9500" />
                      <stop offset="1" stopColor="#F54900" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Co-Branded Partner
                </h2>
                <p className="text-gray-500 text-lg md:text-xl">
                  Operate Under Your Own Brand
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-8 text-lg md:text-xl">
              Acts as Betopia&apos;s official sales agent, showcases
              Betopia&apos;s portfolio and services.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 text-lg md:text-xl">
                      {benefit.description}
                    </p>

                    {benefit.title === "Revenue Sharing" && (
                      <div className="inline-block bg-linear-to-r from-[#00C950] to-[#00A63E] font-semibold text-white px-3 py-1 rounded-full text-lg md:text-xl mt-2">
                        30% of project value
                      </div>
                    )}

                    {benefit.title === "Partnership Fee" && (
                      <p className="text-[#FF9500] font-semibold text-lg md:text-xl mt-1">
                        $2,000/year
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/partner/co-branded/partner-form" className="mt-auto">
              <button className="w-full cursor-pointer mt-8 bg-linear-to-r from-[#FF9500] to-[#F54900] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2">
                Become a Co-Branded Partner
                <IoIosArrowForward className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoBrandedPartner;

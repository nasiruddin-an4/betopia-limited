import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { Brain, Cloud } from "lucide-react";
import Image from "next/image";

export default function TalentCapabilities() {
  //   const cards = [
  //     {
  //       icon: (
  //         <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z" fill="url(#paint0_linear_1639_6972)"/>
  // <path d="M45.4424 47.7519H32.3497C30.3502 47.7514 28.3902 47.1949 26.6887 46.1445C24.9873 45.0942 23.6114 43.5914 22.7149 41.8041C21.8183 40.0169 21.4365 38.0155 21.6119 36.0237C21.7873 34.0318 22.5132 32.128 23.7083 30.525C24.9035 28.922 26.5209 27.6828 28.3797 26.9461C30.2386 26.2093 32.2657 26.004 34.2345 26.353C36.2034 26.7021 38.0364 27.5917 39.5287 28.9225C41.0211 30.2533 42.1139 31.9729 42.6852 33.8891H45.4424C47.2807 33.8891 49.0438 34.6193 50.3436 35.9192C51.6435 37.2191 52.3738 38.9822 52.3738 40.8205C52.3738 42.6588 51.6435 44.4218 50.3436 45.7217C49.0438 47.0216 47.2807 47.7519 45.4424 47.7519Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <defs>
  // <linearGradient id="paint0_linear_1639_6972" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
  // <stop stopColor="#FF9500"/>
  // <stop offset="1" stopColor="#F54900"/>
  // </linearGradient>
  // </defs>
  // </svg>

  //       ),
  //       title: "Cloud & DevOps",
  //       expertise: "Multi-cloud deployment, FinOps, infrastructure automation",
  //       roles: "Cloud Engineers, DevOps, Cloud Architects",
  //     },
  //     {
  //  icon: (
  //        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z" fill="url(#paint0_linear_1639_6990)"/>
  // <path d="M36.9669 26.1853C36.9687 25.5693 36.8473 24.959 36.6098 24.3906C36.3723 23.8221 36.0236 23.3068 35.5841 22.8751C35.1446 22.4434 34.6232 22.1039 34.0505 21.8767C33.4779 21.6494 32.8656 21.5389 32.2497 21.5518C31.6337 21.5646 31.0265 21.7005 30.4639 21.9514C29.9012 22.2023 29.3944 22.5633 28.9733 23.0129C28.5521 23.4626 28.2251 23.9919 28.0116 24.5698C27.798 25.1477 27.7021 25.7624 27.7296 26.3779C26.8242 26.6107 25.9837 27.0464 25.2716 27.6522C24.5596 28.2579 23.9947 29.0178 23.6198 29.8742C23.2449 30.7305 23.0698 31.661 23.1077 32.5951C23.1457 33.5291 23.3957 34.4423 23.8388 35.2655C23.0597 35.8984 22.447 36.7122 22.0541 37.6359C21.6612 38.5597 21.4999 39.5654 21.5843 40.5657C21.6687 41.5659 21.9963 42.5304 22.5385 43.3753C23.0806 44.2201 23.821 44.9196 24.6952 45.4131C24.5872 46.2483 24.6517 47.0968 24.8845 47.9061C25.1173 48.7154 25.5136 49.4685 26.0488 50.1186C26.584 50.7688 27.2469 51.3024 27.9964 51.6864C28.746 52.0704 29.5662 52.2966 30.4066 52.3511C31.247 52.4057 32.0897 52.2874 32.8826 52.0035C33.6754 51.7196 34.4017 51.2762 35.0165 50.7006C35.6312 50.125 36.1215 49.4295 36.457 48.6571C36.7924 47.8846 36.966 47.0516 36.9669 46.2094V26.1853Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M36.9688 26.1853C36.967 25.5693 37.0884 24.959 37.3258 24.3906C37.5633 23.8221 37.912 23.3068 38.3516 22.8751C38.7911 22.4434 39.3125 22.1039 39.8851 21.8767C40.4577 21.6494 41.07 21.5389 41.686 21.5518C42.3019 21.5646 42.9091 21.7005 43.4718 21.9514C44.0344 22.2023 44.5412 22.5633 44.9624 23.0129C45.3835 23.4626 45.7105 23.9919 45.9241 24.5698C46.1376 25.1477 46.2335 25.7624 46.206 26.3779C47.1114 26.6107 47.952 27.0464 48.664 27.6522C49.3761 28.2579 49.9409 29.0178 50.3158 29.8742C50.6907 30.7305 50.8658 31.661 50.8279 32.5951C50.79 33.5291 50.54 34.4423 50.0969 35.2655C50.876 35.8984 51.4886 36.7122 51.8816 37.6359C52.2745 38.5597 52.4357 39.5654 52.3513 40.5657C52.2669 41.5659 51.9394 42.5304 51.3972 43.3753C50.855 44.2201 50.1146 44.9196 49.2404 45.4131C49.3484 46.2483 49.284 47.0968 49.0512 47.9061C48.8183 48.7154 48.4221 49.4685 47.8868 50.1186C47.3516 50.7688 46.6887 51.3024 45.9392 51.6864C45.1897 52.0704 44.3694 52.2966 43.529 52.3511C42.6886 52.4057 41.846 52.2874 41.0531 52.0035C40.2602 51.7196 39.534 51.2762 38.9192 50.7006C38.3044 50.125 37.8141 49.4295 37.4787 48.6571C37.1432 47.8846 36.9697 47.0516 36.9688 46.2094V26.1853Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M41.5856 38.5089C40.2924 38.054 39.1632 37.2258 38.3407 36.1291C37.5182 35.0324 37.0393 33.7165 36.9647 32.3477C36.8901 33.7165 36.4112 35.0324 35.5887 36.1291C34.7662 37.2258 33.6369 38.054 32.3438 38.5089" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M45.5938 28.4968C45.9665 27.8508 46.1774 27.1241 46.2083 26.3789" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M27.7344 26.3789C27.7648 27.124 27.9752 27.8507 28.3474 28.4968" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M23.8438 35.2662C24.1255 35.0367 24.4271 34.8326 24.7448 34.6562" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M49.2031 34.6562C49.5209 34.8326 49.8224 35.0367 50.1042 35.2662" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M27.7329 46.2089C26.6714 46.2094 25.6277 45.9356 24.7031 45.4141" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M49.2407 45.4141C48.3161 45.9356 47.2725 46.2094 46.2109 46.2089" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <defs>
  // <linearGradient id="paint0_linear_1639_6990" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
  // <stop stopColor="#FF9500"/>
  // <stop offset="1" stopColor="#F54900"/>
  // </linearGradient>
  // </defs>
  // </svg>

  //       ),
  //       title: "AI & Data Analytics",
  //       expertise: "Predictive models, ML deployment, real-time dashboards",
  //       roles: "Data Engineers, ML Engineers, AI Specialists",
  //     },
  //     {
  //         icon: (
  //         <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z" fill="url(#paint0_linear_1639_7016)"/>
  // <path d="M49.2934 38.5066C49.2934 46.2082 43.9023 50.059 37.4946 52.2924C37.1591 52.4061 36.7946 52.4007 36.4626 52.277C30.0395 50.059 24.6484 46.2082 24.6484 38.5066V27.7244C24.6484 27.3159 24.8107 26.9241 25.0996 26.6353C25.3884 26.3464 25.7802 26.1841 26.1888 26.1841C29.2694 26.1841 33.1202 24.3358 35.8003 21.9945C36.1266 21.7157 36.5417 21.5625 36.9709 21.5625C37.4001 21.5625 37.8153 21.7157 38.1416 21.9945C40.8371 24.3512 44.6725 26.1841 47.7531 26.1841C48.1616 26.1841 48.5534 26.3464 48.8423 26.6353C49.1312 26.9241 49.2934 27.3159 49.2934 27.7244V38.5066Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <defs>
  // <linearGradient id="paint0_linear_1639_7016" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
  // <stop stopColor="#FF9500"/>
  // <stop offset="1" stopColor="#F54900"/>
  // </linearGradient>
  // </defs>
  // </svg>

  //       ),
  //       title: "Cybersecurity & Compliance",
  //       expertise: "Secure-by-design, SOC, NIST, HIPAA, PCI DSS",
  //       roles: "Security Analysts, SOC Engineers, Compliance Specialists",
  //     },
  //     {
  //       icon: (
  //        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z" fill="url(#paint0_linear_1639_7034)"/>
  // <path d="M43.125 46.2103L52.3669 36.9684L43.125 27.7266" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <path d="M30.8044 27.7266L21.5625 36.9684L30.8044 46.2103" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  // <defs>
  // <linearGradient id="paint0_linear_1639_7034" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
  // <stop stopColor="#FF9500"/>
  // <stop offset="1" stopColor="#F54900"/>
  // </linearGradient>
  // </defs>
  // </svg>

  //       ),
  //       title: "Software Development",
  //       expertise: "Enterprise apps, cloud-native apps, legacy refactoring",
  //       roles: "Full-stack Developers, Backend/Frontend Developers, QA Engineers",
  //     },
  //   ];

  return (
    <section className="py-10 md:py-20 bg-white">
      {/* Header */}
      <div className="text-center max-w-[1405px] mx-auto px-4">
        <div className="w-[168px] mx-auto mb-3 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-1  font-semibold text-white">
          Our Expertise
        </div>

        <UnderlineSectionTitle
          title="Our Talent Capabilities"
          wrapperClassName="mb-[30px] md:mb-[62px] text-center text-[#101828]"
        />
        <section className="grid lg:grid-cols-2 gap-8 ">
          {/* Cloud Image Card */}
          <div className="relative  rounded-2xl overflow-hidden ">
            <Image
              src="/augmentation/1.png"
              alt="AI Analytics"
              width={684}
              height={370}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow">
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0603 17.3295H9.24082C7.74117 17.3292 6.27116 16.9118 4.99508 16.124C3.71899 15.3363 2.68708 14.2092 2.01468 12.8687C1.34228 11.5283 1.05586 10.0272 1.18744 8.53337C1.31902 7.03951 1.86341 5.61165 2.75978 4.40937C3.65615 3.20709 4.86918 2.27774 6.26332 1.72519C7.65746 1.17263 9.1778 1.01863 10.6544 1.2804C12.1311 1.54216 13.5058 2.20938 14.6251 3.20749C15.7443 4.2056 16.564 5.49529 16.9924 6.93243H19.0603C20.4391 6.93243 21.7613 7.48013 22.7362 8.45505C23.7112 9.42997 24.2589 10.7522 24.2589 12.131C24.2589 13.5097 23.7112 14.832 22.7362 15.8069C21.7613 16.7818 20.4391 17.3295 19.0603 17.3295Z"
                  stroke="#FF9500"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className=" font-semibold">Cloud & DevOps</span>
            </div>
          </div>

          {/* Cloud Details Card */}
          <div className="bg-white rounded-2xl border border-[#F3F4F6] shadow-lg hover:shadow-xl p-6 md:p-8 flex flex-col justify-start items-start">
            <div className="flex items-center gap-3 mb-3">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z"
                  fill="url(#paint0_linear_2209_10267)"
                />
                <path
                  d="M45.4424 47.7519H32.3497C30.3502 47.7514 28.3902 47.1949 26.6887 46.1445C24.9873 45.0942 23.6114 43.5914 22.7149 41.8041C21.8183 40.0169 21.4365 38.0155 21.6119 36.0237C21.7873 34.0318 22.5132 32.128 23.7083 30.525C24.9035 28.922 26.5209 27.6828 28.3797 26.9461C30.2386 26.2093 32.2657 26.004 34.2345 26.353C36.2034 26.7021 38.0364 27.5917 39.5287 28.9225C41.0211 30.2533 42.1139 31.9729 42.6852 33.8891H45.4424C47.2807 33.8891 49.0438 34.6193 50.3436 35.9192C51.6435 37.2191 52.3738 38.9822 52.3738 40.8205C52.3738 42.6588 51.6435 44.4218 50.3436 45.7217C49.0438 47.0216 47.2807 47.7519 45.4424 47.7519Z"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2209_10267"
                    x1="0"
                    y1="0"
                    x2="73.935"
                    y2="73.935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2B7FFF" />
                    <stop offset="1" stopColor="#155DFC" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col items-start justify-start">
                <h3 className="text-xl md:text-[28px] font-semibold">
                  Cloud & DevOps
                </h3>
                <p className="text-gray-400 text-lg ">
                  Infrastructure Excellence
                </p>
              </div>
            </div>

            <h4 className="font-semibold my-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Expertise
            </h4>
            <p className="text-gray-600 mb-4 text-lg text-start">
              Multi-cloud deployment, FinOps, infrastructure automation
            </p>

            <h4 className="font-semibold mb-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Typical Roles
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Cloud Engineers", "DevOps", "Cloud Architects"].map((item) => (
                <span
                  key={item}
                  className="bg-linear-to-r from-[#DBEAFE] to-[#BEDBFF] text-[#1447E6] px-4 py-2  rounded-full "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* AI Details Card */}
          <div className="bg-white border border-[#F3F4F6] rounded-2xl shadow-lg hover:shadow-xl p-6 md:p-8 flex flex-col justify-start items-start">
            <div className="flex items-center gap-3 mb-3">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z"
                  fill="url(#paint0_linear_2209_10307)"
                />
                <path
                  d="M36.9669 26.1853C36.9687 25.5693 36.8473 24.959 36.6098 24.3906C36.3723 23.8221 36.0236 23.3068 35.5841 22.8751C35.1446 22.4434 34.6232 22.1039 34.0505 21.8767C33.4779 21.6494 32.8656 21.5389 32.2497 21.5518C31.6337 21.5646 31.0265 21.7005 30.4639 21.9514C29.9012 22.2023 29.3944 22.5633 28.9733 23.0129C28.5521 23.4626 28.2251 23.9919 28.0116 24.5698C27.798 25.1477 27.7021 25.7624 27.7296 26.3779C26.8242 26.6107 25.9837 27.0464 25.2716 27.6522C24.5596 28.2579 23.9947 29.0178 23.6198 29.8742C23.2449 30.7305 23.0698 31.661 23.1077 32.5951C23.1457 33.5291 23.3957 34.4423 23.8388 35.2655C23.0597 35.8984 22.447 36.7122 22.0541 37.6359C21.6612 38.5597 21.4999 39.5654 21.5843 40.5657C21.6687 41.5659 21.9963 42.5304 22.5385 43.3753C23.0806 44.2201 23.821 44.9196 24.6952 45.4131C24.5872 46.2483 24.6517 47.0968 24.8845 47.9061C25.1173 48.7154 25.5136 49.4685 26.0488 50.1186C26.584 50.7688 27.2469 51.3024 27.9964 51.6864C28.746 52.0704 29.5662 52.2966 30.4066 52.3511C31.247 52.4057 32.0897 52.2874 32.8826 52.0035C33.6754 51.7196 34.4017 51.2762 35.0165 50.7006C35.6312 50.125 36.1215 49.4295 36.457 48.6571C36.7924 47.8846 36.966 47.0516 36.9669 46.2094V26.1853Z"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.9688 26.1853C36.967 25.5693 37.0884 24.959 37.3258 24.3906C37.5633 23.8221 37.912 23.3068 38.3516 22.8751C38.7911 22.4434 39.3125 22.1039 39.8851 21.8767C40.4577 21.6494 41.07 21.5389 41.686 21.5518C42.3019 21.5646 42.9091 21.7005 43.4718 21.9514C44.0344 22.2023 44.5412 22.5633 44.9624 23.0129C45.3835 23.4626 45.7105 23.9919 45.9241 24.5698C46.1376 25.1477 46.2335 25.7624 46.206 26.3779C47.1114 26.6107 47.952 27.0464 48.664 27.6522C49.3761 28.2579 49.9409 29.0178 50.3158 29.8742C50.6907 30.7305 50.8658 31.661 50.8279 32.5951C50.79 33.5291 50.54 34.4423 50.0969 35.2655C50.876 35.8984 51.4886 36.7122 51.8816 37.6359C52.2745 38.5597 52.4357 39.5654 52.3513 40.5657C52.2669 41.5659 51.9394 42.5304 51.3972 43.3753C50.855 44.2201 50.1146 44.9196 49.2404 45.4131C49.3484 46.2483 49.284 47.0968 49.0512 47.9061C48.8183 48.7154 48.4221 49.4685 47.8868 50.1186C47.3516 50.7688 46.6887 51.3024 45.9392 51.6864C45.1897 52.0704 44.3694 52.2966 43.529 52.3511C42.6886 52.4057 41.846 52.2874 41.0531 52.0035C40.2602 51.7196 39.534 51.2762 38.9192 50.7006C38.3044 50.125 37.8141 49.4295 37.4787 48.6571C37.1432 47.8846 36.9697 47.0516 36.9688 46.2094V26.1853Z"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.5856 38.5089C40.2924 38.054 39.1632 37.2258 38.3407 36.1291C37.5182 35.0324 37.0393 33.7165 36.9647 32.3477C36.8901 33.7165 36.4112 35.0324 35.5887 36.1291C34.7662 37.2258 33.6369 38.054 32.3438 38.5089"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45.5938 28.4929C45.9665 27.8469 46.1774 27.1202 46.2083 26.375"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.7344 26.375C27.7648 27.1201 27.9752 27.8468 28.3474 28.4929"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.8359 35.2662C24.1177 35.0367 24.4193 34.8326 24.737 34.6562"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49.1953 34.6562C49.5131 34.8326 49.8146 35.0367 50.0964 35.2662"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.7173 46.2089C26.6558 46.2094 25.6121 45.9356 24.6875 45.4141"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49.2329 45.4141C48.3083 45.9356 47.2647 46.2094 46.2031 46.2089"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2209_10307"
                    x1="0"
                    y1="0"
                    x2="73.935"
                    y2="73.935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AD46FF" />
                    <stop offset="1" stopColor="#9810FA" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col items-start justify-start">
                <h3 className="text-xl md:text-[28px] font-semibold">
                  AI & Data Analytics
                </h3>
                <p className="text-gray-400 text-lg ">
                  Intelligence & Insights
                </p>
              </div>
            </div>

            <h4 className="font-semibold my-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Expertise
            </h4>
            <p className="text-gray-600 mb-4 text-lg text-start">
              Predictive models, ML deployment, real-time dashboards
            </p>

            <h4 className="font-semibold mb-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Typical Roles
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Data Engineers", "ML Engineers", "AI Specialists"].map(
                (item) => (
                  <span
                    key={item}
                    className="bg-linear-to-r from-[#F3E8FF] to-[#E9D4FF] text-[#8200DB] px-4 py-2  rounded-full "
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* AI Image Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/augmentation/2.png"
              alt="AI Analytics"
              width={684}
              height={370}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-5 right-5 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8658 5.7767C13.8671 5.31464 13.7761 4.85697 13.598 4.43062C13.4199 4.00426 13.1583 3.61782 12.8287 3.29403C12.4991 2.97024 12.108 2.71564 11.6785 2.54519C11.249 2.37475 10.7898 2.2919 10.3279 2.30153C9.86591 2.31116 9.41054 2.41307 8.98854 2.60126C8.56654 2.78946 8.18643 3.06014 7.87057 3.39738C7.55472 3.73462 7.30949 4.13162 7.1493 4.56503C6.98912 4.99844 6.91722 5.4595 6.93784 5.9211C6.25879 6.0957 5.62838 6.42253 5.09435 6.87684C4.56032 7.33115 4.13667 7.90103 3.85549 8.54331C3.57431 9.18559 3.44297 9.88343 3.47143 10.584C3.49988 11.2845 3.68737 11.9694 4.01971 12.5868C3.43537 13.0615 2.97587 13.6718 2.68119 14.3646C2.3865 15.0574 2.26556 15.8117 2.32887 16.562C2.39218 17.3122 2.63784 18.0355 3.04447 18.6691C3.4511 19.3028 4.00639 19.8274 4.66202 20.1975C4.58106 20.8239 4.62938 21.4603 4.80399 22.0673C4.9786 22.6743 5.2758 23.239 5.67723 23.7267C6.07866 24.2143 6.5758 24.6145 7.13795 24.9025C7.70009 25.1905 8.31531 25.3602 8.94561 25.4011C9.5759 25.442 10.2079 25.3532 10.8025 25.1403C11.3972 24.9274 11.9419 24.5948 12.403 24.1631C12.8641 23.7315 13.2318 23.2098 13.4834 22.6305C13.735 22.0511 13.8651 21.4264 13.8658 20.7947V5.7767Z"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8594 5.7767C13.858 5.31464 13.9491 4.85697 14.1272 4.43062C14.3053 4.00426 14.5668 3.61782 14.8965 3.29403C15.2261 2.97024 15.6172 2.71564 16.0466 2.54519C16.4761 2.37475 16.9353 2.2919 17.3973 2.30153C17.8593 2.31116 18.3146 2.41307 18.7366 2.60126C19.1586 2.78946 19.5387 3.06014 19.8546 3.39738C20.1705 3.73462 20.4157 4.13162 20.5759 4.56503C20.736 4.99844 20.8079 5.4595 20.7873 5.9211C21.4664 6.0957 22.0968 6.42253 22.6308 6.87684C23.1649 7.33115 23.5885 7.90103 23.8697 8.54331C24.1509 9.18559 24.2822 9.88343 24.2537 10.584C24.2253 11.2845 24.0378 11.9694 23.7055 12.5868C24.2898 13.0615 24.7493 13.6718 25.044 14.3646C25.3387 15.0574 25.4596 15.8117 25.3963 16.562C25.333 17.3122 25.0873 18.0355 24.6807 18.6691C24.2741 19.3028 23.7188 19.8274 23.0631 20.1975C23.1441 20.8239 23.0958 21.4603 22.9212 22.0673C22.7466 22.6743 22.4494 23.239 22.0479 23.7267C21.6465 24.2143 21.1494 24.6145 20.5872 24.9025C20.0251 25.1905 19.4099 25.3602 18.7796 25.4011C18.1493 25.442 17.5173 25.3532 16.9226 25.1403C16.328 24.9274 15.7833 24.5948 15.3222 24.1631C14.8611 23.7315 14.4934 23.2098 14.2418 22.6305C13.9902 22.0511 13.8601 21.4264 13.8594 20.7947V5.7767Z"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.3298 15.0194C16.36 14.6782 15.513 14.0571 14.8961 13.2345C14.2793 12.412 13.9201 11.4251 13.8641 10.3984C13.8082 11.4251 13.449 12.412 12.8321 13.2345C12.2153 14.0571 11.3683 14.6782 10.3984 15.0194"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.3359 7.51032C20.6155 7.0258 20.7737 6.4808 20.7969 5.92188"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.92969 5.92188C6.95253 6.4807 7.11028 7.0257 7.38947 7.51032"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.01562 12.5864C4.22696 12.4143 4.45312 12.2612 4.69144 12.1289"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.0312 12.1289C23.2696 12.2612 23.4957 12.4143 23.7071 12.5864"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.9286 20.7953C6.13244 20.7957 5.3497 20.5904 4.65625 20.1992"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.0692 20.1992C22.3758 20.5904 21.593 20.7957 20.7969 20.7953"
                  stroke="#9810FA"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className=" font-semibold">AI & Data Analytics</span>
            </div>
          </div>
          {/* Cloud Image Card */}
          <div className="relative  rounded-2xl overflow-hidden ">
            <Image
              src="/augmentation/3.png"
              alt="Cybersecurity"
              width={684}
              height={370}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow">
              <svg
                width="21"
                height="26"
                viewBox="0 0 21 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.64 13.8644C19.64 19.6405 15.5967 22.5286 10.7909 24.2037C10.5393 24.289 10.2659 24.2849 10.0169 24.1922C5.19957 22.5286 1.15625 19.6405 1.15625 13.8644V5.77771C1.15625 5.47132 1.27796 5.17748 1.49461 4.96083C1.71126 4.74419 2.0051 4.62247 2.31148 4.62247C4.62195 4.62247 7.51004 3.23619 9.52015 1.48024C9.76489 1.27114 10.0762 1.15625 10.3981 1.15625C10.72 1.15625 11.0314 1.27114 11.2761 1.48024C13.2978 3.24774 16.1743 4.62247 18.4848 4.62247C18.7912 4.62247 19.085 4.74419 19.3016 4.96083C19.5183 5.17748 19.64 5.47132 19.64 5.77771V13.8644Z"
                  stroke="#E7000B"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className=" font-semibold">Cybersecurity</span>
            </div>
          </div>

          {/* Cloud Details Card */}
          <div className="bg-white border border-[#F3F4F6] rounded-2xl shadow-lg hover:shadow-xl p-6 md:p-8 flex flex-col justify-start items-start">
            <div className="flex items-center gap-3 mb-3">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z"
                  fill="url(#paint0_linear_2209_10363)"
                />
                <path
                  d="M49.2934 38.5066C49.2934 46.2082 43.9023 50.059 37.4946 52.2924C37.1591 52.4061 36.7946 52.4007 36.4626 52.277C30.0395 50.059 24.6484 46.2082 24.6484 38.5066V27.7244C24.6484 27.3159 24.8107 26.9241 25.0996 26.6353C25.3884 26.3464 25.7802 26.1841 26.1888 26.1841C29.2694 26.1841 33.1202 24.3358 35.8003 21.9945C36.1266 21.7157 36.5417 21.5625 36.9709 21.5625C37.4001 21.5625 37.8153 21.7157 38.1416 21.9945C40.8371 24.3512 44.6725 26.1841 47.7531 26.1841C48.1616 26.1841 48.5534 26.3464 48.8423 26.6353C49.1312 26.9241 49.2934 27.3159 49.2934 27.7244V38.5066Z"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2209_10363"
                    x1="0"
                    y1="0"
                    x2="73.935"
                    y2="73.935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FB2C36" />
                    <stop offset="1" stopColor="#E7000B" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col items-start justify-start">
                <h3 className="text-xl md:text-[28px] font-semibold text-start">
                  Cybersecurity & Compliance
                </h3>
                <p className="text-gray-400 text-lg ">Security & Protection</p>
              </div>
            </div>

            <h4 className="font-semibold my-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Expertise
            </h4>
            <p className="text-gray-600 mb-4 text-lg text-start">
              Secure-by-design, SOC, NIST, HIPAA, PCI DSS
            </p>

            <h4 className="font-semibold mb-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Typical Roles
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "SOC Engineers",
                "Compliance Specialists",
                "Security Analysts",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-linear-to-r from-[#FFE2E2] to-[#FFC9C9] text-[#C10007] px-4 py-2  rounded-full "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* AI Details Card */}
          <div className="bg-white border border-[#F3F4F6] rounded-2xl shadow-lg hover:shadow-xl p-6 md:p-8 flex flex-col justify-start items-start">
            <div className="flex items-center gap-3 mb-3">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z"
                  fill="url(#paint0_linear_2209_10403)"
                />
                <path
                  d="M43.1328 46.2103L52.3747 36.9684L43.1328 27.7266"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.8044 27.7266L21.5625 36.9684L30.8044 46.2103"
                  stroke="white"
                  strokeWidth="3.08063"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2209_10403"
                    x1="0"
                    y1="0"
                    x2="73.935"
                    y2="73.935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00C950" />
                    <stop offset="1" stopColor="#00A63E" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col items-start justify-start">
                <h3 className="text-xl md:text-[28px] font-semibold">
                  Software Development
                </h3>
                <p className="text-gray-400 text-lg ">Build & Innovation</p>
              </div>
            </div>

            <h4 className="font-semibold my-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Expertise
            </h4>
            <p className="text-gray-600 mb-4 text-lg text-start">
              Enterprise applications, cloud-native apps, legacy refactoring
            </p>

            <h4 className="font-semibold mb-2 flex items-center justify-center gap-2 text-xl">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.62094C0 2.06886 2.06886 0 4.62094 0C7.17301 0 9.24188 2.06886 9.24188 4.62094C9.24188 7.17301 7.17301 9.24188 4.62094 9.24188C2.06886 9.24188 0 7.17301 0 4.62094Z"
                    fill="#FF9500"
                  />
                </svg>
              </span>{" "}
              Typical Roles
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Full-stack Developers",
                "Backend/Frontend",
                "QA Engineers",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-linear-to-r from-[#DCFCE7] to-[#B9F8CF] text-[#008236] px-4 py-2  rounded-full "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* AI Image Card */}
          <div className="relative  overflow-hidden ">
            <Image
              src="/augmentation/4.png"
              alt="AI Analytics"
              width={684}
              height={370}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-5 right-5 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4766 20.7925L25.408 13.8611L18.4766 6.92969"
                  stroke="#00A63E"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.2361 6.92969L2.30469 13.8611L9.2361 20.7925"
                  stroke="#00A63E"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className=" font-semibold">Software Development</span>
            </div>
          </div>
        </section>
      </div>
      {/* Cards */}
      {/* <div className="mt-10 grid md:grid-cols-2 gap-6 md:max-w-6xl mx-auto px-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6  shadow-lg hover:shadow-xl transition flex gap-4 md:gap-7"
          >
            <div className="-ml-3 ">{card.icon}</div>

            <div>
              <h3 className="text-xl md:text-[28px] font-bold">{card.title}</h3>

              <div className="mt-3">
                <p className="text-lg md:text-2xl font-semibold text-[#FF9500]">
                  Expertise:
                </p>
                <p className="text-lg md:text-xl text-[#364153]">
                  {card.expertise}
                </p>
              </div>

              <div className="mt-3">
                <p className="text-lg md:text-2xl font-semibold text-[#FF9500]">
                  Typical Roles:
                </p>
                <p className="text-lg md:text-xl text-[#364153]">
                  {card.roles}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}

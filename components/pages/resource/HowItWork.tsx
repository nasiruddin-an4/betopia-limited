"use client";

import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface StepItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    title: "Requirement Assessment",
    description:
      "We analyze your project and team needs to define the ideal talent mix.",
    icon: (
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z"
          fill="url(#paint0_linear_1639_7063)"
        />
        <path
          d="M50.835 41.5892C50.835 42.4063 50.5104 43.1898 49.9327 43.7676C49.355 44.3453 48.5714 44.6698 47.7544 44.6698H29.2706L23.1094 50.8311V26.1861C23.1094 25.3691 23.4339 24.5855 24.0117 24.0078C24.5894 23.43 25.373 23.1055 26.19 23.1055H47.7544C48.5714 23.1055 49.355 23.43 49.9327 24.0078C50.5104 24.5855 50.835 25.3691 50.835 26.1861V41.5892Z"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1639_7063"
            x1="0"
            y1="0"
            x2="73.935"
            y2="73.935"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEDD4" />
            <stop offset="1" stopColor="#FFD6A7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Team Onboarding",
    description:
      "Deploy certified professionals into your project with clear roles and KPIs.",
    icon: (
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z"
          fill="url(#paint0_linear_1639_7075)"
        />
        <path
          d="M43.1269 50.8317V47.7511C43.1269 46.117 42.4777 44.5499 41.3223 43.3944C40.1668 42.239 38.5997 41.5898 36.9656 41.5898H27.7238C26.0897 41.5898 24.5225 42.239 23.3671 43.3944C22.2116 44.5499 21.5625 46.117 21.5625 47.7511V50.8317"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.3488 35.428C35.7515 35.428 38.51 32.6695 38.51 29.2667C38.51 25.864 35.7515 23.1055 32.3488 23.1055C28.946 23.1055 26.1875 25.864 26.1875 29.2667C26.1875 32.6695 28.946 35.428 32.3488 35.428Z"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52.3709 50.8307V47.7501C52.3699 46.3849 51.9156 45.0588 51.0792 43.9799C50.2428 42.9009 49.0718 42.1303 47.75 41.7891"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.125 23.3047C44.4503 23.644 45.625 24.4148 46.4638 25.4955C47.3027 26.5762 47.758 27.9053 47.758 29.2734C47.758 30.6415 47.3027 31.9706 46.4638 33.0513C45.625 34.132 44.4503 34.9028 43.125 35.2421"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1639_7075"
            x1="0"
            y1="0"
            x2="73.935"
            y2="73.935"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEDD4" />
            <stop offset="1" stopColor="#FFD6A7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Dedicated Account & Partner Success Manager",
    description:
      "Your team is managed by a single point of contact ensuring smooth execution and productivity tracking.",
    icon: (
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z"
          fill="url(#paint0_linear_1639_7090)"
        />
        <path
          d="M43.135 49.292V24.647C43.135 23.83 42.8104 23.0464 42.2327 22.4687C41.655 21.891 40.8714 21.5664 40.0544 21.5664H33.8931C33.0761 21.5664 32.2925 21.891 31.7148 22.4687C31.1371 23.0464 30.8125 23.83 30.8125 24.647V49.292"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.2881 27.7266H24.6431C22.9417 27.7266 21.5625 29.1058 21.5625 30.8072V46.2103C21.5625 47.9117 22.9417 49.2909 24.6431 49.2909H49.2881C50.9895 49.2909 52.3688 47.9117 52.3688 46.2103V30.8072C52.3688 29.1058 50.9895 27.7266 49.2881 27.7266Z"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1639_7090"
            x1="0"
            y1="0"
            x2="73.935"
            y2="73.935"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEDD4" />
            <stop offset="1" stopColor="#FFD6A7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Performance & Results",
    description:
      "Teams work as your internal staff but are fully managed by Betopia. Reports, insights, and outcomes are shared regularly.",
    icon: (
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16.1733C0 7.24102 7.24103 0 16.1733 0H57.7617C66.694 0 73.935 7.24103 73.935 16.1733V57.7617C73.935 66.694 66.694 73.935 57.7617 73.935H16.1733C7.24102 73.935 0 66.694 0 57.7617V16.1733Z"
          fill="url(#paint0_linear_1639_7103)"
        />
        <path
          d="M52.3766 36.9695H48.5566C47.8834 36.9681 47.2283 37.1872 46.6915 37.5933C46.1546 37.9994 45.7655 38.5702 45.5838 39.2184L41.9641 52.0954C41.9407 52.1754 41.8921 52.2457 41.8254 52.2956C41.7588 52.3456 41.6777 52.3727 41.5944 52.3727C41.5111 52.3727 41.43 52.3456 41.3633 52.2956C41.2967 52.2457 41.248 52.1754 41.2247 52.0954L32.7222 21.8437C32.6988 21.7637 32.6502 21.6934 32.5835 21.6434C32.5169 21.5934 32.4358 21.5664 32.3525 21.5664C32.2692 21.5664 32.1881 21.5934 32.1215 21.6434C32.0548 21.6934 32.0062 21.7637 31.9828 21.8437L28.3631 34.7207C28.1821 35.3663 27.7953 35.9352 27.2616 36.3411C26.7278 36.747 26.0762 36.9676 25.4057 36.9695H21.5703"
          stroke="#FF9500"
          strokeWidth="3.08063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1639_7103"
            x1="0"
            y1="0"
            x2="73.935"
            y2="73.935"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEDD4" />
            <stop offset="1" stopColor="#FFD6A7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function HowItWork() {
  return (
    <section className=" bg-linear-to-r from-[#FF89040D] to-[#FFFFFF]">
      <div className="max-w-[1406px] mx-auto px-4 pb-10 pt-10 md:pb-20 relative">

      <div className="w-[150px] mx-auto mb-3 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] text-center px-4 py-1  font-semibold text-white">
        Simple Process
      </div>
      <UnderlineSectionTitle
        title="How It Works"
        wrapperClassName="mb-8 md:mb-[70px] text-center text-[#4A5565]"
      />

      {/* connector line */}
      <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-px bg-[#FF950080] mx-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[37px] relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white p-[38px] border-[1.16px] border-[#F3F4F6] rounded-2xl shadow-lg transition-all duration-300 ease-out
    hover:-translate-y-2"
          >
            {/* icon */}
            <div className="-ml-3 w-[74px] h-[74px] mb-6">{step.icon}</div>

            <h3 className="text-xl md:text-[28px] font-bold text-[#0A0A0A] mb-3">
              {step.title}
            </h3>
            <p className="text-lg md:text-2xl text-[#4A5565] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 md:mt-[56px]">
        <button
         onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-9.25 inline-flex items-center gap-2 text-white bg-linear-to-r from-[#FF9500] to-[#F54900] font-semibold px-4 py-3 rounded-[10px]
          cursor-pointer   transition"
        >
          Get Your Dedicated Team Today
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
      </div>
    </section>
  );
}

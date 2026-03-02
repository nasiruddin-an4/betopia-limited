"use client";

import Container from "@/components/layout/Container";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

const features = [
  {
    title: "Industry Expertise",
    description:
      "Over 15 years of experience delivering cutting-edge technology services to enterprises worldwide.",
    icon: (
      <svg
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 18.4838C0 8.27546 8.27546 0 18.4838 0H83.1769C93.3852 0 101.661 8.27546 101.661 18.4838V83.1769C101.661 93.3852 93.3852 101.661 83.1769 101.661H18.4838C8.27546 101.661 0 93.3852 0 83.1769V18.4838Z"
          fill="url(#paint0_linear_1776_16080)"
        />
        <path
          d="M57.5243 52.543L60.4413 68.9589C60.474 69.1522 60.4468 69.3508 60.3636 69.5283C60.2803 69.7058 60.1448 69.8536 59.9752 69.952C59.8057 70.0504 59.6101 70.0946 59.4147 70.0789C59.2193 70.0631 59.0333 69.9881 58.8817 69.8638L51.9888 64.6903C51.6561 64.4417 51.2518 64.3073 50.8365 64.3073C50.4211 64.3073 50.0169 64.4417 49.6841 64.6903L42.7797 69.8619C42.6282 69.9859 42.4425 70.0608 42.2473 70.0766C42.0521 70.0924 41.8568 70.0483 41.6873 69.9502C41.5179 69.8521 41.3824 69.7046 41.2989 69.5275C41.2154 69.3504 41.1879 69.152 41.2201 68.9589L44.1352 52.543"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50.8297 54.6789C57.2099 54.6789 62.382 49.5068 62.382 43.1266C62.382 36.7464 57.2099 31.5742 50.8297 31.5742C44.4495 31.5742 39.2773 36.7464 39.2773 43.1266C39.2773 49.5068 44.4495 54.6789 50.8297 54.6789Z"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1776_16080"
            x1="0"
            y1="0"
            x2="101.661"
            y2="101.661"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6900" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Security First",
    description:
      "Every service is built with security at its core, ensuring your data and operations remain protected.",
    icon: (
      <svg
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 18.4838C0 8.27546 8.27546 0 18.4838 0H83.1769C93.3852 0 101.661 8.27546 101.661 18.4838V83.1769C101.661 93.3852 93.3852 101.661 83.1769 101.661H18.4838C8.27546 101.661 0 93.3852 0 83.1769V18.4838Z"
          fill="url(#paint0_linear_1776_16089)"
        />
        <path
          d="M66.232 52.7544C66.232 62.3813 59.4932 67.1948 51.4835 69.9866C51.0641 70.1288 50.6085 70.122 50.1935 69.9674C42.1647 67.1948 35.4258 62.3813 35.4258 52.7544V39.2766C35.4258 38.766 35.6286 38.2763 35.9897 37.9152C36.3508 37.5541 36.8405 37.3513 37.3512 37.3513C41.202 37.3513 46.0154 35.0408 49.3656 32.1142C49.7735 31.7657 50.2924 31.5742 50.8289 31.5742C51.3654 31.5742 51.8843 31.7657 52.2922 32.1142C55.6616 35.06 60.4559 37.3513 64.3066 37.3513C64.8173 37.3513 65.307 37.5541 65.6681 37.9152C66.0292 38.2763 66.232 38.766 66.232 39.2766V52.7544Z"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1776_16089"
            x1="0"
            y1="0"
            x2="101.661"
            y2="101.661"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6900" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Proven Results",
    description:
      "Our clients achieve 50% faster deployment times and 40% cost reduction on average.",
    icon: (
      <svg
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 18.4838C0 8.27546 8.27546 0 18.4838 0H83.1769C93.3852 0 101.661 8.27546 101.661 18.4838V83.1769C101.661 93.3852 93.3852 101.661 83.1769 101.661H18.4838C8.27546 101.661 0 93.3852 0 83.1769V18.4838Z"
          fill="url(#paint0_linear_1776_16097)"
        />
        <path
          d="M58.5312 41.2031H70.0836V52.7555"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70.084 41.2031L53.7182 57.5689L44.0912 47.942L31.5762 60.457"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1776_16097"
            x1="0"
            y1="0"
            x2="101.661"
            y2="101.661"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6900" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "24/7 expert support team ready to assist with any technical challenge or question.",
    icon: (
      <svg
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 18.4838C0 8.27546 8.27546 0 18.4838 0H83.1769C93.3852 0 101.661 8.27546 101.661 18.4838V83.1769C101.661 93.3852 93.3852 101.661 83.1769 101.661H18.4838C8.27546 101.661 0 93.3852 0 83.1769V18.4838Z"
          fill="url(#paint0_linear_1776_16106)"
        />
        <path
          d="M58.5336 68.1578V64.307C58.5336 62.2645 57.7222 60.3055 56.2779 58.8612C54.8335 57.4169 52.8746 56.6055 50.832 56.6055H39.2797C37.2371 56.6055 35.2782 57.4169 33.8339 58.8612C32.3895 60.3055 31.5781 62.2645 31.5781 64.307V68.1578"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58.5312 33.75C60.1828 34.1781 61.6454 35.1426 62.6895 36.4919C63.7336 37.8412 64.3001 39.499 64.3001 41.2051C64.3001 42.9112 63.7336 44.569 62.6895 45.9184C61.6454 47.2677 60.1828 48.2321 58.5312 48.6602"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70.0828 68.1575V64.3067C70.0815 62.6003 69.5136 60.9426 68.4681 59.594C67.4226 58.2453 65.9589 57.2821 64.3066 56.8555"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.0551 48.9031C49.3085 48.9031 52.7566 45.455 52.7566 41.2016C52.7566 36.9481 49.3085 33.5 45.0551 33.5C40.8016 33.5 37.3535 36.9481 37.3535 41.2016C37.3535 45.455 40.8016 48.9031 45.0551 48.9031Z"
          stroke="white"
          strokeWidth="3.85078"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1776_16106"
            x1="0"
            y1="0"
            x2="101.661"
            y2="101.661"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6900" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function WhyChooseBetopia() {
  return (
    <section className="pb-10 lg:pb-20 bg-white">
      <Container>
        {/* Title */}
        <HeadingOne
          title="Why Choose"
          highlight="Betopia"
          center={true}
          className=""
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[52px] px-3 xl:px-0">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-3 lg:mb-6">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl xl:text-[36px] font-bold  text-[#0F172B] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <PageSubtitle
                text={item.description}
                className="text-[#45556C] "
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

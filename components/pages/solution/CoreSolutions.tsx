import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/pageSubtitle";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeatureItem {
  label: string;
  path: string;
}

interface Solution {
  title: string;
  description: string;
  features: FeatureItem[];
  image: string;
  badgeImage?: React.ReactNode;
  buttonGradient: string;
  reverse?: boolean;
}

const solutions: Solution[] = [
  {
    title: "Data Center Infrastructure Management & Network Security Solutions",
    description:
      "Seamlessly transition your infrastructure to the cloud with zero downtime",
    features: [
      {
        label: "Datacenter & Virtualization Solutions",
        path: "/solution/dcim-network/data-center",
      },
      {
        label: "Infrastructure Management Solutions",
        path: "/solution/dcim-network/infrastructure-management",
      },
      {
        label: "Enterprise Networking Solutions",
        path: "/solution/dcim-network/enterprise-networking",
      },
      {
        label: "Network Security Solutions",
        path: "/solution/dcim-network/network-security",
      },
    ],
    image: "/solution/main/5.png",
    badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="url(#paint0_linear_1707_27049)"/>
<g clipPath="url(#clip0_1707_27049)">
<path d="M36.4839 31.32C44.1401 31.32 50.3467 29.2511 50.3467 26.6991C50.3467 24.147 44.1401 22.0781 36.4839 22.0781C28.8277 22.0781 22.6211 24.147 22.6211 26.6991C22.6211 29.2511 28.8277 31.32 36.4839 31.32Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.6211 26.7031V48.2675C22.6211 49.4931 24.0816 50.6684 26.6814 51.535C29.2812 52.4016 32.8073 52.8884 36.4839 52.8884C40.1606 52.8884 43.6866 52.4016 46.2864 51.535C48.8862 50.6684 50.3467 49.4931 50.3467 48.2675V26.7031" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.6211 37.4844C22.6211 38.7099 24.0816 39.8853 26.6814 40.7519C29.2812 41.6185 32.8073 42.1053 36.4839 42.1053C40.1606 42.1053 43.6866 41.6185 46.2864 40.7519C48.8862 39.8853 50.3467 38.7099 50.3467 37.4844" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_1707_27049" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#00B8DB"/>
</linearGradient>
<clipPath id="clip0_1707_27049">
<rect width="36.9675" height="36.9675" fill="white" transform="translate(18.4844 18.4844)"/>
</clipPath>
</defs>
</svg>
),
    buttonGradient: "bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]",
  },
  {
    title: "Hybrid Cloud Solutions",
    description:
      "Enterprise-grade security solutions to protect your digital assets",
    features: [
      {
        label: "Cloud Infrastructure Solutions",
        path: "/solution/hybrid-cloud-and-devops/cloud-infrastructure",
      },
      {
        label: "Hybrid Cloud Solutions",
        path: "/solution/hybrid-cloud-and-devops/hybrid-cloud",
      },
      { label: "DevOps Solutions", path: "/solution/hybrid-cloud-and-devops/devops-solutions" },
    ],
    image: "/solution/main/6.png",
    badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="url(#paint0_linear_1707_27090)"/>
<path d="M45.8721 47.623H32.7794C30.7799 47.6225 28.8199 47.0659 27.1184 46.0156C25.417 44.9653 24.0411 43.4625 23.1446 41.6752C22.248 39.888 21.8661 37.8866 22.0416 35.8948C22.217 33.9029 22.9429 31.9991 24.138 30.3961C25.3332 28.793 26.9506 27.5539 28.8094 26.8172C30.6683 26.0804 32.6954 25.8751 34.6642 26.2241C36.6331 26.5731 38.4661 27.4628 39.9584 28.7936C41.4508 30.1244 42.5436 31.844 43.1149 33.7602H45.8721C47.7104 33.7602 49.4734 34.4904 50.7733 35.7903C52.0732 37.0902 52.8035 38.8532 52.8035 40.6916C52.8035 42.5299 52.0732 44.2929 50.7733 45.5928C49.4734 46.8927 47.7104 47.623 45.8721 47.623Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1707_27090" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
<stop stopColor="#00C950"/>
<stop offset="1" stopColor="#00BC7D"/>
</linearGradient>
</defs>
</svg>
),
    buttonGradient: "bg-linear-to-r from-[#00C950] to-[#00BC7D]",
    reverse: true,
  },
  {
    title: "Cyber Security",
    description:
      "Transform data into actionable insights with advanced analytics",
    features: [
      {
        label: "Infrastructure Security Solutions",
        path: "/solution/cyber-security/infrastructure-security",
      },
      {
        label: "Data Security Solutions",
        path: "/solution/cyber-security/data-security-solutions",
      },
      {
        label: "Identity Security Solutions",
        path: "/solution/cyber-security/identity-security-solutions",
      },
      {
        label: "Application Security Solutions",
        path: "/solution/cyber-security/application-security-solutions",
      },
      {
        label: "Email Security Solutions",
        path: "/solution/cyber-security/email-security-solutions",
      },
      {
        label: "IoT Security Solutions",
        path: "/solution/cyber-security/iot-security-solutions",
      },
      {
        label: "AI Security Solutions",
        path: "/solution/cyber-security/ai-security-solutions",
      },
      {
        label: "Cyber Security Operations Solutions",
        path: "/solution/cyber-security/cyber-security-operations-solutions",
      },
    ],
    image: "/solution/main/9.png",
    badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="url(#paint0_linear_1707_27124)"/>
<path d="M47.645 38.9441C47.645 46.6457 42.2539 50.4965 35.8462 52.7299C35.5107 52.8436 35.1462 52.8382 34.8142 52.7145C28.3911 50.4965 23 46.6457 23 38.9441V28.1619C23 27.7534 23.1623 27.3616 23.4511 27.0728C23.74 26.7839 24.1318 26.6216 24.5403 26.6216C27.6209 26.6216 31.4717 24.7733 34.1519 22.432C34.4782 22.1532 34.8933 22 35.3225 22C35.7517 22 36.1668 22.1532 36.4931 22.432C39.1887 24.7887 43.0241 26.6216 46.1047 26.6216C46.5132 26.6216 46.905 26.7839 47.1939 27.0728C47.4827 27.3616 47.645 27.7534 47.645 28.1619V38.9441Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1707_27124" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
<stop stopColor="#AD46FF"/>
<stop offset="1" stopColor="#F6339A"/>
</linearGradient>
</defs>
</svg>
),
    buttonGradient: "bg-linear-to-r from-[#AD46FF] to-[#F6339A]",
  },
  {
    title: "Digital Solutions",
    description: "Upgrade legacy systems with cutting-edge technology",
    features: [
      {
        label: "Digital & APP Innovation Solutions",
        path: "/solution/digital-solutions/digital-app-innovation",
      },
      {
        label: "Database & Business Analytics Solutions",
        path: "/solution/digital-solutions/batabase-business-analytics",
      },
      {
        label: "AI Solutions",
        path: "/solution/digital-solutions/ai-solutions",
      },
       {
        label: "Business Application Solutions",
        path: "/solution/digital-solutions/bussiness-application-solutions",
      },
      // { label:  "BizApps Solutions",path: "/solutions/network-security" },
    ],

    image: "/solution/main/8.png",
    badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="#FF9500"/>
<path d="M49.292 21.5625H24.647C22.9456 21.5625 21.5664 22.9417 21.5664 24.6431V30.8044C21.5664 32.5058 22.9456 33.885 24.647 33.885H49.292C50.9934 33.885 52.3727 32.5058 52.3727 30.8044V24.6431C52.3727 22.9417 50.9934 21.5625 49.292 21.5625Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M49.2881 40.0469H24.6431C22.9417 40.0469 21.5625 41.4261 21.5625 43.1275V49.2888C21.5625 50.9901 22.9417 52.3694 24.6431 52.3694H49.2881C50.9895 52.3694 52.3688 50.9901 52.3688 49.2888V43.1275C52.3688 41.4261 50.9895 40.0469 49.2881 40.0469Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.7266 27.7266H27.7413" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.7266 46.2109H27.7413" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
    buttonGradient: "bg-[#FF9500]",
    reverse: true,
  },
];

const CoreSolutions: React.FC = () => {
  return (
   <section className="pt-10 pb-6 lg:pt-20">
  <Container>
    {/* Header */}
    <div className="text-center mb-8 md:mb-[75px]">
      <SectionTitle normalText="Our Core" highlightText="Solutions" />
<div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
      <PageSubtitle
        text="Comprehensive infrastructure solutions designed for modern enterprises"
        className="mt-4 lg:mt-5 text-[#45556C] max-w-2xl mx-auto"
      />
    </div>

    {/* Cards */}
    {solutions.map((solution, index) => (
      <div key={index} className="mb-10 lg:mb-20">
        <div
          className={`grid md:gap-6 lg:gap-12 items-center 
          md:grid-cols-2 ${
            solution.reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <div className="relative w-full h-[260px] md:h-[400px] lg:h-[450px]">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              className="object-cover object-center rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center h-full">
            {solution.badgeImage && (
              <div className="mb-4 mt-8 ">{solution.badgeImage}</div>
            )}

            <h2 className="text-2xl lg:text-3xl 2xl:text-[42px] font-bold text-[#0F172B] mb-4 lg:mb-8">
              {solution.title}
            </h2>

            <ul className="space-y-3 md:space-y-4 mb-6 lg:mb-9">
              {solution.features.map((feature, i) => (
                <Link key={i} href={feature.path}>
                  <li className="flex gap-3 items-start">
                    <Image
                      src="/solution/checkbox.png"
                      alt="check"
                      width={23}
                      height={23}
                      className="mt-0.5 w-5 h-5 lg:w-[23px] lg:h-[23px]"
                    />
                    <span className="text-[#314158] md:text-[19px] hover:text-[#FF9500]">
                      {feature.label}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </Container>
</section>

  );
};

export default CoreSolutions;

// import Container from "@/components/layout/Container";
// import PageSubtitle from "@/components/shared/pageSubtitle";
// import SectionTitle from "@/components/shared/SectionTitle";
// import { div } from "framer-motion/client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// interface FeatureItem {
//   label: string;
//   path: string;
// }

// interface Solution {
//   title: string;
//   description: string;
//   features: FeatureItem[];
//   image: string;
//   badgeImage?: React.ReactNode;
//   buttonGradient: string;
//   reverse?: boolean;
// }

// const solutions: Solution[] = [
//   {
//     title: "Data Center Infrastructure Management & Network Security Solutions",
//     description:
//       "Seamlessly transition your infrastructure to the cloud with zero downtime",
//     features: [
//       {
//         label: "Datacenter & Virtualization Solutions",
//         path: "/solution/dcim-network/data-center",
//       },
//       {
//         label: "Infrastructure Management Solutions",
//         path: "/solution/dcim-network/infrastructure-management",
//       },
//       {
//         label: "Enterprise Networking Solutions",
//         path: "/solution/dcim-network/enterprise-networking",
//       },
//       {
//         label: "Network Security Solutions",
//         path: "/solution/dcim-network/network-security",
//       },
//     ],
//     image: "/solution/main/5.png",
//     badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="url(#paint0_linear_1707_27049)"/>
// <g clipPath="url(#clip0_1707_27049)">
// <path d="M36.4839 31.32C44.1401 31.32 50.3467 29.2511 50.3467 26.6991C50.3467 24.147 44.1401 22.0781 36.4839 22.0781C28.8277 22.0781 22.6211 24.147 22.6211 26.6991C22.6211 29.2511 28.8277 31.32 36.4839 31.32Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M22.6211 26.7031V48.2675C22.6211 49.4931 24.0816 50.6684 26.6814 51.535C29.2812 52.4016 32.8073 52.8884 36.4839 52.8884C40.1606 52.8884 43.6866 52.4016 46.2864 51.535C48.8862 50.6684 50.3467 49.4931 50.3467 48.2675V26.7031" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M22.6211 37.4844C22.6211 38.7099 24.0816 39.8853 26.6814 40.7519C29.2812 41.6185 32.8073 42.1053 36.4839 42.1053C40.1606 42.1053 43.6866 41.6185 46.2864 40.7519C48.8862 39.8853 50.3467 38.7099 50.3467 37.4844" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// </g>
// <defs>
// <linearGradient id="paint0_linear_1707_27049" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
// <stop stopColor="#2B7FFF"/>
// <stop offset="1" stopColor="#00B8DB"/>
// </linearGradient>
// <clipPath id="clip0_1707_27049">
// <rect width="36.9675" height="36.9675" fill="white" transform="translate(18.4844 18.4844)"/>
// </clipPath>
// </defs>
// </svg>
// ),
//     buttonGradient: "bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]",
//   },
//   {
//     title: "Hybrid Cloud Solutions",
//     description:
//       "Enterprise-grade security solutions to protect your digital assets",
//     features: [
//       {
//         label: "Cloud Infrastructure Solutions",
//         path: "/solution/hybrid-cloud-and-devops/cloud-infrastructure",
//       },
//       {
//         label: "Hybrid Cloud Solutions",
//         path: "/solution/hybrid-cloud-and-devops/hybrid-cloud",
//       },
//       // { label: "DevOps Solutions", path: "/solutions/networking" },
//     ],
//     image: "/solution/main/6.png",
//     badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="url(#paint0_linear_1707_27090)"/>
// <path d="M45.8721 47.623H32.7794C30.7799 47.6225 28.8199 47.0659 27.1184 46.0156C25.417 44.9653 24.0411 43.4625 23.1446 41.6752C22.248 39.888 21.8661 37.8866 22.0416 35.8948C22.217 33.9029 22.9429 31.9991 24.138 30.3961C25.3332 28.793 26.9506 27.5539 28.8094 26.8172C30.6683 26.0804 32.6954 25.8751 34.6642 26.2241C36.6331 26.5731 38.4661 27.4628 39.9584 28.7936C41.4508 30.1244 42.5436 31.844 43.1149 33.7602H45.8721C47.7104 33.7602 49.4734 34.4904 50.7733 35.7903C52.0732 37.0902 52.8035 38.8532 52.8035 40.6916C52.8035 42.5299 52.0732 44.2929 50.7733 45.5928C49.4734 46.8927 47.7104 47.623 45.8721 47.623Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// <defs>
// <linearGradient id="paint0_linear_1707_27090" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
// <stop stopColor="#00C950"/>
// <stop offset="1" stopColor="#00BC7D"/>
// </linearGradient>
// </defs>
// </svg>
// ),
//     buttonGradient: "bg-linear-to-r from-[#00C950] to-[#00BC7D]",
//     reverse: true,
//   },
//   {
//     title: "Cyber Security",
//     description:
//       "Transform data into actionable insights with advanced analytics",
//     features: [
//       {
//         label: "Infrastructure Security Solutions",
//         path: "/solution/cyber-security/infrastructure-security",
//       },
//       {
//         label: "Data Security Solutions",
//         path: "/solution/cyber-security/data-security-solutions",
//       },
//       {
//         label: "Identity Security Solutions",
//         path: "/solution/cyber-security/identity-security-solutions",
//       },
//       {
//         label: "Application Security Solutions",
//         path: "/solution/cyber-security/application-security-solutions",
//       },
//       {
//         label: "Email Security Solutions",
//         path: "/solution/cyber-security/email-security-solutions",
//       },
//       {
//         label: "IoT Security Solutions",
//         path: "/solution/cyber-security/iot-security-solutions",
//       },
//       {
//         label: "AI Security Solutions",
//         path: "/solution/cyber-security/ai-security-solutions",
//       },
//       {
//         label: "Cyber Security Operations Solutions",
//         path: "/solution/cyber-security/cyber-security-operations-solutions",
//       },
//     ],
//     image: "/solution/main/9.png",
//     badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="url(#paint0_linear_1707_27124)"/>
// <path d="M47.645 38.9441C47.645 46.6457 42.2539 50.4965 35.8462 52.7299C35.5107 52.8436 35.1462 52.8382 34.8142 52.7145C28.3911 50.4965 23 46.6457 23 38.9441V28.1619C23 27.7534 23.1623 27.3616 23.4511 27.0728C23.74 26.7839 24.1318 26.6216 24.5403 26.6216C27.6209 26.6216 31.4717 24.7733 34.1519 22.432C34.4782 22.1532 34.8933 22 35.3225 22C35.7517 22 36.1668 22.1532 36.4931 22.432C39.1887 24.7887 43.0241 26.6216 46.1047 26.6216C46.5132 26.6216 46.905 26.7839 47.1939 27.0728C47.4827 27.3616 47.645 27.7534 47.645 28.1619V38.9441Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// <defs>
// <linearGradient id="paint0_linear_1707_27124" x1="0" y1="0" x2="73.935" y2="73.935" gradientUnits="userSpaceOnUse">
// <stop stopColor="#AD46FF"/>
// <stop offset="1" stopColor="#F6339A"/>
// </linearGradient>
// </defs>
// </svg>
// ),
//     buttonGradient: "bg-linear-to-r from-[#AD46FF] to-[#F6339A]",
//   },
//   {
//     title: "Digital Solutions",
//     description: "Upgrade legacy systems with cutting-edge technology",
//     features: [
//       {
//         label: "Digital & APP Innovation Solutions",
//         path: "/solution/digital-solutions/digital-app-innovation",
//       },
//       {
//         label: "Database & Business Analytics Solutions",
//         path: "/solution/digital-solutions/batabase-business-analytics",
//       },
//       {
//         label: "AI Solutions",
//         path: "/solution/digital-solutions/ai-solutions",
//       },
//       // { label:  "BizApps Solutions",path: "/solutions/network-security" },
//     ],

//     image: "/solution/main/8.png",
//     badgeImage: (<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 18.4838C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4838C8.27545 73.935 0 65.6596 0 55.4513V18.4838Z" fill="#FF9500"/>
// <path d="M49.292 21.5625H24.647C22.9456 21.5625 21.5664 22.9417 21.5664 24.6431V30.8044C21.5664 32.5058 22.9456 33.885 24.647 33.885H49.292C50.9934 33.885 52.3727 32.5058 52.3727 30.8044V24.6431C52.3727 22.9417 50.9934 21.5625 49.292 21.5625Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M49.2881 40.0469H24.6431C22.9417 40.0469 21.5625 41.4261 21.5625 43.1275V49.2888C21.5625 50.9901 22.9417 52.3694 24.6431 52.3694H49.2881C50.9895 52.3694 52.3688 50.9901 52.3688 49.2888V43.1275C52.3688 41.4261 50.9895 40.0469 49.2881 40.0469Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M27.7266 27.7266H27.7413" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M27.7266 46.2109H27.7413" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// ),
//     buttonGradient: "bg-[#FF9500]",
//     reverse: true,
//   },
// ];

// const CoreSolutions: React.FC = () => {
//   return (
//     <section className="pt-10 pb-6 md:pt-20 ">
//       <Container>
//         {/* Header */}
//         <div className="text-center mb-6 md:mb-[75px]">
//           <SectionTitle normalText="Our Core" highlightText="Solutions" />

//           <PageSubtitle
//             text="Comprehensive infrastructure solutions designed for modern enterprises"
//             className="mt-4 md:mt-[19px] text-[#45556C] md:w-[50%] mx-auto"
//           />
//         </div>

//         {/* Cards */}
//         {solutions.map((solution, index) => (
//           <div key={index} className="overflow-hidden mb-0 md:mb-20">
//             <div className="grid md:grid-cols-2 gap-8 md:gap-14 justify-center items-center">
//               {/* Image */}
//               <div
//                 className={`relative w-[350px] h-64 md:w-[711.62px] md:h-[462.09px] ${
//                   solution.reverse ? "md:order-2" : "md:order-1"
//                 }`}
//               >
//                 <Image
//                   fill
//                   src={solution.image}
//                   alt={solution.title}
//                   className=" w-full  h-64 md:w-[711.62px] md:h-[462.09px]  object-cover rounded-2xl"
//                 />
//               </div>

//               {/* Content */}
//               <div
//                 className={`${solution.reverse ? "md:order-1" : "md:order-2"}`}
//               >
//                 {solution.badgeImage && (
//                   // <Image
//                   //   src={solution.badgeImage}
//                   //   alt=""
//                   //   width={74}
//                   //   height={74}
//                   //   className="-ml-2"
//                   // />
//                   <div className="mb-3">{solution.badgeImage}</div>
//                 )}

//                 <h2 className="text-2xl md:text-3xl 2xl:text-[42px] font-bold text-[#0F172B] mb-3 md:mb-[38px]">
//                   {solution.title}
//                 </h2>

//                 {/* <p className="text-[#45556C] md:text-[21px] mb-6 md:mb-7">
//                   {solution.description}
//                 </p> */}
//                 <ul className="space-y-[13px] mb-6 md:mb-[37px]">
//                   {solution.features.map((feature, i) => (
//                     <Link key={i} href={feature.path}>
//                       <li className="flex items-start gap-3">
//                         <Image
//                           width={23}
//                           height={23}
//                           src="/solution/checkbox.png"
//                           alt="check"
//                           className="w-5 md:w-[23px] h-5 md:h-[23px] mt-0.5"
//                         />
//                         <span className="text-[#314158] md:text-[19px] hover:text-[#FF9500]">
//                           {feature.label}
//                         </span>
//                       </li>
//                     </Link>
//                   ))}
//                 </ul>

//                 {/* <button
//                   className={`${solution.buttonGradient} text-white px-6 py-2.5 rounded-[9px]
//                    transition flex gap-2 items-center cursor-pointer`}
//                 >
//                   Learn More <FaArrowRight/>
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Container>
//     </section>
//   );
// };

// export default CoreSolutions;

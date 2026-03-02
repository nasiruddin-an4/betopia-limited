import Container from "@/components/layout/Container";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  buttonBg: string;
  icon: ReactNode;
}

function ServiceCard({
  image,
  title,
  description,
  features,
  href,
  buttonBg,
  icon,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden transition hover:-translate-y-2 h-full grid grid-rows-[auto_1fr]">
      {/* Image */}
      <div className="relative h-61.75">
        <Image
          src={image}
          alt={title}
          fill
          className="object-center object-cover"
        />

        {/* SVG bottom-left */}
        <div className="absolute bottom-5 left-5">{icon}</div>
      </div>

      {/* Content */}
      <div className="p-4 grid grid-rows-[1fr_auto]">
        {/* Text */}
        <div className="mb-5">
          <h3 className="text-lg md:text-2xl font-semibold text-[#0F172B] mb-2.75">
            {title}
          </h3>

          <p className="text-[#45556C] mb-6">{description}</p>

          <ul className="space-y-3.25 text-[#45556C]">
            {features.map((item) => (
              <li key={item} className="flex  gap-2">
                <span className="mt-1">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1776_16387)">
                      <path
                        d="M17.1997 7.88946C17.5609 9.65705 17.3053 11.4951 16.4754 13.097C15.6455 14.6989 14.2915 15.9679 12.6392 16.6923C10.9869 17.4168 9.13622 17.5529 7.39573 17.0779C5.65524 16.603 4.13017 15.5458 3.07484 14.0825C2.01952 12.6192 1.49773 10.8384 1.59649 9.03697C1.69525 7.23556 2.4086 5.52244 3.61756 4.18331C4.82653 2.84419 6.45804 1.95999 8.24002 1.67819C10.022 1.39638 11.8467 1.73399 13.4099 2.63472"
                        stroke="#00C950"
                        strokeWidth="1.57748"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.10282 8.67742L9.4704 11.0423L17.3532 3.15029"
                        stroke="#00C950"
                        strokeWidth="1.57748"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1776_16387">
                        <rect
                          width="18.9297"
                          height="18.9297"
                          fill="white"
                          transform="translate(0 0.0117188) rotate(-0.0332799)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Button – forced bottom */}
        <Link href={href}>
          <button
            className={`w-full rounded-lg ${buttonBg} text-[13px] py-2 text-white font-medium flex items-center justify-center gap-2`}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                stroke="white"
                strokeWidth="1.95"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function CoreServices() {
  const services: ServiceCardProps[] = [

    {
      image: "/service/core/s2.png",
      title: "Cloud Services",
      description:
        "Scalable, secure, and cost-effective cloud solutions enabling faster innovation.",
      features: [
        "Cloud Migration Services",
        "Multi-Cloud Management",
        "Cloud Infrastructure Design",
        "Serverless Architecture",
        "Cloud Security & Compliance",
        "Cloud Cost Optimization",
      ],
      href: "/services/cloud-modernization",
      buttonBg: "bg-linear-to-r from-[#2B7FFF] to-[#0092B8]",
      icon: (
        <svg
          width="61"
          height="62"
          viewBox="0 0 61 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00779142 13.4493C0.00348834 6.04097 6.00562 0.0318599 13.4139 0.0275568L47.4426 0.00779141C54.8509 0.00348834 60.86 6.00562 60.8643 13.4139L60.8847 48.3748C60.889 55.7831 54.8868 61.7922 47.4785 61.7965L13.4498 61.8162C6.04151 61.8205 0.0324013 55.8184 0.0280982 48.4101L0.00779142 13.4493Z"
            fill="url(#paint0_linear_1776_16370)"
          />
          <path
            d="M37.4254 39.9206L26.6487 39.9269C25.0029 39.9274 23.3893 39.4633 21.9883 38.5863C20.5873 37.7093 19.4541 36.4541 18.7153 34.9609C17.9765 33.4677 17.6612 31.7953 17.8046 30.1306C17.9481 28.4659 18.5446 26.8745 19.5276 25.5342C20.5105 24.194 21.8412 23.1576 23.3709 22.5411C24.9006 21.9245 26.569 21.7519 28.1897 22.0426C29.8105 22.3334 31.3197 23.076 32.5487 24.1874C33.7777 25.2989 34.6781 26.7355 35.1492 28.3366L37.4187 28.3353C38.9318 28.3344 40.3833 28.9438 41.4539 30.0296C42.5245 31.1153 43.1265 32.5883 43.1274 34.1246C43.1282 35.661 42.528 37.1347 41.4587 38.2217C40.3894 39.3086 38.9386 39.9198 37.4254 39.9206Z"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1776_16370"
              x1="0"
              y1="0.0353482"
              x2="61.8169"
              y2="60.849"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2B7FFF" />
              <stop offset="1" stopColor="#0092B8" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
        {
      image: "/service/core/s1.png",
      title: "AI & Analytics",
      description:
        "Harness the power of artificial intelligence to transform your business operations and unlock insights.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "Intelligent Process Automation",
      ],
      href: "/services/ai-analytics",
      buttonBg: "bg-linear-to-r from-[#8E51FF] to-[#9810FA]",
      icon: (
        <svg
          width="61"
          height="62"
          viewBox="0 0 61 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00779142 13.4493C0.00348834 6.04097 6.00562 0.0318599 13.4139 0.0275568L47.4426 0.00779141C54.8509 0.00348834 60.86 6.00562 60.8643 13.4139L60.8847 48.3748C60.889 55.7831 54.8868 61.7922 47.4785 61.7965L13.4498 61.8162C6.04151 61.8205 0.0324013 55.8184 0.0280982 48.4101L0.00779142 13.4493Z"
            fill="url(#paint0_linear_1776_16310)"
          />
          <path
            d="M30.4531 38.637L30.4434 21.9025"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.2526 32.1995C33.1555 31.8746 32.1916 31.1975 31.5054 30.2696C30.8191 29.3417 30.4475 28.213 30.4461 27.0527C30.4461 28.213 30.0758 29.3421 29.3906 30.2708C28.7054 31.1995 27.7423 31.8777 26.6456 32.2039"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.5418 23.8314C37.8333 23.3182 38.0045 22.7439 38.0424 22.1528C38.0802 21.5616 37.9836 20.9696 37.76 20.4224C37.5364 19.8753 37.1919 19.3877 36.753 18.9974C36.3142 18.607 35.7927 18.3244 35.2291 18.1715C34.6655 18.0185 34.0747 17.9992 33.5026 18.1151C32.9304 18.231 32.3922 18.479 31.9295 18.8399C31.4669 19.2007 31.0922 19.6649 30.8345 20.1963C30.5768 20.7277 30.4429 21.3122 30.4433 21.9046C30.443 21.3122 30.3084 20.7279 30.0501 20.1968C29.7918 19.6656 29.4166 19.2019 28.9535 18.8416C28.4904 18.4812 27.9519 18.2339 27.3796 18.1186C26.8073 18.0034 26.2166 18.0234 25.6532 18.177C25.0897 18.3307 24.5686 18.6139 24.1302 19.0047C23.6918 19.3955 23.3478 19.8835 23.1249 20.4309C22.9019 20.9784 22.806 21.5705 22.8445 22.1616C22.8831 22.7527 23.055 23.3268 23.347 23.8396"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38.0449 22.0549C38.7903 22.249 39.4823 22.6128 40.0687 23.1187C40.6551 23.6246 41.1204 24.2593 41.4294 24.9748C41.7384 25.6903 41.883 26.4678 41.8523 27.2485C41.8215 28.0291 41.6161 28.7924 41.2518 29.4805"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38.0583 38.6318C39.1747 38.6311 40.2596 38.2564 41.1448 37.5659C42.0301 36.8753 42.6661 35.9075 42.9544 34.8126C43.2427 33.7176 43.1671 32.5566 42.7394 31.5097C42.3116 30.4627 41.5555 29.5884 40.5884 29.0222"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.5523 37.965C40.6415 38.6629 40.5889 39.3721 40.3977 40.0486C40.2064 40.725 39.8806 41.3545 39.4404 41.8982C39.0001 42.4418 38.4548 42.888 37.838 43.2093C37.2213 43.5306 36.5462 43.72 35.8545 43.766C35.1628 43.812 34.4691 43.7135 33.8164 43.4766C33.1636 43.2397 32.5656 42.8695 32.0593 42.3888C31.553 41.9081 31.1491 41.3271 30.8726 40.6817C30.5961 40.0363 30.4529 39.3402 30.4517 38.6364C30.4514 39.3402 30.309 40.0365 30.0332 40.6822C29.7575 41.3279 29.3543 41.9094 28.8485 42.3907C28.3428 42.872 27.7452 43.2429 27.0927 43.4805C26.4402 43.7182 25.7467 43.8174 25.0549 43.7723C24.3632 43.7271 23.6879 43.5384 23.0707 43.2179C22.4536 42.8973 21.9078 42.4517 21.4669 41.9086C21.026 41.3655 20.6995 40.7364 20.5074 40.0601C20.3154 39.3838 20.262 38.6748 20.3504 37.9767"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.8443 38.6405C21.728 38.6411 20.6426 38.2677 19.7566 37.5782C18.8705 36.8887 18.2333 35.9217 17.9438 34.827C17.6542 33.7324 17.7284 32.5713 18.155 31.5239C18.5816 30.4765 19.3366 29.6012 20.303 29.0339"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.8378 22.0644C22.0927 22.2594 21.401 22.624 20.8152 23.1305C20.2294 23.6371 19.7648 24.2724 19.4567 24.9882C19.1485 25.7041 19.0048 26.4818 19.0365 27.2624C19.0682 28.043 19.2744 28.8061 19.6395 29.4938"
            stroke="white"
            strokeWidth="2.55504"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1776_16310"
              x1="0"
              y1="0.0353482"
              x2="61.8169"
              y2="60.849"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8E51FF" />
              <stop offset="1" stopColor="#9810FA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      image: "/service/core/s3.svg",
      title: "Cyber Security Services",
      description:
        "Comprehensive security services to protect digital assets and ensure compliance.",
      features: [
        "24/7 Security Monitoring (SOC)",
        "Penetration Testing & Audits",
        "Threat Intelligence",
        "Incident Response",
        "Vulnerability Management",
        "Security Compliance Consulting",
      ],
      href: "/services/cybersecurity",
      buttonBg: "bg-linear-to-r from-[#FF6900] to-[#E7000B]",
      icon: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00769666 13.286C0.00344591 5.96777 5.93259 0.0317388 13.2508 0.0274881L47.3243 0.00769666C54.6425 0.00344591 60.5785 5.93259 60.5828 13.2508L60.6026 47.3243C60.6068 54.6425 54.6777 60.5785 47.3595 60.5828L13.286 60.6026C5.96777 60.6068 0.0317388 54.6777 0.0274881 47.3595L0.00769666 13.286Z"
            fill="url(#paint0_linear_1776_16423)"
          />
          <path
            d="M40.4029 31.5621C40.4065 37.872 35.9914 41.0295 30.7427 42.8624C30.4678 42.9557 30.1692 42.9514 29.8971 42.8503C24.6336 41.0361 20.2149 37.8837 20.2112 31.5738L20.2061 22.7399C20.2059 22.4052 20.3386 22.0842 20.5752 21.8474C20.8117 21.6106 21.1326 21.4774 21.4673 21.4772C23.9913 21.4757 27.1453 19.9595 29.3401 18.04C29.6073 17.8115 29.9473 17.6858 30.299 17.6856C30.6506 17.6854 30.9908 17.8107 31.2583 18.0389C33.4679 19.9685 36.6111 21.4684 39.135 21.4669C39.4697 21.4668 39.7908 21.5995 40.0276 21.8361C40.2644 22.0726 40.3976 22.3935 40.3977 22.7282L40.4029 31.5621Z"
            stroke="white"
            strokeWidth="2.52396"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1776_16423"
              x1="0"
              y1="0.0351847"
              x2="60.6103"
              y2="60.5751"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6900" />
              <stop offset="1" stopColor="#E7000B" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
     {
      image: "/service/core/s5.svg",
      title: "Software Development",
      description:
        "Build scalable, secure, and high-performance digital products tailored to your business goals  from idea to deployment and beyond.",
      features: [
        "Custom Web Application Development",
        "Mobile App Development (iOS & Android)",
        "Enterprise Software Solutions",
        "SaaS Product Development",
        "UI/UX-Focused Product Engineering",
        "API Development & System Integration",
      ],
      href: "/services/software-development",
      buttonBg: "bg-linear-to-r from-[#6B64DB] to-[#4338CA]",
      icon: (
        <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00779142 13.4493C0.00348834 6.04097 6.00562 0.0318599 13.4139 0.0275568L47.4426 0.00779141C54.8509 0.00348834 60.86 6.00562 60.8643 13.4139L60.8847 48.3748C60.889 55.7831 54.8868 61.7922 47.4785 61.7965L13.4498 61.8162C6.04151 61.8205 0.0324013 55.8184 0.0280982 48.4101L0.00779142 13.4493Z" fill="url(#paint0_linear_3562_9821)"/>
<path d="M20.8066 35.6961C18.9316 37.2711 18.3066 41.9461 18.3066 41.9461C18.3066 41.9461 22.9816 41.3211 24.5566 39.4461C25.4441 38.3961 25.4316 36.7836 24.4441 35.8086C23.9583 35.3449 23.3183 35.0769 22.6469 35.0562C21.9756 35.0354 21.3202 35.2633 20.8066 35.6961Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.1816 33.8208L26.4316 30.0708C27.0968 28.3451 27.9344 26.6909 28.9316 25.1333C30.3881 22.8045 32.4162 20.8871 34.8229 19.5634C37.2296 18.2397 39.935 17.5538 42.6816 17.5708C42.6816 20.9708 41.7066 26.9458 35.1816 31.3208C33.6027 32.3192 31.9277 33.1567 30.1816 33.8208Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.4316 30.0689H20.1816C20.1816 30.0689 20.8691 26.2814 22.6816 25.0689C24.7066 23.7189 28.9316 25.0689 28.9316 25.0689" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.1816 33.8205V40.0705C30.1816 40.0705 33.9691 39.383 35.1816 37.5705C36.5316 35.5455 35.1816 31.3205 35.1816 31.3205" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_3562_9821" x1="0" y1="0.0353482" x2="61.8169" y2="60.849" gradientUnits="userSpaceOnUse">
<stop stopColor="#4F46E5"/>
<stop offset="1" stopColor="#4338CA"/>
</linearGradient>
</defs>
</svg>

      ),
    },
     {
      image: "/service/core/s6.svg",
        title: "Managed Services",
      description:
        "Proactive IT management and continuous support to ensure your systems run securely, efficiently, and without disruption so you can focus on growing your business.",
      features: [
        "24/7 Infrastructure Monitoring",
        "IT Helpdesk & End-User Support",
        "Server & Network Management",
        "Cloud Infrastructure Management",
        "Backup & Disaster Recovery",
        "Security Patch & Update Management",
      ],
      href: "/services/managed",
      buttonBg: "bg-linear-to-r from-[#4AF5A3] to-[#246C4A]",
      icon: (
        <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00779142 13.4493C0.00348834 6.04097 6.00562 0.0318599 13.4139 0.0275568L47.4426 0.00779141C54.8509 0.00348834 60.86 6.00562 60.8643 13.4139L60.8847 48.3748C60.889 55.7831 54.8868 61.7922 47.4785 61.7965L13.4498 61.8162C6.04151 61.8205 0.0324013 55.8184 0.0280982 48.4101L0.00779142 13.4493Z" fill="url(#paint0_linear_3562_9881)"/>
<path d="M40.2539 31.8875C40.2539 38.1375 35.8789 41.2625 30.6789 43.075C30.4066 43.1672 30.1108 43.1628 29.8414 43.0625C24.6289 41.2625 20.2539 38.1375 20.2539 31.8875V23.1375C20.2539 22.806 20.3856 22.488 20.62 22.2536C20.8544 22.0192 21.1724 21.8875 21.5039 21.8875C24.0039 21.8875 27.1289 20.3875 29.3039 18.4875C29.5687 18.2612 29.9056 18.1369 30.2539 18.1369C30.6022 18.1369 30.9391 18.2612 31.2039 18.4875C33.3914 20.4 36.5039 21.8875 39.0039 21.8875C39.3354 21.8875 39.6534 22.0192 39.8878 22.2536C40.1222 22.488 40.2539 22.806 40.2539 23.1375V31.8875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.5039 30.6369L29.0039 33.1369L34.0039 28.1369" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_3562_9881" x1="0" y1="0.0353482" x2="61.8169" y2="60.849" gradientUnits="userSpaceOnUse">
<stop stopColor="#4AF5A3"/>
<stop offset="1" stopColor="#246C4A"/>
</linearGradient>
</defs>
</svg>

      ),
    },
    {
      image: "/service/core/s4.svg",
      title: "Resource Augmentation Services",
      description:
        "Scale your teams with skilled professionals who integrate seamlessly.",
      features: [
        "Dedicated IT & Engineering Resources",
        "On-Demand Skilled Professionals",
        "Short-Term & Long-Term Engagement Models",
        "Rapid Team Scaling",
        "Cost-Effective Talent Solutions",
        "Flexible Resource Management",
      ],
      href: "/services/resource-augmentation",
      buttonBg: "bg-[#FF6900]",
      icon: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00774719 13.373C0.00346854 6.00673 5.97153 0.031719 13.3378 0.0274404L47.2422 0.00774719C54.6084 0.00346854 60.5835 5.97153 60.5877 13.3378L60.6074 47.2422C60.6117 54.6084 54.6436 60.5835 47.2774 60.5877L13.373 60.6074C6.00673 60.6117 0.031719 54.6436 0.0274404 47.2774L0.00774719 13.373Z"
            fill="#FF6900"
          />
          <path
            d="M38.4414 41.3662C38.4414 38.6884 37.3776 36.1203 35.4841 34.2268C33.5906 32.3333 31.0225 31.2696 28.3447 31.2696C25.6669 31.2696 23.0988 32.3333 21.2053 34.2268C19.3118 36.1203 18.248 38.6884 18.248 41.3662"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.3456 31.2693C31.8307 31.2693 34.656 28.444 34.656 24.9589C34.656 21.4737 31.8307 18.6485 28.3456 18.6485C24.8604 18.6485 22.0352 21.4737 22.0352 24.9589C22.0352 28.444 24.8604 31.2693 28.3456 31.2693Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.4913 40.1032C43.4913 35.85 40.9671 31.8997 38.4429 30.0066C39.2727 29.3841 39.9361 28.5666 40.3746 27.6266C40.8132 26.6866 41.0132 25.653 40.957 24.6172C40.9009 23.5815 40.5903 22.5755 40.0527 21.6884C39.5151 20.8013 38.7672 20.0604 37.875 19.5313"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    
  ];

  return (
    <Container>
      <section className="py-10 lg:py-20">
        <HeadingOne
          title="Our Core"
          highlight="Services"
          center={true}
          className=""
        />

        {/* IMPORTANT: items-stretch */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </Container>
  );
}
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function CoreServices() {
//   return (
//     <section className="max-w-[1478px] mx-auto py-20 px-3 md:px-8">
//       {/* Header */}
//       <div className="text-center mb-14 md:mb-[85px]">

//         <h2 className="text-3xl md:text-[56px] font-bold">
//           Our Core <span className="text-[#FF6900]">Services</span>
//         </h2>
//         <div
//         className='block mx-auto mt-[21px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF6900]'
//       />
//         <p className="mt-[17px] text-[#45556C] md:text-[21px] text-center">
//           Comprehensive technology services designed to accelerate your digital
//           transformation
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 px-3 xl:px-0">
//         {/* AI & Analytics */}
//         <div
//           className="rounded-2xl border border-[#00000000] bg-white shadow-sm overflow-hidden transition-all duration-300 ease-out
//     hover:-translate-y-2"
//         >
//           <div className="relative h-[247px]">
//             <Image
//               src="/service/core/2.svg"
//               alt="Cloud Services"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="p-[16px] flex flex-col justify-between">
//             <div>
//             <h3 className=" md:text-[20px] text-[#0F172B] mb-[11px]">
//               AI & Analytics
//             </h3>
//             <p className="text-[#45556C] md:text-[15px] mb-6 md:mb-[26px]">
//               Harness the power of artificial intelligence to transform your
//               business operations, automate processes, and unlock new insights
//               from your data.
//             </p>
//             <ul className="space-y-[13px] md:text-[14px] text-[#45556C]">
//               {[
//                 "Machine Learning Models",
//                 "Natural Language Processing",
//                 "Computer Vision Solutions",
//                 "Predictive Analytics",
//                 "AI Chatbots & Virtual Assistants",
//                 "Intelligent Process Automation",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <Image
//                     alt=""
//                     src="/icons/active.svg"
//                     width={35}
//                     height={35}
//                     className="size-[20px] "
//                   />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             </div>

//             <Link href="/services/ai-analytics">
//               <button className="mt-[33px] w-full rounded-lg bg-linear-to-r from-[#8E51FF] to-[#9810FA] text-[13px] py-2 text-white font-medium flex items-center justify-center gap-2">
//                 Learn More    <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="white"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Cloud Services */}
//         <div
//           className="rounded-2xl border border-[#00000000] bg-white shadow-sm overflow-hidden transition-all duration-300 ease-out
//     hover:-translate-y-2"
//         >
//           <div className="relative h-[247px]">
//             <Image
//               src="/service/core/3.svg"
//               alt="Cloud Services"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="p-[16px]">
//              <h3 className=" md:text-[20px] text-[#0F172B] mb-[11px]">
//               Cloud Services
//             </h3>
//               <p className="text-[#45556C] md:text-[15px] mb-6 md:mb-[26px]">
//               Scalable, secure, and cost‑effective cloud solutions that enable
//               your business to innovate faster and operate more efficiently
//               across any platform.
//             </p>

//              <ul className="space-y-[13px] md:text-[14px] text-[#45556C]">
//               {[
//                 "Cloud Migration Services",
//                 "Multi‑Cloud Management",
//                 "Cloud Infrastructure Design",
//                 "Serverless Architecture",
//                 "Cloud Security & Compliance",
//                 "Cloud Cost Optimization",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <Image
//                     alt=""
//                     src="/icons/active.svg"
//                     width={35}
//                     height={35}
//                      className="size-[20px] "
//                   />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <Link href="/services/cloud-modernization">
//               <button className="mt-8 w-full rounded-lg bg-linear-to-r from-[#2B7FFF] to-[#0092B8] text-[13px] py-2 text-white font-medium flex items-center justify-center gap-2">
//                 Learn More    <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="white"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div
//           className="rounded-2xl border border-[#00000000] bg-white shadow-sm overflow-hidden transition-all duration-300 ease-out
//     hover:-translate-y-2"
//         >
//           <div className="relative h-[247px]">
//             <Image
//               src="/service/core/4.svg"
//               alt="Cloud Services"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="p-[16px]">
//               <h3 className=" md:text-[20px] text-[#0F172B] mb-[11px]">
//               Cyber Security Services
//             </h3>
//               <p className="text-[#45556C] md:text-[15px] mb-6 md:mb-[26px]">
//               Comprehensive security services to protect your digital assets,
//               ensure compliance, and maintain business continuity in the face of
//               evolving threats.
//             </p>

//              <ul className="space-y-[13px] md:text-[14px] text-[#45556C]">
//               {[
//                 "24/7 Security Monitoring (SOC)",
//                 "Penetration Testing & Audits",
//                 "Threat Intelligence",
//                 "Incident Response",
//                 "Vulnerability Management",
//                 "Security Compliance Consulting",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <Image
//                     alt=""
//                     src="/icons/active.svg"
//                     width={35}
//                     height={35}
//                      className="size-[20px] "
//                   />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <Link href="/services/cybersecurity">
//               <button className="mt-8 w-full rounded-lg bg-linear-to-r from-[#FF6900] to-[#E7000B] text-[13px] py-2 text-white font-medium flex items-center justify-center gap-2">
//                 Learn More    <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="white"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div
//           className="rounded-2xl border border-[#00000000] bg-white shadow-sm overflow-hidden transition-all duration-300 ease-out
//     hover:-translate-y-2"
//         >
//           <div className="relative h-[247px]">
//             <Image
//               src="/service/core/5.svg"
//               alt="Cloud Services"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="p-[16px]">
//               <h3 className=" md:text-[20px] text-[#0F172B] mb-[11px]">
//               Resource Augmentation Services
//             </h3>
//               <p className="text-[#45556C] md:text-[15px] mb-6 md:mb-[15px]">
//               Scale your teams with skilled professionals who integrate seamlessly into your operations, helping you accelerate delivery, reduce hiring time, and maintain full control over your projects.
//             </p>

//              <ul className="space-y-[13px] md:text-[14px] text-[#45556C]">
//               {[
//                 "Dedicated IT & Engineering Resources",
//                 "On-Demand Skilled Professionals",
//                 "Short-Term & Long-Term Engagement Models",
//                 "Rapid Team Scaling",
//                 "Cost-Effective Talent Solutions",
//                 "Flexible Resource Management",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <Image
//                     alt=""
//                     src="/icons/active.svg"
//                     width={35}
//                     height={35}
//                      className="size-[20px] "
//                   />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <Link href="/services/resource-augmentation">
//               <button className="mt-6 w-full rounded-lg bg-[#FF6900] text-[13px] py-2 text-white font-medium flex items-center justify-center gap-2">
//                 Learn More    <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="white"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

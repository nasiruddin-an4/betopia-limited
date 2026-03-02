import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Link from "next/link";

interface Feature {
  text: string;
}

type AccentColor = "blue" | "orange" | "purple";

interface PlanCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  revShare: number;
  revShareLabel: string;
  features: Feature[];
  isPopular?: boolean;
  accentColor: AccentColor;
  brandUsageText: string;
  applyPath?: string;
  viewHref?: string;
  showViewDetails?: boolean;
}

// --- Icons ---
const OrangeIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.77344 21.1875V3.85898C5.77344 3.34834 5.97629 2.85861 6.33737 2.49753C6.69845 2.13645 7.18818 1.93359 7.69883 1.93359H15.4004C15.911 1.93359 16.4008 2.13645 16.7619 2.49753C17.1229 2.85861 17.3258 3.34834 17.3258 3.85898V21.1875H5.77344Z"
      stroke="#FF9500"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.77656 11.5547H3.85117C3.34053 11.5547 2.8508 11.7575 2.48972 12.1186C2.12863 12.4797 1.92578 12.9694 1.92578 13.4801V19.2563C1.92578 19.7669 2.12863 20.2566 2.48972 20.6177C2.8508 20.9788 3.34053 21.1816 3.85117 21.1816H5.77656"
      stroke="#FF9500"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.3281 8.66406H19.2535C19.7642 8.66406 20.2539 8.86692 20.615 9.228C20.9761 9.58908 21.1789 10.0788 21.1789 10.5895V19.2537C21.1789 19.7644 20.9761 20.2541 20.615 20.6152C20.2539 20.9763 19.7642 21.1791 19.2535 21.1791H17.3281"
      stroke="#FF9500"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.62109 5.78125H13.4719"
      stroke="#FF9500"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.62109 9.62891H13.4719"
      stroke="#FF9500"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.62109 13.4805H13.4719"
      stroke="#FF9500"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.62109 17.3359H13.4719"
      stroke="#FF9500"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PurpleIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.77734 21.1875V3.85898C5.77734 3.34834 5.9802 2.85861 6.34128 2.49753C6.70236 2.13645 7.19209 1.93359 7.70273 1.93359H15.4043C15.9149 1.93359 16.4047 2.13645 16.7658 2.49753C17.1268 2.85861 17.3297 3.34834 17.3297 3.85898V21.1875H5.77734Z"
      stroke="#C27AFF"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.78047 11.5547H3.85508C3.34443 11.5547 2.8547 11.7575 2.49362 12.1186C2.13254 12.4797 1.92969 12.9694 1.92969 13.4801V19.2563C1.92969 19.7669 2.13254 20.2566 2.49362 20.6177C2.8547 20.9788 3.34443 21.1816 3.85508 21.1816H5.78047"
      stroke="#C27AFF"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.332 8.66406H19.2574C19.7681 8.66406 20.2578 8.86692 20.6189 9.228C20.98 9.58908 21.1828 10.0788 21.1828 10.5895V19.2537C21.1828 19.7644 20.98 20.2541 20.6189 20.6152C20.2578 20.9763 19.7681 21.1791 19.2574 21.1791H17.332"
      stroke="#C27AFF"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.625 5.78125H13.4758"
      stroke="#C27AFF"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.625 9.62891H13.4758"
      stroke="#C27AFF"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.625 13.4805H13.4758"
      stroke="#C27AFF"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.625 17.3359H13.4758"
      stroke="#C27AFF"
      strokeWidth="1.92539"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BlueIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_blue)">
      <path
        d="M5.77 21.18V3.86C5.77 3.35 5.98 2.86 6.34 2.5C6.70 2.14 7.19 1.93 7.70 1.93H15.40C15.91 1.93 16.40 2.14 16.76 2.50C17.12 2.86 17.33 3.35 17.33 3.86V21.18H5.77Z"
        stroke="#51A2FF"
        strokeWidth="1.93"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.78 11.55H3.85C3.34 11.55 2.85 11.76 2.49 12.12C2.13 12.48 1.93 12.97 1.93 13.48V19.26C1.93 19.77 2.13 20.26 2.49 20.62C2.85 20.98 3.34 21.18 3.85 21.18H5.78"
        stroke="#51A2FF"
        strokeWidth="1.93"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.33 8.66H19.25C19.76 8.66 20.25 8.87 20.62 9.23C20.98 9.59 21.18 10.08 21.18 10.59V19.25C21.18 19.76 20.98 20.25 20.62 20.62C20.25 20.98 19.76 21.18 19.25 21.18H17.33"
        stroke="#51A2FF"
        strokeWidth="1.93"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.62 5.78H13.47"
        stroke="#51A2FF"
        strokeWidth="1.93"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.62 9.63H13.47"
        stroke="#51A2FF"
        strokeWidth="1.93"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.62 13.48H13.47"
        stroke="#51A2FF"
        strokeWidth="1.93"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.62 17.34H13.47"
        stroke="#51A2FF"
        strokeWidth="1.93"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_blue">
        <rect width="23.1" height="23.1" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BrandUsageIcons: Record<AccentColor, React.ReactNode> = {
  blue: BlueIcon,
  orange: OrangeIcon,
  purple: PurpleIcon,
};

// --- PlanCard Component ---
const PlanCard: React.FC<PlanCardProps> = ({
  icon,
  title,
  subtitle,
  price,
  originalPrice,
  revShare,
  revShareLabel,
  features,
  isPopular,
  accentColor,
  brandUsageText,
  viewHref,
  showViewDetails = false,
  applyPath
}) => {
  const accentColors = {
    blue: {
      text: "text-[#8EC5FF]",
      viewtext: "text-[#51A2FF]",
      bg: "bg-[#2B7FFF33] border border-[#51A2FF4D]",
      gradient: "m bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]",
    },
    orange: {
      text: "text-[#FF9500]",
      viewtext: "text-[#FF9500]",
      bg: "bg-[#FF95004D] border border-[#FF950080]",
      gradient: "m bg-linear-to-r from-[#FF9500] to-[#F54900]",
    },
    purple: {
      text: "text-[#DAB2FF]",
      viewtext: "text-[#C27AFF]",
      bg: "bg-[#AD46FF33] border border-[#C27AFF4D]",
      gradient: "m bg-linear-to-r from-[#AD46FF] to-[#F6339A]",
    },
  };

  const currentAccent = accentColors[accentColor];

  return (
    <div className="relative rounded-2xl p-6 bg-linear-to-r from-[#FFFFFF1A] to-[#FFFFFF0D] border border-[#FFFFFF33] hover:bg-[#F5490033] hover:border-[#FF9500] transition-all flex flex-col h-full">
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-linear-to-r from-[#FF9500] to-[#F54900] text-white px-4 py-1 rounded-full flex items-center gap-1 text-sm">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2595_12343)">
                <path
                  d="M8.88009 1.77008C8.91385 1.70189 8.96598 1.6445 9.03062 1.60436C9.09526 1.56423 9.16983 1.54297 9.24592 1.54297C9.322 1.54297 9.39657 1.56423 9.46121 1.60436C9.52586 1.6445 9.57799 1.70189 9.61174 1.77008L11.3908 5.37364C11.508 5.61083 11.681 5.81603 11.895 5.97164C12.1089 6.12724 12.3574 6.22861 12.6192 6.26703L16.5978 6.84927C16.6732 6.86019 16.744 6.89199 16.8023 6.94107C16.8606 6.99015 16.9039 7.05455 16.9275 7.12699C16.951 7.19943 16.9539 7.27701 16.9356 7.35097C16.9174 7.42493 16.8788 7.49231 16.8243 7.54549L13.947 10.3473C13.7572 10.5322 13.6152 10.7605 13.5333 11.0124C13.4513 11.2644 13.4318 11.5325 13.4764 11.7937L14.1557 15.7523C14.169 15.8276 14.1608 15.9052 14.1322 15.9761C14.1035 16.0471 14.0555 16.1086 13.9936 16.1535C13.9317 16.1985 13.8584 16.2251 13.782 16.2305C13.7057 16.2358 13.6294 16.2195 13.5619 16.1836L10.0053 14.3136C9.77095 14.1906 9.51022 14.1263 9.24553 14.1263C8.98085 14.1263 8.72012 14.1906 8.48577 14.3136L4.92996 16.1836C4.86244 16.2193 4.78625 16.2354 4.71005 16.23C4.63384 16.2246 4.56069 16.1979 4.4989 16.1529C4.43712 16.108 4.38918 16.0466 4.36055 15.9758C4.33192 15.905 4.32374 15.8275 4.33694 15.7523L5.01545 11.7944C5.06027 11.5331 5.04085 11.2649 4.95887 11.0128C4.87689 10.7607 4.73481 10.5323 4.54488 10.3473L1.66758 7.54626C1.61259 7.49314 1.57362 7.42565 1.55511 7.35146C1.5366 7.27728 1.5393 7.19939 1.5629 7.12667C1.5865 7.05394 1.63005 6.98931 1.68859 6.94013C1.74713 6.89095 1.8183 6.8592 1.89401 6.84849L5.87186 6.26703C6.13391 6.2289 6.38278 6.12767 6.59703 5.97205C6.81128 5.81642 6.98451 5.61106 7.1018 5.37364L8.88009 1.77008Z"
                  stroke="white"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2595_12343">
                  <rect width="18.4838" height="18.4838" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-4">{icon}</div>

      <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
      <p className={`${currentAccent.text} mb-4`}>{subtitle}</p>

      <div className="mb-2">
        <span className="text-white text-3xl font-bold">
          ${price.toLocaleString()}
        </span>
        <span className="text-[#99A1AF] line-through ml-2">
          ${originalPrice.toLocaleString()}
        </span>
      </div>
      <p className="text-[#99A1AF] mb-4">Annual partnership fee</p>

      <div className={`rounded-lg p-3 mb-6 ${currentAccent.bg}`}>
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M11.5547 1.92578V21.1797"
              stroke="#FF9500"
              strokeWidth="1.92539"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.3631 4.81641H9.14287C6.76032 5.80329 5.77344 8.18584 5.77344 11.5553H13.9564C17.3258 14.9247 13.9564 18.2941 5.77344 18.2941"
              stroke="#FF9500"
              strokeWidth="1.92539"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#FF9500] text-2xl font-bold">{revShare}%</span>
          <span className="text-gray-300 text-sm">{revShareLabel}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          {BrandUsageIcons[accentColor]}
          <h4 className="text-white font-semibold">Brand Usage</h4>
        </div>
        <p className="text-[#99A1AF] ml-6 ">{brandUsageText}</p>
      </div>

      <div className="mb-6">
        <h4 className={`${currentAccent.text} font-semibold mb-3`}>
          {accentColor === "orange"
            ? "Premium Features:"
            : accentColor === "purple"
            ? "Enterprise Benefits:"
            : "What's Included:"}
        </h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300 ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.5527 21.1797C16.8696 21.1797 21.1797 16.8696 21.1797 11.5527C21.1797 6.23592 16.8696 1.92578 11.5527 1.92578C6.23592 1.92578 1.92578 6.23592 1.92578 11.5527C1.92578 16.8696 6.23592 21.1797 11.5527 21.1797Z"
                  stroke="#05DF72"
                  strokeWidth="1.92539"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66406 11.5465L10.5895 13.4719L14.4402 9.62109"
                  stroke="#05DF72"
                  strokeWidth="1.92539"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
<div className="mt-auto">
   <Link
        href={applyPath ?? "#"}>

  <button
    className={`w-full py-3 rounded-lg font-semibold text-white transition-all flex gap-1 items-center justify-center cursor-pointer ${currentAccent.gradient}`}
  >
    Apply Now <IoIosArrowForward className="text-2xl" />
  </button>
      </Link>

  {showViewDetails ? (
    <a
      href={viewHref || "#"}
      className={`text-center ${currentAccent.viewtext} mt-3  transition-colors flex gap-1 items-center justify-center text-sm`}
    >
      View detailed information <IoIosArrowForward className="text-xl" />
    </a>
  ) : (
  
    <div className="mt-3 h-5" />
  )}
</div>

    </div>
  );
};

// --- Main Page Component ---
const PartnershipPlans: React.FC = () => {
  // FIX: Explicitly typing the plans array as PlanCardProps[]
  const plans: PlanCardProps[] = [
    // {
    //   icon: (
    //     <svg
    //       width="74"
    //       height="74"
    //       viewBox="0 0 74 74"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M0 18.4837C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4837C8.27545 73.935 0 65.6596 0 55.4513V18.4837Z"
    //         fill="url(#paint0_linear_2595_12168)"
    //       />
    //       <path
    //         d="M35.4258 44.6692L38.5064 47.7498C38.8098 48.0533 39.17 48.2939 39.5665 48.4581C39.9629 48.6224 40.3878 48.7069 40.8169 48.7069C41.246 48.7069 41.6709 48.6224 42.0673 48.4581C42.4637 48.2939 42.8239 48.0533 43.1273 47.7498C43.4308 47.4464 43.6714 47.0862 43.8356 46.6898C43.9999 46.2934 44.0844 45.8685 44.0844 45.4394C44.0844 45.0103 43.9999 44.5854 43.8356 44.189C43.6714 43.7925 43.4308 43.4323 43.1273 43.1289"
    //         stroke="white"
    //         strokeWidth="3.08063"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M40.0472 40.0536L43.898 43.9044C44.5107 44.5171 45.3418 44.8614 46.2084 44.8614C47.075 44.8614 47.9061 44.5171 48.5189 43.9044C49.1317 43.2916 49.4759 42.4605 49.4759 41.5939C49.4759 40.7273 49.1317 39.8962 48.5189 39.2834L42.5425 33.307C41.6761 32.4417 40.5016 31.9556 39.277 31.9556C38.0525 31.9556 36.878 32.4417 36.0116 33.307L34.6561 34.6625C34.0433 35.2753 33.2122 35.6195 32.3456 35.6195C31.479 35.6195 30.6479 35.2753 30.0352 34.6625C29.4224 34.0497 29.0781 33.2186 29.0781 32.352C29.0781 31.4854 29.4224 30.6543 30.0352 30.0416L34.3634 25.7133C35.7686 24.3118 37.601 23.4191 39.5707 23.1763C41.5403 22.9336 43.5347 23.3548 45.238 24.3732L45.962 24.8045C46.6178 25.2003 47.3976 25.3376 48.1492 25.1896L50.8294 24.6505"
    //         stroke="white"
    //         strokeWidth="3.08063"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M50.8255 23.1094L52.3658 40.0528H49.2852"
    //         stroke="white"
    //         strokeWidth="3.08063"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M23.1067 23.1094L21.5664 40.0528L31.5784 50.0649C32.1912 50.6776 33.0223 51.0219 33.8889 51.0219C34.7555 51.0219 35.5866 50.6776 36.1994 50.0649C36.8122 49.4521 37.1564 48.621 37.1564 47.7544C37.1564 46.8878 36.8122 46.0567 36.1994 45.4439"
    //         stroke="white"
    //         strokeWidth="3.08063"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M23.1016 24.6445H35.4241"
    //         stroke="white"
    //         strokeWidth="3.08063"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <defs>
    //         <linearGradient
    //           id="paint0_linear_2595_12168"
    //           x1="0"
    //           y1="0"
    //           x2="73.935"
    //           y2="73.935"
    //           gradientUnits="userSpaceOnUse"
    //         >
    //           <stop stopColor="#2B7FFF" />
    //           <stop offset="1" stopColor="#00B8DB" />
    //         </linearGradient>
    //       </defs>
    //     </svg>
    //   ),
    //   title: "Sales Partner",
    //   subtitle: "Great for getting started",
    //   price: 1500,
    //   originalPrice: 2500,
    //   revShare: 15,
    //   revShareLabel: "Revenue share on each deal",
    //   accentColor: "blue",
    //   brandUsageText: "Use Betopia branding & portfolio",
    //   features: [
    //     { text: "Comprehensive partner training program" },
    //     { text: "Marketing collaterals & sales materials" },
    //     { text: "Dedicated Partner Success Manager" },
    //     { text: "Sales enablement & lead support" },
    //     { text: "Access to partner portal & resources" },
    //   ],
    //   showViewDetails: true,
    //   viewHref: "/partner/sales-partner",
    //   applyPath: "/partner/sales-partner/partner-form",
    // },
    {
      icon: (
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 18.4837C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4837C8.27545 73.935 0 65.6596 0 55.4513V18.4837Z"
            fill="url(#paint0_linear_2595_12253)"
          />
          <path
            d="M35.4319 51.9536C35.9002 52.224 36.4314 52.3663 36.9722 52.3663C37.513 52.3663 38.0442 52.224 38.5125 51.9536L49.2947 45.7924C49.7625 45.5223 50.1511 45.1339 50.4215 44.6661C50.6918 44.1984 50.8345 43.6679 50.835 43.1276V30.8051C50.8345 30.2649 50.6918 29.7343 50.4215 29.2666C50.1511 28.7989 49.7625 28.4105 49.2947 28.1404L38.5125 21.9791C38.0442 21.7088 37.513 21.5664 36.9722 21.5664C36.4314 21.5664 35.9002 21.7088 35.4319 21.9791L24.6497 28.1404C24.1818 28.4105 23.7932 28.7989 23.5229 29.2666C23.2525 29.7343 23.1099 30.2649 23.1094 30.8051V43.1276C23.1099 43.6679 23.2525 44.1984 23.5229 44.6661C23.7932 45.1339 24.1818 45.5223 24.6497 45.7924L35.4319 51.9536Z"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.9688 52.3719V36.9688"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.5586 29.2617L36.9747 36.9633L50.3908 29.2617"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.0391 25.0625L43.9019 32.9951"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2595_12253"
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
      ),
      title: "White-Label Partner",
      subtitle: "Best value for agencies",
      price: 3000,
      originalPrice: 5000,
      revShare: 20,
      revShareLabel: "Revenue share on each deal",
      accentColor: "orange",
      isPopular: true,
      brandUsageText: "Operate under your own brand identity",
      features: [
        { text: "Full project delivery by Betopia team" },
        { text: "Dedicated Partner Success Manager" },
        { text: "Co-marketing & promotional support" },
        { text: "Your branding on all solutions" },
        { text: "White-label portal access" },
        { text: "Priority technical support" },
      ],
      showViewDetails: true,
      viewHref: "/partner/white-label",
      applyPath: "/partner/white-label/partner-form",
    },
    {
      icon: (
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 18.4837C0 8.27545 8.27546 0 18.4838 0H55.4513C65.6596 0 73.935 8.27546 73.935 18.4838V55.4513C73.935 65.6596 65.6596 73.935 55.4513 73.935H18.4837C8.27545 73.935 0 65.6596 0 55.4513V18.4837Z"
            fill="url(#paint0_linear_2595_12348)"
          />
          <path
            d="M43.1308 50.8278V47.7472C43.1308 46.1131 42.4817 44.546 41.3262 43.3905C40.1707 42.2351 38.6036 41.5859 36.9695 41.5859H27.7277C26.0936 41.5859 24.5265 42.2351 23.371 43.3905C22.2155 44.546 21.5664 46.1131 21.5664 47.7472V50.8278"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.3527 35.4319C35.7554 35.4319 38.5139 32.6734 38.5139 29.2706C38.5139 25.8679 35.7554 23.1094 32.3527 23.1094C28.9499 23.1094 26.1914 25.8679 26.1914 29.2706C26.1914 32.6734 28.9499 35.4319 32.3527 35.4319Z"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.3748 50.8307V47.7501C52.3738 46.3849 51.9195 45.0588 51.0831 43.9799C50.2467 42.9009 49.0757 42.1303 47.7539 41.7891"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.1289 23.3047C44.4542 23.644 45.6289 24.4148 46.4677 25.4955C47.3066 26.5762 47.7619 27.9053 47.7619 29.2734C47.7619 30.6415 47.3066 31.9706 46.4677 33.0513C45.6289 34.132 44.4542 34.9028 43.1289 35.2421"
            stroke="white"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2595_12348"
              x1="0"
              y1="0"
              x2="73.935"
              y2="73.935"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AD46FF" />
              <stop offset="1" stopColor="#F6339A" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Co-Branded Partner",
      subtitle: "Perfect for established firms",
      price: 2000,
      originalPrice: 7500,
      revShare: 30,
      revShareLabel: "Revenue share on each deal",
      accentColor: "purple",
      brandUsageText: "Joint branding with Betopia partnership",
      features: [
        { text: "Joint go-to-market strategy" },
        { text: "Co-branded marketing campaigns" },
        { text: "Executive Partner Success Manager" },
        { text: "Shared sales & delivery resources" },
        { text: "Priority enterprise support" },
        { text: "Quarterly business reviews" },
      ],
      showViewDetails: true,
      viewHref: "/partner/co-branded",
      applyPath: "/partner/co-branded/partner-form",
    },
  ];

  return (
    <div id="partner-plans" className=" m bg-linear-to-br from-[#101828] via-[#1C398E] to-[#101828] py-16 px-4">
      <div className="max-w-[1004px] mx-auto px-4 xl:px-0">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFFFFF33] text-white px-4 py-1.5 rounded-full mb-4 text-sm">
            Partnership Models
          </div>
          <UnderlineSectionTitle
            title="Choose Your Perfect Partnership Plan"
            wrapperClassName="mb-6 text-center text-white"
          />
          <p className="text-[#D1D5DC] text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Flexible partnership options designed to match your business model
            and growth ambitions
          </p>
        </div>

        <div className="grid  lg:grid-cols-2 gap-6 mb-16">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>

        <div className="bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-3xl p-8">
          <h2 className="text-white text-2xl font-bold text-center mb-8">
            Quick Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* <div className="text-center md:border-r border-[#FFFFFF33]">
              <p className="text-[#51A2FF] mb-2">Sales Partner</p>
              <p className="text-white text-4xl font-bold mb-1">15%</p>
              <p className="text-[#99A1AF]">Revenue Share</p>
            </div> */}
            <div className="text-center md:border-r border-[#FFFFFF33]">
              <p className="text-[#FF9500] mb-2">White-Label</p>
              <p className="text-white text-4xl font-bold mb-1">20%</p>
              <p className="text-[#99A1AF]">Revenue Share</p>
            </div>
            <div className="text-center">
              <p className="text-[#C27AFF] mb-2">Co-Branded</p>
              <p className="text-white text-4xl font-bold mb-1">30%</p>
              <p className="text-[#99A1AF]">Revenue Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPlans;

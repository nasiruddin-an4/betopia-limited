import React from "react";

export const Data = [
  {
    bg: "bg-[#EFF6FF]",
    title: "Election & Ballot Management",
    description: [
      "Configurable election rules per organization",
      "Supports FPTP, Ranked Choice, STV, and Weighted voting",
      "Multiple ballots with voter segmentation",
      "Multilingual ballot support",
    ],
    iconColor: "#2B7FFF",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.0039 42V38C32.0039 35.8783 31.1611 33.8434 29.6608 32.3431C28.1605 30.8429 26.1256 30 24.0039 30H12.0039C9.88217 30 7.84734 30.8429 6.34705 32.3431C4.84676 33.8434 4.00391 35.8783 4.00391 38V42"
          stroke="#FF9500"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.9961 6.25391C33.7116 6.69865 35.2309 7.70043 36.3155 9.10203C37.4 10.5036 37.9885 12.2257 37.9885 13.9979C37.9885 15.7701 37.4 17.4922 36.3155 18.8938C35.2309 20.2954 33.7116 21.2972 31.9961 21.7419"
          stroke="#FF9500"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.9961 42.0017V38.0017C43.9948 36.2292 43.4048 34.5073 42.3188 33.1063C41.2328 31.7054 39.7124 30.7049 37.9961 30.2617"
          stroke="#FF9500"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0039 22C22.4222 22 26.0039 18.4183 26.0039 14C26.0039 9.58172 22.4222 6 18.0039 6C13.5856 6 10.0039 9.58172 10.0039 14C10.0039 18.4183 13.5856 22 18.0039 22Z"
          stroke="#FF9500"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    bg: "bg-[#F0FDF4]",
    title: "Voter Management & Eligibility",
    description: [
      "Bulk voter upload via CSV",
      "Automated validation and deduplication",
      "One-voter-one-vote enforcement",
      "Role-based and group-based eligibility",
    ],
    iconColor: "#2DB67C",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0039 3.99609V11.9961"
          stroke="#2DB67C"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.9961 3.99609V11.9961"
          stroke="#2DB67C"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 8.00391H10C7.79086 8.00391 6 9.79477 6 12.0039V40.0039C6 42.213 7.79086 44.0039 10 44.0039H38C40.2091 44.0039 42 42.213 42 40.0039V12.0039C42 9.79477 40.2091 8.00391 38 8.00391Z"
          stroke="#2DB67C"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 20.0039H42"
          stroke="#2DB67C"
          strokeWidth="2.31047"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

interface CardProps {
  bg: string;
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const Card = ({ bg, title, description, icon }: CardProps) => {
  return (
    <div
      className={`md:p-9 p-4 rounded-2xl shadow-lg border border-[#E2E8F0]  hover:shadow-xl  ${bg}`}
    >
      <div className="p-3 rounded-xl w-full bg-white flex items-center gap-3">
        {icon}
        <h5 className="text-lg md:text-xl font-semibold  text-[#0F172B]">
          {title}
        </h5>
      </div>

      <ul className="space-y-2 mt-4">
        {description.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-base md:text-lg text-gray-600"
          >
            <span className="mt-2 h-1 w-1 rounded-full bg-gray-400 ml-1" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function OurPlatform() {
  return (
    <div className="max-w-420 w-11/12 mx-auto py-10 lg:py-20 px-4">
      <h3 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
        Core Platform <span className="text-[#FF9500]">Capabilities</span>{" "}
      </h3>
      <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-10"></div>
      <p className="mt-4 text-lg md:text-xl xl:text-2xl text-center font-normal  text-[#45556C] mx-auto max-w-250 px-0 md:px-4">
        Everything you need to manage your workforce efficiently in one
        integrated platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-7 mt-8 ">
        {Data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
// import React from "react";

// export const Data = [
//   {
//     bg: "bg-[#2B7FFF1A]",
//     title: "Organization &  Tenant Management",
//     description: [
//       "Dedicated and isolated environment for each organization",
//       "White-label branding (logo, theme, domain mapping)",
//       "Flexible subscription and monetization models",
//     ],
//     iconColor: "#2B7FFF",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M18.6673 24.5V22.1667C18.6673 20.929 18.1757 19.742 17.3005 18.8668C16.4253 17.9917 15.2383 17.5 14.0007 17.5H7.00065C5.76297 17.5 4.57599 17.9917 3.70082 18.8668C2.82565 19.742 2.33398 20.929 2.33398 22.1667V24.5"
//           stroke="#2B7FFF"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M18.666 3.64844C19.6667 3.90787 20.553 4.49225 21.1856 5.30984C21.8183 6.12744 22.1616 7.13197 22.1616 8.16577C22.1616 9.19957 21.8183 10.2041 21.1856 11.0217C20.553 11.8393 19.6667 12.4237 18.666 12.6831"
//           stroke="#2B7FFF"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M25.666 24.5007V22.1673C25.6652 21.1334 25.3211 20.1289 24.6876 19.3117C24.0541 18.4945 23.1672 17.9108 22.166 17.6523"
//           stroke="#2B7FFF"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M10.5007 12.8333C13.078 12.8333 15.1673 10.744 15.1673 8.16667C15.1673 5.58934 13.078 3.5 10.5007 3.5C7.92332 3.5 5.83398 5.58934 5.83398 8.16667C5.83398 10.744 7.92332 12.8333 10.5007 12.8333Z"
//           stroke="#2B7FFF"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     bg: "bg-[#00C9501A]",
//     title: "Role-Based User & Governance Management",
//     description: [
//       "Role-based access control (RBAC) for admins, committees, officers, and observers",
//       "Controlled internal staff permissions",
//       "Immutable activity logs for accountability",
//     ],
//     iconColor: "#2DB67C",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M9.33398 2.33203V6.9987"
//           stroke="#2DB67C"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M18.666 2.33203V6.9987"
//           stroke="#2DB67C"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M22.1667 4.66797H5.83333C4.54467 4.66797 3.5 5.71264 3.5 7.0013V23.3346C3.5 24.6233 4.54467 25.668 5.83333 25.668H22.1667C23.4553 25.668 24.5 24.6233 24.5 23.3346V7.0013C24.5 5.71264 23.4553 4.66797 22.1667 4.66797Z"
//           stroke="#2DB67C"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M3.5 11.668H24.5"
//           stroke="#2DB67C"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     bg: "bg-[#FAF5FF]",
//     title: "Centralized Voter Registration &  Control",
//     description: [
//       "Secure centralized voter registry",
//       "Unique voter identification to prevent duplication",
//       "Custom identity attributes (email, phone, employee ID, member ID, etc.)",
//     ],
//     iconColor: "#FF6900",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M17.4993 2.33203H6.99935C6.38051 2.33203 5.78702 2.57786 5.34943 3.01545C4.91185 3.45303 4.66602 4.04653 4.66602 4.66536V23.332C4.66602 23.9509 4.91185 24.5444 5.34943 24.9819C5.78702 25.4195 6.38051 25.6654 6.99935 25.6654H20.9994C21.6182 25.6654 22.2117 25.4195 22.6493 24.9819C23.0869 24.5444 23.3327 23.9509 23.3327 23.332V8.16536L17.4993 2.33203Z"
//           stroke="#FF9500"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M16.332 2.33203V6.9987C16.332 7.61754 16.5779 8.21103 17.0154 8.64861C17.453 9.0862 18.0465 9.33203 18.6654 9.33203H23.332"
//           stroke="#FF9500"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M11.6673 10.5H9.33398"
//           stroke="#FF9500"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M18.6673 15.168H9.33398"
//           stroke="#FF9500"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M18.6673 19.832H9.33398"
//           stroke="#FF9500"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     bg: "bg-[#FF69001A]",
//     title: "Election & Ballot Management",
//     description: [
//       "Complete election lifecycle management (Draft → Live → Archived)",
//       "Support for multiple positions and voting formats",
//       "Configurable voting rules (single, multi-select, weighted)",
//     ],
//     iconColor: "#FF6900",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M13.8633 2.30859V25.4133"
//           stroke="#FF6900"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M19.6392 5.77734H10.975C9.90261 5.77734 8.87417 6.20334 8.1159 6.96161C7.35763 7.71988 6.93164 8.74831 6.93164 9.82066C6.93164 10.893 7.35763 11.9215 8.1159 12.6797C8.87417 13.438 9.90261 13.864 10.975 13.864H16.7511C17.8235 13.864 18.8519 14.29 19.6102 15.0482C20.3685 15.8065 20.7945 16.835 20.7945 17.9073C20.7945 18.9797 20.3685 20.0081 19.6102 20.7664C18.8519 21.5246 17.8235 21.9506 16.7511 21.9506H6.93164"
//           stroke="#FF6900"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     bg: "bg-[#FDF2F8]",
//     title: "Advanced Voting Security & Integrity",
//     description: [
//       "Multi-factor voter verification (OTP, voting tokens)",
//       "Cryptographically secured vote recording",
//       "Device fingerprinting and IP monitoring",
//     ],
//     iconColor: "#2B7FFF",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M17.8783 14.8906L19.6285 24.7402C19.6481 24.8561 19.6318 24.9753 19.5818 25.0818C19.5318 25.1883 19.4505 25.277 19.3488 25.336C19.2471 25.3951 19.1297 25.4216 19.0125 25.4122C18.8952 25.4027 18.7837 25.3577 18.6927 25.2831L14.557 22.179C14.3573 22.0298 14.1148 21.9492 13.8656 21.9492C13.6163 21.9492 13.3738 22.0298 13.1742 22.179L9.03148 25.282C8.94059 25.3564 8.82916 25.4014 8.71206 25.4108C8.59495 25.4203 8.47775 25.3938 8.37608 25.3349C8.27441 25.2761 8.1931 25.1876 8.14301 25.0813C8.09293 24.9751 8.07644 24.856 8.09574 24.7402L9.84477 14.8906"
//           stroke="#F6339A"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M13.863 16.1714C17.6912 16.1714 20.7945 13.0681 20.7945 9.24C20.7945 5.41189 17.6912 2.30859 13.863 2.30859C10.0349 2.30859 6.93164 5.41189 6.93164 9.24C6.93164 13.0681 10.0349 16.1714 13.863 16.1714Z"
//           stroke="#F6339A"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     bg: "bg-[#ECFEFF]",
//     title: "Analytics & Reports",
//     description: [
//       "Comprehensive HR analytics with customizable reports and data-driven insights.",
//     ],
//     iconColor: "#2DB67C",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M18.4844 8.08594H25.4158V15.0173"
//           stroke="#00B8DB"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M25.4152 8.08594L15.5957 17.9054L9.81957 12.1293L2.31055 19.6383"
//           stroke="#00B8DB"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     bg: "bg-[#EEF2FF]",
//     title: "End-to-End Encryption & Data Privacy",
//     description: [
//       "Ballot encryption at submission",
//       "Separation of voter identity from vote data",
//       "Encrypted storage of sensitive information",
//     ],
//     iconColor: "#FF6900",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M13.8633 6.92969V13.8611L18.4842 16.1716"
//           stroke="#615FFF"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M13.8629 25.4133C20.2431 25.4133 25.4152 20.2411 25.4152 13.8609C25.4152 7.48075 20.2431 2.30859 13.8629 2.30859C7.48271 2.30859 2.31055 7.48075 2.31055 13.8609C2.31055 20.2411 7.48271 25.4133 13.8629 25.4133Z"
//           stroke="#615FFF"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     bg: "bg-[#FEF2F2]",
//     title: "Device & Booth Management",
//     description: [
//       "Secure device registration and authorization",
//       "Device-to-booth mapping with unique identifiers",
//       "Real-time device health monitoring",
//     ],
//     iconColor: "#FF6900",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="28"
//         height="28"
//         viewBox="0 0 28 28"
//         fill="none"
//       >
//         <path
//           d="M3.46484 3.46484V21.9486C3.46484 22.5614 3.70827 23.149 4.14156 23.5823C4.57486 24.0156 5.16254 24.2591 5.77531 24.2591H24.2591"
//           stroke="#FB2C36"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M20.793 19.6403V10.3984"
//           stroke="#FB2C36"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M15.0195 19.6402V5.77734"
//           stroke="#FB2C36"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M9.24219 19.6376V16.1719"
//           stroke="#FB2C36"
//           strokeWidth="2.31047"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
// ];

// interface CardProps {
//   bg: string;
//   title: string;
//   description: string[];
//   icon: React.ReactNode;
// }

// const Card = ({ bg, title, description, icon }: CardProps) => {
//   return (
//     <div
//       className={`p-9 rounded-2xl border-[1px] hover:shadow-xl shadow-[#ffcd8d] border-gray-200 ${bg}`}
//     >
//       <div className="p-3 rounded-xl w-full bg-white flex items-center gap-3">
//         {icon}
//         <h5 className="text-lg md:text-xl font-normal  text-[#0F172B]">
//           {title}
//         </h5>
//       </div>

//       <ul className="space-y-2 mt-4">
//         {description.map((point, idx) => (
//           <li
//             key={idx}
//             className="flex items-start gap-2 text-base text-gray-600"
//           >
//             <span className="mt-2 h-1 w-1 rounded-full bg-gray-400 ml-1" />
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default function OurPlatform() {
//   return (
//     <div className="max-w-[1660px] mx-auto py-16 px-4">
//       <h3 className="text-center text-black text-3xl md:text-4xl xl:text-[52px]  font-bold">
//         One Platform, <span className="text-[#FF9500]">Capabilities</span>{" "}
//       </h3><div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>
//       <p className="mt-4 text-lg md:text-xl xl:text-2xl text-center font-normal  text-[#45556C] mx-auto max-w-[1000px] px-2 sm:px-4">
//         Everything you need to manage your workforce efficiently in one
//         integrated platform
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-8 ">
//         {Data.map((item, index) => (
//           <Card key={index} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

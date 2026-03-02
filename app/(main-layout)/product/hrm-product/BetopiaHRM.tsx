"use client";

import Image from "next/image";
import { useState } from "react";

export default function BetopiaHRM() {
  const ReadMoreText = ({
    text,
    wordLimit = 20,
  }: {
    text: string;
    wordLimit?: number;
  }) => {
    const [expanded, setExpanded] = useState(false);

    const words = text.split(" ");
    const isLong = words.length > wordLimit;

    const displayedText = expanded ? text : words.slice(0, wordLimit).join(" ");

    return (
      <p className="text-lg xl:text-xl text-[#6e6e6e] max-w-415 mx-auto mb-6">
        {displayedText}
        {isLong && !expanded && " "}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#FF9500] font-semibold ml-1 hover:underline cursor-pointer"
          >
            {expanded ? "Read less" : "..."}
          </button>
        )}
      </p>
    );
  };

  return (
    <>
      <div className=" py-10 lg:py-20">
        <div
          className="max-w-420 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20
                items-stretch px-4"
        >
          <div>
            <div className="">
              <h1 className="text-3xl md:text-4xl xl:text-[52px] text-[#45556C] font-semibold mb-4 md:mb-0">
                Betopia HRM
              </h1>
              <div className="flex xl:hidden">
                <ReadMoreText
                  text=" Managing people at scale requires more than spreadsheets and disconnected tools. Betopia HRM is a modern, web-based Human Resource Management System designed to automate, secure, and optimize the entire employee lifecycle starting from specific features like Payroll, Recruitment, Onboarding, Performance Management, Time & Attendance, Benefits Administration, Employee Self-Service and enhances workforce productivity.
          Built for growing and distributed organizations, Betopia HRM centralizes HR operations into a single, intelligent platform that reduces manual effort, improves visibility, and enhances workforce productivity.  
           "
                  wordLimit={55}
                />
              </div>

              <div className="hidden xl:flex 2xl:hidden text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
                <ReadMoreText
                  text="Managing people at scale requires more than spreadsheets and disconnected tools. Betopia HRM is a modern, web-based Human Resource Management System designed to automate, secure, and optimize the entire employee lifecycle starting from specific features like Payroll, Recruitment, Onboarding, Performance Management, Time & Attendance, Benefits Administration, Employee Self-Service and enhances workforce productivity.
                Built for growing and distributed organizations, Betopia HRM centralizes HR operations into a single, intelligent platform that reduces manual effort, improves visibility, and enhances workforce productivity. 
           "
                  wordLimit={55}
                />
              </div>

              <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
                Managing people at scale requires more than spreadsheets and
                disconnected tools. Betopia HRM is a modern, web-based Human
                Resource Management System designed to automate, secure, and
                optimize the entire employee lifecycle starting from specific
                features like Payroll, Recruitment, Onboarding, Performance
                Management, Time & Attendance, Benefits Administration, Employee
                Self-Service and enhances workforce productivity.
              </p>
              <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
                Built for growing and distributed organizations, Betopia HRM
                centralizes HR operations into a single, intelligent platform
                that reduces manual effort, improves visibility, and enhances
                workforce productivity.
              </p>
            </div>
          </div>

          {/* Image from right */}
          <div className="relative w-full   lg:h-full rounded-2xl overflow-hidden">
            <Image
              src="/product/betopia_hrm2.jpg"
              alt="count_trust"
              width={706}
              height={514}
              className="object-cover rounded-2xl mx-auto"
            />
          </div>
        </div>
      </div>
      {/* <div className=" pt-10 md:pt-20 w-11/12 mx-auto">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center px-3 ">


        <div 
        >
          <h1 className="text-3xl md:text-4xl xl:text-[52px] text-[#45556C] font-normal">
            Betopia HRM
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 text-justify">
            Managing people at scale requires more than spreadsheets and disconnected tools. Betopia HRM is a modern, web-based Human Resource Management System designed to automate, secure, and optimize the entire employee lifecycle—from recruitment and onboarding to payroll, performance, and workforce analytics.

          </p>
            <p className="text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 text-justify">
           Built for growing and distributed organizations, Betopia HRM centralizes HR operations into a single, intelligent platform that reduces manual effort, improves visibility, and enhances workforce productivity.        </p>
        </div>

      
        <div 
        >
          <Image
            className="shadow-2xl rounded-sm"
            src="/product/betopia_hrm2.jpg"
            alt="count_trust"
            width={721}
            height={425}
          />
        </div>

      </div>
    </div> */}
    </>
  );
}

// "use client";

// import Image from "next/image";
// import React from "react";

// export default function BetopiaHRM() {
//   return (
//     <div className="bg-[#fcf7f2] py-16">
//       <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-3 ">

//         {/* Content from left */}
//         <div
//         >
//           <h1 className="text-3xl md:text-4xl xl:text-[52px] text-[#45556C] font-normal">
//             Betopia HRM
//           </h1>
//           <p className="text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 text-justify">
//             HRM is a comprehensive workforce management solution designed to centralize HR operations, reduce manual workloads, and provide data-driven insights. From employee information and attendance to leave, shifts, and analytics, HRM enables organizations to manage human capital efficiently and transparently.
//           </p>
//         </div>

//         {/* Image from right */}
//         <div
//         >
//           <Image
//             className="shadow-2xl shadow-[#FF690033] rounded-sm"
//             src="/product/hrm.jpg"
//             alt="count_trust"
//             width={721}
//             height={425}
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";

const whyChooseData = [
  {
    id: "01",
    title: "Built for trust, governance, and accountability",
    description:
      "Built to ensure trust, accountability, and transparent governance, promoting reliable and responsible decision-making.",
  },
  {
    id: "02",
    title: "Enterprise-grade security by design",
    description:
      "Built to provide robust, enterprise-level security, protecting data, systems, and operations with reliability and trust.",
  },
  {
    id: "03",
    title: "Controlled voting environments",
    description:
      "It has been designed in such a way that it can ensure secure, monitored, and well-managed voting processes, by keeping integrity, transparency and accurate results.  ",
  },
  {
    id: "04",
    title: "Flexible deployment models",
    description:
      "Designed to support adaptable deployment options, fitting both cloud and on-premise setups for seamless integration.",
  },
  {
    id: "05",
    title: "Audit-ready and compliance-aligned",
    description:
      "Built to meet regulatory standards, ensuring full compliance, transparency, and readiness for audits anytime, anywhere.",
  },
];

export default function WhyChooseBetopia() {
  return (
    <div className="bg-[#ffffff]">
      <div className=" py-10 lg:py-20">
        <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
          Why Choose <span className="text-[#FF9500]">Count Trust</span>
        </h2>

        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 md:mb-16"></div>
        <div
          className="max-w-420 w-11/12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-20
                      items-stretch px-4 "
        >
          <div className="space-y-8">
            {whyChooseData.map((item) => (
              <div
                key={item.id}
                className="md:flex items-start gap-5 bg-white rounded-2xl"
              >
                {/* <div className="px-4 py-3 rounded-2xl bg-[#FF9500] mt-1">
                  <h4 className="text-lg md:text-2xl font-normal text-white">
                    {item.id}
                  </h4>
                </div> */}
                <div className="px-4 py-3 rounded-2xl bg-[#FF9500] mt-1 mb-3 lg:mb-0 hidden lg:block">
                  <h4 className="text-lg md:text-2xl font-normal text-white">
                    {item.id}
                  </h4>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-[#FF9500] mt-1 mb-3 lg:mb-0 block lg:hidden w-13.75 md:w-15">
                  <h4 className="text-lg md:text-2xl font-normal text-white">
                    {item.id}
                  </h4>
                </div>
                <div>
                  <h5 className="text-xl md:text-3xl font-medium text-[#0F172B]">
                    {item.title}
                  </h5>

                  <p className="mt-3 md:text-lg font-normal text-[#45556C]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image from right */}
          <div className="relative w-full h-50 md:h-75 lg:h-full rounded-2xl overflow-hidden">
            <Image
              src="/product/vote.jpg"
              alt="count_trust"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client'
// import Image from "next/image";
// import React from "react";

// export default function WhyChooseBetopia() {
//   return (
//     <div className="bg-[#ffffff]">
//       <div className="max-w-[1480px] mx-auto py-0 px-3 ">
//         <h3 className="text-center text-black text-3xl md:text-4xl xl:text-[52px] font-bold">
//           Why Choose <span className="text-[#FF9500]">Count Trust</span>{" "}
//         </h3><div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>
//         {/*  */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16 mt-10">
//           {/* Left Content: Features */}
//           <div
//             className="space-y-8"
//           >
//             {/*  */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   01
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
//                   Absolute Integrity in Voting
//                 </h5>

//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//                   Count Trust is built for organizations that demand absolute
//                   integrity in voting. Every vote is securely encrypted,
//                   immutably recorded, and fully auditable, ensuring results can
//                   be trusted without manual intervention.
//                 </div>
//               </div>
//             </div>
//             {/*  */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500]">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   02
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
//                   Enhanced Voter Verification & Secret-Ballot Protection
//                 </h5>

//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//                   The platform enforces strict voter verification and
//                   secret-ballot protection, preventing fraud while preserving
//                   anonymity.
//                 </div>
//               </div>
//             </div>
//             {/*  */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500]">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   03
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
//                   Hybrid Voting Support with Enterprise-Grade Security
//                 </h5>

//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//                   With true hybrid voting support and enterprise-grade security
//                   controls, Count Trust delivers reliability, transparency, and
//                   confidence in every election.
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div
//           >
//             <Image
//               src="/product/count_trust2.png"
//               alt="count_trust2"
//               width={711}
//               height={577}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

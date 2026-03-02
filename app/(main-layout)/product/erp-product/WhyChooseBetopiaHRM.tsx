"use client";
import Container from "@/components/layout/Container";
import Image from "next/image";

const whyChooseData = [
  {
    id: "01",
    title: "Designed specifically for multi-branch and multi-entity operations",
    description:
      "Designed to support complex multi-branch and multi-entity operations with centralized control and seamless coordination.",
  },
  {
    id: "02",
    title: "Modular architecture tailored to unique organizational needs",
    description:
      "Built with a modular architecture that adapts seamlessly to unique organizational structures, workflows, and operational requirements.",
  },
  {
    id: "03",
    title: "Secure, role-based access with auditability",
    description:
      "Ensures secure, role-based access controls with full auditability, accountability, and traceability across all system activities.",
  },
  {
    id: "04",
    title: "Unified platform combining ERP, collaboration, and analytics",
    description:
      "A unified platform integrating ERP, collaboration, and analytics to deliver centralized operations, insights, and productivity.",
  },
  {
    id: "05",
    title: "Flexible deployment: cloud or on-premise",
    description:
      "Offers flexible deployment options, supporting both cloud-based and on-premise environments to meet organizational requirements.",
  },
];

export default function WhyChooseBetopiaHRM() {
  return (
    <div className="bg-[#ffffff] ">
      <Container>
        <div className=" pb-10 lg:pb-20">
          <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold ">
            Why Enterprise opts for <br />{" "}
            <span className="text-[#FF9500]">
              Betopia ERP Management System{" "}
            </span>
          </h2>

          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-16"></div>

          <div
            className=" grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-20
                      items-stretch"
          >
            {/* Image from right */}
            <div className="relative w-full  h-37.5 md:h-125 lg:h-full rounded-2xl overflow-hidden">
              <Image
                src="/product/erp/erp.png"
                alt="Betopia HRM"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-4 lg:space-y-6">
              {whyChooseData.map((item) => (
                <div
                  key={item.id}
                  className="lg:flex items-start gap-5 bg-white rounded-2xl"
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
                    <h5 className="text-xl xl:text-[30px]  font-semibold text-[#0F172B]">
                      {item.title}
                    </h5>

                    <p className="mt-3 text-lg md:text-xl font-normal text-[#45556C]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>

    // <div className="bg-[#ffffff]">
    //   <div className="lg:py-10 md:pb-20">
    //     <h2 className="text-center text-black text-3xl md:text-4xl xl:text-[52px] font-bold ">
    //       Why Enterprises Choose{" "}
    //       <span className="text-[#FF9500]">Betopia ERP</span>
    //     </h2>

    //     <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-5 md:mb-10"></div>
    //     <div
    //       className="max-w-[1660px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-3   lg:gap-6
    //                   items-start 2xl:items-center px-3 md:px-8 "
    //     >
    //       {/* Image from right */}
    //       <div className="relative w-full  rounded-2xl overflow-hidden">
    //         <Image
    //           src="/product/enterprice_.png"
    //           alt="count_trust"
    //           width={718}
    //           height={760}
    //           className="object-cover mx-auto"
    //         />
    //       </div>
    //       <div className="space-y-5">
    //         {whyChooseData.map((item) => (
    //           <div
    //             key={item.id}
    //             className="flex items-start gap-5 bg-white rounded-2xl"
    //           >
    //             <div className="px-4 py-3 rounded-2xl bg-[#FF9500] mt-1">
    //               <h4 className="text-lg md:text-2xl font-normal text-white">
    //                 {item.id}
    //               </h4>
    //             </div>

    //             <div>
    //               <h5 className="text-xl md:text-2xl font-semibold text-[#0F172B]">
    //                 {item.title}
    //               </h5>

    //               <p className="mt-2 text-lg md:text-xl font-normal text-[#45556C]">
    //                 {item.description}
    //               </p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

// "use client";
// import Image from "next/image";
// import React from "react";

// export default function WhyChooseBetopiaHRM() {
//   return (
//     <div className="bg-[#ffffff]">
//       <div className="max-w-[1480px] mx-auto py-0 px-3 lg:mt-20">
//         <h3 className="text-center text-black text-3xl md:text-4xl xl:text-[52px] font-bold">
//          Why Enterprises Choose <span className="text-[#FF9500]">Betopia ERP</span>
//         </h3><div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 mt-10">
//           {/* Left Content: Features */}
//             <Image
//               src="/product/erp_new_half.png"
//               alt="count_trust2"
//               width={711}
//               height={577}
//               className="rounded-md shadow-lg"
//             />

//           {/* Right Image */}
//           <div
//             className="space-y-8"
//           >
//             {/* Feature 01 */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   01
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-xl md:text-2xl font-semibold text-[#0F172B]">
//                Designed specifically for multi-branch and multi-entity operations
//                 </h5>
//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//                 Designed to support complex multi-branch and multi-entity operations with centralized control and seamless coordination.
//                 </div>
//               </div>
//             </div>

//             {/* Feature 02 */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   02
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-xl md:text-2xl font-semibold text-[#0F172B]">
//                Modular architecture tailored to unique organizational needs
//                 </h5>
//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//                 Built with a modular architecture that adapts seamlessly to unique organizational structures, workflows, and operational requirements.
//                 </div>
//               </div>
//             </div>

//             {/* Feature 03 */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   03
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-xl md:text-2xl font-semibold text-[#0F172B]">
//             Secure, role-based access with auditability
//                 </h5>
//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//              Ensures secure, role-based access controls with full auditability, accountability, and traceability across all system activities.
//                 </div>
//               </div>
//             </div>

//             {/* Feature 04 */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   04
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-xl md:text-2xl font-semibold text-[#0F172B]">
//                Unified platform combining ERP, collaboration, and analytics
//                 </h5>
//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//                A unified platform integrating ERP, collaboration, and analytics to deliver centralized operations, insights, and productivity.
//                 </div>
//               </div>
//             </div>

//             {/* Feature 05 */}
//             <div className="flex items-start gap-5 bg-white rounded-2xl">
//               <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
//                 <h4 className="text-lg md:text-2xl font-normal text-white">
//                   05
//                 </h4>
//               </div>
//               <div>
//                 <h5 className="text-xl md:text-2xl font-semibold text-[#0F172B]">
//                  Flexible deployment: cloud or on-premise
//                 </h5>
//                 <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
//                Offers flexible deployment options, supporting both cloud-based and on-premise environments to meet organizational requirements.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

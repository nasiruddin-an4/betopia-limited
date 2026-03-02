"use client";
import Container from "@/components/layout/Container";
import Image from "next/image";

const whyChooseData = [
  {
    id: "01",
    title: "Centralized HR operations across departments and brances",
    description:
      "Streamline and centralize HR operations across departments and branches, improving efficiency, coordination, and workforce management.",
  },
  {
    id: "02",
    title:
      "Role-Based Access Control (RBAC) for secure, permission-driven data access",
    description:
      "Provides Role-Based Access Control (RBAC) to ensure secure, permission-driven access, protecting sensitive data and workflows.",
  },
  {
    id: "03",
    title: "Clean, responsive UI optimized for all devices",
    description:
      "Features a clean, responsive user interface designed for seamless performance and usability across all devices.",
  },
  {
    id: "04",
    title: "Built-in scalability for future expansion and integrations",
    description:
      "Designed with built-in scalability to support future growth, additional features, and seamless system integrations.",
  },
  {
    id: "05",
    title:
      "Enterprise-ready architecture supporting compliance and audit needs",
    description:
      "Robust enterprise-ready architecture designed to meet compliance standards and support full audit requirements.",
  },
];

export default function WhyChooseBetopiaERP() {
  return (
    <div className="bg-[#ffffff] ">
      <Container>
        <div className="">
          <h2 className="text-center text-black text-[20px] md:text-[32px] lg:text-[52px] font-bold ">
            Why Organizations Choose <br />{" "}
            <span className="text-[#FF9500]">Betopia HRM</span>
          </h2>

          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-10 lg:mb-16"></div>

          <div
            className=" grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-20
                      items-stretch"
          >
            {/* Image from right */}
            <div className="relative w-full h-37.5 md:h-125 lg:h-full rounded-2xl overflow-hidden">
              <Image
                src="/product/hrm/choose.jpg"
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
                    <h5 className="text-lg xl:text-[30px]  font-semibold text-[#0F172B]">
                      {item.title}
                    </h5>

                    <p className="mt-3  md:text-xl font-normal text-[#45556C]">
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
  );
}

// "use client";
// import Image from "next/image";
// import React from "react";

// const whyChooseData = [
//   {
//     id: "01",
//     title: "Centralized HR operations across departments and brances",
//     description:
//       "Streamline and centralize HR operations across departments and branches, improving efficiency, coordination, and workforce management.",
//   },
//   {
//     id: "02",
//     title: "Role-Based Access Control (RBAC) for secure, permission-driven data access",
//     description:
//       "Provides Role-Based Access Control (RBAC) to ensure secure, permission-driven access, protecting sensitive data and workflows.",
//   },
//   {
//     id: "03",
//     title: "Clean, responsive UI optimized for all devices",
//     description:
//       "Features a clean, responsive user interface designed for seamless performance and usability across all devices.",
//   },
//   {
//     id: "04",
//     title: "Built-in scalability for future expansion and integrations",
//     description:
//       "Designed with built-in scalability to support future growth, additional features, and seamless system integrations.",
//   },
//   {
//     id: "05",
//     title: "Enterprise-ready architecture supporting compliance and audit needs",
//     description:
//       "Robust enterprise-ready architecture designed to meet compliance standards and support full audit requirements.",
//   },
// ];

// export default function WhyChooseBetopiaERP() {
//   return (
//     <div className="bg-[#ffffff] ">
//       <div className=" pt-10 md:pt-20 w-11/12 mx-auto">
//         <h2 className="text-center text-black text-3xl md:text-4xl xl:text-[52px] font-bold px-8 xl:px-0 ">
//        Why Organizations Choose <br /> <span className="text-[#FF9500]">Betopia HRM</span>
//         </h2>

//         <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-10 md:mb-16"></div>
//         <div
//           className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20
//                       items-stretch px-8 xl:px-0 "
//         >
//              {/* Image from right */}
//           <div className="relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden">
//             <Image
//               src="/product/hrm/choose.jpg"
//               alt="count_trust"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="space-y-6 lg:space-y-8">
//             {whyChooseData.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-start gap-5 bg-white rounded-2xl"
//               >
//                 <div className="px-4 py-3 rounded-2xl bg-[#FF9500] mt-1">
//                   <h4 className="text-lg md:text-2xl font-normal text-white">
//                     {item.id}
//                   </h4>
//                 </div>

//                 <div>
//                   <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
//                     {item.title}
//                   </h5>

//                   <p className="mt-3 text-lg md:text-xl font-normal text-[#45556C]">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

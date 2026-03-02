"use client";

import Container from "@/components/layout/Container";
import HeadingSix from "@/components/shared/heading/HeadingSix";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import Image from "next/image";

import { AIwhyBetopiaFeatures } from "@/data/service";
import WhyBetopiaFeature from "@/components/shared/services/WhyBetopiaFeature";

export default function WhyBetopia() {
  return (
    <div className="bg-[#f7f5ff] py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-stretch">
          {/* Left image */}
          <div className="flex items-center justify-center relative">
            <div className="relative h-105 md:h-150 lg:h-full w-full">
              <Image
                src="/whyb.png"
                alt="why_betopia"
                fill
                className="object-cover rounded-xl"
                priority
              />

              <h1 className="absolute right-0 rounded-bl-xl rounded-tr-lg text-xl md:text-4xl text-[#45556C] bg-white p-4 font-bold">
                Why Betopia
              </h1>
            </div>
          </div>

          {/* Right content */}
          <div>
            <HeadingThree
              title="Why Betopia Limited for AI & Data Analytics"
              className="text-[#0A0A0A]"
              center={false}
            />
            <HeadingSix
              title="Less theory. More impact."
              className="text-[#0A0A0A]"
              center={false}
            />

            <div className="mt-10 space-y-7">
              {AIwhyBetopiaFeatures.map((item, index) => (
                <WhyBetopiaFeature
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

// "use client";
// import Container from "@/components/layout/Container";
// import PageSubtitle from "@/components/shared/heading/pageSubtitle";
// import Image from "next/image";

// export default function WhyBetopia() {
//   return (
//     <div className="bg-[#f7f5ff] py-10 lg:py-20">
//       <Container>
//         <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20  items-stretch ">
//           <div className="flex items-center justify-center relative">
//             <div className="relative h-[420px] md:h-[600px] lg:h-full w-full">
//               <Image
//                 src="/whyb.png"
//                 alt="why_betopia"
//                 fill
//                 className="object-cover rounded-xl"
//                 priority
//               />

//               <h1 className="absolute rounded-bl-xl rounded-tr-lg right-0 text-xl md:text-4xl text-[#45556C] bg-white p-4 font-bold">
//                 Why Betopia
//               </h1>
//             </div>
//           </div>
//           {/*  */}
//           <div className="">
//             <div className="">
//               <PageSubtitle
//                 text="Betopia stands out by offering certified expertise, industry-standard certifications, and tailored solutions that meet the unique needs of various industries."
//                 className="text-[#000000CC] mt-5 lg:mt-0"
//               />
//               <PageSubtitle
//                 text="We deliver top-tier security, compliance, and innovative cloud services to help your business thrive in a competitive landscape. "
//                 className="text-[#000000CC] mt-5 "
//               />

//               <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-10">
//                 <Image src="/whyb1.png" alt="badge" height={50} width={50} />

//                 <div>
//                   <h5 className="text-xl xl:text-[30px] font-semibold  text-black">
//                    AI with Guardrails for Regulated Industries
//                   </h5>
//                   <PageSubtitle
//                     text="Focus on “AI with guardrails” for regulated industries"
//                     className="text-[#000000CC] mt-1"
//                   />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-7">
//                 <Image src="/whyb2.png" alt="badge" height={50} width={50} />

//                 <div>
//                   <h5 className="text-xl xl:text-[30px] font-semibold  text-black">
//                    90-Day ROI-Driven AI Pilot Programs
//                   </h5>
//                   <PageSubtitle
//                     text="90-day ROI-driven pilot programs for AI adoption"
//                     className="text-[#000000CC] mt-1"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-7">
//               <Image src="/whyb3.png" alt="badge" height={50} width={50} />

//               <div>
//                 <h5 className="text-xl xl:text-[30px] font-semibold  text-black">
//                   AI Integration with Cloud & Security
//                 </h5>
//                 <PageSubtitle
//                   text="Integration with existing cloud and security systems for enterprise-scale AI"
//                   className="text-[#000000CC] mt-1"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

// "use client";
// import Image from "next/image";
// import React from "react";

// export default function WhyBetopia() {
//   return (
//     <div className="bg-[#f7f5ff] py-10">
//      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-0 items-start xl:items-end px-3 xl:px-0">
//             <div className="flex items-center justify-center relative">
//               <div>
//                  <Image
//                          className="rounded-xl"
//                            src="/why_betopia_vertical_carve.png"
//                            alt="why_betopia"
//                            width={502}
//                            height={700}
//                          />
//                        </div>
//                        <h1 className="absolute right-4 md:right-36 lg:right-3 xl:right-32 top-2 text-2xl md:text-4xl text-[#45556C] font-bold">
//                          Why Betopia
//                        </h1>
//             </div>
//         {/*  */}
//         <div
//         >
//           <div className="max-w-2xl ">
//             <h6 className="text-[#000000CC] text-base lg:text-[22px] font-normal mt-5 lg:mt-0">
//               Betopia stands out by offering certified expertise,
//               industry-standard certifications, and tailored solutions that meet
//               the unique needs of various industries.
//               <br />
//               We ensure top-tier security, compliance, and innovative cloud
//               services to help your business thrive in a competitive landscape.
//             </h6>
//             <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-16">
//               <div className="bg-[#FF950029] rounded-full w-13.5 h-13.5 flex items-center justify-center">
//                 <Image
//                   src="/service/badge1.png"
//                   alt="badge"
//                   height={36}
//                   width={36}
//                 />
//               </div>
//               <div>
//                 <h5 className="text-base lg:text-2xl font-semibold text-black">
//                   AI with Guardrails for Regulated Industries
//                 </h5>
//                 <p className="text-sm lg:text-base text-[#00000099] font-normal mt-1">
//                   Focus on “AI with guardrails” for regulated industries
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-7">
//               <div className="bg-[#FF950029] rounded-full w-13.5 h-13.5 flex items-center justify-center">
//                 <Image
//                   src="/service/badge2.png"
//                   alt="badge"
//                   height={36}
//                   width={36}
//                 />
//               </div>
//               <div>
//                 <h5 className="text-base lg:text-2xl font-semibold text-black">
//                   90-Day ROI-Driven AI Pilot Programs
//                 </h5>
//                 <p className="text-sm lg:text-base text-[#00000099] font-normal mt-1">
//                   90-day ROI-driven pilot programs for AI adoption
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-7">
//               <div className="bg-[#FF950029] rounded-full w-13.5 h-13.5 flex items-center justify-center">
//                 <Image
//                   src="/service/badge3.png"
//                   alt="badge"
//                   height={36}
//                   width={36}
//                 />
//               </div>
//               <div>
//                 <h5 className="text-base lg:text-2xl font-semibold text-black">
//                   AI Integration with Cloud & Security
//                 </h5>
//                 <p className="text-sm lg:text-base text-[#00000099] font-normal mt-1">
//                   Integration with existing cloud and security systems for
//                   enterprise-scale AI
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

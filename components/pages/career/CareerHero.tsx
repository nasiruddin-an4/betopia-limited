"use client";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import { scrollToDivById } from "@/utils/dom";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CareerHero() {
  return (
    <div className="relative w-full h-[420px] lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover "
        src="/career-hero.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-[3%]  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[10%]">
        <div className="xl:min-w-[1660px] xl:mx-auto mb-2 lg:mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/career">
          <div className="text-xl lg:text-3xl font-semibold">
            Career
          </div> 
          </Link>
        </div>
        <div className="lg:min-w-[1660px] mx-auto">
          <div className={`text-2xl md:text-5xl xl:text-[64px] font-bold mt-5`}>
            <h1 className={""}>
             Thrive with Betopia&apos;s  <br /> 
              <span className={"text-orange-400"}>Talent Community </span>
            </h1>
          </div>
          
          <PageSubtitle
            text=" Unleash Your Full Potential Within a Dynamic and Collaborative Environment That Drives Meaningful Global Impact Through Innovative Solutions."
            className="mt-2 md:mt-7 text-start text-[#CAD5E2] max-w-4xl"
          />
         
        </div>
      </div>
    </div>
  );
}


    // "use client";
// import { scrollToDivById } from "@/utils/dom";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function CareerHero() {
//   return (
//     <div className="relative w-full h-[320px] lg:min-h-screen  overflow-hidden">
//       {/* Background video */}
//       <Image
//         alt="media"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/career-hero.png"
//         width={1660}
//         height={563}
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col mt-10 lg:-mt-[3%]  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
//         <div className="xl:min-w-[1660px] xl:mx-auto mb-2 lg:mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
//           <Link href="/career">
//           <div className="text-xl lg:text-3xl font-semibold">
//             Career
//           </div> 
//           </Link>
//         </div>
//         <div className="lg:min-w-[1660px] mx-auto">
//           <div className={`text-2xl md:text-4xl xl:text-[58px] font-bold `}>
//             <h1 className={""}>
//              Thrive with Betopia&apos;s  <br /> 
//               <span className={"text-orange-400"}>Talent Community </span>
//             </h1>
//           </div>
//           <p
//             className={`text-lg md:text-xl xl:text-2xl mt-2 md:mt-7 text-start text-[#CAD5E2] max-w-4xl`}
//           >
//            Unleash Your Full Potential Within a Dynamic and Collaborative Environment That Drives Meaningful Global Impact Through Innovative Solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }






// {/* <div className="relative w-full h-[573px] overflow-hidden"> 
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/videos/hero/team_augmentation_hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
 
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
 
//       <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <h1
//           className=" font-bold text-white 
//           text-3xl md:text-5xl xl:text-[64px] lg:leading-24"
//         >
//           Thrive with Betopia&apos;s{" "}
//           <span className="text-[#FF9500] ">Talent Community</span>
//         </h1>

//         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-[1000px] px-2 sm:px-4">
//           Unleash Your Full Potential Within a Dynamic and Collaborative
//           Environment That Drives Meaningful Global Impact Through Innovative
//           Solutions.{" "}
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14"> 
//             <button
//               onClick={() => {
//                 setTimeout(() => {
//                   scrollToDivById("hiring");
//                 }, 300);
//               }}
//               className="bg-linear-to-r from-[#FF9500] to-[#F54900]  cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"
//             >
//               View Open Positions
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="7"
//                 height="13"
//                 viewBox="0 0 7 13"
//                 fill="none"
//               >
//                 <path
//                   d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523"
//                   stroke="white"
//                   strokeWidth="1.54031"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>  
//         </div>
//       </div>
//     </div> */}
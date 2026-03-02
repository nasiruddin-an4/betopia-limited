"use client";

import Container from "@/components/layout/Container";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import WhatWeDoCard from "@/components/shared/services/WhatWeDoCard";
import { ResourcewhatWeDoData } from "@/data/service";

export default function WhatWeDo() {
  return (
    <Container>
      <div className="py-10 lg:py-20">
        <HeadingTwo title="What We Do" />

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-9 items-stretch px-3 xl:px-0 mt-6 lg:mt-12">
          {ResourcewhatWeDoData.map((item, index) => (
            <WhatWeDoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
}

// "use client";
// import Container from "@/components/layout/Container";
// import HeadingThree from "@/components/shared/heading/HeadingThree";
// import HeadingTwo from "@/components/shared/heading/HeadingTwo";
// import PageSubtitle from "@/components/shared/heading/pageSubtitle";
// import Image from "next/image";

// export default function WhatWeDo() {
//   return (
//     <Container>
//       <div className="py-10 lg:py-20">
//         <HeadingTwo title="What We Do" />
//         <PageSubtitle
//           text="Comprehensive solutions for your digital transformation journey"
//           className="text-center mb-6 lg:mb-9 text-[#6e6e6e] lg:w-[80%] mx-auto"
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-stretch px-3 xl:px-0">

//           {/*  */}

//          <div className="rounded-xl bg-white shadow-lg overflow-hidden flex flex-col h-full">

//             {/* Image wrapper */}
//             <div className="relative">
//               {/* Icon */}
//               <div className="absolute bottom-5 left-5 bg-[#2B7FFF] rounded-xl flex items-center justify-center w-14 h-14 z-10">
//                  <IconArrow />
//               </div>

//               {/* Image */}
//               <Image
//               src="/service/Container11111.png"
//                 alt="Container1"
//                 width={714}
//                 height={258}
//                 className="w-full h-[180px] md:h-[300px] object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="px-6 py-7">
//               <HeadingThree
//                 title="Certified Enterprise Expertise"
//                 className="text-[#0A0A0A]"
//                 center={false}
//               />
//               <PageSubtitle
//                 text="Certified enterprise professionals specializing in Cloud Computing, AI, Cyber Security, and Software"
//                 className="mt-2 text-[#4A5565]"
//               />
//             </div>
//           </div>

//           {/*  */}
//           <div className="rounded-xl bg-white shadow-lg overflow-hidden">
//             {/* Image wrapper */}
//             <div className="relative">
//               {/* Icon */}
//               <div className="absolute bottom-5 left-5 bg-[#FF9500] rounded-xl flex items-center justify-center w-14 h-14 z-10">
//                  <IconGrid />
//               </div>

//               {/* Image */}
//               <Image
//                 src="/service/Container22222.png"
//                 alt="Container1"
//                 width={714}
//                 height={258}
//                 className="w-full h-[180px] md:h-[300px] object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="px-6 py-7">
//               <HeadingThree
//                 title="Flexible Global Team Deployment"
//                 className="text-[#0A0A0A]"
//                 center={false}
//               />
//               <PageSubtitle
//                 text=" Flexible team deployment across Dhaka, Manila, Eastern Europe"
//                 className="mt-2 text-[#4A5565]"
//               />
//             </div>
//           </div>

//           {/*  */}
//           <div className="rounded-xl bg-white shadow-lg overflow-hidden">
//             {/* Image wrapper */}
//             <div className="relative">
//               {/* Icon */}
//               <div className="absolute bottom-5 left-5 bg-[#F6339A] rounded-xl flex items-center justify-center w-14 h-14 z-10">
//                  <IconChat />
//               </div>

//               {/* Image */}
//               <Image
//                src="/service/Container33333.png"
//                 alt="Container1"
//                 width={714}
//                 height={258}
//                 className="w-full h-[180px] md:h-[300px] object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="px-6 py-7">
//               <HeadingThree
//                 title="Embedded Talent for Long-Term Impact"
//                 className="text-[#0A0A0A]"
//                 center={false}
//               />
//               <PageSubtitle
//                 text=" Embedded talent for ongoing programs, projects, and transformation initiatives"
//                 className="mt-2 text-[#4A5565]"
//               />
//             </div>
//           </div>

//           {/*  */}
//           <div className="rounded-xl bg-white shadow-lg overflow-hidden">
//             {/* Image wrapper */}
//             <div className="relative">
//               {/* Icon */}
//               <div className="absolute bottom-5 left-5 bg-[#00C950] rounded-xl flex items-center justify-center w-14 h-14 z-10">
//                   <IconTarget />
//               </div>

//               {/* Image */}
//               <Image
//                 src="/service/Container44444.png"
//                 alt="Container1"
//                 width={714}
//                 height={258}
//                 className="w-full h-[180px] md:h-[300px] object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="px-6 py-7">
//               <HeadingThree
//                 title="   End-to-End Delivery Support"
//                 className="text-[#0A0A0A]"
//                 center={false}
//               />
//               <PageSubtitle
//                 text="Full delivery support from requirement gathering to deployment"
//                 className="mt-2 text-[#4A5565]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }
// "use client";
// import Image from "next/image";
// import React from "react"; 

// export default function WhatWeDo() {
//   return (
//     <div className="max-w-[1430px] mx-auto mt-14 pb-8">
//       <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
//         What We Do
//       </h2>
//       <p className="text-lg md:text-xl mt-2 text-[#45556C] max-w-3xl mx-auto mb-6 text-center">
//         Comprehensive solutions for your digital transformation journey
//       </p>

//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-stretch px-3 xl:px-0">

//       {/* CARD 1 */}
//       <div className="h-full">
//         <div className="relative rounded-xl bg-white shadow-lg h-full flex flex-col">
//           {/* Icon */}
//           <div className="absolute top-3 md:top-[185px] left-3 bg-[#2B7FFF] rounded-xl flex items-center justify-center w-[55px] h-[55px] z-10">
//             <IconArrow />
//           </div>

//           {/* Image */}
//           <Image
//             src="/service/Container11111.png"
//             alt="Certified Enterprise Expertise"
//             width={714}
//             height={258}
//             className="w-full rounded-t-xl"
//           />

//           {/* Content */}
//           <div className="px-6 py-7 flex-1">
//             <h3 className="text-2xl md:text-3xl xl:text-[36px] text-[#0A0A0A] font-semibold">
//               Certified Enterprise Expertise
//             </h3>
//             <p className="text-[#4A5565] text-lg md:text-xl mt-2">
//               Certified enterprise professionals in Cloud, AI, Security, and Software
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CARD 2 */}
//       <div className="h-full">
//         <div className="relative rounded-xl bg-white shadow-lg h-full flex flex-col">
//           <div className="absolute top-3 md:top-[185px] left-3 bg-[#FF9500] rounded-xl flex items-center justify-center w-[55px] h-[55px] z-10">
//             <IconGrid />
//           </div>

//           <Image
//             src="/service/Container22222.png"
//             alt="Flexible Global Team Deployment"
//             width={714}
//             height={258}
//             className="w-full rounded-t-xl"
//           />

//           <div className="px-6 py-7 flex-1">
//             <h3 className="text-2xl md:text-3xl xl:text-[36px] text-[#0A0A0A] font-semibold">
//               Flexible Global Team Deployment
//             </h3>
//             <p className="text-[#4A5565] text-lg md:text-xl mt-2">
//               Flexible team deployment across Dhaka, Manila, Eastern Europe
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CARD 3 */}
//       <div className="h-full">
//         <div className="relative rounded-xl bg-white shadow-lg h-full flex flex-col">
//           <div className="absolute top-3 md:top-[185px] left-3 bg-[#F6339A] rounded-xl flex items-center justify-center w-[55px] h-[55px] z-10">
//             <IconChat />
//           </div>

//           <Image
//             src="/service/Container33333.png"
//             alt="Embedded Talent"
//             width={714}
//             height={258}
//             className="w-full rounded-t-xl"
//           />

//           <div className="px-6 py-7 flex-1">
//             <h3 className="text-2xl md:text-3xl xl:text-[36px] text-[#0A0A0A] font-semibold">
//               Embedded Talent for Long-Term Impact
//             </h3>
//             <p className="text-[#4A5565] text-lg md:text-xl mt-2">
//               Embedded talent for ongoing programs, projects, and transformation initiatives
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CARD 4 */}
//       <div className="h-full">
//         <div className="relative rounded-xl bg-white shadow-lg h-full flex flex-col">
//           <div className="absolute top-3 md:top-[185px] left-3 bg-[#00C950] rounded-xl flex items-center justify-center w-[55px] h-[55px] z-10">
//             <IconTarget />
//           </div>

//           <Image
//             src="/service/Container44444.png"
//             alt="End-to-End Delivery"
//             width={714}
//             height={258}
//             className="w-full rounded-t-xl"
//           />

//           <div className="px-6 py-7 flex-1">
//             <h3 className="text-2xl md:text-3xl xl:text-[36px] text-[#0A0A0A] font-semibold">
//               End-to-End Delivery Support
//             </h3>
//             <p className="text-[#4A5565] text-lg md:text-xl mt-2">
//               Full delivery support from requirement gathering to deployment
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//     </div>
//   );
// }




/* ================= ICON COMPONENTS ================= */

const IconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
    <path d="M18.4492 8.07227H25.3681V14.9912" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25.3678 8.07227L15.5659 17.8741L9.80018 12.1083L2.30469 19.6038" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconGrid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
    <rect x="4" y="4" width="20" height="20" rx="2" stroke="white" strokeWidth="2.3"/>
  </svg>
);

const IconChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
    <path d="M25 20a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v14Z" stroke="white" strokeWidth="2.3"/>
  </svg>
);

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
    <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="2.3"/>
    <circle cx="14" cy="14" r="6" stroke="white" strokeWidth="2.3"/>
    <circle cx="14" cy="14" r="2" stroke="white" strokeWidth="2.3"/>
  </svg>
);
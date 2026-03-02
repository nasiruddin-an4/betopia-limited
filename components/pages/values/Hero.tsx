import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[320px] lg:min-h-screen  overflow-hidden">

      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/Values.jpg"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[28%] xl:pt-[15%] 2xl:pt-[6%]">
        <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/about">
          <div className="text-xl lg:text-3xl font-semibold">
            Who We Are
          </div>
          </Link>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link className="text-xl lg:text-3xl font-semibold" href="/values">
            Values
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto">
          <OnelinePageTitle normalText="Betopia" highlightText="Values" />

           <PageSubtitle
         text="Where integrity, innovation, and courage power intelligent solutions."
         className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[35%] "
      />
        </div>
      </div>
    </div>
  );
};

// import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
// import PageSubtitle from "@/components/shared/pageSubtitle";
// import React from "react";

// export default function Hero() {
//   return (
//     <div className="relative w-full h-[320px] lg:h-[470px] overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/videos/hero/team_augmentation_hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col mt-10 lg:mt-16 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <OnelinePageTitle normalText="Betopia" highlightText="Values" />
//         <PageSubtitle
//           text="Where integrity, innovation, and courage power intelligent solutions."
//           className="mt-4 md:mt-7 text-[#CAD5E2] lg:w-[50%] mx-auto"
//         />
//       </div>
//     </div>
//   );
// }

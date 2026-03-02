import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function AdaptabilityHero() {
  return (
    <div className="relative w-full h-[450px] md:h-[450px] lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/Adaptibility2.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[40%] xl:pt-[22%] 2xl:pt-[5%]">
        <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <div className="text-xl lg:text-3xl font-semibold">What We Do</div>

          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link
            className="text-xl lg:text-3xl font-semibold"
            href="/adaptability"
          >
            Adaptability
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto">
          <div className="hidden md:block">
            <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
              Transforming Complexity into
            </h1>
            <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
              Competitive Advantage
            </h1>
          </div>
          <div className="w-[20%] block md:hidden">
            <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
              Transforming Complexity into {}{" "}
              <span className="text-[#FF9500]"> Competitive Advantage</span>
            </h1>
          </div>

          <PageSubtitle
            text="Empowering organizations to adapt, scale, and lead through AI, Cloud, Cybersecurity, and Digital Innovation."
            className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[40%] "
          />
        </div>
        {/* <div className="min-w-[1440px] w-9/12 mx-auto">
            <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-bold  gap-2">
           Transforming Complexity into <br />
           <span className="text-[#FF9500]">Competitive Advantage</span>
         </h1>


          <PageSubtitle
            text="Empowering organizations to adapt, scale, and lead through AI, Cloud, Cybersecurity, and Digital Innovation."
            className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[50%] "
          />
        </div> */}
      </div>
    </div>
  );
}

// import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
// import PageSubtitle from "@/components/shared/pageSubtitle";
// import React from "react";

// const AdaptabilityHero = () => {
//   return (
//     <div className="relative w-full h-[440px] lg:h-[563px]  overflow-hidden">
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
//       <div className="relative z-10 flex flex-col mt-16 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <OnelinePageTitle
//           normalText="Transforming Complexity into"
//           highlightText=" Competitive Advantage"
//         />

//         <PageSubtitle
//           text="Empowering organizations to adapt, scale, and lead through AI, Cloud, Cybersecurity, and Digital Innovation."
//           className="mt-4 md:mt-7 text-[#CAD5E2] md:w-[50%] mx-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default AdaptabilityHero;

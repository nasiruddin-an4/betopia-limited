import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
import Image from "next/image";
import Link from "next/link";

export default function BlogHero() {
  return (
      <div className="relative w-full h-[360px] lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/News3.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[20%] xl:pt-[15%] 2xl:pt-0">
        <div className="  xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <div className="text-xl lg:text-3xl font-semibold">
            News & Media
          </div>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link className="text-xl lg:text-3xl font-semibold" href="/news-item">
            News Alerts
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto">
          <OnelinePageTitle normalText="Betopia" highlightText="News Alerts" />

          <p
            className={`text-lg md:text-xl xl:text-2xl mt-4 md:mt-7 text-start text-[#CAD5E2]  mx-auto `}
          >
           Stay updated with the latest insights, innovations, <br /> and achievements
from Betopia Limited
          </p>
        </div>
      </div>
    </div>
  );
}
// 'use client'

// import { Newspaper } from 'lucide-react';

// export default function BlogHero() {
//     return (
//         <div className="relative w-full h-[350px] lg:h-[400px] overflow-hidden">
//             {/* Background video */}
//             <video
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src="/news/blog-video1.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//             />

//             {/* Overlay */}
//             <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//             {/* Content */}
//             <div className="relative z-10 space-y-3 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
                
//                 <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20">
//                     <Newspaper className="w-5 h-5 text-white" strokeWidth={1.5} />
//                     <span className="text-lg font-semibold tracking-wide">
//                     Latest Updates
//                     </span>
//                 </button>

//                 <h1
//                     className=" font-bold text-[#FF9500] 
//                     text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[64px]  "
//                 >
//                     News Alerts
//                 </h1>

//                 <p
//                     className=" text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-[1000px] px-2 sm:px-4"
//                 >Stay updated with the latest insights, innovations, and achievements <br/> from Betopia Limited</p>

//             </div>
//         </div>
//     )
// }

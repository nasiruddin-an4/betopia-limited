import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-90 lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover lg:pt-10"
        src="/hero/cookie.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[20%] xl:pt-[15%] 2xl:pt-0">
        <div className="  xl:min-w-360 xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <div className="text-xl lg:text-3xl font-semibold">Legal</div>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link
            className="text-xl lg:text-3xl font-semibold"
            href="/cookie-policy"
          >
            Cookie Policy
          </Link>
        </div>
        <div className="min-w-360 mx-auto">
          <OnelinePageTitle
            normalText="Betopia"
            highlightText="Cookie Policy"
          />
        </div>
      </div>
    </div>
  );
}
// export default function Hero() {
//   return (
//     <div className="relative w-full h-[220px] lg:h-[450px] overflow-hidden">
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
//       <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">

//         <h1
//           className=" text-white text-3xl md:text-5xl xl:text-[64px] font-bold"
//         >
//         Cookie Policy
//         </h1>

//         {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
//           <Link href=''>
//             <button
//               className="bg-[#FF9500]   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//             >Explore Products
//               <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
//                 <path d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </Link>
//           <Link href=''>
//             <button
//               className="hover:bg-[#FF9500] bg-white text-[#FF9500] hover:text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//             >Watch Demo
//             </button>
//           </Link>
//         </div> */}

//       </div>
//     </div>
//   )
// }

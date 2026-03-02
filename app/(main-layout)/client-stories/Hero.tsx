import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-115  lg:min-h-screen  overflow-hidden">
      {/* Background image */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/Client.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[30%] xl:pt-[25%] 2xl:pt-0">
        <div className="  xl:min-w-360 xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <div className="text-lg lg:text-3xl font-semibold">
            Impact & Insights
          </div>
          <div className="text-lg lg:text-3xl font-semibold">/</div>
          <Link
            className="text-lg lg:text-3xl font-semibold"
            href="/client-stories"
          >
            Client Stories
          </Link>
        </div>
        <div className="min-w-360 w-9/12 mx-auto">
          <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-bold  gap-2">
            Discover Why Client
            <br /> Choose <span className="text-[#FF9500]">Betopia</span>
          </h1>
          <PageSubtitle
            text="Betopia stands out for its seamless experience, reliable services, and customer-first approach, making it the top choice for users seeking trust and convenience."
            className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[40%] lg:w-[50%]"
          />
          {/* <p
            className={`text-lg md:text-xl xl:text-2xl mt-4 md:mt-7 text-start text-[#CAD5E2]  mx-auto `}
          >
         Betopia stands out for its seamless experience, reliable services, and customer-first approach, <br /> making it the top choice for users seeking trust and convenience.
          </p> */}
        </div>
      </div>
    </div>
  );
}
// import PageSubtitle from "@/components/shared/heading/pageSubtitle";

// export default function Hero() {
//   return (
//     <div className="relative w-full h-[400px] lg:h-[663px] overflow-hidden">
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
//         <h6 className="text-xs md:text-sm lg:text-base mb-4  px-5 py-2 rounded-3xl bg-[#FF690033] border border-[#70491d]">
//           Complete Business Solutions
//         </h6>

//         <h1 className="text-2xl md:text-6xl 2xl:text-[70px] font-bold lg:leading-16 2xl:leading-22 gap-2">
//           Discover Why
//           <br /> Client Choose{" "}
//           <span className="text-[#FF9500]">Betopia</span>
//         </h1>
//         <PageSubtitle
//           text=" Betopia stands out for its seamless experience, reliable services, and customer-first approach, making it the top choice for users seeking trust and convenience."
//           className="mt-4 sm:mt-6 text-[#CAD5E2] max-w-[1100px] px-2 sm:px-4"
//         />
//       </div>
//     </div>
//   );
// }

// import React from 'react'

// export default function Hero() {
//   return (
//     <div className="relative w-full h-[500px] md:h-[663px] overflow-hidden">
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
//         <h6 className='text-xs md:text-sm lg:text-base mb-4  px-5 py-2 rounded-3xl bg-[#FF690033] border border-[#70491d]'>
//           Complete Business Solutions
//         </h6>

//         <h1
//           className="font-outfit font-bold text-white
//           text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[83px] lg:leading-24"
//         >
//          Discover why<br /> customers choose  <span className='text-[#FF9500]'>Betopia</span>
//         </h1>

//         <p
//           className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-[1100px] px-2 sm:px-4"
//         >
//          Betopia stands out for its seamless experience, reliable services, and customer-first approach, making it the top choice for users seeking trust and convenience.
//         </p>

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

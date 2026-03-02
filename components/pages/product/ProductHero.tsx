import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function ProductHero() {
  return (
    <div className="relative w-full h-[430px]  lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        src="/hero/product.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[40%] xl:pt-[22%] 2xl:pt-[5%]">
        <div className="xl:max-w-[1440px] xl:mx-auto w-full mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/product">
            <div className="text-lg lg:text-3xl font-semibold">Our Products</div>
          </Link>

          
        </div>
        <div className="max-w-[1440px] w-full mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
          Discover Betopia&apos;s Intelligent
          </h1>
           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
         Product Ecosystem
          </h1>


          <PageSubtitle
            text="AI-driven platforms powering automation, engagement, and business growth."
            className="mt-4 md:mt-7 text-[#CAD5E2] w-full"
          />

        </div>
      </div>
    </div>
  );
}

// import Link from 'next/link'
// import React from 'react'

// export default function ProductHero() {
//   return (
//     <div className="relative w-full h-[500px] lg:h-[663px] overflow-hidden">
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
//          Discover Betopia&apos;s Intelligent <br /> <span className='text-[#FF9500]'>Product Ecosystem</span>
//         </h1>

//         <p
//           className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-[1100px] px-2 sm:px-4"
//         >
//           AI-driven platforms powering automation, engagement, and business growth.
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

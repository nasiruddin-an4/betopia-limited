"use client";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";


export default function BuildTheFuture() {
  return (
    <div className="bg-[#FFF7ED]">
      <div className="max-w-[1480px] w-11/12 mx-auto py-1 lg:py-10">
        <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
          <h6 className="w-fit text-xs md:text-sm lg:text-base text-[#FF9500] mb-4  px-5 py-2 rounded-3xl bg-[#FFD6A8] border border-[#FF9500]">
            Join Our Success Story
          </h6>

          <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
            Build the Future <span className="text-[#FF9500]">with Us</span>
          </h2>

          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 "></div>

          <PageSubtitle
            text="Explore a Vast and Exciting World of Career Opportunities at Betopia and Take Your Time to Browse Our Diverse Range of Open Positions"
            className="mt-4 lg:mt-8  text-[#45556C]  w-full xl:w-[70%]"
          />
    

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 ">
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client'
// import { scrollToDivById } from '@/utils/dom';
// import Link from 'next/link'
// import React from 'react'

// export default function BuildTheFuture() {
//     return (
//         <div className="bg-[#FFF7ED]">

//             <div className='max-w-[1480px] mx-auto py-1 lg:py-10'>
//                 <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//                     <h6 className='w-fit text-xs md:text-sm lg:text-base text-[#FF9500] mb-4  px-5 py-2 rounded-3xl bg-[#FFD6A8] border border-[#FF9500]'>
//                         Join Our Success Story
//                     </h6>

//                     <h1
//                         className=" font-semibold text-black 
//          text-3xl md:text-5xl xl:text-[64px] lg:leading-24"
//                     >Build the Future with Us
//                     </h1>

//                     <p
//                         className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1000px] px-2 sm:px-4"
//                     >Explore a Vast and Exciting World of Career Opportunities at Betopia and Take Your Time to Browse Our Diverse Range of Open Positions </p>

//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">

//                         {/* <button
//                             onClick={() => {
//                                 setTimeout(() => {
//                                     scrollToDivById('hiring');
//                                 }, 300);
//                             }}
//                             className="bg-linear-to-r from-[#FF9500] to-[#F54900]  cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//                         >View Open Positions
//                             <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
//                                 <path d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button> */}
//                     </div>


//                 </div>




//                 {/* <div className='mt-52'>
//                     <h1
//                         className=" font-normal text-black  text-center 
//           text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[64px] leading-24"
//                     >
//                         Grow with <span className='text-[#FF9500] '>Betopia&apos;s Vision</span>
//                     </h1>
//                     <p
//                         className="mt-4 text-center mx-auto sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1000px] px-2 sm:px-4"
//                     >Principles guide everything we do and help us build a culture where everyone can thrive and excel professionally. </p>
//                     <div className='grid grid-cols-1 md:grid-cols-3 gap-9 mt-20'>
//                         <div
//                             className="rounded-2xl  py-7 px-8 bg-[#ffffff] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
//                         >
//                             <h2
//                                 className=" font-normal text-[#FF9500]
//         text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[52px] leading-tight"
//                             >
//                                 01
//                             </h2>

//                             <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] my-[46px]">
//                                 Collaboration
//                             </h5>

//                             <p className="text-xs md:text-sm lg:text-2xl font-normal  text-[#45556C]">
//                                At Betopia Limited, we believe the best innovations come from diverse perspectives working together toward a common goal to enhance our HRM, POS, and ERP solutions.
//                                 </p>
//                         </div>
//                         <div
//                             className="rounded-2xl  py-7 px-8 bg-[#ffffff] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
//                         >
//                             <h2
//                                 className=" font-normal text-[#FF9500]
//         text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[52px] leading-tight"
//                             >
//                                 02
//                             </h2>

//                             <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] my-[46px]">
//                                 Step #2
//                             </h5>

//                             <p className="text-xs md:text-sm lg:text-2xl font-normal  text-[#45556C]">
//                                We strive for excellence in everything we do at Betopia Limited, continuously learning and improving our craft to deliver top-tier business technology.
//                                </p>
//                         </div>
//                         <div
//                             className="rounded-2xl  py-7 px-8 bg-[#ffffff] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
//                         >
//                             <h2
//                                 className=" font-normal text-[#FF9500]
//         text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[52px] leading-tight"
//                             >
//                                 03
//                             </h2>

//                             <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] my-[46px]">
//                                 Step #3
//                             </h5>

//                             <p className="text-xs md:text-sm lg:text-2xl font-normal  text-[#45556C]">
//                                We focus on creating meaningful impact for our users, our team at Betopia Limited, and the broader community through our transformative products.


// </p>
//                         </div>
//                     </div>
//                 </div> */}






//             </div>
//         </div>
//     )
// }

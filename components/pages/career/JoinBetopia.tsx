import Image from "next/image";
import Link from "next/link";

export default function JoinBetopia() {
  return (
    <div className="bg-[#FFF]">
      <div className="max-w-[1480px] w-11/12 mx-auto py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 px-4 items-stretch">
        <div>
          <h1
            className=" font-semibold text-black 
          text-[28px] md:text-[32px] xl:text-[52px]"
          >
            Why Join <span className="text-[#FF9500] ">Betopia?</span>
          </h1>
          <div className="mt-7 md:flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-[#FF9500] mb-4 md:mb-0 w-15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M13.8629 25.4152C20.2431 25.4152 25.4152 20.2431 25.4152 13.8629C25.4152 7.48271 20.2431 2.31055 13.8629 2.31055C7.48271 2.31055 2.31055 7.48271 2.31055 13.8629C2.31055 20.2431 7.48271 25.4152 13.8629 25.4152Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.863 20.7945C17.6912 20.7945 20.7945 17.6912 20.7945 13.863C20.7945 10.0349 17.6912 6.93164 13.863 6.93164C10.0349 6.93164 6.93164 10.0349 6.93164 13.863C6.93164 17.6912 10.0349 20.7945 13.863 20.7945Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8632 16.1732C15.1392 16.1732 16.1737 15.1388 16.1737 13.8627C16.1737 12.5867 15.1392 11.5522 13.8632 11.5522C12.5872 11.5522 11.5527 12.5867 11.5527 13.8627C11.5527 15.1388 12.5872 16.1732 13.8632 16.1732Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl xl:text-3xl  font-semibold  text-[#0F172B] ">
                Meaningful Impact
              </h5>

              <div className="flex items-center mt-3 gap-3 text-lg lg:text-xl text-[#45556C]">
                Work on products that are used by thousands of businesses
                worldwide, making a real difference in how they operate.
              </div>
            </div>
          </div>
          <div className="mt-7 md:flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-[#155DFC] mb-4 md:mb-0 w-15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M17.3288 16.1734C17.5598 15.0181 18.1374 14.2095 19.0616 13.2853C20.2168 12.2456 20.7945 10.7438 20.7945 9.24196C20.7945 7.40363 20.0642 5.6406 18.7643 4.34071C17.4644 3.04082 15.7014 2.31055 13.863 2.31055C12.0247 2.31055 10.2617 3.04082 8.9618 4.34071C7.66191 5.6406 6.93164 7.40363 6.93164 9.24196C6.93164 10.3972 7.16269 11.7835 8.66449 13.2853C9.47316 14.0939 10.1663 15.0181 10.3973 16.1734"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3975 20.7944H17.3289"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5527 25.415H16.1737"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl xl:text-3xl  font-semibold  text-[#0F172B] ">
                Innovation First
              </h5>

              <div className="flex items-center mt-3 gap-3 text-lg lg:text-xl text-[#45556C]">
                We embrace cutting-edge technologies and encourage
                experimentation. Your ideas can shape the future of our
                products.
              </div>
            </div>
          </div>
          <div className="mt-7 md:flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-[#00C950] mb-4 md:mb-0 w-15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M18.4838 24.26V21.9496C18.4838 20.724 17.997 19.5486 17.1304 18.6821C16.2638 17.8155 15.0884 17.3286 13.8629 17.3286H6.93149C5.70594 17.3286 4.53058 17.8155 3.66399 18.6821C2.79739 19.5486 2.31055 20.724 2.31055 21.9496V24.26"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4834 3.61328C19.4743 3.87017 20.3519 4.44882 20.9783 5.25841C21.6048 6.06799 21.9447 7.06268 21.9447 8.08635C21.9447 9.11002 21.6048 10.1047 20.9783 10.9143C20.3519 11.7239 19.4743 12.3025 18.4834 12.5594"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.4149 24.2597V21.9493C25.4142 20.9254 25.0734 19.9308 24.4461 19.1216C23.8188 18.3124 22.9406 17.7345 21.9492 17.4785"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3973 12.7077C12.9494 12.7077 15.0182 10.6388 15.0182 8.08676C15.0182 5.53468 12.9494 3.46582 10.3973 3.46582C7.84523 3.46582 5.77637 5.53468 5.77637 8.08676C5.77637 10.6388 7.84523 12.7077 10.3973 12.7077Z"
                  stroke="white"
                  strokeWidth="2.31047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl xl:text-3xl  font-semibold  text-[#0F172B] ">
                Collaborative Culture
              </h5>

              <div className="flex items-center mt-3 gap-3 text-lg lg:text-xl text-[#45556C]">
                Join a diverse team of talented professionals who support each
                other and celebrate wins together.
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[300px] md:h-[350px] lg:h-full">
          <Image
            src="/career.png"
            alt="join_career"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="pb-10 lg:pb-20">
        <Link
          href="/life-at-betopia"
          className="flex items-center justify-center "
        >
          <button className="bg-linear-to-r from-[#FF9500] to-[#F54900] text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
            Learn More About Life at Betopia
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
            >
              <path
                d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523"
                stroke="white"
                strokeWidth="1.54031"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export default function JoinBetopia() {
//     return (
//         <div className="bg-[#FFF]">
//             <div className='max-w-[1480px] mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 px-4'>
//                 <div>
//                     <h1
//                         className=" font-semibold text-black 
//           text-3xl sm:text-4xl md:text-5xl lg:text-[52px]  leading-24"
//                     >
//                         Why Join <span className='text-[#FF9500] '>Betopia?</span>
//                     </h1>
//                     <div className='mt-7 flex items-start gap-5'>
//                         <div className='p-4 rounded-2xl bg-[#FF9500]'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//                                 <path d="M13.8629 25.4152C20.2431 25.4152 25.4152 20.2431 25.4152 13.8629C25.4152 7.48271 20.2431 2.31055 13.8629 2.31055C7.48271 2.31055 2.31055 7.48271 2.31055 13.8629C2.31055 20.2431 7.48271 25.4152 13.8629 25.4152Z" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M13.863 20.7945C17.6912 20.7945 20.7945 17.6912 20.7945 13.863C20.7945 10.0349 17.6912 6.93164 13.863 6.93164C10.0349 6.93164 6.93164 10.0349 6.93164 13.863C6.93164 17.6912 10.0349 20.7945 13.863 20.7945Z" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M13.8632 16.1732C15.1392 16.1732 16.1737 15.1388 16.1737 13.8627C16.1737 12.5867 15.1392 11.5522 13.8632 11.5522C12.5872 11.5522 11.5527 12.5867 11.5527 13.8627C11.5527 15.1388 12.5872 16.1732 13.8632 16.1732Z" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] ">
//                                 Meaningful Impact
//                             </h5>

//                             <div
//                                 className="flex items-center mt-3 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
//                             >Work on products that are used by thousands of businesses worldwide, making a real difference in how they operate.
//                             </div>
//                         </div>
//                     </div>
//                     <div className='mt-7 flex items-start gap-5'>
//                         <div className='p-4 rounded-2xl bg-[#155DFC]'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//                                 <path d="M17.3288 16.1734C17.5598 15.0181 18.1374 14.2095 19.0616 13.2853C20.2168 12.2456 20.7945 10.7438 20.7945 9.24196C20.7945 7.40363 20.0642 5.6406 18.7643 4.34071C17.4644 3.04082 15.7014 2.31055 13.863 2.31055C12.0247 2.31055 10.2617 3.04082 8.9618 4.34071C7.66191 5.6406 6.93164 7.40363 6.93164 9.24196C6.93164 10.3972 7.16269 11.7835 8.66449 13.2853C9.47316 14.0939 10.1663 15.0181 10.3973 16.1734" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M10.3975 20.7944H17.3289" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M11.5527 25.415H16.1737" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] ">
//                                 Innovation First
//                             </h5>

//                             <div
//                                 className="flex items-center mt-3 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
//                             >We embrace cutting-edge technologies and encourage experimentation. Your ideas can shape the future of our products.
//                             </div>
//                         </div>
//                     </div>
//                     <div className='mt-7 flex items-start gap-5'>
//                         <div className='p-4 rounded-2xl bg-[#00C950]'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//                                 <path d="M18.4838 24.26V21.9496C18.4838 20.724 17.997 19.5486 17.1304 18.6821C16.2638 17.8155 15.0884 17.3286 13.8629 17.3286H6.93149C5.70594 17.3286 4.53058 17.8155 3.66399 18.6821C2.79739 19.5486 2.31055 20.724 2.31055 21.9496V24.26" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M18.4834 3.61328C19.4743 3.87017 20.3519 4.44882 20.9783 5.25841C21.6048 6.06799 21.9447 7.06268 21.9447 8.08635C21.9447 9.11002 21.6048 10.1047 20.9783 10.9143C20.3519 11.7239 19.4743 12.3025 18.4834 12.5594" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M25.4149 24.2597V21.9493C25.4142 20.9254 25.0734 19.9308 24.4461 19.1216C23.8188 18.3124 22.9406 17.7345 21.9492 17.4785" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M10.3973 12.7077C12.9494 12.7077 15.0182 10.6388 15.0182 8.08676C15.0182 5.53468 12.9494 3.46582 10.3973 3.46582C7.84523 3.46582 5.77637 5.53468 5.77637 8.08676C5.77637 10.6388 7.84523 12.7077 10.3973 12.7077Z" stroke="white" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] ">
//                                 Collaborative Culture
//                             </h5>

//                             <div
//                                 className="flex items-center mt-3 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
//                             >Join a diverse team of talented professionals who support each other and celebrate wins together.
//                             </div>
//                         </div>
//                     </div>
                     
//                 </div>
//                 <Image src='/join_career.png' alt='join_career' width={711} height={577} />
//             </div>
//             <Link href="/life-at-betopia" className='flex items-center justify-center -mt-32 mb-10'>
//                         <button
//                             className="bg-linear-to-r from-[#FF9500] to-[#F54900] text-white mt-10 cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//                         >Learn More About Life at Betopia
//                             <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
//                                 <path d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </Link>
//         </div>
//     )
// }

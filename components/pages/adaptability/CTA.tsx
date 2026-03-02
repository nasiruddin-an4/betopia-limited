import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4">
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-[52px] text-center font-bold ">
              Adaptability starts here
        </h2>

        <p className="mt-6 md:mt-7 text-[#FFFFFFE5] md:text-2xl max-w-[700px] mx-auto text-center ">
       How change in your enterprise can start
        </p>
        <Link href="/meeting-scheduler">
          <button
            className="mt-9.25 inline-flex items-center gap-2 cursor-pointer  bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl cursor-pointer
             transition"
          >
          Book a Consultation
            <span className="text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#FF9500"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
// import Link from 'next/link'
// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'

// export default function CTA() {
//   return (
//     <section className="w-full bg-linear-to-r from-[#FF9500] to-[#E68600]">

//           <div className="py-10 md:py-[75px] flex flex-col items-center">
//             <h2 className="text-white text-3xl md:text-4xl xl:text-[52px] font-medium md:leading-tight text-center px-0 md:px-4">
//               Adaptability starts here
//             </h2>
// <p className='text-lg md:text-xl xl:text-2xl text-white font-normal text-center'>How change in your enterprise can start</p>
//             <Link href="/contact">
//               <button
//                 className="md:mt-[30px] mt-3 cursor-pointer  inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl
//              transition"
//               >
//                 Book a Consultation
//                 <span className="text-lg">
//                   <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="#FF9500"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//                 </span>
//               </button>
//             </Link>
//           </div>

//     </section>
//   )
// }

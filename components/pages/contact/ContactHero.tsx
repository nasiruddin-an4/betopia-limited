import OnelinePageTitle from '@/components/shared/OnelinePageTitle'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative w-full h-[360px] lg:min-h-screen  overflow-hidden">
        <Image
          alt="media"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero/Contact.png"
          width={1660}
          height={563}
        />
  
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[20%] xl:pt-[15%] 2xl:pt-0">
        <div className="  xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          
          <Link className="text-xl lg:text-3xl font-semibold" href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto">
          <OnelinePageTitle normalText="Get in " highlightText="Touch" />

          <p
            className={`text-lg md:text-xl xl:text-2xl mt-4 md:mt-7 text-start text-[#CAD5E2]  w-[20%] md:w-[40%] lg:w-[50%]`}
          >
          Have questions or ready to start your enterprise transformation journey? Reach out to our team today.
          </p>
        </div>
      </div>

    </div>
  )
}
// "use client";
// import { scrollToDivById } from "@/utils/dom";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const ContactHero = () => {
//   return (
//     <div className="relative w-full h-[300px] lg:h-[405px] overflow-hidden">
//       {/* Background video */}
//       <Image
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/contact/hero_bg.png"
//         alt="hero"
//         height={455}
//         width={1921}
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <p className="flex items-center gap-2 bg-[#FF950033] text-[#FF9500] px-4 py-2 rounded-3xl">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 20 20"
//             fill="none"
//           >
//             <path
//               d="M8.28086 12.9162C8.20647 12.6278 8.05615 12.3646 7.84555 12.154C7.63494 11.9434 7.37176 11.7931 7.08336 11.7187L1.97086 10.4004C1.88364 10.3756 1.80687 10.3231 1.75221 10.2508C1.69754 10.1784 1.66797 10.0902 1.66797 9.99956C1.66797 9.90889 1.69754 9.82069 1.75221 9.74835C1.80687 9.67601 1.88364 9.62348 1.97086 9.59872L7.08336 8.27956C7.37166 8.20523 7.63477 8.05503 7.84537 7.84459C8.05596 7.63414 8.20634 7.37113 8.28086 7.08289L9.5992 1.97039C9.6237 1.88282 9.67618 1.80567 9.74863 1.75072C9.82108 1.69576 9.90951 1.66602 10.0004 1.66602C10.0914 1.66602 10.1798 1.69576 10.2523 1.75072C10.3247 1.80567 10.3772 1.88282 10.4017 1.97039L11.7192 7.08289C11.7936 7.37128 11.9439 7.63447 12.1545 7.84507C12.3651 8.05567 12.6283 8.20599 12.9167 8.28039L18.0292 9.59789C18.1171 9.62214 18.1946 9.67456 18.2499 9.74712C18.3052 9.81968 18.3351 9.90836 18.3351 9.99956C18.3351 10.0908 18.3052 10.1794 18.2499 10.252C18.1946 10.3245 18.1171 10.377 18.0292 10.4012L12.9167 11.7187C12.6283 11.7931 12.3651 11.9434 12.1545 12.154C11.9439 12.3646 11.7936 12.6278 11.7192 12.9162L10.4009 18.0287C10.3764 18.1163 10.3239 18.1934 10.2514 18.2484C10.179 18.3034 10.0905 18.3331 9.99961 18.3331C9.90868 18.3331 9.82025 18.3034 9.7478 18.2484C9.67535 18.1934 9.62287 18.1163 9.59836 18.0287L8.28086 12.9162Z"
//               stroke="#FF9500"
//               strokeWidth="1.66667"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M16.668 2.5V5.83333"
//               stroke="#FF9500"
//               strokeWidth="1.66667"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M18.3333 4.16602H15"
//               stroke="#FF9500"
//               strokeWidth="1.66667"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M3.33203 14.166V15.8327"
//               stroke="#FF9500"
//               strokeWidth="1.66667"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M4.16667 15H2.5"
//               stroke="#FF9500"
//               strokeWidth="1.66667"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           Let&apos;s Connect
//         </p>
//         <h1
//           className="font-bold text-white 
//           text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[64px] my-2 lg:my-4"
//         >
//           Get in <span className="text-[#FF9500]">Touch </span>
//         </h1>

//         <p className=" text-base sm:text-lg md:text-xl lg:text-2xl text-[#CAD5E2] max-w-[1000px] px-2 sm:px-4">
//           Have questions or ready to start your enterprise transformation
//           journey? Reach out to our team today.{" "}
//         </p>

//         {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
//           <button
//             onClick={() => {
//               setTimeout(() => {
//                 scrollToDivById("contact_form");
//               }, 300);
//             }}
//             className="bg-[#FF9500]   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"
//           >
//             Contact Us Today
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="7"
//               height="13"
//               viewBox="0 0 7 13"
//               fill="none"
//             >
//               <path
//                 d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523"
//                 stroke="white"
//                 strokeWidth="1.54031"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default ContactHero;

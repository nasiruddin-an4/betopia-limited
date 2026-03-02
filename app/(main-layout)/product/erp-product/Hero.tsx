import DemoButton from "@/components/shared/button/DemoButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-85  lg:h-137.5 2xl:min-h-screen  overflow-hidden">
      <div className="h-20 bg-black"></div>
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-20 left-0 w-full h-full object-cover"
        src="/product/erp_hero_2.jpg"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col -mt-10 lg:-mt-28  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[20%] xl:pt-[15%] 2xl:pt-0">
        <div className=" xl:min-w-415 xl:mx-auto mb-2 lg:mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link
            className="text-sm md:text-xl lg:text-3xl font-semibold"
            href="/adaptability"
          >
            What We Do
          </Link>
          <div className="text-sm md:text-xl lg:text-3xl font-semibold">/</div>
          <Link
            className="text-sm md:text-xl lg:text-3xl font-semibold"
            href="/product"
          >
            Products
          </Link>
          <div className="text-sm md:text-xl lg:text-3xl font-semibold">/</div>
          <Link
            className="text-sm md:text-xl lg:text-3xl font-semibold"
            href="/product/erp-product"
          >
            Betopia ERP
          </Link>
        </div>
        <div className="w-full 2xl:w-415 mx-auto">
          <h3 className=" text-white text-3xl md:text-4xl  xl:text-[52px]  font-bold">
            Betopia
            <span className="text-[#FF9500]"> ERP</span>{" "}
          </h3>

          <PageSubtitle
            text="A unified ERP (Enterprise Resource Planning) platform integrates all core business functions into one single database.   "
            className="mt-2 lg:mt-7 text-start text-[#CAD5E2] lg:w-[70%]"
          />
          <DemoButton />
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function Hero() {
//   return (
//     <div className="relative w-full  h-[390px] lg:h-[903px]  overflow-hidden">
//       <div className="h-20 bg-black"></div>
//       {/* Background video */}
//       <Image
//         alt="media"
//         className="absolute top-20 left-0 w-full h-full object-cover"
//         src="/product/erp_hero_2.jpg"
//         width={1660}
//         height={563}
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col -mt-10 lg:-mt-28  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
//         <div className=" xl:min-w-[1660px] xl:mx-auto mb-2 lg:mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
//           <Link
//             className="text-sm md:text-xl lg:text-2xl  font-semibold"
//             href="/adaptability"
//           >
//             What We Do
//           </Link>
//           <div className="text-sm md:text-xl lg:text-2xl  font-semibold">/</div>
//           <Link
//             className="text-sm md:text-xl lg:text-2xl  font-semibold"
//             href="/product"
//           >
//             Products
//           </Link>
//           <div className="text-sm md:text-xl lg:text-2xl  font-semibold">/</div>
//           <Link
//             className="text-sm md:text-xl lg:text-3xl font-semibold"
//             href="/product/erp-product"
//           >
//            Betopia ERP
//           </Link>
//         </div>
//         <div className="w-full 2xl:w-[1660px] mx-auto">
//           <h3 className=" text-white text-3xl md:text-4xl  xl:text-[52px]  font-bold">
//             Betopia
//             <span className="text-[#FF9500]"> ERP</span>{" "}
//           </h3>

//           <p
//             className={`text-lg md:text-xl xl:text-2xl mt-2 lg:mt-7 text-start text-[#CAD5E2] lg:w-[70%]  `}
//           >
//             A Unified ERP Platform Built for Multi-Branch Enterprises
//           </p>
//           <div className="flex  gap-1  gap-5 mt-3 lg:mt-10 ">
//             <Link
//               href="/meeting-scheduler"
//               className="flex items-center cursor-pointer bg-linear-to-r from-[#FF9500] to-[#F54900] px-3 lg:px-6 py-1 lg:py-3 md:px-5 text-sm lg:text-base rounded-md lg:rounded-[14px]"
//             >
//               Demo Request
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="white"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // import Link from "next/link";
// // import React from "react";

// // export default function Hero() {
// //   return (
// //     <section
// //       // className="relative flex items-center justify-center min-h-[663px] md:min-h-screen overflow-hidden text-white"
// //       className="relative flex flex-col justify-center items-center h-[600px] md:h-[607px] overflow-hidden text-white pt-20"
// //     >
// //       {/* Video Background */}
// //       <video
// //         className="absolute inset-0 w-full h-full object-cover"
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //       >
// //         <source
// //           src="/videos/hero/team_augmentation_hero.mp4"
// //           type="video/mp4"
// //         />
// //       </video>

// //       {/* Overlay  */}
// //       <div className="absolute inset-0 bg-black/60" />

// //       {/* Content */}
// //       <div className="relative z-10 container text-center px-4">
// //         {/* <p className="text-sm md:text-[17px] border border-[#FF9500] py-2.5 rounded-full w-fit mx-auto mb-4 px-6">
// //           Trusted by Fortune 500 Companies
// //         </p> */}

// //         {/* <h1 className="text-[34px] md:text-5xl 2xl:text-[64px] font-bold leading-tight md:leading-[84px]">
// //           From Bangladesh to the World <br />
// //           Shaping the Future of Enterprise Technology
// //         </h1> */}
// //         {/* <h6 className="flex items-center justify-center  gap-2 text-xs md:text-sm lg:text-base mb-4  w-fit mx-auto px-5 py-2 rounded-3xl bg-[#FF95002B] border border-[#FF9500]">
// //         Betopia ERP
// //         </h6> */}

// //         <h1
// //           className=" font-bold text-white
// //           text-3xl md:text-5xl xl:text-[64px] xl:leading-20"
// //         >
// //         Betopia ERP   <br />{" "}
// //           <span className="text-[#FF9500]">
// // Management System</span>
// //         </h1>

// //         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-[800px] mx-auto px-2 sm:px-4">
// //         Streamline sales, purchases, inventory, and customer support all from one powerful, connected platform.
// //         </p>

// //       <div className="flex justify-center gap-1  gap-5 mt-10">
// //           <Link
// //             href="/meeting-scheduler" target="_blank"
// //             className="flex items-center cursor-pointer bg-linear-to-r from-[#FF9500] to-[#F54900] px-6 py-3 md:px-5 text-base rounded-[14px]"
// //           >
// //             Book a Consultation
// //                <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="26"
// //                 height="26"
// //                 viewBox="0 0 26 26"
// //                 fill="none"
// //               >
// //                 <path
// //                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
// //                   stroke="white"
// //                   strokeWidth="1.95"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               </svg>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

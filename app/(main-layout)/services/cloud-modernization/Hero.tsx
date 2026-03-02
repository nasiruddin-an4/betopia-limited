import BookButton from "@/components/shared/button/BookButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[550px]  xl:h-[650px]  2xl:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/cloud3.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[32%] xl:pt-[28%] 2xl:pt-[5%]">
        <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/services">
            <div className="text-lg lg:text-3xl font-semibold">Services</div>
          </Link>

          <div className="text-lg lg:text-3xl font-semibold">/</div>
          <Link
            className="text-lg lg:text-3xl font-semibold"
            href="/services/cloud-modernization"
          >
            Cloud Modernization
          </Link>
        </div>
        <div className="  lg:w-[1440px] mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
            From legacy to <span className="text-[#FF9500]">leadership</span>
          </h1>
           {/* <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
           Accelerate Innovation
          </h1> */}


          <PageSubtitle
            text="Cloud modernization is about transforming legacy IT into secure, scalable, and agile digital platforms. Betopia Limited helps organizations modernize applications, infrastructure, and operating models to unlock business agility, resilience, and cost efficiency across hybrid and multi-cloud environments."
            className="mt-4 md:mt-7 text-[#CAD5E2] lg:text-justify lg:w-[60%]"
          />
          <BookButton />
        </div>
      </div>
    </div>
  );
}


// import BookButton from "@/components/shared/button/BookButton";
// import PageSubtitle from "@/components/shared/heading/pageSubtitle";
// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <div className="relative w-full h-[550px]  xl:h-[650px]  2xl:min-h-screen  overflow-hidden">
//       {/* Background video */}
//       <Image
//         alt="Values"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/hero/cloud3.png"
//         width={1660}
//         height={563}
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[32%] xl:pt-[28%] 2xl:pt-[5%]">
//         <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
//           <Link href="/services">
//             <div className="text-lg lg:text-3xl font-semibold">Services</div>
//           </Link>

//           <div className="text-lg lg:text-3xl font-semibold">/</div>
//           <Link
//             className="text-lg lg:text-3xl font-semibold"
//             href="/services/cloud-modernization"
//           >
//             Cloud Modernization
//           </Link>
//         </div>
//         <div className="  lg:w-[1440px] mx-auto">
//           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
//             Modernize Your Enterprise,
//           </h1>
//            <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
//            Accelerate Innovation
//           </h1>


//           <PageSubtitle
//             text="Your company deserves a distinct cloud strategy that unlocks breakthrough technologies, accelerates transformation, and captures emerging opportunities. By delivering real value, we empower your organization to evolve with agility, scalability, flexibility, innovation, and resilience. "
//             className="mt-4 md:mt-7 text-[#CAD5E2] lg:text-justify lg:w-[60%]"
//           />
//           <BookButton />
//         </div>
//       </div>
//     </div>
//   );
// }

// // import Link from "next/link";

// // export default function Hero() {
// //   return (
// //     <section
// //       // className="relative flex items-center justify-center min-h-[663px] md:min-h-screen overflow-hidden text-white"
// //       className="relative flex flex-col justify-center items-center h-[560px] md:h-[637px] overflow-hidden text-white pt-10"
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
// //       <div className="relative z-10 container text-center px-4 pt-10">
// //         {/* <p className="text-sm md:text-[17px] border border-[#FF9500] py-2.5 rounded-full w-fit mx-auto mb-4 px-6">
// //           Trusted by Fortune 500 Companies
// //         </p> */}

// //         {/* <h1 className="text-[34px] md:text-5xl 2xl:text-[64px] font-bold leading-tight md:leading-[84px]">
// //           From Bangladesh to the World <br />
// //           Shaping the Future of Enterprise Technology
// //         </h1> */}
// //         <h6 className="flex items-center justify-center  gap-2 text-xs md:text-sm lg:text-base mb-4  w-fit mx-auto px-5 py-2 rounded-3xl bg-[#FF95002B] border border-[#FF9500]">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             width="24"
// //             height="24"
// //             viewBox="0 0 24 24"
// //             fill="none"
// //           >
// //             <path
// //               d="M17.5002 19H9.00016C7.70202 18.9997 6.42955 18.6384 5.32494 17.9565C4.22032 17.2746 3.32708 16.2989 2.74503 15.1386C2.16298 13.9783 1.91505 12.679 2.02895 11.3858C2.14285 10.0927 2.61409 8.85671 3.39001 7.81598C4.16593 6.77526 5.21596 5.97079 6.42276 5.49249C7.62957 5.01418 8.9456 4.88087 10.2238 5.10747C11.502 5.33406 12.692 5.91162 13.6609 6.77561C14.6297 7.6396 15.3393 8.75598 15.7102 10H17.5002C18.6936 10 19.8382 10.4741 20.6821 11.318C21.5261 12.1619 22.0002 13.3065 22.0002 14.5C22.0002 15.6935 21.5261 16.8381 20.6821 17.682C19.8382 18.5259 18.6936 19 17.5002 19Z"
// //               stroke="#FF9500"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>{" "}
// //           Cloud Solutions
// //         </h6>

// //         <h1
// //           className=" font-bold text-white
// //           text-3xl md:text-5xl xl:text-[64px]  lg:leading-20"
// //         >
// //            Modernize Your Enterprise, <br />{" "}
// //           <span className="text-[#FF9500]">Accelerate Innovation</span>
// //         </h1>

// //         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-[1000px] mx-auto px-2 sm:px-4">
// //           Cloud-native rebuilds, legacy refactoring, and multi-cloud deployment{" "}

// //           for scalable, secure, and cost-efficient operations.
// //         </p>

// //           <div className="flex justify-center gap-5 mt-10 md:mt-[64px]">
// //           <Link
// //             href="/meeting-scheduler" target="_blank"
// //             className="flex items-center cursor-pointer gap-1 bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:px-5 md:py-3 rounded-[14px]"
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

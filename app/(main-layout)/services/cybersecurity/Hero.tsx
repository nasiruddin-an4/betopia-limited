import BookButton from "@/components/shared/button/BookButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full  h-[580px]  xl:h-[650px]  2xl:min-h-screen   overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/Cybersecurity2.png"
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
            href="/services/cybersecurity"
          >
            Cybersecurity Services
          </Link>
        </div>
          <div className="lg:w-[1440px] mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
            Defend relentlessly. 
          </h1>
           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
           Operate confidently.
          </h1>


          <PageSubtitle
            text="Cybersecurity is no longer just an IT concern, it is a business risk, a regulatory mandate, and a trust imperative. Betopia Limited helps organizations protect digital assets, manage cyber risk, and build resilient security operations across hybrid, cloud, and on-premises environments."
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
//     <div className="relative w-full h-[500px]  xl:h-[650px]  2xl:min-h-screen   overflow-hidden">
//       {/* Background video */}
//       <Image
//         alt="Values"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/hero/Cybersecurity2.png"
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
//             href="/services/cybersecurity"
//           >
//             Cybersecurity Services
//           </Link>
//         </div>
//         <div className="min-w-[1440px] mx-auto">
//           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
//              Secure Your Enterprise, Achieve
//           </h1>
//            <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
//            Compliance Confidence
//           </h1>


//           <PageSubtitle
//             text="End-to-end security services, compliance automation, and managed app protection for regulated industries."
//             className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[50%] "
//           />
//           <BookButton />
//         </div>
//       </div>
//     </div>
//   );
// }
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       // className="relative flex items-center justify-center min-h-[663px] md:min-h-screen overflow-hidden text-white"
//        className="relative flex flex-col justify-center items-center h-[560px] md:h-[637px] overflow-hidden text-white pt-10"
//     >
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source
//           src="/videos/hero/team_augmentation_hero.mp4"
//           type="video/mp4"
//         />
//       </video>

//       {/* Overlay  */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 container text-center px-4 pt-20">
//         {/* <p className="text-sm md:text-[17px] border border-[#FF9500] py-2.5 rounded-full w-fit mx-auto mb-4 px-6">
//           Trusted by Fortune 500 Companies
//         </p> */}

//         {/* <h1 className="text-[34px] md:text-5xl 2xl:text-[64px] font-bold leading-tight md:leading-[84px]">
//           From Bangladesh to the World <br />
//           Shaping the Future of Enterprise Technology
//         </h1> */}
//         <h6 className="flex items-center justify-center  gap-2 text-xs md:text-sm lg:text-base mb-4  w-fit mx-auto px-5 py-2 rounded-3xl bg-[#FF95002B] border border-[#FF9500]">
         
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 20 20"
//             fill="none"
//           >
//             <path
//               d="M16.6673 10.835C16.6673 15.0017 13.7507 17.085 10.284 18.2933C10.1025 18.3549 9.90527 18.3519 9.72565 18.285C6.25065 17.085 3.33398 15.0017 3.33398 10.835V5.00168C3.33398 4.78066 3.42178 4.5687 3.57806 4.41242C3.73434 4.25614 3.9463 4.16834 4.16732 4.16834C5.83398 4.16834 7.91732 3.16834 9.36732 1.90168C9.54386 1.75084 9.76845 1.66797 10.0007 1.66797C10.2329 1.66797 10.4574 1.75084 10.634 1.90168C12.0923 3.17668 14.1673 4.16834 15.834 4.16834C16.055 4.16834 16.267 4.25614 16.4232 4.41242C16.5795 4.5687 16.6673 4.78066 16.6673 5.00168V10.835Z"
//               stroke="#FF9500"
//               strokeWidth="1.66667"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           Cybersecurity & Compliance
//         </h6>

//         <h1
//           className=" font-bold text-white 
//           text-3xl md:text-5xl xl:text-[64px]  lg:leading-20"
//         >
//            Secure Your Enterprise, Achieve <br />{" "}
//           <span className="text-[#FF9500]">Compliance Confidence</span>
//         </h1>

//         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-[1000px] mx-auto px-2 sm:px-4">
//           End-to-end security services, compliance automation, and managed app
//           protection for regulated industries.
//         </p>

//         <div className="flex justify-center gap-5 mt-10 md:mt-[64px]">
//           <Link
//             href="/meeting-scheduler" target="_blank"
//             className="flex items-center cursor-pointer gap-1 bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:px-5 md:py-3 rounded-[14px]"
//           >
//             Book a Consultation
//                <svg
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
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

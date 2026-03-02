import BookButton from "@/components/shared/button/BookButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full  h-145  xl:h-162.5  2xl:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/AI.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[32%] xl:pt-[28%] 2xl:pt-[5%]">
        <div className="xl:min-w-360 xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/services">
            <div className="text-lg lg:text-3xl font-semibold">Services</div>
          </Link>

          <div className="text-lg lg:text-3xl font-semibold">/</div>
          <Link
            className="text-lg lg:text-3xl font-semibold"
            href="/services/ai-analytics"
          >
            AI & Analytics
          </Link>
        </div>
        <div className="lg:w-360 mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
            Turn data into decisions.
          </h1>
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
            Decisions into advantage.
          </h1>

          <PageSubtitle
            text="AI and data analytics are no longer support functions—they are core business drivers. Betopia Limited helps organizations build trusted data foundations, deploy advanced analytics, and operationalize AI to drive smarter decisions, faster actions, and measurable business outcomes."
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
//     <div className="relative w-full  h-[500px]  xl:h-[650px]  2xl:min-h-screen  overflow-hidden">
//       {/* Background video */}
//       <Image
//         alt="Values"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/hero/AI.png"
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
//             href="/services/ai-analytics"
//           >
//             AI & Analytics
//           </Link>
//         </div>
//         <div className="min-w-[1440px] mx-auto">
//           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
//            Turn Data into Actionable
//           </h1>
//            <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
//           Insights
//           </h1>

//           <PageSubtitle
//             text="AI-powered enterprise applications, predictive analytics, and integration solutions to drive measurable business impact."
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
//       className="relative flex flex-col justify-center items-center h-[560px] md:h-[637px] overflow-hidden text-white pt-10"
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
//            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//   <path d="M10 4.16752C10.001 3.83421 9.93532 3.50408 9.80685 3.19652C9.67837 2.88897 9.4897 2.61021 9.25191 2.37664C9.01413 2.14308 8.73204 1.95942 8.42224 1.83646C8.11243 1.71351 7.78117 1.65375 7.44793 1.6607C7.1147 1.66765 6.78621 1.74116 6.4818 1.87691C6.17739 2.01266 5.9032 2.20792 5.67536 2.45119C5.44751 2.69447 5.27061 2.98084 5.15506 3.29348C5.03952 3.60612 4.98765 3.93871 5.00252 4.27169C4.51269 4.39764 4.05794 4.6334 3.67271 4.96112C3.28749 5.28883 2.98189 5.69992 2.77906 6.16323C2.57623 6.62654 2.48149 7.12993 2.50201 7.63528C2.52254 8.14063 2.65779 8.63468 2.89752 9.08002C2.476 9.42247 2.14454 9.86271 1.93197 10.3625C1.7194 10.8622 1.63215 11.4063 1.67782 11.9475C1.7235 12.4887 1.9007 13.0105 2.19403 13.4675C2.48735 13.9246 2.88791 14.3031 3.36085 14.57C3.30245 15.0219 3.3373 15.4809 3.46326 15.9188C3.58922 16.3567 3.8036 16.7641 4.09318 17.1158C4.38275 17.4676 4.74136 17.7563 5.14687 17.964C5.55238 18.1717 5.99617 18.2941 6.45083 18.3236C6.9055 18.3531 7.36139 18.2891 7.79034 18.1355C8.2193 17.9819 8.61221 17.742 8.94482 17.4307C9.27743 17.1193 9.54267 16.743 9.72416 16.3251C9.90565 15.9072 9.99953 15.4565 10 15.0009V4.16752Z" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M10 4.16752C9.99903 3.83421 10.0647 3.50408 10.1932 3.19652C10.3217 2.88897 10.5103 2.61021 10.7481 2.37664C10.9859 2.14308 11.268 1.95942 11.5778 1.83646C11.8876 1.71351 12.2189 1.65375 12.5521 1.6607C12.8853 1.66765 13.2138 1.74116 13.5182 1.87691C13.8226 2.01266 14.0968 2.20792 14.3247 2.45119C14.5525 2.69447 14.7294 2.98084 14.845 3.29348C14.9605 3.60612 15.0124 3.93871 14.9975 4.27169C15.4873 4.39764 15.9421 4.6334 16.3273 4.96112C16.7125 5.28883 17.0181 5.69992 17.221 6.16323C17.4238 6.62654 17.5185 7.12993 17.498 7.63528C17.4775 8.14063 17.3422 8.63468 17.1025 9.08002C17.524 9.42247 17.8555 9.86271 18.0681 10.3625C18.2806 10.8622 18.3679 11.4063 18.3222 11.9475C18.2765 12.4887 18.0993 13.0105 17.806 13.4675C17.5127 13.9246 17.1121 14.3031 16.6392 14.57C16.6976 15.0219 16.6627 15.4809 16.5368 15.9188C16.4108 16.3567 16.1964 16.7641 15.9069 17.1158C15.6173 17.4676 15.2587 17.7563 14.8532 17.964C14.4477 18.1717 14.0039 18.2941 13.5492 18.3236C13.0945 18.3531 12.6386 18.2891 12.2097 18.1355C11.7807 17.9819 11.3878 17.742 11.0552 17.4307C10.7226 17.1193 10.4574 16.743 10.2759 16.3251C10.0944 15.9072 10.0005 15.4565 10 15.0009V4.16752Z" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M12.5 10.8333C11.8004 10.5872 11.1894 10.1392 10.7444 9.54584C10.2994 8.95251 10.0404 8.24056 10 7.5C9.95962 8.24056 9.70056 8.95251 9.25556 9.54584C8.81057 10.1392 8.19963 10.5872 7.5 10.8333" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M14.666 5.41536C14.8677 5.06585 14.9818 4.67271 14.9985 4.26953" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M5.00195 4.26953C5.01843 4.67264 5.13223 5.06578 5.33362 5.41536" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M2.89844 9.08C3.05089 8.95584 3.21402 8.84541 3.38594 8.75" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M16.6152 8.75C16.7871 8.84541 16.9503 8.95584 17.1027 9.08" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M5.00049 15.0003C4.42619 15.0006 3.86155 14.8525 3.36133 14.5703" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M16.6392 14.5703C16.1389 14.8525 15.5743 15.0006 15 15.0003" stroke="#FF9500" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
//           AI & Analytics
//         </h6>

//         <h1
//           className=" font-bold text-white
//          text-3xl md:text-5xl xl:text-[64px]  lg:leading-20"
//         >
//           Turn Data into Actionable <br />{" "}
//           <span className="text-[#FF9500]">Insights </span>
//         </h1>

//         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-[1000px] mx-auto px-2 sm:px-4">
//           AI-powered enterprise applications, predictive analytics, and
//           integration solutions to drive measurable business impact.
//         </p>

//          <div className="flex justify-center gap-5 mt-10 md:mt-[64px]">
//           <Link
//             href="/meeting-scheduler" target="_blank"
//             className="flex items-center gap-1 cursor-pointer bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:px-5 md:py-3 rounded-[14px]"
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

import BookButton from "@/components/shared/button/BookButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full   h-[580px]  xl:h-[650px]  2xl:min-h-screen overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/Resource2.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[32%] xl:pt-[28%] 2xl:pt-[5%]">
        <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex flex-wrap items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/services">
            <div className="text-lg lg:text-3xl font-semibold">Services</div>
          </Link>

          <div className="text-lg lg:text-3xl font-semibold">/</div>
          <Link
            className="text-lg lg:text-3xl font-semibold"
            href="/services/resource-augmentation"
          >
            Resource Augmentation
          </Link>
        </div>
       <div className="lg:w-[1440px] mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
            Scale talent. Stay agile. 
          </h1>
           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
           Deliver faster.
          </h1>


          <PageSubtitle
            text="Modern businesses need the ability to scale skills quickly without long-term hiring risk. Betopia Limited provides Resource Augmentation Services that give organizations immediate access to skilled professionals, flexible delivery models, and predictable outcomes—across cloud, software, data, AI, and cybersecurity domains."
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
//     <div className="relative w-full  h-[500px]  xl:h-[650px]  2xl:min-h-screen overflow-hidden">
//       {/* Background video */}
//       <Image
//         alt="Values"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/hero/Resource2.png"
//         width={1660}
//         height={563}
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[32%] xl:pt-[28%] 2xl:pt-[5%]">
//         <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex flex-wrap items-center justify-start gap-3 pb-3 border-b border-white ">
//           <Link href="/services">
//             <div className="text-lg lg:text-3xl font-semibold">Services</div>
//           </Link>

//           <div className="text-lg lg:text-3xl font-semibold">/</div>
//           <Link
//             className="text-lg lg:text-3xl font-semibold"
//             href="/services/resource-augmentation"
//           >
//             Resource Augmentation
//           </Link>
//         </div>
//         <div className="min-w-[1440px] mx-auto">
//           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
//              Enterprise-Grade Talent
//           </h1>
//            <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
//            On-Demand
//           </h1>


//           <PageSubtitle
//             text="Outcome-aligned teams embedded in your programs to accelerate delivery, reduce hiring risk, and optimize costs."
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
//      className="relative flex flex-col justify-center items-center h-[560px] md:h-[637px] overflow-hidden text-white pt-10"
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
         
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//   <path d="M13.3307 17.5V15.8333C13.3307 14.9493 12.9795 14.1014 12.3544 13.4763C11.7293 12.8512 10.8815 12.5 9.9974 12.5H4.9974C4.11334 12.5 3.26549 12.8512 2.64037 13.4763C2.01525 14.1014 1.66406 14.9493 1.66406 15.8333V17.5" stroke="#FFB86A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M7.4974 9.16667C9.33835 9.16667 10.8307 7.67428 10.8307 5.83333C10.8307 3.99238 9.33835 2.5 7.4974 2.5C5.65645 2.5 4.16406 3.99238 4.16406 5.83333C4.16406 7.67428 5.65645 9.16667 7.4974 9.16667Z" stroke="#FFB86A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M18.3359 17.501V15.8344C18.3354 15.0958 18.0896 14.3784 17.6371 13.7946C17.1846 13.2109 16.551 12.794 15.8359 12.6094" stroke="#FFB86A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M13.3359 2.60938C14.0529 2.79296 14.6885 3.20996 15.1423 3.79463C15.5961 4.37931 15.8425 5.0984 15.8425 5.83854C15.8425 6.57868 15.5961 7.29778 15.1423 7.88245C14.6885 8.46712 14.0529 8.88412 13.3359 9.06771" stroke="#FFB86A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
//         Resource Augmentation
//         </h6>

//         <h1
//           className=" font-bold text-white 
//           text-3xl md:text-5xl xl:text-[64px]  lg:leading-20"
//         >
//         Enterprise-Grade Talent   <br />{" "}
//           <span className="text-[#FF9500]">On-Demand</span>
//         </h1>

//         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-[1000px] mx-auto px-2 sm:px-4">
//         Outcome-aligned teams embedded in your programs to accelerate delivery, reduce hiring risk, and optimize costs.
//         </p>

//      <div className="flex justify-center gap-5 mt-10 md:mt-[64px]">
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

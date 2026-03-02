import BookButton from "@/components/shared/button/BookButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] lg:h-[810px] xl:min-h-screen   overflow-hidden">
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/s3.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:pt-[5%] lg:pt-[35%] xl:pt-[28%]">
        <div className="max-w-[1440px] w-full mx-auto mb-10 flex flex-wrap items-center gap-3 pb-3 border-b border-white">
          <Link className=" lg:text-3xl font-semibold" href="/solution">
            Solutions
          </Link>
          <div className="text-xl lg:text-3xl font-semibold">/</div>

          <div className=" lg:text-3xl font-semibold">
            Cyber Security Solutions
          </div>
          <div className=" lg:text-3xl font-semibold">/</div>
          <Link
            className=" lg:text-3xl font-semibold"
            href="/solution/cyber-security/cyber-security-operations-solutions"
          >
           Cyber Security Operations Solutions
          </Link>
        </div>
        
        <div className="max-w-[1440px] w-full mx-auto">
          <h1
            className="font-bold text-white 
          text-2xl md:text-4xl lg:text-[64px]"
          >
          Detect Faster. Respond Smarter.
            <br />
           { }
            <span className="text-[#FF9500]">
           Stay Secure.
            </span>
          </h1>
          <PageSubtitle
            text="Advanced cyber security operations solutions that provide continuous monitoring, rapid threat detection, automated response, and complete visibility across enterprise environments."
            className="mt-2 lg:mt-7 text-start text-[#CAD5E2] w-[90%]"
          />

          <BookButton />
        </div>
      </div>
    </div>
  );
}

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative flex flex-col justify-end items-center  h-[530px] md:h-[666px] overflow-hidden text-white pt-10 md:pt-20 pb-10 md:pb-[72px]">
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
//       <div className="relative z-10 container text-center px-4">
//         <h6 className="flex items-center justify-center  gap-2  mb-6  w-fit mx-auto px-5 py-2 rounded-3xl bg-[#AF90E133] border border-[#FF9500]">
//          Cyber Security
//         </h6>

//         <h1
//           className="font-bold text-white 
//           text-[23px] sm:text-4xl md:text-5xl lg:text-[64px]  md:leading-[72px]"
//         >
//       Detect Faster. Respond Smarter. <br /> 
//           <span className="text-[#FF9500]"> Stay Secure. </span>
//         </h1>

//         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl text-[#CAD5E2] md:max-w-[75%] mx-auto px-2 sm:px-4">
//       Advanced cyber security operations solutions that provide continuous monitoring, rapid threat detection, automated response, and complete visibility across enterprise environments.
//       </p>

//         <div className="flex justify-center gap-5 mt-10 md:mt-[64px]">
//           <Link
//             href="/meeting-scheduler" target="_blank"
//             className="flex items-center cursor-pointer gap-1  bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-[14px]"
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

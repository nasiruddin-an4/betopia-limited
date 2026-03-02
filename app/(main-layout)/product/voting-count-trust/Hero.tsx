import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      // className="relative flex items-center justify-center min-h-[663px] md:min-h-screen overflow-hidden text-white"
      className="relative flex flex-col justify-center items-center h-150 md:h-151.75 overflow-hidden text-white pt-20"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/videos/hero/team_augmentation_hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay  */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h6 className="flex items-center justify-center  gap-2  mb-2  w-fit mx-auto px-5 py-2 rounded-3xl bg-[#FF95002B] border border-[#FF9500]">
          Betopia
        </h6>

        <h1
          className="font-bold text-white 
          text-3xl md:text-5xl xl:text-[64px] xl:leading-18"
        >
          Count Trust
          <br /> Secure, Auditable Online Voting System <br />
          <span className="text-[#FF9500]">Built on Trust</span>
        </h1>
        <p className="mt-4  text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-275 mx-auto px-2 sm:px-4">
          A next-generation online voting platform designed for organizations
          that demand security, transparency, and credibility starting from
          clubs and schools to enterprises and large-scale elections.
        </p>
        <div className="flex justify-center gap-5 mt-10 ">
          <Link
            href="#"
            className="flex items-center cursor-pointer bg-linear-to-r from-[#FF9500] to-[#F54900] px-6 py-3 md:px-5 text-base rounded-[14px]"
          >
            Request a Live Demo of CountTrust
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                stroke="white"
                strokeWidth="1.95"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import React from "react";

// export default function Hero() {
//   return (
//     <section
//       // className="relative flex items-center justify-center min-h-[663px] md:min-h-screen overflow-hidden text-white"
//      className="relative flex flex-col justify-center items-center h-[600px] md:h-[607px] overflow-hidden text-white pt-20"
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
//       <div className="relative z-10 container text-center px-4">
//         {/* <p className="text-sm md:text-[17px] border border-[#FF9500] py-2.5 rounded-full w-fit mx-auto mb-4 px-6">
//           Trusted by Fortune 500 Companies
//         </p> */}

//         {/* <h1 className="text-[34px] md:text-5xl 2xl:text-[64px] font-bold leading-tight md:leading-[84px]">
//           From Bangladesh to the World <br />
//           Shaping the Future of Enterprise Technology
//         </h1> */}
//         {/* <h6 className="flex items-center justify-center  gap-2 text-xs md:text-sm lg:text-base mb-4  w-fit mx-auto px-5 py-2 rounded-3xl bg-[#FF95002B] border border-[#FF9500]">
//         Betopia Voting Count Trust
//         </h6> */}

//         <h1
//           className=" font-bold text-white
//           text-3xl md:text-5xl xl:text-[64px] xl:leading-20"
//         >
//            The Future of Secure, <br />{" "}
//           <span className="text-[#FF9500]">Transparent & Verifiable Voting</span>
//         </h1>

//         <p className="mt-4 sm:mt-6 text-lg md:text-xl xl:text-2xl font-normal  text-[#CAD5E2] max-w-[1100px] mx-auto px-2 sm:px-4">
//           A SaaS-based hybrid voting platform that ensures every vote is immutable, auditable, and secure—designed for organizations that demand trust, transparency, and operational simplicity.
//         </p>

//        <div className="flex justify-center gap-1  gap-5 mt-10 ">
//           <Link
//             href="/meeting-scheduler" target="_blank"
//             className="flex items-center cursor-pointer bg-linear-to-r from-[#FF9500] to-[#F54900] px-6 py-3 md:px-5 text-base rounded-[14px]"
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

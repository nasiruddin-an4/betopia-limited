import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
import Image from "next/image";
import Link from "next/link";

export default function AboutBanner() {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/about.jpg"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[40%] xl:pt-[22%] 2xl:pt-[5%]">
        <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <div className="text-xl lg:text-3xl font-semibold">Who We Are</div>

          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link className="text-xl lg:text-3xl font-semibold" href="/about">
            About Us
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto">
             <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
         Building a Global
          </h1>
           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
         Technology Powerhouse
          </h1>
          {/* <OnelinePageTitle
            normalText="Building a Global
"
            highlightText="Technology Powerhouse"
          /> */}

          <PageSubtitle
            text="From Bangladesh to the world - competing with industry giants while empowering enterprises globally"
            className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[40%] "
          />
        </div>
      </div>
    </div>
  );
}

// "use client";
// import PageTitle from "@/components/shared/PageTitle";
// import Image from "next/image";
// // import Link from "next/link";
// import { useState } from "react";
// // import { FaArrowRight } from "react-icons/fa";

// const AboutBanner = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <section
//       // className="relative flex items-center justify-center min-h-[663px] md:min-h-screen overflow-hidden text-white"
//       className="relative flex flex-col justify-center items-center h-[400px] md:h-[500px] overflow-hidden text-white pt-24"
//     >
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/hero/aboutbanner.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay  */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10 container text-center px-4">
//         {/* <p className="text-sm md:text-[17px] border border-[#FF9500] py-2.5 rounded-full w-fit mx-auto mb-4 px-6">
//           Trusted by Fortune 500 Companies
//         </p> */}

//         {/* <h1 className="text-[34px] md:text-5xl 2xl:text-[64px] font-bold leading-tight md:leading-[84px]">
//           From Bangladesh to the World <br />
//           Shaping the Future of Enterprise Technology
//         </h1> */}
//         <p className="text-sm md:text-base text-[#FF9500] border border-[#FF95004D] bg-[#FF950033] py-2 rounded-full w-fit mx-auto mb-4 px-6 flex items-center gap-1">
//           <Image
//             src="/about/badge-icon.svg"
//             alt="icon"
//             width={20}
//             height={20}
//           />
//           About Betopia Limited
//         </p>
//         <PageTitle
//           normalText={"Building a Global"}
//           highlightText={"Technology Powerhouse"}
//           wrapperClass="text-32xl md:text-5xl lg:!text-[64px] font-bold"
//         />
//         <p className="md:text-2xl text-[#CAD5E2] md:max-w-[60%] mx-auto mt-4 mb-8">
//           From Bangladesh to the world - competing with industry giants while
//           empowering enterprises globally
//         </p>
//         {/*
//         <div className="flex justify-center gap-5">
//           <Link
//             href="/contact"
//             className="flex items-center gap-3 bg-[#FF9500] px-4 py-2 md:px-5 md:py-3 rounded-[10px]"
//           >
//             Get started <svg
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
//           </Link>

//                <button
//         onClick={() => setOpen(true)}
//         className="flex items-center gap-2 bg-white hover:bg-[#FF9500] hover:text-white cursor-pointer text-[#FF9500] border border-[#45556C] px-4 py-2 md:px-5 md:py-3 rounded-[10px]"
//       >
//         View Demo
//       </button>

//         </div> */}
//       </div>
//       {/* Popup Modal */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//           {/* Modal Box */}
//           <div className="relative w-[90%] md:w-[700px] bg-black rounded-xl overflow-hidden">
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-3 right-3 text-white text-2xl z-10"
//             >
//               ✕
//             </button>

//             {/* Video */}
//             <video
//               src="/videos/hero/home2.mp4" // 👈 your video path
//               controls
//               autoPlay
//               className="w-full h-full"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AboutBanner;

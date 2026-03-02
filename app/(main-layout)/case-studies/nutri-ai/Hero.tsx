import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-125 lg:h-145 xl:min-h-screen   overflow-hidden">
      {/* Background image */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover lg:object-right  lg:mt-10"
        src="/hero/n.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:pt-[5%] lg:pt-[35%] xl:pt-[28%]">
        <div className="max-w-360 w-full mx-auto mb-10 flex flex-wrap items-center gap-3 pb-3 border-b border-white">
          <div className=" lg:text-3xl font-semibold">Impact & Insights</div>
          <div className="lg:text-3xl font-semibold">/</div>
          <Link className=" lg:text-3xl font-semibold" href="/case_studies">
            Case Studies
          </Link>

          <div className=" lg:text-3xl font-semibold">/</div>
          <Link
            className=" lg:text-3xl font-semibold"
            href="/case-studies/nutri-ai"
          >
            Nutri AI
          </Link>
        </div>

        <div className="max-w-360 w-full mx-auto">
          <h1
            className="font-bold text-white 
          text-2xl md:text-4xl lg:text-[64px]"
          >
            Nutri AI Your Personal AI Powered
            <br />
            {}
            <span className="text-[#FF9500]">Nutrition Coach</span>
          </h1>
          <PageSubtitle
            text="Nutri AI is your AI-powered nutrition coach, helping you track calories, analyze meals, and achieve a healthier lifestyle with ease. Explore the 2025 UI/UX case study"
            className="mt-2 lg:mt-7 text-start text-[#CAD5E2] xl:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
}

// import PageSubtitle from "@/components/shared/heading/pageSubtitle";

// export default function Hero() {
//   return (
//     <div className="relative w-full h-[440px] lg:h-[663px] overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/videos/hero/team_augmentation_hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <h6 className="text-xs md:text-sm lg:text-base mb-4  px-5 py-2 rounded-3xl bg-[#FF690033] border border-[#70491d]">
//           Betopia Portfolio
//         </h6>

//         <h1
//           className="text-white text-3xl md:text-5xl xl:text-[64px] font-bold"
//         >
//           Nutri <span className="text-[#FF9500]">AI </span><br />  Your Personal
//           AI Powered Nutrition Coach
//         </h1>
//         <PageSubtitle
//               text="An innovative mobile app that transforms the thrill of treasure
//           hunting into an engaging, gamified adventure with puzzles, QR scans,
//           and real rewards."
//               className="text-[#CAD5E2] mt-2 lg:mt-6 leading-8 lg:w-[70%] mx-auto"
//             />

//         {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
//           <Link href=''>
//             <button
//               className="bg-[#FF9500]   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//             >Explore Products
//               <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
//                 <path d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </Link>
//           <Link href=''>
//             <button
//               className="hover:bg-[#FF9500] bg-white text-[#FF9500] hover:text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//             >Watch Demo
//             </button>
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// }

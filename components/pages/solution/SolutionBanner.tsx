import BookButton from "@/components/shared/button/BookButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function SolutionBanner() {
  return (
    <div className="relative w-full h-[500px]  lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/solution.jpg"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-40">
        <div className="xl:min-w-[1490px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/solution">
            <div className="text-lg lg:text-3xl font-semibold">Our Solutions</div>
          </Link>

       
        </div>
        <div className="min-w-[1440px] w-9/12 mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
             Transform Your Business with
          </h1>
           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
           Cutting-Edge Solutions
          </h1>


          <PageSubtitle
            text="From cloud migration to cybersecurity, we deliver comprehensive infrastructure solutions that drive growth, efficiency, and innovation for enterprises worldwide."
            className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[50%] "
          />
          <BookButton />
        </div>
      </div>
    </div>
  );
}
// import PageSubtitle from "@/components/shared/pageSubtitle";
// import PageTitle from "@/components/shared/PageTitle";
// import { solutionstats } from "@/data/solution";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// const SolutionBanner = () => {
//   return (
//     <div className="relative w-full h-[580px] md:h-[650px] lg:h-[710px] overflow-hidden">
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
//       <div className="relative z-10 flex flex-col mt-12 lg:mt-20 items-center justify-center h-full text-[#FF8904] text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <h6 className="text-xs md:text-sm lg:text-base mb-4  px-4 py-2 rounded-3xl bg-[#FF690033] border border-[#FF69004D]">
//           Enterprise Solutions
//         </h6>
//         <PageTitle
//           normalText="Transform Your Business with"
//           highlightText="Cutting-Edge Solutions"
          
//         />

//         <PageSubtitle
//           text="From cloud migration to cybersecurity, we deliver comprehensive infrastructure solutions that drive growth, efficiency, and innovation for enterprises worldwide."
//           className="mt-4 md:mt-7 text-[#CAD5E2] lg:w-[50%] mx-auto"
//         />

//         <div className="flex flex-col md:flex-row items-center justify-center gap-3  md:gap-4 mt-8 lg:mt-10">
//           <Link href="/meeting-scheduler">
//             <button className="bg-linear-to-r from-[#FF9500] to-[#F54900] text-white cursor-pointer text-sm md:text-base flex items-center gap-4 rounded-lg px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm ">
//               {/* Explore Solutions */}
//               Schedule Consultation
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
//             </button>
//           </Link>
//           {/* <Link href="">
//             <button className="hover:bg-[#FF9500] bg-white text-[#FF9500] hover:text-white cursor-pointer text-sm md:text-base border border-[#FF9500] flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
//               Schedule Consultation
//             </button>
//           </Link> */}
//         </div>

//         <div className="flex items-center justify-evenly lg:w-[60%] mx-auto my-9 lg:my-12">
//           {solutionstats.map((item, i) => (
//             <div key={i}>
//               <h3 className="text-2xl md:text-4xl text-[#FF8904] mb-2">
//                 {item.value}
//               </h3>
//               <p className="text-[#90A1B9] text-xs md:text-sm">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolutionBanner;

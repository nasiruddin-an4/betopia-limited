import Container from "@/components/layout/Container";
import CTAButton from "@/components/shared/button/CTAButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";


export default function ServiceCTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <Container>
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
         Ready to Transform Your Business?
        </h2>
        <PageSubtitle
          text="Let's discuss how our AI, cloud, and security services can drive your digital transformation"
          className="mt-6 md:mt-7 text-[#FFFFFFE5] max-w-[700px] mx-auto text-center"
        />
        <CTAButton />
      </div>
      </Container>
    </section>
  );
}

// import Link from 'next/link'
// import React from 'react'

// export default function ServiceCTA() {
//   return (
    
//     <section className="w-full bg-linear-to-r from-[#FF9500] to-[#E68600]">

//           <div className="py-10 md:py-23.25 flex flex-col items-center">
//             <h2 className="text-white text-center text-3xl md:text-4xl xl:text-[52px] font-bold leading-tight">
//             Ready to Transform Your Business?
//             </h2>

//             <p className="mt-6 md:mt-7 text-[#FFFFFFE5] text-lg md:text-xl xl:text-2xl max-w-[700px] mx-auto text-center">
//             Let&apos;s discuss how our AI, cloud, and security services can drive your digital transformation
//             </p>
//             <Link href="/meeting-scheduler"
//                 target="_blank">
//               <button
//                 className="mt-9.25 inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl cursor-pointer
//              transition"
//               >
//                 Book a Consultation
//                 <span className="text-lg">
//                   <svg
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
//                 </span>
//               </button>
//             </Link>
//           </div>

//     </section>
//   )
// }
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// export default function ServiceCTA() {
//   return (
//     <section className="w-full bg-linear-to-r from-[#020618] via-[#0F172B] to-[#441306]">
//       <div className="py-10 md:py-23.25 flex flex-col items-center">
//         <h2 className="text-white text-3xl text-center md:text-4xl lg:text-[56px]">
//           Ready to Transform Your Business?
//         </h2>

//         <p className="mt-6 text-[#CAD5E2]  text-base md:text-[23px] max-w-[700px] mx-auto text-center">
//          Let&apos;s discuss how our AI, cloud, and security services can drive your digital transformation
//         </p>
//         <Link href="/meeting-scheduler" >
//           <button
//             className="mt-9.25 inline-flex items-center gap-2 bg-linear-to-r from-[#FF9500] to-[#F54900] cursor-pointer text-white font-semibold px-4 py-3 rounded-[10px]
//              transition"
//           >
//             Schedule Consultation
//             <span className="text-lg">
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
//             </span>
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }

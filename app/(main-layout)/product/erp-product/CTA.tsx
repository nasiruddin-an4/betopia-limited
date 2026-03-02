import Container from "@/components/layout/Container";
import CTAButton from "@/components/shared/button/CTAButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <Container>
        <div className="py-10 md:py-23.25 flex flex-col items-center">
          <h2 className="text-white text-2xl md:text-4xl xl:text-[52px] text-center font-bold leading-tight">
            Transform Operations. GainVisibility. <br /> Scale with Confidence.
          </h2>
          <PageSubtitle
            text="Build for users who need transparency, control, and efficiency across departments."
            className="mt-6 md:mt-7 text-[#FFFFFFE5] max-w-225 mx-auto text-center"
          />
          <CTAButton />
        </div>
      </Container>
    </section>
  );
}

// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section className="w-full bg-linear-to-r from-[#FF9500] to-[#E68600]">
//       <div className="py-10 md:py-23.25 flex flex-col items-center">
//        <h2 className="text-white text-3xl md:text-4xl xl:text-[52px] text-center font-bold ">
//         Transform Operations. GainVisibility.  <br /> Scale with Confidence.
//         </h2>

//         <p className="mt-6 md:mt-7 text-[#FFFFFFE5]  text-base md:text-[23px] max-w-[700px] mx-auto text-center">
//         Built for leaders who need clarity, control, and confidence in every business decision.
//         </p>
//       <div className="flex justify-center gap-1  gap-5 mt-10">
//           <Link
//             href="/meeting-scheduler"
//             className="flex items-center cursor-pointer  bg-white text-[#FF9500] px-6 py-3 md:px-5 text-base rounded-[14px]"
//           >
//            Demo Request
//                <svg
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
//         </div>
//       </div>
//     </section>
//   );
// }

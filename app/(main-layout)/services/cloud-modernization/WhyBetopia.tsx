"use client";

import Container from "@/components/layout/Container";
import HeadingSix from "@/components/shared/heading/HeadingSix";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import Image from "next/image";

import { CloudwhyBetopiaFeatures } from "@/data/service";
import WhyBetopiaFeature from "@/components/shared/services/WhyBetopiaFeature";

export default function WhyBetopia() {
  return (
    <div className="bg-[#f7f5ff] py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-stretch">
          {/* Left image */}
          <div className="flex items-center justify-center relative">
            <div className="relative h-[420px] md:h-[600px] lg:h-full w-full">
              <Image
                src="/whyb.png"
                alt="why_betopia"
                fill
                className="object-cover rounded-xl"
                priority
              />

              <h1 className="absolute right-0 rounded-bl-xl rounded-tr-lg text-xl md:text-4xl text-[#45556C] bg-white p-4 font-bold">
                Why Betopia
              </h1>
            </div>
          </div>

          {/* Right content */}
          <div>
            <HeadingThree
              title="Why Betopia Limited for Cloud Modernization"
              className="text-[#0A0A0A]"
              center={false}
            />
            <HeadingSix
              title="Execution over promises. Results over noise."
              className="text-[#0A0A0A]"
              center={false}
            />

            <div className="mt-10 space-y-7">
              {CloudwhyBetopiaFeatures.map((item, index) => (
                <WhyBetopiaFeature
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}


// "use client";
// import Container from "@/components/layout/Container";
// import PageSubtitle from "@/components/shared/heading/pageSubtitle";
// import Image from "next/image";

// export default function WhyBetopia() {
//   return (
//     <div className="bg-[#f7f5ff] py-10 lg:py-20">
//       <Container>
//         <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20  items-stretch ">
//           <div className="flex items-center justify-center relative">
//             <div className="relative h-[420px] md:h-[600px] lg:h-full w-full">
//               <Image
//                 src="/whyb.png"
//                 alt="why_betopia"
//                 fill
//                 className="object-cover rounded-xl"
//                 priority
//               />

//               <h1 className="absolute rounded-bl-xl rounded-tr-lg right-0 text-xl md:text-4xl text-[#45556C] bg-white p-4 font-bold">
//                 Why Betopia
//               </h1>
//             </div>
//           </div>
//           {/*  */}
//           <div className="">
//             <div className="">
//               <PageSubtitle
//                 text="Betopia stands out by offering certified expertise,
//               industry-standard certifications, and tailored solutions that meet
//               the unique needs of various industries."
//                 className="text-[#000000CC] mt-5 lg:mt-0"
//               />
//               <PageSubtitle
//                 text=" We ensure top-tier security, compliance, and innovative cloud
//               services to help your business thrive in a competitive landscape."
//                 className="text-[#000000CC] mt-5 "
//               />

//               <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-10">
//                 <Image src="/whyb1.png" alt="badge" height={50} width={50} />

//                 <div>
//                   <h5 className="text-xl xl:text-[30px] font-semibold  text-black">
//                     Certified Cloud Expertise
//                   </h5>
//                   <PageSubtitle
//                     text="Certified cloud experts with AWS, Azure, GCP partnerships"
//                     className="text-[#000000CC] mt-1"
//                   />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-7">
//                 <Image src="/whyb2.png" alt="badge" height={50} width={50} />

//                 <div>
//                   <h5 className="text-xl xl:text-[30px] font-semibold  text-black">
//                     Industry-Standard Certifications
//                   </h5>
//                   <PageSubtitle
//                     text=" ISO 27001, SOC 2, and cloud competency certified"
//                     className="text-[#000000CC] mt-1"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg mt-7">
//               <Image src="/whyb3.png" alt="badge" height={50} width={50} />

//               <div>
//                 <h5 className="text-xl xl:text-[30px] font-semibold  text-black">
//                   Tailored Vertical Playbooks
//                 </h5>
//                 <PageSubtitle
//                   text=" Industry-specific vertical playbooks for healthcare, BFSI,
//                   manufacturing"
//                   className="text-[#000000CC] mt-1"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

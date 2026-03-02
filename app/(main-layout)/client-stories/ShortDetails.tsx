import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

const subtitles = [
  "Betopia Limited partners with ambitious organizations to scale technology, embrace innovation, and navigate change with clarity and confidence.",
  "From digital modernization and cloud transformation to AI-powered automation, we collaborate across industries and regions to help businesses improve performance and build continuously adaptive enterprises.",
  "Our client relationships are founded on shared goals, consistent delivery, and real impact growing stronger as our partners evolve and expand their digital ambitions.",
  "These partnerships are designed to move forward with change, adapt with technology, and deliver value at every stage of growth.",
];

export default function ShortDetails() {
  return (
    <Container>
      <div className="pt-10 lg:pt-20">
        <div className="space-y-3 lg:space-y-5">
          <h2 className="text-2xl md:text-4xl lg:text-[52px] font-semibold text-black mb-4 lg:mb-10">
            Powering Growth Through Scalable Technology and Trusted Partnerships
          </h2>

          {subtitles.map((text, index) => (
            <PageSubtitle
              key={index}
              text={text}
              className="text-gray-700 text-justify"
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

// import React from "react";

// export default function ShortDetails() {
//   return (
//     <div className="max-w-[1660px] w-11/12 mx-auto mt-5 lg:mt-28 lg:mb-16 px-4">
//       <div className=" space-y-5 ">
//         <h2 className="text-3xl md:text-4xl xl:text-[52px] font-semibold text-black mb-10">
//           Powering Growth Through Scalable Technology and Trusted Partnerships
//         </h2>
//         <p className="text-lg md:text-xl xl:text-2xl font-normal text-gray-700">
//           Betopia Limited partners with ambitious organizations to scale
//           technology, embrace innovation, and navigate change with clarity and
//           confidence.
//         </p>
//         <p className="text-lg md:text-xl xl:text-2xl font-normal text-gray-700">
//           From digital modernization and cloud transformation to AI-powered
//           automation, we collaborate across industries and regions to help
//           businesses improve performance and build continuously adaptive
//           enterprises.
//         </p>
//         <p className="text-lg md:text-xl xl:text-2xl font-normal text-gray-700">
//           Our client relationships are founded on shared goals, consistent
//           delivery, and real impact—growing stronger as our partners evolve and
//           expand their digital ambitions.
//         </p>
//         <p className="text-lg md:text-xl xl:text-2xl font-normal text-gray-700">
//           These partnerships are designed to move forward with change, adapt
//           with technology, and deliver value at every stage of growth.
//         </p>
//       </div>
//     </div>
//   );
// }

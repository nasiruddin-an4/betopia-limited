"use client";

import Image from "next/image";
import { useState } from "react";

const ReadMoreText = ({
  text,
  wordLimit = 20,
}: {
  text: string;
  wordLimit?: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  const words = text.split(" ");
  const isLong = words.length > wordLimit;

  const displayedText = expanded ? text : words.slice(0, wordLimit).join(" ");

  return (
    <p className="text-lg xl:text-xl text-[#6e6e6e] max-w-415 mx-auto mb-6">
      {displayedText}
      {isLong && !expanded && " "}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#FF9500] font-semibold ml-1 hover:underline cursor-pointer"
        >
          {expanded ? "Read less" : "..."}
        </button>
      )}
    </p>
  );
};

export default function BetopiaERP() {
  return (
    <div className=" py-10 lg:py-20">
      <div
        className="max-w-420 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20
                items-stretch px-4"
      >
        <div>
          <div className="">
            <h1 className="text-3xl md:text-4xl xl:text-[52px] text-[#45556C] font-semibold mb-4 md:mb-0">
              Betopia ERP
            </h1>
            <div className="flex xl:hidden">
              <ReadMoreText
                text="Modern enterprises need more than disconnected systems. Betopia ERP is a comprehensive,  enterprise-grade ERP platform designed to unify people, processes, data, and decision-making  across multi-branch and multi-location organizations—all within a secure, scalable, and  modular system.
           Whether deployed on the cloud or on-premise, Betopia ERP delivers operational visibility,  financial control, and real-time intelligence to help organizations scale with confidence.
           "
                wordLimit={55}
              />
            </div>

            <div className="hidden xl:flex 2xl:hidden text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
              <ReadMoreText
                text=" Modern enterprises need more than disconnected systems. Betopia
              ERP is a comprehensive, enterprise-grade ERP platform designed to
              unify people, processes, data, and decision-making across
              multi-branch and multi-location organizations—all within a secure,
              scalable, and modular system. Whether deployed on the cloud or
              on-premise, Betopia ERP delivers operational visibility, financial
              control, and real-time intelligence to help organizations scale
              with confidence.
           "
                wordLimit={65}
              />
            </div>

            <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
              Modern enterprises need more than disconnected systems. Betopia
              ERP is a comprehensive, enterprise-grade ERP platform designed to
              unify people, processes, data, and decision-making across
              multi-branch and multi-location organizations—all within a secure,
              scalable, and modular system.
            </p>
            <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
              Whether deployed on the cloud or on-premise, Betopia ERP delivers
              operational visibility, financial control, and real-time
              intelligence to help organizations scale with confidence.
            </p>
          </div>
        </div>

        {/* Image from right */}
        <div className="relative w-full  lg:h-full rounded-2xl overflow-hidden">
          <Image
            src="/product/betopia_erp2.jpg"
            alt="count_trust"
            width={706}
            height={514}
            className="object-cover rounded-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import React, { useState } from "react";

// const ReadMoreText = ({
//   text,
//   wordLimit = 20,
// }: {
//   text: string;
//   wordLimit?: number;
// }) => {
//   const [expanded, setExpanded] = useState(false);

//   const words = text.split(" ");
//   const isLong = words.length > wordLimit;

//   const displayedText = expanded ? text : words.slice(0, wordLimit).join(" ");

//   return (
//     <p className="text-lg xl:text-xl text-[#6e6e6e] max-w-[1660px] mx-auto mb-6">
//       {displayedText}
//       {isLong && !expanded && " "}
//       {isLong && (
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="text-[#FF9500] font-semibold ml-1 hover:underline cursor-pointer"
//         >
//           {expanded ? "Read less" : "..."}
//         </button>
//       )}
//     </p>
//   );
// };

// export default function BetopiaERP() {
//   return (
//     <div className=" py-10 lg:py-20">
//       <div
//         className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20
//                 items-stretch px-3 md:px-8"
//       >
//         <div>
//           <div className="">
//             <h1 className="text-3xl md:text-4xl xl:text-[52px] text-[#45556C] font-semibold">
//               Betopia ERP
//             </h1>
//             <div className="flex xl:hidden">
//               <ReadMoreText
//                 text="Modern enterprises need more than disconnected systems. Betopia ERP is a comprehensive,  enterprise-grade ERP platform designed to unify people, processes, data, and decision-making  across multi-branch and multi-location organizations—all within a secure, scalable, and  modular system.
//            Whether deployed on the cloud or on-premise, Betopia ERP delivers operational visibility,  financial control, and real-time intelligence to help organizations scale with confidence.
//            "
//                 wordLimit={55}
//               />
//             </div>

//             <p className="hidden xl:flex 2xl:hidden text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
//               Modern enterprises need more than disconnected systems. Betopia
//               ERP is a comprehensive, enterprise-grade ERP platform designed to
//               unify people, processes, data, and decision-making across
//               multi-branch and multi-location organizations—all within a secure,
//               scalable, and modular system. Whether deployed on the cloud or
//               on-premise, Betopia ERP delivers operational visibility, financial
//               control, and real-time intelligence to help organizations scale
//               with confidence.
//             </p>

//             <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
//               Modern enterprises need more than disconnected systems. Betopia
//               ERP is a comprehensive, enterprise-grade ERP platform designed to
//               unify people, processes, data, and decision-making across
//               multi-branch and multi-location organizations—all within a secure,
//               scalable, and modular system.
//             </p>
//             <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
//               Whether deployed on the cloud or on-premise, Betopia ERP delivers
//               operational visibility, financial control, and real-time
//               intelligence to help organizations scale with confidence.
//             </p>
//           </div>
//         </div>

//         {/* Image from right */}
//         <div className="relative w-full  lg:h-full rounded-2xl overflow-hidden">
//           <Image
//             src="/product/betopia_erp2.jpg"
//             alt="count_trust"
//             width={706}
//             height={514}
//             className="object-cover rounded-2xl mx-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

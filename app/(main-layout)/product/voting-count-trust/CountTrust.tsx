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

export default function CountTrust() {
  return (
    <div className=" py-10 lg:py-20">
      <div
        className="max-w-420 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20
                items-stretch px-4"
      >
        <div>
          <div className="">
            <h1 className="text-3xl md:text-4xl xl:text-[52px] text-[#45556C] font-semibold mb-5 md:mb-0">
              CountTrust
            </h1>
            <div className="2xl:hidden">
              <ReadMoreText
                text="CountTrust is an enterprise-grade online voting platform developed
              by Betopia to deliver secure, transparent, and configurable
              digital elections. Unlike generic SaaS voting tools, CountTrust is built for
              high-trust environments where controlled voting, auditability,
              compliance, and deployment flexibility are critical. Whether you are running an internal election for 50 members or
              planning a large-scale institutional vote, CountTrust ensures
              every vote is validated, protected, and counted with confidence."
                wordLimit={65}
              />
            </div>

            <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
              CountTrust is an enterprise-grade online voting platform developed
              by Betopia to deliver secure, transparent, and configurable
              digital elections.
            </p>
            <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
              Unlike generic SaaS voting tools, CountTrust is built for
              high-trust environments where controlled voting, auditability,
              compliance, and deployment flexibility are critical.
            </p>
            <p className="hidden 2xl:flex text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 lg:mt-10 text-justify">
              Whether you are running an internal election for 50 members or
              planning a large-scale institutional vote, CountTrust ensures
              every vote is validated, protected, and counted with confidence.
            </p>
          </div>
        </div>

        {/* Image from right */}
        <div className="relative w-full   lg:h-full rounded-2xl overflow-hidden">
          <Image
            src="/product/countabout2.jpg"
            alt="count_trust"
            width={806}
            height={514}
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
// "use client";
// import Image from "next/image";

// import React from "react";

// export default function CountTrust() {
//   return (
//     <div className="bg-[#fcf7f2] py-16">
//       <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-3 ">
//         <div>
//           <div className="">
//             <h1 className="text-3xl md:text-4xl xl:text-[52px] text-[#45556C] font-normal">
//               Count Trust
//             </h1>
//             <p className="text-lg md:text-xl xl:text-2xl font-normal text-[#45556C] leading-8 mt-5 text-justify">
//               Count Trust is a secure, enterprise-grade voting platform that
//               enables organizations to conduct elections with complete
//               confidence. From voter registration and ballot management to
//               hybrid voting and real-time results, Count Trust ensures
//               transparency, integrity, and compliance throughout the entire
//               election lifecycle.
//             </p>
//           </div>
//         </div>

//         {/* Image from right */}
//         <div>
//           <Image
//             className="shadow-2xl shadow-[#FF690033] rounded-sm"
//             src="/product/count_t.jpg"
//             alt="count_trust"
//             width={721}
//             height={425}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

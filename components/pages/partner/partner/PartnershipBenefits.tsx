"use client";

import Image from "next/image";
import { Globe, TrendingUp, ShieldCheck, Users, Zap } from "lucide-react";
import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";

const benefits = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Access enterprise clients worldwide",
    color: "bg-linear-to-r from-[#2B7FFF] to-[#155DFC]",
  },
  {
    icon: TrendingUp,
    title: "High Margins",
    desc: "Earn up to 40% per project",
    color: "bg-linear-to-r from-[#00C950] to-[#00A63E]",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Portfolio",
    desc: "Enterprise‑grade solutions ready to deploy",
    color: "bg-linear-to-r from-[#AD46FF] to-[#9810FA]",
  },
  {
    icon: Users,
    title: "Dedicated Guidance",
    desc: "Partner Success Manager for every account",
    color: "bg-linear-to-r from-[#F6339A] to-[#E60076]",
  },
  {
    icon: Zap,
    title: "Flexible Branding",
    desc: "Your brand or ours",
   color: "bg-linear-to-r from-[#FF9500] to-[#F54900]",
  },
];

export default function PartnershipBenefits() {
  return (
    <section className="">
   {/* Video Background */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/partner/benefit.mp4" type="video/mp4" />
      </video> */}
  {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}
      <div className="relative py-10 lg:py-20 max-w-[1675px] w-11/12 mx-auto px-4 xl:px-0">
        {/* Title */}
     <div className="lg:mb-10">
      <h2 className="text-2xl md:text-[52px] font-bold text-center text-[#414042]">
            Partnership <span className="text-[#FF9500]"> Benefits </span>
          </h2>
          <span className="block mx-auto mt-[21px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
     </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch">
  {/* Left image */}
  <div className="relative rounded-2xl overflow-hidden h-full">
    <Image
      src="/partner/benefits/benefit.svg"
      alt="Partnership"
      fill
      className="object-cover"
    />
  </div>

  {/* Right benefits */}
  <div className="space-y-5">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-[21px]  bg-[#45556C]  transition  p-[27px]   duration-300 ease-out
    hover:-translate-y-2"
                >
                  <div
                    className={`flex p-3 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <Icon className="text-white" size={30} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xl lg:text-2xl">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-lg md:text-xl mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import Image from "next/image";
// import { Globe, TrendingUp, ShieldCheck, Users, Zap } from "lucide-react";
// import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";

// const benefits = [
//   {
//     icon: Globe,
//     title: "Global Reach",
//     desc: "Access enterprise clients worldwide",
//     color: "bg-linear-to-r from-[#2B7FFF] to-[#155DFC]",
//   },
//   {
//     icon: TrendingUp,
//     title: "High Margins",
//     desc: "Earn up to 40% per project",
//     color: "bg-linear-to-r from-[#00C950] to-[#00A63E]",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Trusted Portfolio",
//     desc: "Enterprise‑grade solutions ready to deploy",
//     color: "bg-linear-to-r from-[#AD46FF] to-[#9810FA]",
//   },
//   {
//     icon: Users,
//     title: "Dedicated Guidance",
//     desc: "Partner Success Manager for every account",
//     color: "bg-linear-to-r from-[#F6339A] to-[#E60076]",
//   },
//   {
//     icon: Zap,
//     title: "Flexible Branding",
//     desc: "Your brand or ours",
//    color: "bg-linear-to-r from-[#FF9500] to-[#F54900]",
//   },
// ];

// export default function PartnershipBenefits() {
//   return (
//     <section className="relative w-full bg-[#070A0F] py-10 md:py-20 overflow-hidden">
//    {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/partner/benefit.mp4" type="video/mp4" />
//       </video>
//   {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-black/40" /> */}
//       <div className="relative max-w-[1400px] mx-auto px-4">
//         {/* Title */}
//         <UnderlineSectionTitle
//           title=" Partnership Benefits"
//           wrapperClassName="mb-[18px] md:mb-[62px] text-center text-white"
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* Left image */}
//           <div className="relative rounded-2xl overflow-hidden">
//             <Image
//               src="/partner/benefits/benefit.svg"
//               alt="Partnership"
//               width={967}
//               height={886}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right benefits */}
//           <div className="space-y-5">
//             {benefits.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={i}
//                   className="flex items-start gap-4 rounded-[21px]  border border-white/20 bg-white/10 backdrop-blur hover:bg-white/10 transition  p-[27px]   duration-300 ease-out
//     hover:-translate-y-2"
//                 >
//                   <div
//                     className={`flex p-3 items-center justify-center rounded-lg ${item.color}`}
//                   >
//                     <Icon className="text-white" size={30} />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold text-xl md:text-[28px]">
//                       {item.title}
//                     </h4>
//                     <p className="text-white/70 text-lg md:text-2xl mt-1">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

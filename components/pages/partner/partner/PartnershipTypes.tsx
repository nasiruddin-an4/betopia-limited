"use client";

import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const partners = [
  {
    type: "Sales Partner",
    icon: "/partner/t1.svg",
    brandUse: "Use Betopia Branding & Portfolio",
    revenue: "30%",
    fee: "$1,500 – $2,500 ",
    benefits: [
      "Training",
      "Marketing collaterals",
      "Partner Success Manager",
      "Sales enablement",
    ],
  },
  {
    type: "White-Label Partner",
    icon: "/partner/t2.svg",
    brandUse: "Operate under own Brand",
    revenue: "40%",
    fee: "$3,500 – $5,000",
    benefits: [
      "Full project delivery by Betopia",
      "Partner Success Manager",
      "Co-Marketing support",
      "Your branding on solutions",
    ],
  },
];

export default function PartnershipTypes() {
  return (
 <section className="relative text-white overflow-hidden">

  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/partner/type.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/77" />

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[1575px] mx-auto py-[60px]">
    <UnderlineSectionTitle
      title="Partnership Types"
      wrapperClassName="mb-[18px] md:mb-[37px] text-center text-white"
    />

    <p className="text-white/80 text-center text-lg md:text-2xl mb-7 px-4 md:px-0">
      Choose the partnership model that fits your business goals
    </p>

      {/* Table */}
      {/* <div className="overflow-x-auto rounded-[19px] border border-white/10  bg-transparent">
        <table className="w-full text-left">
          <thead className="bg-white/10 text-sm md:text-[21px] text-white">
            <tr>
              <th className="p-5">Type</th>
              <th className="p-5">Brand Use</th>
              <th className="p-5">Revenue Share</th>
              <th className="p-5">Partnership Fee</th>
              <th className="p-5">Key Benefits</th>
            </tr>
          </thead>

          <tbody>
            {partners.map((p, i) => (
              <tr
                key={i}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-5 ">
                    <div className="font-bold flex items-center gap-3 text-[21px]">

                 <Image src={p.icon} alt={p.type} width={23} height={23} />
                  {p.type}
                    </div>

                </td>

                <td className="text-[19px]  text-[#D1D5DC]">{p.brandUse}</td>

                <td className="text-[23px] font-bold text-[#FF9500]">
                  {p.revenue} <span className=" text-[#99A1AF] font-normal">of project value</span>
                </td>

                <td className=" font-bold text-[21px]">{p.fee} <span className="text-[#99A1AF font-normal"> / year</span></td>

                <td className=" space-y-2 py-7">
                  {p.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 ">
                      <FaRegCircleCheck className="sizew-[19px] text-[#05DF72]" />
                      {b}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
{/* TABLE (Desktop) */}
<div className="hidden md:block overflow-x-auto rounded-[19px] border border-white/10 bg-transparent">
  <table className="w-full text-left">
    <thead className="bg-white/10 text-xl md:text-[28px] text-white">
      <tr>
        <th className="p-5">Type</th>
        <th className="p-5">Brand Use</th>
        <th className="p-5">Revenue Share</th>
        <th className="p-5">Partnership Fee</th>
        <th className="p-5">Key Benefits</th>
      </tr>
    </thead>

    <tbody>
      {partners.map((p, i) => (
        <tr
          key={i}
          className="border-t border-white/10 hover:bg-white/5 transition"
        >
          <td className="p-5">
            <div className="font-bold flex items-center gap-3 text-lg md:text-2xl">
              <Image src={p.icon} alt={p.type} width={23} height={23} />
              {p.type}
            </div>
          </td>

          <td className="text-lg md:text-2xl text-[#D1D5DC]">{p.brandUse}</td>

          <td className="text-lg md:text-2xl font-bold text-[#FF9500]">
            {p.revenue}{' '}
            <span className="text-[#99A1AF] font-normal">
              of project value
            </span>
          </td>

          <td className="font-bold text-lg md:text-2xl">
            {p.fee}{' '}
            <span className="text-[#99A1AF] font-normal">/ year</span>
          </td>

          <td className="space-y-2 py-7">
            {p.benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2 text-lg md:text-2xl">
                <FaRegCircleCheck className="w-[19px] h-[19px] text-[#05DF72]" />
                {b}
              </div>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* MOBILE CARD VIEW */}
<div className="grid gap-5 md:hidden px-4">
  {partners.map((p, i) => (
    <div
      key={i}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4"
    >
      <div className="flex items-center gap-3 font-bold text-xl">
        <Image src={p.icon} alt={p.type} width={26} height={26} />
        {p.type}
      </div>

      <div className="text-[#D1D5DC]">
        <span className="font-semibold text-white text-lg">Brand Use: </span>
        {p.brandUse}
      </div>

      <div className="text-[#FF9500] font-bold text-lg">
        Revenue Share: {p.revenue}
        <span className="text-[#99A1AF] font-normal"> of project value</span>
      </div>

      <div className="font-bold text-lg">
        Partnership Fee: {p.fee}
        <span className="text-[#99A1AF] font-normal"> / year</span>
      </div>

      <div className="space-y-2 text-lg">
        <p className="font-semibold text-white">Key Benefits:</p>
        {p.benefits.map((b, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <FaRegCircleCheck className="w-[18px] h-[18px] text-[#05DF72]" />
            {b}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 px-4 md:px-0">
        {[
          {
            title: "White-Label Details",
            desc: "Learn more about our white-label partnership program",
            link: "https://white-label.betopialimited.com",
          },
          {
            title: "Co-Branded Details",
            desc: "Learn more about our co-branded partnership program",
            link: "https://co-branded.betopialimited.com",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group  p-6 md:p-10 rounded-[19px] border border-white/20 bg-white/10 backdrop-blur hover:bg-white/10 transition cursor-pointer"
          ><Link href={item.link} className="flex items-center justify-between">
            <div >
              <h4 className="font-semibold text-xl md:text-[28px]">{item.title}</h4>
              <p className="text-gray-400 text-lg md:text-2xl mt-1">{item.desc}</p>
            </div>
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
          </div>
        ))}
      </div>
</div>
     
    </section>
  );
}

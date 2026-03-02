import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface EngagementItem {
  title: string;
  duration: string;
  price: string;
  features: EngagementFeature[];
}

export const engagementData: EngagementItem[] = [
  {
    title: "Full-Time",
    duration: "160 hrs/month",
    price: "$3,500",
    features: [
      { text: "Dedicated developer" },
      { text: "40 hrs/week" },
      { text: "Direct communication" },
      { text: "Long-term commitment" },
    ],
  },
  {
    title: "Part-Time",
    duration: "80 hrs/month",
    price: "$2,000",
    features: [
      { text: "Flexible hours" },
      { text: "20 hrs/week" },
      { text: "Project-based" },
      { text: "Cost effective" },
    ],
  },
  {
    title: "Hourly",
    duration: "Flexible",
    price: "$30/hr",
    features: [
      { text: "Pay as you go" },
      { text: "No commitment" },
      { text: "Scalable" },
      { text: "On-demand" },
    ],
  },
];


export interface EngagementFeature {
  text: string;
}

interface EngagementCardProps {
  title: string;
  duration: string;
  price: string;
  features: EngagementFeature[];
  link?: string;
}

const EngagementCard: React.FC<EngagementCardProps> = ({
  title,
  duration,
  price,
  features,
  link = "",
}) => {
  return (
    <div className="group rounded-2xl border-2 border-gray-200 hover:border-[#FF9500] hover:shadow-xl shadow-[#e0cdff] p-9">
      <h5 className="text-[#0F172B] text-lg md:text-2xl lg:text-2xl font-normal  text-center">
        {title}
      </h5>

      <p className="text-[#62748E] text-xs md:text-sm lg:text-base my-3 font-normal  text-center">
        {duration}
      </p>

      <h3 className="text-center text-[#FF9500] text-3xl md:text-4xl lg:text-[41px]  font-normal my-4">
        {price}
      </h3>

      {features.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 ${index === 0 ? "mt-20" : "mt-3"}`}
        >
          <Image src="/icons/active.png" alt="icon" width={23} height={23} />
          <p className="text-[#45556C] text-sm md:text-base lg:text-2xl font-normal ">
            {item.text}
          </p>
        </div>
      ))}

      <Link href={link}>
        <button className="bg-[#F1F5F9] text-black w-full mt-20 group-hover:bg-[#FF9500] group-hover:text-white cursor-pointer rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
          Select Plan
        </button>
      </Link>
    </div>
  );
};



export default function OurEngagementModel() {
  return (
    <div id='pricing' className='max-w-[1480px] mx-auto py-20'>
      <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Our Engagement <span className='text-[#FF9500]'>Models</span> </h3>
      <p className='text-sm md:text-base lg:text-2xl font-normal font-robot text-center my-3 text-[#45556C]'>Flexible hiring options that fit your project needs and budget</p>
      {/*  */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-10'>
        {engagementData.map((item, index) => (
          <EngagementCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

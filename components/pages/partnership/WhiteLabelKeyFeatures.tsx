import Image from 'next/image';
import React, { ReactNode } from 'react'
interface OfferCardProps {
  icon: string;
  title: string;
  description: string;
}
const offersData = [
  {
    title: "End-to- End Delivery",
    description: "From requirement gathering to deployment, Betopia handles all technical aspects.",
    icon: "/icons/image 40.png",
  },
  {
    title: "Multi-Cloud Solutions",
    description: "Microsoft, AWS, Google Cloud solutions integrated and ready to deploy.",
    icon: "/icons/image 39.png",
  },
  {
    title: "Proprietary Products",
    description: "Automatically process, categorize, and optimize large datasets with AI algorithms.",
    icon: "/icons/image 41.png",
  },
  {
    title: "Dedicated Partner Success Manager",
    description: "Guiding every step of client engagement and delivery.",
    icon: "/icons/image 42.png",
  },
  {
    title: "Training & Enablement",
    description: "Access to Betopia’s portfolio, marketing materials, and product training.",
    icon: "/icons/icon.png",
  },
];


const OfferCard: React.FC<OfferCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-9 bg-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
      <Image src={icon} alt={title} width={56} height={56}/>
        <h5 className="text-base  md:text-xl lg:text-2xl font-medium  text-[#000000] my-[40px]">
          {title}
        </h5>
      <p className="text-xs md:text-sm lg:text-base font-normal  text-[#45556C] mt-10">
        {description}
      </p>
    </div>
  );
};



export default function WhiteLabelKeyFeatures() {
  return (
    <div className="bg-[#F5F3FF]">

      <div className='max-w-[1480px] mx-auto py-20'>
        <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Key <span className='text-[#FF9500]'>Features</span> </h3>
        {/*  */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10'>
          {offersData.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </div>
  )
}

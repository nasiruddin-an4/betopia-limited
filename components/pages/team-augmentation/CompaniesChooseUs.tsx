import React from 'react'
export interface ChooseUsItem {
  index: string;
  title: string;
  description: string;
  color: string;
}

export const chooseUsData: ChooseUsItem[] = [
  {
    index: "01",
    title: "Cost Savings",
    description: "Save up to 60% compared to hiring locally in the US",
    color: "#00C950",
  },
  {
    index: "02",
    title: "Quality Talent",
    description: "Access to top 5% of software engineers globally",
    color: "#2B7FFF",
  },
  {
    index: "03",
    title: "Time Zone Overlap",
    description: "Flexible working hours with US time zones",
    color: "#F0B100",
  },
  {
    index: "04",
    title: "English Proficiency",
    description: "Excellent communication skills in English",
    color: "#FF9500",
  },
];



interface ChooseUsCardProps {
  index: string;
  title: string;
  description: string;
  color: string; // hex color
}

const ChooseUsCard: React.FC<ChooseUsCardProps> = ({
  index,
  title,
  description,
  color,
}) => {
  return (
    <div
      className="rounded-2xl border-l-8 py-7 px-8 bg-white hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-r-8"
      style={{ borderColor: color }}
    >
      <h2
        className=" font-normal
        text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[52px] leading-tight"
        style={{ color }}
      >
        {index}
      </h2>

      <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] my-[46px]">
        {title}
      </h5>

      <p className="text-xs md:text-sm lg:text-2xl font-normal  text-[#45556C]">
        {description}
      </p>
    </div>
  );
};

export default function CompaniesChooseUs() {
  return (
     <div className='bg-[#FFF7ED]'> 
    <div className='max-w-[1480px] mx-auto py-20'>
            <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Why U.S. Companies <span className='text-[#FF9500]'>Choose Us</span> </h3> 
            
            {/*  */}
             <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-20'>
               {chooseUsData.map((item) => (
            <ChooseUsCard key={item.index} {...item} />
          ))}
             </div>
    </div>
    </div>
  )
}

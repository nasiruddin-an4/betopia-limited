import Image from 'next/image'
import React from 'react' 

export interface HowItWorkItem {
  step: string;
  title: string;
  description: string;
}

export const howItWorkData: HowItWorkItem[] = [
  {
    step: "01",
    title: "Tell Us Your Needs",
    description: "Share your project requirements and skill needs",
  },
  {
    step: "02",
    title: "Review Candidates",
    description: "We match you with pre-vetted developers within 48 hours",
  },
  {
    step: "03",
    title: "Interview & Select",
    description: "Interview candidates and choose the best fit",
  },
  {
    step: "04",
    title: "Start Building",
    description: "Onboard and start working within 2 weeks",
  },
];


interface HowItWorkCardProps {
  step: string;
  title: string;
  description: string;
}

const HowItWorkCard: React.FC<HowItWorkCardProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div className="rounded-2xl max-w-[341px] py-7 px-8 bg-[#1D293D80] border border-gray-700 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
      <h2
        className=" font-normal p-4 rounded-full bg-[#FF9500] w-fit
        text-xl md:text-2xl lg:text-2xl text-white leading-tight"
      >
        {step}
      </h2>

      <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-white my-[46px]">
        {title}
      </h5>

      <p className="text-xs md:text-sm lg:text-2xl font-normal  text-[#90A1B9]">
        {description}
      </p>
    </div>
  );
};
 




export default function HowItWork() {
  return (
    <div className='bg-[#0F172B]'> 
    <div className='max-w-[1480px] mx-auto py-20'>
            <h3 className='text-center text-white text-3xl md:text-5xl lg:text-[52px]  font-normal'>How It <span className='text-[#FF9500]'>Works</span> </h3> 
             <p className='text-sm md:text-base lg:text-2xl font-normal font-robot text-center my-3 text-[#CAD5E2]'>Get started with your dedicated development team in 4 simple steps</p>
           
{/*  */}
<div className='flex items-center mt-20 gap-2'>
 {howItWorkData.map((item, index) => (
            <React.Fragment key={index}>
              <HowItWorkCard {...item} />

              {index !== howItWorkData.length - 1 && (
                <Image
                  src="/icons/right_arrow.png"
                  alt="arrow"
                  width={27}
                  height={27}
                  className="hidden xl:block"
                />
              )}
            </React.Fragment>
          ))}

</div>
    </div>
    </div>
  )
}

import React, { ReactNode } from 'react'
interface OfferCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
const offersData = [
  {
    title: "Expert Developers",
    description: "Access to skilled engineers with 5+ years of experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M24.6445 32.3466V29.266C24.6445 27.6319 23.9953 26.0648 22.8399 24.9093C21.6844 23.7539 20.1173 23.1047 18.4832 23.1047H9.24133C7.60726 23.1047 6.04013 23.7539 4.88467 24.9093C3.72921 26.0648 3.08008 27.6319 3.08008 29.266V32.3466" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.6465 4.81812C25.9677 5.16063 27.1378 5.93217 27.9731 7.01162C28.8084 8.09107 29.2616 9.41732 29.2616 10.7822C29.2616 12.1471 28.8084 13.4733 27.9731 14.5528C27.1378 15.6322 25.9677 16.4038 24.6465 16.7463" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33.8885 32.3466V29.2659C33.8875 27.9008 33.4331 26.5747 32.5968 25.4957C31.7604 24.4168 30.5894 23.6462 29.2676 23.3049" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.8624 16.9435C17.2652 16.9435 20.0237 14.185 20.0237 10.7822C20.0237 7.37946 17.2652 4.62097 13.8624 4.62097C10.4597 4.62097 7.70117 7.37946 7.70117 10.7822C7.70117 14.185 10.4597 16.9435 13.8624 16.9435Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cost Effective",
    description: "Save up to 60% on development costs without compromising quality",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M18.4824 3.08069V33.8869" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.1856 7.70154H14.6333C13.2035 7.70154 11.8322 8.26953 10.8212 9.28055C9.81018 10.2916 9.24219 11.6628 9.24219 13.0926C9.24219 14.5224 9.81018 15.8937 10.8212 16.9047C11.8322 17.9157 13.2035 18.4837 14.6333 18.4837H22.3348C23.7647 18.4837 25.1359 19.0517 26.1469 20.0627C27.158 21.0738 27.7259 22.445 27.7259 23.8748C27.7259 25.3046 27.158 26.6759 26.1469 27.6869C25.1359 28.6979 23.7647 29.2659 22.3348 29.2659H9.24219" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fast Onboarding",
    description: "Get developers onboarded within 2 weeks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M18.4844 9.24182V18.4837L24.6456 21.5643" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4832 33.8869C26.9901 33.8869 33.8863 26.9907 33.8863 18.4838C33.8863 9.9769 26.9901 3.08069 18.4832 3.08069C9.97629 3.08069 3.08008 9.9769 3.08008 18.4838C3.08008 26.9907 9.97629 33.8869 18.4832 33.8869Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and data protection",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M30.8071 20.024C30.8071 27.7255 25.416 31.5763 19.0083 33.8098C18.6728 33.9235 18.3083 33.918 17.9763 33.7944C11.5532 31.5763 6.16211 27.7255 6.16211 20.024V9.24178C6.16211 8.83326 6.32439 8.44148 6.61326 8.15261C6.90212 7.86375 7.29391 7.70147 7.70242 7.70147C10.783 7.70147 14.6338 5.85309 17.314 3.51181C17.6403 3.23302 18.0554 3.07983 18.4846 3.07983C18.9138 3.07983 19.3289 3.23302 19.6553 3.51181C22.3508 5.86849 26.1862 7.70147 29.2668 7.70147C29.6753 7.70147 30.0671 7.86375 30.356 8.15261C30.6448 8.44148 30.8071 8.83326 30.8071 9.24178V20.024Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];


const OfferCard: React.FC<OfferCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-9 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
      <div className="p-4 bg-[#FF9500] rounded-xl w-full flex items-center gap-3">
        {icon}<h5 className="text-base md:text-xl font-normal  text-[#ffffff]">
          {title}
        </h5>
      </div>

      <p className="text-xs md:text-sm lg:text-base font-normal  text-[#45556C] mt-10">
        {description}
      </p>
    </div>
  );
};



export default function OurOffer() {
  return (
    <div className='max-w-[1480px] mx-auto py-20'>
      <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>What We <span className='text-[#FF9500]'>Offer</span> </h3>
      <p className='text-sm md:text-base lg:text-2xl font-normal font-robot text-center my-3 text-[#45556C]'>Everything you need to build exceptional software with remote teams</p>
      {/*  */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10'>
        {offersData.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  )
}

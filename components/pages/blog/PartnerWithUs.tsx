import React, { ReactNode } from 'react'
interface OfferCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
const offersData = [
  {
    title: "Industry Expertise",
    description: "15+ years of experience delivering enterprise solutions to global businesses",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M23.839 19.8545L26.1726 32.9872C26.1987 33.1418 26.177 33.3008 26.1104 33.4427C26.0437 33.5847 25.9354 33.703 25.7997 33.7817C25.6641 33.8604 25.5076 33.8958 25.3513 33.8832C25.195 33.8706 25.0462 33.8106 24.9249 33.7111L19.4106 29.5723C19.1444 29.3734 18.821 29.266 18.4887 29.266C18.1564 29.266 17.833 29.3734 17.5668 29.5723L12.0433 33.7096C11.9221 33.8089 11.7735 33.8688 11.6174 33.8814C11.4612 33.894 11.305 33.8587 11.1694 33.7803C11.0338 33.7018 10.9254 33.5838 10.8587 33.4421C10.7919 33.3004 10.7699 33.1417 10.7956 32.9872L13.1277 19.8545" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4841 21.5646C23.5882 21.5646 27.7259 17.4268 27.7259 12.3227C27.7259 7.21854 23.5882 3.08081 18.4841 3.08081C13.3799 3.08081 9.24219 7.21854 9.24219 12.3227C9.24219 17.4268 13.3799 21.5646 18.4841 21.5646Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Proven Results",
    description: "500+ successful implementations with measurable ROI and business growth",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M24.6445 10.7822H33.8864V20.0241" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33.8863 10.7822L20.7937 23.8749L13.0921 16.1733L3.08008 26.1854" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tailored Solutions",
    description: "Customized platforms designed to meet your specific business needs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M18.4832 33.8871C26.9901 33.8871 33.8863 26.9909 33.8863 18.4839C33.8863 9.97703 26.9901 3.08081 18.4832 3.08081C9.97629 3.08081 3.08008 9.97703 3.08008 18.4839C3.08008 26.9909 9.97629 33.8871 18.4832 33.8871Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4841 27.7257C23.5882 27.7257 27.7259 23.588 27.7259 18.4838C27.7259 13.3797 23.5882 9.24194 18.4841 9.24194C13.3799 9.24194 9.24219 13.3797 9.24219 18.4838C9.24219 23.588 13.3799 27.7257 18.4841 27.7257Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.483 21.5643C20.1844 21.5643 21.5636 20.1851 21.5636 18.4837C21.5636 16.7823 20.1844 15.4031 18.483 15.4031C16.7816 15.4031 15.4023 16.7823 15.4023 18.4837C15.4023 20.1851 16.7816 21.5643 18.483 21.5643Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Innovation First",
    description: "Cutting-edge technology and continuous platform updates and improvements",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M23.105 21.5646C23.4131 20.0243 24.1832 18.946 25.4155 17.7138C26.9558 16.3275 27.7259 14.3251 27.7259 12.3227C27.7259 9.87159 26.7522 7.52088 25.0191 5.78769C23.2859 4.05451 20.9352 3.08081 18.4841 3.08081C16.033 3.08081 13.6823 4.05451 11.9491 5.78769C10.2159 7.52088 9.24219 9.87159 9.24219 12.3227C9.24219 13.863 9.55025 15.7114 11.5527 17.7138C12.6309 18.792 13.5551 20.0243 13.8631 21.5646" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.8633 27.7258H23.1052" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4004 33.887H21.5616" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
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
        {icon}
        <h5 className="text-base  md:text-xl lg:text-2xl font-normal  text-[#ffffff]">
          {title}
        </h5>
      </div>
      <p className="text-xs text-center md:text-sm lg:text-base font-normal  text-[#45556C] mt-10">
        {description}
      </p>
    </div>
  );
};



export default function PartnerWithUs() {
  return (
    <div className="bg-[#FFF7ED]">

      <div className='max-w-[1480px] mx-auto py-20'>
        <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Why Partner<span className='text-[#FF9500]'>With Us?</span> </h3>
        {/*  */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10'>
          {offersData.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </div>
  )
}

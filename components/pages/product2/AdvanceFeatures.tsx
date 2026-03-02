import React, { ReactNode } from 'react'
interface OfferCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
const offersData = [
  {
    title: "Cloud Services",
    description: "Betopia Limited's Cloud Modernization & Managed Services empower businesses with tailored cloud solutions, optimizing performance, security",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M18.4842 33.8871C26.9911 33.8871 33.8873 26.9909 33.8873 18.4839C33.8873 9.97703 26.9911 3.08081 18.4842 3.08081C9.97727 3.08081 3.08105 9.97703 3.08105 18.4839C3.08105 26.9909 9.97727 33.8871 18.4842 33.8871Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4841 27.7257C23.5882 27.7257 27.7259 23.588 27.7259 18.4838C27.7259 13.3797 23.5882 9.24194 18.4841 9.24194C13.3799 9.24194 9.24219 13.3797 9.24219 18.4838C9.24219 23.588 13.3799 27.7257 18.4841 27.7257Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4839 21.5643C20.1853 21.5643 21.5646 20.1851 21.5646 18.4837C21.5646 16.7823 20.1853 15.4031 18.4839 15.4031C16.7826 15.4031 15.4033 16.7823 15.4033 18.4837C15.4033 20.1851 16.7826 21.5643 18.4839 21.5643Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity Services",
    description: "Betopia Limited's Cybersecurity & Compliance Solutions ensure robust digital protection and regulatory adherence for businesses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M30.8061 20.024C30.8061 27.7255 25.415 31.5763 19.0073 33.8098C18.6718 33.9235 18.3073 33.918 17.9753 33.7944C11.5522 31.5763 6.16113 27.7255 6.16113 20.024V9.24178C6.16113 8.83326 6.32342 8.44148 6.61228 8.15261C6.90114 7.86375 7.29293 7.70147 7.70145 7.70147C10.7821 7.70147 14.6329 5.85309 17.313 3.51181C17.6393 3.23302 18.0544 3.07983 18.4836 3.07983C18.9128 3.07983 19.328 3.23302 19.6543 3.51181C22.3498 5.86849 26.1852 7.70147 29.2658 7.70147C29.6743 7.70147 30.0661 7.86375 30.355 8.15261C30.6439 8.44148 30.8061 8.83326 30.8061 9.24178V20.024Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI Services",
    description: "Betopia Limited's Data, AI & Analytics Engineering services empower businesses by transforming raw data into actionable insights",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M6.1608 21.5647C5.86932 21.5657 5.58354 21.4839 5.33666 21.329C5.08978 21.174 4.89194 20.9522 4.76612 20.6892C4.6403 20.4263 4.59167 20.1331 4.62588 19.8436C4.66008 19.5541 4.77572 19.2803 4.95936 19.054L20.2085 3.34277C20.3228 3.21074 20.4787 3.12151 20.6505 3.08975C20.8223 3.05798 20.9998 3.08556 21.1538 3.16795C21.3078 3.25034 21.4293 3.38266 21.4982 3.54318C21.5671 3.70369 21.5795 3.88288 21.5331 4.05131L18.5757 13.324C18.4885 13.5574 18.4592 13.8085 18.4904 14.0557C18.5215 14.3029 18.6122 14.5388 18.7545 14.7433C18.8969 14.9478 19.0868 15.1146 19.3078 15.2296C19.5288 15.3446 19.7745 15.4042 20.0236 15.4034H30.8058C31.0973 15.4024 31.3831 15.4842 31.6299 15.6391C31.8768 15.7941 32.0747 16.0159 32.2005 16.2788C32.3263 16.5418 32.3749 16.835 32.3407 17.1245C32.3065 17.4139 32.1909 17.6878 32.0073 17.9141L16.7582 33.6253C16.6438 33.7574 16.4879 33.8466 16.3161 33.8783C16.1443 33.9101 15.9669 33.8825 15.8128 33.8001C15.6588 33.7177 15.5373 33.5854 15.4684 33.4249C15.3995 33.2644 15.3872 33.0852 15.4335 32.9168L18.3909 23.6441C18.4781 23.4107 18.5074 23.1596 18.4762 22.9124C18.4451 22.6652 18.3544 22.4293 18.2121 22.2248C18.0697 22.0203 17.8798 21.8535 17.6588 21.7385C17.4378 21.6235 17.1921 21.5639 16.943 21.5647H6.1608Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
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
    <div className="p-9 bg-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-105">
      <div className="p-4 bg-[#FF9500] rounded-xl w-full flex items-center gap-3 ">
        {icon}
        <h5 className="text-base md:text-xl font-normal  text-[#ffffff] ">
          {title}
        </h5>
      </div>
      <p className="text-xs md:text-sm lg:text-base font-normal  text-[#45556C] mt-10">
        {description}
      </p>
    </div>
  );
};
export default function AdvanceFeatures() {
  return (
    <div className="bg-[#f5faff]">

      <div className='max-w-[1480px] mx-auto py-20'>
        <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>In Case You  <span className='text-[#FF9500]'>Missed It… </span> </h3>
        <p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
        >
         Here’s a quick look at the services that make our products even more powerful.

        </p>
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

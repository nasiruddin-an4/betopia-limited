 
import React, { ReactNode } from "react"; 

export interface TechStackItem {
  title: string;
  icon: ReactNode;
  gradientClass?: string;
  bgColorClass?: string;
  items: string[];
}

export const techStacksData: TechStackItem[] = [
  {
    title: "Frontend",
    gradientClass: "bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <path d="M24.6465 27.7259L33.8884 18.4841L24.6465 9.24219" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.322 9.24219L3.08008 18.4841L12.322 27.7259" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["React", "Vue.js", "Angular", "Next.js"],
  },
  {
    title: "Backend",
    gradientClass: "bg-linear-to-r from-[#00C950] to-[#00BC7D]",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path d="M24.6428 30.8062V6.16119C24.6428 5.34416 24.3182 4.56059 23.7405 3.98286C23.1628 3.40513 22.3792 3.08057 21.5622 3.08057H15.4009C14.5839 3.08057 13.8003 3.40513 13.2226 3.98286C12.6449 4.56059 12.3203 5.34416 12.3203 6.16119V30.8062" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30.8057 9.24219H6.1607C4.45932 9.24219 3.08008 10.6214 3.08008 12.3228V27.7259C3.08008 29.4273 4.45932 30.8066 6.1607 30.8066H30.8057C32.5071 30.8066 33.8863 29.4273 33.8863 27.7259V12.3228C33.8863 10.6214 32.5071 9.24219 30.8057 9.24219Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
    items: ["Node.js", "Python", "Java", ".NET"],
  },
  {
    title: "Mobile",
    gradientClass: "bg-linear-to-r from-[#AD46FF] to-[#F6339A]",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path d="M18.4832 33.8868C26.9901 33.8868 33.8863 26.9906 33.8863 18.4837C33.8863 9.97678 26.9901 3.08057 18.4832 3.08057C9.97629 3.08057 3.08008 9.97678 3.08008 18.4837C3.08008 26.9906 9.97629 33.8868 18.4832 33.8868Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.4835 3.08057C14.5284 7.23349 12.3223 12.7487 12.3223 18.4837C12.3223 24.2187 14.5284 29.7339 18.4835 33.8868C22.4387 29.7339 24.6448 24.2187 24.6448 18.4837C24.6448 12.7487 22.4387 7.23349 18.4835 3.08057Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.08008 18.4839H33.8863" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
    items: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    title: "Cloud",
    bgColorClass: "bg-[#FF9500]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path d="M30.8071 20.0242C30.8071 27.7258 25.416 31.5766 19.0083 33.81C18.6728 33.9237 18.3083 33.9183 17.9763 33.7946C11.5532 31.5766 6.16211 27.7258 6.16211 20.0242V9.24202C6.16211 8.83351 6.32439 8.44172 6.61326 8.15286C6.90212 7.86399 7.29391 7.70171 7.70242 7.70171C10.783 7.70171 14.6338 5.85333 17.314 3.51206C17.6403 3.23326 18.0554 3.08008 18.4846 3.08008C18.9138 3.08008 19.3289 3.23326 19.6553 3.51206C22.3508 5.86874 26.1862 7.70171 29.2668 7.70171C29.6753 7.70171 30.0671 7.86399 30.356 8.15286C30.6448 8.44172 30.8071 8.83351 30.8071 9.24202V20.0242Z" stroke="white" strokeWidth="3.08063" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
    items: ["AWS", "Azure", "Google Cloud", "Docker"],
  },
];


interface TechStackCardProps {
  title: string;
  icon: ReactNode;
  gradientClass?: string; // for gradient bg
  bgColorClass?: string;  // for solid bg
  items: string[];
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  title,
  icon,
  gradientClass,
  bgColorClass,
  items,
}) => {
  return (
    <div className="p-9 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
      <div
        className={`p-4 rounded-xl w-full flex items-center gap-3 mb-10 ${
          gradientClass ? gradientClass : bgColorClass
        }`}
      >
        {icon}
      <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#ffffff]">
        {title}
      </h5>
      </div>


      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 mt-2 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
        >
          <p className="w-2 h-2 bg-[#FF9500] rounded-full"></p>
          {item}
        </div>
      ))}
    </div>
  );
};
 

export default function TechStacksWeMaster() {
    return (
        <div className='max-w-[1480px] mx-auto py-20'>
            <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Tech Stacks We <span className='text-[#FF9500]'>Master</span> </h3>
            <p className='text-sm md:text-base lg:text-2xl font-normal font-robot text-center my-3 text-[#45556C]'>Our developers are experts in modern technologies and frameworks</p>

            {/*  */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10'>
            {techStacksData.map((item, index) => (
          <TechStackCard key={index} {...item} />
        ))}

        </div>
        </div>
    )
}

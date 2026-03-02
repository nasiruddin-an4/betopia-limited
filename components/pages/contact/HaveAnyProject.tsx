
import React, { ReactNode } from "react";

export interface TechStackItem {
  title: string;
  icon: ReactNode;
  gradientClass?: string;
  bgColorClass?: string;
  items: string[];
}

export const projectStacksData: TechStackItem[] = [
  {
    title: "Office Location",
    gradientClass: "bg-linear-to-r from-[#2B7FFF] to-[#155DFC]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M30.9887 15.4947C30.9887 23.2312 22.4062 31.2884 19.5242 33.7768C19.2557 33.9787 18.9289 34.0879 18.593 34.0879C18.2571 34.0879 17.9302 33.9787 17.6617 33.7768C14.7797 31.2884 6.19727 23.2312 6.19727 15.4947C6.19727 12.2072 7.50324 9.05426 9.82789 6.72962C12.1525 4.40497 15.3054 3.099 18.593 3.099C21.8805 3.099 25.0334 4.40497 27.3581 6.72962C29.6827 9.05426 30.9887 12.2072 30.9887 15.4947Z" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5937 20.143C21.1609 20.143 23.2421 18.0618 23.2421 15.4946C23.2421 12.9273 21.1609 10.8462 18.5937 10.8462C16.0265 10.8462 13.9453 12.9273 13.9453 15.4946C13.9453 18.0618 16.0265 20.143 18.5937 20.143Z" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["123 Business Avenue", "Dhaka 1200, Bangladesh"],
  },
  {
    title: "Email Location",
    gradientClass: "bg-linear-to-r from-[#00C950] to-[#00A63E]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M34.0889 10.8462L20.1577 19.72C19.6849 19.9946 19.1479 20.1392 18.6012 20.1392C18.0545 20.1392 17.5175 19.9946 17.0448 19.72L3.09961 10.8462" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30.99 6.19788H6.19854C4.48705 6.19788 3.09961 7.58531 3.09961 9.2968V27.8904C3.09961 29.6019 4.48705 30.9893 6.19854 30.9893H30.99C32.7014 30.9893 34.0889 29.6019 34.0889 27.8904V9.2968C34.0889 7.58531 32.7014 6.19788 30.99 6.19788Z" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["info@betopia.com", "support@betopia.com"],
  },
  {
    title: "Phone",
    gradientClass: "bg-linear-to-r from-[#AD46FF] to-[#9810FA]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M21.4348 25.6716C21.7548 25.8185 22.1153 25.8521 22.457 25.7668C22.7986 25.6814 23.101 25.4823 23.3143 25.2021L23.8644 24.4816C24.153 24.0967 24.5273 23.7843 24.9576 23.5692C25.3879 23.354 25.8624 23.242 26.3435 23.242H30.9919C31.8138 23.242 32.602 23.5685 33.1832 24.1497C33.7643 24.7308 34.0908 25.5191 34.0908 26.341V30.9893C34.0908 31.8112 33.7643 32.5995 33.1832 33.1806C32.602 33.7618 31.8138 34.0883 30.9919 34.0883C23.5949 34.0883 16.5009 31.1498 11.2705 25.9194C6.04 20.6889 3.10156 13.5949 3.10156 6.19793C3.10156 5.37604 3.42806 4.58782 4.00922 4.00665C4.59038 3.42549 5.3786 3.099 6.20049 3.099H10.8489C11.6708 3.099 12.459 3.42549 13.0402 4.00665C13.6213 4.58782 13.9478 5.37604 13.9478 6.19793V10.8463C13.9478 11.3274 13.8358 11.8019 13.6206 12.2322C13.4055 12.6625 13.0931 13.0368 12.7082 13.3255L11.9831 13.8693C11.6986 14.0865 11.4981 14.3955 11.4157 14.7438C11.3332 15.092 11.3738 15.4581 11.5306 15.7798C13.6483 20.0809 17.1311 23.5594 21.4348 25.6716Z" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["+880 1234-567890", "+880 9876-543210"],
  },
  {
    title: "Website URL",
    bgColorClass: "bg-linear-to-r from-[#FF6900] to-[#F54900]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M18.5942 34.0883C27.1517 34.0883 34.0889 27.1511 34.0889 18.5936C34.0889 10.0362 27.1517 3.099 18.5942 3.099C10.0368 3.099 3.09961 10.0362 3.09961 18.5936C3.09961 27.1511 10.0368 34.0883 18.5942 34.0883Z" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5963 3.099C14.6176 7.27659 12.3984 12.8246 12.3984 18.5936C12.3984 24.3627 14.6176 29.9107 18.5963 34.0883C22.575 29.9107 24.7941 24.3627 24.7941 18.5936C24.7941 12.8246 22.575 7.27659 18.5963 3.099Z" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.09961 18.5936H34.0889" stroke="white" strokeWidth="3.09893" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["www.betopia.com", "www.betopia.io"],
  },
];


interface ProjectCardProps {
  title: string;
  icon: ReactNode;
  gradientClass?: string; // for gradient bg
  bgColorClass?: string;  // for solid bg
  items: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  icon,
  gradientClass,
  bgColorClass,
  items,
}) => {
  return (
    <div className="p-9 rounded-2xl border-2 border-gray-200 bg-white hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
      <div
        className={`p-4 rounded-xl w-full flex items-center gap-3 ${gradientClass ? gradientClass : bgColorClass
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
          className="flex items-center mt-10 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
        >
          {item}
        </div>
      ))}
    </div>
  );
};


export default function HaveAnyProject() {
  return (
    <div className="bg-[#FFF7ED]">

      <div className='max-w-[1480px] mx-auto py-20'>
        <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Tech Stacks We <span className='text-[#FF9500]'>Master</span> </h3>
        <h2
          className=" font-normal text-[#F54900] text-center my-5
          text-3xl sm:text-4xl md:text-5xl lg:text-[41px]  leading-tight"
        >
          Work Together
        </h2>
        {/*  */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10'>
          {projectStacksData.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}

        </div>

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.063726532996!2d90.40892969019212!3d23.780744945900192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70656402a31%3A0xc98d276e49087864!2sKaderia%20Tower!5e0!3m2!1sen!2sbd!4v1764482111654!5m2!1sen!2sbd" className="mx-auto my-20 p-3 bg-[#F1F5F9] rounded-2xl border border-gray-900 h-[750px] lg:w-[1400px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  )
}

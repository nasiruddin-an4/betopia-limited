import Image from "next/image";
import { ReactNode } from "react";
export interface WhyBetopiaItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface WhyBetopiaContent {
  heading: string;
  highlight: string;
  image: string;
  items: WhyBetopiaItem[];
}

interface WhyBetopiaProps {
  content: WhyBetopiaContent;
}

export default function WhyBetopia({ content }: WhyBetopiaProps) {
  return (
    <div className="max-w-[1500px] mx-auto bg-white py-10">
      <h1 className="text-3xl md:text-4xl xl:text-[52px] text-black text-center font-bold">
        {content.heading}{" "}
        <span className="text-[#FF9500]">{content.highlight}</span>
      </h1><div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-6 md:mt-10 px-4 md:px-0">
        <Image className="rounded-2xl mx-auto" src={content.image} alt="why_betopia" width={600} height={377} />

        <div className="md:space-y-20 space-y-6 px-4 lg:px-0 mt-6 md:mt-0">
          {content.items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <div className="flex items-center justify-center bg-[#FFEDD4]  min-w-14 h-14 md:w-[55px] md:h-[55px]  rounded-full">
                {item.icon}
              </div>

              <div>
                <h6 className="text-lg md:text-xl xl:text-2xl text-black font-bold">
                  {item.title}
                </h6>
                <p className="text-lg md:text-xl  text-[#45556C] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    <div className="max-w-[1560px] w-11/12 mx-auto px-4 bg-white py-10 lg:py-20">
      <h1 className="text-3xl lg:text-4xl xl:text-[52px] text-black text-center font-bold">
        {content.heading}{" "}
        <span className="text-[#FF9500]">{content.highlight}</span>
      </h1>
      <div className="w-20 h-1 bg-[#FF9500] mx-auto my-3" />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 lg:gap-14 mt-6 md:mt-10">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[300px] lg:h-full rounded-xl overflow-hidden">
          <Image
            src={content.image}
            alt="why_betopia"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 lg:space-y-10 px-2 lg:px-0">
          {content.items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex items-center justify-center bg-[#FFEDD4] min-w-14 h-14 rounded-full">
                {item.icon}
              </div>

              <div>
                <h6 className="text-lg md:text-xl xl:text-2xl text-black font-bold">
                  {item.title}
                </h6>
                <p className="text-lg md:text-xl text-[#45556C]">
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

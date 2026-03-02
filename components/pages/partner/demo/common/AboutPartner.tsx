import Image from "next/image";
import React from "react";


export interface WhiteLabelItem {
  id: number;
  href: string;
  title: string;
  description: string;
}

interface WhiteLabelSectionProps {
  heading: string;
  items: WhiteLabelItem[];
}

const AboutPartner: React.FC<WhiteLabelSectionProps> = ({
  heading,
  items,
}) => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-[1475px] mx-auto ">
        {/* Section Title */}
        <div className="text-center mb-[64px]">
          <h2 className="text-2xl md:text-[32PX] font-bold text-[#0F172A]">
            {heading}
          </h2>
          <span className="block w-20 h-[3px] bg-[#FF9500] mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F3F4F6] rounded-2xl p-4 md:p-[33px] shadow-md hover:shadow-lg transition-all"
            >
              <Image src={item.href} alt={item.title} width={64} height={64} className="mb-6"/>

              <h4 className="text-lg md:text-[20px] font-bold text-[#0A0A0A] mb-3">
                {item.title}
              </h4>

              <p className="text-sm md:text-base text-[#4A5565] leading-[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartner;

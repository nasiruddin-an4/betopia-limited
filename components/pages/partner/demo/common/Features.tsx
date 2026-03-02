import Image from "next/image";
import React from "react";
import FeatureCard from "./FeatureCard";


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

const Features: React.FC<WhiteLabelSectionProps> = ({
  heading,
  items,
}) => {
  return (
    <section className="bg-white py-10 md:py-[64px]">
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
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

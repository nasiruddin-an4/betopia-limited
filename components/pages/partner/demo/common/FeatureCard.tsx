import Image from "next/image";
import React from "react";

export interface WhiteLabelItem {
  id: number;
  href: string;
  title: string;
  description: string;
}

interface FeatureCardProps {
  item: WhiteLabelItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
  return (
    <div className="bg-white border border-[#F3F4F6] rounded-2xl p-4 md:p-[33px] shadow-md hover:shadow-lg transition-all">
      <Image
        src={item.href}
        alt={item.title}
        width={64}
        height={64}
        className="mb-6"
      />

      <h4 className="text-lg md:text-[20px] font-bold text-[#0A0A0A] mb-3">
        {item.title}
      </h4>

      <p className="text-sm md:text-base text-[#4A5565] leading-[26px]">
        {item.description}
      </p>
    </div>
  );
};

export default FeatureCard;

import Image from "next/image";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import HeadingSix from "@/components/shared/heading/HeadingSix";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

type WhatWeDoCardProps = {
  image: string;
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

export default function WhatWeDoCard({
  image,
  iconBg,
  icon,
  title,
  subtitle,
  description,
}: WhatWeDoCardProps) {
  return (
    <div className="rounded-xl bg-white shadow-lg overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative">
        <div
          className={`absolute bottom-5 left-5 ${iconBg} rounded-xl flex items-center justify-center w-14 h-14 z-10`}
        >
          {icon}
        </div>

        <Image
          src={image}
          alt={title}
          width={714}
          height={258}
          className="w-full h-[180px] md:h-[250px] 2xl:h-[300px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-7">
        {/* <HeadingThree title={title} className="text-[#0A0A0A]" center={false} /> */}
        <HeadingSix title={title} className="text-[#0A0A0A]" center={false} />
        <PageSubtitle
          text={subtitle}
          className="mt-2 "
        />
        <p className="mt-2 text-[#4A5565] text-lg">{description}</p>
      </div>
    </div>
  );
}

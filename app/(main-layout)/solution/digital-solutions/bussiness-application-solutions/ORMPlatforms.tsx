import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";

interface PlatformItem {
  image: string;
  title: string;
  description: string;
}

interface PlatformsGridSectionProps {
  normalText: string;
  highlightText: string;
  items: PlatformItem[];
  containerClassName?: string;
}

export default function ORMPlatforms({
  normalText,
  highlightText,
  items,
  containerClassName = "",
}: PlatformsGridSectionProps) {
  return (
    <section className={`max-w-[1680px] w-11/12 mx-auto px-4 ${containerClassName}`}>
      <SectionTitle
        normalText={normalText}
        highlightText={highlightText}
        className="text-center"
      />

      <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-[#E2E8F0] shadow-sm
              transition-all duration-300 flex flex-col items-center justify-center
              hover:shadow-md hover:-translate-y-1"
          >
            <div className="mb-6">
              <Image
                src={item.image}
                alt={item.title}
                width={37}
                height={69}
                className="object-contain h-[69px] w-full"
              />
            </div>

            <h5 className="text-lg md:text-xl lg:text-2xl text-[#0F172B] mb-2 text-center">
              {item.title}
            </h5>

            <p className="text-base lg:text-xl text-center text-[#45556C]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

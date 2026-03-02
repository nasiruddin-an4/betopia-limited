import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { coBrandedFeatures } from "@/data/CoBrandedFeatures";

import Image from "next/image";

export default function CoBrandedFeatures() {
  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-0 overflow-hidden max-w-[1674px] mx-auto">
      <UnderlineSectionTitle
        title="Key Features"
        wrapperClassName="mb-6 md:mb-[43px] text-center text-[#4A5565]"
      />

      {/* GRID ITEMS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[30px]">
        {coBrandedFeatures.map((item) => (
          <div
            key={item.id}
            className="relative w-full md:w-[541px] h-full md:h-[446px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={541}
              height={446}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

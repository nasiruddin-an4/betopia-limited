import EnterpriseTalentCard from "@/components/pages/resource/enterprise-talent-card/EnterpriseTalentCard";
import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { whoPartner } from "@/data/whyPartner";

import Image from "next/image";
import PartnerCard from "./PartnerCard";

export default function WhoPartner() {
  return (
    <section className="w-11/12 pb-10 lg:pb-20 px-4 md:px-2 overflow-hidden max-w-[1674px] mx-auto">
      <UnderlineSectionTitle
        title="Who Can Partner"
        wrapperClassName="mb-6 md:mb-[43px] text-center text-[#4A5565]"
      />

      {/* GRID ITEMS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-[30px]">
        {whoPartner.map((item) => (
           <PartnerCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        bgImage={item.image}
                        className="w-full  2xl:w-[100%] h-[363px]"
                      />
          // <div
          //   key={item.id}
          //   className="relative w-full md:w-[541px] h-full md:h-[446px]"
          // >
          //   <Image
          //     src={item.image}
          //     alt={item.title}
          //     width={547}
          //     height={451}
          //     className="absolute inset-0 w-full h-full object-cover rounded-xl"
          //   />
          // </div>
        ))}
      </div>
    </section>
  );
}

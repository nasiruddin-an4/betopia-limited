import EnterpriseTalentCard from "@/components/pages/resource/enterprise-talent-card/EnterpriseTalentCard";
import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { whyPartner } from "@/data/whyPartner";

export default function WhyPartner() {
  const firstItems = whyPartner.slice(0, -2);
  const lastItems = whyPartner.slice(-2);

  return (
    <section className="bg-[#F0F5F8]">
      <div className="w-11/12 py-10 pb-[68px] md:pt-[62px] px-4 md:px-0 overflow-hidden max-w-[1678px] mx-auto">

        <UnderlineSectionTitle
          title="Why Partner with Betopia"
          wrapperClassName="mb-[18px] text-center text-[#4A5565]"
        />

        <p className="text-[#4A5565] text-center text-lg md:text-2xl mb-6 md:mb-16">
          Join a winning ecosystem designed for mutual growth and success
        </p>

        {/* GRID ITEMS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-[23px]">
          {firstItems.map(item => (
            <EnterpriseTalentCard
              key={item.id}
              title={item.title}
              description={item.description}
              bgImage={item.image}
              className="h-[363px]"    
            />
          ))}
        </div>

        {/* FLEX — LAST 2 CENTERED */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {lastItems.map(item => (
            <EnterpriseTalentCard
              key={item.id}
              title={item.title}
              description={item.description}
              bgImage={item.image}
              className="w-full md:w-[544px] h-[363px]"
            />
          ))}
        </div>

      </div>
    </section>
  );
}

import SectionTitle from "@/components/shared/SectionTitle";

interface WhyChooseItem {
  title: string;
  description: string;
  image: React.ReactNode;
  bgcolor?: string;
}

interface WhyChooseSectionProps {
  normalText: string;
  highlightText: string;
  data: WhyChooseItem[];
  className?: string;
  gridCols?: string;
}

export default function WhyChooseSection({
  normalText,
  highlightText,
  data,
  className = "",
  gridCols = "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
}: WhyChooseSectionProps) {
  return (
    <section className={`py-10 lg:py-20 max-w-[1680px] w-11/12 mx-auto px-4 ${className}`}>
      <SectionTitle
        normalText={normalText}
        highlightText={highlightText}
        className="text-center"
      />

      <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-10" />

      <div className={`grid ${gridCols} gap-7 mt-10`}>
        {data.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-[#E2E8F0] shadow-sm
              transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div
              className={`w-full h-[61px] px-3  py-4 rounded-[19px] flex items-center gap-2
                mb-6 lg:mb-[43px] ${item.bgcolor ?? ""}`}
            >
              <div>{item.image}</div>

              <h5 className="text-lg md:text-xl  text-[#0F172B]">
                {item.title}
              </h5>
            </div>

            <p className="text-base lg:text-lg text-[#45556C]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

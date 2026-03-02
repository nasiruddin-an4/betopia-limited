"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

interface SolutionItem {
  title: string;
  description: string;
  image: string;
  points?: string[];
}

interface HighlyEffectiveProps {
  titleNormal: string;
  titleHighlight: string;
  description: string;
  solutions: SolutionItem[];
}

const HighlyEffective = ({
  titleNormal,
  titleHighlight,
  solutions,
}: HighlyEffectiveProps) => {
  return (
    <section className=" bg-linear-to-r from-[#F8FAFC] to-[#EFF6FF]">
      <div className="max-w-[1660px] mx-auto py-10 md:py-20 px-3 md:px-8">
        {/* Section Title */}
        <div className="text-center ">
          <SectionTitle
            normalText={titleNormal}
            highlightText={titleHighlight}
          />
        </div><div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>

        {/* Cards */}
        <div className="mt-6 md:mt-[39px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[30px] px-4 lg:px-0">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-[#FEF9F6] rounded-xl  p-4 shadow-xl md:shadow-2xl
                         transition-all duration-300 hover:-translate-y-1 "
            >
              {/* Image */}
              <div className="relativeoverflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                 width={508}
                 height={302}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-4 md:mb-5">
                  {item.title}
                </h3>

                <p className="text-[#757575] text-lg md:text-xl mb-3 lg:mb-6">
                  {item.description}
                </p>

                {item.points && (
                  <ul className="space-y-1 lg:space-y-4 text-[#757575] text-lg md:text-xl ">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#757575]">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlyEffective;

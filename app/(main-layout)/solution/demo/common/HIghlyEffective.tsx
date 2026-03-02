"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

interface SolutionItem {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

interface HighlyEffectiveProps {
  titleNormal: string;
  titleHighlight: string;
  description: string;
  solutions: SolutionItem[];
  columns?: string; 
}

const HighlyEffective = ({
  titleNormal,
  titleHighlight,
  description,
  solutions,
  columns = "grid-cols-1 md:grid-cols-3 lg:grid-cols-4",
}: HighlyEffectiveProps) => {
  return (
    <section className="py-10 md:py-20 bg-linear-to-r from-[#FFF7ED] to-[#FFFFFF]">
      <Container>
        {/* Title */}
        <div className="text-center">
          <SectionTitle
            normalText={titleNormal}
            highlightText={titleHighlight}
          />
        </div>

        <p className="mt-4 md:mt-[25px] mb-8 md:mb-[65px] md:text-[20px] text-[#45556C] text-center">
          {description}
        </p>

        {/* Cards */}
        <div className={`relative grid ${columns} gap-[29px]`}>
          {solutions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white border-[1.12px] border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 p-4"
            >
              {/* Image */}
              <div className="relative h-[221.81px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="pt-6 pb-2">
                <h3 className="mb-1 text-xl text-[#FF9500]">
                  {item.title}
                </h3>
                <h3 className="mb-3 text-xl ">
                  {item.subtitle && (
                    <span className="text-[#0F172B]"> {item.subtitle}</span>
                  )}
                </h3>
                <p className="mb-5  text-[#45556C]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HighlyEffective;

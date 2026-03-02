"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { aboutstats } from "@/data/about";

export default function AboutStats() {
  return (
    <section className="pb-10 md:pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-[75px]">
          <SectionTitle normalText="About" highlightText="Us" />
          <p className="mt-3 md:mt-[27px] md:text-[21px] text-[#45556C]">
            Building the digital backbone for enterprises worldwide
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[37px] md:px-20">
          {aboutstats.map((item, index) => (
            <div
              key={index}
              className="
    group
    rounded-2xl border border-[#E2E8F0] bg-white
    p-6 md:p-[37px]
    shadow-sm
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:border-[#FF9500]/40
  "
            >
              <h3
                className="
      text-2xl md:text-[42px] text-[#FF9500]
      
    "
              >
                {item.value}
              </h3>

              <p className="mt-3 md:mt-[46px] md:text-[23px] font-medium text-[#0A1B3F]">
                {item.title}
              </p>

              <p className="mt-2 md:mt-11 text-sm md:text-[19px] leading-relaxed text-[#45556C]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

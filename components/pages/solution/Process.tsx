import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/pageSubtitle";
import Image from "next/image";
import React from "react";

export interface HowItWorkItem {
  step: string;
  title: string;
  description: string;
}

export const howItWorkData: HowItWorkItem[] = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We analyze current infrastructure, identify pain points, and understand your business goals",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Custom solution design tailored to your specific needs with clear milestones and timelines",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Expert deployment with minimal disruption to your operations and continuous communication",
  },
  {
    step: "04",
    title: "Optimization & Support",
    description:
      "Ongoing monitoring, optimization, and 24/7 support to ensure peak performance",
  },
];

interface HowItWorkCardProps {
  step: string;
  title: string;
  description: string;
}

const HowItWorkCard: React.FC<HowItWorkCardProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div
      className="h-full flex flex-col rounded-2xl py-7 px-8
      bg-[#1D293D80] border border-gray-700 shadow-sm
      transition-all duration-300 hover:shadow-md hover:-translate-y-1"
    >
      <h2 className="p-2 md:p-4 rounded-full bg-[#FF9500] w-fit text-white">
        {step}
      </h2>

      <h5 className="text-xl lg:text-2xl text-white my-5">{title}</h5>

      {/* stays flexible — always aligns bottom if space grows */}
      <p className=" text-[#90A1B9] mt-auto">{description}</p>
    </div>
  );
};

export default function Process() {
  return (
    <section className="bg-[#0F172B] py-10 md:py-20">
      <Container>
        <h3 className="text-center text-white text-3xl md:text-5xl lg:text-[52px]  font-bold">
          Our <span className="text-[#FF9500]">Process</span>{" "}
        </h3>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
        <PageSubtitle
          text="A proven methodology to deliver exceptional results"
          className="mt-4 md:mt-[19px] text-[#CAD5E2] text-center md:w-[50%] mx-auto"
        />

        {/*  */}
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-20 gap-6 lg:gap-2 items-stretch">
          {howItWorkData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 h-full">
                <HowItWorkCard {...item} />
              </div>

              {index !== howItWorkData.length - 1 && (
                <Image
                  src="/icons/right_arrow.png"
                  alt="arrow"
                  width={27}
                  height={27}
                  className="hidden xl:block self-center"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { ArrowRight } from "lucide-react";
import React from "react";

export interface HowItWorksStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: HowItWorksStep[];
  wrapperClassName?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  title,
  steps = [],
  wrapperClassName = "",
}) => {
  if (!steps.length) return null; 

  return (
    <section className={`bg-linear-to-br from-[#FFF5EA] to-[#FFFCF7]  py-10 md:py-20 ${wrapperClassName}`}>
      <div className="max-w-[1404px] w-11/12 mx-auto">
        <UnderlineSectionTitle
          title={title}
          wrapperClassName="mb-6 md:mb-[43px] text-center text-[#45556C]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 lg:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center  mx-auto h-fit">
              {/* Card */}
              <div className="relative border border-[#FFFFFF33] rounded-2xl p-[33px] bg-[#45556C] backdrop-blur-sm hover:border-[#FF9500]/40 transition-all duration-300 lg:w-[280px] h-[350px]">
                <div className="text-5xl font-bold text-[#FF9500]/20 mb-4">
                  {step.number}
                </div>

                <div className="bg-[#FF9500] rounded-[14px] p-[14px] w-fit mb-4">
                  <div className="text-white text-[28px]">{step.icon}</div>
                </div>

                <h3 className="text-white text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-[#D1D5DC] text-lg ">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="text-[#FF9500] text-2xl mx-3 hidden lg:block">
                  <ArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default HowItWorks;

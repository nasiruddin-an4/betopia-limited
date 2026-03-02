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
  if (!steps.length) return null; // optional guard

  return (
    <section className={`bg-linear-to-br from-[#101828] to-[#1E2939] py-10 md:py-20 ${wrapperClassName}`}>
      <div className="max-w-[1475px] mx-auto w-full">
        <UnderlineSectionTitle
          title={title}
          wrapperClassName="mb-6 md:mb-[43px] text-center text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Card */}
              <div className="relative border border-[#FFFFFF33] rounded-2xl p-[33px] bg-linear-to-br from-[#101828] to-[#1E2939] backdrop-blur-sm hover:border-[#FF9500]/40 transition-all duration-300 w-[280px] h-[326px]">
                <div className="text-5xl font-bold text-[#FF9500]/20 mb-4">
                  {step.number}
                </div>

                <div className="bg-[#FF9500] rounded-[14px] p-[14px] w-fit mb-4">
                  <div className="text-white text-[28px]">{step.icon}</div>
                </div>

                <h3 className="text-white text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-[#D1D5DC]">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="text-[#FF9500] text-2xl mx-3 hidden md:block">
                     <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="white"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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

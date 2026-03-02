import Image from "next/image";
import {  FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import Container from "../layout/Container";
import SectionTitle from "./SectionTitle";

export interface FAQItem {
  question: string;
  answer?: string;
}

interface FAQSectionProps {
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  learnMoreLink?: string;
  imageSrc: string;
  faqs: FAQItem[];
}
export default function FAQSection({
  title = "Frequently Asked",
  highlightedWord = "Questions",
  subtitle = "FAQ",
  imageSrc,
  faqs
}: FAQSectionProps) {
  return (
    <section className="py-10 lg:py-20 max-w-4xl w-11/12 mx-auto px-4 xl:px-0">
        <div>
          {subtitle && (
            <h6 className="w-fit mx-auto text-[#9810FA] mb-4 px-5 py-2 rounded-3xl bg-[#F3E8FF]">
              {subtitle}
            </h6>
          )}

          <div className="flex items-start justify-between mb-8">
           <h1 className={`text-3xl md:text-4xl xl:text-[52px] text-center mx-auto font-normal `}>
      <span className="text-[#0F172B]">Frequently Asked</span>{' '}
      <span className="bg-gradient-to-r from-[#AD46FF] to-[#F6339A] bg-clip-text text-transparent ">Questions</span>
    </h1>
          </div>
          <div className="gap-4 lg:gap-12 items-center">
          {/* <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center"> */}
            {/* Left Image */}
            {/* <div className="overflow-hidden">
              <Image
                src={imageSrc}
                alt="FAQ"
                width={651}
                height={670}
                className="object-cover w-full h-full md:h-[450px] lg:h-[670px] rounded-[20px]"
              />
            </div> */}

            {/* Right Content */}

            <div className="divide-y divide-gray-200 ">
              {faqs.map((item, i) => (
                <details key={i} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xl md:text-[28px] font-semibold text-[#101828] transition-colors">
                    {item.question}
                    <span className="ml-4 flex shrink-0 items-center justify-center group-open:hidden">
                      <FaPlus size={19} />
                    </span>
                    <span className="ml-4 hidden shrink-0 items-center justify-center group-open:flex">
                      <FiMinus size={19} />
                    </span>
                  </summary>

                  {item.answer && (
                    <p className="mt-4 text-lg md:text-2xl leading-relaxed text-[#364153] pr-8">
                      {item.answer}
                    </p>
                  )}
                </details>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}

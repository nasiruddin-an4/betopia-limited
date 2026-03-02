import Container from "@/components/layout/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { chooseData } from "@/data/solution";
import Image from "next/image";

export default function WhyChooseSolution() {
  return (
    <Container>
      <div className="pb-10 lg:pb-20  px-4 lg:px-0">
        <SectionTitle
          normalText="Why Choose"
          highlightText="Our Solutions"
          className="text-center"
        />
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10">
          {chooseData.map((offer, index) => (
            <div
              key={index}
              className="p-[28px] rounded-2xl border-2 border-gray-200 shadow-sm transition-all duration-300
      hover:shadow-md hover:-translate-y-1 "
            >
              <div className={`w-full h-[61px] p-3 rounded-[19px] flex items-center justify-center gap-2 mb-6 md:mb-[47px] ${offer.bgcolor}`}>
                <div>
                  
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={37}
                  height={37}
                  className="object-contain"
                />
                </div>
              <h5 className="text-base md:text-xl lg:text-[23px] text-[#0F172B] ">
                {offer.title}
              </h5>
              </div>
              <p className="text-xs md:text-base lg:text-[19px]  text-[#45556C]">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

// components/Technologies.tsx
import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/pageSubtitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { technologies } from "@/data/solution";

import Image from "next/image";
interface Technology {
  name: string;
  image: string;
}

const Technologies = () => {
  return (
    <section className="pb-10 lg:pb-20  px-4 lg:px-0">
      <Container>
     {/* Header */}
        <div className="text-center mb-10 lg:mb-[75px]">

        <SectionTitle normalText="Technologies We" highlightText="Master" />
<div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
        <PageSubtitle
          text="Industry-leading platforms and tools to build robust solutions"
          className="mt-4 md:mt-[19px] text-[#45556C] lg:w-[50%] mx-auto"
        />
        </div>
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-7 ">
          {technologies.map((tech: Technology) => (
         <div  key={tech.name} className="flex flex-col items-center justify-center gap-3 md:gap-5
      rounded-xl border border-[#E2E8F0] bg-white 
      px-6 py-5 shadow-sm transition-all duration-300
      hover:shadow-md hover:-translate-y-1 ">

      <div className="h-12 md:h-24 w-12 md:w-24 flex items-center justify-center">
        <Image
          src={tech.image}
          alt={tech.name}
          width={96}
          height={96}
          className="h-12 md:h-24 w-12 md:w-24 object-contain"
        />
      </div>

      <p className="text-base  text-[#314158]">
        {tech.name}
      </p>
    </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Technologies;

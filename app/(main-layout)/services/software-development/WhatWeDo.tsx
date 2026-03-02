"use client";

import Container from "@/components/layout/Container";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import WhatWeDoCard from "@/components/shared/services/WhatWeDoCard";
import { SoftwarewhatWeDoData } from "@/data/service";

export default function WhatWeDo() {
  return (
    <Container>
      <div className="py-10 lg:py-20">
        <HeadingTwo title="What We Do" />

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-9 items-stretch px-3 xl:px-0 mt-6 lg:mt-12">
          {SoftwarewhatWeDoData.map((item, index) => (
            <WhatWeDoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
}

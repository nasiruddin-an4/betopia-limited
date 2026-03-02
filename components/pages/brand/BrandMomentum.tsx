"use client";

import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

export default function BrandMomentum() {
  return (
    
    <section className="relative w-full h-auto py-10 md:h-[520px] overflow-hidden flex items-center">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/brand/1.mp4"  
        autoPlay
        loop
        muted
        playsInline
        />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
        <Container>
      <div className="relative z-10   text-white space-y-4">
        <p className="uppercase text-base text-white">
          Brand Momentum
        </p>

        <h2 className="text-xl xl:text-[36px] font-bold ">
          Betopia reaches a multi-million-dollar brand milestone
        </h2>
      <PageSubtitle
         text="Betopia Limited continues its upward growth trajectory, reaching a multi-million-dollar brand valuation driven by innovation-led services, global B2B engagements, and enterprise-grade technology delivery."
         className="text-white lg:w-[60%]"
      />
          <PageSubtitle
         text="Sustained focus on advanced engineering, customer success, and scalable digital solutions has strengthened Betopia’s brand presence across international markets, reinforcing its vision to become a globally recognized technology transformation company."
         className="text-white lg:w-[60%]"
      />
       
      </div>
    </Container>
    </section>
  );
}

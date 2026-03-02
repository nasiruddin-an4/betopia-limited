"use client";

import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";

export default function VisionSection() {
  return (
    <>
      <section className="py-10 lg:py-20">
        <Container>
          <div className="space-y-4 lg:space-y-6 text-[#1F1F1F]">
            <h2 className="text-[22px] md:text-[32px] lg:text-[52px] font-bold">
              Staying Ahead in a Rapidly Changing Digital World{" "}
            </h2>
            <PageSubtitle text="Organizations must go beyond digital adoption in today’s fast-changing global economy as they need to be parallelly intelligent. It’s been said that change is constant, and resilience comes from the ability to adapt in real time.               " />
            <PageSubtitle text="At Betopia Limited, we shape enterprises transform uncertainty into opportunity by building adaptive digital ecosystems by optimizing AI, cloud-native platforms, secure infrastructures, and data-driven decision intelligence." />
          </div>
        </Container>
      </section>

      <section className="relative w-full h-auto py-10 md:h-[520px] overflow-hidden flex items-center">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/adaptability/bg.jpg"
          alt="ad"
          width={1660}
          height={700}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <Container>
          <div className="relative z-10 text-white space-y-4">
            <h2 className="text-[22px] md:text-[32px] lg:text-[52px] font-bold">
              Built for Change. Designed for Growth.
            </h2>
            <PageSubtitle
              text="Betopia combines deep engineering expertise, global delivery capabilities, and strategic technology partnerships to help businesses modernize operations, optimize performance, and unlock new value streams."
              className="text-white lg:w-[60%]"
            />

            <PageSubtitle text="We don’t just engage in technology deployment, we also build future oriented enterprises that unfold with market demands, customer expectations, and operational complexity. " 
             className="text-white lg:w-[60%]"
             />
          </div>
        </Container>
      </section>
    </>
  );
}

"use client";

import Container from "@/components/layout/Container";
import HeadingSix from "@/components/shared/heading/HeadingSix";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import Image from "next/image";

import { SoftwarewhyBetopiaFeatures } from "@/data/service";
import WhyBetopiaFeature from "@/components/shared/services/WhyBetopiaFeature";

export default function WhyBetopia() {
  return (
    <div className="bg-[#f7f5ff] py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-stretch">
          {/* Left image */}
          <div className="flex items-center justify-center relative">
            <div className="relative h-[420px] md:h-[600px] lg:h-full w-full">
              <Image
                src="/whyb.png"
                alt="why_betopia"
                fill
                className="object-cover rounded-xl"
                priority
              />

              <h1 className="absolute right-0 rounded-bl-xl rounded-tr-lg text-xl md:text-4xl text-[#45556C] bg-white p-4 font-bold">
                Why Betopia
              </h1>
            </div>
          </div>

          {/* Right content */}
          <div>
            <HeadingThree
              title="Why Betopia Limited for Software Development"
              className="text-[#0A0A0A]"
              center={false}
            />
            <HeadingSix
              title="Engineering excellence. Business outcomes."
              className="text-[#0A0A0A]"
              center={false}
            />

            <div className="mt-10 space-y-7">
              {SoftwarewhyBetopiaFeatures.map((item, index) => (
                <WhyBetopiaFeature
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
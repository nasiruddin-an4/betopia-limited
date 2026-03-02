"use client";

import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

export default function VisionSection() {
  return (
    <section className=" py-10 md:py-20">
      <Container>
      <div className=" space-y-6 text-[#1F1F1F]">
        <h2 className="text-[28px] md:text-[32px] lg:text-[52px] font-bold text-[#171717] ">
          Technology that empowers growth securely, intelligently,
          globally.{" "}
        </h2>
        <PageSubtitle
          text="The technological phase of change is relentless in today’s AI driven world. Either businesses must adapt or perish. At Betopia, we believe technology should empower, not overwhelm. Founded in Bangladesh with a global vision, Betopia helps organizations transform data in accurate, secure, efficient and intelligent manner.    "
          className="text-[#414042] lg:text-justify"
        />
        <PageSubtitle
          text="In today’s AI-driven world, the pace of change is relentless. Businesses must adapt or risk lag behind. At Betopia, we believe that technology should empower, not overwhelm. Starting from the group up and founded in Bangladesh with a global vision, Betopia assists organizations transform securely, efficiently, and intelligently."
          className="text-[#414042] lg:text-justify"
        />

        <PageSubtitle
          text="We deliver secure, cloud-native, AI-powered platforms that drive modernization and growth. From Cloud Modernization and Cybersecurity to AI & Analytics and enterprise-grade products, our solutions are built for scale, compliance, and measurable impact."
          className="text-[#414042] lg:text-justify"
        />
        <PageSubtitle
          text="We have taken a simple strategy to accredit businesses and for that we have blended quite a few things such as profound technical expertise, vendor-neutral multi-cloud solutions, and innovation-focused delivery starting from startups to enterprises to unlock their full potential.        "
          className="text-[#414042] lg:text-justify"
        />
        <PageSubtitle
          text="At Betopia, we’re more than a technology partner rather we’re a strategic enabler of transformation, assisting organizations navigate complexity, embrace innovation, and thrive in the AI era."
          className="text-[#414042] lg:text-justify"
        />
        <PageSubtitle
          text="Talking Bangladesh to the World, we make enterprise technology smarter, secure, and accessible for every sophisticated business."
          className="text-[#414042] lg:text-justify"
        />
      </div>
      </Container>
    </section>
  );
}

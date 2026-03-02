"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "5000+",
    title: "Global Engineering Talent.",
    description:
      "Access a massive bench of specialized developers, architects, and AI experts to handle any project scale.",
  },
  {
    value: "60%",
    title: "Cost-to-Quality Advantage.",
    description:
      "Deliver enterprise-grade solutions at significantly lower rates than domestic development without compromising on quality.",
  },
  {
    value: "100%",
    title: "Zero Technical Liability.",
    description:
      "Betopia assumes full responsibility for delivery and warranties, ensuring the partner holds no technical or financial risk.",
  },
  {
    value: "300+",
    title: "Enterprise Success Stories.",
    description:
      "Proven track record across healthcare, BFSI, and manufacturing sectors with industry-leading global organizations.",
  },
];

/* ─── Animated Counter Hook ─── */
function useCountUp(target: string, duration = 2000, shouldStart = false) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!shouldStart) return;

    let frameId: number;
    const isRange = target.includes("–") || target.includes("-");
    const isPercent = target.endsWith("%");
    const isPlus = target.endsWith("+");

    if (isRange) {
      frameId = requestAnimationFrame(() => setDisplay(target));
    } else {
      const suffix = isPercent ? "%" : isPlus ? "+" : "";
      const cleanTarget = target.replace(/[%+]/g, "");
      const isM = cleanTarget.endsWith("M");
      const numStr = cleanTarget.replace("M", "");
      const numTarget = parseInt(numStr);
      const mSuffix = isM ? "M" : "";

      if (isNaN(numTarget)) {
        frameId = requestAnimationFrame(() => setDisplay(target));
      } else {
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(numTarget * eased);
          setDisplay(`${current}${mSuffix}${suffix}`);

          if (progress < 1) {
            frameId = requestAnimationFrame(animate);
          }
        };

        frameId = requestAnimationFrame(animate);
      }
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [shouldStart, target, duration]);

  return display;
}

function StatCard({
  value,
  title,
  description,
  shouldAnimate,
}: {
  value: string;
  title: string;
  description: string;
  shouldAnimate: boolean;
}) {
  const displayValue = useCountUp(value, 1800, shouldAnimate);

  return (
    <div className="bg-gray-50 rounded-3xl px-6 py-10 md:py-12 text-center flex flex-col items-center justify-start transition-colors duration-300 h-full">
      <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] leading-none mb-8">
        {displayValue}
      </p>
      <div className="flex flex-col gap-3">
        <p className="text-base md:text-[17px] font-bold text-[#111827] leading-tight">
          {title}
        </p>
        <p className="text-sm md:text-[14px] text-[#6b7280] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

const partnerLogos = [
  { src: "/partner/partner/a.svg", alt: "Partner 1" },
  { src: "/partner/partner/1.svg", alt: "Partner 2" },
  { src: "/partner/partner/ISO27001-logo.png", alt: "Partner 3" },
  { src: "/partner/partner/6.svg", alt: "Partner 4" },
];

const Hero = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const growSectionRef = useRef<HTMLDivElement>(null);
  const [isGrowVisible, setIsGrowVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (logosRef.current) observer.observe(logosRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    // Grow section observer
    const growObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGrowVisible(true);
            entry.target.classList.add("section-animate-in");
          }
        });
      },
      { threshold: 0.2 },
    );
    if (growSectionRef.current) growObserver.observe(growSectionRef.current);

    return () => {
      observer.disconnect();
      growObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* ─── Dark gradient background ─── */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a_0%,#1a2b4a_25%,#1e3a5f_50%,#162a4a_75%,#0f1e35_100%)]" />

        {/* ─── Gradient Circle Overlay (Bottom to Middle Curve) ─── */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large curved dome from bottom to middle */}
          <div
            className="absolute -left-1/2 bottom-0 w-[200%] h-[1000px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 800px 600px at 50% 100%, rgba(59, 130, 246, 0.5) 0%, rgba(30, 144, 255, 0.3) 25%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)",
            }}
          />

          {/* Secondary subtle glow - creates more depth */}
          <div
            className="absolute -left-1/4 bottom-0 w-[1200px] h-[700px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 900px 500px at 50% 100%, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.15) 35%, transparent 65%)",
            }}
          />

          {/* Accent glow on sides */}
          <div
            className="absolute -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ─── Main Content ─── */}
        <div className="relative z-10 container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-20 pt-48 pb-24">
            {/* ─── Left: Large Heading ─── */}
            <div ref={headingRef} className="hero-heading w-full lg:w-[60%]">
              <p className="text-black text-md mb-4 bg-amber-100/80 px-4 py-1 rounded-full w-fit backdrop-blur-2xl">
                Join the Betopia Partnership
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.2] tracking-tight text-white">
                Scale Your Business with <br />{" "}
                <span className="bg-linear-to-r from-[#FF9500] to-[#F54900] bg-clip-text text-transparent">
                  Asia&apos;s Largest AI Powerhouse.
                </span>
              </h1>
            </div>

            {/* ─── Right: Description + CTA ─── */}
            <div
              ref={contentRef}
              className="hero-content w-full lg:w-[40%] lg:pt-4"
            >
              <p className="text-[15px] md:text-base lg:text-[17px] leading-[1.7] text-gray-200 max-w-[480px]">
                Transform from a local service provider into a global digital
                powerhouse. Leverage our bench of 5,000+ engineers to deliver
                enterprise-grade AI, ERP, and Cloud solutions with zero delivery
                risk and high-margin recurring revenue.
              </p>

              {/* CTA + Reviews row */}
              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-5 md:gap-6">
                {/* CTA Button */}
                <Link
                  href="/partner-program/partner-form"
                  className="group inline-flex items-center justify-center gap-2 font-semibold text-sm md:text-[15px] text-[#0f172a] bg-[#FACC15] hover:bg-[#FDE047] px-6 py-3 md:px-8 md:py-3.5 rounded-full shadow-[0_4px_24px_rgba(250,204,21,0.3)] hover:shadow-[0_6px_32px_rgba(250,204,21,0.45)] transition-all duration-300"
                >
                  Become a Betopia Partners
                </Link>

                {/* Review avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {[
                      "from-[#FF9500] to-[#e08600]",
                      "from-[#F54900] to-[#d93e00]",
                      "from-[#2563eb] to-[#1d4ed8]",
                    ].map((gradient, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 md:w-9 md:h-9 rounded-full border-[2.5px] border-[#0f172a] bg-linear-to-br ${gradient} flex items-center justify-center`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="md:w-4 md:h-4"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm md:text-[15px] font-bold text-white leading-tight">
                      4.9/5{" "}
                      <span className="font-normal text-[#94a3b8] text-xs md:text-sm">
                        2,000+ reviews
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Trusted By Logo Bar ─── */}
        <div className="relative z-10 text-center">
          <div ref={logosRef} className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center py-6 md:py-8">
              {/* Left label */}
              <div className="flex items-center gap-20 text-center md:text-left shrink-0">
                <p className="text-md md:text-xl text-white font-medium leading-tight mb-6 md:mb-0">
                  Trusted by 100+
                  <br />
                  companies worldwide
                </p>
                <div className="hidden md:block w-px h-10 bg-white" />
              </div>

              {/* Logo marquee */}
              <div className="flex-1 overflow-hidden">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                  {partnerLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center transition-opacity duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={100}
                        height={36}
                        className="h-10 md:h-8 lg:h-12 w-auto object-contain invert brightness-0 contrast-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Hero Image Section with Floating Cards ─── */}
        <div
          ref={imageRef}
          className="hero-image relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-10 "
        >
          <div className="relative">
            {/* Main image container */}
            <div className="relative py-20 md:py-24 lg:py-28 overflow-hidden ">
              <Image
                alt="Betopia Partnership - Business Growth"
                className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[580px] object-cover border border-gray-200 rounded-2xl"
                src="/cseMeeting.png"
                width={1200}
                height={580}
                priority
              />
            </div>

            {/* ─── Floating Card: Company Balance (Top Right) ─── */}
            <div className="hidden md:block absolute -top-12 lg:top-20 -right-4 lg:-right-8 w-[280px] lg:w-[340px] bg-white rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.15)] p-6 lg:p-7 hero-float-card-1 z-30">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl lg:text-[28px] font-bold text-[#1a1a2e]">
                  $1,90,875
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#22c55e]">
                  +25% <span className="text-sm">↗</span>
                  <span className="text-[#94a3b8] font-medium ml-1">
                    this month
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111827]" />
                    <span className="text-xs lg:text-[13px] text-[#4b5563]">
                      Invest
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs lg:text-[13px] font-bold text-[#111827]">
                      $47,875
                    </span>
                    <span className="text-[10px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                      32% ↗
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#94a3b8]" />
                    <span className="text-xs lg:text-[13px] text-[#4b5563]">
                      Company Profit
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs lg:text-[13px] font-bold text-[#111827]">
                      $57,262
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Grow Business Section (after Hero) ─── */}
      <div className="relative w-full bg-white pt-16 pb-16 md:pb-20 lg:pb-28">
        <div
          ref={growSectionRef}
          className="grow-section max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-0"
        >
          {/* ─── Heading ─── */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-[#111827]">
              The impact we've created
              <br />
              for businesses
            </h2>
          </div>

          {/* ─── Stats Grid ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 px-4 md:px-0">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                title={stat.title}
                description={stat.description}
                shouldAnimate={isGrowVisible}
              />
            ))}
          </div>

          {/* ─── Testimonial Card ─── */}
          <div className="mt-8 md:mt-10 bg-gray-50 rounded-3xl md:rounded-[32px] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left: Quote */}
              <div className="flex-1 px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 flex flex-col justify-center">
                {/* Quote mark */}
                <div className="text-gray-300 text-6xl md:text-7xl font-serif leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] max-w-2xl">
                  Partnering with Betopia didn’t just give us a vendor; it gave
                  us a 5,000-person engineering bench. We now walk into
                  enterprise rooms with the delivery muscle of a global giant
                  and the de-risked confidence of a local firm.
                </p>
                <p className="text-sm text-gray-700 mt-6">
                  Our Strategic partner, <br></br>
                  <span className="font-bold">Ronald Vergara</span>
                </p>
              </div>

              {/* Right: Photo */}
              <div className="w-full md:w-[300px] lg:w-[500px]">
                <Image
                  src="/ron photo.png"
                  alt="Courtney - Founder at Overcut"
                  width={360}
                  height={400}
                  className="w-full h-[400px] md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Entrance Animations ─── */}
      <style jsx>{`
        .hero-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        .hero-logos {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.4s;
        }
        .hero-image {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.5s;
        }
        .hero-heading.hero-animate-in,
        .hero-content.hero-animate-in,
        .hero-logos.hero-animate-in,
        .hero-image.hero-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Floating card animations */
        .hero-float-card-1 {
          animation: floatCard1 4s ease-in-out infinite;
        }
        .hero-float-card-2 {
          animation: floatCard2 5s ease-in-out infinite;
        }
        @keyframes floatCard1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes floatCard2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        /* Grow section animation */
        .grow-section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .grow-section.section-animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Hero;

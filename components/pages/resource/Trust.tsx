'use client'
import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Image from "next/image";

const Trust = () => {
  const brands = [
    { src: "/partner/brand/1.svg", title: "ISO 27001", subtitle: "Information Security", w: 88, h: 88 },
    // { src: "/partner/brand/2.svg", title: "SOC 2", subtitle: "Type II Certified", w: 121, h: 78 },
    { src: "/partner/brand/3.svg", title: "Microsoft", subtitle: "Gold Partner", w: 179, h: 88 },
    { src: "/partner/brand/4.svg", title: "AWS", subtitle: "Advanced Tier", w: 88, h: 88 },
    { src: "/partner/brand/6.svg", title: "GCP", subtitle: "Partner", w: 176, h: 74 },
      { src: "/partner/brand/1.svg", title: "ISO 27001", subtitle: "Information Security", w: 88, h: 88 },
    // { src: "/partner/brand/2.svg", title: "SOC 2", subtitle: "Type II Certified", w: 121, h: 78 },
    { src: "/partner/brand/3.svg", title: "Microsoft", subtitle: "Gold Partner", w: 179, h: 88 },
    { src: "/partner/brand/4.svg", title: "AWS", subtitle: "Advanced Tier", w: 88, h: 88 },
    { src: "/partner/brand/6.svg", title: "GCP", subtitle: "Partner", w: 176, h: 74 },
  ];

  return (
    <section className="overflow-hidden pb-10 md:pb-20">
           <UnderlineSectionTitle
          title="Trusted & Certified"
          wrapperClassName="mb-[18px] md:mb-[62px] text-center text-[#101828]"
        />
      <div className="relative">
        {/* Marquee track */}
        <div className="flex animate-marquee gap-10 md:gap-[109px] px-4">
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="flex flex-col items-center text-center flex-shrink-0">
              <Image src={brand.src} alt={brand.title} width={brand.w} height={brand.h} />
              <h3 className="md:text-[19px] font-bold mt-[10px]">{brand.title}</h3>
              <p className="text-[#4A5565]">{brand.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Trust;
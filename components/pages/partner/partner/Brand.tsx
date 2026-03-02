'use client'
import Image from "next/image";

const Brand = () => {
  const brands = [
    { src: "/partner/brand/1.svg", title: "ISO 27001", subtitle: "Certified", w: 88, h: 88 },
    // { src: "/partner/brand/2.svg", title: "SOC 2", subtitle: "Compliant", w: 121, h: 78 },
    { src: "/partner/brand/3.svg", title: "Microsoft", subtitle: "Gold Partner", w: 179, h: 88 },
    { src: "/partner/brand/4.svg", title: "AWS", subtitle: "Advanced Partner", w: 88, h: 88 },
    { src: "/partner/brand/6.svg", title: "GCP", subtitle: "Partner", w: 176, h: 74 },
    { src: "/partner/brand/1.svg", title: "ISO 27001", subtitle: "Certified", w: 88, h: 88 },
    // { src: "/partner/brand/2.svg", title: "SOC 2", subtitle: "Compliant", w: 121, h: 78 },
    { src: "/partner/brand/3.svg", title: "Microsoft", subtitle: "Gold Partner", w: 179, h: 88 },
    { src: "/partner/brand/4.svg", title: "AWS", subtitle: "Advanced Partner", w: 88, h: 88 },
    { src: "/partner/brand/6.svg", title: "GCP", subtitle: "Partner", w: 176, h: 74 },
  ];



  return (
    <section className="relative overflow-hidden py-10 md:py-20 bg-white">
      
      {/* LEFT SHADOW */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-linear-to-r from-white to-transparent z-10" />

      {/* RIGHT SHADOW */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-linear-to-l from-white to-transparent z-10" />

      <div className="relative">
        {/* Marquee track */}
        <div className="flex animate-marquee gap-10 md:gap-[109px] px-4">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center flex-shrink-0"
            >
              <Image
                src={brand.src}
                alt={brand.title}
                width={brand.w}
                height={brand.h}
              />
              <h3 className="md:text-[19px] font-bold mt-[10px]">
                {brand.title}
              </h3>
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

export default Brand;
